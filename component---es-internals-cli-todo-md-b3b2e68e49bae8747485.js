(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"iA5/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return o}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var i=n("SAVP"),b=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"es/internals/cli/TODO.md"}});var a={_frontmatter:l},c=b.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,b={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,["components"]);return Object(i.b)(c,r({},a,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"binary-methods"},"binary methods:"),Object(i.b)("h2",{id:"install"},Object(i.b)("inlineCode",{parentName:"h2"},"install")),Object(i.b)("p",null,"Add to package.json:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"pre-commit": "framework lint staged"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"lint-staged": {\n   "*.js": "framework lint script",\n     "*.css": "framework lint style"\n }'))),Object(i.b)("h2",{id:"lint-staged"},Object(i.b)("inlineCode",{parentName:"h2"},"lint staged")),Object(i.b)("p",null,"run ",Object(i.b)("inlineCode",{parentName:"p"},"lint-staged")),Object(i.b)("h2",{id:"lint-script"},Object(i.b)("inlineCode",{parentName:"h2"},"lint script")),Object(i.b)("p",null,"run ",Object(i.b)("inlineCode",{parentName:"p"},"eslint --ignore-path .gitignore \n            --ignore-pattern $(config.directories.build) \n            --ignore-pattern $(config.directories.resources)")),Object(i.b)("h2",{id:"lint-style"},Object(i.b)("inlineCode",{parentName:"h2"},"lint style")),Object(i.b)("p",null,"run ",Object(i.b)("inlineCode",{parentName:"p"},"stylelint ./app/**/*.s?css")),Object(i.b)("h2",{id:"start-dev"},Object(i.b)("inlineCode",{parentName:"h2"},"start dev")),Object(i.b)("p",null,"Build DLLs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cross-env NODE_ENV=development babel-node ./framework/server")),Object(i.b)("h2",{id:"start-tunnel"},Object(i.b)("inlineCode",{parentName:"h2"},"start tunnel")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cross-env NODE_ENV=development ENABLE_TUNNEL=true node .build/server")),Object(i.b)("h2",{id:"start-production"},Object(i.b)("inlineCode",{parentName:"h2"},"start prod(uction)?")),Object(i.b)("p",null,"Build DLLs"),Object(i.b)("p",null,"Build server"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cross-env NODE_ENV=production node .build/server")),Object(i.b)("h2",{id:"clean"},Object(i.b)("inlineCode",{parentName:"h2"},"clean")),Object(i.b)("p",null,"Remove any generated folder (",Object(i.b)("inlineCode",{parentName:"p"},".build"),")"),Object(i.b)("h2",{id:"build"},Object(i.b)("inlineCode",{parentName:"h2"},"build")),Object(i.b)("p",null,"Build DLLs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cross-env NODE_ENV=production webpack --config framework/internals/webpack/webpack.prod.babel.js --color -p")),Object(i.b)("h2",{id:"build-dll"},Object(i.b)("inlineCode",{parentName:"h2"},"build dll")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"babel-node -- ./framework/internals/scripts/dependencies.js")),Object(i.b)("h2",{id:"build-server"},Object(i.b)("inlineCode",{parentName:"h2"},"build server")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"babel server -d .build/server && babel internals -d .build/internals")),Object(i.b)("h2",{id:"extract-intl"},Object(i.b)("inlineCode",{parentName:"h2"},"extract-intl")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"babel-node -- ./framework/internals/scripts/extract-intl.js")),Object(i.b)("h2",{id:"pagespeed"},Object(i.b)("inlineCode",{parentName:"h2"},"pagespeed")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"node ./internals/scripts/pagespeed.js")),Object(i.b)("h2",{id:"test"},Object(i.b)("inlineCode",{parentName:"h2"},"test")),Object(i.b)("h2",{id:"test---coverage"},Object(i.b)("inlineCode",{parentName:"h2"},"test --coverage")))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"es/internals/cli/TODO.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---es-internals-cli-todo-md-b3b2e68e49bae8747485.js.map