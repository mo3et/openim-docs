"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[21397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},c="AdvancedMsgListener",s={unversionedId:"listener/advancedMsgListener",id:"listener/advancedMsgListener",title:"AdvancedMsgListener",description:"\u6a21\u5757\u6982\u89c8",source:"@site/docs/sdks/listener/advancedMsgListener.mdx",sourceDirName:"listener",slug:"/listener/advancedMsgListener",permalink:"/zh-Hans/sdks/listener/advancedMsgListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/listener/advancedMsgListener.mdx",tags:[],version:"current",lastUpdatedAt:1737418045,formattedLastUpdatedAt:"2025\u5e741\u670821\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"ConversationListener",permalink:"/zh-Hans/sdks/listener/conversationListener"},next:{title:"BatchMsgListener",permalink:"/zh-Hans/sdks/listener/batchMsgListener"}},p={},d=[{value:"\u6a21\u5757\u6982\u89c8",id:"\u6a21\u5757\u6982\u89c8",level:2}],u={toc:d},f="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advancedmsglistener"},"AdvancedMsgListener"),(0,r.kt)("h2",{id:"\u6a21\u5757\u6982\u89c8"},"\u6a21\u5757\u6982\u89c8"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6d88\u606f\u76d1\u542c\u5668\uff0c\u5f53\u6536\u5230\u65b0\u6d88\u606f\u3001\u5df2\u8bfb\u56de\u6267\u53ca\u64a4\u56de\u6d88\u606f\u65f6\u56de\u8c03")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u529f\u80fd\u7b80\u4ecb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onRecvNewMessage"},"onRecvNewMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u65b0\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onRecvOfflineNewMessage"},"onRecvOfflineNewMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u79bb\u7ebf\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onRecvC2CReadReceipt"},"onRecvC2CReadReceipt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u804a\u6d88\u606f\u5df2\u8bfb\u56de\u6267")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onRecvGroupReadReceipt"},"onRecvGroupReadReceipt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u804a\u6d88\u606f\u5df2\u8bfb\u56de\u6267")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onNewRecvMessageRevoked"},"onNewRecvMessageRevoked")),(0,r.kt)("td",{parentName:"tr",align:null},"\u64a4\u56de\u6d88\u606f\u56de\u8c03")))))}m.isMDXComponent=!0}}]);