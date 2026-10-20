
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/abutik/assets/js/plugins/gsap.js?175438928272213";s:6:"source";s:49:"/local/templates/abutik/assets/js/plugins/gsap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * GSAP 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in zt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),At.forEach(wb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if((M<a||a<0)&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.5",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/local/templates/abutik/assets/js/plugins/imask.js?1754389282124056";s:6:"source";s:50:"/local/templates/abutik/assets/js/plugins/imask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) { 'use strict';

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /** Checks if value is object */
  function isObject(obj) {
    var _obj$constructor;
    return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
  }
  function pick(obj, keys) {
    if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
    return Object.entries(obj).reduce((acc, _ref) => {
      let [k, v] = _ref;
      if (keys(v, k)) acc[k] = v;
      return acc;
    }, {});
  }

  /** Direction */
  const DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };

  /** Direction */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }

  /** Escapes regular expression control chars */
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  }

  // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(b, a) {
    if (a === b) return true;
    const arrA = Array.isArray(a),
      arrB = Array.isArray(b);
    let i;
    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
      return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      const regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      const keys = Object.keys(a);
      // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }
    return false;
  }

  /** Selection range */

  /** Provides details of changing input */
  class ActionDetails {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */

    constructor(opts) {
      Object.assign(this, opts);

      // double check if left part was changed (autofilling, other non-standard input triggers)
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
      if (this.insertedCount) {
        // double check right part
        while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
          if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
        }
      }
    }

    /** Start changing position */
    get startChangePos() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }

    /** Inserted symbols count */
    get insertedCount() {
      return this.cursorPos - this.startChangePos;
    }

    /** Inserted symbols */
    get inserted() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }

    /** Removed symbols count */
    get removedCount() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos ||
      // for Delete
      this.oldValue.length - this.value.length, 0);
    }

    /** Removed symbols */
    get removed() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }

    /** Unchanged head symbols */
    get head() {
      return this.value.substring(0, this.startChangePos);
    }

    /** Unchanged tail symbols */
    get tail() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }

    /** Remove direction */
    get removeDirection() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

      // align right if delete at right
      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
      // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }

  /** Applies mask on element */
  function IMask(el, opts) {
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
  }

  // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
  // export function maskedClass(mask: string): typeof MaskedPattern;
  // export function maskedClass(mask: DateConstructor): typeof MaskedDate;
  // export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
  // export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
  // export function maskedClass(mask: MaskedDate): typeof MaskedDate;
  // export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
  // export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
  // export function maskedClass(mask: MaskedRange): typeof MaskedRange;
  // export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
  // export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
  // export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
  // export function maskedClass(mask: Masked): typeof Masked;
  // export function maskedClass(mask: typeof Masked): typeof Masked;
  // export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
  // export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
  // export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
  // export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
  // export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
  // export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
  // export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
  // export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
  // export function maskedClass(mask: RegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;

  /** Get Masked class by mask type */
  function maskedClass(mask) /* TODO */{
    if (mask == null) throw new Error('mask property should be defined');
    if (mask instanceof RegExp) return IMask.MaskedRegExp;
    if (isString(mask)) return IMask.MaskedPattern;
    if (mask === Date) return IMask.MaskedDate;
    if (mask === Number) return IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
    if (IMask.Masked && mask instanceof IMask.Masked) return mask.constructor;
    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    return IMask.Masked;
  }
  function normalizeOpts(opts) {
    if (!opts) throw new Error('Options in not defined');
    if (IMask.Masked) {
      if (opts.prototype instanceof IMask.Masked) return {
        mask: opts
      };

      /*
        handle cases like:
        1) opts = Masked
        2) opts = { mask: Masked, ...instanceOpts }
      */
      const {
        mask = undefined,
        ...instanceOpts
      } = opts instanceof IMask.Masked ? {
        mask: opts
      } : isObject(opts) && opts.mask instanceof IMask.Masked ? opts : {};
      if (mask) {
        const _mask = mask.mask;
        return {
          ...pick(mask, (_, k) => !k.startsWith('_')),
          mask: mask.constructor,
          _mask,
          ...instanceOpts
        };
      }
    }
    if (!isObject(opts)) return {
      mask: opts
    };
    return {
      ...opts
    };
  }

  // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

  // From masked
  // export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
  // // From masked class
  // export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
  // // From mask opts
  // export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

  /** Creates new {@link Masked} depending on mask type */
  function createMask(opts) {
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    const nOpts = normalizeOpts(opts);
    const MaskedClass = maskedClass(nOpts.mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
    if (nOpts.mask === MaskedClass) delete nOpts.mask;
    if (nOpts._mask) {
      nOpts.mask = nOpts._mask;
      delete nOpts._mask;
    }
    return new MaskedClass(nOpts);
  }
  IMask.createMask = createMask;

  /**  Generic element API to use with mask */
  class MaskElement {
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get selectionStart() {
      let start;
      try {
        start = this._unsafeSelectionStart;
      } catch {}
      return start != null ? start : this.value.length;
    }

    /** Safely returns selection end */
    get selectionEnd() {
      let end;
      try {
        end = this._unsafeSelectionEnd;
      } catch {}
      return end != null ? end : this.value.length;
    }

    /** Safely sets element selection */
    select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
      try {
        this._unsafeSelect(start, end);
      } catch {}
    }

    /** */
    get isActive() {
      return false;
    }
    /** */

    /** */

    /** */
  }
  IMask.MaskElement = MaskElement;

  const KEY_Z = 90;
  const KEY_Y = 89;

  /** Bridge between HTMLElement and {@link Masked} */
  class HTMLMaskElement extends MaskElement {
    /** HTMLElement to use mask on */

    constructor(input) {
      super();
      this.input = input;
      this._onKeydown = this._onKeydown.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onBeforeinput = this._onBeforeinput.bind(this);
      this._onCompositionEnd = this._onCompositionEnd.bind(this);
    }
    get rootElement() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
    }

    /** Is element in focus */
    get isActive() {
      return this.input === this.rootElement.activeElement;
    }

    /** Binds HTMLElement events to mask internal events */
    bindEvents(handlers) {
      this.input.addEventListener('keydown', this._onKeydown);
      this.input.addEventListener('input', this._onInput);
      this.input.addEventListener('beforeinput', this._onBeforeinput);
      this.input.addEventListener('compositionend', this._onCompositionEnd);
      this.input.addEventListener('drop', handlers.drop);
      this.input.addEventListener('click', handlers.click);
      this.input.addEventListener('focus', handlers.focus);
      this.input.addEventListener('blur', handlers.commit);
      this._handlers = handlers;
    }
    _onKeydown(e) {
      if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
        e.preventDefault();
        return this._handlers.redo(e);
      }
      if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        return this._handlers.undo(e);
      }
      if (!e.isComposing) this._handlers.selectionChange(e);
    }
    _onBeforeinput(e) {
      if (e.inputType === 'historyUndo' && this._handlers.undo) {
        e.preventDefault();
        return this._handlers.undo(e);
      }
      if (e.inputType === 'historyRedo' && this._handlers.redo) {
        e.preventDefault();
        return this._handlers.redo(e);
      }
    }
    _onCompositionEnd(e) {
      this._handlers.input(e);
    }
    _onInput(e) {
      if (!e.isComposing) this._handlers.input(e);
    }

    /** Unbinds HTMLElement events to mask internal events */
    unbindEvents() {
      this.input.removeEventListener('keydown', this._onKeydown);
      this.input.removeEventListener('input', this._onInput);
      this.input.removeEventListener('beforeinput', this._onBeforeinput);
      this.input.removeEventListener('compositionend', this._onCompositionEnd);
      this.input.removeEventListener('drop', this._handlers.drop);
      this.input.removeEventListener('click', this._handlers.click);
      this.input.removeEventListener('focus', this._handlers.focus);
      this.input.removeEventListener('blur', this._handlers.commit);
      this._handlers = {};
    }
  }
  IMask.HTMLMaskElement = HTMLMaskElement;

  /** Bridge between InputElement and {@link Masked} */
  class HTMLInputMaskElement extends HTMLMaskElement {
    /** InputElement to use mask on */

    constructor(input) {
      super(input);
      this.input = input;
    }

    /** Returns InputElement selection start */
    get _unsafeSelectionStart() {
      return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
    }

    /** Returns InputElement selection end */
    get _unsafeSelectionEnd() {
      return this.input.selectionEnd;
    }

    /** Sets InputElement selection */
    _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    get value() {
      return this.input.value;
    }
    set value(value) {
      this.input.value = value;
    }
  }
  IMask.HTMLMaskElement = HTMLMaskElement;

  class HTMLContenteditableMaskElement extends HTMLMaskElement {
    /** Returns HTMLElement selection start */
    get _unsafeSelectionStart() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /** Returns HTMLElement selection end */
    get _unsafeSelectionEnd() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /** Sets HTMLElement selection */
    _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      const range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    /** HTMLElement value */
    get value() {
      return this.input.textContent || '';
    }
    set value(value) {
      this.input.textContent = value;
    }
  }
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

  class InputHistory {
    constructor() {
      this.states = [];
      this.currentIndex = 0;
    }
    get currentState() {
      return this.states[this.currentIndex];
    }
    get isEmpty() {
      return this.states.length === 0;
    }
    push(state) {
      // if current index points before the last element then remove the future
      if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
      this.states.push(state);
      if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
      this.currentIndex = this.states.length - 1;
    }
    go(steps) {
      this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
      return this.currentState;
    }
    undo() {
      return this.go(-1);
    }
    redo() {
      return this.go(+1);
    }
    clear() {
      this.states.length = 0;
      this.currentIndex = 0;
    }
  }
  InputHistory.MAX_LENGTH = 100;

  /** Listens to element events and controls changes between element and {@link Masked} */
  class InputMask {
    /**
      View element
    */

    /** Internal {@link Masked} model */

    constructor(el, opts) {
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLInputMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._rawInputValue = '';
      this.history = new InputHistory();
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this._onUndo = this._onUndo.bind(this);
      this._onRedo = this._onRedo.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents();

      // refresh
      this._onChange();
    }
    maskEquals(mask) {
      var _this$masked;
      return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
    }

    /** Masked */
    get mask() {
      return this.masked.mask;
    }
    set mask(mask) {
      if (this.maskEquals(mask)) return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        // TODO "any" no idea
        this.masked.updateOptions({
          mask
        });
        return;
      }
      const masked = mask instanceof IMask.Masked ? mask : createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }

    /** Raw value */
    get value() {
      return this._value;
    }
    set value(str) {
      if (this.value === str) return;
      this.masked.value = str;
      this.updateControl('auto');
    }

    /** Unmasked value */
    get unmaskedValue() {
      return this._unmaskedValue;
    }
    set unmaskedValue(str) {
      if (this.unmaskedValue === str) return;
      this.masked.unmaskedValue = str;
      this.updateControl('auto');
    }

    /** Raw input value */
    get rawInputValue() {
      return this._rawInputValue;
    }
    set rawInputValue(str) {
      if (this.rawInputValue === str) return;
      this.masked.rawInputValue = str;
      this.updateControl();
      this.alignCursor();
    }

    /** Typed unmasked value */
    get typedValue() {
      return this.masked.typedValue;
    }
    set typedValue(val) {
      if (this.masked.typedValueEquals(val)) return;
      this.masked.typedValue = val;
      this.updateControl('auto');
    }

    /** Display value */
    get displayValue() {
      return this.masked.displayValue;
    }

    /** Starts listening to element events */
    _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange,
        undo: this._onUndo,
        redo: this._onRedo
      });
    }

    /** Stops listening to element events */
    _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }

    /** Fires custom event */
    _fireEvent(ev, e) {
      const listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(l => l(e));
    }

    /** Current selection start */
    get selectionStart() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }

    /** Current cursor position */
    get cursorPos() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);
      this._saveSelection();
    }

    /** Stores current selection */
    _saveSelection( /* ev */
    ) {
      if (this.displayValue !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }

    /** Syncronizes model value from view */
    updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
      this._unmaskedValue = this.masked.unmaskedValue;
      this._rawInputValue = this.masked.rawInputValue;
    }

    /** Syncronizes view from model value, fires change events */
    updateControl(cursorPos) {
      const newUnmaskedValue = this.masked.unmaskedValue;
      const newValue = this.masked.value;
      const newRawInputValue = this.masked.rawInputValue;
      const newDisplayValue = this.displayValue;
      const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      this._rawInputValue = newRawInputValue;
      if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
      if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
      if (isChanged) this._fireChangeEvents();
      if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
        unmaskedValue: newUnmaskedValue,
        selection: {
          start: this.selectionStart,
          end: this.cursorPos
        }
      });
    }

    /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
    updateOptions(opts) {
      const {
        mask,
        ...restOpts
      } = opts; // TODO types, yes, mask is optional

      const updateMask = !this.maskEquals(mask);
      const updateOpts = this.masked.optionsIsChanged(restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts); // TODO

      if (updateMask || updateOpts) this.updateControl();
    }

    /** Updates cursor */
    updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos;

      // also queue change cursor for mobile browsers
      this._delayUpdateCursor(cursorPos);
    }

    /** Delays cursor update to support mobile browsers */
    _delayUpdateCursor(cursorPos) {
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(() => {
        if (!this.el) return; // if was destroyed
        this.cursorPos = this._changingCursorPos;
        this._abortUpdateCursor();
      }, 10);
    }

    /** Fires custom events */
    _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);
      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }

    /** Aborts delayed cursor update */
    _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }

    /** Aligns cursor to nearest available position */
    alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }

    /** Aligns cursor only if selection is empty */
    alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
      this.alignCursor();
    }

    /** Adds listener on custom event */
    on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }

    /** Removes custom event listener */
    off(ev, handler) {
      if (!this._listeners[ev]) return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      const hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }

    /** Handles view input event */
    _onInput(e) {
      this._inputEvent = e;
      this._abortUpdateCursor();
      const details = new ActionDetails({
        // new state
        value: this.el.value,
        cursorPos: this.cursorPos,
        // old state
        oldValue: this.displayValue,
        oldSelection: this._selection
      });
      const oldRawValue = this.masked.rawInputValue;
      const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
        input: true,
        raw: true
      }).offset;

      // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
      const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl(cursorPos);
      delete this._inputEvent;
    }

    /** Handles view change event and commits model value */
    _onChange() {
      if (this.displayValue !== this.el.value) this.updateValue();
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }

    /** Handles view drop event, prevents by default */
    _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    /** Restore last selection on focus */
    _onFocus(ev) {
      this.alignCursorFriendly();
    }

    /** Restore last selection on focus */
    _onClick(ev) {
      this.alignCursorFriendly();
    }
    _onUndo() {
      this._applyHistoryState(this.history.undo());
    }
    _onRedo() {
      this._applyHistoryState(this.history.redo());
    }
    _applyHistoryState(state) {
      if (!state) return;
      this._historyChanging = true;
      this.unmaskedValue = state.unmaskedValue;
      this.el.select(state.selection.start, state.selection.end);
      this._saveSelection();
      this._historyChanging = false;
    }

    /** Unbind view events and removes element reference */
    destroy() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }
  IMask.InputMask = InputMask;

  /** Provides details of changing model value */
  class ChangeDetails {
    /** Inserted symbols */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */

    /** Can skip chars */

    static normalize(prep) {
      return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
    }
    constructor(details) {
      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        tailShift: 0,
        skip: false
      }, details);
    }

    /** Aggregate changes */
    aggregate(details) {
      this.inserted += details.inserted;
      this.rawInserted += details.rawInserted;
      this.tailShift += details.tailShift;
      this.skip = this.skip || details.skip;
      return this;
    }

    /** Total offset considering all changes */
    get offset() {
      return this.tailShift + this.inserted.length;
    }
    get consumed() {
      return Boolean(this.rawInserted) || this.skip;
    }
    equals(details) {
      return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
    }
  }
  IMask.ChangeDetails = ChangeDetails;

  /** Provides details of continuous extracted tail */
  class ContinuousTailDetails {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */

    constructor(value, from, stop) {
      if (value === void 0) {
        value = '';
      }
      if (from === void 0) {
        from = 0;
      }
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    toString() {
      return this.value;
    }
    extend(tail) {
      this.value += String(tail);
    }
    appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
    get state() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    }
    set state(state) {
      Object.assign(this, state);
    }
    unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      const shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
    shift() {
      if (!this.value.length) return '';
      const shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }

  /** Append flags */

  /** Extract flags */

  // see https://github.com/microsoft/TypeScript/issues/6223

  /** Provides common masking stuff */
  class Masked {
    /** */

    /** */

    /** Transforms value before mask processing */

    /** Transforms each char before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing at the end of editing */

    /** Format typed value to string */

    /** Parse string to get typed value */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      this._value = '';
      this._update({
        ...Masked.DEFAULTS,
        ...opts
      });
      this._initialized = true;
    }

    /** Sets and applies new options */
    updateOptions(opts) {
      if (!this.optionsIsChanged(opts)) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }

    /** Sets new options */
    _update(opts) {
      Object.assign(this, opts);
    }

    /** Mask state */
    get state() {
      return {
        _value: this.value,
        _rawInputValue: this.rawInputValue
      };
    }
    set state(state) {
      this._value = state._value;
    }

    /** Resets value */
    reset() {
      this._value = '';
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this.resolve(value, {
        input: true
      });
    }

    /** Resolve new value */
    resolve(value, flags) {
      if (flags === void 0) {
        flags = {
          input: true
        };
      }
      this.reset();
      this.append(value, flags, '');
      this.doCommit();
    }
    get unmaskedValue() {
      return this.value;
    }
    set unmaskedValue(value) {
      this.resolve(value, {});
    }
    get typedValue() {
      return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(value) {
      if (this.format) {
        this.value = this.format(value, this);
      } else {
        this.unmaskedValue = String(value);
      }
    }

    /** Value that includes raw user input */
    get rawInputValue() {
      return this.extractInput(0, this.displayValue.length, {
        raw: true
      });
    }
    set rawInputValue(value) {
      this.resolve(value, {
        raw: true
      });
    }
    get displayValue() {
      return this.value;
    }
    get isComplete() {
      return true;
    }
    get isFilled() {
      return this.isComplete;
    }

    /** Finds nearest input position in direction */
    nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return Math.min(this.displayValue.length, toPos - fromPos);
    }

    /** Extracts value in range considering flags */
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return this.displayValue.slice(fromPos, toPos);
    }

    /** Extracts tail in range */
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }

    /** Appends tail */
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }

    /** Appends char */
    _appendCharRaw(ch, flags) {
      if (!ch) return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }

    /** Appends char */
    _appendChar(ch, flags, checkTail) {
      if (flags === void 0) {
        flags = {};
      }
      const consistentState = this.state;
      let details;
      [ch, details] = this.doPrepareChar(ch, flags);
      if (ch) {
        details = details.aggregate(this._appendCharRaw(ch, flags));

        // TODO handle `skip`?

        // try `autofix` lookahead
        if (!details.rawInserted && this.autofix === 'pad') {
          const noFixState = this.state;
          this.state = consistentState;
          let fixDetails = this.pad(flags);
          const chDetails = this._appendCharRaw(ch, flags);
          fixDetails = fixDetails.aggregate(chDetails);

          // if fix was applied or
          // if details are equal use skip restoring state optimization
          if (chDetails.rawInserted || fixDetails.equals(details)) {
            details = fixDetails;
          } else {
            this.state = noFixState;
          }
        }
      }
      if (details.inserted) {
        let consistentTail;
        let appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          // validation ok, check tail
          const beforeTailState = this.state;
          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            for (let i = 0; i < details.rawInserted.length; ++i) {
              checkTail.unshift(this.displayValue.length - details.tailShift);
            }
          }
          let tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted.length === checkTail.toString().length;

          // not ok, try shift
          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            for (let i = 0; i < details.rawInserted.length; ++i) {
              checkTail.shift();
            }
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted.length === checkTail.toString().length;
          }

          // if ok, rollback state after tail
          if (appended && tailDetails.inserted) this.state = beforeTailState;
        }

        // revert all if something went wrong
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }
      return details;
    }

    /** Appends optional placeholder at the end */
    _appendPlaceholder() {
      return new ChangeDetails();
    }

    /** Appends optional eager placeholder at the end */
    _appendEager() {
      return new ChangeDetails();
    }

    /** Appends symbols considering flags */
    append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags != null && flags.tail) flags._beforeTailState = this.state;
      let details;
      [str, details] = this.doPrepare(str, flags);
      for (let ci = 0; ci < str.length; ++ci) {
        const d = this._appendChar(str[ci], flags, checkTail);
        if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
        details.aggregate(d);
      }
      if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      // append tail but aggregate only tailShift
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
        // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }
      return details;
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
      return new ChangeDetails();
    }

    /** Calls function and reapplies current value */
    withValueRefresh(fn) {
      if (this._refreshing || !this._initialized) return fn();
      this._refreshing = true;
      const rawInput = this.rawInputValue;
      const value = this.value;
      const ret = fn();
      this.rawInputValue = rawInput;
      // append lost trailing chars at the end
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.displayValue.length), {}, '');
        this.doCommit();
      }
      delete this._refreshing;
      return ret;
    }
    runIsolated(fn) {
      if (this._isolated || !this._initialized) return fn(this);
      this._isolated = true;
      const state = this.state;
      const ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    doSkipInvalid(ch, flags, checkTail) {
      return Boolean(this.skipInvalid);
    }

    /** Prepares string before mask processing */
    doPrepare(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      return ChangeDetails.normalize(this.prepare ? this.prepare(str, this, flags) : str);
    }

    /** Prepares each char before mask processing */
    doPrepareChar(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      return ChangeDetails.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
    }

    /** Validates if value is acceptable */
    doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }

    /** Does additional processing at the end of editing */
    doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    splice(start, deleteCount, inserted, removeDirection, flags) {
      if (inserted === void 0) {
        inserted = '';
      }
      if (removeDirection === void 0) {
        removeDirection = DIRECTION.NONE;
      }
      if (flags === void 0) {
        flags = {
          input: true
        };
      }
      const tailPos = start + deleteCount;
      const tail = this.extractTail(tailPos);
      const eagerRemove = this.eager === true || this.eager === 'remove';
      let oldRawValue;
      if (eagerRemove) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }
      let startChangePos = start;
      const details = new ChangeDetails();

      // if it is just deletion without insertion
      if (removeDirection !== DIRECTION.NONE) {
        startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

        // adjust tailShift if start was aligned
        details.tailShift = startChangePos - start;
      }
      details.aggregate(this.remove(startChangePos));
      if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          let valLength;
          while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
            details.aggregate(new ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }
      return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
      return this.mask === mask;
    }
    optionsIsChanged(opts) {
      return !objectIncludes(this, opts);
    }
    typedValueEquals(value) {
      const tval = this.typedValue;
      return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
    }
    pad(flags) {
      return new ChangeDetails();
    }
  }
  Masked.DEFAULTS = {
    skipInvalid: true
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;

  class ChunksTailDetails {
    /** */

    constructor(chunks, from) {
      if (chunks === void 0) {
        chunks = [];
      }
      if (from === void 0) {
        from = 0;
      }
      this.chunks = chunks;
      this.from = from;
    }
    toString() {
      return this.chunks.map(String).join('');
    }
    extend(tailChunk) {
      if (!String(tailChunk)) return;
      tailChunk = isString(tailChunk) ? new ContinuousTailDetails(String(tailChunk)) : tailChunk;
      const lastChunk = this.chunks[this.chunks.length - 1];
      const extendLast = lastChunk && (
      // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
      // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          let firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }

        // if tail chunk still has value
        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
    appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        const tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      const details = new ChangeDetails();
      for (let ci = 0; ci < this.chunks.length; ++ci) {
        const chunk = this.chunks[ci];
        const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
        const stop = chunk.stop;
        let chunkBlock;
        if (stop != null && (
        // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails ||
          // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }
        if (chunkBlock) {
          const tailDetails = chunkBlock.appendTail(chunk);
          details.aggregate(tailDetails);

          // get not inserted chars
          const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
    get state() {
      return {
        chunks: this.chunks.map(c => c.state),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    }
    set state(state) {
      const {
        chunks,
        ...props
      } = state;
      Object.assign(this, props);
      this.chunks = chunks.map(cstate => {
        const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
    unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      let ci = 0;
      while (ci < this.chunks.length) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.unshift(chunkShiftPos);
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
    shift() {
      if (!this.chunks.length) return '';
      let ci = this.chunks.length - 1;
      while (0 <= ci) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.shift();
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
  }

  class PatternCursor {
    constructor(masked, pos) {
      this.masked = masked;
      this._log = [];
      const {
        offset,
        index
      } = masked._mapPosToBlock(pos) || (pos < 0 ?
      // first
      {
        index: 0,
        offset: 0
      } :
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      });
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    get block() {
      return this.masked._blocks[this.index];
    }
    get pos() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    }
    set state(s) {
      Object.assign(this, s);
    }
    pushState() {
      this._log.push(this.state);
    }
    popState() {
      const s = this._log.pop();
      if (s) this.state = s;
      return s;
    }
    bindBlock() {
      if (this.block) return;
      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }
      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
      }
    }
    _pushLeft(fn) {
      this.pushState();
      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
        var _this$block;
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    _pushRight(fn) {
      this.pushState();
      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    pushLeftBeforeFilled() {
      return this._pushLeft(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
        if (this.offset !== 0) return true;
      });
    }
    pushLeftBeforeInput() {
      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(() => {
        if (this.block.isFixed) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushLeftBeforeRequired() {
      return this._pushLeft(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushRightBeforeFilled() {
      return this._pushRight(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
        if (this.offset !== this.block.value.length) return true;
      });
    }
    pushRightBeforeInput() {
      return this._pushRight(() => {
        if (this.block.isFixed) return;

        // const o = this.offset;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
        return true;
      });
    }
    pushRightBeforeRequired() {
      return this._pushRight(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

        // TODO check |[*]XX_
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        return true;
      });
    }
  }

  class PatternFixedDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }
    get value() {
      return this._value;
    }
    get unmaskedValue() {
      return this.isUnmasking ? this.value : '';
    }
    get rawInputValue() {
      return this._isRawInput ? this.value : '';
    }
    get displayValue() {
      return this.value;
    }
    reset() {
      this._isRawInput = false;
      this._value = '';
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new ChangeDetails();
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      const minPos = 0;
      const maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      if (flags === void 0) {
        flags = {};
      }
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
    get isComplete() {
      return true;
    }
    get isFilled() {
      return Boolean(this._value);
    }
    _appendChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (this.isFilled) return new ChangeDetails();
      const appendEager = this.eager === true || this.eager === 'append';
      const appended = this.char === ch;
      const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
      const details = new ChangeDetails({
        inserted: this.char,
        rawInserted: isResolved ? this.char : ''
      });
      this._value = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
    _appendEager() {
      return this._appendChar(this.char, {
        tail: true
      });
    }
    _appendPlaceholder() {
      const details = new ChangeDetails();
      if (this.isFilled) return details;
      this._value = details.inserted = this.char;
      return details;
    }
    extractTail() {
      return new ContinuousTailDetails('');
    }
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    append(str, flags, tail) {
      const details = this._appendChar(str[0], flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
    doCommit() {}
    get state() {
      return {
        _value: this._value,
        _rawInputValue: this.rawInputValue
      };
    }
    set state(state) {
      this._value = state._value;
      this._isRawInput = Boolean(state._rawInputValue);
    }
    pad(flags) {
      return this._appendPlaceholder();
    }
  }

  class PatternInputDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      const {
        parent,
        isOptional,
        placeholderChar,
        displayChar,
        lazy,
        eager,
        ...maskOpts
      } = opts;
      this.masked = createMask(maskOpts);
      Object.assign(this, {
        parent,
        isOptional,
        placeholderChar,
        displayChar,
        lazy,
        eager
      });
    }
    reset() {
      this.isFilled = false;
      this.masked.reset();
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
    get value() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
    get unmaskedValue() {
      return this.masked.unmaskedValue;
    }
    get rawInputValue() {
      return this.masked.rawInputValue;
    }
    get displayValue() {
      return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
      return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (this.isFilled) return new ChangeDetails();
      const state = this.masked.state;
      // simulate input
      let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
      if (details.inserted && this.doValidate(flags) === false) {
        details = new ChangeDetails();
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
    append(str, flags, tail) {
      // TODO probably should be done via _appendChar
      return this.masked.append(str, this.currentMaskFlags(flags), tail);
    }
    _appendPlaceholder() {
      if (this.isFilled || this.isOptional) return new ChangeDetails();
      this.isFilled = true;
      return new ChangeDetails({
        inserted: this.placeholderChar
      });
    }
    _appendEager() {
      return new ChangeDetails();
    }
    extractTail(fromPos, toPos) {
      return this.masked.extractTail(fromPos, toPos);
    }
    appendTail(tail) {
      return this.masked.appendTail(tail);
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      const minPos = 0;
      const maxPos = this.value.length;
      const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      return this.value.slice(fromPos, toPos).length;
    }
    doValidate(flags) {
      return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
    }
    doCommit() {
      this.masked.doCommit();
    }
    get state() {
      return {
        _value: this.value,
        _rawInputValue: this.rawInputValue,
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    }
    set state(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
    currentMaskFlags(flags) {
      var _flags$_beforeTailSta;
      return {
        ...flags,
        _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
      };
    }
    pad(flags) {
      return new ChangeDetails();
    }
  }
  PatternInputDefinition.DEFAULT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };

  /** Masking by RegExp */
  class MaskedRegExp extends Masked {
    /** */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const mask = opts.mask;
      if (mask) opts.validate = value => value.search(mask) >= 0;
      super._update(opts);
    }
  }
  IMask.MaskedRegExp = MaskedRegExp;

  /** Pattern mask */
  class MaskedPattern extends Masked {
    /** */

    /** */

    /** Single char for empty input */

    /** Single char for filled input */

    /** Show placeholder only when needed */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    constructor(opts) {
      super({
        ...MaskedPattern.DEFAULTS,
        ...opts,
        definitions: Object.assign({}, PatternInputDefinition.DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
      });
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      super._update(opts);
      this._rebuildMask();
    }
    _rebuildMask() {
      const defs = this.definitions;
      this._blocks = [];
      this.exposeBlock = undefined;
      this._stops = [];
      this._maskedBlocks = {};
      const pattern = this.mask;
      if (!pattern || !defs) return;
      let unmaskingBlock = false;
      let optionalBlock = false;
      for (let i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          const p = pattern.slice(i);
          const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
          // order by key length
          bNames.sort((a, b) => b.length - a.length);
          // use block name with max length
          const bName = bNames[0];
          if (bName) {
            const {
              expose,
              repeat,
              ...bOpts
            } = normalizeOpts(this.blocks[bName]); // TODO type Opts<Arg & Extra>
            const blockOpts = {
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              displayChar: this.displayChar,
              overwrite: this.overwrite,
              autofix: this.autofix,
              ...bOpts,
              repeat,
              parent: this
            };
            const maskedBlock = repeat != null ? new IMask.RepeatBlock(blockOpts /* TODO */) : createMask(blockOpts);
            if (maskedBlock) {
              this._blocks.push(maskedBlock);
              if (expose) this.exposeBlock = maskedBlock;

              // store block index
              if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
              this._maskedBlocks[bName].push(this._blocks.length - 1);
            }
            i += bName.length - 1;
            continue;
          }
        }
        let char = pattern[i];
        let isInput = (char in defs);
        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }
        const def = isInput ? new PatternInputDefinition({
          isOptional: optionalBlock,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          displayChar: this.displayChar,
          ...normalizeOpts(defs[char]),
          parent: this
        }) : new PatternFixedDefinition({
          char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
    get state() {
      return {
        ...super.state,
        _blocks: this._blocks.map(b => b.state)
      };
    }
    set state(state) {
      if (!state) {
        this.reset();
        return;
      }
      const {
        _blocks,
        ...maskedState
      } = state;
      this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
      super.state = maskedState;
    }
    reset() {
      super.reset();
      this._blocks.forEach(b => b.reset());
    }
    get isComplete() {
      return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
    }
    get isFilled() {
      return this._blocks.every(b => b.isFilled);
    }
    get isFixed() {
      return this._blocks.every(b => b.isFixed);
    }
    get isOptional() {
      return this._blocks.every(b => b.isOptional);
    }
    doCommit() {
      this._blocks.forEach(b => b.doCommit());
      super.doCommit();
    }
    get unmaskedValue() {
      return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
    }
    set unmaskedValue(unmaskedValue) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.unmaskedValue = unmaskedValue;
        this.appendTail(tail);
        this.doCommit();
      } else super.unmaskedValue = unmaskedValue;
    }
    get value() {
      return this.exposeBlock ? this.exposeBlock.value :
      // TODO return _value when not in change?
      this._blocks.reduce((str, b) => str += b.value, '');
    }
    set value(value) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.value = value;
        this.appendTail(tail);
        this.doCommit();
      } else super.value = value;
    }
    get typedValue() {
      return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
    }
    set typedValue(value) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.typedValue = value;
        this.appendTail(tail);
        this.doCommit();
      } else super.typedValue = value;
    }
    get displayValue() {
      return this._blocks.reduce((str, b) => str += b.displayValue, '');
    }
    appendTail(tail) {
      return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
      var _this$_mapPosToBlock;
      const details = new ChangeDetails();
      let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details;

      // TODO test if it works for nested pattern masks
      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
      for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        const d = this._blocks[bi]._appendEager();
        if (!d.inserted) break;
        details.aggregate(d);
      }
      return details;
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const blockIter = this._mapPosToBlock(this.displayValue.length);
      const details = new ChangeDetails();
      if (!blockIter) return details;
      for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
        var _flags$_beforeTailSta;
        const blockDetails = block._appendChar(ch, {
          ...flags,
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
        });
        details.aggregate(blockDetails);
        if (blockDetails.consumed) break; // go next char
      }
      return details;
    }
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const chunkTail = new ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
        const blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = this._findStopBefore(bi);
        blockChunk.from = this._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      if (flags === void 0) {
        flags = {};
      }
      if (fromPos === toPos) return '';
      let input = '';
      this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
        input += b.extractInput(fromPos, toPos, flags);
      });
      return input;
    }
    _findStopBefore(blockIndex) {
      let stopBefore;
      for (let si = 0; si < this._stops.length; ++si) {
        const stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }
      return stopBefore;
    }

    /** Appends placeholder depending on laziness */
    _appendPlaceholder(toBlockIndex) {
      const details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;
      const startBlockIter = this._mapPosToBlock(this.displayValue.length);
      if (!startBlockIter) return details;
      const startBlockIndex = startBlockIter.index;
      const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
        if (!b.lazy || toBlockIndex != null) {
          var _blocks2;
          details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
        }
      });
      return details;
    }

    /** Finds block in pos */
    _mapPosToBlock(pos) {
      let accVal = '';
      for (let bi = 0; bi < this._blocks.length; ++bi) {
        const block = this._blocks[bi];
        const blockStartPos = accVal.length;
        accVal += block.displayValue;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
    }
    _forEachBlocksInRange(fromPos, toPos, fn) {
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        const toBlockIter = this._mapPosToBlock(toPos);
        // process first block
        const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        const fromBlockStartPos = fromBlockIter.offset;
        const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
          }

          // process last block
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const removeDetails = super.remove(fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      if (!this._blocks.length) return 0;
      const cursor = new PatternCursor(this, cursorPos);
      if (direction === DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.displayValue.length;
      }

      // FORCE is only about a|* otherwise is 0
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        }

        // forward flow
        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled();

        // backward flow
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }
        if (cursor.ok) return cursor.pos;
        if (direction === DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === DIRECTION.FORCE_RIGHT) return this.displayValue.length;

        // backward flow
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }
      return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      let total = 0;
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        total += b.totalInputPositions(bFromPos, bToPos);
      });
      return total;
    }

    /** Get block by name */
    maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }

    /** Get all blocks by name */
    maskedBlocks(name) {
      const indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(gi => this._blocks[gi]);
    }
    pad(flags) {
      const details = new ChangeDetails();
      this._forEachBlocksInRange(0, this.displayValue.length, b => details.aggregate(b.pad(flags)));
      return details;
    }
  }
  MaskedPattern.DEFAULTS = {
    ...Masked.DEFAULTS,
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  /** Pattern which accepts ranges */
  class MaskedRange extends MaskedPattern {
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    get _matchFrom() {
      return this.maxLength - String(this.from).length;
    }
    constructor(opts) {
      super(opts); // mask will be created in _update
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        to = this.to || 0,
        from = this.from || 0,
        maxLength = this.maxLength || 0,
        autofix = this.autofix,
        ...patternOpts
      } = opts;
      this.to = to;
      this.from = from;
      this.maxLength = Math.max(String(to).length, maxLength);
      this.autofix = autofix;
      const fromStr = String(this.from).padStart(this.maxLength, '0');
      const toStr = String(this.to).padStart(this.maxLength, '0');
      let sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
      patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
      super._update(patternOpts);
    }
    get isComplete() {
      return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
      let minstr = '';
      let maxstr = '';
      const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    doPrepareChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let details;
      [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
      if (!ch) details.skip = !this.isComplete;
      return [ch, details];
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
      const fromStr = String(this.from).padStart(this.maxLength, '0');
      const toStr = String(this.to).padStart(this.maxLength, '0');
      const [minstr, maxstr] = this.boundaries(this.value + ch);
      if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
      if (Number(minstr) > this.to) {
        if (!flags.tail && this.autofix === 'pad' && this.value.length + 1 < this.maxLength) {
          return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
        }
        return super._appendCharRaw(toStr[this.value.length], flags);
      }
      return super._appendCharRaw(ch, flags);
    }
    doValidate(flags) {
      const str = this.value;
      const firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
      const [minstr, maxstr] = this.boundaries(str);
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
    }
    pad(flags) {
      const details = new ChangeDetails();
      if (this.value.length === this.maxLength) return details;
      const value = this.value;
      const padLength = this.maxLength - this.value.length;
      if (padLength) {
        this.reset();
        for (let i = 0; i < padLength; ++i) {
          details.aggregate(super._appendCharRaw('0', flags));
        }

        // append tail
        value.split('').forEach(ch => this._appendCharRaw(ch));
      }
      return details;
    }
  }
  IMask.MaskedRange = MaskedRange;

  /** Date mask */
  class MaskedDate extends MaskedPattern {
    static extractPatternOptions(opts) {
      const {
        mask,
        pattern,
        ...patternOpts
      } = opts;
      return {
        ...patternOpts,
        mask: isString(mask) ? mask : pattern
      };
    }

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** Format typed value to string */

    /** Parse string to get typed value */

    constructor(opts) {
      super(MaskedDate.extractPatternOptions({
        ...MaskedDate.DEFAULTS,
        ...opts
      }));
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        mask,
        pattern,
        blocks,
        ...patternOpts
      } = {
        ...MaskedDate.DEFAULTS,
        ...opts
      };
      const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
      // adjust year block
      if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
      if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
        patternBlocks.m.from = opts.min.getMonth() + 1;
        patternBlocks.m.to = opts.max.getMonth() + 1;
        if (patternBlocks.m.from === patternBlocks.m.to) {
          patternBlocks.d.from = opts.min.getDate();
          patternBlocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(patternBlocks, this.blocks, blocks);
      super._update({
        ...patternOpts,
        mask: isString(mask) ? mask : pattern,
        blocks: patternBlocks
      });
    }
    doValidate(flags) {
      const date = this.date;
      return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }

    /** Checks if date is exists */
    isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }

    /** Parsed Date */
    get date() {
      return this.typedValue;
    }
    set date(date) {
      this.typedValue = date;
    }
    get typedValue() {
      return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
      super.typedValue = value;
    }
    maskEquals(mask) {
      return mask === Date || super.maskEquals(mask);
    }
    optionsIsChanged(opts) {
      return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
    }
  }
  MaskedDate.GET_DEFAULT_BLOCKS = () => ({
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  });
  MaskedDate.DEFAULTS = {
    ...MaskedPattern.DEFAULTS,
    mask: Date,
    pattern: 'd{.}`m{.}`Y',
    format: (date, masked) => {
      if (!date) return '';
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: (str, masked) => {
      const [day, month, year] = str.split('.').map(Number);
      return new Date(year, month - 1, day);
    }
  };
  IMask.MaskedDate = MaskedDate;

  /** Dynamic mask for choosing appropriate mask in run-time */
  class MaskedDynamic extends Masked {
    constructor(opts) {
      super({
        ...MaskedDynamic.DEFAULTS,
        ...opts
      });
      this.currentMask = undefined;
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update(opts);
      if ('mask' in opts) {
        this.exposeMask = undefined;
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
          const {
            expose,
            ...maskOpts
          } = normalizeOpts(m);
          const masked = createMask({
            overwrite: this._overwrite,
            eager: this._eager,
            skipInvalid: this._skipInvalid,
            ...maskOpts
          });
          if (expose) this.exposeMask = masked;
          return masked;
        }) : [];

        // this.currentMask = this.doDispatch(''); // probably not needed but lets see
      }
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
      }
      return details;
    }
    _applyDispatch(appended, flags, tail) {
      if (appended === void 0) {
        appended = '';
      }
      if (flags === void 0) {
        flags = {};
      }
      if (tail === void 0) {
        tail = '';
      }
      const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      const inputValue = this.rawInputValue;
      const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      const tailValue = inputValue.slice(insertValue.length);
      const prevMask = this.currentMask;
      const details = new ChangeDetails();
      const prevMaskState = prevMask == null ? void 0 : prevMask.state;

      // clone flags to prevent overwriting `_beforeTailState`
      this.currentMask = this.doDispatch(appended, {
        ...flags
      }, tail);

      // restore state after dispatch
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();
          if (insertValue) {
            this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else if (prevMaskState) {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
    _appendPlaceholder() {
      const details = this._applyDispatch();
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
    _appendEager() {
      const details = this._applyDispatch();
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }
      return details;
    }
    appendTail(tail) {
      const details = new ChangeDetails();
      if (tail) details.aggregate(this._applyDispatch('', {}, tail));
      return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
      var _flags$_beforeTailSta, _flags$_beforeTailSta2;
      return {
        ...flags,
        _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
      };
    }
    doDispatch(appended, flags, tail) {
      if (flags === void 0) {
        flags = {};
      }
      if (tail === void 0) {
        tail = '';
      }
      return this.dispatch(appended, this, flags, tail);
    }
    doValidate(flags) {
      return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    doPrepare(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let [s, details] = super.doPrepare(str, flags);
      if (this.currentMask) {
        let currentDetails;
        [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }
    doPrepareChar(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let [s, details] = super.doPrepareChar(str, flags);
      if (this.currentMask) {
        let currentDetails;
        [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }
    reset() {
      var _this$currentMask;
      (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
      this.compiledMasks.forEach(m => m.reset());
    }
    get value() {
      return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
    }
    set value(value) {
      if (this.exposeMask) {
        this.exposeMask.value = value;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
      } else super.value = value;
    }
    get unmaskedValue() {
      return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
    }
    set unmaskedValue(unmaskedValue) {
      if (this.exposeMask) {
        this.exposeMask.unmaskedValue = unmaskedValue;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
      } else super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
      return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
    }
    set typedValue(typedValue) {
      if (this.exposeMask) {
        this.exposeMask.typedValue = typedValue;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
        return;
      }
      let unmaskedValue = String(typedValue);

      // double check it
      if (this.currentMask) {
        this.currentMask.typedValue = typedValue;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
      return this.currentMask ? this.currentMask.displayValue : '';
    }
    get isComplete() {
      var _this$currentMask2;
      return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
    }
    get isFilled() {
      var _this$currentMask3;
      return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
    }
    remove(fromPos, toPos) {
      const details = new ChangeDetails();
      if (this.currentMask) {
        details.aggregate(this.currentMask.remove(fromPos, toPos))
        // update with dispatch
        .aggregate(this._applyDispatch());
      }
      return details;
    }
    get state() {
      var _this$currentMask4;
      return {
        ...super.state,
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(m => m.state),
        currentMaskRef: this.currentMask,
        currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
      };
    }
    set state(state) {
      const {
        compiledMasks,
        currentMaskRef,
        currentMask,
        ...maskedState
      } = state;
      if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      super.state = maskedState;
    }
    extractInput(fromPos, toPos, flags) {
      return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
    }
    extractTail(fromPos, toPos) {
      return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
    }
    doCommit() {
      if (this.currentMask) this.currentMask.doCommit();
      super.doCommit();
    }
    nearestInputPos(cursorPos, direction) {
      return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
    }
    get overwrite() {
      return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(overwrite) {
      this._overwrite = overwrite;
    }
    get eager() {
      return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(eager) {
      this._eager = eager;
    }
    get skipInvalid() {
      return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
    }
    set skipInvalid(skipInvalid) {
      this._skipInvalid = skipInvalid;
    }
    get autofix() {
      return this.currentMask ? this.currentMask.autofix : this._autofix;
    }
    set autofix(autofix) {
      this._autofix = autofix;
    }
    maskEquals(mask) {
      return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
        if (!mask[mi]) return;
        const {
          mask: oldMask,
          ...restOpts
        } = mask[mi];
        return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
      }) : super.maskEquals(mask);
    }
    typedValueEquals(value) {
      var _this$currentMask5;
      return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
  }
  /** Currently chosen mask */
  /** Currently chosen mask */
  /** Compliled {@link Masked} options */
  /** Chooses {@link Masked} depending on input value */
  MaskedDynamic.DEFAULTS = {
    ...Masked.DEFAULTS,
    dispatch: (appended, masked, flags, tail) => {
      if (!masked.compiledMasks.length) return;
      const inputValue = masked.rawInputValue;

      // simulate input
      const inputs = masked.compiledMasks.map((m, index) => {
        const isCurrent = masked.currentMask === m;
        const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT);
        if (m.rawInputValue !== inputValue) {
          m.reset();
          m.append(inputValue, {
            raw: true
          });
        } else if (!isCurrent) {
          m.remove(startInputPos);
        }
        m.append(appended, masked.currentMaskFlags(flags));
        m.appendTail(tail);
        return {
          index,
          weight: m.rawInputValue.length,
          totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT)))
        };
      });

      // pop masks with longer values first
      inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  /** Pattern which validates enum values */
  class MaskedEnum extends MaskedPattern {
    constructor(opts) {
      super({
        ...MaskedEnum.DEFAULTS,
        ...opts
      }); // mask will be created in _update
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        enum: enum_,
        ...eopts
      } = opts;
      if (enum_) {
        const lengths = enum_.map(e => e.length);
        const requiredLength = Math.min(...lengths);
        const optionalLength = Math.max(...lengths) - requiredLength;
        eopts.mask = '*'.repeat(requiredLength);
        if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
        this.enum = enum_;
      }
      super._update(eopts);
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const matchFrom = Math.min(this.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
      const matches = this.enum.filter(e => this.matchValue(e, this.unmaskedValue + ch, matchFrom));
      if (matches.length) {
        if (matches.length === 1) {
          this._forEachBlocksInRange(0, this.value.length, (b, bi) => {
            const mch = matches[0][bi];
            if (bi >= this.value.length || mch === b.value) return;
            b.reset();
            b._appendChar(mch, flags);
          });
        }
        const d = super._appendCharRaw(matches[0][this.value.length], flags);
        if (matches.length === 1) {
          matches[0].slice(this.unmaskedValue.length).split('').forEach(mch => d.aggregate(super._appendCharRaw(mch)));
        }
        return d;
      }
      return new ChangeDetails({
        skip: !this.isComplete
      });
    }
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      // just drop tail
      return new ContinuousTailDetails('', fromPos);
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      if (fromPos === toPos) return new ChangeDetails();
      const matchFrom = Math.min(super.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
      let pos;
      for (pos = fromPos; pos >= 0; --pos) {
        const matches = this.enum.filter(e => this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
        if (matches.length > 1) break;
      }
      const details = super.remove(pos, toPos);
      details.tailShift += pos - fromPos;
      return details;
    }
    get isComplete() {
      return this.enum.indexOf(this.value) >= 0;
    }
  }
  /** Match enum value */
  MaskedEnum.DEFAULTS = {
    ...MaskedPattern.DEFAULTS,
    matchValue: (estr, istr, matchFrom) => estr.indexOf(istr, matchFrom) === matchFrom
  };
  IMask.MaskedEnum = MaskedEnum;

  /** Masking by custom Function */
  class MaskedFunction extends Masked {
    /** */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update({
        ...opts,
        validate: opts.mask
      });
    }
  }
  IMask.MaskedFunction = MaskedFunction;

  var _MaskedNumber;
  /** Number mask */
  class MaskedNumber extends Masked {
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    /** Format typed value to string */

    /** Parse string to get typed value */

    constructor(opts) {
      super({
        ...MaskedNumber.DEFAULTS,
        ...opts
      });
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update(opts);
      this._updateRegExps();
    }
    _updateRegExps() {
      const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      const mid = '\\d*';
      const end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join('') + "]", 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      const parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    doPrepareChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
      /*
        radix should be mapped when
        1) input is done from keyboard = flags.input && flags.raw
        2) unmasked value is set = !flags.input && !flags.raw
        and should not be mapped when
        1) value is set = flags.input && !flags.raw
        2) raw value is set = !flags.input && flags.raw
      */
      flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
      if (ch && !prepCh) details.skip = true;
      if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
      return [prepCh, details];
    }
    _separatorsCount(to, extendOnSeparators) {
      if (extendOnSeparators === void 0) {
        extendOnSeparators = false;
      }
      let count = 0;
      for (let pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
    _separatorsCountFromSlice(slice) {
      if (slice === void 0) {
        slice = this._value;
      }
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      const oldValue = this._value;
      this._value += ch;
      const num = this.number;
      let accepted = !isNaN(num);
      let skip = false;
      if (accepted) {
        let fixedNum;
        if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
        if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
        if (fixedNum != null) {
          if (this.autofix) {
            this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
            skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
          } else {
            accepted = false;
          }
        }
        accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
      }
      let appendDetails;
      if (!accepted) {
        this._value = oldValue;
        appendDetails = new ChangeDetails();
      } else {
        appendDetails = new ChangeDetails({
          inserted: this._value.slice(oldValue.length),
          rawInserted: skip ? '' : ch,
          skip
        });
      }
      this._value = this._insertThousandsSeparators(this._value);
      const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      return appendDetails;
    }
    _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        const searchFrom = pos - this.thousandsSeparator.length + 1;
        const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }
      return -1;
    }
    _adjustRangeWithSeparators(from, to) {
      const separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
      const separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      const valueBeforePos = this.value.slice(0, fromPos);
      const valueAfterPos = this.value.slice(toPos);
      const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
            if (separatorAtLeftPos >= 0) {
              const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }
            break;
          }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            const separatorAtRightPos = this._findSeparatorAround(cursorPos);
            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }
      return cursorPos;
    }
    doCommit() {
      if (this.value) {
        const number = this.number;
        let validnum = number;

        // check bounds
        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
        let formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      super.doCommit();
    }
    _normalizeZeros(value) {
      const parts = this._removeThousandsSeparators(value).split(this.radix);

      // remove leading zeros
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
      // add leading zero
      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
        if (!parts[1].length) parts.length = 1; // remove fractional
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    _padFractionalZeros(value) {
      if (!value) return value;
      const parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    doSkipInvalid(ch, flags, checkTail) {
      if (flags === void 0) {
        flags = {};
      }
      const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
      return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    get unmaskedValue() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
      super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
      return this.parse(this.unmaskedValue, this);
    }
    set typedValue(n) {
      this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }

    /** Parsed Number */
    get number() {
      return this.typedValue;
    }
    set number(number) {
      this.typedValue = number;
    }
    get allowNegative() {
      return this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    get allowPositive() {
      return this.min != null && this.min > 0 || this.max != null && this.max > 0;
    }
    typedValueEquals(value) {
      // handle  0 -> '' case (typed = 0 even if value = '')
      // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
      return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
    }
  }
  _MaskedNumber = MaskedNumber;
  MaskedNumber.UNMASKED_RADIX = '.';
  MaskedNumber.EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
  MaskedNumber.DEFAULTS = {
    ...Masked.DEFAULTS,
    mask: Number,
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: [_MaskedNumber.UNMASKED_RADIX],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: n => n.toLocaleString('en-US', {
      useGrouping: false,
      maximumFractionDigits: 20
    })
  };
  IMask.MaskedNumber = MaskedNumber;

  /** Mask pipe source and destination types */
  const PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };
  /** Creates new pipe function depending on mask type, source and destination options */
  function createPipe(arg, from, to) {
    if (from === void 0) {
      from = PIPE_TYPE.MASKED;
    }
    if (to === void 0) {
      to = PIPE_TYPE.MASKED;
    }
    const masked = createMask(arg);
    return value => masked.runIsolated(m => {
      m[from] = value;
      return m[to];
    });
  }

  /** Pipes value through mask depending on mask type, source and destination options */
  function pipe(value, mask, from, to) {
    return createPipe(mask, from, to)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  /** Pattern mask */
  class RepeatBlock extends MaskedPattern {
    get repeatFrom() {
      var _ref;
      return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
    }
    get repeatTo() {
      var _ref2;
      return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
    }
    constructor(opts) {
      super(opts);
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      var _ref3, _ref4, _this$_blocks;
      const {
        repeat,
        ...blockOpts
      } = normalizeOpts(opts); // TODO type
      this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
      const block = createMask(this._blockOpts);
      this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type

      super._update({
        mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
        blocks: {
          m: block
        },
        eager: block.eager,
        overwrite: block.overwrite,
        skipInvalid: block.skipInvalid,
        lazy: block.lazy,
        placeholderChar: block.placeholderChar,
        displayChar: block.displayChar
      });
    }
    _allocateBlock(bi) {
      if (bi < this._blocks.length) return this._blocks[bi];
      if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
        this._blocks.push(createMask(this._blockOpts));
        this.mask += 'm';
        return this._blocks[this._blocks.length - 1];
      }
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const details = new ChangeDetails();
      for (let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated;
      // try to get a block or
      // try to allocate a new block if not allocated already
      block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi) {
        var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
        const blockDetails = block._appendChar(ch, {
          ...flags,
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
        });
        if (blockDetails.skip && allocated) {
          // remove the last allocated block and break
          this._blocks.pop();
          this.mask = this.mask.slice(1);
          break;
        }
        details.aggregate(blockDetails);
        if (blockDetails.consumed) break; // go next char
      }
      return details;
    }
    _trimEmptyTail(fromPos, toPos) {
      var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
      if (fromPos === void 0) {
        fromPos = 0;
      }
      const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
      let lastBlockIndex;
      if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
      if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
      let removeCount = 0;
      for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
        if (this._blocks[blockIndex].unmaskedValue) break;
      }
      if (removeCount) {
        this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
        this.mask = this.mask.slice(removeCount);
      }
    }
    reset() {
      super.reset();
      this._trimEmptyTail();
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const removeDetails = super.remove(fromPos, toPos);
      this._trimEmptyTail(fromPos, toPos);
      return removeDetails;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos == null && this.repeatTo === Infinity) return Infinity;
      return super.totalInputPositions(fromPos, toPos);
    }
    get state() {
      return super.state;
    }
    set state(state) {
      this._blocks.length = state._blocks.length;
      this.mask = this.mask.slice(0, this._blocks.length);
      super.state = state;
    }
  }
  IMask.RepeatBlock = RepeatBlock;

  try {
    globalThis.IMask = IMask;
  } catch {}

  exports.ChangeDetails = ChangeDetails;
  exports.ChunksTailDetails = ChunksTailDetails;
  exports.DIRECTION = DIRECTION;
  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLInputMaskElement = HTMLInputMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.PatternFixedDefinition = PatternFixedDefinition;
  exports.PatternInputDefinition = PatternInputDefinition;
  exports.RepeatBlock = RepeatBlock;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports.default = IMask;
  exports.forceDirection = forceDirection;
  exports.normalizeOpts = normalizeOpts;
  exports.pipe = pipe;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=imask.js.map

/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/local/templates/abutik/assets/js/plugins/fancybox.min.js?1754389282142278";s:6:"source";s:57:"/local/templates/abutik/assets/js/plugins/fancybox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";const e=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),i=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;const e=t.scrollHeight>t.clientHeight,i=window.getComputedStyle(t).overflowY,n=-1!==i.indexOf("hidden"),s=-1!==i.indexOf("visible");return e&&!n&&!s},n=function(t,e=void 0){return!(!t||t===document.body||e&&t===e)&&(i(t)?t:n(t.parentElement,e))},s=function(t){var e=(new DOMParser).parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var i=document.createElement("div");e.firstChild;)i.appendChild(e.firstChild);return i}return e.firstChild},o=t=>`${t||""}`.split(" ").filter((t=>!!t)),a=(t,e,i)=>{t&&o(e).forEach((e=>{t.classList.toggle(e,i||!1)}))};class r{constructor(t){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.id=self.Touch&&t instanceof Touch?t.identifier:-1,this.time=Date.now()}}const l={passive:!1};class c{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:n=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=t,this.startCallback=e,this.moveCallback=i,this.endCallback=n;for(const t of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[t]=this[t].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,l),this.element.addEventListener("touchstart",this.onTouchStart,l),this.element.addEventListener("touchmove",this.onMove,l),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(t){if(!t.buttons||0!==t.button)return;const e=new r(t);this.currentPointers.some((t=>t.id===e.id))||this.triggerPointerStart(e,t)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerStart(new r(e),t);window.addEventListener("blur",this.onWindowBlur)}onMove(t){const e=this.currentPointers.slice(),i="changedTouches"in t?Array.from(t.changedTouches||[]).map((t=>new r(t))):[new r(t)],n=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));e<0||(n.push(t),this.currentPointers[e]=t)}n.length&&this.moveCallback(t,this.currentPointers.slice(),e)}onPointerEnd(t){t.buttons>0&&0!==t.button||(this.triggerPointerEnd(t,new r(t)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerEnd(t,new r(e))}triggerPointerStart(t,e){return!!this.startCallback(e,t,this.currentPointers.slice())&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}triggerPointerEnd(t,e){const i=this.currentPointers.findIndex((t=>t.id===e.id));i<0||(this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(t,e,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const t=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY}),t,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,l),this.element.removeEventListener("touchstart",this.onTouchStart,l),this.element.removeEventListener("touchmove",this.onMove,l),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function h(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function d(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}const u=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),p=(t,...e)=>{const i=e.length;for(let n=0;n<i;n++){const i=e[n]||{};Object.entries(i).forEach((([e,i])=>{const n=Array.isArray(i)?[]:{};t[e]||Object.assign(t,{[e]:n}),u(i)?Object.assign(t[e],p(n,i)):Array.isArray(i)?Object.assign(t,{[e]:[...i]}):Object.assign(t,{[e]:i})}))}return t},f=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class g{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?p({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=f(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...n){let s=f(e,t);var o;"string"!=typeof(o=s)||isNaN(o)||isNaN(parseFloat(o))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...n));let a=f(e,this.options);return a&&"function"==typeof a?s=a.call(this,this,t,...n,s):void 0===s&&(s=a),void 0===s?i:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(g,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.35"}),Object.defineProperty(g,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class m extends g{constructor(t={}){super(t),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(t={}){const e=new Map;for(const[i,n]of Object.entries(t)){const t=this.option(i),s=this.plugins[i];s||!1===t?s&&!1===t&&(s.detach(),delete this.plugins[i]):e.set(i,new n(this,t||{}))}for(const[t,i]of e)this.plugins[t]=i,i.attach()}detachPlugins(t){t=t||Object.keys(this.plugins);for(const e of t){const t=this.plugins[e];t&&t.detach(),delete this.plugins[e]}return this.emit("detachPlugins"),this}}var v;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(v||(v={}));const b=["a","b","c","d","e","f"],y={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},w={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:y},x='<circle cx="25" cy="25" r="20"></circle>',E='<div class="f-spinner"><svg viewBox="0 0 50 50">'+x+x+"</svg></div>",S=t=>t&&null!==t&&t instanceof Element&&"nodeType"in t,P=(t,e)=>{t&&o(e).forEach((e=>{t.classList.remove(e)}))},C=(t,e)=>{t&&o(e).forEach((e=>{t.classList.add(e)}))},T={a:1,b:0,c:0,d:1,e:0,f:0},M=1e5,O=1e4,A="mousemove",L="drag",z="content",R="auto";let k=null,I=null;class D extends m{get fits(){return this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1}get isTouchDevice(){return null===I&&(I=window.matchMedia("(hover: none)").matches),I}get isMobile(){return null===k&&(k=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),k}get panMode(){return this.options.panMode!==A||this.isTouchDevice?L:A}get panOnlyZoomed(){const t=this.options.panOnlyZoomed;return t===R?this.isTouchDevice:t}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:t,b:e}=this.current;return Math.sqrt(t*t+e*e)||1}get targetScale(){const{a:t,b:e}=this.target;return Math.sqrt(t*t+e*e)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:t}=this;return t.fullWidth/t.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:t,contentRect:e}=this,i=Math.max(t.height/e.fitHeight,t.width/e.fitWidth)||1;return Math.min(this.fullScale,i)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const t=this.content;return!!(t&&t instanceof HTMLImageElement)&&!t.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const t of b){const e="e"==t||"f"===t?1e-4:1e-5;if(Math.abs(this.target[t]-this.current[t])>e)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(t,e={},i={}){var n;if(super(e),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:v.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},T)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},T)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("Container Element Not Found");this.container=t,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},D.Plugins),i)),this.emit("attachPlugins"),this.emit("init");const o=this.content;if(o.addEventListener("load",this.onLoad),o.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){t.classList.add(this.cn("isLoading"));const e=s(E);!t.contains(o)||o.parentElement instanceof HTMLPictureElement?this.spinner=t.appendChild(e):this.spinner=(null===(n=o.parentElement)||void 0===n?void 0:n.insertBefore(e,o))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:t}=this,e=this.cn(z);let i=this.option(z)||t.querySelector(`.${e}`);if(i||(i=t.querySelector("img,picture")||t.firstElementChild,i&&C(i,e)),i instanceof HTMLPictureElement&&(i=i.querySelector("img")),!i)throw new Error("No content found");this.content=i}onLoad(){const{spinner:t,container:e,state:i}=this;t&&(t.remove(),this.spinner=null),this.option("spinner")&&e.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),i===v.Init?this.enable():this.updateMetrics()}onError(){this.state!==v.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=v.Error,this.emit("error"))}getNextScale(t){const{fullScale:e,targetScale:i,coverScale:n,maxScale:s,minScale:o}=this;let a=o;switch(t){case"toggleMax":a=i-o<.5*(s-o)?s:o;break;case"toggleCover":a=i-o<.5*(n-o)?n:o;break;case"toggleZoom":a=i-o<.5*(e-o)?e:o;break;case"iterateZoom":let t=[1,e,s].sort(((t,e)=>t-e)),r=t.findIndex((t=>t>i+1e-5));a=t[r]||1}return a}attachObserver(){var t;const e=()=>{const{container:t,containerRect:e}=this;return Math.abs(e.width-t.getBoundingClientRect().width)>.1||Math.abs(e.height-t.getBoundingClientRect().height)>.1};this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(e()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{e()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(t=this.resizeObserver)||void 0===t||t.observe(this.container)}detachObserver(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}attachEvents(){const{container:t}=this;t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new c(t,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener(A,this.onMouseMove)}detachEvents(){var t;const{container:e}=this;e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(t=this.pointerTracker)||void 0===t||t.stop(),this.pointerTracker=null,document.removeEventListener(A,this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){this.setTargetForce();const t=this.friction,e=this.option("maxVelocity");for(const i of b)t?(this.velocity[i]*=1-t,e&&!this.isScaling&&(this.velocity[i]=Math.max(Math.min(this.velocity[i],e),-1*e)),this.current[i]+=this.velocity[i]):this.current[i]=this.target[i];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const t of b)"e"===t&&this.isBouncingX||"f"===t&&this.isBouncingY||(this.velocity[t]=(1/(1-this.friction)-1)*(this.target[t]-this.current[t]))}checkBounds(t=0,e=0){const{current:i}=this,n=i.e+t,s=i.f+e,o=this.getBounds(),{x:a,y:r}=o,l=a.min,c=a.max,h=r.min,d=r.max;let u=0,p=0;return l!==1/0&&n<l?u=l-n:c!==1/0&&n>c&&(u=c-n),h!==1/0&&s<h?p=h-s:d!==1/0&&s>d&&(p=d-s),Math.abs(u)<1e-4&&(u=0),Math.abs(p)<1e-4&&(p=0),Object.assign(Object.assign({},o),{xDiff:u,yDiff:p,inBounds:!u&&!p})}clampTargetBounds(){const{target:t}=this,{x:e,y:i}=this.getBounds();e.min!==1/0&&(t.e=Math.max(t.e,e.min)),e.max!==1/0&&(t.e=Math.min(t.e,e.max)),i.min!==1/0&&(t.f=Math.max(t.f,i.min)),i.max!==1/0&&(t.f=Math.min(t.f,i.max))}calculateContentDim(t=this.current){const{content:e,contentRect:i}=this,{fitWidth:n,fitHeight:s,fullWidth:o,fullHeight:a}=i;let r=o,l=a;if(this.option("zoom")||0!==this.angle){const i=!(e instanceof HTMLImageElement)&&("none"===window.getComputedStyle(e).maxWidth||"none"===window.getComputedStyle(e).maxHeight),c=i?o:n,h=i?a:s,d=this.getMatrix(t),u=new DOMPoint(0,0).matrixTransform(d),p=new DOMPoint(0+c,0).matrixTransform(d),f=new DOMPoint(0+c,0+h).matrixTransform(d),g=new DOMPoint(0,0+h).matrixTransform(d),m=Math.abs(f.x-u.x),v=Math.abs(f.y-u.y),b=Math.abs(g.x-p.x),y=Math.abs(g.y-p.y);r=Math.max(m,b),l=Math.max(v,y)}return{contentWidth:r,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||this.panMode===A||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:t}=this,{x:e,y:i,xDiff:n,yDiff:s}=this.checkBounds();const o=this.option("maxVelocity");let a=this.velocity.e,r=this.velocity.f;0!==n?(this.isBouncingX=!0,n*a<=0?a+=.14*n:(a=.14*n,e.min!==1/0&&(this.target.e=Math.max(t.e,e.min)),e.max!==1/0&&(this.target.e=Math.min(t.e,e.max))),o&&(a=Math.max(Math.min(a,o),-1*o))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*r<=0?r+=.14*s:(r=.14*s,i.min!==1/0&&(this.target.f=Math.max(t.f,i.min)),i.max!==1/0&&(this.target.f=Math.min(t.f,i.max))),o&&(r=Math.max(Math.min(r,o),-1*o))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=a),this.isBouncingY&&(this.velocity.f=r)}enable(){const{content:t}=this,e=new DOMMatrixReadOnly(window.getComputedStyle(t).transform);for(const t of b)this.current[t]=this.target[t]=e[t];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=v.Ready,this.emit("ready")}onClick(t){var e;"click"===t.type&&0===t.detail&&(this.dragOffset.x=0,this.dragOffset.y=0),this.isDragging&&(null===(e=this.pointerTracker)||void 0===e||e.clear(),this.trackingPoints=[],this.startDecelAnim());const i=t.target;if(!i||t.defaultPrevented)return;if(i.hasAttribute("disabled"))return t.preventDefault(),void t.stopPropagation();if((()=>{const t=window.getSelection();return t&&"Range"===t.type})()&&!i.closest("button"))return;const n=i.closest("[data-panzoom-action]"),s=i.closest("[data-panzoom-change]"),o=n||s,a=o&&S(o)?o.dataset:null;if(a){const e=a.panzoomChange,i=a.panzoomAction;if((e||i)&&t.preventDefault(),e){let t={};try{t=JSON.parse(e)}catch(t){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(t)}if(i)return void(this[i]&&this[i]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return t.preventDefault(),void t.stopPropagation();if(i.closest("[data-fancybox]"))return;const r=this.content.getBoundingClientRect(),l=this.dragStart;if(l.time&&!this.canZoomOut()&&(Math.abs(r.x-l.x)>2||Math.abs(r.y-l.y)>2))return;this.dragStart.time=0;const c=e=>{this.option("zoom",t)&&e&&"string"==typeof e&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e)&&"function"==typeof this[e]&&(t.preventDefault(),this[e]({event:t}))},h=this.option("click",t),d=this.option("dblClick",t);d?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",t),!t.defaultPrevented&&h&&c(h)):(this.emit("dblClick",t),t.defaultPrevented||c(d)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",t),!t.defaultPrevented&&h&&c(h))}addTrackingPoint(t){const e=this.trackingPoints.filter((t=>t.time>Date.now()-100));e.push(t),this.trackingPoints=e}onPointerDown(t,e,i){var n;if(!1===this.option("touch",t))return!1;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if(this.panMode===A&&this.targetScale>1)return t.preventDefault(),t.stopPropagation(),!1;const o=t.composedPath()[0];if(!i.length){if(["TEXTAREA","OPTION","INPUT","SELECT","VIDEO","IFRAME"].includes(o.nodeName)||o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))return!1;null===(n=window.getSelection())||void 0===n||n.removeAllRanges()}if("mousedown"===t.type)["A","BUTTON"].includes(o.nodeName)||t.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(e),this.emit("touchStart",t)),!0}onPointerMove(t,i,s){if(!1===this.option("touch",t))return;if(!this.isDragging)return;if(i.length<2&&this.panOnlyZoomed&&e(this.targetScale)<=e(this.minScale))return;if(this.emit("touchMove",t),t.defaultPrevented)return;this.addTrackingPoint(i[0]);const{content:o}=this,a=d(s[0],s[1]),r=d(i[0],i[1]);let l=0,c=0;if(i.length>1){const t=o.getBoundingClientRect();l=a.clientX-t.left-.5*t.width,c=a.clientY-t.top-.5*t.height}const u=h(s[0],s[1]),p=h(i[0],i[1]);let f=u?p/u:1,g=r.clientX-a.clientX,m=r.clientY-a.clientY;this.dragOffset.x+=g,this.dragOffset.y+=m,this.dragOffset.time=Date.now()-this.dragStart.time;let v=e(this.targetScale)===e(this.minScale)&&this.option("lockAxis");if(v&&!this.lockedAxis)if("xy"===v||"y"===v||"touchmove"===t.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void t.preventDefault();const e=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=e>45&&e<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,g=0,m=0}else this.lockedAxis=v;if(n(t.target,this.content)&&(v="x",this.dragOffset.y=0),v&&"xy"!==v&&this.lockedAxis!==v&&e(this.targetScale)===e(this.minScale))return;t.cancelable&&t.preventDefault(),this.container.classList.add(this.cn("isDragging"));const b=this.checkBounds(g,m);this.option("rubberband")?("x"!==this.isInfinite&&(b.xDiff>0&&g<0||b.xDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*b.xDiff))),"y"!==this.isInfinite&&(b.yDiff>0&&m<0||b.yDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*b.yDiff)))):(b.xDiff&&(g=0),b.yDiff&&(m=0));const y=this.targetScale,w=this.minScale,x=this.maxScale;y<.5*w&&(f=Math.max(f,w)),y>1.5*x&&(f=Math.min(f,x)),"y"===this.lockedAxis&&e(y)===e(w)&&(g=0),"x"===this.lockedAxis&&e(y)===e(w)&&(m=0),this.applyChange({originX:l,originY:c,panX:g,panY:m,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(t,e,i){if(i.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(e),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),n(t.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",t),this.isDragging=!1,this.lockedAxis=!1,this.state!==v.Destroy&&(t.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){var t;const i=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of b)this.velocity[t]=0;this.target.e=this.current.e,this.target.f=this.current.f,P(this.container,"is-scaling"),P(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:n}=this,s=n[0],o=n[n.length-1];let a=0,r=0,l=0;o&&s&&(a=o.clientX-s.clientX,r=o.clientY-s.clientY,l=o.time-s.time);const c=(null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1;1!==c&&(a*=c,r*=c);let h=0,d=0,u=0,p=0,f=this.option("decelFriction");const g=this.targetScale;if(l>0){u=Math.abs(a)>3?a/(l/30):0,p=Math.abs(r)>3?r/(l/30):0;const t=this.option("maxVelocity");t&&(u=Math.max(Math.min(u,t),-1*t),p=Math.max(Math.min(p,t),-1*t))}u&&(h=u/(1/(1-f)-1)),p&&(d=p/(1/(1-f)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&e(g)===this.minScale)&&(h=u=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&e(g)===this.minScale)&&(d=p=0);const m=this.dragOffset.x,v=this.dragOffset.y,y=this.option("dragMinThreshold")||0;Math.abs(m)<y&&Math.abs(v)<y&&(h=d=0,u=p=0),(this.option("zoom")&&(g<this.minScale-1e-5||g>this.maxScale+1e-5)||i&&!h&&!d)&&(f=.35),this.applyChange({panX:h,panY:d,friction:f}),this.emit("decel",u,p,m,v)}onWheel(t){var e=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const i=Math.max(-1,Math.min(1,e));if(this.emit("wheel",t,i),this.panMode===A)return;if(t.defaultPrevented)return;const n=this.option("wheel");"pan"===n?(t.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-t.deltaX,panY:2*-t.deltaY,bounce:!1})):"zoom"===n&&!1!==this.option("zoom")&&this.zoomWithWheel(t)}onMouseMove(t){this.panWithMouse(t)}onKeydown(t){"Escape"===t.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:t,target:i,content:n,contentRect:s}=this,o=Object.assign({},T);for(const n of b){const s="e"==n||"f"===n?O:M;o[n]=e(t[n],s),Math.abs(i[n]-t[n])<("e"==n||"f"===n?.51:.001)&&(t[n]=i[n])}let{a:a,b:r,c:l,d:c,e:h,f:d}=o,u=`matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===u)return;p.style.transform=u;const{contentWidth:f,contentHeight:g}=this.calculateContentDim();s.width=f,s.height=g,this.emit("afterTransform")}updateMetrics(t=!1){var i;if(!this||this.state===v.Destroy)return;if(this.isContentLoading)return;const n=Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1),{container:s,content:o}=this,a=o instanceof HTMLImageElement,r=s.getBoundingClientRect(),l=getComputedStyle(this.container);let c=r.width*n,h=r.height*n;const d=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),u=c-(parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)),p=h-d;this.containerRect={width:c,height:h,innerWidth:u,innerHeight:p};const f=parseFloat(o.dataset.width||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalWidth:t instanceof SVGElement?t.width.baseVal.value:Math.max(t.offsetWidth,t.scrollWidth),e||0})(o),g=parseFloat(o.dataset.height||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalHeight:t instanceof SVGElement?t.height.baseVal.value:Math.max(t.offsetHeight,t.scrollHeight),e||0})(o);let m=this.option("width",f)||R,b=this.option("height",g)||R;const y=m===R,w=b===R;"number"!=typeof m&&(m=f),"number"!=typeof b&&(b=g),y&&(m=f*(b/g)),w&&(b=g/(f/m));let x=o.parentElement instanceof HTMLPictureElement?o.parentElement:o;this.option("transformParent")&&(x=x.parentElement||x);const E=x.getAttribute("style")||"";x.style.setProperty("transform","none","important"),a&&(x.style.width="",x.style.height=""),x.offsetHeight;const S=o.getBoundingClientRect();let P=S.width*n,C=S.height*n,T=P,M=C;P=Math.min(P,m),C=Math.min(C,b),a?({width:P,height:C}=((t,e,i,n)=>{const s=i/t,o=n/e,a=Math.min(s,o);return{width:t*=a,height:e*=a}})(m,b,P,C)):(P=Math.min(P,m),C=Math.min(C,b));let O=.5*(M-C),A=.5*(T-P);this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:S.top-r.top+O,bottom:r.bottom-S.bottom+O,left:S.left-r.left+A,right:r.right-S.right+A,fitWidth:P,fitHeight:C,width:P,height:C,fullWidth:m,fullHeight:b}),x.style.cssText=E,a&&(x.style.width=`${P}px`,x.style.height=`${C}px`),this.setTransform(),!0!==t&&this.emit("refresh"),this.ignoreBounds||(e(this.targetScale)<e(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===v.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}calculateBounds(){const{contentWidth:t,contentHeight:i}=this.calculateContentDim(this.target),{targetScale:n,lockedAxis:s}=this,{fitWidth:o,fitHeight:a}=this.contentRect;let r=0,l=0,c=0,h=0;const d=this.option("infinite");if(!0===d||s&&d===s)r=-1/0,c=1/0,l=-1/0,h=1/0;else{let{containerRect:s,contentRect:d}=this,u=e(o*n,O),p=e(a*n,O),{innerWidth:f,innerHeight:g}=s;if(s.width===u&&(f=s.width),s.width===p&&(g=s.height),t>f){c=.5*(t-f),r=-1*c;let e=.5*(d.right-d.left);r+=e,c+=e}if(o>f&&t<f&&(r-=.5*(o-f),c-=.5*(o-f)),i>g){h=.5*(i-g),l=-1*h;let t=.5*(d.bottom-d.top);l+=t,h+=t}a>g&&i<g&&(r-=.5*(a-g),c-=.5*(a-g))}return{x:{min:r,max:c},y:{min:l,max:h}}}getBounds(){const t=this.option("bounds");return t!==R?t:this.calculateBounds()}updateControls(){const t=this,i=t.container,{panMode:n,contentRect:s,targetScale:o,minScale:r}=t;let l=r,c=t.option("click")||!1;c&&(l=t.getNextScale(c));let h=t.canZoomIn(),d=t.canZoomOut(),u=n===L&&!!this.option("touch"),p=d&&u;if(u&&(e(o)<e(r)&&!this.panOnlyZoomed&&(p=!0),(e(s.width,1)>e(s.fitWidth,1)||e(s.height,1)>e(s.fitHeight,1))&&(p=!0)),e(s.width*o,1)<e(s.fitWidth,1)&&(p=!1),n===A&&(p=!1),a(i,this.cn("isDraggable"),p),!this.option("zoom"))return;let f=h&&e(l)>e(o),g=!f&&!p&&d&&e(l)<e(o);a(i,this.cn("canZoomIn"),f),a(i,this.cn("canZoomOut"),g);for(const t of i.querySelectorAll("[data-panzoom-action]")){let e=!1,i=!1;switch(t.dataset.panzoomAction){case"zoomIn":h?e=!0:i=!0;break;case"zoomOut":d?e=!0:i=!0;break;case"toggleZoom":case"iterateZoom":h||d?e=!0:i=!0;const n=t.querySelector("g");n&&(n.style.display=h?"":"none")}e?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):i&&(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"))}}panTo({x:t=this.target.e,y:e=this.target.f,scale:i=this.targetScale,friction:n=this.option("friction"),angle:s=0,originX:o=0,originY:a=0,flipX:r=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==v.Destroy&&this.applyChange({panX:t-this.target.e,panY:e-this.target.f,scale:i/this.targetScale,angle:s,originX:o,originY:a,friction:n,flipX:r,flipY:l,ignoreBounds:c})}applyChange({panX:t=0,panY:i=0,scale:n=1,angle:s=0,originX:o=-this.current.e,originY:a=-this.current.f,friction:r=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:d=this.option("bounce")}){const u=this.state;if(u===v.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=r||0,this.ignoreBounds=h;const{current:p}=this,f=p.e,g=p.f,m=this.getMatrix(this.target);let y=(new DOMMatrix).translate(f,g).translate(o,a).translate(t,i);if(this.option("zoom")){if(!h){const t=this.targetScale,e=this.minScale,i=this.maxScale;t*n<e&&(n=e/t),t*n>i&&(n=i/t)}y=y.scale(n)}y=y.translate(-o,-a).translate(-f,-g).multiply(m),s&&(y=y.rotate(s)),l&&(y=y.scale(-1,1)),c&&(y=y.scale(1,-1));for(const t of b)"e"!==t&&"f"!==t&&(y[t]>this.minScale+1e-5||y[t]<this.minScale-1e-5)?this.target[t]=y[t]:this.target[t]=e(y[t],O);(this.targetScale<this.scale||Math.abs(n-1)>.1||this.panMode===A||!1===d)&&!h&&this.clampTargetBounds(),u===v.Init?this.animate():this.isResting||(this.state=v.Panning,this.requestTick())}stop(t=!1){if(this.state===v.Init||this.state===v.Destroy)return;const e=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of b)this.velocity[e]=0,"current"===t?this.current[e]=this.target[e]:"target"===t&&(this.target[e]=this.current[e]);this.setTransform(),P(this.container,"is-scaling"),P(this.container,"is-animating"),this.isTicking=!1,this.state=v.Ready,e&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),C(this.container,"is-animating"),this.isScaling&&C(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(t,i=this.option("mouseMoveFriction")){if(this.pmme=t,this.panMode!==A||!t)return;if(e(this.targetScale)<=e(this.minScale))return;this.emit("mouseMove",t);const{container:n,containerRect:s,contentRect:o}=this,a=s.width,r=s.height,l=n.getBoundingClientRect(),c=(t.clientX||0)-l.left,h=(t.clientY||0)-l.top;let{contentWidth:d,contentHeight:u}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(d!==a&&(d*=p),u!==r&&(u*=p));let f=.5*(d-a)-c/a*100/100*(d-a);f+=.5*(o.right-o.left);let g=.5*(u-r)-h/r*100/100*(u-r);g+=.5*(o.bottom-o.top),this.applyChange({panX:f-this.target.e,panY:g-this.target.f,friction:i})}zoomWithWheel(t){if(this.state===v.Destroy||this.state===v.Init)return;const i=Date.now();if(i-this.pwt<45)return void t.preventDefault();this.pwt=i;var n=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const s=Math.max(-1,Math.min(1,n)),{targetScale:o,maxScale:a,minScale:r}=this;let l=o*(100+45*s)/100;e(l)<e(r)&&e(o)<=e(r)?(this.cwd+=Math.abs(s),l=r):e(l)>e(a)&&e(o)>=e(a)?(this.cwd+=Math.abs(s),l=a):(this.cwd=0,l=Math.max(Math.min(l,a),r)),this.cwd>this.option("wheelLimit")||(t.preventDefault(),e(l)!==e(o)&&this.zoomTo(l,{event:t}))}canZoomIn(){return this.option("zoom")&&(e(this.contentRect.width,1)<e(this.contentRect.fitWidth,1)||e(this.targetScale)<e(this.maxScale))}canZoomOut(){return this.option("zoom")&&e(this.targetScale)>e(this.minScale)}zoomIn(t=1.25,e){this.zoomTo(this.targetScale*t,e)}zoomOut(t=.8,e){this.zoomTo(this.targetScale*t,e)}zoomToFit(t){this.zoomTo("fit",t)}zoomToCover(t){this.zoomTo("cover",t)}zoomToFull(t){this.zoomTo("full",t)}zoomToMax(t){this.zoomTo("max",t)}toggleZoom(t){this.zoomTo(this.getNextScale("toggleZoom"),t)}toggleMax(t){this.zoomTo(this.getNextScale("toggleMax"),t)}toggleCover(t){this.zoomTo(this.getNextScale("toggleCover"),t)}iterateZoom(t){this.zoomTo("next",t)}zoomTo(t=1,{friction:e=R,originX:i=R,originY:n=R,event:s}={}){if(this.isContentLoading||this.state===v.Destroy)return;const{targetScale:o,fullScale:a,maxScale:r,coverScale:l}=this;if(this.stop(),this.panMode===A&&(s=this.pmme||s),s||i===R||n===R){const t=this.content.getBoundingClientRect(),e=this.container.getBoundingClientRect(),o=s?s.clientX:e.left+.5*e.width,a=s?s.clientY:e.top+.5*e.height;i=o-t.left-.5*t.width,n=a-t.top-.5*t.height}let c=1;"number"==typeof t?c=t:"full"===t?c=a:"cover"===t?c=l:"max"===t?c=r:"fit"===t?c=1:"next"===t&&(c=this.getNextScale("iterateZoom")),c=c/o||1,e=e===R?c>1?.15:.25:e,this.applyChange({scale:c,originX:i,originY:n,friction:e}),s&&this.panMode===A&&this.panWithMouse(s,e)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.height-(e.top+.5*e.fitHeight)-i.f,scale:t.width/e.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.innerHeight-(e.top+.5*e.fitHeight)-i.f,scale:t.height/e.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:t}=this,e=this.cn("inFullscreen"),i=this.cn("htmlHasFullscreen");t.classList.toggle(e);const n=t.classList.contains(e);n?(document.documentElement.classList.add(i),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(i),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(n?"enterFS":"exitFS")}getMatrix(t=this.current){const{a:e,b:i,c:n,d:s,e:o,f:a}=t;return new DOMMatrix([e,i,n,s,o,a])}reset(t){if(this.state!==v.Init&&this.state!==v.Destroy){this.stop("current");for(const t of b)this.target[t]=T[t];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===t?this.option("friction"):t,this.state=v.Panning,this.requestTick())}}destroy(){this.stop(),this.state=v.Destroy,this.detachEvents(),this.detachObserver();const{container:t,content:e}=this,i=this.option("classes")||{};for(const e of Object.values(i))t.classList.remove(e+"");e&&(e.removeEventListener("load",this.onLoad),e.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(D,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:w}),Object.defineProperty(D,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const F=function(t,e){let i=!0;return(...n)=>{i&&(i=!1,t(...n),setTimeout((()=>{i=!0}),e))}},j=(t,e)=>{let i=[];return t.childNodes.forEach((t=>{t.nodeType!==Node.ELEMENT_NODE||e&&!t.matches(e)||i.push(t)})),i},B={viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};var H;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(H||(H={}));const N=t=>{if("string"==typeof t||t instanceof HTMLElement)t={html:t};else{const e=t.thumb;void 0!==e&&("string"==typeof e&&(t.thumbSrc=e),e instanceof HTMLImageElement&&(t.thumbEl=e,t.thumbElSrc=e.src,t.thumbSrc=e.src),delete t.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",customClass:"",index:-1,dim:0,gap:0,pos:0,transition:!1},t)},_=(t={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},t);class $ extends g{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const W={classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2};class X extends ${constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let t=this.list;if(!t){t=document.createElement("ul"),C(t,this.cn("list")),t.setAttribute("role","tablist");const e=this.instance.container;e.appendChild(t),C(e,this.cn("hasDots")),this.list=t}return t}refresh(){var t;const e=this.instance.pages.length,i=Math.min(2,this.option("minCount")),n=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(e<i||e>n)return void this.cleanup();const o="number"==typeof s&&e>5&&e>=s,r=!this.list||this.isDynamic!==o||this.list.children.length!==e;r&&this.cleanup();const l=this.build();if(a(l,this.cn("isDynamic"),!!o),r)for(let t=0;t<e;t++)l.append(this.createItem(t));let c,h=0;for(const e of[...l.children]){const i=h===this.instance.page;i&&(c=e),a(e,this.cn("isCurrent"),i),null===(t=e.children[0])||void 0===t||t.setAttribute("aria-selected",i?"true":"false");for(const t of["isBeforePrev","isPrev","isNext","isAfterNext"])P(e,this.cn(t));h++}if(c=c||l.firstChild,o&&c){const t=c.previousElementSibling,e=t&&t.previousElementSibling;C(t,this.cn("isPrev")),C(e,this.cn("isBeforePrev"));const i=c.nextElementSibling,n=i&&i.nextElementSibling;C(i,this.cn("isNext")),C(n,this.cn("isAfterNext"))}this.isDynamic=o}createItem(t=0){var e;const i=document.createElement("li");i.setAttribute("role","presentation");const n=s(this.instance.localize(this.option("dotTpl"),[["%d",t+1]]).replace(/\%i/g,t+""));return i.appendChild(n),null===(e=i.children[0])||void 0===e||e.setAttribute("role","tab"),i}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,P(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(X,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:W});const q="disabled",Y="next",V="prev";class Z extends ${constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isDom",{enumerable:!0,configurable:!0,writable:!0,value:!1})}onRefresh(){const t=this.instance,e=t.pages.length,i=t.page;if(e<2)return void this.cleanup();this.build();let n=this.prev,s=this.next;n&&s&&(n.removeAttribute(q),s.removeAttribute(q),t.isInfinite||(i<=0&&n.setAttribute(q,""),i>=e-1&&s.setAttribute(q,"")))}addBtn(t){var e;const i=this.instance,n=document.createElement("button");n.setAttribute("tabindex","0"),n.setAttribute("title",i.localize(`{{${t.toUpperCase()}}}`)),C(n,this.cn("button")+" "+this.cn(t===Y?"isNext":"isPrev"));const s=i.isRTL?t===Y?V:Y:t;var o;return n.innerHTML=i.localize(this.option(`${s}Tpl`)),n.dataset[`carousel${o=t,o?o.match("^[a-z]")?o.charAt(0).toUpperCase()+o.substring(1):o:""}`]="true",null===(e=this.container)||void 0===e||e.appendChild(n),n}build(){const t=this.instance.container,e=this.cn("container");let{container:i,prev:n,next:s}=this;i||(i=t.querySelector("."+e),this.isDom=!!i),i||(i=document.createElement("div"),C(i,e),t.appendChild(i)),this.container=i,s||(s=i.querySelector("[data-carousel-next]")),s||(s=this.addBtn(Y)),this.next=s,n||(n=i.querySelector("[data-carousel-prev]")),n||(n=this.addBtn(V)),this.prev=n}cleanup(){this.isDom||(this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove()),this.prev=null,this.next=null,this.container=null,this.isDom=!1}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(Z,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class U extends ${constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(t){this.target=this.instance,this.nav=t,this.attachEvents()}addAsNavFor(t){this.nav=this.instance,this.target=t,this.attachEvents()}attachEvents(){const{nav:t,target:e}=this;t&&e&&(t.options.initialSlide=e.options.initialPage,t.state===H.Ready?this.onNavReady(t):t.on("ready",this.onNavReady),e.state===H.Ready?this.onTargetReady(e):e.on("ready",this.onTargetReady))}onNavReady(t){t.on("createSlide",this.onNavCreateSlide),t.on("Panzoom.click",this.onNavClick),t.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(t){t.on("change",this.onTargetChange),t.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(t,e,i){this.onNavTouch(t,t.panzoom,i)}onNavTouch(t,e,i){var n,s;if(Math.abs(e.dragOffset.x)>3||Math.abs(e.dragOffset.y)>3)return;const o=i.target,{nav:a,target:r}=this;if(!a||!r||!o)return;const l=o.closest("[data-index]");if(i.stopPropagation(),i.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=r.getPageForSlide(c),d=a.getPageForSlide(c);a.slideTo(d),r.slideTo(h,{friction:(null===(s=null===(n=this.nav)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.Sync.option("friction"))||0}),this.markSelectedSlide(c)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){var t,e;const{target:i,nav:n}=this;if(!i||!n)return;if(n.state!==H.Ready||i.state!==H.Ready)return;const s=null===(e=null===(t=i.pages[i.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index,o=n.getPageForSlide(s);this.markSelectedSlide(s),n.slideTo(o,null===n.prevPage&&null===i.prevPage?{friction:0}:void 0)}markSelectedSlide(t){const e=this.nav;e&&e.state===H.Ready&&(this.selectedIndex=t,[...e.slides].map((e=>{e.el&&e.el.classList[e.index===t?"add":"remove"]("is-nav-selected")})))}attach(){const t=this;let e=t.options.target,i=t.options.nav;e?t.addAsNavFor(e):i&&t.addAsTargetFor(i)}detach(){const t=this,e=t.nav,i=t.target;e&&(e.off("ready",t.onNavReady),e.off("createSlide",t.onNavCreateSlide),e.off("Panzoom.click",t.onNavClick),e.off("Panzoom.touchEnd",t.onNavTouch)),t.nav=null,i&&(i.off("ready",t.onTargetReady),i.off("refresh",t.onTargetChange),i.off("change",t.onTargetChange)),t.target=null}}Object.defineProperty(U,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const G={Navigation:Z,Dots:X,Sync:U},K="animationend",J="isSelected",Q="slide";class tt extends m{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===H.Ready}get isInfinite(){let t=!1;const{contentDim:e,viewportDim:i,pages:n,slides:s}=this,o=s[0];return n.length>=2&&o&&e+o.dim>=i&&(t=this.option("infinite")),t}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(t,e={},i={}){if(super(),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:H.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof t&&(t=document.querySelector(t)),!t||!S(t))throw new Error("No Element found");this.container=t,this.slideNext=F(this.slideNext.bind(this),150),this.slidePrev=F(this.slidePrev.bind(this),150),this.userOptions=e,this.userPlugins=i,queueMicrotask((()=>{this.processOptions()}))}processOptions(){var t,e;const i=p({},tt.defaults,this.userOptions);let n="";const s=i.breakpoints;if(s&&u(s))for(const[t,e]of Object.entries(s))window.matchMedia(t).matches&&u(e)&&(n+=t,p(i,e));n===this.bp&&this.state!==H.Init||(this.bp=n,this.state===H.Ready&&(i.initialSlide=(null===(e=null===(t=this.pages[this.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index)||0),this.state!==H.Init&&this.destroy(),super.setOptions(i),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=H.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},tt.Plugins),this.userPlugins)),this.emit("attachPlugins"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=H.Ready,this.emit("ready")}initLayout(){const{container:t}=this,e=this.option("classes");C(t,this.cn("container")),a(t,e.isLTR,!this.isRTL),a(t,e.isRTL,this.isRTL),a(t,e.isVertical,!this.isHorizontal),a(t,e.isHorizontal,this.isHorizontal);let i=this.option("viewport")||t.querySelector(`.${e.viewport}`);i||(i=document.createElement("div"),C(i,e.viewport),i.append(...j(t,`.${e.slide}`)),t.prepend(i)),i.addEventListener("scroll",this.onScroll);let n=this.option("track")||t.querySelector(`.${e.track}`);n||(n=document.createElement("div"),C(n,e.track),n.append(...Array.from(i.childNodes))),n.setAttribute("aria-live","polite"),i.contains(n)||i.prepend(n),this.viewport=i,this.track=n,this.emit("initLayout")}initSlides(){const{track:t}=this;if(!t)return;const e=[...this.slides],i=[];[...j(t,`.${this.cn(Q)}`)].forEach((t=>{if(S(t)){const e=N({el:t,isDom:!0,index:this.slides.length});i.push(e)}}));for(let t of[...this.option("slides",[])||[],...e])i.push(N(t));this.slides=i;for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of i)this.emit("beforeInitSlide",t,t.index),this.emit("initSlide",t,t.index);this.emit("initSlides")}setInitialPage(){const t=this.option("initialSlide");this.page="number"==typeof t?this.getPageForSlide(t):parseInt(this.option("initialPage",0)+"",10)||0}setInitialPosition(){const{track:t,pages:e,isHorizontal:i}=this;if(!t||!e.length)return;let n=this.page;e[n]||(this.page=n=0);const s=(e[n].pos||0)*(this.isRTL&&i?1:-1),o=i?`${s}px`:"0",a=i?"0":`${s}px`;t.style.transform=`translate3d(${o}, ${a}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const t=this.option("Panzoom")||{};this.panzoom=new D(this.viewport,p({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:t=>!(this.pages.length<2&&!t.options.infinite),bounds:()=>this.getBounds(),maxVelocity:t=>Math.abs(t.target[this.axis]-t.current[this.axis])<2*this.viewportDim?100:0},t)),this.panzoom.on("*",((t,e,...i)=>{this.emit(`Panzoom.${e}`,t,...i)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let t=[];const{contentDim:e,viewportDim:i}=this;let n=this.option("slidesPerPage");n=("auto"===n||e<=i)&&!1!==this.option("fill")?1/0:parseFloat(n+"");let s=0,o=0,a=0;for(const e of this.slides)(!t.length||o+e.dim-i>.05||a>=n)&&(t.push(_()),s=t.length-1,o=0,a=0),t[s].slides.push(e),o+=e.dim+e.gap,a++;return t}processPages(){const t=this.pages,{contentDim:i,viewportDim:n,isInfinite:s}=this,o=this.option("center"),a=this.option("fill"),r=a&&o&&i>n&&!s;if(t.forEach(((t,e)=>{var s;t.index=e,t.pos=(null===(s=t.slides[0])||void 0===s?void 0:s.pos)||0,t.dim=0;for(const[e,i]of t.slides.entries())t.dim+=i.dim,e<t.slides.length-1&&(t.dim+=i.gap);r&&t.pos+.5*t.dim<.5*n?t.pos=0:r&&t.pos+.5*t.dim>=i-.5*n?t.pos=i-n:o&&(t.pos+=-.5*(n-t.dim))})),t.forEach((t=>{a&&!s&&i>n&&(t.pos=Math.max(t.pos,0),t.pos=Math.min(t.pos,i-n)),t.pos=e(t.pos,1e3),t.dim=e(t.dim,1e3),Math.abs(t.pos)<=.1&&(t.pos=0)})),s)return t;const l=[];let c;return t.forEach((t=>{const e=Object.assign({},t);c&&e.pos===c.pos?(c.dim+=e.dim,c.slides=[...c.slides,...e.slides]):(e.index=l.length,c=e,l.push(e))})),l}getPageFromIndex(t=0){const e=this.pages.length;let i;return t=parseInt((t||0).toString())||0,i=this.isInfinite?(t%e+e)%e:Math.max(Math.min(t,e-1),0),i}getSlideMetrics(t){var i,n;const s=this.isHorizontal?"width":"height";let o=0,a=0,r=t.el;const l=!(!r||r.parentNode);if(r?o=parseFloat(r.dataset[s]||"")||0:(r=document.createElement("div"),r.style.visibility="hidden",(this.track||document.body).prepend(r)),C(r,this.cn(Q)+" "+t.class+" "+t.customClass),o)r.style[s]=`${o}px`,r.style["width"===s?"height":"width"]="";else{l&&(this.track||document.body).prepend(r),o=r.getBoundingClientRect()[s]*Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1);let t=r[this.isHorizontal?"offsetWidth":"offsetHeight"];t-1>o&&(o=t)}const c=getComputedStyle(r);return"content-box"===c.boxSizing&&(this.isHorizontal?(o+=parseFloat(c.paddingLeft)||0,o+=parseFloat(c.paddingRight)||0):(o+=parseFloat(c.paddingTop)||0,o+=parseFloat(c.paddingBottom)||0)),a=parseFloat(c[this.isHorizontal?"marginRight":"marginBottom"])||0,l?null===(n=r.parentElement)||void 0===n||n.removeChild(r):t.el||r.remove(),{dim:e(o,1e3),gap:e(a,1e3)}}getBounds(){const{isInfinite:t,isRTL:e,isHorizontal:i,pages:n}=this;let s={min:0,max:0};if(t)s={min:-1/0,max:1/0};else if(n.length){const t=n[0].pos,o=n[n.length-1].pos;s=e&&i?{min:t,max:o}:{min:-1*o,max:-1*t}}return{x:i?s:{min:0,max:0},y:i?{min:0,max:0}:s}}repositionSlides(){let t,{isHorizontal:i,isRTL:n,isInfinite:s,viewport:o,viewportDim:a,contentDim:r,page:l,pages:c,slides:h,panzoom:d}=this,u=0,p=0,f=0,g=0;d?g=-1*d.current[this.axis]:c[l]&&(g=c[l].pos||0),t=i?n?"right":"left":"top",n&&i&&(g*=-1);for(const i of h){const n=i.el;n?("top"===t?(n.style.right="",n.style.left=""):n.style.top="",i.index!==u?n.style[t]=0===p?"":`${e(p,1e3)}px`:n.style[t]="",f+=i.dim+i.gap,u++):p+=i.dim+i.gap}if(s&&f&&o){let n=getComputedStyle(o),s="padding",l=i?"Right":"Bottom",c=parseFloat(n[s+(i?"Left":"Top")]);g-=c,a+=c,a+=parseFloat(n[s+l]);for(const i of h)i.el&&(e(i.pos)<e(a)&&e(i.pos+i.dim+i.gap)<e(g)&&e(g)>e(r-a)&&(i.el.style[t]=`${e(p+f,1e3)}px`),e(i.pos+i.gap)>=e(r-a)&&e(i.pos)>e(g+a)&&e(g)<e(a)&&(i.el.style[t]=`-${e(f,1e3)}px`))}let m,v,b=[...this.inTransition];if(b.length>1&&(m=c[b[0]],v=c[b[1]]),m&&v){let i=0;for(const n of h)n.el?this.inTransition.has(n.index)&&m.slides.indexOf(n)<0&&(n.el.style[t]=`${e(i+(m.pos-v.pos),1e3)}px`):i+=n.dim+n.gap}}createSlideEl(t){const{track:e,slides:i}=this;if(!e||!t)return;if(t.el&&t.el.parentNode)return;const n=t.el||document.createElement("div");C(n,this.cn(Q)),C(n,t.class),C(n,t.customClass);const s=t.html;s&&(s instanceof HTMLElement?n.appendChild(s):n.innerHTML=t.html+"");const o=[];i.forEach(((t,e)=>{t.el&&o.push(e)}));const a=t.index;let r=null;if(o.length){r=i[o.reduce(((t,e)=>Math.abs(e-a)<Math.abs(t-a)?e:t))]}const l=r&&r.el&&r.el.parentNode?r.index<t.index?r.el.nextSibling:r.el:null;e.insertBefore(n,e.contains(l)?l:null),t.el=n,this.emit("createSlide",t)}removeSlideEl(t,e=!1){const i=null==t?void 0:t.el;if(!i||!i.parentNode)return;const n=this.cn(J);if(i.classList.contains(n)&&(P(i,n),this.emit("unselectSlide",t)),t.isDom&&!e)return i.removeAttribute("aria-hidden"),i.removeAttribute("data-index"),void(i.style.left="");this.emit("removeSlide",t);const s=new CustomEvent(K);i.dispatchEvent(s),t.el&&(t.el.remove(),t.el=null)}transitionTo(t=0,e=this.option("transition")){var i,n,s,o;if(!e)return!1;const a=this.page,{pages:r,panzoom:l}=this;t=parseInt((t||0).toString())||0;const c=this.getPageFromIndex(t);if(!l||!r[c]||r.length<2||Math.abs(((null===(n=null===(i=r[a])||void 0===i?void 0:i.slides[0])||void 0===n?void 0:n.dim)||0)-this.viewportDim)>1)return!1;let h=t>a?1:-1;this.isInfinite&&(0===a&&t===r.length-1&&(h=-1),a===r.length-1&&0===t&&(h=1));const d=r[c].pos*(this.isRTL?1:-1);if(a===c&&Math.abs(d-l.target[this.axis])<1)return!1;this.clearTransitions();const u=l.isResting;C(this.container,this.cn("inTransition"));const p=(null===(s=r[a])||void 0===s?void 0:s.slides[0])||null,f=(null===(o=r[c])||void 0===o?void 0:o.slides[0])||null;this.inTransition.add(f.index),this.createSlideEl(f);let g=p.el,m=f.el;u||e===Q||(e="fadeFast",g=null);const v=this.isRTL?"next":"prev",b=this.isRTL?"prev":"next";return g&&(this.inTransition.add(p.index),p.transition=e,g.addEventListener(K,this.onAnimationEnd),g.classList.add(`f-${e}Out`,`to-${h>0?b:v}`)),m&&(f.transition=e,m.addEventListener(K,this.onAnimationEnd),m.classList.add(`f-${e}In`,`from-${h>0?v:b}`)),l.current[this.axis]=d,l.target[this.axis]=d,l.requestTick(),this.onChange(c),!0}manageSlideVisiblity(){const t=new Set,e=new Set,i=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const n of this.slides)i.has(n)?t.add(n):e.add(n);for(const e of this.inTransition)t.add(this.slides[e]);for(const e of t)this.createSlideEl(e),this.lazyLoadSlide(e);for(const i of e)t.has(i)||this.removeSlideEl(i);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const t="aria-hidden";let e=this.cn(J);if(e)for(const i of this.slides){const n=i.el;n&&(n.dataset.index=`${i.index}`,n.classList.contains("f-thumbs__slide")?this.getVisibleSlides(0).has(i)?n.removeAttribute(t):n.setAttribute(t,"true"):this.pages[this.page].slides.includes(i)?(n.classList.contains(e)||(C(n,e),this.emit("selectSlide",i)),n.removeAttribute(t)):(n.classList.contains(e)&&(P(n,e),this.emit("unselectSlide",i)),n.setAttribute(t,"true")))}}flipInfiniteTrack(){const{axis:t,isHorizontal:e,isInfinite:i,isRTL:n,viewportDim:s,contentDim:o}=this,a=this.panzoom;if(!a||!i)return;let r=a.current[t],l=a.target[t]-r,c=0,h=.5*s;n&&e?(r<-h&&(c=-1,r+=o),r>o-h&&(c=1,r-=o)):(r>h&&(c=1,r-=o),r<-o+h&&(c=-1,r+=o)),c&&(a.current[t]=r,a.target[t]=r+l)}lazyLoadImg(t,e){const i=this,n="f-fadeIn",o="is-preloading";let a=!1,r=null;const l=()=>{a||(a=!0,r&&(r.remove(),r=null),P(e,o),e.complete&&(C(e,n),setTimeout((()=>{P(e,n)}),350)),this.option("adaptiveHeight")&&t.el&&this.pages[this.page].slides.indexOf(t)>-1&&(i.updateMetrics(),i.setViewportHeight()),this.emit("load",t))};C(e,o),e.src=e.dataset.lazySrcset||e.dataset.lazySrc||"",delete e.dataset.lazySrc,delete e.dataset.lazySrcset,e.addEventListener("error",(()=>{l()})),e.addEventListener("load",(()=>{l()})),setTimeout((()=>{const i=e.parentNode;i&&t.el&&(e.complete?l():a||(r=s(E),i.insertBefore(r,e)))}),300)}lazyLoadSlide(t){const e=t&&t.el;if(!e)return;const i=new Set;let n=Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));e.dataset.lazySrc&&n.push(e),n.map((t=>{t instanceof HTMLImageElement?i.add(t):t instanceof HTMLElement&&t.dataset.lazySrc&&(t.style.backgroundImage=`url('${t.dataset.lazySrc}')`,delete t.dataset.lazySrc)}));for(const e of i)this.lazyLoadImg(t,e)}onAnimationEnd(t){var e;const i=t.target,n=i?parseInt(i.dataset.index||"",10)||0:-1,s=this.slides[n],o=t.animationName;if(!i||!s||!o)return;const a=!!this.inTransition.has(n)&&s.transition;a&&o.substring(0,a.length+2)===`f-${a}`&&this.inTransition.delete(n),this.inTransition.size||this.clearTransitions(),n===this.page&&(null===(e=this.panzoom)||void 0===e?void 0:e.isResting)&&this.emit("settle")}onDecel(t,e=0,i=0,n=0,s=0){if(this.option("dragFree"))return void this.setPageFromPosition();const{isRTL:o,isHorizontal:a,axis:r,pages:l}=this,c=l.length,h=Math.abs(Math.atan2(i,e)/(Math.PI/180));let d=0;if(d=h>45&&h<135?a?0:i:a?e:0,!c)return;let u=this.page,p=o&&a?1:-1;const f=t.current[r]*p;let{pageIndex:g}=this.getPageFromPosition(f);Math.abs(d)>5?(l[u].dim<document.documentElement["client"+(this.isHorizontal?"Width":"Height")]-1&&(u=g),u=o&&a?d<0?u-1:u+1:d<0?u+1:u-1):u=0===n&&0===s?u:g,this.slideTo(u,{transition:!1,friction:t.option("decelFriction")})}onClick(t){const e=t.target,i=e&&S(e)?e.dataset:null;let n,s;i&&(void 0!==i.carouselPage?(s="slideTo",n=i.carouselPage):void 0!==i.carouselNext?s="slideNext":void 0!==i.carouselPrev&&(s="slidePrev")),s?(t.preventDefault(),t.stopPropagation(),e&&!e.hasAttribute("disabled")&&this[s](n)):this.emit("click",t)}onSlideTo(t){const e=t.detail||0;this.slideTo(this.getPageForSlide(e),{friction:0})}onChange(t,e=0){const i=this.page;this.prevPage=i,this.page=t,this.option("adaptiveHeight")&&this.setViewportHeight(),t!==i&&(this.markSelectedSlides(),this.emit("change",t,i,e))}onRefresh(){let t=this.contentDim,e=this.viewportDim;this.updateMetrics(),this.contentDim===t&&this.viewportDim===e||this.slideTo(this.page,{friction:0,transition:!1})}onScroll(){var t;null===(t=this.viewport)||void 0===t||t.scroll(0,0)}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(t){this.lp!==t.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=t.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(t=null,e=null){this.destroy(),this.state=H.Init,this.prevPage=null,this.userOptions=t||this.userOptions,this.userPlugins=e||this.userPlugins,this.processOptions()}slideTo(t=0,{friction:e=this.option("friction"),transition:i=this.option("transition")}={}){if(this.state===H.Destroy)return;t=parseInt((t||0).toString())||0;const n=this.getPageFromIndex(t),{axis:s,isHorizontal:o,isRTL:a,pages:r,panzoom:l}=this,c=r.length,h=a&&o?1:-1;if(!l||!c)return;if(this.page!==n){const e=new Event("beforeChange",{bubbles:!0,cancelable:!0});if(this.emit("beforeChange",e,t),e.defaultPrevented)return}if(this.transitionTo(t,i))return;let d=r[n].pos;if(this.isInfinite){const e=this.contentDim,i=l.target[s]*h;if(2===c)d+=e*Math.floor(parseFloat(t+"")/2);else{d=[d,d-e,d+e].reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}))}}d*=h,Math.abs(l.target[s]-d)<1||(l.panTo({x:o?d:0,y:o?0:d,friction:e}),this.onChange(n))}slideToClosest(t){if(this.panzoom){const{pageIndex:e}=this.getPageFromPosition();this.slideTo(e,t)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),P(this.container,this.cn("inTransition"));const t=["to-prev","to-next","from-prev","from-next"];for(const e of this.slides){const i=e.el;if(i){i.removeEventListener(K,this.onAnimationEnd),i.classList.remove(...t);const n=e.transition;n&&i.classList.remove(`f-${n}Out`,`f-${n}In`)}}this.manageSlideVisiblity()}addSlide(t,e){var i,n,s,o;const a=this.panzoom,r=(null===(i=this.pages[this.page])||void 0===i?void 0:i.pos)||0,l=(null===(n=this.pages[this.page])||void 0===n?void 0:n.dim)||0,c=this.contentDim<this.viewportDim;let h=Array.isArray(e)?e:[e];const d=[];for(const t of h)d.push(N(t));this.slides.splice(t,0,...d);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of d)this.emit("beforeInitSlide",t,t.index);if(this.page>=t&&(this.page+=d.length),this.updateMetrics(),a){const e=(null===(s=this.pages[this.page])||void 0===s?void 0:s.pos)||0,i=(null===(o=this.pages[this.page])||void 0===o?void 0:o.dim)||0,n=this.pages.length||1,h=this.isRTL?l-i:i-l,d=this.isRTL?r-e:e-r;c&&1===n?(t<=this.page&&(a.current[this.axis]-=h,a.target[this.axis]-=h),a.panTo({[this.isHorizontal?"x":"y"]:-1*e})):d&&t<=this.page&&(a.target[this.axis]-=d,a.current[this.axis]-=d,a.requestTick())}for(const t of d)this.emit("initSlide",t,t.index)}prependSlide(t){this.addSlide(0,t)}appendSlide(t){this.addSlide(this.slides.length,t)}removeSlide(t){const e=this.slides.length;t=(t%e+e)%e;const i=this.slides[t];if(i){this.removeSlideEl(i,!0),this.slides.splice(t,1);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1}),this.emit("destroySlide",i)}}updateMetrics(){const{panzoom:t,viewport:i,track:n,slides:s,isHorizontal:o,isInfinite:a}=this;if(!n)return;const r=o?"width":"height",l=o?"offsetWidth":"offsetHeight";if(i){let t=Math.max(i[l],e(i.getBoundingClientRect()[r],1e3)),n=getComputedStyle(i),s="padding",a=o?"Right":"Bottom";t-=parseFloat(n[s+(o?"Left":"Top")])+parseFloat(n[s+a]),this.viewportDim=t}let c,h=0;for(const[t,i]of s.entries()){let n=0,o=0;!i.el&&c?(n=c.dim,o=c.gap):(({dim:n,gap:o}=this.getSlideMetrics(i)),c=i),n=e(n,1e3),o=e(o,1e3),i.dim=n,i.gap=o,i.pos=h,h+=n,(a||t<s.length-1)&&(h+=o)}h=e(h,1e3),this.contentDim=h,t&&(t.contentRect[r]=h,t.contentRect[o?"fullWidth":"fullHeight"]=h),this.pages=this.createPages(),this.pages=this.processPages(),this.state===H.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(t,i=!1,n=!1){void 0===t&&(t=this.page);const s=this,o=s.panzoom,a=s.contentDim,r=s.pages[t]||0;if(!r||!o)return t>this.page?-1:1;let l=-1*o.current.e,c=e((l-r.pos)/(1*r.dim),1e3),h=c,d=c;this.isInfinite&&!0!==n&&(h=e((l-r.pos+a)/(1*r.dim),1e3),d=e((l-r.pos-a)/(1*r.dim),1e3));let u=[c,h,d].reduce((function(t,e){return Math.abs(e)<Math.abs(t)?e:t}));return i?u:u>1?1:u<-1?-1:u}setViewportHeight(){const{page:t,pages:e,viewport:i,isHorizontal:n}=this;if(!i||!e[t])return;let s=0;n&&this.track&&(this.track.style.height="auto",e[t].slides.forEach((t=>{t.el&&(s=Math.max(s,t.el.offsetHeight))}))),i.style.height=s?`${s}px`:""}getPageForSlide(t){for(const e of this.pages)for(const i of e.slides)if(i.index===t)return e.index;return-1}getVisibleSlides(t=0){var e;const i=new Set;let{panzoom:n,contentDim:s,viewportDim:o,pages:a,page:r}=this;if(o){s=s+(null===(e=this.slides[this.slides.length-1])||void 0===e?void 0:e.gap)||0;let l=0;l=n&&n.state!==v.Init&&n.state!==v.Destroy?-1*n.current[this.axis]:a[r]&&a[r].pos||0,this.isInfinite&&(l-=Math.floor(l/s)*s),this.isRTL&&this.isHorizontal&&(l*=-1);const c=l-o*t,h=l+o*(t+1),d=this.isInfinite?[-1,0,1]:[0];for(const t of this.slides)for(const e of d){const n=t.pos+e*s,o=n+t.dim+t.gap;n<h&&o>c&&i.add(t)}}return i}getPageFromPosition(t){const{viewportDim:e,contentDim:i,slides:n,pages:s,panzoom:o}=this,a=s.length,r=n.length,l=n[0],c=n[r-1],h=this.option("center");let d=0,u=0,p=0,f=void 0===t?-1*((null==o?void 0:o.target[this.axis])||0):t;h&&(f+=.5*e),this.isInfinite?(f<l.pos-.5*c.gap&&(f-=i,p=-1),f>c.pos+c.dim+.5*c.gap&&(f-=i,p=1)):f=Math.max(l.pos||0,Math.min(f,c.pos));let g=c,m=n.find((t=>{const e=t.pos-.5*g.gap,i=t.pos+t.dim+.5*t.gap;return g=t,f>=e&&f<i}));return m||(m=c),u=this.getPageForSlide(m.index),d=u+p*a,{page:d,pageIndex:u}}setPageFromPosition(){const{pageIndex:t}=this.getPageFromPosition();this.onChange(t)}destroy(){if([H.Destroy].includes(this.state))return;this.state=H.Destroy;const{container:t,viewport:e,track:i,slides:n,panzoom:s}=this,o=this.option("classes");t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),n&&n.forEach((t=>{this.removeSlideEl(t)})),this.detachPlugins(),e&&(e.removeEventListener("scroll",this.onScroll),e.offsetParent&&i&&i.offsetParent&&e.replaceWith(...i.childNodes));for(const[e,i]of Object.entries(o))"container"!==e&&i&&t.classList.remove(i);this.track=null,this.viewport=null,this.page=0,this.slides=[];const a=this.events.get("ready");this.events=new Map,a&&this.events.set("ready",a)}}Object.defineProperty(tt,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:D}),Object.defineProperty(tt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:B}),Object.defineProperty(tt,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:G});const et=function(t){if(!S(t))return 0;const e=window.scrollY,i=window.innerHeight,n=e+i,s=t.getBoundingClientRect(),o=s.y+e,a=s.height,r=o+a;if(e>r||n<o)return 0;if(e<o&&n>r)return 100;if(o<e&&r>n)return 100;let l=a;o<e&&(l-=e-o),r>n&&(l-=r-n);const c=l/i*100;return Math.round(c)},it=!("undefined"==typeof window||!window.document||!window.document.createElement);let nt;const st=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),ot=t=>{if(t&&it){void 0===nt&&document.createElement("div").focus({get preventScroll(){return nt=!0,!1}});try{if(nt)t.focus({preventScroll:!0});else{const e=window.scrollY||document.body.scrollTop,i=window.scrollX||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},at=()=>{const t=document;let e,i="",n="",s="";return t.fullscreenEnabled?(i="requestFullscreen",n="exitFullscreen",s="fullscreenElement"):t.webkitFullscreenEnabled&&(i="webkitRequestFullscreen",n="webkitExitFullscreen",s="webkitFullscreenElement"),i&&(e={request:function(e=t.documentElement){return"webkitRequestFullscreen"===i?e[i](Element.ALLOW_KEYBOARD_INPUT):e[i]()},exit:function(){return t[s]&&t[n]()},isFullscreen:function(){return t[s]}}),e},rt={animated:!0,autoFocus:!0,backdropClick:"close",Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},closeButton:"auto",closeExisting:!1,commonCaption:!1,compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,contentClick:"toggleZoom",contentDblClick:!1,defaultType:"image",defaultDisplay:"block",dragToClose:!0,Fullscreen:{autoStart:!1},groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,idle:3500,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:Object.assign(Object.assign({},y),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),parentEl:null,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},trapFocus:!0,wheel:"zoom"};var lt,ct;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.CustomClosing=3]="CustomClosing",t[t.Destroy=4]="Destroy"}(lt||(lt={})),function(t){t[t.Loading=0]="Loading",t[t.Opening=1]="Opening",t[t.Ready=2]="Ready",t[t.Closing=3]="Closing"}(ct||(ct={}));let ht="",dt=!1,ut=!1,pt=null;const ft=()=>{let t="",e="";const i=Ae.getInstance();if(i){const n=i.carousel,s=i.getSlide();if(n&&s){let o=s.slug||void 0,a=s.triggerEl||void 0;e=o||(i.option("slug")||""),!e&&a&&a.dataset&&(e=a.dataset.fancybox||""),e&&"true"!==e&&(t="#"+e+(!o&&n.slides.length>1?"-"+(s.index+1):""))}}return{hash:t,slug:e,index:1}},gt=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),i=e[e.length-1],n=i&&/^\+?\d+$/.test(i)&&parseInt(e.pop()||"1",10)||1;return{hash:t,slug:e.join("-"),index:n}},mt=()=>{const{slug:t,index:e}=gt();if(!t)return;let i=document.querySelector(`[data-slug="${t}"]`);if(i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),Ae.getInstance())return;const n=document.querySelectorAll(`[data-fancybox="${t}"]`);n.length&&(i=n[e-1],i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))},vt=()=>{if(!1===Ae.defaults.Hash)return;const t=Ae.getInstance();if(!1===(null==t?void 0:t.options.Hash))return;const{slug:e,index:i}=gt(),{slug:n}=ft();t&&(e===n?t.jumpTo(i-1):(dt=!0,t.close())),mt()},bt=()=>{pt&&clearTimeout(pt),queueMicrotask((()=>{vt()}))},yt=()=>{window.addEventListener("hashchange",bt,!1),setTimeout((()=>{vt()}),500)};it&&(/complete|interactive|loaded/.test(document.readyState)?yt():document.addEventListener("DOMContentLoaded",yt));const wt="is-zooming-in";class xt extends ${onCreateSlide(t,e,i){const n=this.instance.optionFor(i,"src")||"";i.el&&"image"===i.type&&"string"==typeof n&&this.setImage(i,n)}onRemoveSlide(t,e,i){i.panzoom&&i.panzoom.destroy(),i.panzoom=void 0,i.imageEl=void 0}onChange(t,e,i,n){P(this.instance.container,wt);for(const t of e.slides){const e=t.panzoom;e&&t.index!==i&&e.reset(.35)}}onClose(){var t;const e=this.instance,i=e.container,n=e.getSlide();if(!i||!i.parentElement||!n)return;const{el:s,contentEl:o,panzoom:a,thumbElSrc:r}=n;if(!s||!r||!o||!a||a.isContentLoading||a.state===v.Init||a.state===v.Destroy)return;a.updateMetrics();let l=this.getZoomInfo(n);if(!l)return;this.instance.state=lt.CustomClosing,i.classList.remove(wt),i.classList.add("is-zooming-out"),o.style.backgroundImage=`url('${r}')`;const c=i.getBoundingClientRect();1===((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)&&Object.assign(i.style,{position:"absolute",top:`${i.offsetTop+window.scrollY}px`,left:`${i.offsetLeft+window.scrollX}px`,bottom:"auto",right:"auto",width:`${c.width}px`,height:`${c.height}px`,overflow:"hidden"});const{x:h,y:d,scale:u,opacity:p}=l;if(p){const t=((t,e,i,n)=>{const s=e-t,o=n-i;return e=>i+((e-t)/s*o||0)})(a.scale,u,1,0);a.on("afterTransform",(()=>{o.style.opacity=t(a.scale)+""}))}a.on("endAnimation",(()=>{e.destroy()})),a.target.a=u,a.target.b=0,a.target.c=0,a.target.d=u,a.panTo({x:h,y:d,scale:u,friction:p?.2:.33,ignoreBounds:!0}),a.isResting&&e.destroy()}setImage(t,e){const i=this.instance;t.src=e,this.process(t,e).then((e=>{const{contentEl:n,imageEl:s,thumbElSrc:o,el:a}=t;if(i.isClosing()||!n||!s)return;n.offsetHeight;const r=!!i.isOpeningSlide(t)&&this.getZoomInfo(t);if(this.option("protected")&&a){a.addEventListener("contextmenu",(t=>{t.preventDefault()}));const t=document.createElement("div");C(t,"fancybox-protected"),n.appendChild(t)}if(o&&r){const s=e.contentRect,a=Math.max(s.fullWidth,s.fullHeight);let c=null;!r.opacity&&a>1200&&(c=document.createElement("img"),C(c,"fancybox-ghost"),c.src=o,n.appendChild(c));const h=()=>{c&&(C(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=o,new Promise(((t,e)=>{const i=new Image;i.onload=t,i.onerror=e,i.src=l}))).then((()=>{i.hideLoading(t),t.state=ct.Opening,this.instance.emit("reveal",t),this.zoomIn(t).then((()=>{h(),this.instance.done(t)}),(()=>{})),c&&setTimeout((()=>{h()}),a>2500?800:200)}),(()=>{i.hideLoading(t),i.revealContent(t)}))}else{const n=this.optionFor(t,"initialSize"),s=this.optionFor(t,"zoom"),o={event:i.prevMouseMoveEvent||i.options.event,friction:s?.12:0};let a=i.optionFor(t,"showClass")||void 0,r=!0;i.isOpeningSlide(t)&&("full"===n?e.zoomToFull(o):"cover"===n?e.zoomToCover(o):"max"===n?e.zoomToMax(o):r=!1,e.stop("current")),r&&a&&(a=e.isDragging?"f-fadeIn":""),i.hideLoading(t),i.revealContent(t,a)}var l}),(()=>{i.setError(t,"{{IMAGE_ERROR}}")}))}process(t,e){return new Promise(((i,n)=>{var o;const a=this.instance,r=t.el;a.clearContent(t),a.showLoading(t);let l=this.optionFor(t,"content");if("string"==typeof l&&(l=s(l)),!l||!S(l)){if(l=document.createElement("img"),l instanceof HTMLImageElement){let i="",n=t.caption;i="string"==typeof n&&n?n.replace(/<[^>]+>/gi,"").substring(0,1e3):`Image ${t.index+1} of ${(null===(o=a.carousel)||void 0===o?void 0:o.pages.length)||1}`,l.src=e||"",l.alt=i,l.draggable=!1,t.srcset&&l.setAttribute("srcset",t.srcset),this.instance.isOpeningSlide(t)&&(l.fetchPriority="high")}t.sizes&&l.setAttribute("sizes",t.sizes)}C(l,"fancybox-image"),t.imageEl=l,a.setContent(t,l,!1);t.panzoom=new D(r,p({transformParent:!0},this.option("Panzoom")||{},{content:l,width:(e,i)=>a.optionFor(t,"width","auto",i)||"auto",height:(e,i)=>a.optionFor(t,"height","auto",i)||"auto",wheel:()=>{const t=a.option("wheel");return("zoom"===t||"pan"==t)&&t},click:(e,i)=>{var n,s;if(a.isCompact||a.isClosing())return!1;if(t.index!==(null===(n=a.getSlide())||void 0===n?void 0:n.index))return!1;if(i){const t=i.composedPath()[0];if(["A","BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(t.nodeName))return!1}let o=!i||i.target&&(null===(s=t.contentEl)||void 0===s?void 0:s.contains(i.target));return a.option(o?"contentClick":"backdropClick")||!1},dblClick:()=>a.isCompact?"toggleZoom":a.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,on:{ready:t=>{i(t)},error:()=>{n()},destroy:()=>{n()}}}))}))}zoomIn(t){return new Promise(((e,i)=>{const n=this.instance,s=n.container,{panzoom:o,contentEl:a,el:r}=t;o&&o.updateMetrics();const l=this.getZoomInfo(t);if(!(l&&r&&a&&o&&s))return void i();const{x:c,y:h,scale:d,opacity:u}=l,p=()=>{t.state!==ct.Closing&&(u&&(a.style.opacity=Math.max(Math.min(1,1-(1-o.scale)/(1-d)),0)+""),o.scale>=1&&o.scale>o.targetScale-.1&&e(o))},f=t=>{(t.scale<.99||t.scale>1.01)&&!t.isDragging||(P(s,wt),a.style.opacity="",t.off("endAnimation",f),t.off("touchStart",f),t.off("afterTransform",p),e(t))};o.on("endAnimation",f),o.on("touchStart",f),o.on("afterTransform",p),o.on(["error","destroy"],(()=>{i()})),o.panTo({x:c,y:h,scale:d,friction:0,ignoreBounds:!0}),o.stop("current");const g={event:"mousemove"===o.panMode?n.prevMouseMoveEvent||n.options.event:void 0},m=this.optionFor(t,"initialSize");C(s,wt),n.hideLoading(t),"full"===m?o.zoomToFull(g):"cover"===m?o.zoomToCover(g):"max"===m?o.zoomToMax(g):o.reset(.172)}))}getZoomInfo(t){const{el:e,imageEl:i,thumbEl:n,panzoom:s}=t,o=this.instance,a=o.container;if(!e||!i||!n||!s||et(n)<3||!this.optionFor(t,"zoom")||!a||o.state===lt.Destroy)return!1;if("0"===getComputedStyle(a).getPropertyValue("--f-images-zoom"))return!1;const r=window.visualViewport||null;if(1!==(r?r.scale:1))return!1;let{top:l,left:c,width:h,height:d}=n.getBoundingClientRect(),{top:u,left:p,fitWidth:f,fitHeight:g}=s.contentRect;if(!(h&&d&&f&&g))return!1;const m=s.container.getBoundingClientRect();p+=m.left,u+=m.top;const v=-1*(p+.5*f-(c+.5*h)),b=-1*(u+.5*g-(l+.5*d)),y=h/f;let w=this.option("zoomOpacity")||!1;return"auto"===w&&(w=Math.abs(h/d-f/g)>.1),{x:v,y:b,scale:y,opacity:w}}attach(){const t=this,e=t.instance;e.on("Carousel.change",t.onChange),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.removeSlide",t.onRemoveSlide),e.on("close",t.onClose)}detach(){const t=this,e=t.instance;e.off("Carousel.change",t.onChange),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.removeSlide",t.onRemoveSlide),e.off("close",t.onClose)}}Object.defineProperty(xt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}}),"function"==typeof SuppressedError&&SuppressedError;const Et="html",St="image",Pt="map",Ct="youtube",Tt="vimeo",Mt="html5video",Ot=(t,e={})=>{const i=new URL(t),n=new URLSearchParams(i.search),s=new URLSearchParams;for(const[t,i]of[...n,...Object.entries(e)]){let e=i+"";if("t"===t){let t=e.match(/((\d*)m)?(\d*)s?/);t&&s.set("start",60*parseInt(t[2]||"0")+parseInt(t[3]||"0")+"")}else s.set(t,e)}let o=s+"",a=t.match(/#t=((.*)?\d+s)/);return a&&(o+=`#t=${a[1]}`),o},At={ajax:null,autoSize:!0,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!0,videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},Lt=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo"];class zt extends ${onBeforeInitSlide(t,e,i){this.processType(i)}onCreateSlide(t,e,i){this.setContent(i)}onClearContent(t,e){e.xhr&&(e.xhr.abort(),e.xhr=null);const i=e.iframeEl;i&&(i.onload=i.onerror=null,i.src="//about:blank",e.iframeEl=null);const n=e.contentEl,s=e.placeholderEl;if("inline"===e.type&&n&&s)n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none"),s.parentNode&&s.parentNode.insertBefore(n,s),s.remove(),e.contentEl=void 0,e.placeholderEl=void 0;else for(;e.el&&e.el.firstChild;)e.el.removeChild(e.el.firstChild)}onSelectSlide(t,e,i){i.state===ct.Ready&&this.playVideo()}onUnselectSlide(t,e,i){var n,s;if(i.type===Mt){try{null===(s=null===(n=i.el)||void 0===n?void 0:n.querySelector("video"))||void 0===s||s.pause()}catch(t){}return}let o;i.type===Tt?o={method:"pause",value:"true"}:i.type===Ct&&(o={event:"command",func:"pauseVideo"}),o&&i.iframeEl&&i.iframeEl.contentWindow&&i.iframeEl.contentWindow.postMessage(JSON.stringify(o),"*"),i.poller&&clearTimeout(i.poller)}onDone(t,e){t.isCurrentSlide(e)&&!t.isClosing()&&this.playVideo()}onRefresh(t,e){e.slides.forEach((t=>{t.el&&(this.resizeIframe(t),this.setAspectRatio(t))}))}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement&&e.contentWindow===t.source&&(e.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===e.event){const t=document.getElementById(e.id);t&&(t.dataset.ready="true")}}catch(t){}}loadAjaxContent(t){const e=this.instance.optionFor(t,"src")||"";this.instance.showLoading(t);const i=this.instance,n=new XMLHttpRequest;i.showLoading(t),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&i.state===lt.Ready&&(i.hideLoading(t),200===n.status?i.setContent(t,n.responseText):i.setError(t,404===n.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=t.ajax||null;n.open(s?"POST":"GET",e+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(s),t.xhr=n}setInlineContent(t){let e=null;if(S(t.src))e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2).pop();e=i?document.getElementById(i):null}if(e){if("clone"===t.type||e.closest(".fancybox__slide")){e=e.cloneNode(!0);const i=e.dataset.animationName;i&&(e.classList.remove(i),delete e.dataset.animationName);let n=e.getAttribute("id");n=n?`${n}--clone`:`clone-${this.instance.id}-${t.index}`,e.setAttribute("id",n)}else if(e.parentNode){const i=document.createElement("div");i.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(i,e),t.placeholderEl=i}this.instance.setContent(t,e)}else this.instance.setError(t,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(t){const{src:e,el:i}=t;if(!e||"string"!=typeof e||!i)return;i.classList.add("is-loading");const n=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${n.id}_${t.index}`);for(const[e,i]of Object.entries(this.optionFor(t,"iframeAttr")||{}))s.setAttribute(e,i);s.onerror=()=>{n.setError(t,"{{IFRAME_ERROR}}")},t.iframeEl=s;const o=this.optionFor(t,"preload");if("iframe"!==t.type||!1===o)return s.setAttribute("src",t.src+""),n.setContent(t,s,!1),this.resizeIframe(t),void n.revealContent(t);n.showLoading(t),s.onload=()=>{if(!s.src.length)return;const e="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(t),e?n.revealContent(t):n.hideLoading(t)},s.setAttribute("src",e),n.setContent(t,s,!1)}resizeIframe(t){const{type:e,iframeEl:i}=t;if(e===Ct||e===Tt)return;const n=null==i?void 0:i.parentElement;if(!i||!n)return;let s=t.autoSize;void 0===s&&(s=this.optionFor(t,"autoSize"));let o=t.width||0,a=t.height||0;o&&a&&(s=!1);const r=n&&n.style;if(!1!==t.preload&&!1!==s&&r)try{const t=window.getComputedStyle(n),e=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),l=i.contentWindow;if(l){const t=l.document,i=t.getElementsByTagName(Et)[0],n=t.body;r.width="",n.style.overflow="hidden",o=o||i.scrollWidth+e,r.width=`${o}px`,n.style.overflow="",r.flex="0 0 auto",r.height=`${n.scrollHeight}px`,a=i.scrollHeight+s}}catch(t){}if(o||a){const t={flex:"0 1 auto",width:"",height:""};o&&"auto"!==o&&(t.width=`${o}px`),a&&"auto"!==a&&(t.height=`${a}px`),Object.assign(r,t)}}playVideo(){const t=this.instance.getSlide();if(!t)return;const{el:e}=t;if(!e||!e.offsetParent)return;if(!this.optionFor(t,"videoAutoplay"))return;if(t.type===Mt)try{const t=e.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}if(t.type!==Ct&&t.type!==Tt)return;const i=()=>{if(t.iframeEl&&t.iframeEl.contentWindow){let e;if("true"===t.iframeEl.dataset.ready)return e=t.type===Ct?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);t.type===Ct&&(e={event:"listening",id:t.iframeEl.getAttribute("id")},t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(i,250)};i()}processType(t){if(t.html)return t.type=Et,t.src=t.html,void(t.html="");const e=this.instance.optionFor(t,"src","");if(!e||"string"!=typeof e)return;let i=t.type,n=null;if(n=e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(t,Ct),{nocookie:o}=s,a=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(s,["nocookie"]),r=`www.youtube${o?"-nocookie":""}.com`,l=Ot(e,a),c=encodeURIComponent(n[2]);t.videoId=c,t.src=`https://${r}/embed/${c}?${l}`,t.thumbSrc=t.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,i=Ct}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=Ot(e,this.optionFor(t,Tt)),o=encodeURIComponent(n[1]),a=n[4]||"";t.videoId=o,t.src=`https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`,i=Tt}if(!i&&t.triggerEl){const e=t.triggerEl.dataset.type;Lt.includes(e)&&(i=e)}i||"string"==typeof e&&("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i=Mt,t.videoFormat=t.videoFormat||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i=St:e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`,i=Pt):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`,i=Pt),i=i||this.instance.option("defaultType"),t.type=i,i===St&&(t.thumbSrc=t.thumbSrc||t.src)}setContent(t){const e=this.instance.optionFor(t,"src")||"";if(t&&t.type&&e){switch(t.type){case Et:this.instance.setContent(t,e);break;case Mt:const i=this.option("videoTpl");i&&this.instance.setContent(t,i.replace(/\{\{src\}\}/gi,e+"").replace(/\{\{format\}\}/gi,this.optionFor(t,"videoFormat")||"").replace(/\{\{poster\}\}/gi,t.poster||t.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case Pt:case Ct:case Tt:t.preload=!1;case"iframe":this.setIframeContent(t)}this.setAspectRatio(t)}}setAspectRatio(t){const e=t.contentEl;if(!(t.el&&e&&t.type&&[Ct,Tt,Mt].includes(t.type)))return;let i,n=t.width||"auto",s=t.height||"auto";if("auto"===n||"auto"===s){i=this.optionFor(t,"videoRatio");const e=(i+"").match(/(\d+)\s*\/\s?(\d+)/);i=e&&e.length>2?parseFloat(e[1])/parseFloat(e[2]):parseFloat(i+"")}else n&&s&&(i=n/s);if(!i)return;e.style.aspectRatio="",e.style.width="",e.style.height="",e.offsetHeight;const o=e.getBoundingClientRect(),a=o.width||1,r=o.height||1;e.style.aspectRatio=i+"",i<a/r?(s="auto"===s?r:Math.min(r,s),e.style.width="auto",e.style.height=`${s}px`):(n="auto"===n?a:Math.min(a,n),e.style.width=`${n}px`,e.style.height="auto")}attach(){const t=this,e=t.instance;e.on("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.selectSlide",t.onSelectSlide),e.on("Carousel.unselectSlide",t.onUnselectSlide),e.on("Carousel.Panzoom.refresh",t.onRefresh),e.on("done",t.onDone),e.on("clearContent",t.onClearContent),window.addEventListener("message",t.onMessage)}detach(){const t=this,e=t.instance;e.off("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.selectSlide",t.onSelectSlide),e.off("Carousel.unselectSlide",t.onUnselectSlide),e.off("Carousel.Panzoom.refresh",t.onRefresh),e.off("done",t.onDone),e.off("clearContent",t.onClearContent),window.removeEventListener("message",t.onMessage)}}Object.defineProperty(zt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:At});const Rt="play",kt="pause",It="ready";class Dt extends ${constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:It}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return this.state!==It}onReady(t){this.option("autoStart")&&(t.isInfinite||t.page<t.pages.length-1)&&this.start()}onChange(){this.removeProgressBar(),this.pause()}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var t;this.inHover=!1,(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)&&this.resume()}onTimerEnd(){const t=this.instance;"play"===this.state&&(t.isInfinite||t.page!==t.pages.length-1?t.slideNext():t.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var t;if(!this.option("showProgress"))return null;this.removeProgressBar();const e=this.instance,i=(null===(t=e.pages[e.page])||void 0===t?void 0:t.slides)||[];let n=this.option("progressParentEl");if(n||(n=(1===i.length?i[0].el:null)||e.viewport),!n)return null;const s=document.createElement("div");return C(s,"f-progress"),n.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){const t=this,e=t.instance;if(e.pages.length<2)return;if(t.timer)return;const i=t.option("timeout");t.state=Rt,C(e.container,"has-autoplay");let n=t.createProgressBar();n&&(n.style.transitionDuration=`${i}ms`,n.style.transform="scaleX(1)"),t.timer=setTimeout((()=>{t.timer=null,t.inHover||t.onTimerEnd()}),i),t.emit("set")}clear(){const t=this;t.timer&&(clearTimeout(t.timer),t.timer=null),t.removeProgressBar()}start(){const t=this;if(t.set(),t.state!==It){if(t.option("pauseOnHover")){const e=t.instance.container;e.addEventListener("mouseenter",t.onMouseEnter,!1),e.addEventListener("mouseleave",t.onMouseLeave,!1)}document.addEventListener("visibilitychange",t.onVisibilityChange,!1),t.emit("start")}}stop(){const t=this,e=t.state,i=t.instance.container;t.clear(),t.state=It,i.removeEventListener("mouseenter",t.onMouseEnter,!1),i.removeEventListener("mouseleave",t.onMouseLeave,!1),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),P(i,"has-autoplay"),e!==It&&t.emit("stop")}pause(){const t=this;t.state===Rt&&(t.state=kt,t.clear(),t.emit(kt))}resume(){const t=this,e=t.instance;if(e.isInfinite||e.page!==e.pages.length-1)if(t.state!==Rt){if(t.state===kt&&!t.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});t.emit("resume",e),e.defaultPrevented||t.set()}}else t.set();else t.stop()}toggle(){this.state===Rt||this.state===kt?this.stop():this.start()}attach(){const t=this,e=t.instance;e.on("ready",t.onReady),e.on("Panzoom.startAnimation",t.onChange),e.on("Panzoom.endAnimation",t.onSettle),e.on("Panzoom.touchMove",t.onChange)}detach(){const t=this,e=t.instance;e.off("ready",t.onReady),e.off("Panzoom.startAnimation",t.onChange),e.off("Panzoom.endAnimation",t.onSettle),e.off("Panzoom.touchMove",t.onChange),t.stop()}}Object.defineProperty(Dt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class Ft extends ${constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(t){const e=t.carousel;if(!e)return;const i=t.container;i&&(e.options.Autoplay=p({autoStart:!1},this.option("Autoplay")||{},{pauseOnHover:!1,timeout:this.option("timeout"),progressParentEl:()=>this.option("progressParentEl")||null,on:{start:()=>{t.emit("startSlideshow")},set:e=>{var n;i.classList.add("has-slideshow"),(null===(n=t.getSlide())||void 0===n?void 0:n.state)!==ct.Ready&&e.pause()},stop:()=>{i.classList.remove("has-slideshow"),t.isCompact||t.endIdle(),t.emit("endSlideshow")},resume:(e,i)=>{var n,s,o;!i||!i.cancelable||(null===(n=t.getSlide())||void 0===n?void 0:n.state)===ct.Ready&&(null===(o=null===(s=t.carousel)||void 0===s?void 0:s.panzoom)||void 0===o?void 0:o.isResting)||i.preventDefault()}}}),e.attachPlugins({Autoplay:Dt}),this.ref=e.plugins.Autoplay)}onReady(t){const e=t.carousel,i=this.ref;i&&e&&this.option("playOnStart")&&(e.isInfinite||e.page<e.pages.length-1)&&i.start()}onDone(t,e){const i=this.ref,n=t.carousel;if(!i||!n)return;const s=e.panzoom;s&&s.on("startAnimation",(()=>{t.isCurrentSlide(e)&&i.stop()})),t.isCurrentSlide(e)&&i.resume()}onKeydown(t,e){var i;const n=this.ref;n&&e===this.option("key")&&"BUTTON"!==(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName)&&n.toggle()}attach(){const t=this,e=t.instance;e.on("Carousel.init",t.onPrepare),e.on("Carousel.ready",t.onReady),e.on("done",t.onDone),e.on("keydown",t.onKeydown)}detach(){const t=this,e=t.instance;e.off("Carousel.init",t.onPrepare),e.off("Carousel.ready",t.onReady),e.off("done",t.onDone),e.off("keydown",t.onKeydown)}}Object.defineProperty(Ft,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,progressParentEl:t=>{var e;return(null===(e=t.instance.container)||void 0===e?void 0:e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]"))||t.instance.container},timeout:3e3}});const jt={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var Bt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden"}(Bt||(Bt={}));const Ht="isResting",Nt="thumbWidth",_t="thumbHeight",$t="thumbClipWidth";let Wt=class extends ${constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Bt.Init})}get isModern(){return"modern"===this.type}onInitSlide(t,e){const i=e.el?e.el.dataset:void 0;i&&(e.thumbSrc=i.thumbSrc||e.thumbSrc||"",e[$t]=parseFloat(i[$t]||"")||e[$t]||0,e[_t]=parseFloat(i.thumbHeight||"")||e[_t]||0),this.addSlide(e)}onInitSlides(){this.build()}onChange(){var t;if(!this.isModern)return;const e=this.container,i=this.instance,n=i.panzoom,s=this.carousel,o=s?s.panzoom:null,r=i.page;if(n&&s&&o){if(n.isDragging){P(e,this.cn(Ht));let n=(null===(t=s.pages[r])||void 0===t?void 0:t.pos)||0;n+=i.getProgress(r)*(this[$t]+this.thumbGap);let a=o.getBounds();-1*n>a.x.min&&-1*n<a.x.max&&o.panTo({x:-1*n,friction:.12})}else a(e,this.cn(Ht),n.isResting);this.shiftModern()}}onRefresh(){this.updateProps();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.shiftModern()}isDisabled(){const t=this.option("minCount")||0;if(t){const e=this.instance;let i=0;for(const t of e.slides||[])t.thumbSrc&&i++;if(i<t)return!0}const e=this.option("type");return["modern","classic"].indexOf(e)<0}getThumb(t){const e=this.option("thumbTpl")||"";return{html:this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}}addSlide(t){const e=this.carousel;e&&e.addSlide(t.index,this.getThumb(t))}getSlides(){const t=[];for(const e of this.instance.slides||[])t.push(this.getThumb(e));return t}resizeModernSlide(t){this.isModern&&(t[Nt]=t[$t]&&t[_t]?Math.round(this[_t]*(t[$t]/t[_t])):this[Nt])}updateProps(){const t=this.container;if(!t)return;const e=e=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-"+e))||0;this.thumbGap=e("gap"),this.thumbExtraGap=e("extra-gap"),this[Nt]=e("width")||40,this[$t]=e("clip-width")||40,this[_t]=e("height")||40}build(){const t=this;if(t.state!==Bt.Init)return;if(t.isDisabled())return void t.emit("disabled");const e=t.instance,i=e.container,n=t.getSlides(),s=t.option("type");t.type=s;const o=t.option("parentEl"),a=t.cn("container"),r=t.cn("track");let l=null==o?void 0:o.querySelector("."+a);l||(l=document.createElement("div"),C(l,a),o?o.appendChild(l):i.after(l)),C(l,`is-${s}`),C(i,t.cn("hasThumbs")),t.container=l,t.updateProps();let c=l.querySelector("."+r);c||(c=document.createElement("div"),C(c,t.cn("track")),l.appendChild(c)),t.track=c;const h=p({},{track:c,infinite:!1,center:!0,fill:"classic"===s,dragFree:!0,slidesPerPage:1,transition:!1,preload:.25,friction:.12,Panzoom:{maxVelocity:0},Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},t.option("Carousel")||{},{Sync:{target:e},slides:n}),d=new e.constructor(l,h);d.on("createSlide",((e,i)=>{t.setProps(i.index),t.emit("createSlide",i,i.el)})),d.on("ready",(()=>{t.shiftModern(),t.emit("ready")})),d.on("refresh",(()=>{t.shiftModern()})),d.on("Panzoom.click",((e,i,n)=>{t.onClick(n)})),t.carousel=d,t.state=Bt.Ready}onClick(t){t.preventDefault(),t.stopPropagation();const e=this.instance,{pages:i,page:n}=e,s=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return[parseInt(e.dataset.carouselIndex||"",10)||0,e]}return[-1,void 0]},o=(t,e)=>{const i=document.elementFromPoint(t,e);return i?s(i):[-1,void 0]};let[a,r]=s(t.target);if(a>-1)return;const l=this[$t],c=t.clientX,h=t.clientY;let[d,u]=o(c-l,h),[p,f]=o(c+l,h);u&&f?(a=Math.abs(c-u.getBoundingClientRect().right)<Math.abs(c-f.getBoundingClientRect().left)?d:p,a===n&&(a=a===d?p:d)):u?a=d:f&&(a=p),a>-1&&i[a]&&e.slideTo(a)}getShift(t){var e;const i=this,{instance:n}=i,s=i.carousel;if(!n||!s)return 0;const o=i[Nt],a=i[$t],r=i.thumbGap,l=i.thumbExtraGap;if(!(null===(e=s.slides[t])||void 0===e?void 0:e.el))return 0;const c=.5*(o-a),h=n.pages.length-1;let d=n.getProgress(0),u=n.getProgress(h),p=n.getProgress(t,!1,!0),f=0,g=c+l+r;const m=d<0&&d>-1,v=u>0&&u<1;return 0===t?(f=g*Math.abs(d),v&&1===d&&(f-=g*Math.abs(u))):t===h?(f=g*Math.abs(u)*-1,m&&-1===u&&(f+=g*Math.abs(d))):m||v?(f=-1*g,f+=g*Math.abs(d),f+=g*(1-Math.abs(u))):f=g*p,f}setProps(t){var i;const n=this;if(!n.isModern)return;const{instance:s}=n,o=n.carousel;if(s&&o){const a=null===(i=o.slides[t])||void 0===i?void 0:i.el;if(a&&a.childNodes.length){let i=e(1-Math.abs(s.getProgress(t))),o=e(n.getShift(t));a.style.setProperty("--progress",i?i+"":""),a.style.setProperty("--shift",o+"")}}}shiftModern(){const t=this;if(!t.isModern)return;const{instance:e,track:i}=t,n=e.panzoom,s=t.carousel;if(!(e&&i&&n&&s))return;if(n.state===v.Init||n.state===v.Destroy)return;for(const i of e.slides)t.setProps(i.index);let o=(t[$t]+t.thumbGap)*(s.slides.length||0);i.style.setProperty("--width",o+"")}cleanup(){const t=this;t.carousel&&t.carousel.destroy(),t.carousel=null,t.container&&t.container.remove(),t.container=null,t.track&&t.track.remove(),t.track=null,t.state=Bt.Init,P(t.instance.container,t.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===H.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on(["change","Panzoom.afterTransform"],t.onChange),e.on("Panzoom.refresh",t.onRefresh)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off(["change","Panzoom.afterTransform"],t.onChange),e.off("Panzoom.refresh",t.onRefresh),t.cleanup()}};Object.defineProperty(Wt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:jt});const Xt=Object.assign(Object.assign({},jt),{key:"t",showOnStart:!0,parentEl:null}),qt="is-masked",Yt="aria-hidden";class Vt extends ${constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const t=this.ref;return t&&!t.isDisabled()}get isHidden(){return this.hidden}onClick(t,e){e.stopPropagation()}onCreateSlide(t,e){var i,n,s;const o=(null===(s=null===(n=null===(i=this.instance)||void 0===i?void 0:i.carousel)||void 0===n?void 0:n.slides[e.index])||void 0===s?void 0:s.type)||"",a=e.el;if(a&&o){let t=`for-${o}`;["video","youtube","vimeo","html5video"].includes(o)&&(t+=" for-video"),C(a,t)}}onInit(){var t;const e=this,i=e.instance,n=i.carousel;if(e.ref||!n)return;const s=e.option("parentEl")||i.footer||i.container;if(!s)return;const o=p({},e.options,{parentEl:s,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:i.option("Carousel.friction")||0}},on:{ready:t=>{const i=t.container;i&&this.hidden&&(e.refresh(),i.style.transition="none",e.hide(),i.offsetHeight,queueMicrotask((()=>{i.style.transition="",e.show()})))}}});o.Carousel=o.Carousel||{},o.Carousel.on=p((null===(t=e.options.Carousel)||void 0===t?void 0:t.on)||{},{click:this.onClick,createSlide:this.onCreateSlide}),n.options.Thumbs=o,n.attachPlugins({Thumbs:Wt}),e.ref=n.plugins.Thumbs,e.option("showOnStart")||(e.ref.state=Bt.Hidden,e.hidden=!0)}onResize(){var t;const e=null===(t=this.ref)||void 0===t?void 0:t.container;e&&(e.style.maxHeight="")}onKeydown(t,e){const i=this.option("key");i&&i===e&&this.toggle()}toggle(){const t=this.ref;if(t&&!t.isDisabled())return t.state===Bt.Hidden?(t.state=Bt.Init,void t.build()):void(this.hidden?this.show():this.hide())}show(){const t=this.ref;if(!t||t.isDisabled())return;const e=t.container;e&&(this.refresh(),e.offsetHeight,e.removeAttribute(Yt),e.classList.remove(qt),this.hidden=!1)}hide(){const t=this.ref,e=t&&t.container;e&&(this.refresh(),e.offsetHeight,e.classList.add(qt),e.setAttribute(Yt,"true")),this.hidden=!0}refresh(){const t=this.ref;if(!t||!t.state)return;const e=t.container,i=(null==e?void 0:e.firstChild)||null;e&&i&&i.childNodes.length&&(e.style.maxHeight=`${i.getBoundingClientRect().height}px`)}attach(){const t=this,e=t.instance;e.state===lt.Init?e.on("Carousel.init",t.onInit):t.onInit(),e.on("resize",t.onResize),e.on("keydown",t.onKeydown)}detach(){var t;const e=this,i=e.instance;i.off("Carousel.init",e.onInit),i.off("resize",e.onResize),i.off("keydown",e.onKeydown),null===(t=i.carousel)||void 0===t||t.detachPlugins(["Thumbs"]),e.ref=null}}Object.defineProperty(Vt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Xt});const Zt={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var Ut;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Disabled=2]="Disabled"}(Ut||(Ut={}));const Gt={absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null},Kt={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Jt="has-toolbar",Qt="fancybox__toolbar";class te extends ${constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Ut.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(t){var e;if(!t.carousel)return;let i=this.option("display"),n=this.option("absolute"),s=this.option("enabled");if("auto"===s){const t=this.instance.carousel;let e=0;if(t)for(const i of t.slides)(i.panzoom||"image"===i.type)&&e++;e||(s=!1)}s||(i=void 0);let o=0;const a={left:[],middle:[],right:[]};if(i)for(const t of["left","middle","right"])for(const n of i[t]){const i=this.createEl(n);i&&(null===(e=a[t])||void 0===e||e.push(i),o++)}let r=null;if(o&&(r=this.createContainer()),r){for(const[t,e]of Object.entries(a)){const i=document.createElement("div");C(i,Qt+"__column is-"+t);for(const t of e)i.appendChild(t);"auto"!==n||"middle"!==t||e.length||(n=!0),r.appendChild(i)}!0===n&&C(r,"is-absolute"),this.state=Ut.Ready,this.onRefresh()}else this.state=Ut.Disabled}onClick(t){var e,i;const n=this.instance,s=n.getSlide(),o=null==s?void 0:s.panzoom,a=t.target,r=a&&S(a)?a.dataset:null;if(!r)return;if(void 0!==r.fancyboxToggleThumbs)return t.preventDefault(),t.stopPropagation(),void(null===(e=n.plugins.Thumbs)||void 0===e||e.toggle());if(void 0!==r.fancyboxToggleFullscreen)return t.preventDefault(),t.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==r.fancyboxToggleSlideshow){t.preventDefault(),t.stopPropagation();const e=null===(i=n.carousel)||void 0===i?void 0:i.plugins.Autoplay;let s=e.isActive;return o&&"mousemove"===o.panMode&&!s&&o.reset(),void(s?e.stop():e.start())}const l=r.panzoomAction,c=r.panzoomChange;if((c||l)&&(t.preventDefault(),t.stopPropagation()),c){let t={};try{t=JSON.parse(c)}catch(t){}o&&o.applyChange(t)}else l&&o&&o[l]&&o[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const t=this.container;if(!t)return;const e=this.instance.getSlide();if(!e||e.state!==ct.Ready)return;const i=e&&!e.error&&e.panzoom;for(const e of t.querySelectorAll("[data-panzoom-action]"))i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));let n=i&&i.canZoomIn(),s=i&&i.canZoomOut();for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=n?"":"none")}}onDone(t,e){var i;null===(i=e.panzoom)||void 0===i||i.on("afterTransform",(()=>{this.instance.isCurrentSlide(e)&&this.onRefresh()})),this.instance.isCurrentSlide(e)&&this.onRefresh()}createContainer(){const t=this.instance.container;if(!t)return null;const e=this.option("parentEl")||t;let i=e.querySelector("."+Qt);return i||(i=document.createElement("div"),C(i,Qt),e.prepend(i)),i.addEventListener("click",this.onClick,{passive:!1,capture:!0}),t&&C(t,Jt),this.container=i,i}createEl(t){const e=this.instance,i=e.carousel;if(!i)return null;if("toggleFS"===t)return null;if("fullscreen"===t&&!at())return null;let n=null;const o=i.slides.length||0;let a=0,r=0;for(const t of i.slides)(t.panzoom||"image"===t.type)&&a++,("image"===t.type||t.downloadSrc)&&r++;if(o<2&&["infobar","prev","next"].includes(t))return n;if(void 0!==Zt[t]&&!a)return null;if("download"===t&&!r)return null;if("thumbs"===t){const t=e.plugins.Thumbs;if(!t||!t.isEnabled)return null}if("slideshow"===t){if(!i.plugins.Autoplay||o<2)return null}if(void 0!==Zt[t]){const e=Zt[t];n=document.createElement("button"),n.setAttribute("title",this.instance.localize(`{{${t.toUpperCase()}}}`)),C(n,"f-button"),e.action&&(n.dataset.panzoomAction=e.action),e.change&&(n.dataset.panzoomChange=JSON.stringify(e.change)),n.appendChild(s(this.instance.localize(e.icon)))}else{const e=(this.option("items")||[])[t];e&&(n=s(this.instance.localize(e.tpl)),"function"==typeof e.click&&n.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof e.click&&e.click.call(this,this,t)})))}const l=null==n?void 0:n.querySelector("svg");if(l)for(const[t,e]of Object.entries(Kt))l.getAttribute(t)||l.setAttribute(t,String(e));return n}removeContainer(){const t=this.container;t&&t.remove(),this.container=null,this.state=Ut.Disabled;const e=this.instance.container;e&&P(e,Jt)}attach(){const t=this,e=t.instance;e.on("Carousel.initSlides",t.onReady),e.on("done",t.onDone),e.on(["reveal","Carousel.change"],t.onChange),t.onReady(t.instance)}detach(){const t=this,e=t.instance;e.off("Carousel.initSlides",t.onReady),e.off("done",t.onDone),e.off(["reveal","Carousel.change"],t.onChange),t.removeContainer()}}Object.defineProperty(te,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Gt});const ee={Hash:class extends ${onReady(){dt=!1}onChange(t){pt&&clearTimeout(pt);const{hash:e}=ft(),{hash:i}=gt(),n=t.isOpeningSlide(t.getSlide());n&&(ht=i===e?"":i),e&&e!==i&&(pt=setTimeout((()=>{try{if(t.state===lt.Ready){let t="replaceState";n&&!ut&&(t="pushState",ut=!0),window.history[t]({},document.title,window.location.pathname+window.location.search+e)}}catch(t){}}),300))}onClose(t){if(pt&&clearTimeout(pt),!dt&&ut)return ut=!1,dt=!1,void window.history.back();if(!dt)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(ht||""))}catch(t){}}attach(){const t=this.instance;t.on("ready",this.onReady),t.on(["Carousel.ready","Carousel.change"],this.onChange),t.on("close",this.onClose)}detach(){const t=this.instance;t.off("ready",this.onReady),t.off(["Carousel.ready","Carousel.change"],this.onChange),t.off("close",this.onClose)}static parseURL(){return gt()}static startFromUrl(){mt()}static destroy(){window.removeEventListener("hashchange",bt,!1)}},Html:zt,Images:xt,Slideshow:Ft,Thumbs:Vt,Toolbar:te},ie="with-fancybox",ne="hide-scrollbar",se="--fancybox-scrollbar-compensate",oe="--fancybox-body-margin",ae="aria-hidden",re="is-using-tab",le="is-animated",ce="is-compact",he="is-loading",de="is-opening",ue="has-caption",pe="disabled",fe="tabindex",ge="download",me="href",ve="src",be=t=>"string"==typeof t,ye=function(){var t=window.getSelection();return!!t&&"Range"===t.type};let we,xe=null,Ee=null,Se=0,Pe=0,Ce=0,Te=0;const Me=new Map;let Oe=0;class Ae extends m{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(t=[],e={},i={}){super(e),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"startedFs",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:lt.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),we||(we=at()),this.id=e.id||++Oe,Me.set(this.id,this),this.userSlides=t,this.userPlugins=i,queueMicrotask((()=>{this.init()}))}init(){if(this.state===lt.Destroy)return;this.state=lt.Init,this.attachPlugins(Object.assign(Object.assign({},Ae.Plugins),this.userPlugins)),this.emit("init"),this.emit("attachPlugins"),!0===this.option("hideScrollbar")&&(()=>{if(!it)return;const t=document,e=t.body,i=t.documentElement;if(e.classList.contains(ne))return;let n=window.innerWidth-i.getBoundingClientRect().width;const s=parseFloat(window.getComputedStyle(e).marginRight);n<0&&(n=0),i.style.setProperty(se,`${n}px`),s&&e.style.setProperty(oe,`${s}px`),e.classList.add(ne)})(),this.initLayout(),this.scale();const t=()=>{this.initCarousel(this.userSlides),this.state=lt.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute(ae,"false")}),16)};this.option("Fullscreen.autoStart")&&we&&!we.isFullscreen()?we.request().then((()=>{this.startedFs=!0,t()})).catch((()=>t())):t()}initLayout(){var t,e;const i=this.option("parentEl")||document.body,n=s(this.localize(this.option("tpl.main")||""));if(n){if(n.setAttribute("id",`fancybox-${this.id}`),n.setAttribute("aria-label",this.localize("{{MODAL}}")),n.classList.toggle(ce,this.isCompact),C(n,this.option("mainClass")||""),C(n,de),this.container=n,this.footer=n.querySelector(".fancybox__footer"),i.appendChild(n),C(document.documentElement,ie),xe&&Ee||(xe=document.createElement("span"),C(xe,"fancybox-focus-guard"),xe.setAttribute(fe,"0"),xe.setAttribute(ae,"true"),xe.setAttribute("aria-label","Focus guard"),Ee=xe.cloneNode(),null===(t=n.parentElement)||void 0===t||t.insertBefore(xe,n),null===(e=n.parentElement)||void 0===e||e.append(Ee)),n.addEventListener("mousedown",(t=>{Se=t.pageX,Pe=t.pageY,P(n,re)})),this.option("closeExisting"))for(const t of Me.values())t.id!==this.id&&t.close();else this.option("animated")&&(C(n,le),setTimeout((()=>{this.isClosing()||P(n,le)}),350));this.emit("initLayout")}}initCarousel(t){const e=this.container;if(!e)return;const n=e.querySelector(".fancybox__carousel");if(!n)return;const s=this.carousel=new tt(n,p({},{slides:t,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));s.on("*",((t,e,...i)=>{this.emit(`Carousel.${e}`,t,...i)})),s.on(["ready","change"],(()=>{this.manageCaption()})),this.on("Carousel.removeSlide",((t,e,i)=>{this.clearContent(i),i.state=void 0})),s.on("Panzoom.touchStart",(()=>{var t,e;this.isCompact||this.endIdle(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=this.container)||void 0===e||e.focus())})),s.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&!this.isClosing&&this.checkFocus()})),this.option("dragToClose")&&(s.on("Panzoom.afterTransform",((t,e)=>{const n=this.getSlide();if(n&&i(n.el))return;const s=this.container;if(s){const t=Math.abs(e.current.f),i=t<1?"":Math.max(.5,Math.min(1,1-t/e.contentRect.fitHeight*1.5));s.style.setProperty("--fancybox-ts",i?"0s":""),s.style.setProperty("--fancybox-opacity",i+"")}})),s.on("Panzoom.touchEnd",((t,e,n)=>{var s;const o=this.getSlide();if(o&&i(o.el))return;if(e.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(s=document.activeElement)||void 0===s?void 0:s.nodeName))return;const a=Math.abs(e.dragOffset.y);"y"===e.lockedAxis&&(a>=200||a>=50&&e.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(e.current.f<0?"Up":"Down")))}))),s.on("change",(t=>{var e;let i=null===(e=this.getSlide())||void 0===e?void 0:e.triggerEl;if(i){const e=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:t.page});i.dispatchEvent(e)}})),s.on(["refresh","change"],(t=>{const e=this.container;if(!e)return;for(const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML=t.page+1;for(const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML=t.pages.length;if(!t.isInfinite){for(const i of e.querySelectorAll("[data-fancybox-next]"))t.page<t.pages.length-1?(i.removeAttribute(pe),i.removeAttribute(fe)):(i.setAttribute(pe,""),i.setAttribute(fe,"-1"));for(const i of e.querySelectorAll("[data-fancybox-prev]"))t.page>0?(i.removeAttribute(pe),i.removeAttribute(fe)):(i.setAttribute(pe,""),i.setAttribute(fe,"-1"))}const i=this.getSlide();if(!i)return;let n=i.downloadSrc||"";n||"image"!==i.type||i.error||!be(i[ve])||(n=i[ve]);for(const t of e.querySelectorAll("[data-fancybox-download]")){const e=i.downloadFilename;n?(t.removeAttribute(pe),t.removeAttribute(fe),t.setAttribute(me,n),t.setAttribute(ge,e||n),t.setAttribute("target","_blank")):(t.setAttribute(pe,""),t.setAttribute(fe,"-1"),t.removeAttribute(me),t.removeAttribute(ge))}})),this.emit("initCarousel")}attachEvents(){const t=this,e=t.container;if(!e)return;e.addEventListener("click",t.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",t.onVisibilityChange,!1),document.addEventListener("mousemove",t.onMousemove),t.option("trapFocus")&&document.addEventListener("focus",t.onFocus,!0),window.addEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.addEventListener("scroll",t.onResize),i.addEventListener("resize",t.onResize))}detachEvents(){const t=this,e=t.container;if(!e)return;document.removeEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),e.removeEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),e.removeEventListener("click",t.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",t.onMousemove),window.removeEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.removeEventListener("resize",t.onResize),i.removeEventListener("scroll",t.onResize)),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),document.removeEventListener("focus",t.onFocus,!0)}scale(){const t=this.container;if(!t)return;const e=window.visualViewport,i=Math.max(1,(null==e?void 0:e.scale)||1);let n="",s="",o="";if(e&&i>1){let t=`${e.offsetLeft}px`,a=`${e.offsetTop}px`;n=e.width*i+"px",s=e.height*i+"px",o=`translate3d(${t}, ${a}, 0) scale(${1/i})`}t.style.transform=o,t.style.width=n,t.style.height=s}onClick(t){var e;const{container:i,isCompact:n}=this;if(!i||this.isClosing())return;!n&&this.option("idle")&&this.resetIdle();const s=t.composedPath()[0];if(s.closest(".fancybox-spinner")||s.closest("[data-fancybox-close]"))return t.preventDefault(),void this.close(t);if(s.closest("[data-fancybox-prev]"))return t.preventDefault(),void this.prev();if(s.closest("[data-fancybox-next]"))return t.preventDefault(),void this.next();if("click"===t.type&&0===t.detail)return;if(Math.abs(t.pageX-Se)>30||Math.abs(t.pageY-Pe)>30)return;const o=document.activeElement;if(ye()&&o&&i.contains(o))return;if(n&&"image"===(null===(e=this.getSlide())||void 0===e?void 0:e.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",t),t.defaultPrevented)return;let a=!1;if(s.closest(".fancybox__content")){if(o){if(o.closest("[contenteditable]"))return;s.matches(st)||o.blur()}if(ye())return;a=this.option("contentClick")}else s.closest(".fancybox__carousel")&&!s.matches(st)&&(a=this.option("backdropClick"));"close"===a?(t.preventDefault(),this.close(t)):"next"===a?(t.preventDefault(),this.next()):"prev"===a&&(t.preventDefault(),this.prev())}onWheel(t){const e=t.target;let i=this.option("wheel",t);e.closest(".fancybox__thumbs")&&(i="slide");const s="slide"===i,o=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t})),a=Math.max(-1,Math.min(1,o)),r=Date.now();this.pwt&&r-this.pwt<300?s&&t.preventDefault():(this.pwt=r,this.emit("wheel",t,a),t.defaultPrevented||("close"===i?(t.preventDefault(),this.close(t)):"slide"===i&&(n(e)||(t.preventDefault(),this[a>0?"prev":"next"]()))))}onScroll(){window.scrollTo(Ce,Te)}onKeydown(t){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const e=t.key,i=this.option("keyboard");if(!i)return;const n=t.composedPath()[0],s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("f-button")||n.dataset.carouselPage||n.dataset.carouselIndex;if("Escape"!==e&&!o&&S(n)){if(n.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return}if("Tab"===t.key?C(this.container,re):P(this.container,re),t.ctrlKey||t.altKey||t.shiftKey)return;this.emit("keydown",e,t);const a=i[e];a&&"function"==typeof this[a]&&(t.preventDefault(),this[a]())}onResize(){const t=this.container;if(!t)return;const e=this.isCompact;t.classList.toggle(ce,e),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.scale(),this.emit("resize")}onFocus(t){this.isTopmost()&&this.checkFocus(t)}onMousemove(t){this.prevMouseMoveEvent=t,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(t){const e=this.optionFor(t,"closeButton")||!1;if("auto"===e){const t=this.plugins.Toolbar;if(t&&t.state===Ut.Ready)return}if(!e)return;if(!t.contentEl||t.closeBtnEl)return;const i=this.option("tpl.closeButton");if(i){const e=s(this.localize(i));t.closeBtnEl=t.contentEl.appendChild(e),t.el&&C(t.el,"has-close-btn")}}manageCaption(t=void 0){var e,i;const n="fancybox__caption",s=this.container;if(!s)return;P(s,ue);const o=this.isCompact||this.option("commonCaption"),a=!o;if(this.caption&&this.stop(this.caption),a&&this.caption&&(this.caption.remove(),this.caption=null),o&&!this.caption)for(const t of(null===(e=this.carousel)||void 0===e?void 0:e.slides)||[])t.captionEl&&(t.captionEl.remove(),t.captionEl=void 0,P(t.el,ue),null===(i=t.el)||void 0===i||i.removeAttribute("aria-labelledby"));if(t||(t=this.getSlide()),!t||o&&!this.isCurrentSlide(t))return;const r=t.el;let l=this.optionFor(t,"caption","");if(!l)return void(o&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{this.caption&&(this.caption.innerHTML="")})));let c=null;if(a){if(c=t.captionEl||null,r&&!c){const e=n+`_${this.id}_${t.index}`;c=document.createElement("div"),C(c,n),c.setAttribute("id",e),t.captionEl=r.appendChild(c),C(r,ue),r.setAttribute("aria-labelledby",e)}}else{if(c=this.caption,c||(c=s.querySelector("."+n)),!c){c=document.createElement("div"),c.dataset.fancyboxCaption="",C(c,n);(this.footer||s).prepend(c)}C(s,ue),this.caption=c}c&&(c.innerHTML="",be(l)||"number"==typeof l?c.innerHTML=l+"":l instanceof HTMLElement&&c.appendChild(l))}checkFocus(t){this.focus(t)}focus(t){var e;if(this.ignoreFocusChange)return;const i=document.activeElement||null,n=(null==t?void 0:t.target)||null,s=this.container,o=null===(e=this.carousel)||void 0===e?void 0:e.viewport;if(!s||!o)return;if(!t&&i&&s.contains(i))return;const a=this.getSlide(),r=a&&a.state===ct.Ready?a.el:null;if(!r||r.contains(i)||s===i)return;t&&t.cancelable&&t.preventDefault(),this.ignoreFocusChange=!0;const l=Array.from(s.querySelectorAll(st));let c=[],h=null;for(let t of l){const e=!t.offsetParent||!!t.closest('[aria-hidden="true"]'),i=r&&r.contains(t),n=!o.contains(t);if(t===s||(i||n)&&!e){c.push(t);const e=t.dataset.origTabindex;void 0!==e&&e&&(t.tabIndex=parseFloat(e)),t.removeAttribute("data-orig-tabindex"),!t.hasAttribute("autoFocus")&&h||(h=t)}else{const e=void 0===t.dataset.origTabindex?t.getAttribute("tabindex")||"":t.dataset.origTabindex;e&&(t.dataset.origTabindex=e),t.tabIndex=-1}}let d=null;t?(!n||c.indexOf(n)<0)&&(d=h||s,c.length&&(i===Ee?d=c[0]:this.lastFocus!==s&&i!==xe||(d=c[c.length-1]))):d=a&&"image"===a.type?s:h||s,d&&ot(d),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const t=this.carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.carousel&&this.carousel.slideTo(...t)}isTopmost(){var t;return(null===(t=Ae.getInstance())||void 0===t?void 0:t.id)==this.id}animate(t=null,e="",i){if(!t||!e)return void(i&&i());this.stop(t);const n=s=>{s.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",n),delete t.dataset.animationName,i&&i(),P(t,e))};t.dataset.animationName=e,t.addEventListener("animationend",n),C(t,e)}stop(t){t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))}setContent(t,e="",i=!0){if(this.isClosing())return;const n=t.el;if(!n)return;let o=null;if(S(e)?o=e:(o=s(e+""),S(o)||(o=document.createElement("div"),o.innerHTML=e+"")),["img","picture","iframe","video","audio"].includes(o.nodeName.toLowerCase())){const t=document.createElement("div");t.appendChild(o),o=t}S(o)&&t.filter&&!t.error&&(o=o.querySelector(t.filter)),o&&S(o)?(C(o,"fancybox__content"),t.id&&o.setAttribute("id",t.id),"none"!==o.style.display&&"none"!==getComputedStyle(o).getPropertyValue("display")||(o.style.display=t.display||this.option("defaultDisplay")||"flex"),n.classList.add(`has-${t.error?"error":t.type||"unknown"}`),n.prepend(o),t.contentEl=o,i&&this.revealContent(t),this.manageCloseBtn(t),this.manageCaption(t)):this.setError(t,"{{ELEMENT_NOT_FOUND}}")}revealContent(t,e){const i=t.el,n=t.contentEl;i&&n&&(this.emit("reveal",t),this.hideLoading(t),t.state=ct.Opening,(e=this.isOpeningSlide(t)?void 0===e?this.optionFor(t,"showClass"):e:"f-fadeIn")?this.animate(n,e,(()=>{this.done(t)})):this.done(t))}done(t){this.isClosing()||(t.state=ct.Ready,this.emit("done",t),C(t.el,"is-done"),this.isCurrentSlide(t)&&this.option("autoFocus")&&queueMicrotask((()=>{var e;null===(e=t.panzoom)||void 0===e||e.updateControls(),this.option("autoFocus")&&this.focus()})),this.isOpeningSlide(t)&&(P(this.container,de),!this.isCompact&&this.option("idle")&&this.setIdle()))}isCurrentSlide(t){const e=this.getSlide();return!(!t||!e)&&e.index===t.index}isOpeningSlide(t){var e,i;return null===(null===(e=this.carousel)||void 0===e?void 0:e.prevPage)&&t&&t.index===(null===(i=this.getSlide())||void 0===i?void 0:i.index)}showLoading(t){t.state=ct.Loading;const e=t.el;if(!e)return;C(e,he),this.emit("loading",t),t.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!t.spinnerEl&&t.state===ct.Loading){let i=s(E);C(i,"fancybox-spinner"),t.spinnerEl=i,e.prepend(i),this.animate(i,"f-fadeIn")}}),250)}hideLoading(t){const e=t.el;if(!e)return;const i=t.spinnerEl;this.isClosing()?null==i||i.remove():(P(e,he),i&&this.animate(i,"f-fadeOut",(()=>{i.remove()})),t.state===ct.Loading&&(this.emit("loaded",t),t.state=ct.Ready))}setError(t,e){if(this.isClosing())return;const i=new Event("error",{bubbles:!0,cancelable:!0});if(this.emit("error",i,t),i.defaultPrevented)return;t.error=e,this.hideLoading(t),this.clearContent(t);const n=document.createElement("div");n.classList.add("fancybox-error"),n.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,n)}clearContent(t){if(void 0===t.state)return;this.emit("clearContent",t),t.contentEl&&(t.contentEl.remove(),t.contentEl=void 0);const e=t.el;e&&(P(e,"has-error"),P(e,"has-unknown"),P(e,`has-${t.type||"unknown"}`)),t.closeBtnEl&&t.closeBtnEl.remove(),t.closeBtnEl=void 0,t.captionEl&&t.captionEl.remove(),t.captionEl=void 0,t.spinnerEl&&t.spinnerEl.remove(),t.spinnerEl=void 0}getSlide(){var t;const e=this.carousel;return(null===(t=null==e?void 0:e.pages[null==e?void 0:e.page])||void 0===t?void 0:t.slides[0])||void 0}close(t,e){if(this.isClosing())return;const i=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",i,t),i.defaultPrevented)return;t&&t.cancelable&&(t.preventDefault(),t.stopPropagation());const n=()=>{this.proceedClose(t,e)};this.startedFs&&we&&we.isFullscreen()?Promise.resolve(we.exit()).then((()=>n())):n()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(t=!1){const e=()=>{this.clearIdle(),this.idle=!0,C(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(t)e();else{const t=this.option("idle");t&&(this.idleTimer=setTimeout(e,t))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,P(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){we&&(we.isFullscreen()?we.exit():we.request().then((()=>{this.startedFs=!0})))}isClosing(){return[lt.Closing,lt.CustomClosing,lt.Destroy].includes(this.state)}proceedClose(t,e){var i,n;this.state=lt.Closing,this.clearIdle(),this.detachEvents();const s=this.container,o=this.carousel,a=this.getSlide(),r=a&&this.option("placeFocusBack")?a.triggerEl||this.option("triggerEl"):null;if(r&&(et(r)?ot(r):r.focus()),s&&(P(s,de),C(s,"is-closing"),s.setAttribute(ae,"true"),this.option("animated")&&C(s,le),s.style.pointerEvents="none"),o){o.clearTransitions(),null===(i=o.panzoom)||void 0===i||i.destroy(),null===(n=o.plugins.Navigation)||void 0===n||n.detach();for(const t of o.slides){t.state=ct.Closing,this.hideLoading(t);const e=t.contentEl;e&&this.stop(e);const i=null==t?void 0:t.panzoom;i&&(i.stop(),i.detachEvents(),i.detachObserver()),this.isCurrentSlide(t)||o.emit("removeSlide",t)}}Ce=window.scrollX,Te=window.scrollY,window.addEventListener("scroll",this.onScroll),this.emit("close",t),this.state!==lt.CustomClosing?(void 0===e&&a&&(e=this.optionFor(a,"hideClass")),e&&a?(this.animate(a.contentEl,e,(()=>{o&&o.emit("removeSlide",a)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var t;if(this.state===lt.Destroy)return;window.removeEventListener("scroll",this.onScroll),this.state=lt.Destroy,null===(t=this.carousel)||void 0===t||t.destroy();const e=this.container;e&&e.remove(),Me.delete(this.id);const i=Ae.getInstance();i?i.focus():(xe&&(xe.remove(),xe=null),Ee&&(Ee.remove(),Ee=null),P(document.documentElement,ie),(()=>{if(!it)return;const t=document,e=t.body;e.classList.remove(ne),e.style.setProperty(oe,""),t.documentElement.style.setProperty(se,"")})(),this.emit("destroy"))}static bind(t,e,i){if(!it)return;let n,s="",o={};if(void 0===t?n=document.body:be(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):(n=t,be(e)&&(s=e),"object"==typeof i&&(o=i||{})),!n||!S(n))return;s=s||"[data-fancybox]";const a=Ae.openers.get(n)||new Map;a.set(s,o),Ae.openers.set(n,a),1===a.size&&n.addEventListener("click",Ae.fromEvent)}static unbind(t,e){let i,n="";if(be(t)?(i=document.body,n=t):(i=t,be(e)&&(n=e)),!i)return;const s=Ae.openers.get(i);s&&n&&s.delete(n),n&&s||(Ae.openers.delete(i),i.removeEventListener("click",Ae.fromEvent))}static destroy(){let t;for(;t=Ae.getInstance();)t.destroy();for(const t of Ae.openers.keys())t.removeEventListener("click",Ae.fromEvent);Ae.openers=new Map}static fromEvent(t){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const i=e.closest("[data-fancybox-trigger]");if(i){const t=i.dataset.fancyboxTrigger||"",n=document.querySelectorAll(`[data-fancybox="${t}"]`),s=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=n[s]||e}if(!(e&&e instanceof Element))return;let n,s,o,a;if([...Ae.openers].reverse().find((([t,i])=>!(!t.contains(e)||![...i].reverse().find((([i,r])=>{let l=e.closest(i);return!!l&&(n=t,s=i,o=l,a=r,!0)}))))),!n||!s||!o)return;a=a||{},t.preventDefault(),e=o;let r=[],l=p({},rt,a);l.event=t,l.triggerEl=e,l.delegate=i;const c=l.groupAll,h=l.groupAttr,d=h&&e?e.getAttribute(`${h}`):"";if((!e||d||c)&&(r=[].slice.call(n.querySelectorAll(s))),e&&!c&&(r=d?r.filter((t=>t.getAttribute(`${h}`)===d)):[e]),!r.length)return;const u=Ae.getInstance();return u&&u.options.triggerEl&&r.indexOf(u.options.triggerEl)>-1?void 0:(e&&(l.startIndex=r.indexOf(e)),Ae.fromNodes(r,l))}static fromSelector(t,e,i){let n=null,s="",o={};if(be(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):t instanceof HTMLElement&&be(e)&&(n=t,s=e,"object"==typeof i&&(o=i||{})),!n||!s)return!1;const a=Ae.openers.get(n);return!!a&&(o=p({},a.get(s)||{},o),!!o&&Ae.fromNodes(Array.from(n.querySelectorAll(s)),o))}static fromNodes(t,e){e=p({},rt,e||{});const i=[];for(const n of t){const t=n.dataset||{},s=t[ve]||n.getAttribute(me)||n.getAttribute("currentSrc")||n.getAttribute(ve)||void 0;let o;const a=e.delegate;let r;a&&i.length===e.startIndex&&(o=a instanceof HTMLImageElement?a:a.querySelector("img:not([aria-hidden])")),o||(o=n instanceof HTMLImageElement?n:n.querySelector("img:not([aria-hidden])")),o&&(r=o.currentSrc||o[ve]||void 0,!r&&o.dataset&&(r=o.dataset.lazySrc||o.dataset[ve]||void 0));const l={src:s,triggerEl:n,thumbEl:o,thumbElSrc:r,thumbSrc:r};for(const e in t){let i=t[e]+"";i="false"!==i&&("true"===i||i),l[e]=i}i.push(l)}return new Ae(i,e)}static getInstance(t){if(t)return Me.get(t);return Array.from(Me.values()).reverse().find((t=>!t.isClosing()&&t))||null}static getSlide(){var t;return(null===(t=Ae.getInstance())||void 0===t?void 0:t.getSlide())||null}static show(t=[],e={}){return new Ae(t,e)}static next(){const t=Ae.getInstance();t&&t.next()}static prev(){const t=Ae.getInstance();t&&t.prev()}static close(t=!0,...e){if(t)for(const t of Me.values())t.close(...e);else{const t=Ae.getInstance();t&&t.close(...e)}}}Object.defineProperty(Ae,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.35"}),Object.defineProperty(Ae,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:rt}),Object.defineProperty(Ae,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:ee}),Object.defineProperty(Ae,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),t.Carousel=tt,t.Fancybox=Ae,t.Panzoom=D}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/local/templates/abutik/assets/js/plugins/ScrollSmoother.js?175438928213570";s:6:"source";s:59:"/local/templates/abutik/assets/js/plugins/ScrollSmoother.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return I||s()&&(I=window.gsap)&&I.registerPlugin&&I}function v(e){return Y.maxScroll(e||U)}var I,D,U,j,G,K,q,V,Y,Q,W,J,X,Z,$,r=(ScrollSmoother.register=function register(e){return D||(I=e||t(),s()&&window.document&&(U=window,j=document,G=j.documentElement,K=j.body),I&&(q=I.utils.toArray,V=I.utils.clamp,W=I.parseEase("expo"),Z=I.core.context||function(){},Y=I.core.globals().ScrollTrigger,I.core.globals("ScrollSmoother",ScrollSmoother),K&&Y&&($=I.delayedCall(.2,function(){return Y.isRefreshing||Q&&Q.refresh()}).pause(),J=Y.core._getVelocityProp,X=Y.core._inputObserver,ScrollSmoother.refresh=Y.refresh,D=1))),D},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;D||ScrollSmoother.register(I)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},Q&&Q.kill(),Z(Q=this);function Ba(){return M.update(-N)}function Da(){return n.style.overflow="visible"}function Fa(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),g=!1,e.animation.progress(e.progress,!0)}function Ga(e,t){(e!==N&&!f||t)&&(x&&(e=Math.round(e)),H&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),F=e-N,N=e,Y.isUpdating||ScrollSmoother.isRefreshing||Y.update())}function Ha(e){return arguments.length?(e<0&&(e=0),z.y=-e,g=!0,f?N=-e:Ga(-e),Y.isRefreshing?i.update():k(e/A),this):-N}function Ka(e){S.scrollTop=0,e.target.contains&&e.target.contains(S)||C&&!1===C(o,e)||(Y.isInViewport(e.target)||e.target===p||o.scrollTo(e.target,!1,"center center"),p=e.target)}function La(t,e){if(t<e.start)return t;var r=isNaN(e.ratio)?1:e.ratio,n=e.end-e.start,o=t-e.start,i=e.offset||0,s=e.pins||[],a=s.offset||0,l=e._startClamp&&e.start<=0||e.pins&&e.pins.offset?0:e._endClamp&&e.end===v()?1:.5;return s.forEach(function(e){n-=e.distance,e.nativeStart<=t&&(o-=e.distance)}),a&&(o*=(n-a/r)/n),t+(o-i*l)/r-o}function Na(t,r){b.forEach(function(e){return function adjustEffectRelatedTriggers(e,t,r){r||(e.pins.length=e.pins.offset=0);var n,o,i,s,a,l,c,f,u=e.pins,h=e.markers;for(c=0;c<t.length;c++)if(f=t[c],e.trigger&&f.trigger&&e!==f&&(f.trigger===e.trigger||f.pinnedContainer===e.trigger||e.trigger.contains(f.trigger))&&(a=f._startNative||f._startClamp||f.start,l=f._endNative||f._endClamp||f.end,i=La(a,e),s=f.pin&&0<l?i+(l-a):La(l,e),f.setPositions(i,s,!0,(f._startClamp?Math.max(0,i):i)-a),f.markerStart&&h.push(I.quickSetter([f.markerStart,f.markerEnd],"y","px")),f.pin&&0<f.end&&!r)){if(n=f.end-f.start,o=e._startClamp&&f.start<0){if(0<e.start)return e.setPositions(0,e.end+(e._startNative-e.start),!0),void adjustEffectRelatedTriggers(e,t);n+=f.start,u.offset=-f.start}u.push({start:f.start,nativeStart:a,end:f.end,distance:n,trig:f}),e.setPositions(e.start,e.end+(o?-f.start:n),!0)}}(e,t,r)})}function Oa(){Da(),requestAnimationFrame(Da),b&&(Y.getAll().forEach(function(e){e._startNative=e.start,e._endNative=e.end}),b.forEach(function(e){var t=e._startClamp||e.start,r=e.autoSpeed?Math.min(v(),e.end):t+Math.abs((e.end-t)/e.ratio),n=r-e.end;if((r-=n/2)<(t-=n/2)){var o=t;t=r,r=o}e._startClamp&&t<0?(n=(r=e.ratio<0?v():e.end/e.ratio)-e.end,t=0):(e.ratio<0||e._endClamp&&r>=v())&&(n=((r=v())-(t=e.ratio<0||1<e.ratio?0:r-(r-e.start)/e.ratio))*e.ratio-(e.end-e.start)),e.offset=n||1e-4,e.pins.length=e.pins.offset=0,e.setPositions(t,r,!0)}),Na(Y.sort())),M.reset()}function Pa(){return Y.addEventListener("refresh",Oa)}function Qa(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function Ra(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),Qa}function Sa(r,n,o,i){return function(){var e="function"==typeof n?n(o,i):n;e||0===e||(e=i.getAttribute("data-"+E+r)||("speed"===r?1:0)),i.setAttribute("data-"+E+r,e);var t="clamp("===(e+"").substr(0,6);return{clamp:t,value:t?e.substr(6,e.length-7):e}}}function Ta(r,e,t,n,o){function cc(){e=u(),t=parseFloat(h().value),i=parseFloat(e.value)||1,a="auto"===e.value,c=a||s&&s._startClamp&&s.start<=0||p.offset?0:s&&s._endClamp&&s.end===v()?1:.5,l&&l.kill(),l=t&&I.to(r,{ease:W,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function dc(){g.y=d+"px",g.renderTransform(1),cc()}function gc(e){if(a){dc();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||G,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),f=-c*t;return 0<c&&(n=.5==(r=s.height/(U.innerHeight+s.height))?2*s.height:2*Math.min(s.height,Math.abs(-c*r/(2*r-1)))*(t||1),f+=t?-n*t:-n/2,c+=n),{change:c,offset:f}}(r,V(0,1,-e.start/(e.end-e.start)));y=t.change,f=t.offset}else f=p.offset||0,y=(e.end-e.start-f)*(1-i);p.forEach(function(e){return y-=e.distance*(1-i)}),e.offset=y||.001,e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,f,u=Sa("speed",e,n,r),h=Sa("lag",t,n,r),d=I.getProperty(r,"y"),g=r._gsap,p=[],m=[],y=0;return cc(),(1!==i||a||l)&&(gc(s=Y.create({trigger:a?r.parentNode:r,start:function start(){return e.clamp?"clamp(top bottom+="+o+")":"top bottom+="+o},end:function end(){return e.value<0?"max":e.clamp?"clamp(bottom top-="+o+")":"bottom top-="+o},scroller:S,scrub:!0,refreshPriority:-999,onRefreshInit:dc,onRefresh:gc,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),dc()},onUpdate:function onUpdate(e){var t,r,n,o=d+y*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-N,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-F,!0),B&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=d+s+y*((I.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}m.length&&!a&&m.forEach(function(e){return e(o-s)}),o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+f),l?(l.resetTo("y",o,-F,!0),B&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),I.core.getCache(s.trigger).stRevert=Ra,s.startY=d,s.pins=p,s.markers=m,s.ratio=i,s.autoSpeed=a,r.style.willChange="transform"),s}var n,S,e,i,b,s,a,l,c,f,r,u,h,d,g,p,m=t.smoothTouch,w=t.onUpdate,T=t.onStop,_=t.smooth,C=t.onFocusIn,P=t.normalizeScroll,x=t.wholePixels,R=this,E=t.effectsPrefix||"",k=Y.getScrollFunc(U),H=1===Y.isTouch?!0===m?.8:parseFloat(m)||0:0===_||!1===_?0:parseFloat(_)||.8,A=H&&+t.speed||1,N=0,F=0,B=1,M=J(0),z={y:0},L="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){if(!Y.isRefreshing){var e=v(S)*A;e<-N&&Ha(e),$.restart(!0)}});function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",K.style.height=U.innerHeight+(e-U.innerHeight)/A+"px",e-U.innerHeight}Pa(),Y.addEventListener("killAll",Pa),I.delayedCall(.5,function(){return B=0}),this.scrollTop=Ha,this.scrollTo=function(e,t,r){var n=I.utils.clamp(0,v(),isNaN(e)?o.offset(e,r,!!t&&!f):+e);t?f?I.to(o,{duration:H,scrollTop:n,overwrite:"auto",ease:W}):k(n):Ha(n)},this.offset=function(e,t,r){var n,o=(e=q(e)[0]).style.cssText,i=Y.create({trigger:e,start:t||"top top"});return b&&(B?Y.refresh():Na([i],!0)),n=i.start/(r?A:1),i.kill(!1),e.style.cssText=o,I.core.getCache(e).uncache=1,n},this.content=function(e){if(arguments.length){var t=q(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||K.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",L&&L.observe(n),I.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),H||I.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(S=q(e||"#smooth-wrapper")[0]||function _wrap(e){var t=j.querySelector(".ScrollSmoother-wrapper");return t||((t=j.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=S.getAttribute("style")||"",refreshHeight(),I.set(S,H?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):S},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=q(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=Ta(e[r],o,i,r,s))&&a.push(n);return b.push.apply(b,a),!1!==t.refresh&&Y.refresh(),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=q(e).map(function(t){return Y.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Ga(e||0===e?e:N)},this.getVelocity=function(){return M.getVelocity(-N)},Y.scrollerProxy(S,{scrollTop:Ha,scrollHeight:function scrollHeight(){return refreshHeight()&&K.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!H,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:U.innerWidth,height:U.innerHeight}}}),Y.defaults({scroller:S});var O=Y.getAll().filter(function(e){return e.scroller===U||e.scroller===S});O.forEach(function(e){return e.revert(!0,!0)}),i=Y.create({animation:I.fromTo(z,{y:function y(){return d=0}},{y:function y(){return d=1,-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(d){var e=g;e&&(Fa(i),z.y=N),Ga(z.y,e),Ba(),w&&!f&&w(R)}}}),onRefreshInit:function onRefreshInit(e){if(!ScrollSmoother.isRefreshing){if(ScrollSmoother.isRefreshing=!0,b){var t=Y.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();h=r&&r._end>r._dp._time,u=N,z.y=0,H&&(1===Y.isTouch&&(S.style.position="absolute"),S.scrollTop=0,1===Y.isTouch&&(S.style.position="fixed"))}},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/A),h||Fa(e),z.y=-k()*A,Ga(z.y),B||(h&&(g=!1),e.animation.progress(I.utils.clamp(0,1,u/A/-e.end))),h&&(e.progress-=.001,e.update()),ScrollSmoother.isRefreshing=!1},id:"ScrollSmoother",scroller:U,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/A},onScrubComplete:function onScrubComplete(){M.reset(),T&&T(o)},scrub:H||!0}),this.smooth=function(e){return arguments.length&&(A=(H=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||W),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+E+"speed], [data-"+E+"lag]":t.effects,{effectsPadding:t.effectsPadding,refresh:!1}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),O.forEach(function(e){e.vars.scroller=S,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!f!==e&&(e?(i.getTween()&&i.getTween().pause(),k(-N/A),M.reset(),(r=Y.normalizeScroll())&&r.disable(),(f=Y.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Ha(-N)}})).nested=X(G,"wheel,touch,scroll",!0,!1!==t)):(f.nested.kill(),f.kill(),f=0,r&&r.enable(),i.progress=(-N/A-i.start)/(i.end-i.start),Fa(i))),this):!!f},this.kill=this.revert=function(){o.paused(!1),Fa(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();Y.scrollerProxy(S),Y.removeEventListener("killAll",Pa),Y.removeEventListener("refresh",Oa),S.style.cssText=l,n.style.cssText=c;var r=Y.defaults({});r&&r.scroller===S&&Y.defaults({scroller:U}),o.normalizer&&Y.normalizeScroll(!1),clearInterval(a),Q=null,L&&L.disconnect(),K.style.removeProperty("height"),U.removeEventListener("focusin",Ka)},this.refresh=function(e,t){return i.refresh(e,t)},P&&(this.normalizer=Y.normalizeScroll(!0===P?{debounce:!0,content:!H&&n}:P)),Y.config(t),"overscrollBehavior"in U.getComputedStyle(K)&&I.set([K,G],{overscrollBehavior:"none"}),"scrollBehavior"in U.getComputedStyle(K)&&I.set([K,G],{scrollBehavior:"auto"}),U.addEventListener("focusin",Ka),a=setInterval(Ba,250),"loading"===j.readyState||requestAnimationFrame(function(){return Y.refresh()})}r.version="3.12.5",r.create=function(e){return Q&&e&&Q.content()===q(e.content)[0]?Q:new r(e)},r.get=function(){return Q},t()&&I.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/local/templates/abutik/assets/js/plugins/ScrollTrigger.js?175438928243379";s:6:"source";s:58:"/local/templates/abutik/assets/js/plugins/ScrollTrigger.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Ce||"undefined"!=typeof window&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function z(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!1!==n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return De&&De.isPressed||Ie.cache++}function G(r,n){function dd(e){if(e||0===e){o&&(Se.history.scrollRestoration="manual");var t=De&&De.isPressed;e=dd.v=Math.round(e)||(De&&De.iOS?1:0),r(e),dd.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==dd.cacheID||i("ref"))&&(dd.cacheID=Ie.cache,dd.v=r());return dd.v+dd.offset}return dd.offset=0,r&&dd}function J(e,t){return(t&&t._ctx&&t._ctx.selector||Ce.utils.toArray)(e)[0]||("string"==typeof e&&!1!==Ce.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=ke.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===Fe.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||B(t,"scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Ce.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function Cd(e,t){var r=ze();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=ze(),l=s,n=t||50,c=Math.max(500,3*n);return{update:Cd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=ze();return!e&&0!==e||e===i||Cd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=Ce.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,Le),Ie=t,Le=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return Ce=e||r(),!Te&&Ce&&"undefined"!=typeof document&&document.body&&(Se=window,Pe=(ke=document).documentElement,Me=ke.body,t=[Se,ke,Pe,Me],Ce.utils.clamp,Be=Ce.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Ee=k.isTouch=Se.matchMedia&&Se.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Se||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Re=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Te=1),Te}var Ce,Te,Se,ke,Pe,Me,Ee,Oe,Ae,t,De,Re,Be,o=1,qe=[],Ie=[],Le=[],ze=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",Ye={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Se.scrollTo(e,Fe.sc()):Se.pageXOffset||ke[n]||Pe[n]||Me[n]||0})},Fe={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ye,sc:G(function(e){return arguments.length?Se.scrollTo(Ye.sc(),e):Se.pageYOffset||ke[a]||Pe[a]||Me[a]||0})};Ye.op=Fe,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Te||P(Ce)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,T=e.onChangeY,S=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,q=e.onMove,I=e.ignoreCheck,z=e.isNormalizer,Y=e.onGestureStart,H=e.onGestureEnd,X=e.onWheel,W=e.onEnable,V=e.onDisable,U=e.onClick,j=e.scrollSpeed,G=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function cf(){return xe=ze()}function df(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&he&&"touch"!==e.pointerType||I&&I(e,t)}function ff(){var e=se.deltaX=N(me),t=se.deltaY=N(ye),r=Math.abs(e)>=o,n=Math.abs(t)>=o;S&&(r||n)&&S(se,e,t,me,ye),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,me[0]=me[1]=me[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),T&&T(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,ye[0]=ye[1]=ye[2]=0),(ne||re)&&(q&&q(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(X(se),oe=!1),ee=0}function gf(e,t,r){me[r]+=e,ye[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(ff):ff()}function hf(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(me[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(ye[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(ff):ff()}function jf(e){if(!df(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),hf(n,o),i||p&&p(se))}}function mf(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&Y(e,se.isDragging)}function nf(){return(se.isGesturing=!1)||H(se)}function of(e){if(!df(e)){var t=fe(),r=de();gf((t-pe)*j,(r-ge)*j,1),pe=t,ge=r,l&&te.restart(!0)}}function pf(e){if(!df(e)){e=M(e,s),X&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Se.innerHeight:1)*f;gf(e.deltaX*t,e.deltaY*t,0),l&&!z&&te.restart(!0)}}function qf(e){if(!df(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,l&&te.restart(!0),(n||o)&&hf(n,o)}}function rf(e){se.event=e,D(se)}function sf(e){se.event=e,R(se)}function tf(e){return df(e)||M(e,s)&&U(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Ce.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,j=j||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Se.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=e.passive||!s,fe=K(i,Ye),de=K(i,Fe),pe=fe(),ge=de(),he=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Re[0],ve=A(i),be=i.ownerDocument||ke,me=[0,0,0],ye=[0,0,0],xe=0,we=se.onPress=function(e){df(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(z?i:be,Re[1],jf,ue,!0),se.deltaX=se.deltaY=0,v&&v(se))},_e=se.onRelease=function(t){if(!df(t,1)){C(z?i:be,Re[1],jf,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging,n=r&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),o=M(t);!n&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Ce.delayedCall(.08,function(){if(300<ze()-xe&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(be.createEvent){var e=be.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Se,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&r&&!z&&te.restart(!0),g&&r&&g(se),b&&b(se,n)}};te=se._dc=Ce.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=fe,se.scrollY=de,se.isDragging=se.isGesturing=se.isPressed=!1,Be(this),se.enable=function(e){return se.isEnabled||(B(ve?be:i,"scroll",F),0<=t.indexOf("scroll")&&B(ve?be:i,"scroll",of,ue,G),0<=t.indexOf("wheel")&&B(i,"wheel",pf,ue,G),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(B(i,Re[0],we,ue,G),B(be,Re[2],_e),B(be,Re[3],_e),Q&&B(i,"click",cf,!0,!0),U&&B(i,"click",tf),Y&&B(be,"gesturestart",mf),H&&B(be,"gestureend",nf),D&&B(i,Oe+"enter",rf),R&&B(i,Oe+"leave",sf),q&&B(i,Oe+"move",qf)),se.isEnabled=!0,e&&e.type&&we(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(qe.filter(function(e){return e!==se&&A(e.target)}).length||C(ve?be:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(z?i:be,Re[1],jf,!0)),C(ve?be:i,"scroll",of,G),C(i,"wheel",pf,G),C(i,Re[0],we,G),C(be,Re[2],_e),C(be,Re[3],_e),C(i,"click",cf,!0),C(i,"click",tf),C(be,"gesturestart",mf),C(be,"gestureend",nf),C(i,Oe+"enter",rf),C(i,Oe+"leave",sf),C(i,Oe+"move",qf),se.isEnabled=se.isPressed=se.isDragging=!1,V&&V(se))},se.kill=se.revert=function(){se.disable();var e=qe.indexOf(se);0<=e&&qe.splice(e,1),De===se&&(De=0)},qe.push(se),z&&A(i)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.12.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return qe.slice()},k.getById=function(t){return qe.filter(function(e){return e.vars.id===t})[0]},r()&&Ce.registerPlugin(k);function Ca(e,t,r){var n=ct(e)&&("clamp("===e.substr(0,6)||-1<e.indexOf("max"));return(r["_"+t+"Clamp"]=n)?e.substr(6,e.length-7):e}function Da(e,t){return!t||ct(e)&&"clamp("===e.substr(0,6)?e:"clamp("+e+")"}function Fa(){return Ge=1}function Ga(){return Ge=0}function Ha(e){return e}function Ia(e){return Math.round(1e5*e)/1e5||0}function Ja(){return"undefined"!=typeof window}function Ka(){return He||Ja()&&(He=window.gsap)&&He.registerPlugin&&He}function La(e){return!!~l.indexOf(e)}function Ma(e){return("Height"===e?T:Ne["inner"+e])||Je["client"+e]||We["client"+e]}function Na(e){return z(e,"getBoundingClientRect")||(La(e)?function(){return Ot.width=Ne.innerWidth,Ot.height=T,Ot}:function(){return wt(e)})}function Qa(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Na(e)()[o]:La(e)?(Je[r]||We[r])-Ma(n):e[r]-e["offset"+n])}function Ra(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ta(e){return"function"==typeof e}function Ua(e){return"number"==typeof e}function Va(e){return"object"==typeof e}function Wa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Xa(e,t){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e)}):t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function mb(e){return Ne.getComputedStyle(e)}function ob(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function qb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function rb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function tb(o){var i=He.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function vb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function wb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function xb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function yb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function Cb(e,t){if(ct(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in H?H[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Db(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Xe.createElement("div"),g=La(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?We:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===Fe?q:I)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function Ib(){return 34<at()-st&&(D=D||requestAnimationFrame(Z))}function Jb(){v&&v.isPressed&&!(v.startX>We.clientWidth)||(Ie.cache++,v?D=D||requestAnimationFrame(Z):Z(),st||U("scrollStart"),st=at())}function Kb(){y=Ne.innerWidth,m=Ne.innerHeight}function Lb(){Ie.cache++,je||h||Xe.fullscreenElement||Xe.webkitFullscreenElement||b&&y===Ne.innerWidth&&!(Math.abs(Ne.innerHeight-m)>.25*Ne.innerHeight)||c.restart(!0)}function Ob(){return xb(ne,"scrollEnd",Ob)||Pt(!0)}function Rb(e){for(var t=0;t<j.length;t+=5)(!e||j[t+4]&&j[t+4].query===e)&&(j[t].style.cssText=j[t+1],j[t].getBBox&&j[t].setAttribute("transform",j[t+2]||""),j[t+3].uncache=1)}function Sb(e,t){var r;for(Qe=0;Qe<Tt.length;Qe++)!(r=Tt[Qe])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));S=!0,t&&Rb(t),t||U("revert")}function Tb(e,t){Ie.cache++,!t&&rt||Ie.forEach(function(e){return Ta(e)&&e.cacheID++&&(e.rec=0)}),ct(e)&&(Ne.history.scrollRestoration=w=e)}function Yb(){We.appendChild(_),T=!v&&_.offsetHeight||Ne.innerHeight,We.removeChild(_)}function Zb(t){return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})}function gc(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=$.length,a=t.style,s=e.style;i--;)a[o=$[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[I]=s[q]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ft]=qb(e,Ye)+xt,a[dt]=qb(e,Fe)+xt,a[bt]=s[mt]=s.top=s.left="0",Et(n),s[ft]=s.maxWidth=r[ft],s[dt]=s.maxHeight=r[dt],s[bt]=r[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function jc(e){for(var t=ee.length,r=e.style,n=[],o=0;o<t;o++)n.push(ee[o],r[ee[o]]);return n.t=e,n}function mc(e,t,r,n,o,i,a,s,l,c,u,f,d,p){Ta(e)&&(e=e(s)),ct(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Cb("0"+e.substr(3),r):0));var g,h,v,b=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e=+e),Ua(e))d&&(e=He.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ta(t)&&(t=t(s));var m,y,x,w,_=(e||"0").split(" ");v=J(t,s)||We,(m=wt(v)||{})&&(m.left||m.top)||"none"!==mb(v).display||(w=v.style.display,v.style.display="block",m=wt(v),w?v.style.display=w:v.style.removeProperty("display")),y=Cb(_[0],m[n.d]),x=Cb(_[1]||"0",r),e=m[n.p]-l[n.p]-c+y+o-x,a&&X(a,x,n,r-x<20||a._isStart&&20<x),r-=r-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),i){var C=e+r,T=i._isStart;g="scroll"+n.d2,X(i,C,n,T&&20<C||!T&&(u?Math.max(We[g],Je[g]):i.parentNode[g])<=C+1),u&&(l=wt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+xt))}return d&&v&&(g=wt(v),d.seek(f),h=wt(v),d._caScrollDist=g[n.p]-h[n.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)}function oc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===We){for(o in e._stOrig=a.cssText,i=mb(e))+o||re.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}}function pc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function qc(e,t,r){var n={};n[t.p]="+="+r,He.set(e,n)}function rc(c,e){function Ck(e,t,r,n,o){var i=Ck.tween,a=t.onComplete,s={};r=r||u();var l=pc(u,r,function(){i.kill(),Ck.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,t.inherit=!1,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,Ck.tween&&Z()},t.onComplete=function(){Ck.tween=0,a&&a.call(i)},i=Ck.tween=He.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return Ck.tween&&Ck.tween.kill()&&(Ck.tween=0)},wb(c,"wheel",u.wheelHandler),ne.isTouch&&wb(c,"touchmove",u.wheelHandler),Ck}var He,s,Ne,Xe,Je,We,l,c,Ve,Ue,Ke,u,je,Ge,f,Qe,d,p,g,Ze,$e,h,v,b,m,y,E,x,w,_,T,S,et,tt,D,rt,nt,ot,it=1,at=Date.now,R=at(),st=0,lt=0,ct=function _isString(e){return"string"==typeof e},ut=Math.abs,q="right",I="bottom",ft="width",dt="height",pt="Right",gt="Left",ht="Top",vt="Bottom",bt="padding",mt="margin",yt="Width",Y="Height",xt="px",wt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==mb(e)[f]&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},_t={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},H={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+yt]=1,o["border"+a+yt]=0,o[r.p]=t+"px",He.set(e,o)},Tt=[],St={},W={},V=[],U=function _dispatch(e){return W[e]&&W[e].map(function(e){return e()})||V},j=[],kt=0,Pt=function _refreshAll(e,t){if(!st||e||S){Yb(),rt=ne.isRefreshing=!0,Ie.forEach(function(e){return Ta(e)&&++e.cacheID&&(e.rec=e())});var r=U("refreshInit");Ze&&ne.sort(),t||Sb(),Ie.forEach(function(e){Ta(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Tt.slice(0).forEach(function(e){return e.refresh()}),S=!1,Tt.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?"offsetWidth":"offsetHeight",r=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-r),e.refresh()}}),et=1,Zb(!0),Tt.forEach(function(e){var t=Qa(e.scroller,e._dir),r="max"===e.vars.end||e._endClamp&&e.end>t,n=e._startClamp&&e.start>=t;(r||n)&&e.setPositions(n?t-1:e.start,r?Math.max(n?t:e.start+1,t):e.end,!0)}),Zb(!1),et=0,r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ta(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Tb(w,1),c.pause(),kt++,Z(rt=2),Tt.forEach(function(e){return Ta(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rt=ne.isRefreshing=!1,U("refresh")}else wb(ne,"scrollEnd",Ob)},Q=0,Mt=1,Z=function _updateAll(e){if(2===e||!rt&&!S){ne.isUpdating=!0,ot&&ot.update(0);var t=Tt.length,r=at(),n=50<=r-R,o=t&&Tt[0].scroll();if(Mt=o<Q?-1:1,rt||(Q=o),n&&(st&&!Ge&&200<r-st&&(st=0,U("scrollEnd")),Ke=R,R=r),Mt<0){for(Qe=t;0<Qe--;)Tt[Qe]&&Tt[Qe].update(0,n);Mt=1}else for(Qe=0;Qe<t;Qe++)Tt[Qe]&&Tt[Qe].update(0,n);ne.isUpdating=!1}D=0},$=["left","top",I,q,mt+vt,mt+pt,mt+ht,mt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ee=$.concat([ft,dt,"boxSizing","max"+yt,"max"+Y,"position",mt,bt,bt+ht,bt+pt,bt+vt,bt+gt]),te=/([A-Z])/g,Et=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(te,"-$1").toLowerCase())}},Ot={left:0,top:0},re=/(webkit|moz|length|cssText|inset)/i,ne=(ScrollTrigger.prototype.init=function init(E,O){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var A,n,p,D,R,B,q,I,L,Y,F,e,H,N,X,W,V,U,t,j,b,G,Q,m,Z,y,$,x,r,w,_,ee,o,g,te,re,ne,C,i,T=(E=ob(ct(E)||Ua(E)||E.nodeType?{trigger:E}:E,Ct)).onUpdate,S=E.toggleClass,a=E.id,k=E.onToggle,oe=E.onRefresh,P=E.scrub,ie=E.trigger,ae=E.pin,se=E.pinSpacing,le=E.invalidateOnRefresh,M=E.anticipatePin,s=E.onScrubComplete,h=E.onSnapComplete,ce=E.once,ue=E.snap,fe=E.pinReparent,l=E.pinSpacer,de=E.containerAnimation,pe=E.fastScrollEnd,ge=E.preventOverlaps,he=E.horizontal||E.containerAnimation&&!1!==E.horizontal?Ye:Fe,ve=!P&&0!==P,be=J(E.scroller||Ne),c=He.core.getCache(be),me=La(be),ye="fixed"===("pinType"in E?E.pinType:z(be,"pinType")||me&&"fixed"),xe=[E.onEnter,E.onLeave,E.onEnterBack,E.onLeaveBack],we=ve&&E.toggleActions.split(" "),_e="markers"in E?E.markers:Ct.markers,Ce=me?0:parseFloat(mb(be)["border"+he.p2+yt])||0,Te=this,Se=E.onRefreshInit&&function(){return E.onRefreshInit(Te)},ke=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ma(o):e["client"+o])||0}}(be,me,he),Pe=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Na(e):function(){return Ot}}(be,me),Me=0,Ee=0,Oe=0,Ae=K(be,he);if(Te._startClamp=Te._endClamp=!1,Te._dir=he,M*=45,Te.scroller=be,Te.scroll=de?de.time.bind(de):Ae,D=Ae(),Te.vars=E,O=O||E.animation,"refreshPriority"in E&&(Ze=1,-9999===E.refreshPriority&&(ot=Te)),c.tweenScroll=c.tweenScroll||{top:rc(be,Fe),left:rc(be,Ye)},Te.tweenTo=A=c.tweenScroll[he.p],Te.scrubDuration=function(e){(o=Ua(e)&&e)?ee?ee.duration(e):ee=He.to(O,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Te)}}):(ee&&ee.progress(1).kill(),ee=0)},O&&(O.vars.lazy=!1,O._initted&&!Te.isReverted||!1!==O.vars.immediateRender&&!1!==E.immediateRender&&O.duration()&&O.render(0,!0,!0),Te.animation=O.pause(),(O.scrollTrigger=Te).scrubDuration(P),w=0,a=a||O.vars.id),ue&&(Va(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in We.style&&He.set(me?[We,Je]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ta(e)&&e.target===(me?Xe.scrollingElement||Je:be)&&(e.smooth=!1)}),p=Ta(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return He.utils.snap(rb(t),e)}}(O):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return tb(rb(r))(e,t.direction)}}(O):!1!==ue.directional?function(e,t){return tb(ue.snapTo)(e,at()-Ee<500?0:t.direction)}:He.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Va(g)?Ue(g.min,g.max):Ue(g,g),te=He.delayedCall(ue.delay||o/2||.1,function(){var e=Ae(),t=at()-Ee<500,r=A.tween;if(!(t||Math.abs(Te.getVelocity())<10)||r||Ge||Me===e)Te.isActive&&Me!==e&&te.restart(!0);else{var n,o,i=(e-B)/N,a=O&&!ve?O.totalProgress():i,s=t?0:(a-_)/(at()-Ke)*1e3||0,l=He.utils.clamp(-i,1-i,ut(s/2)*s/.185),c=i+(!1===ue.inertia?0:l),u=ue.onStart,f=ue.onInterrupt,d=ue.onComplete;if(n=p(c,Te),Ua(n)||(n=c),o=Math.round(B+n*N),e<=q&&B<=e&&o!==e){if(r&&!r._initted&&r.data<=ut(o-e))return;!1===ue.inertia&&(l=n-i),A(o,{duration:g(ut(.185*Math.max(ut(c-a),ut(n-a))/s/.05||0)),ease:ue.ease||"power3",data:ut(o-e),onInterrupt:function onInterrupt(){return te.restart(!0)&&f&&f(Te)},onComplete:function onComplete(){Te.update(),Me=Ae(),O&&(ee?ee.resetTo("totalProgress",n,O._tTime/O._tDur):O.progress(n)),w=_=O&&!ve?O.totalProgress():Te.progress,h&&h(Te),d&&d(Te)}},e,l*N,o-e-l*N),u&&u(Te,A.tween)}}}).pause()),a&&(St[a]=Te),i=(i=(ie=Te.trigger=J(ie||!0!==ae&&ae))&&ie._gsap&&ie._gsap.stRevert)&&i(Te),ae=!0===ae?ie:J(ae),ct(S)&&(S={targets:ie,className:S}),ae&&(!1===se||se===mt||(se=!(!se&&ae.parentNode&&ae.parentNode.style&&"flex"===mb(ae.parentNode).display)&&bt),Te.pin=ae,(n=He.core.getCache(ae)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=jc(l))),n.spacer=U=l||Xe.createElement("div"),U.classList.add("pin-spacer"),a&&U.classList.add("pin-spacer-"+a),n.pinState=X=jc(ae)),!1!==E.force3D&&He.set(ae,{force3D:!0}),Te.spacer=U=n.spacer,r=mb(ae),m=r[se+he.os2],j=He.getProperty(ae),b=He.quickSetter(ae,he.a,xt),gc(ae,U,r),V=jc(ae)),_e){e=Va(_e)?ob(_e,_t):_t,Y=Db("scroller-start",a,be,he,e,0),F=Db("scroller-end",a,be,he,e,0,Y),t=Y["offset"+he.op.d2];var u=J(z(be,"content")||be);I=this.markerStart=Db("start",a,u,he,e,t,0,de),L=this.markerEnd=Db("end",a,u,he,e,t,0,de),de&&(C=He.quickSetter([I,L],he.a,xt)),ye||Le.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=mb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?We:be),He.set([Y,F],{force3D:!0}),y=He.quickSetter(Y,he.a,xt),x=He.quickSetter(F,he.a,xt))}if(de){var f=de.vars.onUpdate,d=de.vars.onUpdateParams;de.eventCallback("onUpdate",function(){Te.update(0,0,1),f&&f.apply(de,d||[])})}if(Te.previous=function(){return Tt[Tt.indexOf(Te)-1]},Te.next=function(){return Tt[Tt.indexOf(Te)+1]},Te.revert=function(e,t){if(!t)return Te.kill(!0);var r=!1!==e||!Te.enabled,n=je;r!==Te.isReverted&&(r&&(re=Math.max(Ae(),Te.scroll.rec||0),Oe=Te.progress,ne=O&&O.progress()),I&&[I,L,Y,F].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(je=Te).update(r),!ae||fe&&Te.isActive||(r?function _swapPinOut(e,t,r){Et(r);var n=e._gsap;if(n.spacerIsNative)Et(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ae,U,X):gc(ae,U,mb(ae),Z)),r||Te.update(r),je=n,Te.isReverted=r)},Te.refresh=function(e,t,r,n){if(!je&&Te.enabled||t)if(ae&&e&&st)wb(ScrollTrigger,"scrollEnd",Ob);else{!rt&&Se&&Se(Te),je=Te,A.tween&&!r&&(A.tween.kill(),A.tween=0),ee&&ee.pause(),le&&O&&O.revert({kill:!1}).invalidate(),Te.isReverted||Te.revert(!0,!0),Te._subPinOffset=!1;var o,i,a,s,l,c,u,f,d,p,g,h,v,b=ke(),m=Pe(),y=de?de.duration():Qa(be,he),x=N<=.01,w=0,_=n||0,C=Va(r)?r.end:E.end,T=E.endTrigger||ie,S=Va(r)?r.start:E.start||(0!==E.start&&ie?ae?"0 0":"0 100%":0),k=Te.pinnedContainer=E.pinnedContainer&&J(E.pinnedContainer,Te),P=ie&&Math.max(0,Tt.indexOf(Te))||0,M=P;for(_e&&Va(r)&&(h=He.getProperty(Y,he.p),v=He.getProperty(F,he.p));M--;)(c=Tt[M]).end||c.refresh(0,1)||(je=Te),!(u=c.pin)||u!==ie&&u!==ae&&u!==k||c.isReverted||((p=p||[]).unshift(c),c.revert(!0,!0)),c!==Tt[M]&&(P--,M--);for(Ta(S)&&(S=S(Te)),S=Ca(S,"start",Te),B=mc(S,ie,b,he,Ae(),I,Y,Te,m,Ce,ye,y,de,Te._startClamp&&"_startClamp")||(ae?-.001:0),Ta(C)&&(C=C(Te)),ct(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(ct(S)?S.split(" ")[0]:"")+C:(w=Cb(C.substr(2),b),C=ct(S)?S:(de?He.utils.mapRange(0,de.duration(),de.scrollTrigger.start,de.scrollTrigger.end,B):B)+w,T=ie)),C=Ca(C,"end",Te),q=Math.max(B,mc(C||(T?"100% 0":y),T,b,he,Ae()+w,L,F,Te,m,Ce,ye,y,de,Te._endClamp&&"_endClamp"))||-.001,w=0,M=P;M--;)(u=(c=Tt[M]).pin)&&c.start-c._pinPush<=B&&!de&&0<c.end&&(o=c.end-(Te._startClamp?Math.max(0,c.start):c.start),(u===ie&&c.start-c._pinPush<B||u===k)&&isNaN(S)&&(w+=o*(1-c.progress)),u===ae&&(_+=o));if(B+=w,q+=w,Te._startClamp&&(Te._startClamp+=w),Te._endClamp&&!rt&&(Te._endClamp=q||-.001,q=Math.min(q,Qa(be,he))),N=q-B||(B-=.01)&&.001,x&&(Oe=He.utils.clamp(0,1,He.utils.normalize(B,q,re))),Te._pinPush=_,I&&w&&((o={})[he.a]="+="+w,k&&(o[he.p]="-="+Ae()),He.set([I,L],o)),!ae||et&&Te.end>=Qa(be,he)){if(ie&&Ae()&&!de)for(i=ie.parentNode;i&&i!==We;)i._pinOffset&&(B-=i._pinOffset,q-=i._pinOffset),i=i.parentNode}else o=mb(ae),s=he===Fe,a=Ae(),G=parseFloat(j(he.a))+_,!y&&1<q&&(g={style:g=(me?Xe.scrollingElement||Je:be).style,value:g["overflow"+he.a.toUpperCase()]},me&&"scroll"!==mb(We)["overflow"+he.a.toUpperCase()]&&(g.style["overflow"+he.a.toUpperCase()]="scroll")),gc(ae,U,o),V=jc(ae),i=wt(ae,!0),f=ye&&K(be,s?Ye:Fe)(),se?((Z=[se+he.os2,N+_+xt]).t=U,(M=se===bt?qb(ae,he)+N+_:0)&&(Z.push(he.d,M+xt),"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt)),Et(Z),k&&Tt.forEach(function(e){e.pin===k&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Ae(re)):(M=qb(ae,he))&&"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt),ye&&((l={top:i.top+(s?a-B:f)+xt,left:i.left+(s?f:a-B)+xt,boxSizing:"border-box",position:"fixed"})[ft]=l.maxWidth=Math.ceil(i.width)+xt,l[dt]=l.maxHeight=Math.ceil(i.height)+xt,l[mt]=l[mt+ht]=l[mt+pt]=l[mt+vt]=l[mt+gt]="0",l[bt]=o[bt],l[bt+ht]=o[bt+ht],l[bt+pt]=o[bt+pt],l[bt+vt]=o[bt+vt],l[bt+gt]=o[bt+gt],W=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,l,fe),rt&&Ae(0)),O?(d=O._initted,$e(1),O.render(O.duration(),!0,!0),Q=j(he.a)-G+N+_,$=1<Math.abs(N-Q),ye&&$&&W.splice(W.length-2,2),O.render(0,!0,!0),d||O.invalidate(!0),O.parent||O.totalTime(O.totalTime()),$e(0)):Q=N,g&&(g.value?g.style["overflow"+he.a.toUpperCase()]=g.value:g.style.removeProperty("overflow-"+he.a));p&&p.forEach(function(e){return e.revert(!1,!0)}),Te.start=B,Te.end=q,D=R=rt?re:Ae(),de||rt||(D<re&&Ae(re),Te.scroll.rec=0),Te.revert(!1,!0),Ee=at(),te&&(Me=-1,te.restart(!0)),je=0,O&&ve&&(O._initted||ne)&&O.progress()!==ne&&O.progress(ne||0,!0).render(O.time(),!0,!0),(x||Oe!==Te.progress||de||le)&&(O&&!ve&&O.totalProgress(de&&B<-.001&&!Oe?He.utils.normalize(B,q,0):Oe,!0),Te.progress=x||(D-B)/N===Oe?0:Oe),ae&&se&&(U._pinOffset=Math.round(Te.progress*Q)),ee&&ee.invalidate(),isNaN(h)||(h-=He.getProperty(Y,he.p),v-=He.getProperty(F,he.p),qc(Y,he,h),qc(I,he,h-(n||0)),qc(F,he,v),qc(L,he,v-(n||0))),x&&!rt&&Te.update(),!oe||rt||H||(H=!0,oe(Te),H=!1)}},Te.getVelocity=function(){return(Ae()-R)/(at()-Ke)*1e3||0},Te.endAnimation=function(){Wa(Te.callbackAnimation),O&&(ee?ee.progress(1):O.paused()?ve||Wa(O,Te.direction<0,1):Wa(O,O.reversed()))},Te.labelToScroll=function(e){return O&&O.labels&&(B||Te.refresh()||B)+O.labels[e]/O.duration()*N||0},Te.getTrailing=function(t){var e=Tt.indexOf(Te),r=0<Te.direction?Tt.slice(0,e).reverse():Tt.slice(e+1);return(ct(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Te.direction?e.end<=B:e.start>=q})},Te.update=function(e,t,r){if(!de||r||e){var n,o,i,a,s,l,c,u=!0===rt?re:Te.scroll(),f=e?0:(u-B)/N,d=f<0?0:1<f?1:f||0,p=Te.progress;if(t&&(R=D,D=de?Ae():u,ue&&(_=w,w=O&&!ve?O.totalProgress():d)),M&&ae&&!je&&!it&&st&&(!d&&B<u+(u-R)/(at()-Ke)*M?d=1e-4:1===d&&q>u+(u-R)/(at()-Ke)*M&&(d=.9999)),d!==p&&Te.enabled){if(a=(s=(n=Te.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Te.direction=p<d?1:-1,Te.progress=d,a&&!je&&(o=d&&!p?0:1===d?1:1===p?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=O&&("complete"===i||"reset"===i||i in O))),ge&&(s||c)&&(c||P||!O)&&(Ta(ge)?ge(Te):Te.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!ee||je||it?O&&O.totalProgress(d,!(!je||!Ee&&!e)):(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",d,O._tTime/O._tDur):(ee.vars.totalProgress=d,ee.invalidate().restart()))),ae)if(e&&se&&(U.style[se+he.os2]=m),ye){if(a){if(l=!e&&p<d&&u<q+1&&u+1>=Qa(be,he),fe)if(e||!n&&!l)oc(ae,U);else{var g=wt(ae,!0),h=u-B;oc(ae,We,g.top+(he===Fe?h:0)+xt,g.left+(he===Fe?0:h)+xt)}Et(n||l?W:V),$&&d<1&&n||b(G+(1!==d||l?0:Q))}}else b(Ia(G+Q*d));!ue||A.tween||je||it||te.restart(!0),S&&(s||ce&&d&&(d<1||!tt))&&Ve(S.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](S.className)}),!T||ve||e||T(Te),a&&!je?(ve&&(c&&("complete"===i?O.pause().totalProgress(1):"reset"===i?O.restart(!0).pause():"restart"===i?O.restart(!0):O[i]()),T&&T(Te)),!s&&tt||(k&&s&&Xa(Te,k),xe[o]&&Xa(Te,xe[o]),ce&&(1===d?Te.kill(!1,1):xe[o]=0),s||xe[o=1===d?1:3]&&Xa(Te,xe[o])),pe&&!n&&Math.abs(Te.getVelocity())>(Ua(pe)?pe:2500)&&(Wa(Te.callbackAnimation),ee?ee.progress(1):Wa(O,"reverse"===i?1:!d,1))):ve&&T&&!je&&T(Te)}if(x){var v=de?u/de.duration()*(de._caScrollDist||0):u;y(v+(Y._isFlipped?1:0)),x(v)}C&&C(-u/de.duration()*(de._caScrollDist||0))}},Te.enable=function(e,t){Te.enabled||(Te.enabled=!0,wb(be,"resize",Lb),me||wb(be,"scroll",Jb),Se&&wb(ScrollTrigger,"refreshInit",Se),!1!==e&&(Te.progress=Oe=0,D=R=Me=Ae()),!1!==t&&Te.refresh())},Te.getTween=function(e){return e&&A?A.tween:ee},Te.setPositions=function(e,t,r,n){if(de){var o=de.scrollTrigger,i=de.duration(),a=o.end-o.start;e=o.start+a*e/i,t=o.start+a*t/i}Te.refresh(!1,!1,{start:Da(e,r&&!!Te._startClamp),end:Da(t,r&&!!Te._endClamp)},n),Te.update()},Te.adjustPinSpacing=function(e){if(Z&&e){var t=Z.indexOf(he.d)+1;Z[t]=parseFloat(Z[t])+e+xt,Z[1]=parseFloat(Z[1])+e+xt,Et(Z)}},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(!0,!0),Te.enabled=Te.isActive=!1,t||ee&&ee.pause(),re=0,n&&(n.uncache=1),Se&&xb(ScrollTrigger,"refreshInit",Se),te&&(te.pause(),A.tween&&A.tween.kill()&&(A.tween=0)),!me)){for(var r=Tt.length;r--;)if(Tt[r].scroller===be&&Tt[r]!==Te)return;xb(be,"resize",Lb),me||xb(be,"scroll",Jb)}},Te.kill=function(e,t){Te.disable(e,t),ee&&!t&&ee.kill(),a&&delete St[a];var r=Tt.indexOf(Te);0<=r&&Tt.splice(r,1),r===Qe&&0<Mt&&Qe--,r=0,Tt.forEach(function(e){return e.scroller===Te.scroller&&(r=1)}),r||rt||(Te.scroll.rec=0),O&&(O.scrollTrigger=null,e&&O.revert({kill:!1}),t||O.kill()),I&&[I,L,Y,F].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ot===Te&&(ot=0),ae&&(n&&(n.uncache=1),r=0,Tt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0)),E.onKill&&E.onKill(Te)},Tt.push(Te),Te.enable(!1,!1),i&&i(Te),O&&O.add&&!N){var v=Te.update;Te.update=function(){Te.update=v,B||q||Te.refresh()},He.delayedCall(.01,Te.update),N=.01,B=q=0}else Te.refresh();ae&&function _queueRefreshAll(){if(nt!==kt){var e=nt=kt;requestAnimationFrame(function(){return e===kt&&Pt(!0)})}}()}else this.update=this.refresh=this.kill=Ha},ScrollTrigger.register=function register(e){return s||(He=e||Ka(),Ja()&&window.document&&ScrollTrigger.enable(),s=lt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){lt=0,Tt.forEach(function(e){return e[r?"kill":"disable"](t)}),xb(Ne,"wheel",Jb),xb(Xe,"scroll",Jb),clearInterval(u),xb(Xe,"touchcancel",Ha),xb(We,"touchstart",Ha),vb(xb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(xb,Xe,"pointerup,touchend,mouseup",Ga),c.kill(),Ra(xb);for(var e=0;e<Ie.length;e+=3)yb(xb,Ie[e],Ie[e+1]),yb(xb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ne=window,Xe=document,Je=Xe.documentElement,We=Xe.body,He&&(Ve=He.utils.toArray,Ue=He.utils.clamp,x=He.core.context||Ha,$e=He.core.suppressOverwrites||Ha,w=Ne.history.scrollRestoration||"auto",Q=Ne.pageYOffset,He.core.globals("ScrollTrigger",ScrollTrigger),We)){lt=1,(_=document.createElement("div")).style.height="100vh",_.style.position="absolute",Yb(),function _rafBugFix(){return lt&&requestAnimationFrame(_rafBugFix)}(),k.register(He),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),b=1===k.isTouch,wb(Ne,"wheel",Jb),l=[Ne,Xe,Je,We],He.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=He.matchMedia();for(t in e)r.add(t,e[t]);return r},He.addEventListener("matchMediaInit",function(){return Sb()}),He.addEventListener("matchMediaRevert",function(){return Rb()}),He.addEventListener("matchMedia",function(){Pt(0,1),U("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Kb(),Kb})):console.warn("Requires GSAP 3.11.0 or later"),Kb(),wb(Xe,"scroll",Jb);var e,t,r=We.style,n=r.borderTopStyle,o=He.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=wt(We),Fe.m=Math.round(e.top+Fe.sc())||0,Ye.m=Math.round(e.left+Ye.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Ib,250),He.delayedCall(.5,function(){return it=0}),wb(Xe,"touchcancel",Ha),wb(We,"touchstart",Ha),vb(wb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(wb,Xe,"pointerup,touchend,mouseup",Ga),f=He.utils.checkPrefix("transform"),ee.push(f),s=at(),c=He.delayedCall(.2,Pt).pause(),g=[Xe,"visibilitychange",function(){var e=Ne.innerWidth,t=Ne.innerHeight;Xe.hidden?(d=e,p=t):d===e&&p===t||Lb()},Xe,"DOMContentLoaded",Pt,Ne,"load",Pt,Ne,"resize",Lb],Ra(wb),Tt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)yb(xb,Ie[t],Ie[t+1]),yb(xb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(tt=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Ib,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ra(xb)||Ra(wb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=La(r);~n&&Ie.splice(n,o?6:2),t&&(o?Le.unshift(Ne,t,We,t,Je,t):Le.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Tt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(ct(e)?J(e):e).getBoundingClientRect(),o=n[r?ft:dt]*t||0;return r?0<n.right-o&&n.left+o<Ne.innerWidth:0<n.bottom-o&&n.top+o<Ne.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){ct(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?ft:dt],i=null==t?o/2:t in H?H[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ne.innerWidth:(n.top+i)/Ne.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Tt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=W.killAll||[];W={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x(this),this.init(e,t)}ne.version="3.12.5",ne.saveStyles=function(e){return e?Ve(e).forEach(function(e){if(e&&e.style){var t=j.indexOf(e);0<=t&&j.splice(t,5),j.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),x())}}):j},ne.revert=function(e,t){return Sb(!e,t)},ne.create=function(e,t){return new ne(e,t)},ne.refresh=function(e){return e?Lb():(s||ne.register())&&Pt(!0)},ne.update=function(e){return++Ie.cache&&Z(!0===e?2:0)},ne.clearScrollMemory=Tb,ne.maxScroll=function(e,t){return Qa(e,t?Ye:Fe)},ne.getScrollFunc=function(e,t){return K(J(e),t?Ye:Fe)},ne.getById=function(e){return St[e]},ne.getAll=function(){return Tt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},ne.isScrolling=function(){return!!st},ne.snapDirectional=tb,ne.addEventListener=function(e,t){var r=W[e]||(W[e]=[]);~r.indexOf(t)||r.push(t)},ne.removeEventListener=function(e,t){var r=W[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ne.batch=function(e,t){function Cp(e,t){var r=[],n=[],o=He.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ta(t[r])&&"onRefreshInit"!==r?Cp(0,t[r]):t[r];return Ta(a)&&(a=a(),wb(ne,"refresh",function(){return a=t.batchMax()})),Ve(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ne.create(t))}),n};function tc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function uc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Je&&uc(We,t)}function wc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||He.core.getCache(i),s=at();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==We&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!ie[(t=mb(i)).overflowY]&&!ie[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!La(i)&&(ie[(t=mb(i)).overflowY]||ie[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function xc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&wc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&wb(Xe,k.eventTypes[0],se,!1,!0)},onDisable:function onDisable(){return xb(Xe,k.eventTypes[0],se,!0)}})}function Bc(e){function zq(){return o=!1}function Cq(){i=Qa(p,Fe),S=Ue(E?1:0,i),f&&(T=Ue(0,Qa(p,Ye))),l=kt}function Dq(){v._gsap.y=Ia(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Jq(){Cq(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=e.onRelease,p=J(e.target)||Je,g=He.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(p,Fe),m=K(p,Ye),y=1,x=(k.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,w=0,_=Ta(t)?function(){return t(n)}:function(){return t||2.8},C=xc(p,e.type,!0,r),T=Ha,S=Ha;return v&&He.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(zq);var e=Ia(n.deltaY/2),t=S(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ia((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,Z()}return!0}b.offset&&Dq(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ia((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),a.pause(),e!==y&&uc(p,1.01<y||!f&&"x"),c=m(),u=b(),Cq(),l=kt},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Dq(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=tc(m,r,n,Qa(p,Ye)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=tc(b,r,n,Qa(p,Fe)),a.vars.scrollY=S(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&He.to({},{onUpdate:Jq,duration:o})}else s.restart(!0);d&&d(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<at()-w&&(l=0,w=at())},e.onChange=function(e,t,r,n,o){if(kt!==l&&Cq(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Dq();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=S(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&Z()},e.onEnable=function(){uc(p,!f&&"x"),ne.addEventListener("refresh",Jq),wb(Ne,"resize",Jq),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){uc(p,!0),xb(Ne,"resize",Jq),ne.removeEventListener("refresh",Jq),C.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&He.ticker.add(Ha),s=n._dc,a=He.to(n,{ease:"power4",paused:!0,inherit:!1,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pc(b,b(),function(){return a.pause()})},onUpdate:Z,onComplete:s.vars.onComplete}),n}var oe,ie={auto:1,scroll:1},ae=/(input|label|select|textarea)/i,se=function _captureInputs(e){var t=ae.test(e.target.tagName);(t||oe)&&(e._gsapAllow=!0,oe=t)};ne.sort=function(e){return Tt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},ne.observe=function(e){return new k(e)},ne.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill(),void(v=e);var t=e instanceof k?e:Bc(e);return v&&v.target===t.target&&v.kill(),La(t.target)&&(v=t),t},ne.core={_getVelocityProp:L,_inputObserver:xc,_scrollers:Ie,_proxies:Le,bridge:{ss:function ss(){st||U("scrollStart"),st=at()},ref:function ref(){return je}}},Ka()&&He.registerPlugin(ne),e.ScrollTrigger=ne,e.default=ne;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/local/templates/abutik/assets/js/main.js?178332920718231";s:6:"source";s:41:"/local/templates/abutik/assets/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // Функция для изменения размера шрифта в зависимости от размера окна
  function setWindowResize() {
    let width = window.innerWidth;
    let fontSize;

    if (width >= 1441) {
      fontSize = Math.round(Math.max(10, (0.5 * width) / 100));
    } else {
      fontSize = 10;
    }

    // Применяем размер шрифта к элементу <html>
    document.documentElement.style.setProperty("font-size", `${fontSize}px`);
  }

  setWindowResize();
  window.addEventListener("resize", setWindowResize);

  let header = document.querySelector(".header");

  //Плавный scroll
  let mm = gsap.matchMedia();
  let smoother;

  mm.add("(min-width: 1024px)", () => {
    smoother = ScrollSmoother.create({
      smooth: 0.6,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: {
        allowNestedScroll: true,
      },
      ignoreMobileResize: true,
      ease: "power1.out",
      onUpdate: (self) => {
        if (self.scrollTop() > 0) {
          header.classList.add("header_fixed");
        } else {
          header.classList.remove("header_fixed");
        }
      },
    });
  });
  mm.add("(max-width: 1024px)", () => {
    smoother = {
      isPaused: false,
      paused: function (value) {
        if (typeof value === "boolean") {
          this.isPaused = value;
          if (this.isPaused) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
        } else {
          return this.isPaused;
        }
      },
    };
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header"); // Находим элемент с тегом <header>
      if (window.scrollY > 0) {
        header.classList.add("header_fixed");
      } else {
        header.classList.remove("header_fixed");
      }
    });
  });

  //актуальный год в футере
  let footerDate = document.querySelector("#footer-date");
  function getCurrentYear() {
    let year = new Date().getFullYear();
    footerDate.textContent = `© ${year}  "А" Бутик недвижимости". Все права защищены.`;
  }
  getCurrentYear();

  let $headerBurger = document.querySelector('[data-role="headerBurger"]');
  let menuMain = document.querySelector("[data-menu]");
  let menuHideLink = document.querySelectorAll("[data-haide-link]");
  let menuLogo = document.querySelector(".header__logo-wrapper");
  // let $menuPopup = document.querySelector('[data-role="headerMobileMenu"]');

  // открытие мобильного меню и трансформация бургера в крестик
  $headerBurger.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    $headerBurger.classList.toggle("_active");
    if ($headerBurger.classList.contains("_active")) {
      smoother?.paused(true);
      document.body.classList.add("no-scroll");
      $headerBurger.setAttribute("aria-expanded", true);
      menuMain.classList.add("_show");
      menuLogo.classList.add("_left");
      menuHideLink.forEach((elem) => {
        elem.classList.add("hide-link");
      });
    } else {
      smoother?.paused(false);
      document.body.classList.remove("no-scroll");
      $headerBurger.setAttribute("aria-expanded", false);
      menuMain.classList.remove("_show");
      menuLogo.classList.remove("_left");
      menuHideLink.forEach((elem) => {
        elem.classList.remove("hide-link");
      });
    }
  });

  // Раскрытие меню в мобильной версии
  let mobileShowMenu = document.querySelectorAll("[data-mobile-show]");

  mobileShowMenu.forEach((item) => {
    item.addEventListener("click", (e) => {
      let block = item.querySelector(".nav");
      if (item.dataset.open !== "true") {
        // если значение data-атрибута open у элемента не равно 'true' и блок с контентом еще не отображен
        item.dataset.open = "true"; // тогда устанавливаем значение 'true'
        block.style.maxHeight = `${block.scrollHeight}px`; // и блоку с контентом устанавливаем inline-свойсво max-height со вычисленным значением полной высоты этого блока
      } else {
        // если блок с контентом отображен и значение data-атрибута open у элемента равно 'true'
        item.dataset.open = "false"; // тогда устанавливаем значение 'false'
        block.style.maxHeight = ""; // и сбрасываем ранее установленное inline-свойсво max-height
      }
      item.classList.toggle("_show");
    });
  });

  Fancybox.bind("[data-fancybox-finishing]", {
    mainClass: "finishing-popup",
    on: {
      "*": (event, fancybox, slide) => {
        console.log(`event: ${event}`);
      },
      done: (fancybox, slide) => {
        // modal is open pause ScrollSmoother
        smoother.paused(true);
      },
      destroy: (fancybox, slide) => {
        // modal is closed un-pause ScrollSmoother
        smoother.paused(false);
      },
    },
  });

  Fancybox.bind("[data-fancybox-feedback]", {
    mainClass: "success-fancy",
    on: {
      "*": (event, fancybox, slide) => {
        // console.log(`event: ${event}`);
      },
      done: (fancybox, slide) => {
        // modal is open pause ScrollSmoother
        smoother.paused(true);
      },
      destroy: (fancybox, slide) => {
        // modal is closed un-pause ScrollSmoother
        smoother.paused(false);
      },
    },
  });

  /**
   * Табы
   */
  const tabs = document.querySelectorAll("[data-tab]");
  const sections = document.querySelectorAll("[data-content]");

  function tabClick(event) {
    const tabId = event.target.dataset.id;

    [...tabs].forEach((tab, i) => {
      tab.classList.remove("_active");
      sections[i].classList.remove("_active");
    });

    tabs[tabId - 1].classList.add("_active");
    sections[tabId - 1].classList.add("_active");
  }

  [...tabs].forEach((tab) => {
    tab.addEventListener("click", (e) => {
      tabClick(e);
      if (window.innerWidth <= 1024) {
        tabBtnText.innerHTML = tab.textContent;
        tabBtn.click();
      }
    });
  });

  // Табы в мобильной версии
  let tabBtn = document.querySelector("[data-tab-btn]"),
    tabList = document.querySelector("[data-tab-list]"),
    tabBtnText = document.querySelector(".tab__btn-text");

  if (tabBtn) {
    tabBtn.addEventListener("click", (e) => {
      if (tabBtn.dataset.open !== "true") {
        // если значение data-атрибута open у элемента не равно 'true' и блок с контентом еще не отображен
        tabBtn.dataset.open = "true"; // тогда устанавливаем значение 'true'
        tabList.style.maxHeight = `${tabList.scrollHeight}px`; // и блоку с контентом устанавливаем inline-свойсво max-height со вычисленным значением полной высоты этого блока
      } else {
        // если блок с контентом отображен и значение data-атрибута open у элемента равно 'true'
        tabBtn.dataset.open = "false"; // тогда устанавливаем значение 'false'
        tabList.style.maxHeight = ""; // и сбрасываем ранее установленное inline-свойсво max-height
      }
      tabBtn.classList.toggle("_show");
    });
  }

  // Отправка формы

  // Загружаем капчу для каждой формы с задержкой

  const forms = document.querySelectorAll("form[data-role]");

  let delay = 0;

  forms.forEach((form, i) => {
    setTimeout(() => {
      loadCaptcha(form);
    }, delay);
    delay += 300; // 300ms между вызовами
  });

  document
    .querySelectorAll("form[data-role]")
    .forEach((form) => loadCaptcha(form));

  function sendRequest(url, formRole) {
    const forms = document.querySelectorAll(`form[data-role="${formRole}"]`);

    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = form.querySelector('[name="name"]').value;
        let phone = form.querySelector('[name="tel"]')?.value || null;
        let email = form.querySelector('[name="email"]')?.value || null;
        let source = form.querySelector('[name="source"]')?.value || null;
        let formId = form.getAttribute("id");
        let isError = false;

        let nameField = form.querySelector('[name="name"]');
        if (!nameField || nameField.value.length < 2) {
          nameField.classList.add("error");
          isError = true;
        } else {
          nameField.classList.remove("error");
        }

        const policyAgreement = form.querySelector(
          '[data-role="policyAgreement"]',
        );
        const policyBlock = policyAgreement?.closest(".form__agreement");

        if (policyAgreement && !policyAgreement.checked) {
          policyBlock?.classList.remove("_error");
          void policyBlock?.offsetWidth;
          policyBlock?.classList.add("_error");
          policyAgreement.focus();
          isError = true;
        } else {
          policyBlock?.classList.remove("_error");
        }

        if (isError) return;

        let data = {
          name,
          source,
          captcha_code: form.querySelector('[name="captcha_code"]').value,
          captcha_word: form.querySelector('[name="captcha_word"]').value,
        };

        if (phone) data.phone = phone;
        if (email) data.email = email;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));

        xhr.onload = function () {
          console.log(xhr.responseText);
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);

            if (!response.success) {
              const errorBlock = form.querySelector(".captcha-error");
              if (errorBlock) {
                errorBlock.textContent =
                  response.message || "Ошибка при отправке формы";
              }
              loadCaptcha(form);
              return;
            }

            ym(98221740, "reachGoal", formId);

            // var ct_site_id = "48530";
            // var ct_data = {
            //   fio: name,
            //   phoneNumber: phone,
            //   email: email,
            //   subject: "Заявка с сайта А-Бутик",
            //   tags: "",
            //   comment: "Форма обратной связи",
            //   requestUrl: location.href,
            //   sessionId: window.ct("calltracking_params", "mod_id").sessionId,
            // };
            // jQuery.ajax({
            //   url:
            //     "https://api.calltouch.ru/calls-service/RestAPI/requests/" +
            //     ct_site_id +
            //     "/register/",
            //   dataType: "json",
            //   type: "POST",
            //   data: ct_data,
            // });

            ym(98221740, "reachGoal", formId);

            if (formRole == "form-ipoteka") {
              console.log("Ипотека");
              window.location.href = "/thanks/ipoteka.php";
              exit();
            } else {
              window.location.href = "/thanks";
            }

            // Fancybox.show(
            //   [
            //     {
            //       src:
            //         "<div class='text_center' style='flex-direction: column; align-items: center'><h2 class='title title_middle'>Успешно отправлено</h2>" +
            //         "<div class='text text_14 pt_20'>Наш менеджер по ипотечному кредитованию <br> скоро свяжется с вами</div> <br>" +
            //         "<a class='button' onclick='Fancybox.close();' id='buttonFasyClose'>Закрыть</a>" +
            //         "<div class='success-fancy__count'>Это окно автоматически закроется через <span id=\"countdown\">10</span> сек.</div></div>",
            //       type: "html",
            //     },
            //   ],
            //   { mainClass: "success-fancy" }
            // );

            // let time = 10;
            // const timer = setInterval(() => {
            //   const el = document.getElementById("countdown");
            //   if (!el) return clearInterval(timer);
            //   if (time <= 0) {
            //     clearInterval(timer);
            //     Fancybox.close();
            //   } else {
            //     el.textContent = time--;
            //   }
            // }, 1000);

            form.reset();
            loadCaptcha(form);
          }
        };
      });
    });
  }

  // форма на главной
  sendRequest("/local/app/ajax/ajax.order-feedback.php", "form-submit");
  sendRequest("/local/app/ajax/ajax.order-feedback.php", "form-ipoteka");

  // форма на главной (вторичка)
  sendRequest(
    "/local/app/ajax/ajax.order-feedback-secondary.php",
    "secondary-real-estate",
  );

  // подписка на новости
  sendRequest(
    "/local/app/ajax/ajax.order-feedback-subscription.php",
    "form-subscription",
  );

  // Офис продаж
  sendRequest(
    "/local/app/ajax/ajax.order-feedback-salesoffice.php",
    "form-sales-office",
  );

  const phoneInput = document.querySelectorAll('[name="tel"]');
  phoneInput.forEach((elem) => {
    IMask(elem, {
      mask: "+{7}(000)000-00-00",
    });
  });

  document.querySelectorAll('[data-role="policyAgreement"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        input.closest(".form__agreement")?.classList.remove("_error");
      }
    });
  });

  //Проверка cookies

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)",
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function checkCookies() {
    let cookieNote = document.getElementById("cookie_note");
    let cookieBtnAccept = cookieNote.querySelector("#cookies_accept");

    // Если куки cookies_policy нет или она просрочена, то показываем уведомление
    if (!getCookie("cookies_policy")) {
      cookieNote.classList.add("show");
    }

    // При клике на кнопку устанавливаем куку cookies_policy на один год
    cookieBtnAccept.addEventListener("click", function () {
      setCookie("cookies_policy", "true", 365);
      cookieNote.classList.remove("show");
    });
  }

  checkCookies();

  //Костыль для чекбоксов в футере в мобильном меню
  if (window.innerWidth < 1060) {
    // Выбираем родительский элемент, который содержит все label
    document.addEventListener("touchend", (e) => {
      // Проверяем, был ли клик совершен по элементу с классом 'menu-drop__label'
      const label = e.target.closest(".footer__nav-label");

      if (label) {
        e.preventDefault(); // Предотвращаем стандартное поведение

        const inputId = label.getAttribute("for");
        const input = document.getElementById(inputId);

        if (input) {
          input.checked = !input.checked; // Инвертируем состояние чекбокса
          input.dispatchEvent(new Event("change", { bubbles: true })); // Запускаем событие "change"
        }
      }
    });
  }

  // Обработка модалки для блока документов
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});

function loadCaptcha(form) {
  fetch("/local/app/ajax/get-captcha.php")
    .then((res) => res.json())
    .then((data) => {
      const img = form.querySelector('img[data-role="captcha"]');
      const codeField = form.querySelector('[name="captcha_code"]');

      if (!img || !codeField) {
        return;
      }

      img.src = "/bitrix/tools/captcha.php?captcha_code=" + data.code;
      codeField.value = data.code;
    })
    .catch((err) => {
      console.error("[CAPTCHA] Ошибка загрузки:", err);
    });
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/local/templates/abutik/assets/js/expandable-text.js?17543892821662";s:6:"source";s:52:"/local/templates/abutik/assets/js/expandable-text.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict"
document.addEventListener("DOMContentLoaded", (event) => {
	// Выбираем все блоки с классом 'developer-info'
	const developerInfoSections = document.querySelectorAll('.developer-info');

	developerInfoSections.forEach(section => {
		let expandableFullTextButton = section.querySelector('[data-role="expandableFullTextButton"]');
		let expandableTextOverlay = section.querySelector('[data-role="expandableTextOverlay"]');
		const expandableTextActiveClass = '_active';
		const expandableButtonDisactiveClass = '_disactive';

		// Проверяем высоту текста
		const maxHeight = 150; // Максимальная высота текста, при которой кнопка будет показана

		if (expandableTextOverlay.scrollHeight > maxHeight) {
			expandableTextOverlay.style.maxHeight = `${maxHeight}px`; // Ограничиваем высоту текста
			expandableTextOverlay.style.overflow = 'hidden'; // Скрываем переполнение

			expandableFullTextButton.addEventListener('click', (e) => {
				e.preventDefault();
				expandableTextOverlay.classList.add(expandableTextActiveClass);
				expandableTextOverlay.style.maxHeight = 'none'; // Убираем ограничение высоты
				expandableFullTextButton.classList.add(expandableButtonDisactiveClass);
				ScrollTrigger.refresh(); // Обновляем ScrollTrigger (если используется)
			}, { once: true });
		} else {
			expandableFullTextButton.style.display = 'none'; // Скрываем кнопку, если текст короткий
		}
	});
});

/* End */
;; /* /local/templates/abutik/assets/js/plugins/gsap.js?175438928272213*/
; /* /local/templates/abutik/assets/js/plugins/imask.js?1754389282124056*/
; /* /local/templates/abutik/assets/js/plugins/fancybox.min.js?1754389282142278*/
; /* /local/templates/abutik/assets/js/plugins/ScrollSmoother.js?175438928213570*/
; /* /local/templates/abutik/assets/js/plugins/ScrollTrigger.js?175438928243379*/
; /* /local/templates/abutik/assets/js/main.js?178332920718231*/
; /* /local/templates/abutik/assets/js/expandable-text.js?17543892821662*/
