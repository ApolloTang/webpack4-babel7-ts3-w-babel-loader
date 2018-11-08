console.log('using ts-entrypoint.ts as entry point');
import resolveMyExt from './resolve-my-extension';
console.log('resolveMyExt: ', resolveMyExt)

import resolveMyExt2 from './resolve-my-extension.js';
console.log('resolveMyExt2: ', resolveMyExt2)

import somets from './somets';
console.log('somets: ', somets)

// import somejs from './somejs.js';
console.log('somejs: ', somejs())


