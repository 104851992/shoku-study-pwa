import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert, Animated, Linking, Platform, Pressable, SafeAreaView, ScrollView,
  StatusBar, StyleSheet, Text, TextInput, View,
} from 'react-native';
import {questions, Question, Grade} from './data/questions';
import {clearAllLearningDataSafely, createBackup, downloadBackupOnWeb, restoreBackupAfterConfirmation, validateBackupEnvelope} from './lib/backup';
import {GRADE_INFO, OFFICIAL_LINKS} from './data/exam';
import {AnswerRecord, ExamAnswer, ExamHistory, clearProgress, clearDraft, freshProgress, loadDraft, loadProgress, Progress, saveDraft, saveProgress, streak, todayKey} from './lib/progress';

const C = {
  bg:'#FAF8F4', paper:'#FFFFFF', ink:'#24342E', muted:'#52665B', soft:'#F2F1EC',
  orange:'#A14B25', orangeSoft:'#FFF0E4', green:'#25704A', greenSoft:'#E8F4E8',
  red:'#BA594D', redSoft:'#FCECE7', purple:'#8B6CB3', line:'#E9E7DF',
};
// React Native Alert.alert does not present confirmation dialogs on the web.
function notify(title:string, message:string) {
  if (Platform.OS==='web') { if(typeof window!=='undefined') window.alert(`${title}\n${message}`); }
  else Alert.alert(title,message);
}
function confirmAction(title:string, message:string, actionLabel:string, action:()=>void) {
  if (Platform.OS==='web') { if(typeof window!=='undefined' && window.confirm(`${title}\n${message}`)) action(); }
  else Alert.alert(title,message,[{text:'キャンセル',style:'cancel'},{text:actionLabel,style:'destructive',onPress:action}]);
}
const GRADE_ORDER: Grade[] = [3,2,1];
type Tab = 'home' | 'learn' | 'records' | 'settings';
type QueueKind = 'random' | 'new' | 'wrong' | 'star';
type Session = {ids:string[]; index:number; grade: Grade; mode: 'practice' | 'mini' | 'full'; correct: number; answered: number; began: number; responses:ExamAnswer[]};
type Report = ExamHistory;

function Card({children, style}: {children:React.ReactNode; style?:any}) { return <View style={[S.card,style]}>{children}</View>; }
function Pill({label,active,onPress}: {label:string;active:boolean;onPress:()=>void}) {
  return <Pressable onPress={onPress} style={[S.pill,active&&S.pillActive]}><Text style={[S.pillText,active&&S.pillTextActive]}>{label}</Text></Pressable>;
}
function SectionTitle({title,right}: {title:string;right?:string}) {return <View style={S.sectionHeading}><Text style={S.sectionTitle}>{title}</Text>{right?<Text style={S.small}>{right}</Text>:null}</View>;}
function Bar({value,color=C.green}: {value:number;color?:string}) {return <View style={S.barBack}><View style={[S.barFill,{width:`${Math.max(0,Math.min(100,value))}%`,backgroundColor:color}]}/></View>;}
function BigButton({title,onPress,secondary=false,disabled=false}: {title:string;onPress:()=>void;secondary?:boolean;disabled?:boolean}) {
  return <Pressable disabled={disabled} onPress={onPress} style={({pressed})=>[S.bigButton,secondary&&S.secondaryButton,disabled&&{opacity:.35},pressed&&{opacity:.76}]}>
    <Text style={[S.bigButtonText,secondary&&S.secondaryButtonText]}>{title}</Text>
  </Pressable>;
}
function MiniStat({value,label}: {value:string;label:string}) {return <View style={S.stat}><Text style={S.statValue}>{value}</Text><Text style={S.statLabel}>{label}</Text></View>;}
function GradeBadge({grade}: {grade:Grade}) {return <View style={[S.gradeBadge,{backgroundColor: GRADE_INFO[grade].color+'18'}]}><Text style={[S.gradeBadgeText,{color:GRADE_INFO[grade].color}]}>{grade}級</Text></View>;}

export default function AppRoot() {
  const [loaded,setLoaded]=useState(false);
  const [progress,setProgress]=useState<Progress>(freshProgress());
  const [tab,setTab]=useState<Tab>('home');
  const [grade,setGrade]=useState<Grade>(3);
  const [category,setCategory]=useState('すべて');
  const [queue,setQueue]=useState<QueueKind>('random');
  const [session,setSession]=useState<Session|null>(null);
  const [savedSession,setSavedSession]=useState<Session|null>(null);
  const [draftReady,setDraftReady]=useState(false);
  const draftChain=useRef<Promise<void>>(Promise.resolve());
  const restoreLocked=useRef(false);
  const exportLocked=useRef(false);
  const resetLocked=useRef(false);
  const draftGeneration=useRef(0);
  const [report,setReport]=useState<Report|null>(null);
  const [reviewResults,setReviewResults]=useState(false);
  const [selected,setSelected]=useState<number|null>(null);
  const [answerHandled,setAnswerHandled]=useState(false);
  const [showSample,setShowSample]=useState(false);
  const [showExplanation,setShowExplanation]=useState(false);
  const quizScrollRef=useRef<ScrollView>(null);
  const [writing,setWriting]=useState('');
  const [elapsed,setElapsed]=useState(0);
  const [saveError,setSaveError]=useState(false);
  const fade=useRef(new Animated.Value(0)).current;
  // Serialize writes so an older, slower save cannot overwrite newer progress.
  const saveChain=useRef<Promise<void>>(Promise.resolve());
  const saveGeneration=useRef(0);
  // Never replace existing saved progress with a blank state if the initial read fails.
  const progressReadOk=useRef(false);
  // A failed draft read must never trigger the initial clearDraft autosave.
  const draftReadOk=useRef(false);

  // Web-only: cache previously visited app assets for offline reopening.
  useEffect(()=>{
    if(Platform.OS!=='web'||typeof navigator==='undefined'||!('serviceWorker' in navigator))return;
    void navigator.serviceWorker.register('/sw.js').catch(()=>{ /* Offline remains best-effort. */ });
  },[]);
  useEffect(()=>{let alive=true;Promise.allSettled([loadProgress(),loadDraft()]).then(([p,d])=>{
    if(!alive)return;
    if(p.status==='fulfilled'){progressReadOk.current=true;setProgress(p.value);}else setSaveError(true);
    if(d.status==='fulfilled')draftReadOk.current=true;
    if(d.status==='fulfilled' && d.value){
      const x=d.value;
      if(x.ids.length>0 && x.ids.every(id=>questions.some(q=>q.id===id && q.grade===x.grade)) && x.index<x.ids.length && x.responses.length===x.answered){setSavedSession(x as Session);}
      else {draftReadOk.current=false;setSaveError(true);}
    } else if(d.status==='rejected')setSaveError(true);
    setDraftReady(true);setLoaded(true);
  });return()=>{alive=false;};},[]);
  useEffect(()=>{
    if(!loaded || !progressReadOk.current || restoreLocked.current)return;
    const snapshot=progress;
    const generation=saveGeneration.current;
    saveChain.current=saveChain.current.catch(()=>undefined).then(()=>{
      if(generation!==saveGeneration.current || restoreLocked.current || resetLocked.current)return;
      return saveProgress(snapshot);
    });
    saveChain.current.then(()=>{if(generation===saveGeneration.current)setSaveError(false);}).catch(()=>{if(generation===saveGeneration.current)setSaveError(true);});
  },[progress,loaded]);
  useEffect(()=>{
    if(!draftReady || !draftReadOk.current || restoreLocked.current || (!session && savedSession))return;
    const snapshot=session;
    const generation=draftGeneration.current;
    draftChain.current=draftChain.current.catch(()=>undefined).then(()=>{
      if(generation!==draftGeneration.current || restoreLocked.current || resetLocked.current)return;
      return snapshot?saveDraft(snapshot):clearDraft();
    });
    draftChain.current.catch(()=>setSaveError(true));
  },[session,savedSession,draftReady]);
  async function exportBackup(){
    if(restoreLocked.current){notify('操作できません','復元処理中のためバックアップを作成できません。');return;}
    if(resetLocked.current){notify('操作できません','削除処理中のためバックアップを作成できません。');return;}
    if(exportLocked.current)return;
    if(Platform.OS!=='web'){notify('Web版限定','バックアップのダウンロードは現在Web版のみ対応しています。');return;}
    if(!progressReadOk.current||!draftReadOk.current){notify('保存データを確認できません','読み込みエラーがあるため、バックアップの作成を中止しました。');return;}
    exportLocked.current=true;
    try{
      await saveChain.current;
      await draftChain.current;
      // Restore may begin while export is waiting for pending writes.
      // Never read the two storage keys during a concurrent restore.
      if(restoreLocked.current){notify('操作できません','復元処理中のためバックアップを作成できません。');return;}
      if(resetLocked.current){notify('操作できません','削除処理中のためバックアップを作成できません。');return;}
      const backup=await createBackup();
      downloadBackupOnWeb(backup);
      notify('バックアップを準備しました','ブラウザのダウンロード一覧でJSONファイルが保存されたことを確認し、安全な場所に保管してください。復元する場合は設定画面から操作してください。');
    }catch{notify('バックアップに失敗しました','保存状態またはブラウザのダウンロード設定をご確認ください。');}
    finally{exportLocked.current=false;}
  }
  // Read-only backup inspection: never writes to AsyncStorage.
  function inspectBackupOnWeb(){
    if(Platform.OS!=='web'||typeof document==='undefined'){
      notify('Web版限定','JSONバックアップの確認はWeb版のみ対応しています。');return;
    }
    const picker=document.createElement('input');
    picker.type='file';picker.accept='.json,application/json';
    picker.onchange=()=>{
      const file=picker.files?.[0];
      if(!file)return;
      if(file.size>5*1024*1024){notify('確認できません','ファイルが5MiBを超えています。');return;}
      void file.text().then(content=>{
        const parsed:unknown=JSON.parse(content);
        if(!validateBackupEnvelope(parsed))throw new Error('invalid backup');
        const b=parsed;
        const p=b.progressRaw?JSON.parse(b.progressRaw) as Record<string,unknown>:null;
        const h=p&&Array.isArray(p.history)?p.history.length:0;
        const a=p&&p.answers&&typeof p.answers==='object'?Object.keys(p.answers).length:0;
        notify('バックアップの形式を確認しました',`作成日時：${b.exportedAt}\n学習済み問題：${a}件\n試験履歴：${h}件\n中断記録：${b.draftRaw?'あり':'なし'}\n※確認のみです。復元・書き込みは行っていません。`);
      }).catch(()=>notify('確認できません','JSONの形式または学習記録に不整合があります。元のファイルは変更していません。'));
    };
    picker.click();
  }
  // Web-only destructive restore: suspend autosaves, drain queued writes, then reload
  // from storage. Never hydrate a restored backup into stale in-memory state.
  function restoreBackupOnWeb(){
    if(Platform.OS!=='web'||typeof document==='undefined'||typeof window==='undefined'){
      notify('Web版限定','JSONの復元はWeb版のみ対応しています。');return;
    }
    if(restoreLocked.current || resetLocked.current || exportLocked.current)return;
    if(!progressReadOk.current||!draftReadOk.current){notify('復元できません','現在の学習データの読み込みに失敗しています。');return;}
    const picker=document.createElement('input');
    picker.type='file';picker.accept='.json,application/json';
    picker.onchange=()=>{
      const file=picker.files?.[0];if(!file)return;
      if(file.size>5*1024*1024){notify('復元できません','ファイルが5MiBを超えています。');return;}
      void file.text().then(async content=>{
        const data:unknown=JSON.parse(content);
        if(!validateBackupEnvelope(data))throw new Error('Invalid backup');
        const approved=window.confirm('バックアップを復元しますか？\n現在の学習記録と中断データは上書きされます。先に現在のJSONバックアップを安全な場所に保存してください。\n復元後はページを再読み込みします。');
        if(!approved)return;
        if(exportLocked.current){notify('復元できません','バックアップの書き出し中です。完了後にもう一度お試しください。');return;}
        if(resetLocked.current){notify('復元できません','削除処理中です。完了後にもう一度お試しください。');return;}
        if(restoreLocked.current)return;
        restoreLocked.current=true;
        saveGeneration.current++;draftGeneration.current++;
        try{
          await Promise.all([saveChain.current,draftChain.current]);
          await restoreBackupAfterConfirmation(data);
          window.alert('復元しました。ページを再読み込みします。');
          window.location.reload();
        }catch(error){
          // The rollback may have failed; do not resume autosaves into uncertain data.
          window.alert('復元に失敗しました。自動保存を停止しています。\nページを閉じる前に元のバックアップを保管してください。\n'+String(error));
        }
      }).catch(()=>notify('復元できません','JSONの形式が正しくありません。保存データは変更していません。'));
    };
    picker.click();
  }
  function discardDraft(){
    if(restoreLocked.current)return;
    if(resetLocked.current || exportLocked.current)return;
    draftGeneration.current++;
    setSession(null);setSavedSession(null);setAnswerHandled(false);
    draftChain.current=draftChain.current.catch(()=>undefined).then(()=>clearDraft());
    draftChain.current.catch(()=>setSaveError(true));
  }
  function resumeDraft(){
    if(!savedSession)return;
    const x=savedSession;
    setSession(x);setSavedSession(null);setElapsed(Math.max(0,Math.floor((Date.now()-x.began)/1000)));
    const answer=x.responses.find(a=>a.id===x.ids[x.index]);
    setSelected(answer?.selected??null);setWriting(answer?.writing??'');setAnswerHandled(Boolean(answer));setShowSample(Boolean(answer));setShowExplanation(false);
  }
  useEffect(()=>{if(!session)return;const t=setInterval(()=>setElapsed(Math.floor((Date.now()-session.began)/1000)),1000);return()=>clearInterval(t);},[session?.began]);
  const activeQuestion=useMemo(()=>session?questions.find(q=>q.id===session.ids[session.index]):undefined,[session?.ids,session?.index]);
  useEffect(()=>{fade.setValue(0);Animated.timing(fade,{toValue:1,duration:250,useNativeDriver:true}).start();},[activeQuestion?.id,tab,report]);
  // Keep each new question at its beginning, even if the previous explanation was long.
  useEffect(()=>{quizScrollRef.current?.scrollTo({y:0,animated:false});setShowExplanation(false);},[activeQuestion?.id]);

  const gradeQ=useMemo(()=>questions.filter(q=>q.grade===grade),[grade]);
  const catQ=useMemo(()=>gradeQ.filter(q=>category==='すべて'||q.category===category),[gradeQ,category]);
  const answeredIds=new Set(Object.keys(progress.answers));
  const completed=Object.keys(progress.answers).length;
  const attempts=Object.values(progress.answers).reduce((s,x)=>s+x.attempts,0);
  const accurate=Object.values(progress.answers).reduce((s,x)=>s+x.correct,0);
  const today=progress.days[todayKey()]??{answered:0,correct:0,seconds:0};
  const isStar=(id:string)=>progress.favorites.includes(id);
  const statsByGrade=(g:Grade)=>{const inG=questions.filter(q=>q.grade===g);const rows=inG.map(q=>progress.answers[q.id]).filter(Boolean) as AnswerRecord[];
    const n=rows.reduce((s,x)=>s+x.attempts,0), c=rows.reduce((s,x)=>s+x.correct,0);return {total:inG.length,unique:rows.length,rate:n?Math.round(c/n*100):0};};
  const eligible=useMemo(()=>catQ.filter(q=>{
      if(queue==='new') return !progress.answers[q.id];
      if(queue==='wrong') return progress.answers[q.id]&&!progress.answers[q.id].lastCorrect;
      if(queue==='star') return progress.favorites.includes(q.id);
      return true;
    }),[catQ,queue,progress.answers,progress.favorites]);

  function chooseGrade(g: Grade) {setGrade(g);setCategory('すべて');setTab('learn');setReport(null);}
  function begin(mode:Session['mode'], customQueue?:Question[]) {
    const candidates = [...(customQueue??eligible)];
    const shuffle=<T,>(a:T[]):T[]=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
    let list:Question[];
    if(mode==='full') {
      const choices=shuffle(candidates.filter(q=>q.kind==='choice'));
      const written=shuffle(candidates.filter(q=>q.kind==='written'));
      const choiceNeed=grade===3?45:grade===2?50:42;
      const writtenNeed=grade===1?13:0;
      if(choices.length<choiceNeed || written.length<writtenNeed){notify('問題数が足りません','現在の分野や復習条件を解除してお試しください。');return;}
      list=[...choices.slice(0,choiceNeed),...written.slice(0,writtenNeed)];
    } else {
      list=shuffle(candidates.filter(q=>mode==='practice'||q.kind==='choice')).slice(0,10);
    }
    if(!list.length){notify('問題がありません','条件を変更してもう一度お試しください。');return;}
    setSavedSession(null);
    setSession({ids:list.map(q=>q.id),grade,mode,correct:0,answered:0,index:0,began:Date.now(),responses:[]});
    setSelected(null);setWriting('');setShowSample(false);setShowExplanation(false);setAnswerHandled(false);setElapsed(0);setReport(null);setReviewResults(false);
  }
  function record(id:string,ok:boolean,chosen:number|null,answerText?:string) {
    const d=todayKey();
    setProgress(p=>{
      const prev=p.answers[id]??{attempts:0,correct:0,lastCorrect:false,lastAt:''};
      const pd=p.days[d]??{answered:0,correct:0,seconds:0};
      return {...p,answers:Object.assign(Object.create(null),p.answers,{[id]:{attempts:prev.attempts+1,correct:prev.correct+(ok?1:0),lastCorrect:ok,lastAt:new Date().toISOString()}}),days:Object.assign(Object.create(null),p.days,{[d]:{...pd,answered:pd.answered+1,correct:pd.correct+(ok?1:0)}})};
    });
    setSession(s=>s?{...s,correct:s.correct+(ok?1:0),answered:s.answered+1,
      responses:[...s.responses,{id,selected:chosen,correct:ok,...(answerText?{writing:answerText}:{})}]}:s);
  }
  function select(i:number) {
    if(!activeQuestion||activeQuestion.kind!=='choice'||answerHandled)return;
    setSelected(i);setShowExplanation(false);setAnswerHandled(true);record(activeQuestion.id,i===activeQuestion.answer,i);
  }
  function selfReview(ok:boolean) {if(!activeQuestion||activeQuestion.kind!=='written'||answerHandled)return;setAnswerHandled(true);record(activeQuestion.id,ok,null,writing);}
  function next() {
    if(!session)return;
    if(session.index>=session.ids.length-1){
      const seconds=Math.max(1,Math.round((Date.now()-session.began)/1000));
      const d=todayKey();
      const result:ExamHistory={id:`${Date.now()}-${session.grade}`,at:new Date().toISOString(),
        grade:session.grade,mode:session.mode,total:session.ids.length,correct:session.correct,
        seconds,answers:session.responses};
      setProgress(p=>({...p,
        days:Object.assign(Object.create(null),p.days,{[d]:{...(p.days[d]??{answered:0,correct:0,seconds:0}),seconds:(p.days[d]?.seconds??0)+seconds}}),
        history:[result,...p.history]}));
      setReport(result);setReviewResults(false);
      discardDraft();setElapsed(0);
    }else {setSession({...session,index:session.index+1});setSelected(null);setShowSample(false);setShowExplanation(false);setWriting('');setAnswerHandled(false);}
  }
  function exit() {if(!session)return;confirmAction('学習を終了しますか？','回答済みの記録は保存されます。今回の学習時間は集計されません。','終了',discardDraft);}
  function toggleStar(id:string) {setProgress(p=>({...p,favorites:p.favorites.includes(id)?p.favorites.filter(x=>x!==id):[...p.favorites,id]}));}
  function reset() {if(restoreLocked.current)return;if(exportLocked.current||resetLocked.current)return;confirmAction('学習記録を削除しますか？','解答履歴・お気に入り・学習日数がすべて消去されます。この操作は元に戻せません。','すべて削除',async()=>{
      if(restoreLocked.current)return;
      if(exportLocked.current||resetLocked.current)return;
      resetLocked.current=true;
      let deleteSucceeded=false;
      saveGeneration.current+=1;draftGeneration.current+=1;
      try{await saveChain.current.catch(()=>undefined);await draftChain.current.catch(()=>undefined);await clearAllLearningDataSafely();setSavedSession(null);setSession(null);setProgress(freshProgress());setSaveError(false);deleteSucceeded=true;}
      catch{setSaveError(true);notify('削除に失敗しました','保存データの復旧状態を確認してください。安全のため自動保存を停止しました。ページを再読み込みする前にバックアップを保管してください。');return;}
      finally{if(deleteSucceeded)resetLocked.current=false;}
    });}
  function openOfficial(url:string) {Linking.openURL(url).catch(()=>notify('リンクを開けませんでした','通信環境をご確認ください。'));}
  if(!loaded) return <SafeAreaView style={[S.root,{justifyContent:'center',alignItems:'center'}]}><Text style={S.logo}>食のまなびノート</Text><Text style={S.sub}>読み込み中...</Text></SafeAreaView>;

  if(session&&activeQuestion){
    const n=session.ids.length;const isMini=session.mode!=='practice';
    return <SafeAreaView style={S.root}><StatusBar barStyle="dark-content" backgroundColor={C.bg}/>
      <View style={S.quizTop}><Pressable onPress={exit} accessibilityLabel="学習終了"><Text style={S.x}>×</Text></Pressable><Text style={S.sub}>{session.index+1} / {n}</Text><Pressable onPress={()=>toggleStar(activeQuestion.id)}><Text style={S.star}>{isStar(activeQuestion.id)?'★':'☆'}</Text></Pressable></View>
      <Bar value={(session.index+1)/n*100} color={GRADE_INFO[session.grade].color}/>
      <ScrollView ref={quizScrollRef} keyboardShouldPersistTaps="handled" contentContainerStyle={S.quizContent}
        onContentSizeChange={()=>{if(showExplanation)quizScrollRef.current?.scrollToEnd({animated:true});}}>
        <Animated.View style={{opacity:fade,transform:[{translateY:fade.interpolate({inputRange:[0,1],outputRange:[14,0]})}]}}>
          <View style={S.row}><GradeBadge grade={session.grade}/><Text style={S.questionCategory}>{activeQuestion.category}</Text></View>
          <Text style={S.questionPrompt}>{activeQuestion.prompt}</Text>
          {activeQuestion.kind==='choice'?<>
            {activeQuestion.options.map((op,i)=>{
              const chosen=selected===i;const revealed=answerHandled&&!isMini;
              const correct=revealed&&i===activeQuestion.answer;
              return <Pressable key={`${activeQuestion.id}-${i}`} onPress={()=>select(i)} style={[S.option, chosen&&{borderColor:C.orange,backgroundColor:C.orangeSoft},correct&&{borderColor:C.green,backgroundColor:C.greenSoft}]}>
                <View style={[S.optionLetter,(chosen||correct)&&{backgroundColor:correct?C.green:C.orange}]}><Text style={[S.optionLetterText,(chosen||correct)&&{color:'#fff'}]}>{i+1}</Text></View>
                <Text style={S.optionText}>{op}</Text>
                {correct?<Text style={{color:C.green,fontSize:17}}>✓</Text>:null}
              </Pressable>;
            })}
            {answerHandled&&!isMini&&showExplanation?<Card style={S.explanationCard}>
              <Text style={S.explanationAnswer}>正解：{activeQuestion.answer+1}. {activeQuestion.options[activeQuestion.answer]}</Text>
              <Text style={S.explanationText}>{activeQuestion.explanation}</Text>
            </Card>:null}
          </>:<>
            <Text style={S.writtenHint}>記述問題 · 自己採点（自動採点ではありません）。解答例は採点前に表示されます。</Text>
            <TextInput value={writing} onChangeText={setWriting} multiline editable={!answerHandled} placeholder="ここに自分の解答を入力..." placeholderTextColor="#A1A99F" style={S.writingInput} textAlignVertical="top"/>
            {!showSample?<BigButton title="解答例を確認する" secondary onPress={()=>setShowSample(true)}/>:<Card><Text style={S.explanationHeadline}>解答例</Text><Text style={S.explanationText}>{activeQuestion.sample}</Text><Text style={[S.small,{marginTop:10}]}>確認ポイント：{activeQuestion.keywords.join('・')}</Text>
                {!answerHandled?<View style={S.twoBtns}><Pressable style={[S.selfButton,{backgroundColor:C.greenSoft}]} onPress={()=>selfReview(true)}><Text style={{color:C.green,fontWeight:'800'}}>理解できた</Text></Pressable><Pressable style={[S.selfButton,{backgroundColor:C.redSoft}]} onPress={()=>selfReview(false)}><Text style={{color:C.red,fontWeight:'800'}}>要復習</Text></Pressable></View>:null}
              </Card>}
          </>}
        </Animated.View>
      </ScrollView>
      <View style={S.quizFooter}>
        {answerHandled && activeQuestion.kind==='choice' && !isMini?<View style={S.quizFeedback}>
          <Text style={[S.quizFeedbackText,{color:selected===activeQuestion.answer?C.green:C.red}]} accessibilityRole="text">
            {selected===activeQuestion.answer?'✓ 正解':'✕ 不正解 · 正解は '+(activeQuestion.answer+1)+'番'}
          </Text>
          <Pressable accessibilityRole="button" accessibilityLabel={showExplanation?'解説を閉じる':'解説を見る'}
            accessibilityState={{expanded:showExplanation}} onPress={()=>setShowExplanation(v=>!v)} style={S.explanationToggle}>
            <Text style={S.explanationToggleText}>{showExplanation?'解説を閉じる ▲':'解説を見る ▼'}</Text>
          </Pressable>
        </View>:null}
        {isMini?<Text style={S.quizModeLabel}>模擬練習 · 解説は終了後に確認できます</Text>:null}
        <BigButton title={session.index+1===n?'結果を見る':'次の問題へ  →'} disabled={!answerHandled} onPress={next}/>
      </View>
    </SafeAreaView>;
  }

  return <SafeAreaView style={S.root}><StatusBar barStyle="dark-content" backgroundColor={C.bg}/>
    <ScrollView contentContainerStyle={S.page} showsVerticalScrollIndicator={false}>
      {saveError?<View style={S.warning}><Text style={S.warningText}>保存に問題が発生しました。端末の空き容量をご確認ください。</Text></View>:null}
      {report?<Card style={S.resultCard}>
        <Text style={S.resultEyebrow}>学習が終了しました</Text>
        <Text style={S.resultValue}>{report.correct}/{report.total}問 正解</Text>
        <Text style={S.resultSub}>{report.grade}級 · {report.mode==='full'?'本試験と同じ問題数（時間制限なし）':report.mode==='mini'?'ミニ模試':'一問一答'} · {Math.round(report.seconds/60*10)/10}分</Text>
        <Text style={S.resultSub}>正答率 {Math.round(report.correct/Math.max(1,report.total)*100)}% / 間違い {report.answers.filter(a=>!a.correct).length}問</Text>
        <View style={{height:15}}/>
        <BigButton title={reviewResults?'解答レビューを閉じる':'間違えた問題を確認 →'} onPress={()=>setReviewResults(v=>!v)}/>
        {reviewResults?<View style={{marginTop:16}}>{report.answers.filter(a=>!a.correct).length===0?<Text style={S.resultSub}>すべて正解です！</Text>:
          report.answers.filter(a=>!a.correct).map((a,i)=>{
            const q=questions.find(x=>x.id===a.id);if(!q)return null;
            return <View key={`${report.id}-${a.id}-${i}`} style={S.reviewItem}>
              <View style={S.row}><GradeBadge grade={q.grade}/><Text style={S.questionCategory}>{q.category}</Text></View>
              <Text style={S.reviewPrompt}>{i+1}. {q.prompt}</Text>
              {q.kind==='choice'?<>
                <Text style={S.reviewWrong}>あなたの解答：{a.selected===null?'未解答':`${a.selected+1}. ${q.options[a.selected]??'不明'}`}</Text>
                <Text style={S.reviewCorrect}>正解：{q.answer+1}. {q.options[q.answer]}</Text>
                <Text style={S.explanationText}>{q.explanation}</Text>
              </>:<>
                <Text style={S.reviewWrong}>自己評価：要復習</Text>
                {a.writing?<Text style={S.explanationText}>あなたの記述：{a.writing}</Text>:null}
                <Text style={S.reviewCorrect}>解答例</Text><Text style={S.explanationText}>{q.sample}</Text>
              </>}
              <Pressable onPress={()=>toggleStar(q.id)} style={{marginTop:8}}>
                <Text style={[S.link,{color:C.green}]}>{isStar(q.id)?'★ お気に入り登録済み':'☆ 後で復習するために保存'}</Text>
              </Pressable>
            </View>;
          })}</View>:null}
        <Pressable onPress={()=>{setReport(null);setReviewResults(false);}} style={{marginTop:12,alignItems:'center'}}><Text style={[S.link,{color:C.ink}]}>結果を閉じる ×</Text></Pressable>
      </Card>:null}
      {tab==='home'?<>
        {savedSession?<Card style={{borderColor:C.orange,borderWidth:2,marginBottom:15}}><Text style={S.cardTitle}>前回の学習を再開</Text><Text style={[S.sub,{marginVertical:9}]}>{savedSession.grade}級 · {savedSession.index+1}/{savedSession.ids.length}問目 · 回答済み {savedSession.answered}問</Text><BigButton title="続きから再開する →" onPress={resumeDraft}/><Pressable onPress={()=>confirmAction('途中の学習を破棄しますか？','回答済みの学習記録は残ります。','破棄',discardDraft)} style={{padding:12,alignItems:'center'}}><Text style={S.link}>途中の学習を破棄する</Text></Pressable></Card>:null}
        <View style={S.topBrand}><View><Text style={S.eyebrow}>YOUR DAILY FOOD LEARNING</Text><Text style={S.logo}>食のまなび<Text style={{color:C.orange}}>ノート</Text></Text><Text style={S.sub}>3級から1級まで。食の知識を、少しずつ。</Text></View><View style={S.logoMark}><Text style={{fontSize:26}}>🍊</Text></View></View>
        <Card style={S.hero}><View style={S.heroRow}><View style={{flex:1}}><Text style={S.heroOver}>今日の学習</Text><Text style={S.heroValue}>{today.answered} <Text style={{fontSize:19}}>／ {progress.dailyGoal} 問</Text></Text><Text style={S.heroSmall}>{today.answered>=progress.dailyGoal?'今日の目標を達成しました！':'小さな積み重ねが、合格への近道。'}</Text></View><Text style={{fontSize:44}}>🥗</Text></View><Bar value={today.answered/progress.dailyGoal*100} color={C.orange}/><View style={[S.row,{marginTop:14,gap:10}]}><Text style={S.heroSmall}>🔥 {streak(progress.days)} 日連続</Text><Text style={S.heroSmall}>📚 {completed} 問に挑戦</Text></View></Card>
        <SectionTitle title="級を選んで学ぶ" right="2026年 改訂範囲対応"/>
        {GRADE_ORDER.map(g=>{const s=statsByGrade(g);return <Pressable key={g} onPress={()=>chooseGrade(g)} style={S.gradeCard}><View style={[S.gradeSide,{backgroundColor:GRADE_INFO[g].color}]}/><View style={{flex:1}}><View style={S.row}><Text style={S.gradeName}>{g}級</Text><Text style={S.gradeMeta}>{s.unique} / {s.total} 問</Text></View><Text style={S.gradeDesc}>{g===3?'暮らしと食の基礎':g===2?'食を扱う実践的な知識':'専門的な知識と記述力'}</Text><Bar value={s.unique/s.total*100} color={GRADE_INFO[g].color}/></View><Text style={S.arrow}>›</Text></Pressable>})}
        <SectionTitle title="学習を続けよう"/>
        <View style={S.twoBtns}><Pressable style={[S.quickCard,{backgroundColor:C.orangeSoft}]} onPress={()=>{setQueue('new');setTab('learn');}}><Text style={S.quickIcon}>✍️</Text><Text style={S.quickTitle}>未解答の問題</Text><Text style={S.quickCaption}>初めての問題を優先</Text></Pressable>
          <Pressable style={[S.quickCard,{backgroundColor:C.greenSoft}]} onPress={()=>{setQueue('wrong');setTab('learn');}}><Text style={S.quickIcon}>🔁</Text><Text style={S.quickTitle}>苦手を復習</Text><Text style={S.quickCaption}>前回間違えた問題</Text></Pressable></View>
        <View style={S.infoStrip}><Text style={S.infoStripText}>※ 非公式の学習アプリ試作版。収録問題はすべてオリジナルです。公式サイトのチャレンジ問題を参考に出題領域と形式を整理しました。</Text></View>
      </>:null}
      {tab==='learn'?<>
        <View style={S.headerRow}><Text style={S.screenTitle}>問題を解く</Text><Text style={S.sub}>集中して、ひとつずつ。</Text></View>
        <Text style={S.controlLabel}>受験する級</Text><View style={S.pills}>{GRADE_ORDER.map(g=><Pill key={g} active={grade===g} label={`${g}級`} onPress={()=>{setGrade(g);setCategory('すべて');setQueue('random');}}/>)}</View>
        <Card style={{marginTop:14}}><View style={[S.row,{justifyContent:'space-between'}]}><Text style={S.cardTitle}>{grade}級の試験形式</Text><GradeBadge grade={grade}/></View><Text style={S.sub}>{GRADE_INFO[grade].format} · {GRADE_INFO[grade].questions}</Text><Text style={[S.small,{marginTop:7}]}>合格目安：{GRADE_INFO[grade].passing}{grade===1?'（2級取得者が受験対象）':''}</Text></Card>
        <Text style={S.controlLabel}>学習する分野</Text><View style={S.pills}><Pill label="すべて" active={category==='すべて'} onPress={()=>setCategory('すべて')}/>{GRADE_INFO[grade].categoryNames.map(x=><Pill key={x} label={x} active={category===x} onPress={()=>setCategory(x)}/>)}</View>
        <Text style={S.controlLabel}>出題する問題</Text><View style={S.pills}>{([['random','ランダム'],['new','未解答'],['wrong','間違えた問題'],['star','お気に入り']] as const).map(([v,l])=><Pill key={v} active={queue===v} label={l} onPress={()=>setQueue(v)}/>)}</View>
        <Card style={{marginTop:18}}><Text style={S.cardTitle}>現在の条件</Text><Text style={S.bigCount}>{eligible.length} <Text style={{fontSize:15,fontWeight:'500',color:C.muted}}>問から出題</Text></Text><Text style={S.small}>一問一答・ミニ模試は最大10問。1級には記述式練習も含まれます。</Text><View style={{height:15}}/><BigButton title="10問で学習を始める →" onPress={()=>begin('practice')}/><View style={{height:9}}/><BigButton title="10問ミニ模試（選択式のみ）" secondary onPress={()=>begin('mini')}/><View style={{height:9}}/><BigButton title={`${grade}級 本試験の問題数で練習（時間制限なし）`} secondary onPress={()=>begin('full')}/><Text style={[S.small,{marginTop:10}]}>※ 問題数を本試験形式に合わせた独自作成の練習です。実際の試験の制限時間（90分）・分野別出題配分・公式問題は再現していません。1級の記述式は自己評価方式です。</Text></Card>
      </>:null}
      {tab==='records'?<>
        <Text style={S.screenTitle}>学習記録</Text><Text style={S.sub}>がんばった分だけ、少しずつ前へ。</Text>
        <View style={[S.twoBtns,{marginTop:20}]}><MiniStat value={`${attempts}`} label="解答回数"/><MiniStat value={attempts?`${Math.round(accurate/attempts*100)}%`:'—'} label="全体の正答率"/></View>
        <View style={S.twoBtns}><MiniStat value={`${streak(progress.days)}日`} label="連続学習"/><MiniStat value={`${Math.round(Object.values(progress.days).reduce((s,d)=>s+d.seconds,0)/60)}分`} label="学習時間（完了分）"/></View>
        <SectionTitle title="直近の学習結果"/>
        {progress.history.length===0?<Text style={S.sub}>まだ完了した学習履歴はありません。</Text>:
          progress.history.slice(0,5).map(h=><Pressable key={h.id} style={[S.card,{marginBottom:9}]} onPress={()=>{setReport(h);setReviewResults(true);setTab('records');}}>
            <View style={[S.row,{justifyContent:'space-between'}]}><Text style={S.cardTitle}>{h.grade}級 · {h.correct}/{h.total}問 正解</Text><Text style={S.link}>復習 →</Text></View>
            <Text style={S.small}>{h.at.slice(0,10)} · 間違い {h.answers.filter(a=>!a.correct).length}問</Text>
          </Pressable>)}
        <SectionTitle title="級ごとの進捗"/>
        {GRADE_ORDER.map(g=>{const d=statsByGrade(g);return <Card key={g} style={{marginBottom:11}}><View style={[S.row,{justifyContent:'space-between',marginBottom:10}]}><Text style={S.cardTitle}>{g}級</Text><Text style={S.small}>初回回答 {d.unique}/{d.total}</Text></View><Bar value={d.unique/d.total*100} color={GRADE_INFO[g].color}/><Text style={[S.small,{marginTop:8}]}>累計正答率：{d.unique?d.rate+'%':'未解答'}</Text></Card>;})}
        <SectionTitle title="分野ごとの学習"/>
        {GRADE_INFO[grade].categoryNames.map(c=>{
          const all=questions.filter(q=>q.grade===grade&&q.category===c), rows=all.map(q=>progress.answers[q.id]).filter(Boolean) as AnswerRecord[];
          const n=rows.reduce((s,x)=>s+x.attempts,0),hit=rows.reduce((s,x)=>s+x.correct,0);
          return <View key={c} style={{marginBottom:15}}><View style={[S.row,{justifyContent:'space-between',marginBottom:6}]}><Text style={{color:C.ink,flex:1,fontSize:12,fontWeight:'700'}}>{c}</Text><Text style={S.small}>{n?Math.round(hit/n*100)+'%':'—'}</Text></View><Bar value={n?hit/n*100:0} color={GRADE_INFO[grade].color}/></View>;
        })}
        <View style={S.pills}>{GRADE_ORDER.map(g=><Pill key={g} active={grade===g} label={`${g}級の分野`} onPress={()=>setGrade(g)}/>)}</View>
        <Text style={[S.small,{marginTop:20}]}>正答率は練習問題の履歴です。実際の合格可能性を保証するものではありません。</Text>
      </>:null}
      {tab==='settings'?<>
        <Text style={S.screenTitle}>設定・公式資料</Text><Text style={S.sub}>試験情報と学習データの管理</Text>
        <SectionTitle title="毎日の学習目標"/>
        <Card><Text style={S.sub}>現在の目標：{progress.dailyGoal}問 / 日</Text><View style={[S.pills,{marginTop:12}]}>{[5,10,15,20].map(n=><Pill key={n} label={`${n}問`} active={progress.dailyGoal===n} onPress={()=>setProgress(p=>({...p,dailyGoal:n}))}/>)}</View><Text style={[S.small,{marginTop:12}]}>初回学習日：{progress.firstDate}</Text></Card>
        <SectionTitle title="公式情報・問題集"/>
        <Card>{OFFICIAL_LINKS.map((item,i)=><Pressable key={item.url} onPress={()=>openOfficial(item.url)} style={[S.linkRow,i>0&&{borderTopWidth:1,borderColor:C.line}]}><Text style={S.linkTitle}>{item.label}</Text><Text style={S.linkArrow}>↗</Text></Pressable>)}</Card>
        <SectionTitle title="このアプリについて"/>
        <Card><Text style={S.cardTitle}>食のまなびノート v1.0.45（試作版）</Text><Text style={S.paragraph}>FLAネットワーク協会と関係のない非公式の学習アプリです。収録した問題・解説は当試作版用に独自作成したもので、公式過去問を転載したものではありません。</Text><Text style={S.paragraph}>2026年に刷新された3級・2級と、新設1級の試験範囲を参考にしています。制度や食品表示等の最新情報は必ず公式資料でご確認ください。現在の問題は公開前の監修・校正段階です。</Text><Text style={S.paragraph}>学習記録は端末内に保存します。アカウント登録やクラウド同期、AIへのデータ送信は実装していません。</Text></Card>
        <SectionTitle title="データ管理"/><BigButton title="学習記録をJSONでバックアップ（Web版）" secondary onPress={()=>{void exportBackup();}}/><Text style={[S.small,{marginTop:9,marginBottom:14}]}>学習履歴と中断中の問題を端末から読み取り、JSONファイルとして保存します。復元する場合は設定画面から操作してください。個人の学習記録が含まれるため共有しないでください。</Text><BigButton title="バックアップJSONを確認（復元なし・Web版）" secondary onPress={inspectBackupOnWeb}/><Text style={[S.small,{marginTop:9,marginBottom:14}]}>ファイルの形式と件数のみ確認します。データの復元や上書きは行いません。</Text><BigButton title="バックアップJSONから復元（上書き・Web版）" secondary onPress={restoreBackupOnWeb}/><Text style={[S.small,{marginTop:9,marginBottom:14}]}>現在の学習記録を先にバックアップしてください。復元すると現在の記録は上書きされ、ページが再読み込みされます。</Text><BigButton title="学習記録をすべて削除" secondary onPress={reset}/><Text style={[S.small,{marginTop:9}]}>削除後は復元できません。アプリのアンインストール時にも記録が失われる場合があります。</Text>
      </>:null}
    </ScrollView>
    <View style={S.tabs}>{([['home','⌂','ホーム'],['learn','✎','学習'],['records','▥','記録'],['settings','⚙','設定']] as const).map(([t,ico,label])=><Pressable key={t} style={S.tab} onPress={()=>{setTab(t);setReport(null);}}><Text style={[S.tabIcon,tab===t&&{color:C.orange}]}>{ico}</Text><Text style={[S.tabLabel,tab===t&&{color:C.ink,fontWeight:'800'}]}>{label}</Text></Pressable>)}</View>
  </SafeAreaView>;
}

const S=StyleSheet.create({
  root:{flex:1,backgroundColor:C.bg}, page:{paddingHorizontal:20,paddingBottom:34,paddingTop:10},
  topBrand:{marginTop:24,marginBottom:18,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  logo:{fontWeight:'900',fontSize:25,letterSpacing:-.8,color:C.ink}, logoMark:{width:58,height:58,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF0DE',borderRadius:22},
  eyebrow:{fontSize:10,color:C.orange,fontWeight:'900',letterSpacing:1.8,marginBottom:6}, sub:{fontSize:12,color:C.muted,lineHeight:19,marginTop:4},small:{fontSize:11,color:C.muted,lineHeight:17},
  card:{backgroundColor:C.paper,padding:18,borderRadius:20,borderWidth:1,borderColor:C.line},
  hero:{backgroundColor:'#2E4338',borderWidth:0,padding:21,borderRadius:23}, heroRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18},
  heroOver:{fontSize:12,color:'#E4EAE4',fontWeight:'800'}, heroValue:{fontSize:35,fontWeight:'900',color:'#FFFFFF',marginTop:8},heroSmall:{fontSize:12,color:'#E0E8E0',marginTop:5},
  resultCard:{backgroundColor:'#E8F4E8',marginTop:14,borderColor:'#C1DAC6'},
  resultEyebrow:{fontSize:12,fontWeight:'900',color:'#245B3D'},
  resultValue:{fontSize:34,fontWeight:'900',color:'#1D382A',marginTop:10,marginBottom:6},
  resultSub:{fontSize:13,lineHeight:22,color:'#335E46'},
  reviewItem:{backgroundColor:'#FFFFFF',borderColor:'#CFDFD3',borderWidth:1,borderRadius:14,padding:14,marginBottom:12},
  reviewPrompt:{fontSize:16,fontWeight:'800',color:'#24342E',lineHeight:25,marginVertical:12},
  reviewWrong:{fontSize:13,color:'#A3322B',lineHeight:22,marginBottom:4},
  reviewCorrect:{fontSize:13,color:'#1B6B3F',fontWeight:'800',lineHeight:22,marginBottom:8},
  row:{flexDirection:'row',alignItems:'center',gap:8}, sectionHeading:{marginTop:27,marginBottom:13,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  sectionTitle:{fontWeight:'900',fontSize:18,color:C.ink},gradeCard:{flexDirection:'row',alignItems:'center',gap:16,backgroundColor:C.paper,borderRadius:19,paddingRight:18,overflow:'hidden',marginBottom:10,borderWidth:1,borderColor:C.line},gradeSide:{width:8,height:92},
  gradeName:{fontWeight:'900',fontSize:21,color:C.ink},gradeMeta:{fontSize:12,color:C.muted,marginLeft:'auto'},gradeDesc:{color:C.muted,fontSize:11,marginTop:2,marginBottom:13}, arrow:{fontSize:26,color:C.muted},
  barBack:{height:7,backgroundColor:'#EAEAE2',borderRadius:10,overflow:'hidden'},barFill:{height:'100%',borderRadius:10},
  twoBtns:{flexDirection:'row',gap:10,marginBottom:10},quickCard:{flex:1,borderRadius:19,padding:16,minHeight:124},quickIcon:{fontSize:22},quickTitle:{fontSize:15,color:C.ink,fontWeight:'800',marginTop:12},quickCaption:{fontSize:11,color:C.muted,marginTop:6},
  infoStrip:{marginTop:21,padding:14,backgroundColor:'#F1F0EB',borderRadius:13},infoStripText:{fontSize:11,color:C.muted,lineHeight:18},
  tabs:{flexDirection:'row',justifyContent:'space-around',borderTopWidth:1,borderTopColor:C.line,backgroundColor:C.paper,paddingTop:10,paddingBottom:Platform.OS==='ios'?9:11},
  tab:{flex:1,alignItems:'center',justifyContent:'center',gap:2},tabIcon:{fontSize:21,fontWeight:'700',color:'#B3B9AF'},tabLabel:{fontSize:10,color:'#8C968A'},
  screenTitle:{fontSize:29,color:C.ink,fontWeight:'900',marginTop:23},headerRow:{marginBottom:5},
  controlLabel:{fontSize:13,fontWeight:'900',color:C.ink,marginTop:23,marginBottom:12},pills:{flexDirection:'row',flexWrap:'wrap',gap:8},
  pill:{borderRadius:22,paddingVertical:10,paddingHorizontal:14,backgroundColor:C.paper,borderWidth:1,borderColor:C.line},pillActive:{backgroundColor:C.ink,borderColor:C.ink},
  pillText:{color:C.ink,fontSize:12,fontWeight:'700'},pillTextActive:{color:C.paper},cardTitle:{fontSize:15,fontWeight:'900',color:C.ink},
  gradeBadge:{paddingHorizontal:10,paddingVertical:6,borderRadius:9},gradeBadgeText:{fontSize:12,fontWeight:'900'},
  bigCount:{fontSize:36,fontWeight:'900',color:C.ink,marginVertical:9},bigButton:{backgroundColor:C.orange,borderRadius:15,alignItems:'center',justifyContent:'center',minHeight:51,padding:10},bigButtonText:{color:'#fff',fontSize:14,fontWeight:'900'},
  secondaryButton:{backgroundColor:C.paper,borderWidth:1,borderColor:C.line},secondaryButtonText:{color:C.ink},
  stat:{flex:1,backgroundColor:C.paper,padding:17,borderRadius:17,borderWidth:1,borderColor:C.line},statValue:{fontSize:25,fontWeight:'900',color:C.ink},statLabel:{fontSize:11,color:C.muted,marginTop:5},
  linkRow:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:14},linkTitle:{fontSize:13,fontWeight:'700',color:C.ink,flex:1},linkArrow:{fontSize:19,color:C.orange,fontWeight:'900'},
  paragraph:{fontSize:12,color:C.muted,lineHeight:21,marginTop:14},
  warning:{backgroundColor:C.redSoft,padding:12,margin:14,borderRadius:10},warningText:{color:C.red,fontSize:12},
  quizTop:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:18,paddingVertical:9},x:{fontSize:30,color:C.muted},star:{fontSize:28,color:C.orange},
  quizContent:{paddingHorizontal:16,paddingTop:12,paddingBottom:22},questionCategory:{fontSize:12,color:C.muted,fontWeight:'700',flexShrink:1},
  questionPrompt:{fontSize:19,fontWeight:'900',lineHeight:29,color:C.ink,marginTop:13,marginBottom:15},
  // Compact while keeping >=48pt tap targets; longer Japanese options can still wrap.
  option:{flexDirection:'row',alignItems:'center',backgroundColor:C.paper,paddingVertical:9,paddingHorizontal:11,borderRadius:12,borderWidth:1.5,borderColor:C.line,marginBottom:7,gap:10,minHeight:48},
  optionLetter:{height:26,width:26,borderRadius:8,backgroundColor:C.soft,alignItems:'center',justifyContent:'center'},optionLetterText:{fontWeight:'900',color:C.muted},optionText:{flex:1,color:C.ink,fontSize:13,lineHeight:19,fontWeight:'600'},
  explanationCard:{marginTop:8,padding:14,backgroundColor:'#FBFEFA'},explanationHeadline:{fontSize:17,color:C.green,fontWeight:'900',marginBottom:9},explanationAnswer:{fontSize:13,color:C.ink,fontWeight:'800',lineHeight:20,marginBottom:7},explanationText:{fontSize:13,color:C.ink,lineHeight:22},
  quizFooter:{paddingHorizontal:16,paddingBottom:10,paddingTop:8,borderTopColor:C.line,borderTopWidth:1,backgroundColor:C.paper},quizModeLabel:{fontSize:11,color:C.muted,textAlign:'center',marginBottom:8},
  quizFeedback:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:8,marginBottom:8,minHeight:36},
  quizFeedbackText:{fontWeight:'900',fontSize:14,flexShrink:1},
  explanationToggle:{minHeight:36,justifyContent:'center',paddingHorizontal:10,borderRadius:9,backgroundColor:C.greenSoft},
  explanationToggleText:{fontSize:12,fontWeight:'800',color:C.green},
  writtenHint:{fontSize:12,color:C.purple,marginBottom:14,fontWeight:'700'},writingInput:{minHeight:160,backgroundColor:C.paper,borderWidth:1,borderColor:C.line,borderRadius:15,padding:15,fontSize:15,lineHeight:23,color:C.ink,marginBottom:16},
  selfButton:{flex:1,paddingVertical:12,alignItems:'center',borderRadius:13},link:{fontWeight:'800',fontSize:12},
});
