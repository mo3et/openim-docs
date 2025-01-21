"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[68014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onRecvOfflineNewMessages",p={unversionedId:"callback/onRecvOfflineNewMessages",id:"callback/onRecvOfflineNewMessages",title:"onRecvOfflineNewMessages",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onRecvOfflineNewMessages.mdx",sourceDirName:"callback",slug:"/callback/onRecvOfflineNewMessages",permalink:"/sdks/callback/onRecvOfflineNewMessages",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onRecvOfflineNewMessages.mdx",tags:[],version:"current",lastUpdatedAt:1737418045,formattedLastUpdatedAt:"Jan 21, 2025",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onRecvOfflineNewMessage",permalink:"/sdks/callback/onRecvOfflineNewMessage"},next:{title:"onSelfInfoUpdated",permalink:"/sdks/callback/onSelfUserInfoUpdate"}},c={},u=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Parameter Explanation",id:"parameter-explanation",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Example Call",id:"example-call",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Example Call",id:"example-call-1",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("Tabs"),f=m("TabItem"),b={toc:u},g="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onrecvofflinenewmessages"},"onRecvOfflineNewMessages"),(0,r.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When the application is running in the background and receives new messages, this callback is triggered. The callback might carry multiple messages.")),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,r.kt)(f,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"return-prototype"},"Return Prototype")),(0,r.kt)(f,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"return-prototype-1"},"Return Prototype")),(0,r.kt)(f,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"parameter-explanation"},"Parameter Explanation")),(0,r.kt)(f,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvOfflineNewMessages(data: WSEvent<MessageItem[]>): void;\n\n")),(0,r.kt)("h3",{id:"return-result"},"Return Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),"[]>"),(0,r.kt)("td",{parentName:"tr",align:null},"New Messages")))),(0,r.kt)("h3",{id:"example-call"},"Example Call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnRecvOfflineNewMessages, ({ data }) => {\n  // data is the list of new offline messages\n});\n"))),(0,r.kt)(f,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvOfflineNewMessages(data: WSEvent<MessageItem[]>): void;\n\n")),(0,r.kt)("h3",{id:"return-result-1"},"Return Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),"[]>"),(0,r.kt)("td",{parentName:"tr",align:null},"New Messages")))),(0,r.kt)("h3",{id:"example-call-1"},"Example Call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnRecvOfflineNewMessages, ({ data }) => {\n  // data is the list of new offline messages\n});\n")))))}v.isMDXComponent=!0}}]);