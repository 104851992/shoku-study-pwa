const assert=require('node:assert/strict');
const old=Object.create(null);old['__proto__']={attempts:1};
const updated=Object.assign(Object.create(null),old,{['__proto__']:{attempts:2}});
assert.equal(Object.getPrototypeOf(updated),null);
assert.equal(updated['__proto__'].attempts,2);
assert.equal(JSON.parse(JSON.stringify(updated))['__proto__'].attempts,2);
assert.equal(old['__proto__'].attempts,1);
const fresh=Object.create(null);assert.equal(fresh['constructor'],undefined);
console.log('5/5 null-prototype write tests passed');
