console.log('vvv entering somets.ts vvv')

// this;
let say = (a: string) => console.log(`${a}`);
say('hello ts')

const wm = new WeakMap();
console.log('wm: ', wm)

const includeWorks = [1,2,3].includes(2);
console.log('includesWorks: ', includeWorks)

const p = new Promise(rs=>{});
console.log('p: ', p)

const x: string = 'some string from a ts file';
// console.log('xxxx', idontexist) //<-- comment out to test source map

console.log('^^^ existing somets.ts ^^^')
export default x;
