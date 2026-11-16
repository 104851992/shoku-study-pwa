import AsyncStorage from '@react-native-async-storage/async-storage';
import {questions} from '../data/questions';

const KEY = '@shoku_study/progress_v1';
const DRAFT_KEY = '@shoku_study/session_draft_v1';
export type AnswerRecord = { attempts: number; correct: number; lastCorrect: boolean; lastAt: string };
export type DayRecord = { answered: number; correct: number; seconds: number };
export type ExamAnswer = {id:string; selected:number|null; correct:boolean; writing?:string};
export type ExamHistory = {
  id:string; at:string; grade:1|2|3; mode:'practice'|'mini'|'full';
  total:number; correct:number; seconds:number; answers:ExamAnswer[];
};
export type Progress = {
  firstDate: string;
  dailyGoal: number;
  answers: Record<string, AnswerRecord>;
  days: Record<string, DayRecord>;
  favorites: string[];
  history: ExamHistory[];
};

export function todayKey() {
  const d = new Date();
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
export function freshProgress(): Progress {
  return { firstDate: todayKey(), dailyGoal: 10, answers: Object.create(null) as Progress['answers'], days: Object.create(null) as Progress['days'], favorites: [], history: [] };
}
export async function loadProgress(): Promise<Progress> {
  const raw=await AsyncStorage.getItem(KEY);
  if (raw === null) return freshProgress();
  // A corrupt stored payload must never be silently replaced by empty progress.
  // Let the caller show a storage error and block autosave until recovery.
  let parsed: unknown;
  try { parsed=JSON.parse(raw); } catch { throw new Error('Invalid saved progress JSON; original data preserved'); }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Invalid saved progress structure; original data preserved');
  }
  const x=parsed as Partial<Progress>;
  // Reject malformed top-level collections rather than silently normalizing
  // them to empty collections and permanently overwriting the original.
  // Missing properties remain accepted for compatibility with older saves.
  for (const field of ['answers', 'days'] as const) {
    const value=x[field];
    if (value !== undefined && (!value || typeof value !== 'object' || Array.isArray(value))) {
      throw new Error(`Invalid saved progress ${field}; original data preserved`);
    }
  }
  for (const field of ['favorites', 'history'] as const) {
    const value=x[field];
    if (value !== undefined && !Array.isArray(value)) {
      throw new Error(`Invalid saved progress ${field}; original data preserved`);
    }
  }
  // Normalize persisted records: older releases and interrupted writes may leave
  // partial or invalid values. Never let malformed counters poison statistics.
  const validDate=(v:unknown):v is string=>{
    if(typeof v!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(v))return false;
    const [y,m,d]=v.split('-').map(Number);
    const date=new Date(0);date.setFullYear(y,m-1,d);
    return date.getFullYear()===y && date.getMonth()===m-1 && date.getDate()===d;
  };
  const validTimestamp=(v:unknown):v is string=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(v)&&Number.isFinite(Date.parse(v))&&new Date(v).toISOString()===v;
  const nonnegative=(v:unknown)=>typeof v==='number' && Number.isSafeInteger(v) && v>=0;
  // Null-prototype maps prevent question IDs such as __proto__ from changing
  // the prototype during legacy data loading; JSON serialization stays identical.
  const answers:Progress['answers']=Object.create(null) as Progress['answers'];
  if(x.answers && typeof x.answers==='object' && !Array.isArray(x.answers)){
    for(const [id,value] of Object.entries(x.answers)){
      if(!id || !value || typeof value!=='object' || Array.isArray(value))throw new Error('Invalid answer record; original data preserved');
      const r=value as Partial<AnswerRecord>;
      if(!nonnegative(r.attempts)||!nonnegative(r.correct)||(r.correct as number)>(r.attempts as number)||typeof r.lastCorrect!=='boolean'||!(r.lastAt===''||validTimestamp(r.lastAt)))throw new Error('Invalid answer counters; original data preserved');
      answers[id]=r as AnswerRecord;
    }
  }
  const days:Progress['days']=Object.create(null) as Progress['days'];
  if(x.days && typeof x.days==='object' && !Array.isArray(x.days)){
    for(const [date,value] of Object.entries(x.days)){
      if(!validDate(date)||!value||typeof value!=='object'||Array.isArray(value))throw new Error('Invalid daily record; original data preserved');
      const d=value as Partial<DayRecord>;
      if(!nonnegative(d.answered)||!nonnegative(d.correct)||!nonnegative(d.seconds)||(d.correct as number)>(d.answered as number))throw new Error('Invalid daily counters; original data preserved');
      days[date]=d as DayRecord;
    }
  }
  if(Array.isArray(x.favorites) && x.favorites.some(id=>typeof id!=='string'||!id.length))throw new Error('Invalid favorites; original data preserved');
  const favorites=Array.isArray(x.favorites)?[...new Set(x.favorites.filter((id):id is string=>typeof id==='string'&&id.length>0))]:[];
  // Validate nested exam answers as well: a valid history envelope can still
  // contain malformed answer rows that crash review screens or corrupt statistics.
  const validExamAnswer=(value:unknown):value is ExamAnswer=>{
    if(!value||typeof value!=='object'||Array.isArray(value))return false;
    const a=value as Partial<ExamAnswer>;
    return typeof a.id==='string'&&a.id.length>0&&
      (a.selected===null||(nonnegative(a.selected)))&&
      typeof a.correct==='boolean'&&
      (a.writing===undefined||typeof a.writing==='string');
  };
  const validExamHistory=(value:unknown):value is ExamHistory=>{
    if(!value||typeof value!=='object'||Array.isArray(value))return false;
    const h=value as Partial<ExamHistory>;
    return typeof h.id==='string'&&h.id.length>0&&
      validTimestamp(h.at)&&
      [1,2,3].includes(h.grade as number)&&
      ['practice','mini','full'].includes(h.mode as string)&&
      nonnegative(h.total)&&nonnegative(h.correct)&&
      (h.correct as number)<=(h.total as number)&&nonnegative(h.seconds)&&
      Array.isArray(h.answers)&&h.answers.every(validExamAnswer)&&
      new Set(h.answers.map(a=>a.id)).size===h.answers.length&&
      h.answers.length<=(h.total as number)&&
      h.answers.filter(a=>a.correct===true).length===h.correct&&
      h.answers.every(a=>{
        const q=questions.find(q=>q.id===a.id);
        // Older history may reference retired questions; preserve that history.
        if(!q)return true;
        if(q.grade!==h.grade)return false;
        return q.kind==='choice'
          ? a.selected!==null&&a.selected<q.options.length&&a.correct===(a.selected===q.answer)
          : a.selected===null;
      });
  };
  const history=Array.isArray(x.history)?x.history.filter(validExamHistory):[];
  if(Array.isArray(x.history) && history.length!==x.history.length)throw new Error('Invalid exam history; original data preserved');
  if(x.firstDate!==undefined && !validDate(x.firstDate))throw new Error('Invalid first date; original data preserved');
  if(x.dailyGoal!==undefined && !(Number.isInteger(x.dailyGoal)&&(x.dailyGoal as number)>0&&(x.dailyGoal as number)<=100))throw new Error('Invalid daily goal; original data preserved');
  return {firstDate:validDate(x.firstDate)?x.firstDate:todayKey(),
    dailyGoal:Number.isInteger(x.dailyGoal)&&(x.dailyGoal as number)>0&&(x.dailyGoal as number)<=100?x.dailyGoal as number:10,
    answers,days,favorites,history:history};
}
export async function saveProgress(p: Progress) { await AsyncStorage.setItem(KEY,JSON.stringify(p)); }
export async function clearProgress() { await AsyncStorage.removeItem(KEY); }
export function streak(days: Record<string,DayRecord>) {
  let count=0; const day=new Date();
  if (!days[todayKey()]?.answered) day.setDate(day.getDate()-1);
  while (count < 3650) {
    const k=`${day.getFullYear()}-${String(day.getMonth()+1).padStart(2,'0')}-${String(day.getDate()).padStart(2,'0')}`;
    if (!days[k]?.answered) break;
    count++; day.setDate(day.getDate()-1);
  }
  return count;
}

export type SessionDraft = {ids:string[];index:number;grade:1|2|3;mode:'practice'|'mini'|'full';correct:number;answered:number;began:number;responses:ExamAnswer[]};
export async function saveDraft(s:SessionDraft){await AsyncStorage.setItem(DRAFT_KEY,JSON.stringify(s));}
export async function clearDraft(){await AsyncStorage.removeItem(DRAFT_KEY);}
export async function loadDraft():Promise<SessionDraft|null>{
  const raw=await AsyncStorage.getItem(DRAFT_KEY);if(raw===null)return null;
  try{
    const x=JSON.parse(raw);
    if(!x||!Array.isArray(x.ids)||x.ids.length===0||!x.ids.every((id:unknown)=>typeof id==='string'&&id.length>0)||new Set(x.ids).size!==x.ids.length||!x.ids.every((id:string)=>questions.some(q=>q.id===id&&q.grade===x.grade))||!Array.isArray(x.responses)||!Number.isInteger(x.index)||x.index<0||x.index>=x.ids.length||![1,2,3].includes(x.grade)||!['practice','mini','full'].includes(x.mode)||!Number.isSafeInteger(x.began)||x.began<=0||!Number.isSafeInteger(x.correct)||!Number.isSafeInteger(x.answered)||x.answered<0||x.answered>x.ids.length||x.correct<0||x.correct>x.answered||x.responses.length!==x.answered||!x.responses.every((r:ExamAnswer)=>r&&typeof r==='object'&&!Array.isArray(r)&&typeof r.id==='string'&&x.ids.includes(r.id)&&(r.selected===null||(Number.isSafeInteger(r.selected)&&r.selected>=0))&&typeof r.correct==='boolean'&&(r.writing===undefined||typeof r.writing==='string'))||new Set(x.responses.map((r:ExamAnswer)=>r.id)).size!==x.responses.length||x.responses.filter((r:ExamAnswer)=>r.correct).length!==x.correct||x.responses.some((r:ExamAnswer)=>{const q=questions.find(q=>q.id===r.id);return !q||(q.kind==='choice'?(r.selected===null||r.selected>=q.options.length||r.correct!==(r.selected===q.answer)):r.selected!==null);})||x.responses.some((r:ExamAnswer,i:number)=>r.id!==x.ids[i])||(x.index!==x.answered&&x.index!==x.answered-1))throw new Error('Invalid saved session draft; original data preserved');
    return x as SessionDraft;
  }catch{throw new Error('Invalid saved session draft; original data preserved');}
}
