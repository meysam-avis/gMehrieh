const e=window.Ionic.h;import{a as t,c as o,d as n,e as i,f as s,g as a,h as r}from"./chunk-265f51bc.js";import{a as d}from"./chunk-2f96b3d2.js";function l(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".loading-wrapper")),n.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(o.addElement(t).easing("ease-in-out").duration(200).add(n).add(i))}function c(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".loading-wrapper")),n.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(o.addElement(t).easing("ease-in-out").duration(200).add(n).add(i))}function m(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".loading-wrapper")),n.fromTo("opacity",.01,.32),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(o.addElement(t).easing("ease-in-out").duration(200).add(n).add(i))}function p(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".loading-wrapper")),n.fromTo("opacity",.32,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(o.addElement(t).easing("ease-in-out").duration(200).add(n).add(i))}class u{constructor(){this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}componentWillLoad(){void 0===this.spinner&&(this.spinner=this.config.get("loadingSpinner",this.config.get("spinner","ios"===this.mode?"lines":"crescent")))}onBackdropTap(){this.dismiss(void 0,t)}async present(){await o(this,"loadingEnter",l,m,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(e,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),n(this,e,t,"loadingLeave",c,p)}onDidDismiss(){return i(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return i(this.el,"ionLoadingWillDismiss")}hostData(){return{style:{zIndex:4e4+this.overlayIndex},class:Object.assign({},d(this.cssClass),{[`${this.mode}`]:!0,"loading-translucent":this.translucent})}}render(){return[e("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),e("div",{class:"loading-wrapper",role:"dialog"},this.spinner&&e("div",{class:"loading-spinner"},e("ion-spinner",{name:this.spinner})),this.message&&e("div",{class:"loading-content"},this.message))]}static get is(){return"ion-loading"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}.loading-translucent.sc-ion-loading-ios-h   .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}static get styleMode(){return"ios"}}class h{create(e){return s(this.doc.createElement("ion-loading"),e)}dismiss(e,t,o){return a(this.doc,e,t,"ion-loading",o)}async getTop(){return r(this.doc,"ion-loading")}static get is(){return"ion-loading-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{u as IonLoading,h as IonLoadingController};