(()=>{"use strict";var e,t={641:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,r=window.wp.data,n=window.wp.i18n,l=JSON.parse('{"UU":"block-development-examples/dynamic-block-b0bce7"}');(0,e.registerBlockType)(l.UU,{edit:function({attributes:{message:e},setAttributes:l}){const{title:a}=(0,r.useSelect)((e=>{var t;return null!==(t=e("core").getSite())&&void 0!==t?t:{}}));return(0,t.createElement)("p",{...(0,o.useBlockProps)()},(0,t.createElement)(o.RichText,{tagName:"span",value:e,onChange:e=>l({message:e})}),(0,t.createElement)("span",null," ","| ",null!=a?a:(0,n.__)("loading…","block-development-examples")))}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,n,l]=e[p],i=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,n,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[a,i,c]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var p=c(r)}for(t&&t(o);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(p)},o=globalThis.webpackChunk_block_development_examples_dynamic_block_b0bce7=globalThis.webpackChunk_block_development_examples_dynamic_block_b0bce7||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[350],(()=>r(641)));n=r.O(n)})();