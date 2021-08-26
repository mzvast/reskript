(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[3626],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),k=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=k(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=k(n),u=r,s=c["".concat(o,".").concat(u)]||c[u]||d[u]||a;return n?i.createElement(s,l(l({ref:t},m),{},{components:n})):i.createElement(s,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var k=2;k<a;k++)l[k]=n[k];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2903:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>k,toc:()=>m,default:()=>c});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],p={title:"\u547d\u4ee4\u884c\u4ecb\u7ecd"},o=void 0,k={unversionedId:"cli/introduction",id:"cli/introduction",isDocsHomePage:!1,title:"\u547d\u4ee4\u884c\u4ecb\u7ecd",description:"\u7248\u672c\u63a7\u5236",source:"@site/docs/cli/introduction.md",sourceDirName:"cli",slug:"/cli/introduction",permalink:"/reskript/docs/cli/introduction",version:"current",frontMatter:{title:"\u547d\u4ee4\u884c\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u63d2\u4ef6\u914d\u7f6e",permalink:"/reskript/docs/settings/plugins"},next:{title:"\u6784\u5efa\u5e94\u7528",permalink:"/reskript/docs/cli/build"}},m=[{value:"\u7248\u672c\u63a7\u5236",id:"\u7248\u672c\u63a7\u5236",children:[]},{value:"\u6309\u9700\u5b89\u88c5",id:"\u6309\u9700\u5b89\u88c5",children:[]},{value:"\u5168\u5c40\u63a7\u5236\u6807\u8bb0",id:"\u5168\u5c40\u63a7\u5236\u6807\u8bb0",children:[]},{value:"\u9000\u51fa\u7801",id:"\u9000\u51fa\u7801",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7248\u672c\u63a7\u5236"},"\u7248\u672c\u63a7\u5236"),(0,a.kt)("p",null,"\u8bf7\u5728\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"@reskript/*"),"\u4f9d\u8d56\u65f6\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"-D -E"),"\u53c2\u6570\u3002\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"-E"),"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"--save-exact"),"\uff09\u5c06\u4f1a\u5b89\u88c5\u4e00\u4e2a\u56fa\u5b9a\u7684\u7248\u672c\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u5730\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"^x.y.z"),"\u7248\u672c\u8303\u56f4\u3002"),(0,a.kt)("p",null,"\u5f53\u4f60\u5b89\u88c5\u56fa\u5b9a\u7248\u672c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4fdd\u6301\u6240\u6709\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@reskript/*"),"\u5305\u7248\u672c\u4e00\u81f4\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u540e\u7eed\u66f4\u65b0\u5176\u5b83\u4e0d\u76f8\u5173\u4f9d\u8d56\u65f6\u201c\u4e0d\u5e78\u201d\u5f71\u54cd\u4e86\u90e8\u5206\u5305\uff0c\u5bfc\u81f4\u5404\u5305\u4e4b\u95f4\u7248\u672c\u4e0d\u4e00\u81f4\u3002"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u65e0\u6cd5\u4fdd\u8bc1\u5404\u4e2a\u5305\u7248\u672c\u4e0d\u4e00\u81f4\u65f6\u7684\u884c\u4e3a\u662f\u7b26\u5408\u9884\u671f\u7684\uff0c\u56e0\u6b64\u4fdd\u8bc1\u5b83\u4eec\u7248\u672c\u4e00\u81f4\u975e\u5e38\u91cd\u8981\u3002"))),(0,a.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u5efa\u8bae\u4f60\u53ca\u65f6\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\uff0c\u4f46\u4f9d\u7136\u4f7f\u7528\u56fa\u5b9a\u7248\u672c\u4ee5\u4fdd\u6301\u5b83\u4eec\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"\u6309\u9700\u5b89\u88c5"},"\u6309\u9700\u5b89\u88c5"),(0,a.kt)("p",null,"\u6240\u6709\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"skr"),"\u547d\u4ee4\u884c\u5747\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"@reskript/cli-"),"\u4e3a\u5305\u524d\u7f00\uff0c\u5176\u540e\u8ddf\u968f\u547d\u4ee4\u540d\u79f0\u3002\u5f53\u4e00\u4e2a\u547d\u4ee4\u9700\u8981\u6267\u884c\u7684\u65f6\u5019\uff0c\u5982\u679c\u672c\u5730\u5b89\u88c5\u7531\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"@reskript/cli-xxx"),"\u5305\uff0c\u5219\u4f1a\u76f4\u63a5\u8c03\u7528\u5b83\uff0c\u5982\u679c\u6ca1\u6709\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"skr"),"\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u5b89\u88c5\u4e00\u4e2a\u7f3a\u5931\u7684\u547d\u4ee4\u5305\u9700\u8981\u4f60\u7684\u9879\u76ee\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f60\u5728\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"li"},"@reskript/*"),"\u5305\u65f6\uff0c\u4f7f\u7528\u4e86\u7cbe\u786e\u7684\u7248\u672c\u53f7\uff0c\u5373\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm add"),"\u65f6\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"--save-exact"),"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"-E"),"\uff09\u53c2\u6570\uff0c\u5728\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"p\backage.json"),"\u4e2d\uff0c\u7248\u672c\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"^x.y.z"),"\u7684\u5f62\u5f0f\uff0c\u800c\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"x.y.z"),"\u7684\u7cbe\u786e\u7248\u672c\u53f7\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u7684\u9879\u76ee\u5fc5\u987b\u542f\u7528\u4e86git\u7248\u672c\u7ba1\u7406\uff0c\u5373\u5728\u6839\u76ee\u5f55\u4e0b\u6709",(0,a.kt)("inlineCode",{parentName:"li"},".git"),"\u6587\u4ef6\u5939\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u7684\u9879\u76ee\u5728\u6839\u76ee\u5f55\uff08",(0,a.kt)("inlineCode",{parentName:"li"},".git"),"\u6587\u4ef6\u5939\u6240\u5728\u76ee\u5f55\uff09\u4e0b\u6709\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\u7684\u7248\u672c\u9501\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"yarn.lock"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"\u3002")),(0,a.kt)("p",null,"\u5728\u6ee1\u8db3\u8fd9\u4e9b\u6761\u4ef6\u7684\u524d\u63d0\u4e0b\uff0c\u547d\u4ee4\u884c\u4f1a\u63d0\u793a\u4f60\u81ea\u52a8\u5b89\u88c5\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We're going to install @reskript/cli-dev for you, continue? (y/N)")),(0,a.kt)("p",null,"\u6b64\u65f6\u6309\u4e0b\u56de\u8f66\u5373\u4f1a\u81ea\u52a8\u5b89\u88c5\u540e\u7ee7\u7eed\u6267\u884c\u547d\u4ee4\uff0c\u5982\u679c\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"N"),"\u5219\u81ea\u52a8\u9000\u51fa\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u76f8\u5e94\u7684\u5305\u6765\u7ee7\u7eed\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u5168\u5c40\u63a7\u5236\u6807\u8bb0"},"\u5168\u5c40\u63a7\u5236\u6807\u8bb0"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SKR_FLAGS"),"\u6765\u5f15\u5bfc",(0,a.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u51e0\u4e4e\u6240\u6709\u529f\u80fd\u7684\u884c\u4e3a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SKR_FLAGS"),"\u662f\u4e00\u4e2a\u7528\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u6bcf\u4e00\u9879\u662f\u4e00\u4e2a\u6807\u8bb0\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u6765\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"SKR_FLAGS=all skr build\n")),(0,a.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u5efa\u8bae\u4f60\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"export SKR_FLAGS=all"),"\u5728\u5168\u5c40\u6301\u4e45\u5316\u5730\u6253\u5f00\u8fd9\u4e9b\u6807\u8bb0\u3002"),(0,a.kt)("p",null,"\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"SKR_FLAGS"),"\u652f\u6301\u4ee5\u4e0b\u503c\u7684\u7ec4\u5408\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deprecation-error"),"\uff1a\u5f53\u5305\u542b\u8fd9\u4e2a\u5f00\u5934\u65f6\uff0c\u6240\u6709\u6807\u8bb0\u4e3a\u5e9f\u5f03\u7684\u529f\u80fd\u4e0d\u4ec5\u4ec5\u662f\u7ed9\u4e88\u8b66\u544a\u63d0\u793a\uff0c\u800c\u4f1a\u62a5\u9519\u5e76\u9000\u51fa\u7a0b\u5e8f\u3002\u8fd9\u4e2a\u5f00\u5173\u6709\u52a9\u4e8e\u4f60\u6e05\u7406",(0,a.kt)("inlineCode",{parentName:"li"},"reSKRipt"),"\u8ba1\u5212\u5728\u4e0b\u4e00\u4e2a\u5927\u7248\u672c\u5e9f\u5f03\u7684\u529f\u80fd\uff0c\u53ef\u4f7f\u5927\u7248\u672c\u7684\u5347\u7ea7\u53d8\u5f97\u66f4\u52a0\u8f7b\u677e\u987a\u6ed1\u3002")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"all"),"\u8fd9\u4e2a\u6807\u8bb0\u6253\u5f00\u6240\u6709\u5f53\u524d\u652f\u6301\u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa\u7801"},"\u9000\u51fa\u7801"),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"skr"),"\u547d\u4ee4\u65f6\uff0c\u6240\u6709\u5df2\u77e5\u7684\u9000\u51fa\u7801\u4e0e\u5bf9\u5e94\u60c5\u51b5\u5982\u4e0b\uff0c\u5269\u4f59\u5f02\u5e38\u9000\u51fa\u5747\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"99"),"\u4e3a\u9000\u51fa\u7801\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"10"),"\uff1aNode\u7248\u672c\u4e0d\u7b26\u5408\u8981\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"11"),"\uff1a\u6307\u5b9a\u7684\u547d\u4ee4\u4e0d\u5b58\u5728\u6216\u521d\u59cb\u5316\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"12"),"\uff1a\u672a\u6307\u5b9a\u5177\u4f53\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"13"),"\uff1a\u9879\u76ee\u4f9d\u8d56\u4e0d\u6ee1\u8db3\u5f53\u524d\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"20"),"\uff1a\u7f16\u8bd1\u5355\u4e2a\u6587\u4ef6\u65f6\u51fa\u73b0\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"21"),"\uff1a\u914d\u7f6e\u6216\u547d\u4ee4\u884c\u53c2\u6570\u76f8\u5173\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"22"),"\uff1a\u6784\u5efa\u8fc7\u7a0b\u5185\u90e8\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"23"),"\uff1a\u6784\u5efa\u4ea7\u51fa\u68c0\u67e5\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"24"),"\uff1a\u9879\u76ee\u7ed3\u6784\u76f8\u5173\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"25"),"\uff1a\u4ee3\u7801\u89c4\u8303\u68c0\u67e5\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"99"),"\uff1a\u672a\u77e5\u9519\u8bef\u3002")))}c.isMDXComponent=!0}}]);