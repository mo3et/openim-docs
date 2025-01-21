"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[62277,94483],{94483:(e,t,i)=>{i.r(t),i.d(t,{dyte_participant_setup:()=>d});var n=i(65733),o=i(46503),s=i(96633),a=i(20336),r=i(37692);i(21237),i(24555),i(60804);const d=class{constructor(e){(0,n.r)(this,e),this.onVideoUpdate=e=>{this.videoState=e},this.onPinned=({isPinned:e})=>{this.isPinned=e},this.videoState=void 0,this.isPinned=!1,this.nameTagPosition="bottom-left",this.isPreview=!1,this.participant=void 0,this.states=void 0,this.config=r.d,this.variant="solid",this.size=void 0,this.iconPack=s.d,this.t=(0,a.u)()}connectedCallback(){this.participantsChanged(this.participant)}componentDidLoad(){this.videoStateChanged(this.videoState)}disconnectedCallback(){null!=this.participant&&(this.participant.removeListener("videoUpdate",this.onVideoUpdate),this.participant.removeListener("pinned",this.onPinned),this.participant.removeListener("unpinned",this.onPinned))}async participantsChanged(e){null!=e&&(this.videoState={videoEnabled:e.videoEnabled,videoTrack:e.videoTrack},this.isPinned=e.isPinned,e.addListener("videoUpdate",this.onVideoUpdate),e.addListener("pinned",this.onPinned),e.addListener("unpinned",this.onPinned))}videoStateChanged(e){if(null!=e&&null!=this.videoEl)if(e.videoEnabled){const t=new MediaStream;t.addTrack(e.videoTrack),this.videoEl.srcObject=t}else this.videoEl.srcObject=void 0}isMirrored(){var e;if(null!=this.participant){if("preview"in this.participant||this.isPreview){const t=this.states||o.s,i=null===(e=null==t?void 0:t.prefs)||void 0===e?void 0:e.mirrorVideo;if("boolean"==typeof i)return i}}return!1}render(){var e,t,i,o;return(0,n.h)(n.H,null,(0,n.h)("video",{ref:e=>this.videoEl=e,class:{visible:null===(e=this.videoState)||void 0===e?void 0:e.videoEnabled,mirror:this.isMirrored(),[null!==(o=null===(i=null===(t=this.config)||void 0===t?void 0:t.config)||void 0===i?void 0:i.videoFit)&&void 0!==o?o:"cover"]:!0},autoPlay:!0,playsInline:!0,muted:!0}),this.isPinned&&(0,n.h)("dyte-icon",{class:"pinned-icon",icon:this.iconPack.pin,"aria-label":this.t("pinned"),iconPack:this.iconPack,t:this.t}),(0,n.h)("slot",null))}static get watchers(){return{participant:["participantsChanged"],videoState:["videoStateChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}video{display:none;position:absolute;height:100%;width:100%;border-radius:var(--dyte-border-radius-lg, 12px)}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}@media (orientation: portrait){:host{height:var(--dyte-space-44, 176px)}}"},46503:(e,t,i)=>{i.d(t,{o:()=>c,s:()=>d});var n=i(65733);const o=e=>!("isConnected"in e)||e.isConnected,s=((e,t)=>{let i;return(...n)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...n)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),a=e=>"function"==typeof e?e():e,r=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:d,onChange:c}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=a(e);let n=new Map(Object.entries(null!=i?i:{}));const o={dispose:[],get:[],set:[],reset:[]},s=()=>{var t;n=new Map(Object.entries(null!==(t=a(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},d=e=>(o.get.forEach((t=>t(e))),n.get(e)),c=(e,i)=>{const s=n.get(e);t(i,s,e)&&(n.set(e,i),o.set.forEach((t=>t(e,i,s))))},p="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>d(t),ownKeys:e=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>n.has(t),set:(e,t,i)=>(c(t,i),!0)}),l=(e,t)=>(o[e].push(t),()=>{r(o[e],t)});return{state:p,get:d,set:c,on:l,onChange:(t,i)=>{const n=l("set",((e,n)=>{e===t&&i(n)})),o=l("reset",(()=>i(a(e)[t])));return()=>{n(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),s()},reset:s,forceUpdate:e=>{const t=n.get(e);o.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof n.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,n.a)();i&&((e,t,i)=>{const n=e.get(t);n?n.includes(i)||n.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(n.f)),s(e)},reset:()=>{e.forEach((e=>e.forEach(n.f))),s(e)}}})()),i})({})}}]);