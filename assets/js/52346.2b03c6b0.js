"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[52346,15103],{15103:(t,e,i)=>{i.r(e),i.d(e,{dyte_audio_visualizer:()=>d,dyte_switch:()=>p});var a,s=i(65733),n=i(96633),r=i(20336),o=c;function c(){}c.mixin=function(t){var e=t.prototype||t;e.isWildEmitter=!0,e.on=function(t,e,i){this.callbacks=this.callbacks||{};var a=3===arguments.length,s=a?arguments[1]:void 0,n=a?arguments[2]:arguments[1];return n._groupName=s,(this.callbacks[t]=this.callbacks[t]||[]).push(n),this},e.once=function(t,e,i){var a=this,s=3===arguments.length,n=s?arguments[1]:void 0,r=s?arguments[2]:arguments[1];return this.on(t,n,(function e(){a.off(t,e),r.apply(this,arguments)})),this},e.releaseGroup=function(t){var e,i,a,s;for(e in this.callbacks=this.callbacks||{},this.callbacks)for(i=0,a=(s=this.callbacks[e]).length;i<a;i++)s[i]._groupName===t&&(s.splice(i,1),i--,a--);return this},e.off=function(t,e){this.callbacks=this.callbacks||{};var i,a=this.callbacks[t];return a?1===arguments.length?(delete this.callbacks[t],this):(-1!==(i=a.indexOf(e))&&(a.splice(i,1),0===a.length&&delete this.callbacks[t]),this):this},e.emit=function(t){this.callbacks=this.callbacks||{};var e,i,a,s=[].slice.call(arguments,1),n=this.callbacks[t],r=this.getWildcardCallbacks(t);if(n)for(e=0,i=(a=n.slice()).length;e<i&&a[e];++e)a[e].apply(this,s);if(r)for(i=r.length,e=0,i=(a=r.slice()).length;e<i&&a[e];++e)a[e].apply(this,[t].concat(s));return this},e.getWildcardCallbacks=function(t){this.callbacks=this.callbacks||{};var e,i,a=[];for(e in this.callbacks)i=e.split("*"),("*"===e||2===i.length&&t.slice(0,i[0].length)===i[0])&&(a=a.concat(this.callbacks[e]));return a}},c.mixin(c),"undefined"!=typeof window&&(a=window.AudioContext||window.webkitAudioContext);var h=null;const l=(t,e)=>{if(null==t)return;const i=Math.round(1.5),a=[...Array(3)].map(((t,a)=>{let s=a;return s>i-1&&(s=3-s-1),Math.round((s+1)/(i+1)*e)})),{width:s,height:n}=t,r=t.getContext("2d");let o=2;const c=1*s/a.length,h=c-4;r.clearRect(0,0,s,n),r.fillStyle="rgb(0,0,0,0.0)",r.fillRect(0,0,s,n);const l=getComputedStyle(t).getPropertyValue("color");r.fillStyle=l,r.strokeStyle=l,r.lineCap="round",r.lineWidth=4,r.beginPath();for(const d of a){const t=Math.min(-Math.abs(1.2*d/10*n)+n/2,n/2-2.5),e=Math.max(2*(n/2-t),5);r.moveTo(o+h/2,t),r.lineTo(o+h/2,t+e),o+=c}r.stroke()},d=class{constructor(t){(0,s.r)(this,t),this.variant="bars",this.participant=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,r.u)(),this.isScreenShare=!1,this.audioEnabled=void 0,this.volume=0}connectedCallback(){this.participantChanged(this.participant)}componentDidLoad(){l(this.visualizer,0)}disconnectedCallback(){var t,e,i;null===(t=this.hark)||void 0===t||t.stop(),this.audioUpdateListener&&(null===(e=this.participant)||void 0===e||e.removeListener("audioUpdate",this.audioUpdateListener)),this.screenShareUpdateListener&&(null===(i=this.participant)||void 0===i||i.removeListener("screenShareUpdate",this.screenShareUpdateListener))}participantChanged(t){null!=t&&(this.audioUpdateListener=({audioEnabled:t,audioTrack:e})=>{var i;if(null===(i=this.hark)||void 0===i||i.stop(),t&&null!=e){this.audioEnabled=!0;const t=new MediaStream;t.addTrack(e),this.calcVolume(t),l(this.visualizer,0)}else this.volume=0,this.audioEnabled=!1},this.isScreenShare?(this.screenShareUpdateListener=({screenShareEnabled:t,screenShareTracks:e})=>{this.audioUpdateListener({audioEnabled:t&&null!=e.audio,audioTrack:e.audio})},this.screenShareUpdateListener(t),t.addListener("screenShareUpdate",this.screenShareUpdateListener)):(this.audioUpdateListener(t),t.addListener("audioUpdate",this.audioUpdateListener)))}calcVolume(t){this.hark=function(t,e){var i=new o;if(!a)return i;var s,n,r,c=(e=e||{}).smoothing||.1,l=e.interval||50,d=e.threshold,p=e.play,u=e.history||10,g=!0;h=e.audioContext||h||new a,(r=h.createAnalyser()).fftSize=512,r.smoothingTimeConstant=c,n=new Float32Array(r.frequencyBinCount),t.jquery&&(t=t[0]),t instanceof HTMLAudioElement||t instanceof HTMLVideoElement?(s=h.createMediaElementSource(t),void 0===p&&(p=!0),d=d||-50):(s=h.createMediaStreamSource(t),d=d||-50),s.connect(r),p&&r.connect(h.destination),i.speaking=!1,i.suspend=function(){return h.suspend()},i.resume=function(){return h.resume()},Object.defineProperty(i,"state",{get:function(){return h.state}}),h.onstatechange=function(){i.emit("state_change",h.state)},i.setThreshold=function(t){d=t},i.setInterval=function(t){l=t},i.stop=function(){g=!1,i.emit("volume_change",-100,d),i.speaking&&(i.speaking=!1,i.emit("stopped_speaking")),r.disconnect(),s.disconnect()},i.speakingHistory=[];for(var k=0;k<u;k++)i.speakingHistory.push(0);var f=function(){setTimeout((function(){if(g){var t=function(t,e){var i=-1/0;t.getFloatFrequencyData(e);for(var a=4,s=e.length;a<s;a++)e[a]>i&&e[a]<0&&(i=e[a]);return i}(r,n);i.emit("volume_change",t,d);var e=0;if(t>d&&!i.speaking){for(var a=i.speakingHistory.length-3;a<i.speakingHistory.length;a++)e+=i.speakingHistory[a];e>=2&&(i.speaking=!0,i.emit("speaking"))}else if(t<d&&i.speaking){for(a=0;a<i.speakingHistory.length;a++)e+=i.speakingHistory[a];0==e&&(i.speaking=!1,i.emit("stopped_speaking"))}i.speakingHistory.shift(),i.speakingHistory.push(0+(t>d)),f()}}),l)};return f(),i}(t,{play:!1,interval:100}),this.hark.on("volume_change",(t=>{const e=this.volume;let i=Math.round(10**(t/115)*10);i<3&&(i=0);let a=Math.round((2*e+i)/3);e!==a&&(this.volume=a,l(this.visualizer,this.volume))}))}render(){return(0,s.h)(s.H,null,(0,s.h)("canvas",{width:"24",height:"24",class:{bars:!0,visible:this.audioEnabled},ref:t=>this.visualizer=t,part:"canvas"}),!this.isScreenShare&&!this.audioEnabled&&(0,s.h)("dyte-icon",{icon:this.iconPack.mic_off,part:"mic-off-icon",iconPack:this.iconPack,t:this.t}))}static get watchers(){return{participant:["participantChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;height:var(--dyte-space-6, 24px);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}canvas,dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){transform:scale(0.9)}canvas{display:none}canvas.visible{display:block}canvas.bars{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";const p=class{constructor(t){(0,s.r)(this,t),this.dyteChange=(0,s.c)(this,"dyteChange",4),this.onClick=()=>{this.readonly||this.disabled||(this.checked=!this.checked)},this.onKeyPress=t=>{if(!this.readonly)switch(t.key){case"Enter":case" ":this.checked=!this.checked}},this.checked=!1,this.readonly=!1,this.disabled=!1,this.iconPack=n.d,this.t=(0,r.u)()}checkedChange(t){this.dyteChange.emit(t)}render(){return(0,s.h)(s.H,{role:"switch",tabIndex:this.disabled&&0,"aria-readonly":this.readonly,"aria-checked":this.checked,"aria-disabled":this.disabled,class:{checked:this.checked},onClick:this.onClick,onKeyPress:this.onKeyPress},(0,s.h)("div",{class:"switch",part:"switch"}))}static get watchers(){return{checked:["checkedChange"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-6, 24px);width:var(--dyte-space-10, 40px);align-items:center;padding:var(--dyte-space-1, 4px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));cursor:pointer}.switch{box-sizing:border-box;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);background-color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:9999px;transition-property:var(--dyte-transition-property, all);transition-duration:200ms}:host(.checked){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}:host(.checked) .switch{transform:translateX(100%)}:host([readonly]),:host([disabled]){cursor:not-allowed;opacity:0.6}"}}]);