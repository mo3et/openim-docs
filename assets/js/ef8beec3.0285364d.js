"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[35671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={},p="Callback After Agreeing to Add a Friend",s={unversionedId:"webhooks/relationship/addFriendAfter",id:"webhooks/relationship/addFriendAfter",title:"Callback After Agreeing to Add a Friend",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/relationship/addFriendAfter.mdx",sourceDirName:"webhooks/relationship",slug:"/webhooks/relationship/addFriendAfter",permalink:"/restapi/webhooks/relationship/addFriendAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/relationship/addFriendAfter.mdx",tags:[],version:"current",lastUpdatedAt:1737418045,formattedLastUpdatedAt:"Jan 21, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback for Adding a User to the Blacklist",permalink:"/restapi/webhooks/relationship/addBlack"},next:{title:"\u6dfb\u52a0\u597d\u53cb\u5bf9\u65b9\u540c\u610f\u4e4b\u540e\u7684\u56de\u8c03",permalink:"/restapi/webhooks/relationship/addFriendAgreeAfter"}},c={},d=[{value:"Function Description",id:"function-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of the Callback",id:"timing-of-the-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameter Description",id:"request-parameter-description",level:3},{value:"Header",id:"header",level:3},{value:"Request Packet Example",id:"request-packet-example",level:3},{value:"Request Packet Field Explanation",id:"request-packet-field-explanation",level:3},{value:"Response Packet Example",id:"response-packet-example",level:2},{value:"Processing Result",id:"processing-result",level:3},{value:"Response Packet Field Explanation",id:"response-packet-field-explanation",level:2}],u={toc:d},m="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"callback-after-agreeing-to-add-a-friend"},"Callback After Agreeing to Add a Friend"),(0,n.kt)("h2",{id:"function-description"},"Function Description"),(0,n.kt)("p",null,"The App backend can use this callback to real-time monitor the addition of new friends by users."),(0,n.kt)("h2",{id:"precautions"},"Precautions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enable the callback, it is necessary to configure the callback URL and activate the corresponding switch for this callback protocol. Configuration methods can be found in the ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"Callback Explanation")," document."),(0,n.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend."),(0,n.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server must verify whether the command parameter in the request URL is its SDKNAME parameter."),(0,n.kt)("li",{parentName:"ul"},"The APP business server must respond to this request within the timeout period.")),(0,n.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App users agree to add someone as a friend after receiving a friend request.")),(0,n.kt)("h2",{id:"timing-of-the-callback"},"Timing of the Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggered after OpenIM Server successfully adds a friend.")),(0,n.kt)("h2",{id:"interface-description"},"Interface Description"),(0,n.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,n.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,n.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$CallbackCommand&contenttype=json\n")),(0,n.kt)("h3",{id:"request-parameter-description"},"Request Parameter Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"https"),(0,n.kt)("td",{parentName:"tr",align:null},"Request protocol is HTTPS, method is POST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"Fixed value: callbackAfterAddFriendCommand")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,n.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:null},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"operationID for global link tracing")))),(0,n.kt)("h3",{id:"request-packet-example"},"Request Packet Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackAfterAddFriendCommand",\n  "fromUserID": "user123",\n  "toUserID": "user456",\n  "reqMsg": "Let\'s be friends!"\n}\n')),(0,n.kt)("h3",{id:"request-packet-field-explanation"},"Request Packet Field Explanation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback command, here for after agreeing to add a friend")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the person initiating the friend request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the person receiving the friend request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional message sent with the friend request")))),(0,n.kt)("h2",{id:"response-packet-example"},"Response Packet Example"),(0,n.kt)("h3",{id:"processing-result"},"Processing Result"),(0,n.kt)("p",null,"Result of processing the user's request to agree to add a friend."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": ""\n}\n')),(0,n.kt)("h2",{id:"response-packet-field-explanation"},"Response Packet Field Explanation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates if the business system's callback was executed correctly. ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"20001"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error code, ranging between 20001-29999. Set when actionCode is not 0; set when nextCode is not 1.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")))))}k.isMDXComponent=!0}}]);