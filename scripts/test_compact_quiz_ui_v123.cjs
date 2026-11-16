// Contract checks for the v123 compact quiz layout. These are static source checks,
// NOT a substitute for web browser / iOS / Android interaction testing.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const ts = (() => {try {return require('typescript');} catch {
  return require(path.join(execFileSync('npm',['root','-g'],{encoding:'utf8'}).trim(),'typescript'));
}})();
const file=fs.readFileSync(path.resolve(__dirname,'../src/AppRoot.tsx'),'utf8');
const source=ts.createSourceFile('AppRoot.tsx',file,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
let tests=0;
function check(name,fn){try{fn();tests++;}catch(e){console.error(`FAILED ${name}`);throw e;}}
function style(styleName,property){
  const start=file.indexOf(`${styleName}:{`);assert.notEqual(start,-1,`${styleName} style missing`);
  const match=file.slice(start).match(new RegExp(`\\b${property}:(\\d+)`));
  assert.ok(match,`${styleName}.${property} missing`);return +match[1];
}
check('TSX parses without syntax diagnostics',()=>assert.equal(source.parseDiagnostics.length,0));
check('Tap target remains at least 48 points but is compact',()=>{
  const h=style('option','minHeight');assert.ok(h>=48&&h<=56,`height=${h}`);
  assert.ok(style('option','paddingVertical')<=11);
});
check('Question spacing is reduced without hiding the question',()=>{
  assert.ok(style('quizContent','paddingTop')<=16);
  assert.ok(style('questionPrompt','marginBottom')<=16);
});
check('Answer feedback is fixed in footer and gated to practice answered choices',()=>{
  assert.match(file,/answerHandled && activeQuestion\.kind==='choice' && !isMini\?<View style=\{S\.quizFeedback\}>/);
  assert.match(file,/selected===activeQuestion\.answer\?'✓ 正解'/);
});
check('Explanation is opt-in, only after answering outside mock tests',()=>{
  assert.match(file,/answerHandled&&!isMini&&showExplanation\?<Card style=\{S\.explanationCard\}>/);
  assert.match(file,/onPress=\{\(\)=>setShowExplanation\(v=>!v\)\}/);
  assert.match(file,/accessibilityState=\{\{expanded:showExplanation\}\}/);
});
check('Open explanation scrolls into view, but not after every answer',()=>{
  assert.match(file,/onContentSizeChange=\{\(\)=>\{if\(showExplanation\)quizScrollRef\.current\?\.scrollToEnd/);
  assert.match(file,/ref=\{quizScrollRef\}/);
});
check('New questions reset to top and collapse explanation',()=>{
  assert.match(file,/quizScrollRef\.current\?\.scrollTo\(\{y:0,animated:false\}\);setShowExplanation\(false\);/);
  assert.ok((file.match(/setShowExplanation\(false\)/g)||[]).length>=5);
});
check('Next remains gated on submitting an answer',()=>{
  assert.match(file,/disabled=\{!answerHandled\} onPress=\{next\}/);
});
check('Settings displays updated preview version',()=>assert.match(file,/食のまなびノート v1\.0\.45（試作版）/));
console.log(`Compact quiz UI source contracts: ${tests}/${tests} passed`);
