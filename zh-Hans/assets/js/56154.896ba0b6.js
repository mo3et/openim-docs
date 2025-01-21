"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[56154,35329],{35329:(e,t,i)=>{i.r(t),i.d(t,{dyte_camera_toggle:()=>r});var s=i(65733),n=i(96633),o=i(20336),a=i(46503);const r=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.videoUpdateListener=({videoEnabled:e})=>{this.videoEnabled=e},this.selfJoinStateListener=()=>{this.updateCanProduce(this.meeting)},this.selfStateLeftListener=()=>{this.canProduceVideo=!1},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{"video"===e&&(this.cameraPermission=t)},this.toggleCamera=()=>{var e,t,i,s,n,o,r,d,l,c,h,u;if(null===(e=this.meeting)||void 0===e||e.__internals__.logger.info("dyteCameraToggle::toggleCamera",{media:{video:{enabled:Boolean(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===i?void 0:i.videoEnabled),permission:this.cameraPermission,canProduce:null===(o=null===(n=null===(s=this.meeting)||void 0===s?void 0:s.self)||void 0===n?void 0:n.permissions)||void 0===o?void 0:o.canProduceVideo}},webinar:{stageStatus:null===(d=null===(r=this.meeting)||void 0===r?void 0:r.self)||void 0===d?void 0:d.webinarStageStatus},livestream:{stageStatus:null===(c=null===(l=this.meeting)||void 0===l?void 0:l.stage)||void 0===c?void 0:c.status},moduleExists:{self:Boolean(null===(h=this.meeting)||void 0===h?void 0:h.self)}}),this.hasPermissionError()){const e={enabled:!0,kind:"video"};return this.stateUpdate.emit({activePermissionsMessage:e}),a.s.activePermissionsMessage=e,!1}const m=null===(u=this.meeting)||void 0===u?void 0:u.self;null!=m&&this.canProduceVideo&&(m.videoEnabled?m.disableVideo():m.enableVideo())},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,o.u)(),this.videoEnabled=!1,this.canProduceVideo=!1,this.cameraPermission="NOT_REQUESTED"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t,i,s,n,o,a,r,d;null===(e=this.meeting)||void 0===e||e.self.removeListener("videoUpdate",this.videoUpdateListener),null===(t=this.meeting)||void 0===t||t.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("joinStageRequestAccepted",this.selfJoinStateListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("joinStageRequestRejected",this.selfJoinStateListener),null===(n=this.meeting)||void 0===n||n.self.removeListener("stageJoined",this.selfJoinStateListener),null===(o=this.meeting)||void 0===o||o.self.removeListener("stageLeft",this.selfStateLeftListener),null===(a=this.meeting)||void 0===a||a.self.removeListener("removedFromStage",this.selfJoinStateListener),null===(d=null===(r=this.meeting)||void 0===r?void 0:r.stage)||void 0===d||d.removeListener("stageStatusUpdate",this.selfJoinStateListener)}meetingChanged(e){if(null!=e){const{self:t,stage:i}=e;this.updateCanProduce(e),this.cameraPermission=t.mediaPermissions.video||"NOT_REQUESTED",this.videoEnabled=t.videoEnabled,t.addListener("videoUpdate",this.videoUpdateListener),t.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),t.addListener("joinStageRequestAccepted",this.selfJoinStateListener),t.addListener("joinStageRequestRejected",this.selfJoinStateListener),t.addListener("stageJoined",this.selfJoinStateListener),t.addListener("stageLeft",this.selfStateLeftListener),t.addListener("removedFromStage",this.selfJoinStateListener),null==i||i.addListener("stageStatusUpdate",this.selfJoinStateListener)}}updateCanProduce(e){const{self:t,meta:i,stage:s}=e,n="ALLOWED"===t.permissions.canProduceVideo,o="WEBINAR"===i.viewType,a="LIVESTREAM"===i.viewType;if(this.canProduceVideo=!1,n&&!a)this.canProduceVideo=!0;else if(o||a){n&&"OFF_STAGE"!==s.status&&"REQUESTED_TO_JOIN_STAGE"!==s.status&&(this.canProduceVideo=!0);"CAN_REQUEST"===t.permissions.canProduceVideo&&(o&&("ON_STAGE"===t.webinarStageStatus||"ACCEPTED_TO_JOIN_STAGE"===t.webinarStageStatus)||a&&("ON_STAGE"===s.status||"ACCEPTED_TO_JOIN_STAGE"===s.status))&&(this.canProduceVideo=!0)}}hasPermissionError(){return"DENIED"===this.cameraPermission||"SYSTEM_DENIED"===this.cameraPermission}getState(){let e="",t="",i="",s={},n=this.hasPermissionError(),o="COULD_NOT_START"===this.cameraPermission;return this.videoEnabled&&!n?(t=this.t("video_on"),i=this.iconPack.video_on):(t=this.t("video_off"),i=this.iconPack.video_off,s["red-icon"]=!0),e=o?this.t("perm_could_not_start.video"):"SYSTEM_DENIED"===this.cameraPermission?this.t("perm_sys_denied.video"):"DENIED"===this.cameraPermission?this.t("perm_denied.video"):this.videoEnabled?this.t("disable_video"):this.t("enable_video"),{tooltipLabel:e,label:t,icon:i,classList:s,showWarning:n||o,disable:n}}render(){if(!this.canProduceVideo)return null;const{tooltipLabel:e,label:t,icon:i,classList:n,showWarning:o,disable:a}=this.getState();return(0,s.h)(s.H,{title:t},(0,s.h)("dyte-tooltip",{kind:"block",label:e,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:n,variant:this.variant,label:t,icon:i,onClick:this.toggleCamera,showWarning:o,disabled:a})))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},46503:(e,t,i)=>{i.d(t,{o:()=>l,s:()=>d});var s=i(65733);const n=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),a=e=>"function"==typeof e?e():e,r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:d,onChange:l}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=a(e);let s=new Map(Object.entries(null!=i?i:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;s=new Map(Object.entries(null!==(t=a(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},d=e=>(n.get.forEach((t=>t(e))),s.get(e)),l=(e,i)=>{const o=s.get(e);t(i,o,e)&&(s.set(e,i),n.set.forEach((t=>t(e,i,o))))},c="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>d(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(l(t,i),!0)}),h=(e,t)=>(n[e].push(t),()=>{r(n[e],t)});return{state:c,get:d,set:l,on:h,onChange:(t,i)=>{const s=h("set",((e,s)=>{e===t&&i(s)})),n=h("reset",(()=>i(a(e)[t])));return()=>{s(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=s.get(e);n.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.a)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),o(e)}}})()),i})({})}}]);