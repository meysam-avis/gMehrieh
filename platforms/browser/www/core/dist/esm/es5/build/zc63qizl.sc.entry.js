import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";import{c as createColorClasses,d as hostContext,b as openURL}from"./chunk-2f96b3d2.js";var Item=function(){function e(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}return e.prototype.itemStyle=function(e){e.stopPropagation();var t=e.target.tagName,n=e.detail,i={},o=this.itemStyles.get(t)||{},r=!1;Object.keys(n).forEach(function(e){var t="item-"+e,l=n[e];l!==o[t]&&(r=!0),l&&(i[t]=!0)}),r&&(this.itemStyles.set(t,i),this.el.forceUpdate())},e.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(e){void 0===e.size&&(e.size="small")});var e=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=e.length>1},e.prototype.isClickable=function(){return void 0!==this.href||this.button},e.prototype.hostData=function(){var e,t={};return this.itemStyles.forEach(function(e){Object.assign(t,e)}),{"aria-disabled":this.disabled?"true":null,class:Object.assign({},t,createColorClasses(this.color),(e={item:!0},e[""+this.mode]=!0,e["item-lines-"+this.lines]=void 0!==this.lines,e["item-disabled"]=this.disabled,e["in-list"]=hostContext("ion-list",this.el),e["item-multiple-inputs"]=this.multipleInputs,e["ion-activatable"]=this.isClickable(),e["ion-focusable"]=!0,e))}},e.prototype.render=function(){var e=this,t=e.href,n=e.detail,i=e.mode,o=e.win,r=e.detailIcon,l=e.routerDirection,a=e.type,s=this.isClickable(),c=s?void 0===t?"button":"a":"div",u=void 0!==n?n:"ios"===i&&s;return[h(c,Object.assign({},"button"===c?{type:a}:{href:t},{class:"item-native",disabled:this.disabled,onClick:function(e){return openURL(o,t,e,l)}}),h("slot",{name:"start"}),h("div",{class:"item-inner"},h("div",{class:"input-wrapper"},h("slot",null)),h("slot",{name:"end"}),u&&h("ion-icon",{icon:r,lazy:!1,class:"item-detail-icon"}),h("div",{class:"item-inner-highlight"})),s&&"md"===i&&h("ion-ripple-effect",null)),h("div",{class:"item-highlight"})]},Object.defineProperty(e,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-item-md-h{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.sc-ion-item-md-h   .item-inner.sc-ion-item-md, .ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{border-color:var(--ion-color-shade)}.ion-focused.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--background-focused)}.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--background-activated)}.ion-color.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-tint)}.item-disabled.sc-ion-item-md-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native.sc-ion-item-md{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native.sc-ion-item-md::-moz-focus-inner{border:0}a.sc-ion-item-md, button.sc-ion-item-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner.sc-ion-item-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner.sc-ion-item-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon.sc-ion-item-md{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}.sc-ion-item-md-s > ion-icon{font-size:1.6em}.sc-ion-item-md-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.sc-ion-item-md-s > ion-label{-ms-flex:1;flex:1}.item-input.sc-ion-item-md-h, [vertical-align-top].sc-ion-item-md-h{-ms-flex-align:start;align-items:flex-start}.input-wrapper.sc-ion-item-md{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-label-floating.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md, .item-label-stacked.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight.sc-ion-item-md, .item-inner-highlight.sc-ion-item-md{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight.sc-ion-item-md{height:var(--full-highlight-height)}.item-inner-highlight.sc-ion-item-md{height:var(--inset-highlight-height)}.item-interactive.ion-touched.ion-invalid.sc-ion-item-md-h, .item-interactive.item-has-focus.sc-ion-item-md-h{--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}.item-interactive.item-has-focus.sc-ion-item-md-h{--highlight-background:var(--highlight-color-focused)}.item-interactive.ion-valid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-valid)}.item-interactive.ion-invalid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-invalid)}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select{-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-datetime{--padding-start:0;width:100%}.sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-select{position:relative}.item-textarea.sc-ion-item-md-h{-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-md-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}ion-ripple-effect.sc-ion-item-md{color:var(--ripple-color)}.sc-ion-item-md-h{--min-height:48px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--background);--background-focused:var(--ion-item-background-activated,#f1f1f1);--transition:background-color 300ms cubic-bezier(.4,0,.2,1);--padding-start:16px;--color:var(--ion-item-color,var(--ion-text-color,#000));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:16px;font-weight:400;text-transform:none}.item-interactive.sc-ion-item-md-h{--inner-border-width:0}.item-interactive.sc-ion-item-md-h, .item-lines-full.sc-ion-item-md-h{--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-inset.sc-ion-item-md-h{--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}.item-lines-inset.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--border-width:0;--show-full-highlight:0}.item-lines-full.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--inner-border-width:0;--show-inset-highlight:0}.sc-ion-item-md-h.item-multi-line .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-multi-line .sc-ion-item-md-s > [slot=start]{margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}.sc-ion-item-md-s > [slot=start]{margin-right:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > [slot=start]{margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}.sc-ion-item-md-s > [slot=end]{margin-left:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > [slot=end]{margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}.sc-ion-item-md-s > ion-icon{color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}.sc-ion-item-md-h.ion-color .sc-ion-item-md-s > ion-icon{color:var(--ion-color-contrast)}.sc-ion-item-md-s > ion-icon[slot]{margin-top:12px;margin-bottom:12px}.sc-ion-item-md-s > ion-icon[slot=start]{margin-right:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}.sc-ion-item-md-s > ion-icon[slot=end]{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.sc-ion-item-md-s > ion-note, .sc-ion-item-md-s > ion-toggle[slot=end], .sc-ion-item-md-s > ion-toggle[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-item-md-s > ion-note{-ms-flex-item-align:start;align-self:flex-start;font-size:11px}.sc-ion-item-md-s > ion-note[slot]{padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}.sc-ion-item-md-s > ion-note[slot=start]{padding-right:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-note[slot=start]{padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}.sc-ion-item-md-s > ion-note[slot=end]{padding-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-note[slot=end]{padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}.sc-ion-item-md-s > ion-avatar{width:40px;height:40px}.sc-ion-item-md-s > ion-thumbnail{width:56px;height:56px}.sc-ion-item-md-s > ion-avatar, .sc-ion-item-md-s > ion-thumbnail{margin-top:8px;margin-bottom:8px}.sc-ion-item-md-s > ion-avatar[slot=start], .sc-ion-item-md-s > ion-thumbnail[slot=start]{margin-right:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-avatar[slot=start], .sc-ion-item-md-s > ion-thumbnail[slot=start]{margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}.sc-ion-item-md-s > ion-avatar[slot=end], .sc-ion-item-md-s > ion-thumbnail[slot=end]{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-s > ion-avatar[slot=end], .sc-ion-item-md-s > ion-thumbnail[slot=end]{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.sc-ion-item-md-s > ion-label{margin-left:0;margin-right:0;margin-top:11px;margin-bottom:10px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-md-h.item-radio .sc-ion-item-md-s > ion-label, .sc-ion-item-md-h.item-toggle .sc-ion-item-md-s > ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-md-h.item-radio .sc-ion-item-md-s > ion-label, .sc-ion-item-md-h.item-toggle .sc-ion-item-md-s > ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-item-md-s > .button-small{--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}.item-label-floating.sc-ion-item-md-h, .item-label-stacked.sc-ion-item-md-h{--min-height:55px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-floating, .sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-stacked{color:var(--ion-color-primary,#3880ff)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),ItemDivider=function(){function e(){this.sticky=!1}return e.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(e){void 0===e.size&&(e.size="small")})},e.prototype.hostData=function(){var e;return{class:Object.assign({},createColorClasses(this.color),(e={},e[""+this.mode]=!0,e["item-divider-sticky"]=this.sticky,e.item=!0,e))}},e.prototype.render=function(){return[h("slot",{name:"start"}),h("div",{class:"item-divider-inner"},h("div",{class:"item-divider-wrapper"},h("slot",null)),h("slot",{name:"end"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-item-divider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},sticky:{type:Boolean,attr:"sticky"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-item-divider-md-h{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:calc(var(--padding-end) + var(--ion-safe-area-right, 0px));padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:calc(var(--padding-end) + var(--ion-safe-area-right, 0px));padding-inline-end:calc(var(--padding-end) + var(--ion-safe-area-right, 0px))}}.ion-color.sc-ion-item-divider-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.item-divider-sticky.sc-ion-item-divider-md-h{position:-webkit-sticky;position:sticky;top:0}.item-divider-inner.sc-ion-item-divider-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-top:0;padding-bottom:0;min-height:inherit;border:0}.item-divider-inner.sc-ion-item-divider-md, .item-divider-wrapper.sc-ion-item-divider-md{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;overflow:hidden}.item-divider-wrapper.sc-ion-item-divider-md{text-overflow:ellipsis}.sc-ion-item-divider-md-h{--background:var(--ion-background-color,#fff);--color:var(--ion-color-step-400,#999);--padding-start:16px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));font-size:14px}.item-divider-inner.sc-ion-item-divider-md{padding-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-divider-inner.sc-ion-item-divider-md{padding-right:unset;-webkit-padding-end:0;padding-inline-end:0}}.sc-ion-item-divider-md-s > [slot=start]{margin-right:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > [slot=start]{margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}.sc-ion-item-divider-md-s > [slot=end]{margin-left:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > [slot=end]{margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}.sc-ion-item-divider-md-s > ion-label{margin-left:0;margin-right:0;margin-top:13px;margin-bottom:10px}.sc-ion-item-divider-md-s > ion-icon{color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}.sc-ion-item-divider-md-h.ion-color .sc-ion-item-divider-md-s > ion-icon{color:var(--ion-color-contrast)}.sc-ion-item-divider-md-s > ion-icon[slot]{margin-top:12px;margin-bottom:12px}.sc-ion-item-divider-md-s > ion-icon[slot=start]{margin-right:32px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}.sc-ion-item-divider-md-s > ion-icon[slot=end]{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.sc-ion-item-divider-md-s > ion-note{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}.sc-ion-item-divider-md-s > ion-note[slot]{padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}.sc-ion-item-divider-md-s > ion-note[slot=start]{padding-right:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-note[slot=start]{padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}.sc-ion-item-divider-md-s > ion-note[slot=end]{padding-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-note[slot=end]{padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}.sc-ion-item-divider-md-s > ion-avatar{width:40px;height:40px}.sc-ion-item-divider-md-s > ion-thumbnail{width:56px;height:56px}.sc-ion-item-divider-md-s > ion-avatar, .sc-ion-item-divider-md-s > ion-thumbnail{margin-top:8px;margin-bottom:8px}.sc-ion-item-divider-md-s > ion-avatar[slot=start], .sc-ion-item-divider-md-s > ion-thumbnail[slot=start]{margin-right:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-avatar[slot=start], .sc-ion-item-divider-md-s > ion-thumbnail[slot=start]{margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}.sc-ion-item-divider-md-s > ion-avatar[slot=end], .sc-ion-item-divider-md-s > ion-thumbnail[slot=end]{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-divider-md-s > ion-avatar[slot=end], .sc-ion-item-divider-md-s > ion-thumbnail[slot=end]{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.sc-ion-item-divider-md-s > h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.sc-ion-item-divider-md-s > h2{font-size:16px}.sc-ion-item-divider-md-s > h2, .sc-ion-item-divider-md-s > h3, h4.sc-ion-item-divider-md, h5.sc-ion-item-divider-md, h6.sc-ion-item-divider-md{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-weight:400}.sc-ion-item-divider-md-s > h3, h4.sc-ion-item-divider-md, h5.sc-ion-item-divider-md, h6.sc-ion-item-divider-md, .sc-ion-item-divider-md-s > p{font-size:14px;line-height:normal}.sc-ion-item-divider-md-s > p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;color:var(--ion-color-step-600,#666);text-overflow:inherit;overflow:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),ItemGroup=function(){function e(){}return e.prototype.hostData=function(){var e;return{role:"group",class:(e={},e[""+this.mode]=!0,e["item-group-"+this.mode]=!0,e.item=!0,e)}},Object.defineProperty(e,"is",{get:function(){return"ion-item-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item-group{display:block}.item-group-md ion-item-sliding:last-child ion-item,.item-group-md ion-item:last-child{--border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),Label=function(){function e(){this.noAnimate=!1}return e.prototype.componentWillLoad=function(){this.noAnimate="floating"===this.position,this.emitStyle()},e.prototype.componentDidLoad=function(){var e=this;this.noAnimate&&setTimeout(function(){e.noAnimate=!1},1e3)},e.prototype.positionChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e,t=this.position;this.ionStyle.emit(((e={label:!0})["label-"+t]=void 0!==t,e))},e.prototype.hostData=function(){var e,t=this.position;return{class:Object.assign({},createColorClasses(this.color),(e={},e[""+this.mode]=!0,e["label-"+t]=void 0!==t,e["label-no-animate"]=this.noAnimate,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".item.sc-ion-label-md-h, .item   .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h, .item-textarea   .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,50%,0) scale(.75);transform:translate3d(0,50%,0) scale(.75)}[dir=rtl].label-stacked.sc-ion-label-md-h{-webkit-transform-origin:right top;transform-origin:right top}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,96%,0);transform:translate3d(0,96%,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1)}[dir=rtl].label-floating.sc-ion-label-md-h{-webkit-transform-origin:right top;transform-origin:right top}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.item-select.label-floating.sc-ion-label-md-h, .item-select   .label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,130%,0);transform:translate3d(0,130%,0)}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,50%,0) scale(.75);transform:translate3d(0,50%,0) scale(.75)}.sc-ion-label-md-s  h1 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-color-step-600,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),List=function(){function e(){this.inset=!1}return e.prototype.closeSlidingItems=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){return(e=this.el.querySelector("ion-item-sliding"))&&e.closeOpened?[2,e.closeOpened()]:[2,!1]})})},e.prototype.hostData=function(){var e;return{class:(e={},e[""+this.mode]=!0,e["list-"+this.mode]=!0,e["list-inset"]=this.inset,e["list-lines-"+this.lines]=void 0!==this.lines,e["list-"+this.mode+"-lines-"+this.lines]=void 0!==this.lines,e)}},Object.defineProperty(e,"is",{get:function(){return"ion-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-md>.input:last-child:after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child:after{right:0}.list-md.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-md.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md-lines-full .item,.list-md .item-lines-full{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md-lines-inset .item,.list-md .item-lines-inset{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-none{--border-width:0;--inner-border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),ListHeader=function(){function e(){}return e.prototype.hostData=function(){var e;return{class:Object.assign({},createColorClasses(this.color),(e={},e[""+this.mode]=!0,e))}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-list-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-list-header-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}.ion-color.sc-ion-list-header-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-list-header-md-h{--background:transparent;--color:var(--ion-text-color,#000);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-list-header-md-h{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),Note=function(){function e(){}return e.prototype.hostData=function(){var e;return{class:Object.assign({},createColorClasses(this.color),(e={},e[""+this.mode]=!0,e))}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-note-md-h{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-note-md-h{color:var(--ion-color-base)}.sc-ion-note-md-h{--color:var(--ion-color-step-600,#666);font-size:14px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),SkeletonText=function(){function e(){this.animated=!1}return e.prototype.calculateWidth=function(){if(void 0!==this.width)return{style:{width:this.width}}},e.prototype.render=function(){return h("span",null," ")},e.prototype.hostData=function(){var e,t=this.animated&&this.config.getBoolean("animated",!0),n=hostContext("ion-avatar",this.el)||hostContext("ion-thumbnail",this.el);return Object.assign({class:(e={},e[""+this.mode]=!0,e["skeleton-text-animated"]=t,e["in-media"]=n,e)},this.calculateWidth())},Object.defineProperty(e,"is",{get:function(){return"ion-skeleton-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},config:{context:"config"},el:{elementRef:!0},width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-skeleton-text-h{--background:rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),0.065);border-radius:var(--border-radius,inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}span.sc-ion-skeleton-text{display:inline-block}.in-media.sc-ion-skeleton-text-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}.skeleton-text-animated.sc-ion-skeleton-text-h{position:relative;background:-webkit-gradient(linear,left top,right top,color-stop(8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)),color-stop(18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135)),color-stop(33%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)));background:linear-gradient(90deg,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135) 18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 33%);background-size:800px 104px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}\@-webkit-keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}\@keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"},enumerable:!0,configurable:!0}),e}();export{Item as IonItem,ItemDivider as IonItemDivider,ItemGroup as IonItemGroup,Label as IonLabel,List as IonList,ListHeader as IonListHeader,Note as IonNote,SkeletonText as IonSkeletonText};