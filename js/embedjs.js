!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).amplitude=t()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}var f="$default_instance",c=2,n=4096,a=1e3,h="$identify",g="$groupidentify",v="amplitude_lastEventId",m="amplitude_lastEventTime",y="amplitude_lastIdentifyId",_="amplitude_lastSequenceNumber",w="amplitude_sessionId",b="amplitude_deviceId",I="amplitude_optOut",S="amplitude_userId",i="amplitude_cookie_test",o="revenue_amount",s="$productId",u="$quantity",p="$price",d="$revenueType",E="amp_device_id",O="referrer",x="utm_source",N="utm_medium",k="utm_campaign",T="utm_term",P="utm_content",A=function(e){for(var t="",n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t+=String.fromCharCode(i):(127<i&&i<2048?t+=String.fromCharCode(i>>6|192):(t+=String.fromCharCode(i>>12|224),t+=String.fromCharCode(i>>6&63|128)),t+=String.fromCharCode(63&i|128))}return t},R=function(e){for(var t="",n=0,i=0,r=0,o=0;n<e.length;)(i=e.charCodeAt(n))<128?(t+=String.fromCharCode(i),n++):191<i&&i<224?(r=e.charCodeAt(n+1),t+=String.fromCharCode((31&i)<<6|63&r),n+=2):(r=e.charCodeAt(n+1),o=e.charCodeAt(n+2),t+=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o),n+=3);return t},q={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){try{if(window.btoa&&window.atob)return window.btoa(unescape(encodeURIComponent(e)))}catch(e){}return q._encode(e)},_encode:function(e){var t,n,i,r,o,s,a,u="",p=0;for(e=A(e);p<e.length;)r=(t=e.charCodeAt(p++))>>2,o=(3&t)<<4|(n=e.charCodeAt(p++))>>4,s=(15&n)<<2|(i=e.charCodeAt(p++))>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),u=u+q._keyStr.charAt(r)+q._keyStr.charAt(o)+q._keyStr.charAt(s)+q._keyStr.charAt(a);return u},decode:function(e){try{if(window.btoa&&window.atob)return decodeURIComponent(escape(window.atob(e)))}catch(e){}return q._decode(e)},_decode:function(e){var t,n,i,r,o,s,a="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<e.length;)t=q._keyStr.indexOf(e.charAt(u++))<<2|(r=q._keyStr.indexOf(e.charAt(u++)))>>4,n=(15&r)<<4|(o=q._keyStr.indexOf(e.charAt(u++)))>>2,i=(3&o)<<6|(s=q._keyStr.indexOf(e.charAt(u++))),a+=String.fromCharCode(t),64!==o&&(a+=String.fromCharCode(n)),64!==s&&(a+=String.fromCharCode(i));return a=R(a)}},j=Object.prototype.toString;function C(e){switch(j.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!=e?"nan":e&&1===e.nodeType?"element":"undefined"!=typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)?"buffer":t(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))}var e,U={DISABLE:0,ERROR:1,WARN:2,INFO:3},D=U.WARN,M={error:function(e){D>=U.ERROR&&z(e)},warn:function(e){D>=U.WARN&&z(e)},info:function(e){D>=U.INFO&&z(e)}},z=function(e){try{console.log("[Amplitude] "+e)}catch(e){}},B=function(e){return"string"===C(e)&&e.length>n?e.substring(0,n):e},G=function(e){var t=C(e);if("object"!==t)return M.error("Error: invalid properties format. Expecting Javascript object, received "+t+", ignoring"),{};if(Object.keys(e).length>a)return M.error("Error: too many properties (more than 1000), ignoring"),{};var n={};for(var i in e)if(e.hasOwnProperty(i)){var r=i,o=C(r);"string"!==o&&(r=String(r),M.warn("WARNING: Non-string property key, received type "+o+', coercing to string "'+r+'"'));var s=F(r,e[i]);null!==s&&(n[r]=s)}return n},L=["nan","function","arguments","regexp","element"],F=function e(t,n){var i=C(n);if(-1!==L.indexOf(i))M.warn('WARNING: Property key "'+t+'" with invalid value type '+i+", ignoring"),n=null;else if("undefined"===i)n=null;else if("error"===i)n=String(n),M.warn('WARNING: Property key "'+t+'" with value type error, coercing to '+n);else if("array"===i){for(var r=[],o=0;o<n.length;o++){var s=n[o],a=C(s);"array"!==a?"object"===a?r.push(G(s)):r.push(e(t,s)):M.warn("WARNING: Cannot have "+a+" nested in an array property value, skipping")}n=r}else"object"===i&&(n=G(n));return n},K=function(e,t){var n=C(t);if("string"===n)return t;if("date"===n||"number"===n||"boolean"===n)return t=String(t),M.warn("WARNING: Non-string groupName, received type "+n+', coercing to string "'+t+'"'),t;if("array"===n){for(var i=[],r=0;r<t.length;r++){var o=t[r],s=C(o);"array"!==s&&"object"!==s?"string"===s?i.push(o):"date"!==s&&"number"!==s&&"boolean"!==s||(o=String(o),M.warn("WARNING: Non-string groupName, received type "+s+', coercing to string "'+o+'"'),i.push(o)):M.warn("WARNING: Skipping nested "+s+" in array groupName")}return i}M.warn("WARNING: Non-string groupName, received type "+n+". Please use strings or array of strings for groupName")},V=function(e){U.hasOwnProperty(e)&&(D=U[e])},W=M,$=function(e){return!e||0===e.length},J=function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?void 0:decodeURIComponent(n[1].replace(/\+/g," "))},Q=function e(t){if("array"===C(t))for(var n=0;n<t.length;n++)t[n]=e(t[n]);else if("object"===C(t))for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i]));else t=B(t);return t},X=function(e){var t=C(e);if("object"!==t)return M.error("Error: invalid groups format. Expecting Javascript object, received "+t+", ignoring"),{};var n={};for(var i in e)if(e.hasOwnProperty(i)){var r=i,o=C(r);"string"!==o&&(r=String(r),M.warn("WARNING: Non-string groupType, received type "+o+', coercing to string "'+r+'"'));var s=K(r,e[i]);null!==s&&(n[r]=s)}return n},H=function(e,t,n){return C(e)===n||(M.error("Invalid "+t+" input type. Expected "+n+" but received "+C(e)),!1)},Z=G,Y=function(e,t,n){var i=null!==t?n.expirationDays:-1;if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3),i=r}var o=e+"="+t;i&&(o+="; expires="+i.toUTCString()),o+="; path=/",n.domain&&(o+="; domain="+n.domain),n.secure&&(o+="; Secure"),document.cookie=o},ee=function(e){try{for(var t=document.cookie.split(";"),n=null,i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e)){n=r.substring(e.length,r.length);break}}return n}catch(e){return null}},te={expirationDays:void 0,domain:void 0},ne=function(e){var t,n,i=(t=e,(n=document.createElement("a")).href=t,n.hostname||location.hostname).split("."),r=i[i.length-1],o=[];if(4===i.length&&r===parseInt(r,10))return o;if(i.length<=1)return o;for(var s=i.length-2;0<=s;--s)o.push(i.slice(s).join("."));for(var a=0;a<o.length;++a){var u="__tld_test__",p=o[a],c={domain:"."+p};if(Y(u,1,c),ee(u))return Y(u,null,c),p}return""},ie=function(e){var t="";return te.domain&&(t="."===te.domain.charAt(0)?te.domain.substring(1):te.domain),e+t},re=function(e){var t=ie(e)+"=",n=ee(t);try{if(n)return JSON.parse(q.decode(n))}catch(e){return null}return null},oe=function(e,t){try{return Y(ie(e),q.encode(JSON.stringify(t)),te),!0}catch(e){return!1}},se=function(e){try{return Y(ie(e),null,te),!0}catch(e){return!1}},ae={reset:function(){te={expirationDays:void 0,domain:void 0}},options:function(e){if(0===arguments.length)return te;e=e||{},te.expirationDays=e.expirationDays,te.secure=e.secure;var t=$(e.domain)?"."+ne(window.location.href):e.domain,n=Math.random();te.domain=t,oe("amplitude_test",n);var i=re("amplitude_test");return i&&i===n||(t=null),se("amplitude_test"),te.domain=t,te},get:re,set:oe,remove:se};if(function(){var e,t=new Date;try{return window.localStorage.setItem(t,t),e=window.localStorage.getItem(t)===String(t),window.localStorage.removeItem(t),e}catch(e){}return!1}())e=window.localStorage;else if(window.globalStorage)try{e=window.globalStorage[window.location.hostname]}catch(e){}else{var ue=document.createElement("div"),pe="localStorage";ue.style.display="none",document.getElementsByTagName("head")[0].appendChild(ue),ue.addBehavior&&(ue.addBehavior("#default#userdata"),e={length:0,setItem:function(e,t){ue.load(pe),ue.getAttribute(e)||this.length++,ue.setAttribute(e,t),ue.save(pe)},getItem:function(e){return ue.load(pe),ue.getAttribute(e)},removeItem:function(e){ue.load(pe),ue.getAttribute(e)&&this.length--,ue.removeAttribute(e),ue.save(pe)},clear:function(){ue.load(pe);for(var e,t=0;e=ue.XMLDocument.documentElement.attributes[t++];)ue.removeAttribute(e.name);ue.save(pe),this.length=0},key:function(e){return ue.load(pe),ue.XMLDocument.documentElement.attributes[e]}},ue.load(pe),e.length=ue.XMLDocument.documentElement.attributes.length)}e||(e={length:0,setItem:function(e,t){},getItem:function(e){},removeItem:function(e){},clear:function(){},key:function(e){}});var ce=e,de=function(){this.storage=null};de.prototype._cookiesEnabled=function(){var e,t=String(new Date);try{return ae.set(i,t),e=ae.get(i)===t,ae.remove(i),e}catch(e){}return!1},de.prototype.getStorage=function(){if(null!==this.storage)return this.storage;if(this._cookiesEnabled())this.storage=ae;else{var n="amp_cookiestore_";this.storage={_options:{expirationDays:void 0,domain:void 0,secure:!1},reset:function(){this._options={expirationDays:void 0,domain:void 0,secure:!1}},options:function(e){return 0===arguments.length?this._options:(e=e||{},this._options.expirationDays=e.expirationDays||this._options.expirationDays,this._options.domain=e.domain||this._options.domain||window.location.hostname,this._options.secure=e.secure||!1)},get:function(e){try{return JSON.parse(ce.getItem(n+e))}catch(e){}return null},set:function(e,t){try{return ce.setItem(n+e,JSON.stringify(t)),!0}catch(e){}return!1},remove:function(e){try{ce.removeItem(n+e)}catch(e){return!1}}}}return this.storage};var le="$clearAll",fe=function(){this.userPropertiesOperations={},this.properties=[]};fe.prototype.add=function(e,t){return"number"===C(t)||"string"===C(t)?this._addOperation("$add",e,t):W.error("Unsupported type for value: "+C(t)+", expecting number or string"),this},fe.prototype.append=function(e,t){return this._addOperation("$append",e,t),this},fe.prototype.clearAll=function(){return 0<Object.keys(this.userPropertiesOperations).length?this.userPropertiesOperations.hasOwnProperty(le)||W.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"):this.userPropertiesOperations[le]="-",this},fe.prototype.prepend=function(e,t){return this._addOperation("$prepend",e,t),this},fe.prototype.set=function(e,t){return this._addOperation("$set",e,t),this},fe.prototype.setOnce=function(e,t){return this._addOperation("$setOnce",e,t),this},fe.prototype.unset=function(e){return this._addOperation("$unset",e,"-"),this},fe.prototype._addOperation=function(e,t,n){this.userPropertiesOperations.hasOwnProperty(le)?W.error("This identify already contains a $clearAll operation, skipping operation "+e):-1===this.properties.indexOf(t)?(this.userPropertiesOperations.hasOwnProperty(e)||(this.userPropertiesOperations[e]={}),this.userPropertiesOperations[e][t]=n,this.properties.push(t)):W.error('User property "'+t+'" already used in this identify, skipping operation '+e)};var he="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ge(e,t){return e(t={exports:{}},t.exports),t.exports}var ve=ge(function(s){!function(e){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function a(e,t,n,i,r,o){return d((s=d(d(t,e),d(i,o)))<<(a=r)|s>>>32-a,n);var s,a}function l(e,t,n,i,r,o,s){return a(t&n|~t&i,e,t,r,o,s)}function f(e,t,n,i,r,o,s){return a(t&i|n&~i,e,t,r,o,s)}function h(e,t,n,i,r,o,s){return a(t^n^i,e,t,r,o,s)}function g(e,t,n,i,r,o,s){return a(n^(t|~i),e,t,r,o,s)}function u(e,t){var n,i,r,o,s;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var a=1732584193,u=-271733879,p=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)u=g(u=g(u=g(u=g(u=h(u=h(u=h(u=h(u=f(u=f(u=f(u=f(u=l(u=l(u=l(u=l(r=u,p=l(o=p,c=l(s=c,a=l(i=a,u,p,c,e[n],7,-680876936),u,p,e[n+1],12,-389564586),a,u,e[n+2],17,606105819),c,a,e[n+3],22,-1044525330),p=l(p,c=l(c,a=l(a,u,p,c,e[n+4],7,-176418897),u,p,e[n+5],12,1200080426),a,u,e[n+6],17,-1473231341),c,a,e[n+7],22,-45705983),p=l(p,c=l(c,a=l(a,u,p,c,e[n+8],7,1770035416),u,p,e[n+9],12,-1958414417),a,u,e[n+10],17,-42063),c,a,e[n+11],22,-1990404162),p=l(p,c=l(c,a=l(a,u,p,c,e[n+12],7,1804603682),u,p,e[n+13],12,-40341101),a,u,e[n+14],17,-1502002290),c,a,e[n+15],22,1236535329),p=f(p,c=f(c,a=f(a,u,p,c,e[n+1],5,-165796510),u,p,e[n+6],9,-1069501632),a,u,e[n+11],14,643717713),c,a,e[n],20,-373897302),p=f(p,c=f(c,a=f(a,u,p,c,e[n+5],5,-701558691),u,p,e[n+10],9,38016083),a,u,e[n+15],14,-660478335),c,a,e[n+4],20,-405537848),p=f(p,c=f(c,a=f(a,u,p,c,e[n+9],5,568446438),u,p,e[n+14],9,-1019803690),a,u,e[n+3],14,-187363961),c,a,e[n+8],20,1163531501),p=f(p,c=f(c,a=f(a,u,p,c,e[n+13],5,-1444681467),u,p,e[n+2],9,-51403784),a,u,e[n+7],14,1735328473),c,a,e[n+12],20,-1926607734),p=h(p,c=h(c,a=h(a,u,p,c,e[n+5],4,-378558),u,p,e[n+8],11,-2022574463),a,u,e[n+11],16,1839030562),c,a,e[n+14],23,-35309556),p=h(p,c=h(c,a=h(a,u,p,c,e[n+1],4,-1530992060),u,p,e[n+4],11,1272893353),a,u,e[n+7],16,-155497632),c,a,e[n+10],23,-1094730640),p=h(p,c=h(c,a=h(a,u,p,c,e[n+13],4,681279174),u,p,e[n],11,-358537222),a,u,e[n+3],16,-722521979),c,a,e[n+6],23,76029189),p=h(p,c=h(c,a=h(a,u,p,c,e[n+9],4,-640364487),u,p,e[n+12],11,-421815835),a,u,e[n+15],16,530742520),c,a,e[n+2],23,-995338651),p=g(p,c=g(c,a=g(a,u,p,c,e[n],6,-198630844),u,p,e[n+7],10,1126891415),a,u,e[n+14],15,-1416354905),c,a,e[n+5],21,-57434055),p=g(p,c=g(c,a=g(a,u,p,c,e[n+12],6,1700485571),u,p,e[n+3],10,-1894986606),a,u,e[n+10],15,-1051523),c,a,e[n+1],21,-2054922799),p=g(p,c=g(c,a=g(a,u,p,c,e[n+8],6,1873313359),u,p,e[n+15],10,-30611744),a,u,e[n+6],15,-1560198380),c,a,e[n+13],21,1309151649),p=g(p,c=g(c,a=g(a,u,p,c,e[n+4],6,-145523070),u,p,e[n+11],10,-1120210379),a,u,e[n+2],15,718787259),c,a,e[n+9],21,-343485551),a=d(a,i),u=d(u,r),p=d(p,o),c=d(c,s);return[a,u,p,c]}function p(e){var t,n="",i=32*e.length;for(t=0;t<i;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function c(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var i=8*e.length;for(t=0;t<i;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function i(e){var t,n,i="0123456789abcdef",r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+=i.charAt(t>>>4&15)+i.charAt(15&t);return r}function n(e){return unescape(encodeURIComponent(e))}function r(e){return p(u(c(t=n(e)),8*t.length));var t}function o(e,t){return function(e,t){var n,i,r=c(e),o=[],s=[];for(o[15]=s[15]=void 0,16<r.length&&(r=u(r,8*e.length)),n=0;n<16;n+=1)o[n]=909522486^r[n],s[n]=1549556828^r[n];return i=u(o.concat(c(t)),512+8*t.length),p(u(s.concat(i),640))}(n(e),n(t))}function t(e,t,n){return t?n?o(t,e):i(o(t,e)):n?r(e):i(r(e))}s.exports?s.exports=t:e.md5=t}(he)}),me=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})},ye=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var be=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,r=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var s in n=Object(arguments[o]))_e.call(n,s)&&(r[s]=n[s]);if(ye){i=ye(n);for(var a=0;a<i.length;a++)we.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r},Ie="%[a-f0-9]{2}";new RegExp(Ie,"gi"),new RegExp("("+Ie+")+","gi");function Se(e,t){return t.encode?t.strict?me(e):encodeURIComponent(e):e}var Ee=function(i,r){!1===(r=be({encode:!0,strict:!0,arrayFormat:"none"},r)).sort&&(r.sort=function(){});var o=function(i){switch(i.arrayFormat){case"index":return function(e,t,n){return null===t?[Se(e,i),"[",n,"]"].join(""):[Se(e,i),"[",Se(n,i),"]=",Se(t,i)].join("")};case"bracket":return function(e,t){return null===t?Se(e,i):[Se(e,i),"[]=",Se(t,i)].join("")};default:return function(e,t){return null===t?Se(e,i):[Se(e,i),"=",Se(t,i)].join("")}}}(r);return i?Object.keys(i).sort(r.sort).map(function(t){var e=i[t];if(void 0===e)return"";if(null===e)return Se(t,r);if(Array.isArray(e)){var n=[];return e.slice().forEach(function(e){void 0!==e&&n.push(o(t,e,n.length))}),n.join("&")}return Se(t,r)+"="+Se(e,r)}).filter(function(e){return 0<e.length}).join("&"):""},Oe=function(e,t){this.url=e,this.data=t||{}};Oe.prototype.send=function(e){if(!!window.XDomainRequest){var t=new window.XDomainRequest;t.open("POST",this.url,!0),t.onload=function(){e(200,t.responseText)},t.onerror=function(){"Request Entity Too Large"===t.responseText?e(413,t.responseText):e(500,t.responseText)},t.ontimeout=function(){},t.onprogress=function(){},t.send(Ee(this.data))}else{var n=new XMLHttpRequest;n.open("POST",this.url,!0),n.onreadystatechange=function(){4===n.readyState&&e(n.status,n.responseText)},n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.send(Ee(this.data))}};var xe=function(){this._price=null,this._productId=null,this._quantity=1,this._revenueType=null,this._properties=null};xe.prototype.setProductId=function(e){return"string"!==C(e)?W.error("Unsupported type for productId: "+C(e)+", expecting string"):$(e)?W.error("Invalid empty productId"):this._productId=e,this},xe.prototype.setQuantity=function(e){return"number"!==C(e)?W.error("Unsupported type for quantity: "+C(e)+", expecting number"):this._quantity=parseInt(e),this},xe.prototype.setPrice=function(e){return"number"!==C(e)?W.error("Unsupported type for price: "+C(e)+", expecting number"):this._price=e,this},xe.prototype.setRevenueType=function(e){return"string"!==C(e)?W.error("Unsupported type for revenueType: "+C(e)+", expecting string"):this._revenueType=e,this},xe.prototype.setEventProperties=function(e){return"object"!==C(e)?W.error("Unsupported type for eventProperties: "+C(e)+", expecting object"):this._properties=Z(e),this},xe.prototype._isValidRevenue=function(){return"number"===C(this._price)||(W.error("Invalid revenue, need to set price field"),!1)},xe.prototype._toJSONObject=function(){var e="object"===C(this._properties)?this._properties:{};return null!==this._productId&&(e[s]=this._productId),null!==this._quantity&&(e[u]=this._quantity),null!==this._price&&(e[p]=this._price),null!==this._revenueType&&(e[d]=this._revenueType),e};var Ne=ge(function(b,I){!function(r,d){var l="function",e="model",t="name",n="type",i="vendor",o="version",s="architecture",a="console",u="mobile",p="tablet",c="smarttv",f="wearable",h={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2==0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:d},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},g={rgx:function(e,t){for(var n,i,r,o,s,a,u=0;u<t.length&&!s;){var p=t[u],c=t[u+1];for(n=i=0;n<p.length&&!s;)if(s=p[n++].exec(e))for(r=0;r<c.length;r++)a=s[++i],"object"==typeof(o=c[r])&&0<o.length?2==o.length?typeof o[1]==l?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?typeof o[1]!==l||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):d:this[o[0]]=a?o[1].call(this,a,o[2]):d:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):d):this[o]=a||d;u+=2}},str:function(e,t){for(var n in t)if("object"==typeof t[n]&&0<t[n].length){for(var i=0;i<t[n].length;i++)if(h.has(t[n][i],e))return"?"===n?d:n}else if(h.has(t[n],e))return"?"===n?d:n;return e}},v={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},name:{"Opera Mobile":"Opera Mobi","IE Mobile":"IEMobile"}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},name:{"Windows Phone":"Windows Phone OS"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[t,o],[/(opios)[\/\s]+([\w\.]+)/i],[[t,"Opera Mini"],o],[/\s(opr)\/([\w\.]+)/i],[[t,"Opera"],o],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[t,o],[/(konqueror)\/([\w\.]+)/i],[[t,"Konqueror"],o],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[t,"IE"],o],[/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],[[t,"Edge"],o],[/(yabrowser)\/([\w\.]+)/i],[[t,"Yandex"],o],[/(puffin)\/([\w\.]+)/i],[[t,"Puffin"],o],[/(focus)\/([\w\.]+)/i],[[t,"Firefox Focus"],o],[/(opt)\/([\w\.]+)/i],[[t,"Opera Touch"],o],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[t,"UCBrowser"],o],[/(comodo_dragon)\/([\w\.]+)/i],[[t,/_/g," "],o],[/((?:android.+)crmo|crios)\/([\w\.]+)/i,/android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],[[t,"Chrome Mobile"],o],[/(micromessenger)\/([\w\.]+)/i],[[t,"WeChat"],o],[/(brave)\/([\w\.]+)/i],[[t,"Brave"],o],[/(qqbrowserlite)\/([\w\.]+)/i],[t,o],[/(QQ)\/([\d\.]+)/i],[t,o],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[t,o],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[t,o],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[t,o],[/(MetaSr)[\/\s]?([\w\.]+)/i],[t],[/(LBBROWSER)/i],[t],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[o,[t,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[o,[t,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[t,o],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[o,[t,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[t,/(.+)/,"$1 WebView"],o],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[t,/(.+(?:g|us))(.+)/,"$1 $2"],o],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[o,[t,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[t,o],[/(dolfin)\/([\w\.]+)/i],[[t,"Dolphin"],o],[/(coast)\/([\w\.]+)/i],[[t,"Opera Coast"],o],[/fxios\/([\w\.-]+)/i],[o,[t,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[o,[t,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[o,t],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[t,"GSA"],o],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[t,[o,g.str,v.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[t,o],[/(navigator|netscape)\/([\w\.-]+)/i],[[t,"Netscape"],o],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[t,o]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[s,"amd64"]],[/(ia32(?=;))/i],[[s,h.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[s,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[s,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[s,/ower/,"",h.lowerize]],[/(sun4\w)[;\)]/i],[[s,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[s,h.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[e,i,[n,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[e,[i,"Apple"],[n,p]],[/(apple\s{0,1}tv)/i],[[e,"Apple TV"],[i,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[i,e,[n,p]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[e,[i,"Amazon"],[n,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[e,g.str,v.device.amazon.model],[i,"Amazon"],[n,u]],[/android.+aft([bms])\sbuild/i],[e,[i,"Amazon"],[n,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[e,i,[n,u]],[/\((ip[honed|\s\w*]+);/i],[e,[i,"Apple"],[n,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[i,e,[n,u]],[/\(bb10;\s(\w+)/i],[e,[i,"BlackBerry"],[n,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[e,[i,"Asus"],[n,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[i,"Sony"],[e,"Xperia Tablet"],[n,p]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[i,"Sony"],[n,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[i,e,[n,a]],[/android.+;\s(shield)\sbuild/i],[e,[i,"Nvidia"],[n,a]],[/(playstation\s[34portablevi]+)/i],[e,[i,"Sony"],[n,a]],[/(sprint\s(\w+))/i],[[i,g.str,v.device.sprint.vendor],[e,g.str,v.device.sprint.model],[n,u]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[i,e,[n,p]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[i,[e,/_/g," "],[n,u]],[/(nexus\s9)/i],[e,[i,"HTC"],[n,p]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[e,[i,"Huawei"],[n,u]],[/(microsoft);\s(lumia[\s\w]+)/i],[i,e,[n,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[e,[i,"Microsoft"],[n,a]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[i,"Microsoft"],[n,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[e,[i,"Motorola"],[n,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[e,[i,"Motorola"],[n,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[i,h.trim],[e,h.trim],[n,c]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[i,"Samsung"],[n,c]],[/\(dtv[\);].+(aquos)/i],[e,[i,"Sharp"],[n,c]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[i,"Samsung"],e,[n,p]],[/smart-tv.+(samsung)/i],[i,[n,c],e],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[i,"Samsung"],e,[n,u]],[/sie-(\w*)/i],[e,[i,"Siemens"],[n,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[i,"Nokia"],e,[n,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[e,[i,"Acer"],[n,p]],[/android.+([vl]k\-?\d{3})\s+build/i],[e,[i,"LG"],[n,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[i,"LG"],e,[n,p]],[/(lg) netcast\.tv/i],[i,e,[n,c]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[e,[i,"LG"],[n,u]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[e,[i,"Lenovo"],[n,p]],[/linux;.+((jolla));/i],[i,e,[n,u]],[/((pebble))app\/[\d\.]+\s/i],[i,e,[n,f]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[i,e,[n,u]],[/crkey/i],[[e,"Chromecast"],[i,"Google"]],[/android.+;\s(glass)\s\d/i],[e,[i,"Google"],[n,f]],[/android.+;\s(pixel c)[\s)]/i],[e,[i,"Google"],[n,p]],[/android.+;\s(pixel( [23])?( xl)?)\s/i],[e,[i,"Google"],[n,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[e,/_/g," "],[i,"Xiaomi"],[n,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[e,/_/g," "],[i,"Xiaomi"],[n,p]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[e,[i,"Meizu"],[n,p]],[/(mz)-([\w-]{2,})/i],[[i,"Meizu"],e,[n,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[e,[i,"OnePlus"],[n,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[e,[i,"RCA"],[n,p]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[e,[i,"Dell"],[n,p]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[e,[i,"Verizon"],[n,p]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[i,"Barnes & Noble"],e,[n,p]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[e,[i,"NuVision"],[n,p]],[/android.+;\s(k88)\sbuild/i],[e,[i,"ZTE"],[n,p]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[e,[i,"Swiss"],[n,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[e,[i,"Swiss"],[n,p]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[e,[i,"Zeki"],[n,p]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[i,"Dragon Touch"],e,[n,p]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[e,[i,"Insignia"],[n,p]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[e,[i,"NextBook"],[n,p]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[i,"Voice"],e,[n,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[i,"LvTel"],e,[n,u]],[/android.+;\s(PH-1)\s/i],[e,[i,"Essential"],[n,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[e,[i,"Envizen"],[n,p]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[i,e,[n,p]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[e,[i,"MachSpeed"],[n,p]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[i,e,[n,p]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[e,[i,"Rotor"],[n,p]],[/android.+(KS(.+))\s+build/i],[e,[i,"Amazon"],[n,p]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[i,e,[n,p]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[n,h.lowerize],i,e],[/[\s\/\(](smart-?tv)[;\)]/i],[[n,c]],[/(android[\w\.\s\-]{0,9});.+build/i],[e,[i,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[o,[t,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[t,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[t,o],[/rv\:([\w\.]{1,9}).+(gecko)/i],[o,t]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[t,o],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[[t,g.str,v.os.windows.name],[o,g.str,v.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[t,"Windows"],[o,g.str,v.os.windows.version]],[/\((bb)(10);/i],[[t,"BlackBerry"],o],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[t,o],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[t,"Symbian"],o],[/\((series40);/i],[t],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[t,"Firefox OS"],o],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[[t,"Linux"],o],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[t,"Chromium OS"],o],[/(sunos)\s?([\w\.\d]*)/i],[[t,"Solaris"],o],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[[t,"Linux"],o],[/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],[[t,"iPhone"],[o,/_/g,"."]],[/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],[[t,"iPad"],[o,/_/g,"."]],[/(haiku)\s(\w+)/i],[t,o],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[o,/_/g,"."],[t,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[t,"Mac"],[o,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[t,o]]},y=function(e,t){if("object"==typeof e&&(t=e,e=d),!(this instanceof y))return new y(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=t?h.extend(m,t):m;return this.getBrowser=function(){var e={name:d,version:d};return g.rgx.call(e,n,i.browser),e.major=h.major(e.version),e},this.getCPU=function(){var e={architecture:d};return g.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:d,model:d,type:d};return g.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:d,version:d};return g.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:d,version:d};return g.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};y.VERSION="0.7.19",y.BROWSER={NAME:t,MAJOR:"major",VERSION:o},y.CPU={ARCHITECTURE:s},y.DEVICE={MODEL:e,VENDOR:i,TYPE:n,CONSOLE:a,MOBILE:u,SMARTTV:c,TABLET:p,WEARABLE:f,EMBEDDED:"embedded"},y.ENGINE={NAME:t,VERSION:o},y.OS={NAME:t,VERSION:o},b.exports&&(I=b.exports=y),I.UAParser=y;var _=r&&(r.jQuery||r.Zepto);if(void 0!==_&&!_.ua){var w=new y;_.ua=w.getResult(),_.ua.get=function(){return w.getUA()},_.ua.set=function(e){w.setUA(e);var t=w.getResult();for(var n in t)_.ua[n]=t[n]}}}("object"==typeof window?window:he)}),ke=(Ne.UAParser,function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}),Te="5.2.2",Pe={apiEndpoint:"api.amplitude.com",batchEvents:!1,cookieExpiration:3650,cookieName:"amplitude_id",deviceIdFromUrlParam:!1,domain:"",eventUploadPeriodMillis:3e4,eventUploadThreshold:30,forceHttps:!0,includeGclid:!1,includeReferrer:!1,includeUtm:!1,language:{language:navigator&&(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage)||void 0}.language,logLevel:"WARN",optOut:!1,platform:"Web",savedMaxCount:1e3,saveEvents:!0,saveParamsReferrerOncePerSession:!0,secureCookie:!1,sessionTimeout:18e5,trackingOptions:{city:!0,country:!0,device_model:!0,dma:!0,ip_address:!0,language:!0,os_name:!0,os_version:!0,platform:!0,region:!0,version_name:!0},unsetParamsReferrerOnNewSession:!1,unsentKey:"amplitude_unsent",unsentIdentifyKey:"amplitude_unsent_identify",uploadBatchSize:100},Ae=function(e){this._instanceName=$(e)?f:e.toLowerCase(),this._legacyStorageSuffix=this._instanceName===f?"":"_"+this._instanceName,this._unsentEvents=[],this._unsentIdentifys=[],this._ua=new Ne(navigator.userAgent).getResult(),this.options=l({},Pe,{trackingOptions:l({},Pe.trackingOptions)}),this.cookieStorage=(new de).getStorage(),this._q=[],this._sending=!1,this._updateScheduled=!1,this._onInit=[],this._eventId=0,this._identifyId=0,this._lastEventTime=null,this._newSession=!1,this._sequenceNumber=0,this._sessionId=null,this._isInitialized=!1,this._userAgent=navigator&&navigator.userAgent||null};Ae.prototype.Identify=fe,Ae.prototype.Revenue=xe,Ae.prototype.init=function(e,t,n,i){if("string"!==C(e)||$(e))W.error("Invalid apiKey. Please re-initialize with a valid apiKey");else{try{this.options.apiKey=e,this._storageSuffix="_"+e+this._legacyStorageSuffix,Re(this.options,n),"string"===C(this.options.logLevel)&&V(this.options.logLevel);var r=Be(this);if(this._apiPropertiesTrackingOptions=0<Object.keys(r).length?{tracking_options:r}:{},this.cookieStorage.options({expirationDays:this.options.cookieExpiration,domain:this.options.domain,secure:this.options.secureCookie}),this.options.domain=this.cookieStorage.options().domain,this._instanceName===f&&qe(this),je(this),this.options.deviceId="object"===C(n)&&"string"===C(n.deviceId)&&!$(n.deviceId)&&n.deviceId||this.options.deviceIdFromUrlParam&&this._getDeviceIdFromUrlParam(this._getUrlParams())||this.options.deviceId||ke()+"R",this.options.userId="string"===C(t)&&!$(t)&&t||"number"===C(t)&&t.toString()||this.options.userId||null,this.options.saveEvents){this._unsentEvents=this._loadSavedUnsentEvents(this.options.unsentKey),this._unsentIdentifys=this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);for(var o=0;o<this._unsentEvents.length;o++){var s=this._unsentEvents[o].event_properties,a=this._unsentEvents[o].groups;this._unsentEvents[o].event_properties=Z(s),this._unsentEvents[o].groups=X(a)}for(var u=0;u<this._unsentIdentifys.length;u++){var p=this._unsentIdentifys[u].user_properties,c=this._unsentIdentifys[u].groups;this._unsentIdentifys[u].user_properties=Z(p),this._unsentIdentifys[u].groups=X(c)}}var d=(new Date).getTime();(!this._sessionId||!this._lastEventTime||d-this._lastEventTime>this.options.sessionTimeout)&&(this.options.unsetParamsReferrerOnNewSession&&this._unsetUTMParams(),this._newSession=!0,this._sessionId=d,this.options.saveParamsReferrerOncePerSession&&this._trackParamsAndReferrer()),this.options.saveParamsReferrerOncePerSession||this._trackParamsAndReferrer(),this._lastEventTime=d,Ue(this),this._sendEventsIfReady()}catch(e){W.error(e)}finally{"function"===C(i)&&i(this)}for(var l=0;l<this._onInit.length;l++)this._onInit[l]();this._onInit=[],this._isInitialized=!0}},Ae.prototype._trackParamsAndReferrer=function(){this.options.includeUtm&&this._initUtmData(),this.options.includeReferrer&&this._saveReferrer(this._getReferrer()),this.options.includeGclid&&this._saveGclid(this._getUrlParams())};var Re=function i(r,o){if("object"===C(o)){var e=function(e){if(r.hasOwnProperty(e)){var t=o[e],n=C(r[e]);H(t,e+" option",n)&&("boolean"===n?r[e]=!!t:"string"===n&&!$(t)||"number"===n&&0<t?r[e]=t:"object"===n&&i(r[e],t))}};for(var t in o)o.hasOwnProperty(t)&&e(t)}};Ae.prototype.runQueuedFunctions=function(){for(var e=0;e<this._q.length;e++){var t=this[this._q[e][0]];"function"===C(t)&&t.apply(this,this._q[e].slice(1))}this._q=[]},Ae.prototype._apiKeySet=function(e){return!$(this.options.apiKey)||(W.error("Invalid apiKey. Please set a valid apiKey with init() before calling "+e),!1)},Ae.prototype._loadSavedUnsentEvents=function(e){var t=this._getFromStorage(ce,e),n=this._parseSavedUnsentEventsString(t,e),i=this._getFromStorageLegacy(ce,e),r=this._parseSavedUnsentEventsString(i,e).concat(n);return this._removeFromLegacyStorage(ce,e),this._setInStorage(ce,e,JSON.stringify(r)),r},Ae.prototype._removeFromLegacyStorage=function(e,t){e.removeItem(t+this._legacyStorageSuffix)},Ae.prototype._parseSavedUnsentEventsString=function(e,t){if($(e))return[];if("string"===C(e))try{var n=JSON.parse(e);if("array"===C(n))return n}catch(e){}return W.error("Unable to load "+t+" events. Restart with a new empty queue."),[]},Ae.prototype.isNewSession=function(){return this._newSession},Ae.prototype.onInit=function(e){this._isInitialized?e():this._onInit.push(e)},Ae.prototype.getSessionId=function(){return this._sessionId},Ae.prototype.nextEventId=function(){return this._eventId++,this._eventId},Ae.prototype.nextIdentifyId=function(){return this._identifyId++,this._identifyId},Ae.prototype.nextSequenceNumber=function(){return this._sequenceNumber++,this._sequenceNumber},Ae.prototype._unsentCount=function(){return this._unsentEvents.length+this._unsentIdentifys.length},Ae.prototype._sendEventsIfReady=function(e){return 0!==this._unsentCount()&&(this.options.batchEvents?this._unsentCount()>=this.options.eventUploadThreshold?(this.sendEvents(e),!0):(this._updateScheduled||(this._updateScheduled=!0,setTimeout(function(){this._updateScheduled=!1,this.sendEvents()}.bind(this),this.options.eventUploadPeriodMillis)),!1):(this.sendEvents(e),!0))},Ae.prototype._getFromStorage=function(e,t){return e.getItem(t+this._storageSuffix)},Ae.prototype._getFromStorageLegacy=function(e,t){return e.getItem(t+this._legacyStorageSuffix)},Ae.prototype._setInStorage=function(e,t,n){e.setItem(t+this._storageSuffix,n)};var qe=function(e){var t=e.cookieStorage.get(e.options.cookieName+e._storageSuffix);if("object"!==C(t)&&!("object"===C(t=e.cookieStorage.get(e.options.cookieName+e._legacyStorageSuffix))&&t.deviceId&&t.sessionId&&t.lastEventTime)){var n=function(e){var t=ce.getItem(e);return ce.removeItem(e),t},i="string"===C(e.options.apiKey)&&"_"+e.options.apiKey.slice(0,6)||"",r=n(b+i),o=n(S+i),s=n(I+i);null!=s&&(s="true"===String(s));var a=parseInt(n(w)),u=parseInt(n(m)),p=parseInt(n(v)),c=parseInt(n(y)),d=parseInt(n(_)),l=function(e){return"object"===C(t)&&t[e]};e.options.deviceId=l("deviceId")||r,e.options.userId=l("userId")||o,e._sessionId=l("sessionId")||a||e._sessionId,e._lastEventTime=l("lastEventTime")||u||e._lastEventTime,e._eventId=l("eventId")||p||e._eventId,e._identifyId=l("identifyId")||c||e._identifyId,e._sequenceNumber=l("sequenceNumber")||d||e._sequenceNumber,e.options.optOut=s||!1,t&&void 0!==t.optOut&&null!==t.optOut&&(e.options.optOut="true"===String(t.optOut)),Ue(e)}},je=function(e){var t=e.cookieStorage.get(e.options.cookieName+e._storageSuffix);if("object"===C(t))Ce(e,t);else{var n=e.cookieStorage.get(e.options.cookieName+e._legacyStorageSuffix);"object"===C(n)&&(e.cookieStorage.remove(e.options.cookieName+e._legacyStorageSuffix),Ce(e,n))}},Ce=function(e,t){t.deviceId&&(e.options.deviceId=t.deviceId),t.userId&&(e.options.userId=t.userId),null!==t.optOut&&void 0!==t.optOut&&(e.options.optOut=t.optOut),t.sessionId&&(e._sessionId=parseInt(t.sessionId)),t.lastEventTime&&(e._lastEventTime=parseInt(t.lastEventTime)),t.eventId&&(e._eventId=parseInt(t.eventId)),t.identifyId&&(e._identifyId=parseInt(t.identifyId)),t.sequenceNumber&&(e._sequenceNumber=parseInt(t.sequenceNumber))},Ue=function(e){e.cookieStorage.set(e.options.cookieName+e._storageSuffix,{deviceId:e.options.deviceId,userId:e.options.userId,optOut:e.options.optOut,sessionId:e._sessionId,lastEventTime:e._lastEventTime,eventId:e._eventId,identifyId:e._identifyId,sequenceNumber:e._sequenceNumber})};Ae.prototype._initUtmData=function(e,t){e=e||this._getUrlParams(),t=t||this.cookieStorage.get("__utmz");var n,i,r,o,s,a,u,p,c,d,l,f=(i=e,r=(n=t)?"?"+n.split(".").slice(-1)[0].replace(/\|/g,"&"):"",s=(o=function(e,t,n,i){return J(e,t)||J(n,i)})(x,i,"utmcsr",r),a=o(N,i,"utmcmd",r),u=o(k,i,"utmccn",r),p=o(T,i,"utmctr",r),c=o(P,i,"utmcct",r),d={},(l=function(e,t){$(t)||(d[e]=t)})(x,s),l(N,a),l(k,u),l(T,p),l(P,c),d);De(this,f)},Ae.prototype._unsetUTMParams=function(){var e=new fe;e.unset(O),e.unset(x),e.unset(N),e.unset(k),e.unset(T),e.unset(P),this.identify(e)};var De=function(e,t){if("object"===C(t)&&0!==Object.keys(t).length){var n=new fe;for(var i in t)t.hasOwnProperty(i)&&(n.setOnce("initial_"+i,t[i]),n.set(i,t[i]));e.identify(n)}};Ae.prototype._getReferrer=function(){return document.referrer},Ae.prototype._getUrlParams=function(){return location.search},Ae.prototype._saveGclid=function(e){var t=J("gclid",e);$(t)||De(this,{gclid:t})},Ae.prototype._getDeviceIdFromUrlParam=function(e){return J(E,e)},Ae.prototype._getReferringDomain=function(e){if($(e))return null;var t=e.split("/");return 3<=t.length?t[2]:null},Ae.prototype._saveReferrer=function(e){if(!$(e)){var t={referrer:e,referring_domain:this._getReferringDomain(e)};De(this,t)}},Ae.prototype.saveEvents=function(){try{this._setInStorage(ce,this.options.unsentKey,JSON.stringify(this._unsentEvents))}catch(e){}try{this._setInStorage(ce,this.options.unsentIdentifyKey,JSON.stringify(this._unsentIdentifys))}catch(e){}},Ae.prototype.setDomain=function(e){if(H(e,"domain","string"))try{this.cookieStorage.options({domain:e}),this.options.domain=this.cookieStorage.options().domain,je(this),Ue(this)}catch(e){W.error(e)}},Ae.prototype.setUserId=function(e){try{this.options.userId=null!=e&&""+e||null,Ue(this)}catch(e){W.error(e)}},Ae.prototype.setGroup=function(e,t){if(this._apiKeySet("setGroup()")&&H(e,"groupType","string")&&!$(e)){var n={};n[e]=t;var i=(new fe).set(e,t);this._logEvent(h,null,null,i.userPropertiesOperations,n,null,null,null)}},Ae.prototype.setOptOut=function(e){if(H(e,"enable","boolean"))try{this.options.optOut=e,Ue(this)}catch(e){W.error(e)}},Ae.prototype.setSessionId=function(e){if(H(e,"sessionId","number"))try{this._sessionId=e,Ue(this)}catch(e){W.error(e)}},Ae.prototype.resetSessionId=function(){this.setSessionId((new Date).getTime())},Ae.prototype.regenerateDeviceId=function(){this.setDeviceId(ke()+"R")},Ae.prototype.setDeviceId=function(e){if(H(e,"deviceId","string"))try{$(e)||(this.options.deviceId=""+e,Ue(this))}catch(e){W.error(e)}},Ae.prototype.setUserProperties=function(e){if(this._apiKeySet("setUserProperties()")&&H(e,"userProperties","object")){var t=Q(Z(e));if(0!==Object.keys(t).length){var n=new fe;for(var i in t)t.hasOwnProperty(i)&&n.set(i,t[i]);this.identify(n)}}},Ae.prototype.clearUserProperties=function(){if(this._apiKeySet("clearUserProperties()")){var e=new fe;e.clearAll(),this.identify(e)}};var Me=function(e,t){for(var n=0;n<t._q.length;n++){var i=e[t._q[n][0]];"function"===C(i)&&i.apply(e,t._q[n].slice(1))}return e};Ae.prototype.identify=function(e,t){if(this._apiKeySet("identify()"))if("object"===C(e)&&e.hasOwnProperty("_q")&&(e=Me(new fe,e)),e instanceof fe){if(0<Object.keys(e.userPropertiesOperations).length)return this._logEvent(h,null,null,e.userPropertiesOperations,null,null,null,t);"function"===C(t)&&t(0,"No request sent",{reason:"No user property operations"})}else W.error("Invalid identify input type. Expected Identify object but saw "+C(e)),"function"===C(t)&&t(0,"No request sent",{reason:"Invalid identify input type"});else"function"===C(t)&&t(0,"No request sent",{reason:"API key is not set"})},Ae.prototype.groupIdentify=function(e,t,n,i){if(this._apiKeySet("groupIdentify()"))if(H(e,"group_type","string")&&!$(e))if(null!=t)if("object"===C(n)&&n.hasOwnProperty("_q")&&(n=Me(new fe,n)),n instanceof fe){if(0<Object.keys(n.userPropertiesOperations).length)return this._logEvent(g,null,null,null,r({},e,t),n.userPropertiesOperations,null,i);"function"===C(i)&&i(0,"No request sent",{reason:"No group property operations"})}else W.error("Invalid identify input type. Expected Identify object but saw "+C(n)),"function"===C(i)&&i(0,"No request sent",{reason:"Invalid identify input type"});else"function"===C(i)&&i(0,"No request sent",{reason:"Invalid group name"});else"function"===C(i)&&i(0,"No request sent",{reason:"Invalid group type"});else"function"===C(i)&&i(0,"No request sent",{reason:"API key is not set"})},Ae.prototype.setVersionName=function(e){H(e,"versionName","string")&&(this.options.versionName=e)},Ae.prototype._logEvent=function(e,t,n,i,r,o,s,a){if(je(this),e)if(this.options.optOut)"function"===C(a)&&a(0,"No request sent",{reason:"optOut is set to true"});else try{var u;u=e===h||e===g?this.nextIdentifyId():this.nextEventId();var p=this.nextSequenceNumber(),c="number"===C(s)?s:(new Date).getTime();(!this._sessionId||!this._lastEventTime||c-this._lastEventTime>this.options.sessionTimeout)&&(this._sessionId=c),this._lastEventTime=c,Ue(this),i=i||{},n=l({},n||{},l({},this._apiPropertiesTrackingOptions)),t=t||{},r=r||{},o=o||{};var d={device_id:this.options.deviceId,user_id:this.options.userId,timestamp:c,event_id:u,session_id:this._sessionId||-1,event_type:e,version_name:ze(this,"version_name")&&this.options.versionName||null,platform:ze(this,"platform")?this.options.platform:null,os_name:ze(this,"os_name")&&this._ua.browser.name||null,os_version:ze(this,"os_version")&&this._ua.browser.major||null,device_model:ze(this,"device_model")&&this._ua.os.name||null,language:ze(this,"language")?this.options.language:null,api_properties:n,event_properties:Q(Z(t)),user_properties:Q(Z(i)),uuid:ke(),library:{name:"amplitude-js",version:Te},sequence_number:p,groups:Q(X(r)),group_properties:Q(Z(o)),user_agent:this._userAgent};return e===h||e===g?(this._unsentIdentifys.push(d),this._limitEventsQueued(this._unsentIdentifys)):(this._unsentEvents.push(d),this._limitEventsQueued(this._unsentEvents)),this.options.saveEvents&&this.saveEvents(),this._sendEventsIfReady(a)||"function"!==C(a)||a(0,"No request sent",{reason:"No events to send or upload queued"}),u}catch(e){W.error(e)}else"function"===C(a)&&a(0,"No request sent",{reason:"Missing eventType"})};var ze=function(e,t){return!!e.options.trackingOptions[t]},Be=function(e){for(var t=["city","country","dma","ip_address","region"],n={},i=0;i<t.length;i++){var r=t[i];ze(e,r)||(n[r]=!1)}return n};Ae.prototype._limitEventsQueued=function(e){e.length>this.options.savedMaxCount&&e.splice(0,e.length-this.options.savedMaxCount)},Ae.prototype.logEvent=function(e,t,n){return this.logEventWithTimestamp(e,t,null,n)},Ae.prototype.logEventWithTimestamp=function(e,t,n,i){return this._apiKeySet("logEvent()")?H(e,"eventType","string")?$(e)?("function"===C(i)&&i(0,"No request sent",{reason:"Missing eventType"}),-1):this._logEvent(e,t,null,null,null,null,n,i):("function"===C(i)&&i(0,"No request sent",{reason:"Invalid type for eventType"}),-1):("function"===C(i)&&i(0,"No request sent",{reason:"API key not set"}),-1)},Ae.prototype.logEventWithGroups=function(e,t,n,i){return this._apiKeySet("logEventWithGroups()")?H(e,"eventType","string")?this._logEvent(e,t,null,null,n,null,null,i):("function"===C(i)&&i(0,"No request sent",{reason:"Invalid type for eventType"}),-1):("function"===C(i)&&i(0,"No request sent",{reason:"API key not set"}),-1)};var Ge=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};Ae.prototype.logRevenueV2=function(e){if(this._apiKeySet("logRevenueV2()"))if("object"===C(e)&&e.hasOwnProperty("_q")&&(e=Me(new xe,e)),e instanceof xe){if(e&&e._isValidRevenue())return this.logEvent(o,e._toJSONObject())}else W.error("Invalid revenue input type. Expected Revenue object but saw "+C(e))},Ae.prototype.logRevenue=function(e,t,n){return this._apiKeySet("logRevenue()")&&Ge(e)&&(void 0===t||Ge(t))?this._logEvent(o,{},{productId:n,special:"revenue_amount",quantity:t||1,price:e},null,null,null,null,null):-1},Ae.prototype.removeEvents=function(e,t){Le(this,"_unsentEvents",e),Le(this,"_unsentIdentifys",t)};var Le=function(e,t,n){if(!(n<0)){for(var i=[],r=0;r<e[t].length;r++)e[t][r].event_id>n&&i.push(e[t][r]);e[t]=i}};Ae.prototype.sendEvents=function(n){if(this._apiKeySet("sendEvents()"))if(this.options.optOut)"function"===C(n)&&n(0,"No request sent",{reason:"optOut is set to true"});else if(0!==this._unsentCount())if(this._sending)"function"===C(n)&&n(0,"No request sent",{reason:"Request already in progress"});else{this._sending=!0;var e=(this.options.forceHttps?"https":"https:"===window.location.protocol?"https":"http")+"://"+this.options.apiEndpoint,i=Math.min(this._unsentCount(),this.options.uploadBatchSize),t=this._mergeEventsAndIdentifys(i),r=t.maxEventId,o=t.maxIdentifyId,s=JSON.stringify(t.eventsToSend),a=(new Date).getTime(),u={client:this.options.apiKey,e:s,v:c,upload_time:a,checksum:ve(c+this.options.apiKey+s+a)},p=this;new Oe(e,u).send(function(e,t){p._sending=!1;try{200===e&&"success"===t?(p.removeEvents(r,o),p.options.saveEvents&&p.saveEvents(),p._sendEventsIfReady(n)||"function"!==C(n)||n(e,t)):413===e?(1===p.options.uploadBatchSize&&p.removeEvents(r,o),p.options.uploadBatchSize=Math.ceil(i/2),p.sendEvents(n)):"function"===C(n)&&n(e,t)}catch(e){}})}else"function"===C(n)&&n(0,"No request sent",{reason:"No events to send"});else"function"===C(n)&&n(0,"No request sent",{reason:"API key not set"})},Ae.prototype._mergeEventsAndIdentifys=function(e){for(var t=[],n=0,i=-1,r=0,o=-1;t.length<e;){var s,a=r>=this._unsentIdentifys.length,u=n>=this._unsentEvents.length;if(u&&a){W.error("Merging Events and Identifys, less events and identifys than expected");break}a?i=(s=this._unsentEvents[n++]).event_id:u?o=(s=this._unsentIdentifys[r++]).event_id:!("sequence_number"in this._unsentEvents[n])||this._unsentEvents[n].sequence_number<this._unsentIdentifys[r].sequence_number?i=(s=this._unsentEvents[n++]).event_id:o=(s=this._unsentIdentifys[r++]).event_id,t.push(s)}return{eventsToSend:t,maxEventId:i,maxIdentifyId:o}},Ae.prototype.setGlobalUserProperties=function(e){this.setUserProperties(e)},Ae.prototype.__VERSION__=Te;var Fe=function(){this.options=l({},Pe),this._q=[],this._instances={}};Fe.prototype.Identify=fe,Fe.prototype.Revenue=xe,Fe.prototype.getInstance=function(e){e=$(e)?f:e.toLowerCase();var t=this._instances[e];return void 0===t&&(t=new Ae(e),this._instances[e]=t),t},Fe.prototype.runQueuedFunctions=function(){for(var e=0;e<this._q.length;e++){var t=this[this._q[e][0]];"function"===C(t)&&t.apply(this,this._q[e].slice(1))}for(var n in this._q=[],this._instances)this._instances.hasOwnProperty(n)&&this._instances[n].runQueuedFunctions()},Fe.prototype.init=function(e,t,n,i){this.getInstance().init(e,t,n,function(e){this.options=e.options,"function"===C(i)&&i(e)}.bind(this))},Fe.prototype.isNewSession=function(){return this.getInstance().isNewSession()},Fe.prototype.getSessionId=function(){return this.getInstance().getSessionId()},Fe.prototype.nextEventId=function(){return this.getInstance().nextEventId()},Fe.prototype.nextIdentifyId=function(){return this.getInstance().nextIdentifyId()},Fe.prototype.nextSequenceNumber=function(){return this.getInstance().nextSequenceNumber()},Fe.prototype.saveEvents=function(){this.getInstance().saveEvents()},Fe.prototype.setDomain=function(e){this.getInstance().setDomain(e)},Fe.prototype.setUserId=function(e){this.getInstance().setUserId(e)},Fe.prototype.setGroup=function(e,t){this.getInstance().setGroup(e,t)},Fe.prototype.setOptOut=function(e){this.getInstance().setOptOut(e)},Fe.prototype.regenerateDeviceId=function(){this.getInstance().regenerateDeviceId()},Fe.prototype.setDeviceId=function(e){this.getInstance().setDeviceId(e)},Fe.prototype.setUserProperties=function(e){this.getInstance().setUserProperties(e)},Fe.prototype.clearUserProperties=function(){this.getInstance().clearUserProperties()},Fe.prototype.identify=function(e,t){this.getInstance().identify(e,t)},Fe.prototype.setVersionName=function(e){this.getInstance().setVersionName(e)},Fe.prototype.logEvent=function(e,t,n){return this.getInstance().logEvent(e,t,n)},Fe.prototype.logEventWithGroups=function(e,t,n,i){return this.getInstance().logEventWithGroups(e,t,n,i)},Fe.prototype.logRevenueV2=function(e){return this.getInstance().logRevenueV2(e)},Fe.prototype.logRevenue=function(e,t,n){return this.getInstance().logRevenue(e,t,n)},Fe.prototype.removeEvents=function(e,t){this.getInstance().removeEvents(e,t)},Fe.prototype.sendEvents=function(e){this.getInstance().sendEvents(e)},Fe.prototype.setGlobalUserProperties=function(e){this.getInstance().setUserProperties(e)},Fe.prototype.__VERSION__=Te;var Ke=window.amplitude||{},Ve=new Fe;for(var We in Ve._q=Ke._q||[],Ke._iq)Ke._iq.hasOwnProperty(We)&&(Ve.getInstance(We)._q=Ke._iq[We]._q||[]);return Ve.runQueuedFunctions(),Ve});

(function (w, d) {

    w.macrocrm = w.macrocrm || {};

    // Параметры открытия макрокаталога, для инициализации с последующим открытием
    w.macrocrm.CatalogParams = null;

    if ('macrocrm_open' in w) {
        return false;
    }
    var mcrm = {
        BUTTON_NAME: 'macrocrm_request',
        BUTTON_NAME_OLD: 'mcrm_request',
        macrocrm_html: 'macrocrm_opened',
        macrocrm_html_obj: null,
        macrocrm_wrap: 'macrocrm_wrap',
        macrocrm_wrap_obj: null,
        macrocrm_window: 'macrocrm_window',
        macrocrm_window_obj: null,
        macrocrm_content: 'macrocrm_content',
        macrocrm_content_obj: null,
        macrocrm_inline_form: null,
        macrocrm_loading: 'macrocrm_loading',
        macrocrm_loading_desc: 'Идет загрузка. Подождите...',
        macrocrm_close: 'macrocrm_close',
        macrocrm_close_obj: null,
        macrocrm_css_obj: null,
        macrocrm_onsuccess_name: 'onsuccess',
        macrocrm_onsuccess: null,
        server_url: 'https://macro.sbercrm.com',
        api_url: 'https://api.macro.sbercrm.com/estate/request/get_request_url/?domain=a-butik.ru&check=MPHzha4_BkDe5H9XsqYjGF0cgfWez2l9_7kLcxoyK_-m3njBn3wxNzkyNDk2NDQ0fDc1NDNj',
        css_url: 'https://api.macro.sbercrm.com/assets/api/css/mcrm-estate-style.css',
        company_name: 'ООО \"А\" БУТИК НЕДВИЖИМОСТИ\"',
        current_locale: 'ru',
        agent_button_name: 'Войти в агентский кабинет',
        is_developer: '',
        //конфигурация текущего домена
        domain_config: JSON.parse('{\"macroagentLoginBgImageUrl\":null,\"macroagentLoginBgImageOpacity\":null,\"iframeMode\":null,\"complexBaseView\":\"plan\",\"complexBaseViewMobile\":\"list\",\"estateAgentAllowChess\":null,\"catalogCustomerMode\":false,\"localesList\":[{\"id\":\"ru\",\"name\":\"\\u0420\\u0443\\u0441\\u0441\\u043a\\u0438\\u0439\"}],\"country\":\"RU\",\"catalogLowZIndex\":\"2147483647\",\"defaultHouseView\":null,\"defaultHouseViewMobile\":null,\"catalogStartLevel\":null,\"catalogStartLevelId\":null,\"agentCatalogStartLevel\":null,\"agentCatalogStartLevelId\":null,\"abTesting\":[],\"logo\":\"https:\\/\\/macro.sbercrm.com\\/upload\\/company\\/oooasz\\/609_logo.jpeg\",\"catalog_svg\":\"#C85FA5\",\"catalog_firm\":\"#50648C\",\"catalog_language\":[\"ru\"],\"catalog_tags_list\":[],\"catalog_price_type\":\"minimal\",\"widgets_ab_testing\":[],\"catalog_lead_fields\":[],\"catalog_low_z_index\":\"2147483647\",\"catalog_plans_order\":[\"areaDesc\",\"areaAsc\",\"priceDesc\",\"priceAsc\",\"name\"],\"catalog_show_button\":true,\"catalog_gallery_order\":[\"primary\",\"second\",\"vis\",\"video\",\"other\"],\"macroagent_apply_name\":{\"locales\":{\"en\":\"Quick lead\",\"hy\":\"\\u0531\\u0580\\u0561\\u0563 \\u0570\\u0561\\u0575\\u057f\",\"ka\":\"\\u10e1\\u10ec\\u10e0\\u10d0\\u10e4\\u10d8 \\u10db\\u10dd\\u10d7\\u10ee\\u10dd\\u10d5\\u10dc\\u10d0\",\"kk\":\"\\u0416\\u044b\\u043b\\u0434\\u0430\\u043c \\u0441\\u04b1\\u0440\\u0430\\u0443\",\"ru\":\"\\u0411\\u044b\\u0441\\u0442\\u0440\\u0430\\u044f \\u0437\\u0430\\u044f\\u0432\\u043a\\u0430\",\"cnr\":\"Brzi zahtjev\",\"uz_Latn\":\"Tez ariza\"}},\"agent_panel_hot_labels\":1,\"catalog_share_btn_name\":{\"locales\":{\"en\":\"Share\",\"hy\":\"\\u053f\\u056b\\u057d\\u057e\\u0565\\u056c\",\"ka\":\"\\u10d2\\u10d0\\u10d0\\u10d6\\u10d8\\u10d0\\u10e0\\u10d4\\u10d7\",\"kk\":\"\\u0411\\u04e9\\u043b\\u0456\\u0441\\u0443\",\"ru\":\"\\u041f\\u043e\\u0434\\u0435\\u043b\\u0438\\u0442\\u044c\\u0441\\u044f\",\"cnr\":\"Podijeliti\",\"uz_Latn\":\"Ulashish\"}},\"tender_place_is_closed\":0,\"catalog_button_position\":\"bottom_right\",\"macrocatalog_hot_labels\":1,\"catalog_banks_token_list\":[{\"value\":\"\",\"provider\":\"sdelkaRF\",\"complexId\":\"all\"}],\"catalog_reserve_btn_name\":{\"locales\":{\"en\":\"Book\",\"hy\":\"\\u054a\\u0561\\u0570\\u0565\\u057d\\u057f\\u0561\\u057e\\u0578\\u0580\\u0565\\u056c\",\"ka\":\"\\u10ef\\u10d0\\u10d5\\u10e8\\u10dc\\u10d8\\u10e1 \\u10db\\u10d8\\u10ea\\u10d4\\u10db\\u10d0\",\"kk\":\"\\u0411\\u0440\\u043e\\u043d\\u0434\\u0430\\u0443\",\"ru\":\"\\u0417\\u0430\\u0431\\u0440\\u043e\\u043d\\u0438\\u0440\\u043e\\u0432\\u0430\\u0442\\u044c\",\"cnr\":\"Rezervisati\",\"uz_Latn\":\"Bron qilish\"}},\"catalog_show_button_size\":\"160\",\"catalog_show_button_text\":\"\\u041a\\u0412\\u0410\\u0420\\u0422\\u0418\\u0420\\u042b\\n\\u0412 \\u041d\\u0410\\u041b\\u0418\\u0427\\u0418\\u0418\",\"catalog_add_lead_btn_name\":{\"locales\":{\"en\":\"Send\",\"hy\":\"\\u0548\\u0582\\u0572\\u0561\\u0580\\u056f\\u0565\\u056c \\u0570\\u0561\\u0575\\u057f\",\"ka\":\"\\u10db\\u10dd\\u10d7\\u10ee\\u10dd\\u10d5\\u10dc\\u10d8\\u10e1 \\u10d2\\u10d0\\u10d2\\u10d6\\u10d0\\u10d5\\u10dc\\u10d0\",\"kk\":\"\\u04e8\\u0442\\u0456\\u043d\\u0456\\u043c \\u0436\\u0456\\u0431\\u0435\\u0440\\u0443\",\"ru\":\"\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c\",\"cnr\":\"Poslati zahtjev\",\"uz_Latn\":\"Arizani yuborish\"}},\"catalog_button_margin_top\":\"0\",\"catalog_complex_base_view\":\"plan\",\"catalog_show_button_color\":\"#F30045\",\"catalog_show_estate_popup\":true,\"accred_required_files_work\":[],\"catalog_button_margin_left\":\"0\",\"catalog_leads_distribution\":{\"id\":247,\"name\":\"\\u0420\\u0430\\u0441\\u043f\\u0440\\u0435\\u0434\\u0435\\u043b\\u0435\\u043d\\u0438\\u0435 \\u0434\\u043b\\u044f \\u043a\\u0430\\u0442\\u0430\\u043b\\u043e\\u0433\\u0430 a-butik.ru\",\"model\":\"none\",\"json_data\":null,\"company_id\":609,\"is_deleted\":0},\"catalog_object_params_comm\":[\"floor\",\"entrance\",\"livingHouse\",\"inServiceDate\",\"dealPrograms\",\"restoration\"],\"catalog_object_params_flat\":[\"floor\",\"entrance\",\"livingHouse\",\"inServiceDate\",\"riserSides\",\"dealPrograms\",\"windowView\",\"restoration\"],\"catalog_object_params_land\":[\"livingHouse\",\"inServiceDate\",\"dealPrograms\"],\"mobile_catalog_show_button\":true,\"catalog_button_margin_right\":\"100\",\"catalog_chess_entrance_name\":\"entrance\",\"catalog_floor_entrance_name\":\"entrance\",\"catalog_object_params_house\":[\"entrance\",\"livingHouse\",\"inServiceDate\",\"dealPrograms\",\"windowView\",\"line\"],\"macrocatalog_hide_adv_areas\":true,\"catalog_button_margin_bottom\":\"100\",\"catalog_house_address_format\":\"name_address\",\"catalog_object_list_statuses\":[\"search\",\"reserve\",\"done\",\"soon\"],\"catalog_object_params_garage\":[\"floor\",\"entrance\",\"livingHouse\",\"inServiceDate\",\"dealPrograms\"],\"estate_agent_requests_notify\":[],\"macroagent_catalog_open_name\":{\"locales\":{\"en\":\"Catalog\",\"hy\":\"\\u053f\\u0561\\u057f\\u0561\\u056c\\u0578\\u0563\",\"ka\":\"\\u10d9\\u10d0\\u10e2\\u10d0\\u10da\\u10dd\\u10d2\\u10d8\",\"kk\":\"\\u041a\\u0430\\u0442\\u0430\\u043b\\u043e\\u0433\",\"ru\":\"\\u041a\\u0430\\u0442\\u0430\\u043b\\u043e\\u0433\",\"cnr\":\"Katalog\",\"uz_Latn\":\"Katalog\"}},\"catalog_facade_objects_counts\":\"floor\",\"catalog_gen_svg_opacity_hover\":\"55\",\"catalog_leads_distribution_id\":247,\"catalog_to_lead_form_btn_name\":{\"locales\":{\"en\":\"Make a request\",\"hy\":\"\\u0540\\u0561\\u0575\\u057f\\u056b \\u0571\\u0587\\u0561\\u056f\\u0565\\u0580\\u057a\\u0578\\u0582\\u0574\",\"ka\":\"\\u10db\\u10dd\\u10d7\\u10ee\\u10dd\\u10d5\\u10dc\\u10d8\\u10e1 \\u10d2\\u10d0\\u10e4\\u10dd\\u10e0\\u10db\\u10d4\\u10d1\\u10d0\",\"kk\":\"\\u04e8\\u0442\\u0456\\u043d\\u0456\\u043c \\u0436\\u0456\\u0431\\u0435\\u0440\\u0443\",\"ru\":\"\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c \\u0437\\u0430\\u044f\\u0432\\u043a\\u0443\",\"cnr\":\"Kreirati zahtjev\",\"uz_Latn\":\"Ariza berish\"}},\"macroagent_required_docs_list\":[],\"catalog_ga_allowed_events_list\":[],\"catalog_gen_svg_opacity_active\":\"70\",\"catalog_gen_svg_opacity_normal\":\"0\",\"catalog_in_service_date_format\":\"month\",\"catalog_valid_house_views_comm\":[\"bigGrid\",\"floor\",\"objects\",\"online\",\"facades\",\"plans\",\"images\"],\"catalog_valid_house_views_flat\":[\"bigGrid\",\"plans\",\"floor\",\"facades\",\"objects\",\"description\",\"online\",\"images\"],\"catalog_valid_house_views_land\":[\"bigGrid\",\"objects\",\"facades\",\"images\"],\"mobile_catalog_button_position\":\"bottom_right\",\"accred_required_files_inventory\":[],\"catalog_floor_svg_opacity_hover\":\"90\",\"catalog_valid_house_views_house\":[\"facades\",\"floor\",\"bigGrid\",\"plans\",\"objects\",\"online\",\"images\"],\"estate_agent_leads_distribution\":{\"id\":248,\"name\":\"\\u0420\\u0430\\u0441\\u043f\\u0440\\u0435\\u0434\\u0435\\u043b\\u0435\\u043d\\u0438\\u0435 \\u0434\\u043b\\u044f \\u041a\\u0410 a-butik.ru\",\"model\":\"none\",\"json_data\":null,\"company_id\":609,\"is_deleted\":0},\"mobile_catalog_show_button_size\":\"100\",\"mobile_catalog_show_button_text\":\"\\u0412\\u042b\\u0411\\u0420\\u0410\\u0422\\u042c\\n\\u041a\\u0412\\u0410\\u0420\\u0422\\u0418\\u0420\\u0423\",\"catalog_complex_base_view_mobile\":\"list\",\"catalog_floor_svg_opacity_active\":\"65\",\"catalog_floor_svg_opacity_normal\":\"65\",\"catalog_valid_house_views_garage\":[\"bigGrid\",\"floor\",\"objects\",\"facades\",\"plans\",\"images\",\"online\",\"description\"],\"mobile_catalog_button_margin_top\":\"0\",\"mobile_catalog_show_button_color\":\"#F30045\",\"catalog_add_reserve_lead_btn_name\":{\"locales\":{\"en\":\"Send\",\"hy\":\"\\u0533\\u0580\\u0561\\u0576\\u0581\\u057e\\u0565\\u056c\",\"ka\":\"\\u10e9\\u10d0\\u10ec\\u10d4\\u10e0\\u10d0\",\"kk\":\"\\u04e8\\u0442\\u0456\\u043d\\u0456\\u043c \\u0436\\u0456\\u0431\\u0435\\u0440\\u0443\",\"ru\":\"\\u041e\\u0444\\u043e\\u0440\\u043c\\u0438\\u0442\\u044c\",\"cnr\":\"Poslati zahtjev\",\"uz_Latn\":\"Yozilish\"}},\"catalog_object_params_storageroom\":[\"floor\",\"entrance\",\"livingHouse\",\"inServiceDate\",\"dealPrograms\",\"restoration\"],\"estate_agent_deny_leads_for_roles\":[],\"mobile_catalog_button_margin_left\":\"0\",\"catalog_add_lead_no_price_btn_name\":{\"locales\":{\"en\":\"Request price\",\"hy\":\"\\u0533\\u056b\\u057f\\u0561\\u056f\\u0581\\u0565\\u056c \\u0563\\u056b\\u0576\\u0568\",\"ka\":\"\\u10e4\\u10d0\\u10e1\\u10d8\\u10e1 \\u10d2\\u10d0\\u10d2\\u10d4\\u10d1\\u10d0\",\"kk\":\"\\u0421\\u04b1\\u0440\\u0430\\u0443 \\u0436\\u0430\\u0441\\u0430\\u0443\",\"ru\":\"\\u0423\\u0437\\u043d\\u0430\\u0442\\u044c \\u0446\\u0435\\u043d\\u0443\",\"cnr\":\"Zatra\\u017eiti\",\"uz_Latn\":\"Narxni bilish\"}},\"catalog_reserve_processing_manager\":\"77583\",\"estate_agent_leads_distribution_id\":248,\"mobile_catalog_button_margin_right\":\"20\",\"estate_customer_accepted_deal_steps\":[\"request_created\",\"framed_free_reserve\",\"framed_paid_reserve\",\"deal_has_begun\",\"agreement_sent_to_bank\",\"agreement_ready_for_signing\",\"agreement_signed_by_buyer\",\"agreement_signed_by_company\",\"agreement_has_been_sent_for_registration_in_rosreestr\",\"agreement_registered_with_rosreestr\",\"agreement_is_paid\",\"agreement_received_from_rosreestr\",\"agreement_is_transferred_to_buyer\",\"scheduled_delivery_date_has_arrived\",\"object_is_ready_for_transfer\",\"object_visit_scheduled\",\"object_was_inspected\",\"transfer_and_acceptance_act_signed\"],\"macroagent_required_docs_quick_list\":[],\"macrocatalog_pres_show_price_action\":true,\"mobile_catalog_button_margin_bottom\":\"80\",\"estate_agent_booking_required_fields\":[],\"macroagent_phone_confirmation_method\":\"sms\",\"catalog_valid_house_views_comm_mobile\":[\"bigGrid\",\"floor\",\"objects\",\"online\",\"facades\",\"images\",\"plans\"],\"catalog_valid_house_views_flat_mobile\":[\"plans\",\"floor\",\"facades\",\"objects\",\"description\",\"online\",\"images\",\"bigGrid\"],\"catalog_valid_house_views_land_mobile\":[\"bigGrid\",\"objects\",\"facades\",\"images\"],\"catalog_valid_house_views_storageroom\":[\"bigGrid\",\"floor\",\"plans\",\"objects\",\"facades\",\"online\",\"images\",\"description\"],\"catalog_to_lead_form_no_price_btn_name\":{\"locales\":{\"en\":\"Request price\",\"hy\":\"\\u0533\\u056b\\u057f\\u0561\\u056f\\u0581\\u0565\\u056c \\u0563\\u056b\\u0576\\u0568\",\"ka\":\"\\u10e4\\u10d0\\u10e1\\u10d8\\u10e1 \\u10d2\\u10d0\\u10d2\\u10d4\\u10d1\\u10d0\",\"kk\":\"\\u0421\\u04b1\\u0440\\u0430\\u0443 \\u0436\\u0430\\u0441\\u0430\\u0443\",\"ru\":\"\\u0423\\u0437\\u043d\\u0430\\u0442\\u044c \\u0446\\u0435\\u043d\\u0443\",\"cnr\":\"Zatra\\u017eiti\",\"uz_Latn\":\"Narxni bilish\"}},\"catalog_valid_house_views_house_mobile\":[\"plans\",\"facades\",\"floor\",\"objects\",\"online\",\"bigGrid\",\"images\"],\"catalog_valid_house_views_garage_mobile\":[\"bigGrid\",\"floor\",\"objects\",\"facades\",\"plans\",\"description\",\"online\",\"images\"],\"estate_agent_allow_double_has_no_target\":[100],\"estate_agent_decline_reasons_search_method\":\"by_phone\",\"catalog_valid_house_views_storageroom_mobile\":[\"floor\",\"plans\",\"objects\",\"facades\",\"online\",\"images\",\"bigGrid\",\"description\"],\"estate_agent_booking_required_contact_fields\":[],\"catalog_svg_dark\":\"#962d73\"}'),
        ga_allowed_events: JSON.parse('[]'),
        amplitude_api_key: JSON.parse('{"catalog":"de5f414583dc2ee7cc70a58b21551c09","agent":"55ec81a8f5c7ca278e0d51e943cc8747"}'),
        sess_cookie: null,
        sess_cookie_name: 'mcrm_ses_start',
        domain_invite_option_name: 'invitation_on',
        lastchance_text_default: 'Если вы не смогли найти на нашем сайте подходящий объект или необходимую информацию, оставьте заявку, и мы решим ваш вопрос',
        currentPathName: null,
        //уникальный ID вызова API для сегрегации событий
        uuid: null,
        //массив имен нужных кук для передачи в CRM
        cookie_used: [],
        ev: function (text) {
            var z = "constructor";
            return z[z][z]('return ' + text)();
        },
        crel: function (name) {
            return d.createElement(name);
        },
        crframe: function (name) {
            return this.crel(name + 'rame')
        },
        $: function (r, all) {
            return all ? d.querySelectorAll(r) : d.querySelector(r);
        },
        create: function () {
            var self = this;
            self.cookie_used = self.ev('["_ym_uid","_ga","roistat_visit"]');
            this.cookie_check();

            self.macrocrm_html_obj = self.$('html');

            self.macrocrm_css_obj = self.crel('link');
            self.macrocrm_css_obj.rel = 'stylesheet';
            self.macrocrm_css_obj.href = self.css_url; // здесь указывается URL стилевого файла
            self.macrocrm_css_obj.type = 'text/css';
            var tag_head = d.getElementsByTagName('head');
            tag_head[0].appendChild(self.macrocrm_css_obj);

            self.macrocrm_wrap_obj = self.crel('div');
            self.macrocrm_wrap_obj.setAttribute('id', self.macrocrm_wrap);
            d.body.appendChild(self.macrocrm_wrap_obj);

            self.macrocrm_window_obj = self.crel('div');
            self.macrocrm_window_obj.setAttribute('id', self.macrocrm_window);
            d.body.appendChild(self.macrocrm_window_obj);

            /*  var cr = self.crel('div');
              cr.setAttribute('id', 'macrocrm_copyright');
              cr.innerHTML = '<a href="https://macrocrm.ru/" target=_blank>Виджет <span>MacroCRM</span></a>';
              self.macrocrm_window_obj.appendChild(cr);
              cr = null;

  */
            self.macrocrm_close_obj = self.crel('span');
            self.macrocrm_close_obj.setAttribute('class', self.macrocrm_close);
            self.macrocrm_close_obj.style.display = 'none';
            self.macrocrm_window_obj.appendChild(self.macrocrm_close_obj);

            self.macrocrm_content_obj = self.crel('div');
            self.macrocrm_content_obj.setAttribute('class', self.macrocrm_content);
            self.macrocrm_content_obj.style.boxSizing = 'border-box';
            self.macrocrm_window_obj.appendChild(self.macrocrm_content_obj);

            self.initCallbackButton();

            // Вешаем обработчик кликов в документе с последующим анализом источника
            d.addEventListener('click', function (e) {

                /**
                 * делаем свое всплытие события, ограничиваем 3 уровнями
                 * @type {EventTarget}
                 */
                var target = e.target, params = false, step = 0;
                do {
                    if (navigator.appVersion.indexOf("MSIE") === -1 && target.dataset && target.dataset.toggle !== 'undefined' && (target.dataset.toggle === self.BUTTON_NAME || target.dataset.toggle === self.BUTTON_NAME_OLD)) {
                        params = target.dataset;
                    } else if (navigator.appVersion.indexOf("MSIE") !== -1 && (target.getAttribute("data-toggle") === self.BUTTON_NAME || target.getAttribute("data-toggle") === self.BUTTON_NAME_OLD)) {
                        params = self.get_ie_target_data(target);
                    }
                } while (!params && (++step < 3) && (target = target.parentNode));

                if (params) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.macrocrm_onsuccess = target.getAttribute(self.macrocrm_onsuccess_name) || null;

                    // Показываем окно и подгружаем форму с параметрами
                    self.show(params);
                }
            }, false);

            // Вешаем обработчики кликов на закрытие окна
            var close_handler = function () {
                self.hide();
            };
            self.macrocrm_wrap_obj.addEventListener("click", close_handler);
            self.macrocrm_close_obj.addEventListener("click", close_handler);

            self.macrocrm_inline_form = self.$('.mcrm-inline-form');
            if (self.macrocrm_inline_form) {
                if (navigator.appVersion.indexOf("MSIE") === -1) {
                    params = self.macrocrm_inline_form.dataset;
                } else {
                    params = self.get_ie_target_data(self.macrocrm_inline_form);
                }
                params.inline = true;
                self.show_inline(params);
            }


            if (w['postMessage']) {
                var eventMethod = w.addEventListener ? "addEventListener" : "attachEvent";
                w[eventMethod](eventMethod === "attachEvent" ? "onmessage" : "message", function (e) {
                    //поскольку у нас идет широковещательные сообщения - фильтруем по метке события
                    if (typeof e.data.uuid !== 'undefined' && e.data.uuid === self.uuid) {
                        if (typeof e.data.action !== 'undefined') {
                            switch (e.data.action) {
                                case 'success':
                                    self.macrocrm_onsuccess_call();
                                    break;
                                // закрываем форму
                                case 'close':
                                    self.hide();
                                    break;
                            }
                        }
                        // Регулируем высоту контейнера
                        if (typeof e.data.height !== 'undefined' && e.data.height) {
                            if (e.data.inline) {
                                self.macrocrm_inline_form.style.height = e.data.height + 40 + 'px';
                            } else {
                                self.macrocrm_content_obj.style.height = e.data.height + 40 + 'px';
                            }

                        }
                    }
                }, false);
            }
        },
        // Триггер достижения цели
        catalogTriggerTarget: function (name, params, userProps) {
            userProps = userProps || {};
            // Яндекс
            if (typeof ym === "function" && this.domain_config.hasOwnProperty('catalog_yandex_id') && this.domain_config.catalog_yandex_id) {
                ym(this.domain_config.catalog_yandex_id, 'reachGoal', name, params || {});
            }
            // Google
            if (
              (((this.ga_allowed_events.hasOwnProperty('length') && !this.ga_allowed_events.length) || this.ga_allowed_events.hasOwnProperty(name))) &&
              typeof gtag === "function" &&
              this.domain_config.hasOwnProperty('catalog_ga_id') &&
              this.domain_config.catalog_ga_id
            ) {
              gtag('event', name, Object.assign({
                'event_category': 'macrowidget_category',
              }, params));
            }
            // Amplitude
            // if (typeof amplitude === "object") {
            //     if (Object.keys(userProps).length) {
            //       let identify = new amplitude.Identify()
            //       for (var key in userProps) {
            //         identify.set(key, userProps[key])
            //       }
            //       amplitude.getInstance().identify(identify);
            //     }
            //     amplitude.getInstance().logEvent(name, params || {});
            // }
        },
        show: function (data) {
            var self = this;

            self.addClass(self.macrocrm_html_obj, self.macrocrm_html);

            self.macrocrm_window_obj.style.display = 'block';
            self.macrocrm_wrap_obj.style.display = 'block';
            setTimeout(function () {
                self.macrocrm_window_obj.style.opacity = '1';
                self.macrocrm_wrap_obj.style.opacity = '1';
            }, 200);

            // Загрузка во фрейм
            var macrocrm_ifrbox = self.crel('i' + 'f' + 'rame');
            macrocrm_ifrbox.setAttribute('width', '100%');
            macrocrm_ifrbox.setAttribute('height', '100%');
            macrocrm_ifrbox.setAttribute('frameborder', '0');
            macrocrm_ifrbox.setAttribute('seamless', 'seamless');
            macrocrm_ifrbox.setAttribute('src', 'about:blank');
            macrocrm_ifrbox.style.display = 'none';

            self.macrocrm_content_obj.appendChild(macrocrm_ifrbox);
            var macrocrm_loading = self.crel('div');
            macrocrm_loading.setAttribute('id', self.macrocrm_loading);
            macrocrm_loading.innerHTML = self.macrocrm_loading_desc;
            self.macrocrm_content_obj.appendChild(macrocrm_loading);

            mcrm.get_api_url(data, function (result) {
                if (result.success) {
                    macrocrm_loading.style.display = 'none';
                    macrocrm_ifrbox.setAttribute('src', result.url);
                    macrocrm_ifrbox.style.display = 'block';
                    self.macrocrm_close_obj.style.display = 'block';
                    self.uuid = result.uuid;
                } else {
                    macrocrm_loading.innerHTML = result.message;
                }
            });
        },
        // Извлекаем тип продукта из урла, если есть
        getLinkType: function () {
          if (location.hash.indexOf('#/macrocatalog/') !== -1) {
            return 'catalog'
          } else if (location.hash.indexOf('#/macroagent/') !== -1) {
            return 'agent'
          } else if (location.hash.indexOf('#/macroclient/') !== -1) {
            return 'customer'
          }
          return null
        },
        show_inline: function (data) {
            // Если в урле есть тип продукта, то добавляем его в параметры
            let linkType = this.getLinkType();
            if (linkType) {
              data.type = linkType;
              w.macrocrm.CatalogParams = data;
            }
            // Если тип каталог или кабинет, то проверяем нужна ли автоинициализация
            if (['catalog', 'agent', 'customer'].indexOf(data.type) !== -1) {
              // Инициализируем приложение каталога, если переданы автоинициализация или автопоказ или часть урла каталога
              if ((typeof data.autoinit !== 'undefined' && data.autoinit === 'true') ||
                  (typeof data.autoshow !== 'undefined' && data.autoshow === 'true') || linkType) {
                  if (typeof data.autoinit == 'undefined') {
                      w.macrocrm.CatalogParams = {}
                      this.addPreloader();
                  } else {
                      this.checkPreloadSettings();
                  }
                  this.initCatalog(data);
              }
              if (data.type === 'catalog') {
                this.initCatalogButton(data);
              } else if (data.type === 'agent') {
                  let hideButton = typeof data.noagentbutton !== 'undefined' && data.noagentbutton === 'true'
                  if (!hideButton) {
                    this.initCabinetButton();
                  } else {
                    this.setCabinetOpenLinks()
                    this.setPathNameCheck()
                  }
              }
            }
        },
        hide: function () {
            var self = this;

            self.removeClass(self.macrocrm_html_obj, self.macrocrm_html);

            self.macrocrm_window_obj.style.opacity = '0';
            self.macrocrm_wrap_obj.style.opacity = '0';
            setTimeout(function () {
                self.macrocrm_window_obj.style.display = 'none';
                self.macrocrm_wrap_obj.style.display = 'none';
            }, 200);
            // Удаляем фрейм и loading
            var loading = self.$('#' + self.macrocrm_loading);
            loading.parentNode.removeChild(loading);
            var framebox = self.$('.' + self.macrocrm_content + ' if' + 'rame');
            framebox.parentNode.removeChild(framebox);
            self.macrocrm_content_obj.style.height = 'auto';
            self.macrocrm_close_obj.style.display = 'none';
        },
        get_ie_target_data: function (target) {
            var all_data = {};
            for (var i in target.attributes) {
                var attr = target.attributes[i] || null;
                if (attr && attr.name && attr.name.indexOf('data') !== -1) {
                    all_data[attr.name.substring(5)] = attr.value;
                }
            }
            return all_data;
        },
        get_api_url: function (data, callback) {
            // Подготовка параметров
            var api_url = this.api_url;
            var adv_params_string = '&';

            data.uuid = this.uuidv4();

            for (var i in data) {
                if (i !== 'toggle') {
                    adv_params_string = adv_params_string + i + '=' + encodeURIComponent(data[i]) + '&';
                }
            }

            //удаляем ненужные куки
            var cookies = this.collect_cookie();
            var utm_params = this.collect_utm_params();

            for (var i in cookies) {
                if (this.cookie_used.indexOf(i) !== -1) {
                    adv_params_string = adv_params_string + i + '=' + encodeURIComponent(cookies[i]) + '&';
                }
            }
            for (var i in utm_params) {
                adv_params_string = adv_params_string + i + '=' + encodeURIComponent(utm_params[i]) + '&';
            }
            api_url = api_url + adv_params_string;

            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
            var xhr = new XHR();
            xhr.open('GET', api_url, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = JSON.parse(xhr.responseText);
                    if (!response.error) {
                        return callback({
                            success: true,
                            url: response.url,
                            customerUrl: response.customerUrl,
                            baseUrl: response.baseUrl,
                            imUrl: response.imUrl,
                            assets: response.assets || [],
                            uuid: data.uuid
                        });
                    } else {
                        return callback({success: false, message: response.message});
                    }

                }
            };
            xhr.send();
        },
        uuidv4: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        collect_cookie: function () {
            var cookies = d.cookie ? d.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var result = {};

            cookies.forEach(item => {
                var parts = item.split('=');
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    result[name] = cookie;
                } catch (e) {
                }
            });

            return result;
        },
        collect_utm_params: function () {
            var sPageURL = decodeURIComponent(w.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName;

            var params = {};
            sURLVariables.forEach(item => {
                sParameterName = item.split('=');
                if (sParameterName[0].indexOf('utm_') === 0) {
                    params[sParameterName[0]] = sParameterName[1];
                }
            })
            return params;
        },
        addClass: function (element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
            return true;
        },
        removeClass: function (element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        macrocrm_onsuccess_call: function () {
            var self = this;
            if (self.macrocrm_onsuccess !== null) {
                self.ev(self.macrocrm_onsuccess);
            }
        },
        cookie_check: function () {
            if (typeof this.domain_config[this.domain_invite_option_name] != 'undefined' && this.domain_config[this.domain_invite_option_name] == '1') {

                var cookies = this.collect_cookie();
                if (typeof cookies[this.sess_cookie_name] != 'undefined') {
                    this.sess_cookie = cookies[this.sess_cookie_name];
                } else {

                    var date = new Date(),
                        timestamp = date.getTime(),
                        expire = new Date(timestamp + 60 * 60 * 1000);

                    d.cookie = this.sess_cookie_name + "=" + timestamp + "; path=/; expires=" + expire.toUTCString();
                    this.sess_cookie = timestamp;
                }

                d.body.onmouseout = this.lastchance;
            }
        },
        lastchance: function (e) {
            if (e.relatedTarget == null) {

                var date = new Date(),
                    difference = date.getTime() - mcrm.sess_cookie;

                if (difference > mcrm.domain_config['min_time_before_invitation'] * 1000) {

                    var timestamp = date.getTime() + 24 * 60 * 60 * 1000,
                        expire = new Date(timestamp);

                    d.cookie = mcrm.sess_cookie_name + "=" + timestamp + "; path=/; expires=" + expire.toUTCString();
                    mcrm.sess_cookie = timestamp;

                    if (typeof mcrm.domain_config['lastchance_text'] != 'undefined' && mcrm.domain_config['lastchance_text'] != '') {
                        var message = mcrm.domain_config['lastchance_text'];
                    } else {
                        var message = mcrm.lastchance_text_default;
                    }

                    var data = {
                        toggle: 'macrocrm_request',
                        action: 'lastchance',
                        message: message
                    };

                    mcrm.show(data);
                }
            }
        },
        // Метод добавления кнопки обратной связи
        initCallbackButton: function () {
            if (this.domain_config.hasOwnProperty('callback_show_button')) {
              let button_color = '#F30045';

              if (this.domain_config.hasOwnProperty('callback_show_button_color')) {
                button_color = this.domain_config.callback_show_button_color;
              }

              let btn_div = document.createElement('div');
              btn_div.id = "MacroCallbackBtn";
              btn_div.innerHTML =
                '<div class="callback_btn">\n' +
                '    <div class="first_field"></div>\n' +
                '    <div class="second_field"></div>\n' +
                '    <div class="front_field" data-toggle="macrocrm_request" data-action="question">\n' +
                '        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '            <path d="M13.3214 1.69009C13.5314 1.82835 13.7405 2.40606 13.9481 3.42266C14.0242 3.70337 14.1233 4.10087 14.2467 4.61391C14.3699 5.12735 14.4851 5.59429 14.5924 6.01394C14.6993 6.43431 14.806 6.8299 14.9121 7.20122C14.9368 7.26265 15.0059 7.4527 15.1199 7.77149C15.2333 8.09041 15.3102 8.35432 15.3502 8.56442C15.3897 8.77398 15.3858 8.96862 15.3377 9.14793C15.2691 9.40401 15.0008 9.67494 14.5331 9.96126C14.065 10.2474 13.5739 10.4934 13.0588 10.6984C12.5439 10.9034 12.0562 11.1366 11.5952 11.397C11.134 11.6579 10.8726 11.9038 10.8109 12.134C10.7799 12.2496 10.7735 12.4024 10.7908 12.5921C10.8085 12.7819 10.8282 12.9279 10.8482 13.0299C10.8694 13.1314 10.9177 13.3087 10.9942 13.5627C11.0702 13.817 11.1114 13.9581 11.1174 13.9871C11.6208 16.0023 12.3318 17.8055 13.2501 19.3968C14.1693 20.9879 15.3752 22.5054 16.869 23.9488C16.8912 23.9684 16.9931 24.0749 17.1747 24.2675C17.3565 24.4604 17.4859 24.5913 17.5638 24.6601C17.6413 24.729 17.7581 24.8186 17.9138 24.9288C18.0695 25.039 18.2049 25.1097 18.3203 25.1406C18.5507 25.2024 18.8943 25.0988 19.3507 24.8299C19.8069 24.561 20.2528 24.2548 20.6876 23.9117C21.1226 23.5682 21.5812 23.2659 22.063 23.0038C22.5451 22.7418 22.9139 22.6451 23.17 22.7137C23.3492 22.7617 23.5199 22.8554 23.6815 22.9947C23.8435 23.1342 24.0336 23.3327 24.2529 23.5906C24.4721 23.8484 24.602 24.0033 24.6431 24.0556C24.9116 24.3332 25.201 24.6233 25.5111 24.9262C25.821 25.2292 26.1678 25.5621 26.5508 25.9256C26.9336 26.2888 27.228 26.5735 27.4335 26.7797C28.2098 27.4678 28.6057 27.9376 28.6205 28.1887C28.6349 28.2886 28.6182 28.4284 28.5702 28.6075C28.4775 28.9535 28.2927 29.3877 28.0152 29.9103C27.7378 30.4333 27.486 30.8357 27.2591 31.1181C26.8188 31.6864 25.8558 32.1558 24.3704 32.5265C22.9918 32.8571 21.7131 32.8645 20.5351 32.5488C20.1896 32.4562 19.8594 32.3438 19.5446 32.2114C19.2301 32.0791 18.8833 31.9003 18.5043 31.6751C18.1254 31.4501 17.8459 31.2757 17.6666 31.1523C17.487 31.0289 17.1669 30.8024 16.706 30.4729C16.2451 30.1438 15.9624 29.9443 15.8575 29.875C14.7225 29.0906 13.7444 28.2589 12.9229 27.38C11.5548 25.9296 10.2306 24.0957 8.95085 21.8793C7.67125 19.6628 6.74509 17.5994 6.17268 15.6891C5.82233 14.5384 5.59127 13.2752 5.47901 11.9001C5.47169 11.7746 5.4406 11.4301 5.38525 10.8664C5.3305 10.3027 5.29447 9.91207 5.27717 9.69484C5.25983 9.47753 5.24842 9.14816 5.24273 8.70784C5.23728 8.26663 5.25579 7.87728 5.29814 7.53866C5.34148 7.2001 5.40876 6.85777 5.50135 6.51221C5.81699 5.33424 6.46291 4.23048 7.4385 3.20172C8.50194 2.10073 9.39 1.50167 10.1029 1.40445C10.4606 1.34873 10.9351 1.33229 11.5267 1.35357C12.118 1.37436 12.5864 1.43149 12.9323 1.52418C13.1122 1.57196 13.2413 1.62724 13.3214 1.69009Z" fill="white"/>\n' +
                '        </svg>\n' +
                '    </div>\n' +
                '</div>\n' +
                '\n' +
                '<style>\n' +
                '    #MacroCallbackBtn .callback_btn {\n' +
                '        width: 56px;\n' +
                '        height: 56px;\n' +
                '        position: fixed;\n' +
                '        overflow: visible;\n' +
                '        bottom: 400px;\n' +
                '        right: 100px;\n' +
                '    }\n' +
                '\n' +
                '    #MacroCallbackBtn .first_field, #MacroCallbackBtn .second_field, #MacroCallbackBtn .third_field, #MacroCallbackBtn .front_field {\n' +
                '        position: absolute;\n' +
                '        top: 0;\n' +
                '        left: 0;\n' +
                '        bottom: 0;\n' +
                '        right: 0;\n' +
                '        background: ' + button_color + ';\n' +
                '        border-radius: 50%;\n' +
                '        opacity: 0.2;\n' +
                '    }\n' +
                '\n' +
                '    #MacroCallbackBtn .first_field {\n' +
                '        transform: rotate(160deg) scale(0.8);\n' +
                '        animation: 4s move_1 infinite;\n' +
                '    }\n' +
                '\n' +
                '    #MacroCallbackBtn .second_field {\n' +
                '        transform: rotate(220deg) scale(0.8);\n' +
                '        animation: 4s move_2 infinite;\n' +
                '    }\n' +
                '\n' +
                '    #MacroCallbackBtn .front_field {\n' +
                '        display: flex;\n' +
                '        align-items: center;\n' +
                '        justify-content: center;\n' +
                '        cursor: pointer;\n' +
                '        transition: .5s;\n' +
                '        opacity: 1;\n' +
                '    }\n' +
                '\n' +
                '    #MacroCallbackBtn .front_field:hover {\n' +
                '        filter: grayscale(.2);\n' +
                '    }\n' +
                '\n' +
                '    @keyframes move_1 {\n' +
                '        0% {\n' +
                '            transform: rotate(160deg) scale(0.8);\n' +
                '            border-radius: 10px;\n' +
                '        }\n' +
                '        40% {\n' +
                '            transform: rotate(164deg) scale(1.05);\n' +
                '            border-radius: 14px;\n' +
                '        }\n' +
                '        50% {\n' +
                '            transform: rotate(165deg) scale(1.05);\n' +
                '            border-radius: 15px;\n' +
                '        }\n' +
                '        60% {\n' +
                '            transform: rotate(166deg) scale(1.05);\n' +
                '            border-radius: 16px;\n' +
                '        }\n' +
                '        100% {\n' +
                '            transform: rotate(170deg) scale(0.8);\n' +
                '            border-radius: 20px;\n' +
                '        }\n' +
                '    }\n' +
                '\n' +
                '    @keyframes move_2 {\n' +
                '        0% {\n' +
                '            transform: rotate(220deg) scale(0.8);\n' +
                '            border-radius: 10px;\n' +
                '        }\n' +
                '        40% {\n' +
                '            transform: rotate(224deg) scale(1.15);\n' +
                '            border-radius: 14px;\n' +
                '        }\n' +
                '        50% {\n' +
                '            transform: rotate(225deg) scale(1.15);\n' +
                '            border-radius: 15px;\n' +
                '        }\n' +
                '        60% {\n' +
                '            transform: rotate(226deg) scale(1.15);\n' +
                '            border-radius: 16px;\n' +
                '        }\n' +
                '        100% {\n' +
                '            transform: rotate(230deg) scale(0.8);\n' +
                '            border-radius: 20px;\n' +
                '        }\n' +
                '    }\n' +
                '\n' +
                '    @media only screen and (max-width : 768px) {\n' +
                '       #MacroCallbackBtn .callback_btn {\n' +
                '         bottom: 320px;\n' +
                '         right: 20px;\n' +
                '     }'+
                '    }\n' +
                '</style>';

              this.$('body').appendChild(btn_div);
            }
        },
        // Проверяем наличие JQuery и добавляем если нет
        checkJQuery: function () {
            let issetJQuery = Boolean(w.jQuery);
            if (!issetJQuery) {
              let head = document.getElementsByTagName('head').item(0);
              let script = document.createElement('script');
              script.setAttribute('type', 'text/javascript');
              script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js');
              script.setAttribute('integrity', 'sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=');
              script.setAttribute('crossorigin', 'anonymous');
              head.appendChild(script);
            }
            return issetJQuery;
        },
        // Метод инициализации каталога
        initCatalog: function (params, reset) {
            var self = this;
            params = params || {};

            // Прокидываем некоторые настройки домена в приложение виджета, что бы они были доступны до инициализации
            if (w.macrocrm.CatalogParams) {
                w.macrocrm.CatalogParams.domain_config = {};

                // Переопределения настроек домена из дата атрибутов
                w.macrocrm.CatalogParams.domain_config_overwrite = {}
                if (self.macrocrm_inline_form.dataset['iframemode']) {
                    w.macrocrm.CatalogParams.domain_config_overwrite['iframeMode'] = self.macrocrm_inline_form.dataset['iframemode']
                }
            }

            // Настраиваем локаль из настроек домена
            localStorage.setItem('macro-widgets-locale', this.current_locale || 'ru')

            if (self.macrocrm_inline_form) {

              if (navigator.appVersion.indexOf("MSIE") === -1) {
                params = Object.assign(self.macrocrm_inline_form.dataset, params);
              } else {
                params = Object.assign(this.get_ie_target_data(self.macrocrm_inline_form), params);
              }

              params.issetJQuery = self.checkJQuery() ? 1 : 0;

              // Сеттим апи ключ амплитуды в зависимости от типа
              if (typeof amplitude === "object") {
                amplitude.getInstance().init(this.amplitude_api_key[params.type], null, {
                    apiEndpoint: 'ampli.macroreg.ru'
                });
              }

              setTimeout(function() {
                self.macrocrm_inline_form.id = 'mcrm_catalog';
                self.get_api_url(params, function (result) {
                  if (result.success) {
                    self.macrocrm_inline_form.dataset['url'] = result.url;
                    self.macrocrm_inline_form.dataset['customerUrl'] = result.customerUrl;
                    self.macrocrm_inline_form.dataset['baseurl'] = result.baseUrl;
                    self.macrocrm_inline_form.dataset['imurl'] = result.imUrl;

                    if (result.assets) {
                      for (var k in result.assets) {
                        var asset = result.assets[k]
                        if (!d.getElementById(asset.id)) {
                          if (asset.type === 'script') {
                            var s = d.createElement("script");
                            s.type = "text/javascript";
                            s.async = false;
                            s.src = asset.url;
                            s.id = asset.id;
                            d.getElementsByTagName("body")[0].appendChild(s)
                          } else if (asset.type === 'style') {
                            var l = d.createElement("link");
                            l.type = "text/css";
                            l.rel = "stylesheet";
                            l.href = asset.url;
                            l.id = asset.id;
                            d.getElementsByTagName("head")[0].appendChild(l)
                          }
                        }
                      }
                      self.uuid = result.uuid;
                      if (reset) {
                        w.macroCatalogReset();
                      }
                    }
                  }
                });
              }, 500);
            }
        },
        // Метод навешивания обработчика ссылок, для открытия кабинета (для wix)
        setCabinetOpenLinks: function () {
          setTimeout(function () {
            let elements = d.querySelectorAll("a[href='https://macrocabinet-open-link-cabinet.ru']");
            console.log('setCabinetOpenLinks', elements);
            elements.forEach(function (element) {
              element.addEventListener('click', function(e) {
                e.preventDefault();
                macrocrm.initCatalogAndShow({})
              })
            })
          }, 100);
        },
        // Метод проверки изменения пути через равные промежутки времени
        setPathNameCheck: function () {
          let self = this;
          this.currentPathName = d.location.pathname;
          setInterval(function () {
              if (d.location.pathname !== self.currentPathName && d.location.hash.indexOf('#macroagent') === -1) {
                self.currentPathName = d.location.pathname;
                self.setCabinetOpenLinks();
              }
          }, 500)
        },
        // Метод добавления кнопки запуска кабинета
        initCabinetButton: function () {
            let btn_div = document.createElement('div');
            btn_div.id = "MacroCabinetBtn";
            btn_div.innerHTML =
              '<button onclick="macrocrm.initCatalogAndShow({type: \'agent\'})">' + this.agent_button_name.replace('\\', '') + '</button>' +
              '<style>\n' +
              '    #MacroCabinetBtn {\n' +
              '        text-align: center;\n' +
              '        margin-bottom: 40px;\n' +
              '        margin-top: 40px;\n' +
              '        z-index: 10;\n' +
              '        position: relative;' +
              '    }\n' +
              '    #MacroCabinetBtn button {\n' +
              '        background: #7391C8;\n' +
              '        color: white;\n' +
              '        text-transform: uppercase;\n' +
              '        padding: 10px 15px;\n' +
              '        border: none;\n' +
              '        border-radius: 8px;\n' +
              '        webkit-transition: all 0.2s ease-in-out;\n' +
              '        -moz-transition: all 0.2s ease-in-out;\n' +
              '        -ms-transition: all 0.2s ease-in-out;\n' +
              '        -o-transition: all 0.2s ease-in-out;\n' +
              '        transition: all 0.2s ease-in-out;\n' +
              '        outline: none;\n' +
              '        cursor: pointer;\n' +
              '    }\n' +
              '    #MacroCabinetBtn button:hover {\n' +
              '        background: #87a5de;\n' +
              '    }\n' +
              '</style>';
            this.macrocrm_inline_form.parentNode.appendChild(btn_div);
        },
        // Метод генерации параметров кнопки каталога
        generateCatalogButtonParams: function (isMobile) {
            let prefix = isMobile ? 'mobile_' : '';

            let button_color = '#F30045';
            let button_text = 'Квартиры<br>в наличии';
            let button_size = isMobile ? 100 : 160;

            if (this.domain_config.hasOwnProperty(prefix + 'catalog_show_button_color')) {
                button_color = this.domain_config[prefix + 'catalog_show_button_color'];
            }

            if (this.domain_config.hasOwnProperty(prefix + 'catalog_show_button_text') && this.domain_config[prefix + 'catalog_show_button_text']) {
                button_text = this.domain_config[prefix + 'catalog_show_button_text'].replaceAll('\n', '<br>');
            }

            if (this.domain_config.hasOwnProperty(prefix + 'catalog_show_button_size') && this.domain_config[prefix + 'catalog_show_button_size']) {
                button_size = this.domain_config[prefix + 'catalog_show_button_size'];
            }

            let buttonPosition = this.domain_config.hasOwnProperty(prefix + 'catalog_button_position') ? this.domain_config[prefix + 'catalog_button_position'] : 'bottom_right',
                catalogButtonMarginBottom = this.domain_config.hasOwnProperty(prefix + 'catalog_button_margin_bottom') ? this.domain_config[prefix + 'catalog_button_margin_bottom'] : '100',
                catalogButtonMarginTop = this.domain_config.hasOwnProperty(prefix + 'catalog_button_margin_top') ? this.domain_config[prefix + 'catalog_button_margin_top'] : '0',
                catalogButtonMarginLeft = this.domain_config.hasOwnProperty(prefix + 'catalog_button_margin_left') ? this.domain_config[prefix + 'catalog_button_margin_left'] : '0',
                catalogButtonMarginRight = this.domain_config.hasOwnProperty(prefix + 'catalog_button_margin_right') ? this.domain_config[prefix + 'catalog_button_margin_right'] : '100',
                bottom = 'auto',
                top = 'auto',
                left = 'auto',
                right = 'auto';

            let halfSize = button_size / 2;

            switch(buttonPosition) {
                case 'top_left':
                    top = catalogButtonMarginTop + 'px';
                    left = catalogButtonMarginLeft + 'px';
                    break;
                case 'top':
                    top = catalogButtonMarginTop + 'px';
                    if (catalogButtonMarginLeft !== '0') {
                        left = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginLeft + 'px)';
                    } else if (catalogButtonMarginRight !== '0') {
                        right = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginRight + 'px)';
                    } else {
                        left = 'calc(100% / 2 - ' + halfSize + 'px)';
                    }
                    break;
                case 'top_right':
                    top = catalogButtonMarginTop + 'px';
                    right = catalogButtonMarginRight + 'px';
                    break;
                case 'middle_left':
                    left = catalogButtonMarginLeft + 'px';
                    if (catalogButtonMarginTop !== '0') {
                        top = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginTop + 'px)';
                    } else if (catalogButtonMarginBottom !== '0') {
                        bottom = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginBottom + 'px)';
                    } else {
                        top = 'calc(100% / 2 - ' + halfSize + 'px)';
                    }
                    break;
                case 'middle_right':
                    right = catalogButtonMarginRight + 'px';
                    if (catalogButtonMarginTop !== '0') {
                        top = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginTop + 'px)';
                    } else if (catalogButtonMarginBottom !== '0') {
                        bottom = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginBottom + 'px)';
                    } else {
                        top = 'calc(100% / 2 - ' + halfSize + 'px)';
                    }
                    break;
                case 'bottom_left':
                    bottom = catalogButtonMarginBottom + 'px';
                    left = catalogButtonMarginLeft + 'px';
                    break;
                case 'bottom':
                    bottom = catalogButtonMarginBottom + 'px';
                    if (catalogButtonMarginLeft !== '0') {
                        left = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginLeft + 'px)';
                    } else if (catalogButtonMarginRight !== '0') {
                        right = 'calc(100% / 2 - ' + halfSize + 'px + ' + catalogButtonMarginRight + 'px)';
                    } else {
                        left = 'calc(100% / 2 - ' + halfSize + 'px)';
                    }
                    break;
                case 'bottom_right':
                    bottom = catalogButtonMarginBottom + 'px';
                    right = catalogButtonMarginRight + 'px';
                    break;
            }

            return [
                button_color,
                button_text,
                button_size,
                top,
                bottom,
                left,
                right
            ]
        },
        // Метод добавления кнопки запуска каталога
        initCatalogButton: function (data, forseCall) {
            // Если кнопка включена хоть в одном режиме, то инициализируем
            if (forseCall || this.domain_config.hasOwnProperty('catalog_show_button') || this.domain_config.hasOwnProperty('mobile_catalog_show_button')) {
                // Определяем видимость кнопки
                let main_class_array = [];
                if (!this.domain_config.hasOwnProperty('catalog_show_button') && !forseCall) {
                    main_class_array.push('hidden_d');
                }
                if (!this.domain_config.hasOwnProperty('mobile_catalog_show_button') && !forseCall) {
                    main_class_array.push('hidden_m');
                }

                // Извлекаем параметры кнопки для дексктопа и мобилы
                let [color, text, size, top, bottom, left, right] = this.generateCatalogButtonParams();
                let [m_color, m_text, m_size, m_top, m_bottom, m_left, m_right] = this.generateCatalogButtonParams(true);

                text = text.replace('\\n', '<br>')

                // Переопределям data-атрибуты из настроек презентационного режима
                catalogStartLevel = this.domain_config.hasOwnProperty('catalog_start_level') ? this.domain_config.catalog_start_level : '';
                catalogStartLevelId = this.domain_config.hasOwnProperty('catalog_start_level_id') ? this.domain_config.catalog_start_level_id : null;
                if (catalogStartLevel && catalogStartLevelId) {
                    data.presmode = catalogStartLevel;
                    data[catalogStartLevel + 'id'] = catalogStartLevelId;
                }

                // Проброска настроек из data-атрибутов
                let paramsList = {presmode: 'presMode', houseid: 'houseId', complexid: 'complexId', houseview: 'houseView'};
                let paramsString = "{type: 'catalog',";
                for (key in data) {
                    if (Object.keys(paramsList).includes(key)) {
                        paramsString += (paramsList[key] + ": '" + data[key] + "',");
                    }
                }
                paramsString += '}';

                let btn_div = document.createElement('div');
                btn_div.id = "MacroCatalogBtn";
                btn_div.classList = main_class_array.join(' ');
                btn_div.innerHTML =
                    '<div class="macro-dws">\n' +
                    '    <div class="macro-pulse">\n' +
                    '        <div class="macro-bloc" onclick="macrocrm.initCatalogAndShow(' + paramsString + ')">\n' +
                    '            <div class="macro-building">\n' +
                    '                <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '                    <path d="M41.1053 38.8189H37.3666V3.38536C37.3666 3.01133 37.0635 2.7083 36.6896 2.7083H24.0509C23.6769 2.7083 23.3738 3.01133 23.3738 3.38536V6.31932H22.0197V3.38536C22.0197 3.01133 21.7165 2.7083 21.3426 2.7083H18.4086V0.677056C18.4086 0.303024 18.1054 0 17.7315 0C17.3577 0 17.0545 0.303024 17.0545 0.677056V2.7083H14.1205C13.7466 2.7083 13.4435 3.01133 13.4435 3.38536V6.31932H11.4122C11.0383 6.31932 10.7352 6.62235 10.7352 6.99638V12.6386H5.09289C4.71893 12.6386 4.41583 12.9417 4.41583 13.3157V38.8188H0.677056C0.303102 38.8188 0 39.1218 0 39.4959C0 39.8699 0.303181 40.173 0.677056 40.173H41.1053C41.4792 40.173 41.7823 39.87 41.7823 39.4959C41.7823 39.1219 41.4791 38.8189 41.1053 38.8189ZM14.7975 4.06242H20.6654V6.31932H14.7975V4.06242ZM12.5406 38.8189H12.0892V37.6904C12.0892 37.3164 11.786 37.0134 11.4121 37.0134C11.0383 37.0134 10.7351 37.3164 10.7351 37.6904V38.8189H10.2837V36.562H12.5406V38.8189ZM17.0544 21.4406V22.6054V38.8189H13.8947V35.8849C13.8947 35.5109 13.5915 35.2079 13.2176 35.2079H9.60662C9.23267 35.2079 8.92956 35.5109 8.92956 35.8849V38.8189H5.76986V13.9928H17.0544V21.4406ZM17.7315 12.6387H12.0892V7.67351H23.3737V20.7636H18.4086V18.5067H20.4398C20.8138 18.5067 21.1169 18.2036 21.1169 17.8296C21.1169 17.4556 20.8137 17.1525 20.4398 17.1525H18.4086V14.8956H20.4398C20.8138 14.8956 21.1169 14.5926 21.1169 14.2186C21.1169 13.8445 20.8137 13.5415 20.4398 13.5415H18.4086V13.3159C18.4086 12.9418 18.1054 12.6387 17.7315 12.6387ZM29.6931 38.8189H18.4086V22.6054V22.1178H29.6931V38.8189ZM36.0125 38.8189H31.0472V21.4406V20.5378C31.0472 20.1638 30.7441 19.8608 30.3702 19.8608C29.9963 19.8608 29.6931 20.1638 29.6931 20.5378V20.7635H28.339V20.5378C28.339 20.1638 28.0358 19.8608 27.662 19.8608C27.2881 19.8608 26.9849 20.1638 26.9849 20.5378V20.7635H24.728V6.99646V4.06242H36.0125L36.0125 38.8189Z" fill="white"/>\n' +
                    '                    <path d="M21.3426 37.4649C21.7165 37.4649 22.0196 37.1617 22.0196 36.7879V24.1492C22.0196 23.7752 21.7165 23.4722 21.3426 23.4722C20.9687 23.4722 20.6655 23.7752 20.6655 24.1492V36.788C20.6655 37.1618 20.9686 37.4649 21.3426 37.4649Z" fill="white"/>\n' +
                    '                    <path d="M24.0508 37.4649C24.4248 37.4649 24.7279 37.1617 24.7279 36.7879V24.1492C24.7279 23.7752 24.4247 23.4722 24.0508 23.4722C23.677 23.4722 23.3738 23.7752 23.3738 24.1492V36.788C23.3737 37.1618 23.6769 37.4649 24.0508 37.4649Z" fill="white"/>\n' +
                    '                    <path d="M26.7591 37.4649C27.133 37.4649 27.4361 37.1617 27.4361 36.7879V24.1492C27.4361 23.7752 27.133 23.4722 26.7591 23.4722C26.3852 23.4722 26.082 23.7752 26.082 24.1492V36.788C26.082 37.1618 26.3852 37.4649 26.7591 37.4649Z" fill="white"/>\n' +
                    '                    <path d="M27.6619 8.57629C28.0359 8.57629 28.339 8.27326 28.339 7.89923V6.99651C28.339 6.62248 28.0358 6.31946 27.6619 6.31946C27.288 6.31946 26.9849 6.62248 26.9849 6.99651V7.89931C26.9849 8.27326 27.288 8.57629 27.6619 8.57629Z" fill="white"/>\n' +
                    '                    <path d="M30.3702 8.57629C30.7441 8.57629 31.0472 8.27326 31.0472 7.89923V6.99651C31.0472 6.62248 30.744 6.31946 30.3702 6.31946C29.9963 6.31946 29.6931 6.62248 29.6931 6.99651V7.89931C29.6931 8.27326 29.9962 8.57629 30.3702 8.57629Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 8.57629C33.4526 8.57629 33.7557 8.27326 33.7557 7.89923V6.99651C33.7557 6.62248 33.4525 6.31946 33.0787 6.31946C32.7048 6.31946 32.4016 6.62248 32.4016 6.99651V7.89931C32.4016 8.27326 32.7047 8.57629 33.0787 8.57629Z" fill="white"/>\n' +
                    '                    <path d="M27.6619 13.09C28.0359 13.09 28.339 12.787 28.339 12.413V11.5102C28.339 11.1362 28.0358 10.8331 27.6619 10.8331C27.288 10.8331 26.9849 11.1362 26.9849 11.5102V12.413C26.9849 12.787 27.288 13.09 27.6619 13.09Z" fill="white"/>\n' +
                    '                    <path d="M30.3702 13.09C30.7441 13.09 31.0472 12.787 31.0472 12.413V11.5102C31.0472 11.1362 30.744 10.8331 30.3702 10.8331C29.9963 10.8331 29.6931 11.1362 29.6931 11.5102V12.413C29.6931 12.787 29.9962 13.09 30.3702 13.09Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 13.09C33.4526 13.09 33.7557 12.787 33.7557 12.413V11.5102C33.7557 11.1362 33.4525 10.8331 33.0787 10.8331C32.7048 10.8331 32.4016 11.1362 32.4016 11.5102V12.413C32.4016 12.787 32.7047 13.09 33.0787 13.09Z" fill="white"/>\n' +
                    '                    <path d="M27.6619 17.604C28.0359 17.604 28.339 17.3009 28.339 16.9269V16.0241C28.339 15.6501 28.0358 15.347 27.6619 15.347C27.288 15.347 26.9849 15.6501 26.9849 16.0241V16.9269C26.9849 17.3009 27.288 17.604 27.6619 17.604Z" fill="white"/>\n' +
                    '                    <path d="M30.3702 17.604C30.7441 17.604 31.0472 17.3009 31.0472 16.9269V16.0241C31.0472 15.6501 30.744 15.347 30.3702 15.347C29.9963 15.347 29.6931 15.6501 29.6931 16.0241V16.9269C29.6931 17.3009 29.9962 17.604 30.3702 17.604Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 17.604C33.4526 17.604 33.7557 17.3009 33.7557 16.9269V16.0241C33.7557 15.6501 33.4525 15.347 33.0787 15.347C32.7048 15.347 32.4016 15.6501 32.4016 16.0241V16.9269C32.4016 17.3009 32.7047 17.604 33.0787 17.604Z" fill="white"/>\n' +
                    '                    <path d="M8.70391 19.4095C9.07787 19.4095 9.38097 19.1065 9.38097 18.7324V17.8296C9.38097 17.4556 9.07779 17.1526 8.70391 17.1526C8.33004 17.1526 8.02686 17.4556 8.02686 17.8296V18.7324C8.02686 19.1064 8.33004 19.4095 8.70391 19.4095Z" fill="white"/>\n' +
                    '                    <path d="M11.4122 19.4095C11.7861 19.4095 12.0892 19.1065 12.0892 18.7324V17.8296C12.0892 17.4556 11.786 17.1526 11.4122 17.1526C11.0383 17.1526 10.7351 17.4556 10.7351 17.8296V18.7324C10.7351 19.1064 11.0382 19.4095 11.4122 19.4095Z" fill="white"/>\n' +
                    '                    <path d="M14.1204 19.4095C14.4944 19.4095 14.7975 19.1065 14.7975 18.7324V17.8296C14.7975 17.4556 14.4943 17.1526 14.1204 17.1526C13.7465 17.1526 13.4434 17.4556 13.4434 17.8296V18.7324C13.4434 19.1064 13.7465 19.4095 14.1204 19.4095Z" fill="white"/>\n' +
                    '                    <path d="M8.70391 23.9233C9.07787 23.9233 9.38097 23.6203 9.38097 23.2462V22.3434C9.38097 21.9694 9.07779 21.6664 8.70391 21.6664C8.33004 21.6664 8.02686 21.9694 8.02686 22.3434V23.2462C8.02686 23.6202 8.33004 23.9233 8.70391 23.9233Z" fill="white"/>\n' +
                    '                    <path d="M11.4122 23.9233C11.7861 23.9233 12.0892 23.6203 12.0892 23.2462V22.3434C12.0892 21.9694 11.786 21.6664 11.4122 21.6664C11.0383 21.6664 10.7351 21.9694 10.7351 22.3434V23.2462C10.7351 23.6202 11.0382 23.9233 11.4122 23.9233Z" fill="white"/>\n' +
                    '                    <path d="M14.1204 23.9233C14.4944 23.9233 14.7975 23.6203 14.7975 23.2462V22.3434C14.7975 21.9694 14.4943 21.6664 14.1204 21.6664C13.7465 21.6664 13.4434 21.9694 13.4434 22.3434V23.2462C13.4434 23.6202 13.7465 23.9233 14.1204 23.9233Z" fill="white"/>\n' +
                    '                    <path d="M8.70391 28.4371C9.07787 28.4371 9.38097 28.1341 9.38097 27.76V26.8572C9.38097 26.4832 9.07779 26.1802 8.70391 26.1802C8.33004 26.1802 8.02686 26.4832 8.02686 26.8572V27.76C8.02686 28.1341 8.33004 28.4371 8.70391 28.4371Z" fill="white"/>\n' +
                    '                    <path d="M11.4122 28.4371C11.7861 28.4371 12.0892 28.1341 12.0892 27.76V26.8572C12.0892 26.4832 11.786 26.1802 11.4122 26.1802C11.0383 26.1802 10.7351 26.4832 10.7351 26.8572V27.76C10.7351 28.1341 11.0382 28.4371 11.4122 28.4371Z" fill="white"/>\n' +
                    '                    <path d="M14.1204 28.4371C14.4944 28.4371 14.7975 28.1341 14.7975 27.76V26.8572C14.7975 26.4832 14.4943 26.1802 14.1204 26.1802C13.7465 26.1802 13.4434 26.4832 13.4434 26.8572V27.76C13.4434 28.1341 13.7465 28.4371 14.1204 28.4371Z" fill="white"/>\n' +
                    '                    <path d="M8.70391 32.9509C9.07787 32.9509 9.38097 32.6478 9.38097 32.2738V31.371C9.38097 30.997 9.07779 30.694 8.70391 30.694C8.33004 30.694 8.02686 30.997 8.02686 31.371V32.2738C8.02686 32.6478 8.33004 32.9509 8.70391 32.9509Z" fill="white"/>\n' +
                    '                    <path d="M11.4122 32.9509C11.7861 32.9509 12.0892 32.6478 12.0892 32.2738V31.371C12.0892 30.997 11.786 30.694 11.4122 30.694C11.0383 30.694 10.7351 30.997 10.7351 31.371V32.2738C10.7351 32.6478 11.0382 32.9509 11.4122 32.9509Z" fill="white"/>\n' +
                    '                    <path d="M14.1204 32.9509C14.4944 32.9509 14.7975 32.6478 14.7975 32.2738V31.371C14.7975 30.997 14.4943 30.694 14.1204 30.694C13.7465 30.694 13.4434 30.997 13.4434 31.371V32.2738C13.4434 32.6478 13.7465 32.9509 14.1204 32.9509Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 22.1177C33.4526 22.1177 33.7557 21.8147 33.7557 21.4407V20.5379C33.7557 20.1639 33.4525 19.8608 33.0787 19.8608C32.7048 19.8608 32.4016 20.1639 32.4016 20.5379V21.4407C32.4016 21.8146 32.7047 22.1177 33.0787 22.1177Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 26.6317C33.4526 26.6317 33.7557 26.3286 33.7557 25.9546V25.0518C33.7557 24.6778 33.4525 24.3748 33.0787 24.3748C32.7048 24.3748 32.4016 24.6778 32.4016 25.0518V25.9546C32.4016 26.3286 32.7047 26.6317 33.0787 26.6317Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 31.1455C33.4526 31.1455 33.7557 30.8424 33.7557 30.4684V29.5656C33.7557 29.1916 33.4525 28.8885 33.0787 28.8885C32.7048 28.8885 32.4016 29.1916 32.4016 29.5656V30.4684C32.4016 30.8424 32.7047 31.1455 33.0787 31.1455Z" fill="white"/>\n' +
                    '                    <path d="M33.0787 35.6592C33.4526 35.6592 33.7557 35.3562 33.7557 34.9822V34.0794C33.7557 33.7054 33.4525 33.4023 33.0787 33.4023C32.7048 33.4023 32.4016 33.7054 32.4016 34.0794V34.9822C32.4016 35.3561 32.7047 35.6592 33.0787 35.6592Z" fill="white"/>\n' +
                    '                    <path d="M21.1169 10.6075C21.1169 10.2334 20.8137 9.93042 20.4399 9.93042H15.0232C14.6493 9.93042 14.3462 10.2334 14.3462 10.6075C14.3462 10.9815 14.6494 11.2845 15.0232 11.2845H20.4399C20.8138 11.2845 21.1169 10.9815 21.1169 10.6075Z" fill="white"/>\n' +
                    '                </svg>\n' +
                    '            </div>\n' +
                    '            <div class="macro-text">' + text + '</div>\n' +
                    '            <div class="macro-text-m">' + m_text + '</div>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<style>\n' +
                    '    #MacroCatalogBtn .macro-dws {\n' +
                    '        position: fixed;\n' +
                    '        top: ' + top + ';\n' +
                    '        bottom: ' + bottom + ';\n' +
                    '        left: ' + left + ';\n' +
                    '        right: ' + right + ';\n' +
                    '        z-index: 120;' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse, .macro-bloc {\n' +
                    '        position: absolute;\n' +
                    '        width: ' + size + 'px;\n' +
                    '        height: ' + size + 'px;\n' +
                    '        color: #fff;\n' +
                    '        text-align: center;\n' +
                    '        border-radius: 50%;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-bloc {\n' +
                    '        cursor: pointer;\n' +
                    '        z-index: 1;\n' +
                    '        overflow: hidden;\n' +
                    '        display: flex;\n' +
                    '        flex-direction: column;\n' +
                    '        justify-content: center;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-bloc .macro-building {\n' +
                    '        display: flex;\n' +
                    '        flex-direction: column;\n' +
                    '        justify-content: center;\n' +
                    '        align-items: center;\n' +
                    '        color: white;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-bloc .macro-building svg {\n' +
                    '        width: ' + (size * 0.2625) + 'px;\n' +
                    '        height: ' + (size * 0.2625) + 'px;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse {\n' +
                    '        background: ' + color + ';\n' +
                    '        position: relative;\n' +
                    '        transition: .5s;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-text {\n' +
                    '        font-family: Roboto, sans-serif;\n' +
                    '        font-weight: normal;\n' +
                    '        font-size: ' + (size * 0.1) + 'px;\n' +
                    '        line-height: ' + (size * 0.11875) + 'px;\n' +
                    '        text-align: center;\n' +
                    '        color: white;\n' +
                    '        transition: .5s ease-in-out;\n' +
                    '        margin-top: ' + (size * 0.0375) + 'px;\n' +
                    '        display: block;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-text-m {\n' +
                    '        display: none;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse:hover {\n' +
                    '        filter: grayscale(.2);\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse:hover i {\n' +
                    '        transition: .5s ease-in-out;\n' +
                    '        transform: scale(0);\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse:hover .macro-text {\n' +
                    '        transform: scaleX(1);\n' +
                    '        transition: .5s ease-in-out;\n' +
                    '        opacity: 1;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse::before,\n' +
                    '    #MacroCatalogBtn .macro-pulse::after {\n' +
                    '        content: \'\';\n' +
                    '        position: absolute;\n' +
                    '        border: 1px solid ' + color + ';\n' +
                    '        left: -20px;\n' +
                    '        right: -20px;\n' +
                    '        top: -20px;\n' +
                    '        bottom: -20px;\n' +
                    '        border-radius: 50%;\n' +
                    '        animation: pulse 1.8s linear infinite;\n' +
                    '        opacity: 0;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse::after {\n' +
                    '        animation-delay: .5s;\n' +
                    '    }\n' +
                    '\n' +
                    '    @keyframes pulse {\n' +
                    '        0% {\n' +
                    '            transform: scale(0.5);\n' +
                    '            opacity: 0;\n' +
                    '        }\n' +
                    '        50% {\n' +
                    '            opacity: 1;\n' +
                    '        }\n' +
                    '        100% {\n' +
                    '            transform: scale(1.2);\n' +
                    '            opacity: 0;\n' +
                    '        }\n' +
                    '    }\n' +
                    '\n' +
                    '    @media only screen and (min-width : 769px) {\n' +
                    '    #MacroCatalogBtn.hidden_d {\n' +
                    '        display: none;\n' +
                    '    }\n' +
                    '    }\n' +
                    '    @media only screen and (max-width : 768px) {\n' +
                    '    #MacroCatalogBtn.hidden_m {\n' +
                    '        display: none;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-dws {\n' +
                    '        top: ' + m_top + ';\n' +
                    '        bottom: ' + m_bottom + ';\n' +
                    '        left: ' + m_left + ';\n' +
                    '        right: ' + m_right + ';\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse, .macro-bloc {\n' +
                    '        width: ' + m_size + 'px;\n' +
                    '        height: ' + m_size + 'px;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-bloc .macro-building svg {\n' +
                    '        width: ' + (m_size * 0.2625) + 'px;\n' +
                    '        height: ' + (m_size * 0.2625) + 'px;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse {\n' +
                    '        background: ' + m_color + ';\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-pulse::before,\n' +
                    '    #MacroCatalogBtn .macro-pulse::after {\n' +
                    '        border: 1px solid ' + m_color + ';\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-text {\n' +
                    '        display: none;\n' +
                    '    }\n' +
                    '    #MacroCatalogBtn .macro-text-m {\n' +
                    '        font-family: Roboto, sans-serif;\n' +
                    '        font-weight: normal;\n' +
                    '        font-size: ' + (m_size * 0.1) + 'px;\n' +
                    '        line-height: ' + (m_size * 0.11875) + 'px;\n' +
                    '        text-align: center;\n' +
                    '        color: white;\n' +
                    '        transition: .5s ease-in-out;\n' +
                    '        margin-top: ' + (m_size * 0.0375) + 'px;\n' +
                    '        display: block;\n' +
                    '    }\n' +
                    '    }\n' +
                    '</style>';

                this.$('body').appendChild(btn_div);
            }
        },
        addPreloader: function () {
          var preload_wrap = this.crel('div');
          preload_wrap.setAttribute('style', 'position: fixed;top: 0;left: 0;bottom: 0;right: 0;background: white;display: flex;justify-content: center;align-items: center; z-index:2147483647;');
          preload_wrap.id = 'macro_preload';
          d.body.appendChild(preload_wrap);
          var preload_spin = this.crel('img');
          let src = this.server_url + '/assets/vue-macro-catalog/src/assets/images/preload/loader.svg';
          if (this.domain_config.hasOwnProperty('catalog_animation_image') && this.domain_config.catalog_animation_image) {
              src = this.domain_config.catalog_animation_image;
              w.catalog_animation_image = this.domain_config.catalog_animation_image;
          }
          let preload_spin_style = 'max-width: calc(100% - 50px); max-height: 100%; height: auto;';
          if (this.domain_config.hasOwnProperty('catalog_animation_image_max_width') && Number(this.domain_config.catalog_animation_image_max_width)) {
              preload_spin_style += 'width: ' + this.domain_config.catalog_animation_image_max_width + 'px';
              w.catalog_animation_image_max_width = this.domain_config.catalog_animation_image_max_width;
          } else {
              preload_spin_style += 'width: auto;';
          }
          preload_spin.setAttribute('style', preload_spin_style);
          preload_spin.src = src;
          preload_wrap.appendChild(preload_spin);
        },
        // Проверяем наличие настроек прелоадера
        checkPreloadSettings: function () {
            if (this.domain_config.hasOwnProperty('catalog_animation_image') && this.domain_config.catalog_animation_image && !w.catalog_animation_image) {
                w.catalog_animation_image = this.domain_config.catalog_animation_image;
            }
            if (this.domain_config.hasOwnProperty('catalog_animation_image_max_width') && Number(this.domain_config.catalog_animation_image_max_width) && !w.catalog_animation_image_max_width) {
                w.catalog_animation_image_max_width = this.domain_config.catalog_animation_image_max_width;
            }
        }
    };

    mcrm.create();

    w.macrocrm.open_request = function (params) {
        mcrm.show(params);
    };
    w.macrocrm.close_request = function () {
        mcrm.hide();
    };
    w.macrocrm.send_request = function (params, onSuccess, onError) {
        onError = onError || function () {
        };
        onSuccess = onSuccess || function () {
        };

        if (params.name && (params.phone || params.email)) {
            params.submit = true;
            mcrm.get_api_url(params, function (result) {
                if (result.success) {

                    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
                    var xhr = new XHR();
                    xhr.open('GET', result.url, true);
                    xhr.onload = function () {
                        if (xhr.status >= 200 && xhr.status < 400) {
                            var response = JSON.parse(xhr.responseText);
                            if (!response.error) {
                                return onSuccess(response);
                            } else {
                                return onError(response);
                            }

                        }
                    };
                    xhr.send();

                } else {
                    return onError(result);
                }
            });
        } else {
            var result = {error: true, message: 'Заполните обязательные поля!'};
            return onError(result);
        }
    };

    // Триггер достижения цели
    w.macrocrm.catalogTriggerTarget = function (name, params, userProps) {
        mcrm.catalogTriggerTarget(name, params, userProps);
    }

    // Триггер достижения цели
    w.macrocrm.getCompanyName = function () {
        return mcrm.company_name;
    }

    // Внешний метод инициализации каталога
    w.macrocrm.initCatalog = function () {
        mcrm.initCatalog();
    }

    // Внешний метод отрисовки кнопки каталога
    w.macrocrm.initCatalogButton = function (params) {
        mcrm.initCatalogButton(params, true);
    }

    w.macrocrm.isDeveloper = mcrm.is_developer

    w.macrocrm.domainConfig = mcrm.domain_config

    // Внешний метод инициализации каталога с последующим открыванием с параметрами
    w.macrocrm.initCatalogAndShow = function (params) {
      params.fromApi = true;
      if (w.macrocrm.CatalogParams && w.macrocrm.CatalogParams.type && w.macrocrm.CatalogParams.type !== params.type) {
        location.hash = ''
        w.macrocrm.CatalogParams = params;
        mcrm.addPreloader();
        mcrm.initCatalog(params, true);
      } else {
        if (typeof w.macroCatalogShow !== 'undefined') {
          mcrm.checkPreloadSettings();
          w.macrocrm.CatalogParams = params;
          // Если уже подгружено приложение
          w.macroCatalogShow(params);
        } else {
          w.macrocrm.CatalogParams = params;
          // Если нет, то подгружаем
          mcrm.addPreloader();
          mcrm.initCatalog(params);
        }
      }
    };

  w.macrocrm.initCabinet = function () {
      mcrm.initCabinet();
  }

})(window, document, undefined);