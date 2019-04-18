var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new o(function(e){e(t.value)}).then(s,a)}c((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Ionic.loadBundle("g7y3qohv",["exports","./chunk-c0d86ae2.js","./chunk-efee13a5.js"],function(t,e,o){var n=window.Ionic.h;function r(t,e,o){var n=new t,r=new t,i=e.host||e,s=e.querySelector(".toast-wrapper");switch(r.addElement(s),o){case"top":r.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(r))}function i(t,e,o){var n=new t,r=new t,i=e.host||e,s=e.querySelector(".toast-wrapper");switch(r.addElement(s),o){case"top":r.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}function s(t,e,o){var n=new t,r=new t,i=e.host||e,s=e.querySelector(".toast-wrapper");switch(r.addElement(s),o){case"top":s.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var a=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:s.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return Promise.resolve(n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r))}function a(t,e){var o=new t,n=new t,r=e.host||e,i=e.querySelector(".toast-wrapper");return n.addElement(i),n.fromTo("opacity",.99,0),Promise.resolve(o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))}var c=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(o){switch(o.label){case 0:return[4,e.present(this,"toastEnter",r,s,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),e.dismiss(this,t,o,"toastLeave",i,a,this.position)},t.prototype.onDidDismiss=function(){return e.eventMethod(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return e.eventMethod(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(n){switch(n.label){case 0:return e.isCancel(o=t.role)?[2,this.dismiss(void 0,o)]:[4,this.callButtonHandler(t)];case 1:return n.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t.handler()];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.hostData=function(){var t;return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[""+this.mode]=!0,t),o.createColorClasses(this.color),o.getClassMap(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.renderButtons=function(t,e){var r,i=this;if(0!==t.length){var s=((r={"toast-button-group":!0})["toast-button-group-"+e]=!0,r);return n("div",{class:s},t.map(function(t){return n("button",{type:"button",class:(e=t,Object.assign((r={"toast-button":!0,"toast-button-icon-only":void 0!==e.icon&&void 0===e.text},r["toast-button-"+e.role]=void 0!==e.role,r["ion-focusable"]=!0,r["ion-activatable"]=!0,r),o.getClassMap(e.cssClass))),tabIndex:0,onClick:function(){return i.buttonClick(t)}},n("div",{class:"toast-button-inner"},t.icon&&n("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===i.mode&&n("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}));var e,r}))}},t.prototype.render=function(){var t,e=this.getButtons(),o=e.filter(function(t){return"start"===t.side}),r=e.filter(function(t){return"start"!==t.side}),i=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return n("div",{class:i},n("div",{class:"toast-container"},this.renderButtons(o,"start"),n("div",{class:"toast-content"},void 0!==this.header&&n("div",{class:"toast-header"},this.header),void 0!==this.message&&n("div",{class:"toast-message"},this.message)),this.renderButtons(r,"end")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},buttons:{type:"Any",attr:"buttons"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host([dir=rtl])+b{right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper{left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(){}return t.prototype.create=function(t){return e.createOverlay(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,o,n){return e.dismissOverlay(this.doc,t,o,"ion-toast",n)},t.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,e.getOverlay(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();t.IonToast=c,t.IonToastController=l,Object.defineProperty(t,"__esModule",{value:!0})});