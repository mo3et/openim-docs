"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[38314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},p="onRecvGroupReadReceipt",s={unversionedId:"callback/onRecvGroupReadReceipt",id:"callback/onRecvGroupReadReceipt",title:"onRecvGroupReadReceipt",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/callback/onRecvGroupReadReceipt.mdx",sourceDirName:"callback",slug:"/callback/onRecvGroupReadReceipt",permalink:"/zh-Hans/sdks/callback/onRecvGroupReadReceipt",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onRecvGroupReadReceipt.mdx",tags:[],version:"current",lastUpdatedAt:1737418045,formattedLastUpdatedAt:"2025\u5e741\u670821\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onRecvC2CReadReceipt",permalink:"/zh-Hans/sdks/callback/onRecvC2CReadReceipt"},next:{title:"onRecvNewMessage",permalink:"/zh-Hans/sdks/callback/onRecvNewMessage"}},c={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Tabs"),k=d("TabItem"),b={toc:u},g="wrapper";function v(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},b,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onrecvgroupreadreceipt"},"onRecvGroupReadReceipt"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u81ea\u5df1\u53d1\u51fa\u7684\u7fa4\u804a\u6d88\u606f\u88ab\u7fa4\u6210\u5458\u6807\u8bb0\u4e3a\u5df2\u8bfb\u540e\uff0c\u6d88\u606f\u53d1\u9001\u8005\u548c\u6807\u8bb0\u8005\u5747\u4f1a\u6536\u5230\u6b64\u56de\u8c03\u3002")),(0,n.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function(List<ReadReceiptInfo> list)? onRecvGroupMessageReadReceipt;\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/receiptInfo"},"ReadReceiptInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u8bfb\u56de\u6267\u5217\u8868"))))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-1"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onRecvGroupReadReceipt:(NSArray<OIMReceiptInfo *> *)receiptList;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receiptList"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMReceiptInfo")," ","*"," >"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u8bfb\u56de\u6267\u5217\u8868"))))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-2"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0}," void onRecvGroupMessageReadReceipt(List<ReadReceiptInfo> list)\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/receiptInfo"},"ReadReceiptInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56de\u6267\u5217\u8868"))))),(0,n.kt)(k,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-3"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvGroupReadReceipt(data: WSEvent<ReceiptInfo[]>): void;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/receiptInfo"},"ReceiptInfo"),"[]>"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u8bfb\u56de\u6267\u5217\u8868")))),(0,n.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b"},"\u8c03\u7528\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnRecvGroupReadReceipt, ({ data }) => {\n  // data \u5df2\u8bfb\u56de\u6267\u5217\u8868\n});\n"))),(0,n.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-4"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvGroupReadReceipt(data: WSEvent<ReceiptInfo[]>): void;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/receiptInfo"},"ReceiptInfo"),"[]>"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u8bfb\u56de\u6267\u5217\u8868")))),(0,n.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b-1"},"\u8c03\u7528\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnRecvGroupReadReceipt, ({ data }) => {\n  // data \u5df2\u8bfb\u56de\u6267\u5217\u8868\n});\n"))),(0,n.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-5"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"void OnRecvGroupReadReceipt(List<MessageReceipt> list);\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/receiptInfo"},"MessageReceipt"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u8bfb\u56de\u6267\u5217\u8868")))))))}v.isMDXComponent=!0}}]);