import AsyncStorage from '@react-native-async-storage/async-storage';
import {questions} from '../data/questions';

// Backup validation/export and explicitly confirmed Web restore service.
// Web restore UI is wired in AppRoot; native restore is not supported.
const PROGRESS_KEY='@shoku_study/progress_v1';
const DRAFT_KEY='@shoku_study/session_draft_v1';
export type BackupEnvelope={format:'shoku-study-backup';version:1;exportedAt:string;progressRaw:string|null;draftRaw:string|null};

// Validate the exported envelope before presenting it as a usable backup.
// Preserve raw payloads byte-for-byte for validated Web restore.
export function validateBackupEnvelope(value:unknown):value is BackupEnvelope{
  if(!value||typeof value!=='object'||Array.isArray(value))return false;
  const x=value as Record<string,unknown>;
  // Accept only canonical UTC ISO timestamps; Date.parse alone accepts ambiguous strings.
  if(x.format!=='shoku-study-backup'||x.version!==1||
     typeof x.exportedAt!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(x.exportedAt)||
     !Number.isFinite(Date.parse(x.exportedAt))||new Date(x.exportedAt).toISOString()!==x.exportedAt)return false;
  // An empty export is not a useful recovery artifact and may hide a storage failure.
  if(x.progressRaw===null&&x.draftRaw===null)return false;
  const validTimestamp=(v:unknown):v is string=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(v)&&Number.isFinite(Date.parse(v))&&new Date(v).toISOString()===v;
  const nonnegative=(v:unknown):v is number=>typeof v==='number'&&Number.isSafeInteger(v)&&v>=0;
  const validDate=(v:unknown):v is string=>{
    if(typeof v!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(v))return false;
    const [y,m,d]=v.split('-').map(Number);
    const date=new Date(0);date.setFullYear(y,m-1,d);
    return date.getFullYear()===y&&date.getMonth()===m-1&&date.getDate()===d;
  };
  const validAnswer=(item:unknown):boolean=>{
    if(!item||typeof item!=='object'||Array.isArray(item))return false;
    const a=item as Record<string,unknown>;
    return typeof a.id==='string'&&a.id.length>0&&
      (a.selected===null||nonnegative(a.selected))&&typeof a.correct==='boolean'&&
      (a.writing===undefined||typeof a.writing==='string');
  };
  for(const field of ['progressRaw','draftRaw'] as const){
    const raw=x[field];
    if(raw!==null&&typeof raw!=='string')return false;
    if(typeof raw==='string'){
      try{
        const parsed:unknown=JSON.parse(raw);
        if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))return false;
        // Minimum semantic checks, without normalizing or rewriting the raw bytes.
        if(field==='progressRaw'){
          const p=parsed as Record<string,unknown>;
          if(p.answers!==undefined&&(!p.answers||typeof p.answers!=='object'||Array.isArray(p.answers)))return false;
          if(p.days!==undefined&&(!p.days||typeof p.days!=='object'||Array.isArray(p.days)))return false;
          if(p.history!==undefined&&!Array.isArray(p.history))return false;
          if(p.favorites!==undefined&&(!Array.isArray(p.favorites)||!p.favorites.every(id=>typeof id==='string'&&id.length>0)))return false;
          if(p.firstDate!==undefined&&!validDate(p.firstDate))return false;
          if(p.history!==undefined){
            for(const item of p.history as unknown[]){
              if(!item||typeof item!=='object'||Array.isArray(item))return false;
              const h=item as Record<string,unknown>;
              if(typeof h.id!=='string'||!h.id||!validTimestamp(h.at)||
                 ![1,2,3].includes(h.grade as number)||!['practice','mini','full'].includes(h.mode as string)||
                 !nonnegative(h.total)||!nonnegative(h.correct)||(h.correct as number)>(h.total as number)||
                 !nonnegative(h.seconds)||!Array.isArray(h.answers)||
                 h.answers.length>(h.total as number)||!h.answers.every(validAnswer)||
                 new Set(h.answers.map((a:Record<string,unknown>)=>a.id)).size!==h.answers.length||
                 h.answers.filter((a:Record<string,unknown>)=>a.correct===true).length!==h.correct||
                 h.answers.some((a:Record<string,unknown>)=>{
                   const q=questions.find(q=>q.id===a.id);
                   // Retired question IDs in older history remain exportable.
                   if(!q)return false;
                   if(q.grade!==h.grade)return true;
                   return q.kind==='choice'
                     ? a.selected===null||(a.selected as number)>=q.options.length||a.correct!==(a.selected===q.answer)
                     : a.selected!==null;
                 }))return false;
            }
          }
          if(p.dailyGoal!==undefined&&(!Number.isInteger(p.dailyGoal)||(p.dailyGoal as number)<1||(p.dailyGoal as number)>100))return false;
          if(p.answers&&typeof p.answers==='object'){
            for(const [id,entry] of Object.entries(p.answers)){
              if(!id||!entry||typeof entry!=='object'||Array.isArray(entry))return false;
              const a=entry as Record<string,unknown>;
              if(!nonnegative(a.attempts)||!nonnegative(a.correct)||a.correct>a.attempts||typeof a.lastCorrect!=='boolean'||!(a.lastAt===''||validTimestamp(a.lastAt)))return false;
            }
          }
          if(p.days&&typeof p.days==='object'){
            for(const [day,entry] of Object.entries(p.days)){
              if(!validDate(day))return false;
              if(!entry||typeof entry!=='object'||Array.isArray(entry))return false;
              const d=entry as Record<string,unknown>;
              if(!nonnegative(d.answered)||!nonnegative(d.correct)||(d.correct as number)>(d.answered as number)||!nonnegative(d.seconds))return false;
            }
          }
        }else{
          const d=parsed as Record<string,unknown>;
          if(!Array.isArray(d.ids)||d.ids.length===0||!d.ids.every(id=>typeof id==='string'&&id.length>0)||
             new Set(d.ids).size!==d.ids.length||
             !d.ids.every((id:string)=>questions.some(q=>q.id===id&&q.grade===d.grade))||
             !Number.isInteger(d.index)||(d.index as number)<0||(d.index as number)>=d.ids.length||
             ![1,2,3].includes(d.grade as number)||!['practice','mini','full'].includes(d.mode as string)||
             typeof d.began!=='number'||!Number.isSafeInteger(d.began)||d.began<=0||
             !Array.isArray(d.responses)||!nonnegative(d.answered)||(d.answered as number)>d.ids.length||
             !nonnegative(d.correct)||(d.correct as number)>(d.answered as number)||d.answered!==d.responses.length)return false;
          const responses=d.responses as unknown[];
          if(!responses.every(item=>{
            if(!item||typeof item!=='object'||Array.isArray(item))return false;
            const r=item as Record<string,unknown>;
            return typeof r.id==='string'&&d.ids.includes(r.id)&&
              (r.selected===null||nonnegative(r.selected))&&typeof r.correct==='boolean'&&
              (r.writing===undefined||typeof r.writing==='string');
          })||new Set(responses.map(item=>(item as Record<string,unknown>).id)).size!==responses.length||responses.filter(item=>(item as Record<string,unknown>).correct===true).length!==d.correct||responses.some(item=>{const r=item as Record<string,unknown>;const q=questions.find(q=>q.id===r.id);return !q||(q.kind==='choice'?(r.selected===null||(r.selected as number)>=q.options.length||r.correct!==(r.selected===q.answer)):r.selected!==null);})||responses.some((item,i)=>(item as Record<string,unknown>).id!==d.ids[i])||(d.index!==d.answered&&d.index!==(d.answered as number)-1))return false;
        }
      }catch{return false;}
    }
  }
  return true;
}
export async function createBackup():Promise<BackupEnvelope>{
  const pairs=await AsyncStorage.multiGet([PROGRESS_KEY,DRAFT_KEY]);
  const map=new Map(pairs);
  const result:BackupEnvelope={format:'shoku-study-backup',version:1,exportedAt:new Date().toISOString(),
    progressRaw:map.get(PROGRESS_KEY)??null,draftRaw:map.get(DRAFT_KEY)??null};
  if(!validateBackupEnvelope(result))throw new Error('Stored backup payload is malformed; export cancelled');
  return result;
}
export function downloadBackupOnWeb(data:BackupEnvelope):void{
  if(!validateBackupEnvelope(data))throw new Error('Invalid backup envelope');
  if(typeof document==='undefined'||typeof URL==='undefined'||typeof Blob==='undefined')throw new Error('Web browser required');
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json;charset=utf-8'});
  // Match the read-only inspector's 5 MiB limit so exported files remain inspectable.
  if(blob.size>5*1024*1024)throw new Error('Backup exceeds the 5 MiB inspection limit');
  const url=URL.createObjectURL(blob);
  try{
    const a=document.createElement('a');a.href=url;a.download=`shoku-study-backup-${data.exportedAt.slice(0,10)}.json`;
    document.body.appendChild(a);try{a.click();}finally{a.remove();}
  }finally{setTimeout(()=>URL.revokeObjectURL(url),1000);}
}

/** Restore a validated backup without changing the existing v1 storage format.
 * Call only after explicit user confirmation and after suspending UI autosaves.
 * On failure, attempt to roll back both original raw values.
 */
export async function restoreBackupAfterConfirmation(data:unknown):Promise<void>{
  if(!validateBackupEnvelope(data))throw new Error('Invalid backup; nothing restored');
  const before=await AsyncStorage.multiGet([PROGRESS_KEY,DRAFT_KEY]);
  const original=new Map(before);
  const apply=async(key:string,raw:string|null)=>{
    if(raw===null)await AsyncStorage.removeItem(key);
    else await AsyncStorage.setItem(key,raw);
  };
  try{
    await apply(PROGRESS_KEY,data.progressRaw);
    await apply(DRAFT_KEY,data.draftRaw);
    // Verify persistence; some storage adapters can silently fail.
    const after=new Map(await AsyncStorage.multiGet([PROGRESS_KEY,DRAFT_KEY]));
    if((after.get(PROGRESS_KEY)??null)!==data.progressRaw||
       (after.get(DRAFT_KEY)??null)!==data.draftRaw)throw new Error('Restore verification failed');
  }catch(error){
    try{
      await apply(PROGRESS_KEY,original.get(PROGRESS_KEY)??null);
      await apply(DRAFT_KEY,original.get(DRAFT_KEY)??null);
      // A storage adapter can resolve writes without persisting them. Check rollback too.
      const rolledBack=new Map(await AsyncStorage.multiGet([PROGRESS_KEY,DRAFT_KEY]));
      if((rolledBack.get(PROGRESS_KEY)??null)!==(original.get(PROGRESS_KEY)??null)||
         (rolledBack.get(DRAFT_KEY)??null)!==(original.get(DRAFT_KEY)??null)){
        throw new Error('Rollback verification mismatch');
      }
    }catch{throw new Error('Restore failed and rollback could not be verified; do not continue saving');}
    throw error;
  }
}

/** Delete both v1 records as a verified transaction, restoring raw values on failure.
 * Caller must suspend queued autosaves and other storage operations.
 */
export async function clearAllLearningDataSafely():Promise<void>{
  const keys=[PROGRESS_KEY,DRAFT_KEY];
  const original=new Map(await AsyncStorage.multiGet(keys));
  const restore=async(key:string)=>{
    const raw=original.get(key)??null;
    if(raw===null)await AsyncStorage.removeItem(key);
    else await AsyncStorage.setItem(key,raw);
  };
  try{
    await AsyncStorage.removeItem(PROGRESS_KEY);
    await AsyncStorage.removeItem(DRAFT_KEY);
    const after=new Map(await AsyncStorage.multiGet(keys));
    if(keys.some(key=>(after.get(key)??null)!==null))throw new Error('Delete verification failed');
  }catch(error){
    try{
      for(const key of keys)await restore(key);
      const after=new Map(await AsyncStorage.multiGet(keys));
      if(keys.some(key=>(after.get(key)??null)!==(original.get(key)??null)))throw new Error('Rollback mismatch');
    }catch{throw new Error('Delete failed; rollback could not be verified. Do not resume autosave.');}
    throw error;
  }
}
