"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[5483,5608],{25213:(t,e,i)=>{i.r(e),i.d(e,{dyte_name_tag:()=>o});var s=i(65733),a=i(22906),n=i(20336),r=i(96633);const o=class{constructor(t){(0,s.r)(this,t),this.participant=void 0,this.meeting=void 0,this.size=void 0,this.maxLength=20,this.isScreenShare=!1,this.iconPack=r.d,this.t=(0,n.u)(),this.length=13}sizeChanged(t){this.length="sm"===t?8:13}formatNameTag(t,e){return this.isScreenShare?e?`${this.t("screen")} - ${(0,a.s)(t,this.length-3)} (${this.t("you")})`:`${this.t("screen")} - ${(0,a.s)(t,this.length)}`:e?`${(0,a.s)(t,this.length-3)} (${this.t("you")})`:(0,a.s)(t,this.length)}render(){var t,e,i;const n=(0,a.f)((null===(t=this.participant)||void 0===t?void 0:t.name)||""),r=(null===(e=this.participant)||void 0===e?void 0:e.id)===(null===(i=this.meeting)||void 0===i?void 0:i.self.id);return(0,s.h)(s.H,{title:n},(0,s.h)("slot",{name:"start"}),(0,s.h)("span",{class:"name"},this.formatNameTag(n,r)),(0,s.h)("slot",{name:"end"}))}static get watchers(){return{size:["sizeChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:inline-flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);font-size:14px;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}span.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}::slotted(dyte-audio-visualizer[slot='start']){margin-right:var(--dyte-space-1\\.5, 6px)}::slotted(dyte-audio-visualizer[slot='end']){margin-left:var(--dyte-space-1\\.5, 6px)}:host([size='sm']){font-size:12px;--tw-bg-opacity:0.6}"},22906:(t,e,i)=>{i.d(e,{a:()=>n,f:()=>r,g:()=>o,h:()=>a,s:()=>s});const s=(t,e=20)=>null==t?"":t.length>e?`${t.substring(0,e)}...`:t,a=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),n=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,r=t=>""===(t=null==t?void 0:t.trim())?"Participant":t;function o(t,e=2){return t.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,e).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);