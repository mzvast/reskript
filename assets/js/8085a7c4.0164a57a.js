(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[2977],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,u=m["".concat(o,".").concat(c)]||m[c]||k[c]||i;return t?r.createElement(u,l(l({ref:n},s),{},{components:t})):r.createElement(u,l({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6512:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>s,default:()=>m});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),l=["components"],p={title:"\u5347\u7ea7\u81f3V2"},o=void 0,d={unversionedId:"migration/v2",id:"migration/v2",isDocsHomePage:!1,title:"\u5347\u7ea7\u81f3V2",description:"\u672c\u6587\u6458\u5f55\u4e86reSKRipt V2\u7248\u672c\u7684\u6240\u6709\u7834\u574f\u6027\u53d8\u66f4\uff0c\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u75281.x\u7248\u672c\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u8fdb\u884c\u5347\u7ea7\u3002\u5982\u679c\u4f60\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u56f0\u96be\uff0c\u6b22\u8fce\u5728GitHub\u4e0a\u63d0\u4ea4Issue\u6765\u54a8\u8be2\u3002",source:"@site/docs/migration/v2.md",sourceDirName:"migration",slug:"/migration/v2",permalink:"/reskript/docs/migration/v2",version:"current",frontMatter:{title:"\u5347\u7ea7\u81f3V2"},sidebar:"docs",previous:{title:"Monorepo\u6e90\u7801\u4f9d\u8d56",permalink:"/reskript/docs/plugins/workspace-no-build"},next:{title:"FAQ",permalink:"/reskript/docs/faq"}},s=[{value:"\u81ea\u52a8\u68c0\u6d4b",id:"\u81ea\u52a8\u68c0\u6d4b",children:[]},{value:"\u6bcf\u4e00\u4f4d\u90fd\u8981\u4e86\u89e3\u7684",id:"\u6bcf\u4e00\u4f4d\u90fd\u8981\u4e86\u89e3\u7684",children:[{value:"NodeJS\u7248\u672c",id:"nodejs\u7248\u672c",children:[]},{value:"\u63a8\u8350\u56fa\u5b9a\u7248\u672c",id:"\u63a8\u8350\u56fa\u5b9a\u7248\u672c",children:[]},{value:"\u5b89\u88c5core-js",id:"\u5b89\u88c5core-js",children:[]},{value:"SVG\u4f7f\u7528\u65b9\u5f0f\u53d8\u5316",id:"svg\u4f7f\u7528\u65b9\u5f0f\u53d8\u5316",children:[]}]},{value:"\u547d\u4ee4\u884c\u53d8\u66f4",id:"\u547d\u4ee4\u884c\u53d8\u66f4",children:[{value:"build",id:"build",children:[]},{value:"dev",id:"dev",children:[]},{value:"babel",id:"babel",children:[]},{value:"test",id:"test",children:[]}]},{value:"\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4",id:"\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4",children:[{value:"build\u76f8\u5173",id:"build\u76f8\u5173",children:[]},{value:"\u5165\u53e3\u914d\u7f6e\u76f8\u5173",id:"\u5165\u53e3\u914d\u7f6e\u76f8\u5173",children:[]},{value:"devServer\u76f8\u5173",id:"devserver\u76f8\u5173",children:[]},{value:"play\u76f8\u5173",id:"play\u76f8\u5173",children:[]}]},{value:"API\u548c\u7ec6\u8282\u53d8\u66f4",id:"api\u548c\u7ec6\u8282\u53d8\u66f4",children:[]}],k={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6458\u5f55\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"reSKRipt V2"),"\u7248\u672c\u7684\u6240\u6709\u7834\u574f\u6027\u53d8\u66f4\uff0c\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"1.x"),"\u7248\u672c\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u8fdb\u884c\u5347\u7ea7\u3002\u5982\u679c\u4f60\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u56f0\u96be\uff0c\u6b22\u8fce",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/reskript/issues/new"},"\u5728GitHub\u4e0a\u63d0\u4ea4Issue"),"\u6765\u54a8\u8be2\u3002"),(0,i.kt)("p",null,"V2\u7684\u4e3b\u8981\u66f4\u65b0\u4e3a\u5f15\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-sever 4.x"),"\u7248\u672c\uff0c\u5e76\u4ee5\u6b64\u4e3a\u5951\u673a\u5e9f\u5f03\u90e8\u5206\u4e0d\u5408\u7406\u7684\u63a5\u53e3\uff0c\u603b\u4f53\u4e0a\u8c03\u6574\u6709\u9650\u3002"),(0,i.kt)("h2",{id:"\u81ea\u52a8\u68c0\u6d4b"},"\u81ea\u52a8\u68c0\u6d4b"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5148\u4f7f\u7528\u6211\u4eec\u7684\u8fc1\u79fb\u811a\u672c\u5bf9\u9879\u76ee\u505a\u4e00\u6b21\u5feb\u901f\u5730\u626b\u63cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4fdd\u6301\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\nnpx @reskript/doctor migrate-v2\n")),(0,i.kt)("p",null,"\u4f60\u4f1a\u5feb\u901f\u5f97\u5230\u4e00\u4efd\u7c7b\u4f3c\u8fd9\u6837\u7684\u62a5\u544a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u26a0 @reskript/cli@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 @reskript/cli-build@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 @reskript/cli-dev@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 @reskript/cli-lint@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 @reskript/cli-play@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 @reskript/config-lint@1.x still installed, upgrade it to a fixed version of latest 2.x release\n\u26a0 can't find core-js installed, please install it\n    see: https://reskript.vercel.app/docs/migration/v2#\u5b89\u88c5core-js\n\u2139 @reskript/* is installed with a version range, better to install a fixed version\n    see: https://reskript.vercel.app/docs/migration/v2#\u63a8\u8350\u56fa\u5b9a\u7248\u672c\n\u26a0 play.injectResources in reskript.config.js is deprecated and replaced by defaultGlobalSetup\n    see: https://reskript.vercel.app/docs/migration/v2#play\u76f8\u5173\n\u26a0 found files contains {ReactComponent} named import from svg, change to default import from .svg?react\n    src/components/Foo/Bar.tsx\n    src/components/Button/index.tsx\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6267\u884c\u811a\u672c\u7684\u76ee\u5f55\u4e0b\u5fc5\u987b\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c\u4e14\u4e0d\u80fd\u662fmonorepo\u7684\u6839\u76ee\u5f55\u3002"))),(0,i.kt)("p",null,"\u6309\u7167\u62a5\u544a\u7684\u8bf4\u660e\u8fdb\u884c\u4fee\u590d\u540e\uff0c\u5982\u679c\u4f9d\u7136\u6709\u95ee\u9898\uff0c\u4ee5\u4e0b\u662f\u5404\u53d8\u66f4\u7684\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,i.kt)("h2",{id:"\u6bcf\u4e00\u4f4d\u90fd\u8981\u4e86\u89e3\u7684"},"\u6bcf\u4e00\u4f4d\u90fd\u8981\u4e86\u89e3\u7684"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662fV2\u7248\u672c\u4e2d\u6d89\u53ca\u5230\u6240\u6709\u4f7f\u7528\u8005\u7684\u53d8\u5316\uff0c\u65e0\u8bba\u4f60\u4ee5\u4ec0\u4e48\u6837\u7684\u5f62\u5f0f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\uff0c\u4f60\u90fd\u5e94\u8be5\u5173\u5fc3\u8fd9\u4e9b\u53d8\u66f4\u3002"),(0,i.kt)("h3",{id:"nodejs\u7248\u672c"},"NodeJS\u7248\u672c"),(0,i.kt)("p",null,"\u5728V2\u4e2d\uff0cNodeJS\u7684\u6700\u4f4e\u7248\u672c\u8981\u6c42\u5347\u7ea7\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"14.14.0"),"\uff0c\u8fd9\u662f\u4e3a\u4e86\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"fs.rm"),"\u51fd\u6570\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u76ee\u5f55\u3001\u6587\u4ef6\u7684\u6e05\u7406\u3002V1\u7248\u672c\u7684NodeJS\u8981\u6c42\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"14.13.1"),"\uff0c\u6240\u4ee5\u4f60\u53ea\u8981\u786e\u4fdd\u672c\u5730NodeJS\u7248\u672c\u7b26\u5408\u8981\u6c42\uff0c\u57fa\u672c\u4e0d\u9700\u8981\u5173\u5fc3\u7531NodeJS\u5e26\u6765\u7684\u5dee\u5f02\u3002"),(0,i.kt)("h3",{id:"\u63a8\u8350\u56fa\u5b9a\u7248\u672c"},"\u63a8\u8350\u56fa\u5b9a\u7248\u672c"),(0,i.kt)("p",null,"\u4eceV2\u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u4f7f\u7528\u56fa\u5b9a\u7248\u672c\u7684\u65b9\u5f0f\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"@reskript/*"),"\u5305\uff0c\u5982\u679c\u4f60\u539f\u672c\u5df2\u7ecf\u5b89\u88c5\u4e86\u76f8\u5e94\u7684\u5305\uff0c\u63a8\u8350\u4f60\u5c06\u7248\u672c\u8303\u56f4\u524d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"\u7b26\u53f7\u79fb\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' "devDependencies": {\n-  "@reskript/cli": "^1.15.2",\n-  "@reskript/cli-babel": "^1.15.2",\n-  "@reskript/cli-build": "^1.15.2",\n-  "@reskript/cli-dev": "^1.15.2",\n-  "@reskript/cli-lint": "^1.15.2",\n-  "@reskript/cli-play": "^1.15.2",\n-  "@reskript/cli-test": "^1.15.2",\n+  "@reskript/cli": "1.15.2",\n+  "@reskript/cli-babel": "1.15.2",\n+  "@reskript/cli-build": "1.15.2",\n+  "@reskript/cli-dev": "1.15.2",\n+  "@reskript/cli-lint": "1.15.2",\n+  "@reskript/cli-play": "1.15.2",\n+  "@reskript/cli-test": "1.15.2",\n }\n')),(0,i.kt)("p",null,"\u5728\u79fb\u9664",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"\u7b26\u53f7\u540e\uff0c\u8bb0\u5f97\u518d\u91cd\u65b0\u8fd0\u884c\u4e00\u6b21\u5b89\u88c5\u547d\u4ee4\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u4ee5\u66f4\u65b0\u7248\u672c\u9501\u6587\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u5b89\u88c5core-js"},"\u5b89\u88c5core-js"),(0,i.kt)("p",null,"\u5728V1\u7248\u672c\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u4f1a\u81ea\u5e26",(0,i.kt)("inlineCode",{parentName:"p"},"core-js"),"\u5e76\u4e3a\u4f60\u5904\u7406\u597dpolyfill\u7684\u5f15\u5165\u8def\u5f84\uff0c\u8ba9\u4f60\u4e0d\u9700\u8981\u611f\u77e5\u5230\u5b83\u7684\u5b58\u5728\u3002\u4f46\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6211\u4eec\u53d1\u73b0\u8fd9\u6837\u505a\u5e76\u4e0d\u662f\u4e00\u4e2a\u5408\u7406\u7684\u65b9\u6848\uff0c\u5b83\u5b58\u5728\u7740\u4e00\u4e9b\u4e0d\u53ef\u5ffd\u89c6\u7684\u95ee\u9898\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u9700\u8981\u6b63\u786e\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"li"},"core-js"),"\u7684\u8def\u5f84\uff0c\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u589e\u52a0\u4e86\u5927\u91cf\u989d\u5916\u7684\u6e90\u7801\u626b\u63cf\u548c\u8f6c\u4e49\uff0c\u4f7f\u5f97\u6784\u5efa\u7684\u901f\u5ea6\u88ab\u62d6\u6162\u4e0d\u5c11\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5e94\u7528\u957f\u671f\u7684\u7ef4\u62a4\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"core-js"),"\u662f\u4e00\u4e2a\u95f4\u63a5\u7684\u4f9d\u8d56\uff0c\u5e76\u4e0d\u5bb9\u6613\u5f97\u5230\u7248\u672c\u7684\u66f4\u65b0\u3002\u8fd9\u81f4\u4f7f\u5e94\u7528\u7684\u4e1a\u52a1\u4ee3\u7801\u4f7f\u7528\u4e86\u65b0\u7684\u7279\u6027\u65f6\uff0c\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"core-js"),"\u7248\u672c\u7684\u843d\u540e\u65e0\u6cd5\u8865\u4e0a\u76f8\u5e94\u7684polyfill\uff0c\u8ba9\u4ee3\u7801\u4ea7\u751f\u4e86\u95ee\u9898\u3002")),(0,i.kt)("p",null,"\u51fa\u4e8e\u8fd9\u4e9b\u8003\u8651\uff0c\u5728V2\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8f6c\u4e3a\u8981\u6c42\u7528\u6237\u81ea\u884c\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"core-js"),"\u3002\u4f60\u53ea\u9700\u8981\u5728\u672c\u5730\u7b80\u5355\u5730\u589e\u52a0\u8fd9\u4e00\u4f9d\u8d56\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# npm\nnpm install -D core-js\n# yarn\nyarn add -D core-js\n# pnpm\npnpm add -D core-js\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"core-js"),"\uff0c\u5728\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"skr build"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"skr dev"),"\u65f6\u4f1a\u62a5\u9519\u9000\u51fa\uff0c\u63d0\u793a\u4fe1\u606f\u4e5f\u4f1a\u5f15\u5bfc\u4f60\u6b63\u786e\u5730\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,i.kt)("h3",{id:"svg\u4f7f\u7528\u65b9\u5f0f\u53d8\u5316"},"SVG\u4f7f\u7528\u65b9\u5f0f\u53d8\u5316"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../../blog/svg-import-change"},"\u5bfc\u5165SVG\u6587\u4ef6\u89c4\u5219\u8c03\u6574"),"\u4e2d\u7684\u8bf4\u660e\uff0cV2\u7248\u672c\u4e2d\uff0c\u5982\u679c\u4f60\u9700\u8981\u5f15\u5165\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},".svg"),"\u6587\u4ef6\u5e76\u4f5c\u4e3aReact\u7ec4\u4ef6\u6765\u4f7f\u7528\uff0c\u4f60\u9700\u8981\u76f8\u5e94\u8c03\u6574\u4f60\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- import {ReactComponent as Icon} from './icon.svg';\n+ import Icon from './icon.svg?react';\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728CSS\u4e2d\u5f15\u7528",(0,i.kt)("inlineCode",{parentName:"p"},".svg"),"\u6587\u4ef6\uff0c\u4e14\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},".svg?asset"),"\u8fd9\u6837\u7684\u5f62\u5f0f\uff0c\u90a3\u4e48\u53ef\u4ee5\u5220\u9664\u5176\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"?asset"),"\u90e8\u5206\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'- background-url: url("./background.svg?asset");\n+ background-url: url("./background.svg");\n')),(0,i.kt)("h2",{id:"\u547d\u4ee4\u884c\u53d8\u66f4"},"\u547d\u4ee4\u884c\u53d8\u66f4"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"skr build"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"skr dev"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"skr test"),"\u7b49\u547d\u4ee4\uff0c\u4ee5\u4e0b\u8fd9\u4e9b\u53d8\u66f4\u662f\u4f60\u9700\u8981\u5173\u6ce8\u7684\u3002"),(0,i.kt)("h3",{id:"build"},"build"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--src"),"\u53c2\u6570\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"--src-dir"),"\u53c2\u6570\uff0c\u529f\u80fd\u4fdd\u6301\u4e0d\u53d8\u3002\u8fd9\u5e38\u7528\u4e8e\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"skr build"),"\u6784\u5efademo\u7b49\u573a\u666f\uff0c\u4f60\u53ea\u9700\u8981\u53c2\u6570\u540d\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr build --src=demo\n+ skr build --src-dir=demo\n")),(0,i.kt)("h3",{id:"dev"},"dev"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--src"),"\u53c2\u6570\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"--src-dir"),"\u53c2\u6570\u3002\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"skr build"),"\u76f8\u540c\u7684\u8c03\u6574\uff0c\u4f60\u53ea\u9700\u8981\u4fee\u6539\u53c2\u6570\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr dev --src=demo\n+ skr dev --src-dir=demo\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--open"),"\u53c2\u6570\u5df2\u7ecf\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"--host"),"\u53c2\u6570\u3002\u539f\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"--open"),"\u53c2\u6570\u53d6\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"local"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"remote"),"\uff0c\u7528\u6765\u6307\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"skr dev"),"\u8c03\u8bd5\u65f6\u6d4f\u89c8\u5668\u6253\u5f00\u7684\u5730\u5740\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"\u8fd8\u662f\u672c\u5730\u7684IP\u5730\u5740\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"--host"),"\u53c2\u6570\u62e5\u6709\u66f4\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"loopback"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ip"),"\u548c\u4efb\u610f\u81ea\u5b9a\u4e49\u7684\u57df\u540d\u3002\u5982\u679c\u4f60\u7684\u5e94\u7528\u9700\u8981\u4e0e\u57df\u540d\u5f3a\u7ed1\u5b9a\uff0c\u5e76\u4e14\u4f60\u901a\u8fc7\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"hosts"),"\u628a\u7279\u5b9a\u7684\u57df\u540d\u89e3\u6790\u5230\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"--host=my-app.dev"),"\u8fd9\u6837\u7684\u5f62\u5f0f\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u539f\u5148\u4f7f\u7528\u7740",(0,i.kt)("inlineCode",{parentName:"p"},"--open"),"\u53c2\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u53d6\u503c\u8fdb\u884c\u76f8\u5e94\u7684\u4fee\u6539\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr dev --open=local\n+ skr dev --host=localhost\n- skr dev --open=remote\n+ skr dev --host=ip\n")),(0,i.kt)("h3",{id:"babel"},"babel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--out"),"\u53c2\u6570\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"--out-dir"),"\u53c2\u6570\u3002\u4e3a\u4e86\u6240\u6709\u7684\u547d\u4ee4\u6709\u66f4\u4e00\u81f4\u5730\u53c2\u6570\u547d\u540d\uff0c\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"--src-dir"),"\u76f8\u540c\uff0c\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"--out-dir"),"\u6765\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"skr babel"),"\u7684\u8f93\u51fa\u76ee\u5f55\u3002\u5bf9\u4e8e\u539f\u5148\u4f7f\u7528\u8fd9\u4e00\u53c2\u6570\u7684\u60c5\u51b5\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u4fee\u6539\u540d\u79f0\u6765\u5347\u7ea7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr babel --out=dist\n+ skr babel --out-dir-dist\n")),(0,i.kt)("h3",{id:"test"},"test"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"skr test"),"\u6709\u6bd4\u8f83\u5927\u7684\u8c03\u6574\u3002\u5728V2\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"skr test"),"\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86\u900f\u4f20\u53c2\u6570\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),"\uff0c\u56e0\u6b64\u539f\u6709\u7684\u9664",(0,i.kt)("inlineCode",{parentName:"p"},"--cwd"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"--target"),"\u4ee5\u5916\u7684\u53c2\u6570\u90fd\u5df2\u7ecf\u5e9f\u5f03\u4e86\u3002\u65b0\u7248\u900f\u4f20\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),"\u7684\u53c2\u6570\u9700\u8981\u5728\u547d\u4ee4\u884c\u4e2d\u8ddf\u968f\u5728\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"--"),"\u5206\u9694\u7b26\u4e4b\u540e\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5728\u547d\u4ee4\u4e2d\u589e\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"--"),"\u5206\u9694\u6765\u5b9e\u73b0\u5347\u7ea7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr test --target=react --changedSince=HEAD --maxWorkers=4 src/utils\n+ skr test --target=react src/utils -- --changedSince=HEAD --maxWorkers=4\n")),(0,i.kt)("p",null,"\u5728\u8c03\u6574\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u9700\u8981\u5c06\u539f\u6709\u6d4b\u8bd5\u7684\u8def\u5f84\u53c2\u6570\u653e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"--"),"\u524d\u9762\uff0c\u5176\u5b83\u9664",(0,i.kt)("inlineCode",{parentName:"p"},"--cwd"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"--target"),"\u5916\u7684\u53c2\u6570\u653e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"--"),"\u7684\u540e\u9762\u3002"),(0,i.kt)("p",null,"\u9700\u8981\u989d\u5916\u6ce8\u610f\u7684\u662f\uff0c\u539f\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"--collect-coverage-from"),"\u53c2\u6570\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),"\u7684\u53c2\u6570\u4e0d\u540c\uff0c\u5b83\u9700\u8981\u88ab\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"--collectCoverageFrom"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- skr test --target=react --collect-coverage-from=src/utils\n+ skr test --target=react -- --collectCoverageFrom=src/utils\n")),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u4f60\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test"),"\u53bb\u6267\u884c\u547d\u4ee4\uff0c\u5e76\u4f9d\u65e7\u60f3\u5728\u547d\u4ee4\u884c\u4e2d\u4f20\u9012\u989d\u5916\u53c2\u6570\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),"\u7684\u8bdd\uff0c\u4f60\u9700\u8981",(0,i.kt)("strong",{parentName:"p"},"2\u4e2a"),(0,i.kt)("inlineCode",{parentName:"p"},"--"),"\u5206\u9694\u7b26\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- npm run test -- --changedSince=HEAD\n+ npm run test -- -- --changedSince=HEAD\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4"},"\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9664\u4e86\u4f7f\u7528\u547d\u4ee4\u884c\u5916\uff0c\u5728\u9879\u76ee\u4e2d\u8fd8\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"reskript.config.js"),"\u7528\u4e8e\u914d\u7f6e\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u5173\u5fc3\u4e0d\u5c11\u7684\u914d\u7f6e\u53d8\u66f4\u3002\u5f53\u7136\u5927\u90e8\u5206\u53d8\u66f4\u90fd\u662f\u7b80\u5355\u7684\u8c03\u6574\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u4f60\u53ef\u4ee5\u5728\u5f88\u77ed\u7684\u65f6\u95f4\u5185\u8c03\u6574\u5b8c\u6bd5\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"reskript.config.js"),"\uff0c\u6211\u4eec\u5728\u6267\u884c\u547d\u4ee4\u65f6\u6709\u4e25\u683c\u7684\u7ed3\u6784\u6821\u9a8c\uff0c\u56e0\u6b64\u4f60\u4e0d\u9700\u8981\u62c5\u5fc3\u9057\u6f0f\u4e86\u4ec0\u4e48\u4fee\u6539\u4f7f\u5f97\u5e94\u7528\u51fa\u73b0\u9519\u8bef\u3002"),(0,i.kt)("h3",{id:"build\u76f8\u5173"},"build\u76f8\u5173"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"build.defaultImportOptimization"),"\u5df2\u7ecf\u79fb\u9664\u3002\u5982\u679c\u4f60\u672a\u66fe\u89c1\u8fc7\u8fd9\u4e00\u4e2a\u914d\u7f6e\uff0c\u90a3\u4e48\u4f60\u7684\u5e94\u7528\u4e0d\u4f1a\u6709\u4efb\u4f55\u884c\u4e3a\u4e0a\u7684\u53d8\u5316\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaultImportOptimization"),"\u914d\u7f6e\u7528\u4e8e\u63a7\u5236\u662f\u5426\u9488\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"antd"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"lodash"),"\u4e24\u4e2a\u5e93\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u8bed\u53e5\u8fdb\u884c\u4f18\u5316\u3002\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"build.uses"),"\u53c2\u6570\u63a7\u5236\u66f4\u591a\u7684\u7b2c\u4e09\u65b9\u5e93\u7684\u4f18\u5316\uff0c\u8fd9\u4e2a\u914d\u7f6e\u9ed8\u8ba4\u4f9d\u7136\u542f\u7528\u4e86\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"antd"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"lodash"),"\u7684\u4f18\u5316\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u539f\u5148\u7981\u7528\u4e86\u8fd9\u4e2a\u914d\u7f6e\uff0c\u90a3\u4e48\u5728V2\u7248\u672c\u4e2d\uff0c\u4f60\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"uses"),"\u8bbe\u7f6e\u4e3a\u7a7a\u6570\u7ec4\uff0c\u4ee5\u5173\u95ed\u9ed8\u8ba4\u4f18\u5316\u903b\u8f91\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," exports.build = {\n-     defaultImportOptimization: false,\n+     uses: [],\n };\n")),(0,i.kt)("p",null,"\u5177\u4f53\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"build.uses"),"\u7684\u4f7f\u7528\uff0c\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../settings/build#%E7%89%B9%E6%AE%8A%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93%E7%9A%84%E4%BC%98%E5%8C%96"},"\u6784\u5efa\u914d\u7f6e - \u7279\u6b8a\u7b2c\u4e09\u65b9\u5e93\u7684\u4f18\u5316"),"\u6765\u4e86\u89e3\u3002"),(0,i.kt)("h3",{id:"\u5165\u53e3\u914d\u7f6e\u76f8\u5173"},"\u5165\u53e3\u914d\u7f6e\u76f8\u5173"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4f7f\u7528\u5f62\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"entries/index.config.js"),"\u7684",(0,i.kt)("a",{parentName:"p",href:"../advanced/multiple-entry#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A5%E5%8F%A3%E9%85%8D%E7%BD%AE"},"\u81ea\u5b9a\u4e49\u5165\u53e3\u914d\u7f6e"),"\u529f\u80fd\uff0c\u4e14\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"*.config.js"),"\u4e2d\u5bfc\u51fa",(0,i.kt)("strong",{parentName:"p"},"\u4efb\u610f\u7684\u5c5e\u6027"),"\u4ee5\u4f9b\u81ea\u5b9a\u4e49\u7684\u6a21\u677f\u4e2d\u4f7f\u7528\u7684\u8bdd\uff0c\u8fd9\u4e00\u65b9\u6cd5\u5df2\u7ecf\u88ab\u5e9f\u5f03\u4e86\u3002\u5728V2\u7248\u672c\u4e2d\uff0c\u4f60\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u6536\u96c6\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"exports.html"),"\u5bf9\u8c61\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- exports.appVersion = '1.2.3';\n- exports.copyrightYear = 2021;\n+ exports.html = {\n+     appVersion: '1.2.3',\n+     copyrightYear: 2021,\n+ };\n")),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u4e5f\u652f\u6301\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"*.config.js"),"\u4e2d\u5bfc\u51fa",(0,i.kt)("inlineCode",{parentName:"p"},"exports.entry"),"\u914d\u7f6e\u5165\u53e3\u7684\u6784\u5efa\u903b\u8f91\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"../advanced/multiple-entry#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A5%E5%8F%A3%E9%85%8D%E7%BD%AE"},"\u591a\u5e94\u7528\u5165\u53e3 - \u81ea\u5b9a\u4e49\u5165\u53e3\u914d\u7f6e"),"\u4e86\u89e3\u3002"),(0,i.kt)("h3",{id:"devserver\u76f8\u5173"},"devServer\u76f8\u5173"),(0,i.kt)("p",null,"\u7531\u4e8eV2\u7248\u672c\u6700\u5927\u7684\u66f4\u65b0\u5728\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u5347\u7ea7\u5230\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"4.x"),"\u7248\u672c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"reskript.config.js"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"exports.devServer"),"\u4e5f\u4ea7\u751f\u4e86\u76f8\u5e94\u7684\u53d8\u5316\u3002"),(0,i.kt)("p",null,"\u9996\u5148",(0,i.kt)("inlineCode",{parentName:"p"},"devServer.hot"),"\u7684\u503c\u4ece\u539f\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"'simple' | 'all' | 'none'"),"\u6539\u4e3a\u4e86\u5355\u7eaf\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\u7c7b\u578b\uff0c\u6211\u4eec\u53d1\u73b0\u5e76\u6ca1\u6709\u573a\u666f\u53ea\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"simple"),"\u6a21\u5f0f\u7684\u70ed\u66f4\u65b0\uff0c\u540c\u65f6\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"react-refresh"),"\u9a71\u52a8\u7684\u7ec4\u4ef6\u70ed\u66f4\u65b0\u4e5f\u5df2\u7ecf\u975e\u5e38\u6210\u719f\uff0c\u56e0\u6b64\u7b80\u5316\u4e86\u70ed\u66f4\u65b0\u7684\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," exports.devServer = {\n-     hot: 'all',\n+     hot: true,\n };\n // \u5982\u679c\u9700\u8981\u5173\u95ed\u70ed\u66f4\u65b0\n exports.devServer = {\n-     hot: 'none',\n+     hot: false,\n };\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"devServer.finalize"),"\u5f3a\u4f9d\u8d56\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u7684\u914d\u7f6e\u683c\u5f0f\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u6709\u4f7f\u7528\u8fd9\u4e2a\u914d\u7f6e\uff0c\u4e5f\u9700\u8981\u8fdb\u884c\u76f8\u5e94\u7684\u4fee\u6539\u3002\u5177\u4f53\u7684\u4fee\u6539\u4e0e\u5b98\u65b9\u7684\u66f4\u65b0\u5bf9\u5e94\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md"},"\u5b98\u65b9\u5347\u7ea7\u6307\u5357"),"\u6765\u8fdb\u884c\u76f8\u5e94\u4fee\u6539\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"devServer.finalize"),"\u8c03\u6574\u7684\u5e38\u7528\u914d\u7f6e\u4e0d\u53d7\u7248\u672c\u66f4\u65b0\u7684\u5f71\u54cd\uff0c\u4f46\u67092\u4e2a\u5e38\u89c1\u7684\u6848\u4f8b\u53ef\u4f9b\u53c2\u8003\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u539f\u672c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions.ignored"),"\u914d\u7f6e\u8c03\u6574\u672c\u5730\u76d1\u542c\u7684\u6587\u4ef6\u53d8\u66f4\uff0c\u53ef\u4ee5\u505a\u51fa\u76f8\u5e94\u7684\u4fee\u6539\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," export.devServer = {\n     finalize: (devServerConfig) => {\n-        devServerConfig.watchOptions.ignored = undefined;\n+        devServerConfig.static.watch.ignored = undefined;\n         return devServerConfig;\n     },\n };\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"before"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"after"),"\u6765\u6302\u8f7d\u81ea\u5df1\u7684\u8def\u5f84\uff0c\u4e5f\u9700\u8981\u6839\u636e\u5b98\u65b9\u7684\u5347\u7ea7\u8fdb\u884c\u8c03\u6574\uff0c\u6b64\u5904\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"before"),"\u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," export.devServer = {\n     finalize: (devServerConfig) => {\n-        const {before} = devServerConfig;\n+        const {onBeforeSetupMiddleware} = devServerConfig;\n-        devServerConfig.before = (app, server, compiler) => {\n+        devServerConfig.onBeforeSetupMiddleware = devServer => {\n-            before?.(app, server, compiler);\n+            onBeforeSetupMiddleware?.(devServer);\n-            app.get(\n+            devServer.app.get(\n                 '/version',\n                 (req, res) => {\n                     res.status(200).type('html').end(`${packageInfo.name}@${packageInfo.version}`);\n                 },\n             ),\n         };\n         return devServerConfig;\n     },\n };\n")),(0,i.kt)("h3",{id:"play\u76f8\u5173"},"play\u76f8\u5173"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"play.wrapper"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"play.injectResources"),"\u914d\u7f6e\u73b0\u5728\u90fd\u5df2\u7ecf\u5e9f\u5f03\u4e86\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5168\u5c40\u7684\u521d\u59cb\u5316\u6a21\u5757",(0,i.kt)("inlineCode",{parentName:"p"},"play.defaultGlobalSetup"),"\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"play.defaultGlobalSetup"),"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6a21\u5757\u4f5c\u4e3a\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"skr play"),"\u547d\u4ee4\u7684\u5168\u5c40\u521d\u59cb\u5316\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../settings/play#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE"},"\u5355\u7ec4\u4ef6\u8c03\u8bd5\u914d\u7f6e - \u5168\u5c40\u914d\u7f6e"),"\u6765\u4e86\u89e3\u5b83\u7684\u4f5c\u7528\u3002"),(0,i.kt)("p",null,"\u539f\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"play.wrapper"),"\u53ef\u4ee5\u4f7f\u7528\u5168\u5c40\u914d\u7f6e\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"export function Wrapper"),"\u6765\u4ee3\u66ff\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- exports.play = {\n-     wrapper: '<div style={{padding: 20}}>{children}</div>,\n- };\n // \u5728\u521d\u59cb\u5316\u6a21\u5757\u4e2d\n+ export function Wrapper({children}) {\n+       return (\n+           <div style={{padding: 20}}>\n+               {children}\n+           </div>\n+       );\n+ }\n")),(0,i.kt)("p",null,"\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"injectResources"),"\u5219\u53ef\u4ee5\u8f6c\u6362\u4e3a\u5168\u5c40\u914d\u7f6e\u4e2d\u5355\u7eaf\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- exports.play = {\n-     injectResources: [\n-         path.join(__diranme, 'src', 'styles', 'app.global.css'),\n-     ],\n- };\n // \u5728\u521d\u59cb\u5316\u6a21\u5757\u4e2d\n+ import '@/styles/app.global.css';\n")),(0,i.kt)("h2",{id:"api\u548c\u7ec6\u8282\u53d8\u66f4"},"API\u548c\u7ec6\u8282\u53d8\u66f4"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9664\u4e86\u4f7f\u7528\u547d\u4ee4\u884c\u548c\u914d\u7f6e\u6587\u4ef6\u5916\uff0c\u8fd8\u4f1a\u4e3b\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u5f15\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@reskript/*"),"\u5305\u5e76\u8c03\u7528\u5b83\u4eec\u7684\u5185\u90e8API\uff0c\u90a3\u4e48\u4ee5\u4e0b\u662f\u76f8\u5173\u53d8\u66f4\u7684\u6458\u8981\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/config-babel"),"\u5305\u7684\u76f8\u5173\u51fd\u6570\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"hot"),"\u914d\u7f6e\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"'simple' | 'all' | 'none'"),"\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\u7c7b\u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/config-babel"),"\u5305\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"defaultImportOptimization"),"\u53c2\u6570\u5df2\u7ecf\u5e9f\u5f03\uff0c\u6539\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"uses"),"\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/settings"),"\u4e2d\u5bfc\u51fa\u7684\u51fd\u6570\u5747\u4fee\u6539\u4e3a\u5f02\u6b65\u63a5\u53e3\uff0c\u7279\u522b\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"readProjectSettings"),"\u662f\u4f60\u9700\u8981\u91cd\u70b9\u5173\u5fc3\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/core"),"\u4e2d\u7684\u8f85\u52a9\u51fd\u6570\u5747\u4fee\u6539\u4e3a\u5f02\u6b65\u63a5\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/config-webpack"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"createWebpackConfig"),"\u4fee\u6539\u4e3a\u5f02\u6b65\u51fd\u6570\uff0c\u4e14\u53c2\u6570\u6709\u8f83\u5927\u7684\u8c03\u6574\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/config-webpack"),"\u5bfc\u51fa\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"loaders"),"\u5b57\u5178\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"svg"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"li"},"url"),"\u5c5e\u6027\u5df2\u7ecf\u79fb\u9664\uff0c\u6ca1\u6709\u66ff\u4ee3\u54c1\uff0cV2\u7248\u672c\u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/asset-modules/"},"Webpack Asset Modules"),"\u5904\u7406\u9759\u6001\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@reskript/config-dev-server"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"createWebpackDevServerConfig"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"createWebpackDevServerPartial"),"\u4fee\u6539\u4e3a\u5f02\u6b65\u51fd\u6570\uff0c\u4e14\u53c2\u6570\u6709\u8f83\u5927\u7684\u8c03\u6574\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u6d89\u53ca\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"BuildContext"),"\u8fd9\u4e00\u7c7b\u578b\uff08\u5305\u62ec",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeBuildContext"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"BuildEntry"),"\uff09\u7684\u903b\u8f91\uff0c\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"li"},"cache"),"\u5c5e\u6027\u7531",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\u7c7b\u578b\u53d8\u66f4\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"'persist' | 'transient' | 'off'"),"\uff0c\u539f",(0,i.kt)("inlineCode",{parentName:"li"},"cache: true"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"li"},"cache: 'persist'"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"est-compat"),"\u529f\u80fd\u5df2\u7ecf\u88ab\u79fb\u9664\uff0c\u5927\u6982\u7387\u4f60\u662f\u4e0d\u77e5\u9053\u8fd9\u4e2a\u4e1c\u897f\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skr build"),"\u9ed8\u8ba4\u4e0d\u518d\u68c0\u67e5\u8def\u5f84\u5927\u5c0f\u5199\u662f\u5426\u6b63\u786e\uff0c\u5982\u679c\u9700\u8981\u8be5\u529f\u80fd\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"skr build --strict"),"\u6253\u5f00\u4e25\u683c\u6a21\u5f0f\u3002\u4e25\u683c\u6a21\u5f0f\u540c\u65f6\u4f1a\u5e26\u6765\u66f4\u591a\u7684\u6821\u9a8c\u548c\u68c0\u67e5\u3002")))}m.isMDXComponent=!0}}]);