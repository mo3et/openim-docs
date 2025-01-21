"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[96253,65612],{96253:(e,t,i)=>{i.r(t),i.d(t,{dyte_settings:()=>r});var s=i(65733),o=i(96633),a=i(20336),n=i(46503);const r=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.keyPressListener=e=>{"Escape"===e.key&&this.close()},this.selfJoinStageListener=()=>{this.updateCanProduce(this.meeting)},this.selfStageLeftListener=()=>{this.canProduceVideo=!1},this.selfJoinStageRejectedListener=()=>{this.updateCanProduce(this.meeting)},this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,a.u)(),this.activeTab="connection",this.isMobileMainVisible=!1,this.networkStatus="good",this.canProduceVideo=!1}connectedCallback(){document.addEventListener("keydown",this.keyPressListener),this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t,i,s,o,a;this.keyPressListener&&document.removeEventListener("keydown",this.keyPressListener),this.poorConnectionListener&&(null===(e=this.meeting)||void 0===e||e.meta.removeListener("poorConnection",this.poorConnectionListener)),this.selfJoinStageListener&&(null===(t=this.meeting)||void 0===t||t.self.removeListener("joinStageRequestAccepted",this.selfJoinStageListener)),this.selfJoinStageRejectedListener&&(null===(i=this.meeting)||void 0===i||i.self.removeListener("joinStageRequestRejected",this.selfJoinStageRejectedListener)),this.selfJoinStageListener&&(null===(s=this.meeting)||void 0===s||s.self.removeListener("stageJoined",this.selfJoinStageListener)),this.selfStageLeftListener&&(null===(o=this.meeting)||void 0===o||o.self.removeListener("stageLeft",this.selfStageLeftListener)),this.selfJoinStageListener&&(null===(a=this.meeting)||void 0===a||a.self.removeListener("removedFromStage",this.selfJoinStageListener))}meetingChanged(e){null!=e&&(this.updateCanProduce(e),this.canProduceVideo?this.activeTab="video":this.activeTab="audio",this.poorConnectionListener=({score:e})=>{e<7?this.networkStatus="poor":e<4&&(this.networkStatus="poorest"),setTimeout((()=>{this.networkStatus="good"}),5e3)},e.meta.addListener("poorConnection",this.poorConnectionListener),e.self.addListener("joinStageRequestAccepted",this.selfJoinStageListener),e.self.addListener("joinStageRequestRejected",this.selfJoinStageRejectedListener),e.self.addListener("stageJoined",this.selfJoinStageListener),e.self.addListener("stageLeft",this.selfStageLeftListener),e.self.addListener("removedFromStage",this.selfJoinStageListener))}updateCanProduce(e){const{self:t,meta:i,stage:s}=e,o="ALLOWED"===t.permissions.canProduceVideo,a="WEBINAR"===i.viewType,n="LIVESTREAM"===i.viewType;if(a||n){const e="CAN_REQUEST"===t.permissions.canProduceVideo;(o||e&&(a&&("ON_STAGE"===t.webinarStageStatus||"ACCEPTED_TO_JOIN_STAGE"===t.webinarStageStatus)||n&&("ON_STAGE"===s.status||"ACCEPTED_TO_JOIN_STAGE"===s.status)))&&(this.canProduceVideo=!0)}else this.canProduceVideo=o}changeTab(e){this.activeTab=e,"sm"===this.size&&(this.isMobileMainVisible||(this.isMobileMainVisible=!0))}close(){this.stateUpdate.emit({activeSettings:!1}),n.s.activeSettings=!1}render(){if(null==this.meeting)return null;const e={meeting:this.meeting,states:this.states||n.s,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("aside",{class:{hide:this.isMobileMainVisible},part:"menu"},(0,s.h)("header",null,(0,s.h)("h2",null,this.t("settings"))),(0,s.h)("button",{type:"button",class:{active:"audio"===this.activeTab},onClick:()=>this.changeTab("audio")},this.t("audio"),(0,s.h)("div",{class:"right"},(0,s.h)("dyte-icon",{icon:this.iconPack.mic_on,iconPack:this.iconPack,t:this.t}),"sm"===this.size&&(0,s.h)("dyte-icon",{icon:this.iconPack.chevron_right,iconPack:this.iconPack,t:this.t}))),this.canProduceVideo&&(0,s.h)("button",{type:"button",class:{active:"video"===this.activeTab},onClick:()=>this.changeTab("video")},this.t("video"),(0,s.h)("div",{class:"right"},(0,s.h)("dyte-icon",{icon:this.iconPack.video_on,iconPack:this.iconPack,t:this.t}),"sm"===this.size&&(0,s.h)("dyte-icon",{icon:this.iconPack.chevron_right,iconPack:this.iconPack,t:this.t}))),(0,s.h)("button",{type:"none",title:`Your network condition is ${this.networkStatus}`},this.t("connection"),(0,s.h)("div",{class:"right"},(0,s.h)("dyte-icon",{icon:this.iconPack.wifi,class:this.networkStatus,iconPack:this.iconPack,t:this.t})))),(0,s.h)("main",{class:{active:this.isMobileMainVisible},part:"main-content"},"sm"===this.size&&(0,s.h)("header",null,(0,s.h)("dyte-button",{kind:"icon",class:"back-btn",onClick:()=>this.isMobileMainVisible=!1,iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.chevron_left,iconPack:this.iconPack,t:this.t})),(0,s.h)("h2",null,this.t("audio"===this.activeTab?"audio":"video"))),"audio"===this.activeTab&&(0,s.h)("dyte-settings-audio",Object.assign({},e)),"video"===this.activeTab&&(0,s.h)("dyte-settings-video",Object.assign({},e))))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}.title{font-size:20px;line-height:1}.back-btn,.dismiss-btn{border-radius:var(--dyte-border-radius-sm, 4px);background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.back-btn:hover,.dismiss-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside{box-sizing:border-box;display:flex;min-width:var(--dyte-space-56, 224px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px)}aside button{margin-top:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;width:100%;align-items:center;justify-content:space-between;border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);background-color:transparent;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));cursor:default;font-size:16px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px}aside button .right{display:flex;align-items:center}aside button .right dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}aside button .right dyte-icon:last-child{margin-left:var(--dyte-space-4, 16px)}aside button[type='button']{cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}aside button[type='button']:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside button[type='button']{border-right:var(--dyte-border-width-md, 2px) solid transparent}aside button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}aside button.active:hover{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}dyte-icon.poor{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}dyte-icon.poorest{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.good{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}main{display:flex;flex:1 1 0%;align-items:center;justify-content:center;padding-left:var(--dyte-space-6, 24px);padding-right:var(--dyte-space-6, 24px);box-sizing:border-box;width:100%}.dismiss-btn{position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']) aside{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}:host([size='sm']) .dismiss-btn{top:var(--dyte-space-5, 20px);right:var(--dyte-space-4, 16px)}:host([size='sm']) aside{width:100%;padding-left:var(--dyte-space-0, 0px)}:host([size='sm']) aside button{border-radius:var(--dyte-border-radius-none, 0)}:host([size='sm']) aside button.active{border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}:host([size='sm']) aside button.active:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) aside.hide{display:none}:host([size='sm']) main{display:none;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host([size='sm']) main header{justify-content:center}:host([size='sm']) main header dyte-button{position:absolute;left:var(--dyte-space-4, 16px)}:host([size='sm']) main.active{display:block}"},46503:(e,t,i)=>{i.d(t,{o:()=>d,s:()=>c});var s=i(65733);const o=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),n=e=>"function"==typeof e?e():e,r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:c,onChange:d}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=n(e);let s=new Map(Object.entries(null!=i?i:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;s=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},c=e=>(o.get.forEach((t=>t(e))),s.get(e)),d=(e,i)=>{const a=s.get(e);t(i,a,e)&&(s.set(e,i),o.set.forEach((t=>t(e,i,a))))},h="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>c(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(d(t,i),!0)}),l=(e,t)=>(o[e].push(t),()=>{r(o[e],t)});return{state:h,get:c,set:d,on:l,onChange:(t,i)=>{const s=l("set",((e,s)=>{e===t&&i(s)})),o=l("reset",(()=>i(n(e)[t])));return()=>{s(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);o.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.a)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),a(e)}}})()),i})({})}}]);