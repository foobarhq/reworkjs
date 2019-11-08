(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OenQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return i}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var r=n("SAVP"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/custom-babelrc.md"}});var b={_frontmatter:l},c=o.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,a({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"custom-babelrc"},"Custom ",Object(r.b)("inlineCode",{parentName:"h1"},".babelrc")),Object(r.b)("p",null,"Rework pre-configures babel to transpile stable ES and React features."),Object(r.b)("p",null,"Following is the list of babel plugins ran by default:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Ran on both your project and ",Object(r.b)("inlineCode",{parentName:"strong"},"node_modules")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"@babel/preset-env"),Object(r.b)("li",{parentName:"ul"},"@babel/plugin-transform-runtime"),Object(r.b)("li",{parentName:"ul"},"babel-plugin-transform-react-remove-prop-types (production only)"),Object(r.b)("li",{parentName:"ul"},"@babel/plugin-transform-react-constant-elements (production only)"),Object(r.b)("li",{parentName:"ul"},"babel-plugin-lodash (production only)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Ran on your project only"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"@babel/plugin-react-intl-auto"),Object(r.b)("li",{parentName:"ul"},"@babel/plugin-syntax-dynamic-import"),Object(r.b)("li",{parentName:"ul"},"@babel/preset-react"),Object(r.b)("li",{parentName:"ul"},"react-hot-loader/babel (dev with HMR only)")))),Object(r.b)("p",null,"If you need to specify which EcmaScript features should be transpiled, we recommend you do so by creating a ",Object(r.b)("inlineCode",{parentName:"p"},".browserlistsrc")," file in the root directory of your project. This will affect both your dependencies and your source code."),Object(r.b)("p",null,"If you need to configure it further, you can create your own .babelrc. Keep in mind that this configuration will only be used for the source code of your project, not your dependencies. \\\nIf you choose to do so, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"@reworkjs/core/babel-preset")," as the preset:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-json5"}),'// .babelrc\n\n{\n  "presets": ["@reworkjs/core/babel-preset"],\n  "plugins": [\n    "@babel/plugin-transform-flow-strip-types",\n    "@babel/plugin-proposal-class-properties",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }]\n  ]\n}\n')),Object(r.b)("p",null,"Note: all default plugins can be configured by passing an option object to the babel preset, where the key is the name of the plugin you wish to configure and the key is its configuration."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-json5"}),'// .babelrc\n\n{\n  "presets": ["@reworkjs/core/babel-preset", {\n    "@babel/plugin-transform-runtime": {\n      "corejs": true\n    }\n  }],\n  "plugins": [\n    "@babel/plugin-transform-flow-strip-types",\n    "@babel/plugin-proposal-class-properties",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }]\n  ]\n}\n')))}i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/custom-babelrc.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-custom-babelrc-md-6a79bf8bf47e07c73691.js.map