(()=>{"use strict";const e=window.React,o=window.wp.blocks,l=window.wp.blockEditor,c=JSON.parse('{"UU":"block-development-examples/minimal-block-ca6eda"}');(0,o.registerBlockType)(c.UU,{edit:()=>(0,e.createElement)("p",{...(0,l.useBlockProps)()},"Hello World - Block Editor"),save:()=>(0,e.createElement)("p",{...l.useBlockProps.save()},"Hello World - Frontend")})})();