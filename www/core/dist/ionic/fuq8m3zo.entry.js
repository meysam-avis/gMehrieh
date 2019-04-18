const t=window.Ionic.h;import{b as e,c as i}from"./chunk-2f96b3d2.js";import{c as o}from"./chunk-6d7d2f8c.js";class n{constructor(){this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons")}onClick(t){if("button"===this.type)e(this.win,this.href,t,this.routerDirection);else if(o(this.el)){const e=this.el.closest("form");if(e){t.preventDefault();const i=this.win.document.createElement("button");i.type=this.type,i.style.display="none",e.appendChild(i),i.click(),i.remove()}}}hostData(){const{buttonType:t,disabled:e,color:o,expand:n,shape:s,size:r,strong:l}=this;let a=this.fill;return void 0===a&&(a=this.inToolbar?"clear":"solid"),{"aria-disabled":e?"true":null,class:Object.assign({},i(o),{[`${this.mode}`]:!0,[t]:!0,[`${t}-${n}`]:void 0!==n,[`${t}-${r}`]:void 0!==r,[`${t}-${s}`]:void 0!==s,[`${t}-${a}`]:!0,[`${t}-strong`]:l,"button-disabled":e,"ion-activatable":!0,"ion-focusable":!0})}}render(){const e=void 0===this.href?"button":"a";return t(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",{type:this.inToolbar?"unbounded":"bounded"}))}static get is(){return"ion-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}}static get events(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){pointer-events:none}:host(.button-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0)}:host(.button-solid.activated){--opacity:1}:host(.button-solid.activated.ion-color) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-outline.activated.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-clear.activated){--opacity:0.4}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:600}\@media (any-hover:hover){:host(.button-solid:hover){--opacity:0.8}:host(.button-clear:hover){--opacity:0.6}}"}static get styleMode(){return"ios"}}let s;function r(t,e,i,o){return e="ios"===(e=(e||"md").toLowerCase())?"ios":"md",i&&"ios"===e?t=i.toLowerCase():o&&"md"===e?t=o.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${e}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function l(t){return"string"==typeof t&&a(t=t.trim())?t:null}function a(t){return t.length>0&&/(\/|\.)/.test(t)}class c{constructor(){this.isVisible=!1,this.lazy=!1}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,i){if(this.lazy&&this.win&&this.win.IntersectionObserver){const o=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(o.disconnect(),this.io=void 0,i())},{rootMargin:e});o.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t?function(t,e,i){let o=h.get(e);return o||(o=fetch(e,{cache:"force-cache"}).then(t=>!function(e){return t.status<=299}()?Promise.resolve(null):t.text()).then(e=>(function(t,e,i){if(e){const i=t.createDocumentFragment(),o=t.createElement("div");o.innerHTML=e,i.appendChild(o);for(let t=o.childNodes.length-1;t>=0;t--)"svg"!==o.childNodes[t].nodeName.toLowerCase()&&o.removeChild(o.childNodes[t]);const n=o.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&(n.setAttribute("class","s-ion-icon"),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(let i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(n)))return o.innerHTML}return""})(t,e)),h.set(e,o)),o}(this.doc,t).then(t=>this.svgContent=t):console.error("icon was not resolved")}if(!this.ariaLabel){const t=r(this.getName(),this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getName(){return void 0!==this.name?this.name:this.icon&&!a(this.icon)?this.icon:void 0}getUrl(){let t=l(this.src);return t||((t=r(this.getName(),this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=l(this.icon))||null)}getNamedUrl(t){return function(){if(!s){const t=window;t.Ionicons=t.Ionicons||{},s=t.Ionicons.map=t.Ionicons.map||new Map}return s}().get(t)||`${this.resourcesUrl}svg/${t}.svg`}hostData(){const t=this.mode||"md",e=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return{role:"img",class:Object.assign({[`${t}`]:!0},(i=this.color,i?{"ion-color":!0,[`ion-color-${i}`]:!0}:null),{[`icon-${this.size}`]:!!this.size,"flip-rtl":e&&"rtl"===this.doc.dir})};var i}render(){return t("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})}static get is(){return"ion-icon"}static get encapsulation(){return"shadow"}static get properties(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},flipRtl:{type:Boolean,attr:"flip-rtl"},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"}}const h=new Map;export{n as IonButton,c as IonIcon};