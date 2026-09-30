"use strict";var o=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var f=o(function(O,s){
var x=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),p=require('@stdlib/ndarray-base-numel-dimension/dist'),g=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),I=require('@stdlib/ndarray-base-data-buffer/dist'),D=require('@stdlib/ndarray-base-clip-index/dist'),k=require('@stdlib/blas-ext-base-gfind-index/dist').ndarray;function w(t,e,u){var r,v,d,n,a,i;if(i=t[0],r=x(t[1]),a=p(i,0),r=D(r,a),r>=a)return-1;return a-=r,v=g(i,0),d=m(i)+v*r,n=k(a,I(i),v,d,l,null),n>=0&&(n+=r),n;function l(q,c){return e.call(u,q,c+r,i)}}s.exports=w
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
