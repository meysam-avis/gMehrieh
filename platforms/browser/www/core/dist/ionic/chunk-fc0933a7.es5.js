Ionic.loadBundle("chunk-fc0933a7.js",["exports"],function(n){window;var t=function(n){return r(n)},r=function(n){n.Ionic=n.Ionic||{};var t=n.Ionic.platforms;return null==t&&(t=n.Ionic.platforms=i(n)).forEach(function(t){return n.document.documentElement.classList.add("plt-"+t)}),t},i=function(n){return Object.keys(l).filter(function(t){return l[t](n)})},e=function(n){return f(n,/iPad/i)},o=function(n){return f(n,/android|sink/i)},a=function(n){return s(n,"(any-pointer:coarse)")},u=function(n){return c(n)||d(n)},c=function(n){return!!(n.cordova||n.phonegap||n.PhoneGap)},d=function(n){var t=n.Capacitor;return!(!t||!t.isNative)},f=function(n,t){return!(!n.navigator||!n.navigator.userAgent)&&t.test(n.navigator.userAgent)},s=function(n,t){return!!n.matchMedia&&n.matchMedia(t).matches},l={ipad:e,iphone:function(n){return f(n,/iPhone/i)},ios:function(n){return f(n,/iPad|iPhone|iPod/i)},android:o,phablet:function(n){var t=n.innerWidth,r=n.innerHeight,i=Math.min(t,r),e=Math.max(t,r);return i>390&&i<520&&e>620&&e<800},tablet:function(n){var t=n.innerWidth,r=n.innerHeight,i=Math.min(t,r),a=Math.max(t,r);return e(n)||function(n){return o(n)&&!f(n,/mobile/i)}(n)||i>460&&i<820&&a>780&&a<1400},cordova:c,capacitor:d,electron:function(n){return f(n,/electron/)},pwa:function(n){return!!n.matchMedia&&(n.matchMedia("(display-mode: standalone)").matches||n.navigator.standalone)},mobile:a,mobileweb:function(n){return a(n)&&!u(n)},desktop:function(n){return!a(n)},hybrid:u};n.isPlatform=function(n,r){return t(n).includes(r)},n.getPlatforms=t,n.setupPlatforms=r,n.testUserAgent=f,n.PLATFORMS_MAP=l});