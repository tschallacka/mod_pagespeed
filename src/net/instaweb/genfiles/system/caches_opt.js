(function(){var h,l=l||{},m=this;function aa(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function ba(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ca(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function r(a){return"function"==n(a)}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function s(a,b,c){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return s.apply(null,arguments)}var ha=Date.now||function(){return+new Date};
function t(a,b){function c(){}c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ta=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(w,Error);w.prototype.name="CustomError";function x(a,b,c,d,e){this.reset(a,b,c,d,e)}x.prototype.S=null;x.prototype.R=null;var ia=0;x.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ia++;d||ha();this.q=a;this.ka=b;delete this.S;delete this.R};x.prototype.ba=function(a){this.q=a};function ja(){}ja.prototype.Q=null;function ka(a){var b;(b=a.Q)||(b={},la(a)&&(b[0]=!0,b[1]=!0),b=a.Q=b);return b};function ma(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function na(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<oa.length;f++)c=oa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function y(){0!=qa&&(this[da]||(this[da]=++ea));this.L=this.L;this.la=this.la}var qa=0;y.prototype.L=!1;function ra(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a){if(!ua.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(va,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ya,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(za,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Aa,"&#0;"));return a}var va=/&/g,wa=/</g,xa=/>/g,ya=/"/g,za=/'/g,Aa=/\x00/g,ua=/[\x00&<>"']/;function Ba(a,b){return a<b?-1:a>b?1:0};var z;a:{var Ca=m.navigator;if(Ca){var Da=Ca.userAgent;if(Da){z=Da;break a}}z=""};function Ea(a,b){b.unshift(a);w.call(this,ra.apply(null,b));b.shift()}t(Ea,w);Ea.prototype.name="AssertionError";function Fa(a,b){throw new Ea("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ga;function Ha(){}t(Ha,ja);function Ia(a){return(a=la(a))?new ActiveXObject(a):new XMLHttpRequest}function la(a){if(!a.U&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.U=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.U}Ga=new Ha;function A(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1;this.aa=!0}A.prototype.stopPropagation=function(){this.i=!0};A.prototype.preventDefault=function(){this.defaultPrevented=!0;this.aa=!1};var B="closure_listenable_"+(1E6*Math.random()|0),Ja=0;function Ka(a,b,c,d,e){this.h=a;this.D=null;this.src=b;this.type=c;this.u=!!d;this.w=e;this.key=++Ja;this.m=this.t=!1}function La(a){a.m=!0;a.h=null;a.D=null;a.src=null;a.w=null};var C=Array.prototype,Ma=C.indexOf?function(a,b,c){return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Na=C.forEach?function(a,b,c){C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Oa(a){var b;a:{b=Pa;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]};function Qa(a){if("function"==typeof a.v)return a.v();if(q(a))return a.split("");if(p(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ma(a)}function Ra(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(p(a)||q(a))Na(a,b,void 0);else{var c;if("function"==typeof a.o)c=a.o();else if("function"!=typeof a.v)if(p(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=na(a);else c=void 0;for(var d=Qa(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function D(a){this.src=a;this.c={};this.G=0}D.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.c[f];a||(a=this.c[f]=[],this.G++);var g=Sa(a,b,d,e);-1<g?(b=a[g],c||(b.t=!1)):(b=new Ka(b,this.src,f,!!d,e),b.t=c,a.push(b));return b};D.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.c))return!1;var e=this.c[a];b=Sa(e,b,c,d);return-1<b?(La(e[b]),C.splice.call(e,b,1),0==e.length&&(delete this.c[a],this.G--),!0):!1};
function Ta(a,b){var c=b.type;if(c in a.c){var d=a.c[c],e=Ma(d,b),f;(f=0<=e)&&C.splice.call(d,e,1);f&&(La(b),0==a.c[c].length&&(delete a.c[c],a.G--))}}D.prototype.N=function(a,b,c,d){a=this.c[a.toString()];var e=-1;a&&(e=Sa(a,b,c,d));return-1<e?a[e]:null};function Sa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.m&&f.h==b&&f.u==!!c&&f.w==d)return e}return-1};var Ua=-1!=z.indexOf("Opera")||-1!=z.indexOf("OPR"),E=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE"),G=-1!=z.indexOf("Gecko")&&-1==z.toLowerCase().indexOf("webkit")&&!(-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE")),H=-1!=z.toLowerCase().indexOf("webkit");function Va(){var a=m.document;return a?a.documentMode:void 0}
var Wa=function(){var a="",b;if(Ua&&m.opera)return a=m.opera.version,r(a)?a():a;G?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:H&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(z))?a[1]:"");return E&&(b=Va(),b>parseFloat(a))?String(b):a}(),Xa={};
function I(a){var b;if(!(b=Xa[a])){b=0;for(var c=sa(String(Wa)).split("."),d=sa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",F=RegExp("(\\d*)(\\D*)","g"),J=RegExp("(\\d*)(\\D*)","g");do{var u=F.exec(g)||["","",""],v=J.exec(k)||["","",""];if(0==u[0].length&&0==v[0].length)break;b=Ba(0==u[1].length?0:parseInt(u[1],10),0==v[1].length?0:parseInt(v[1],10))||Ba(0==u[2].length,0==v[2].length)||Ba(u[2],v[2])}while(0==b)}b=Xa[a]=0<=b}return b}
var Ya=m.document,Za=Ya&&E?Va()||("CSS1Compat"==Ya.compatMode?parseInt(Wa,10):5):void 0;var $a=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function ab(a){if(bb){bb=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=ab(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw bb=!0,Error();}}return a.match($a)}var bb=H;var cb;(cb=!E)||(cb=E&&9<=Za);var db=cb,eb=E&&!I("9");!H||I("528");G&&I("1.9b")||E&&I("8")||Ua&&I("9.5")||H&&I("528");G&&!I("8")||E&&I("9");function fb(a){fb[" "](a);return a}fb[" "]=ca;function K(a,b){A.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.n=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(G){var e;a:{try{fb(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=
a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=H||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=H||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.n=a;a.defaultPrevented&&this.preventDefault()}}t(K,A);K.prototype.stopPropagation=function(){K.ca.stopPropagation.call(this);this.n.stopPropagation?this.n.stopPropagation():this.n.cancelBubble=!0};K.prototype.preventDefault=function(){K.ca.preventDefault.call(this);var a=this.n;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,eb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var gb="closure_lm_"+(1E6*Math.random()|0),hb={},ib=0;function L(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)L(a,b[f],c,d,e);else if(c=jb(c),a&&a[B])a.l.add(String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=M(a);g||(a[gb]=g=new D(a));c=g.add(b,c,!1,d,e);c.D||(d=kb(),c.D=d,d.src=a,d.h=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(lb(b.toString()),d),ib++)}}
function kb(){var a=mb,b=db?function(c){return a.call(b.src,b.h,c)}:function(c){c=a.call(b.src,b.h,c);if(!c)return c};return b}function nb(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);else c=jb(c),a&&a[B]?a.l.remove(String(b),c,d,e):a&&(a=M(a))&&(b=a.N(b,c,!!d,e))&&ob(b)}
function ob(a){if("number"!=typeof a&&a&&!a.m){var b=a.src;if(b&&b[B])Ta(b.l,a);else{var c=a.type,d=a.D;b.removeEventListener?b.removeEventListener(c,d,a.u):b.detachEvent&&b.detachEvent(lb(c),d);ib--;(c=M(b))?(Ta(c,a),0==c.G&&(c.src=null,b[gb]=null)):La(a)}}}function lb(a){return a in hb?hb[a]:hb[a]="on"+a}function pb(a,b,c,d){var e=1;if(a=M(a))if(b=a.c[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.u==c&&!f.m&&(e&=!1!==qb(f,d))}return Boolean(e)}
function qb(a,b){var c=a.h,d=a.w||a.src;a.t&&ob(a);return c.call(d,b)}
function mb(a,b){if(a.m)return!0;if(!db){var c=b||ba("window.event"),d=new K(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,k=c.length-1;!d.i&&0<=k;k--)d.currentTarget=c[k],e&=pb(c[k],f,!0,d);for(k=0;!d.i&&k<c.length;k++)d.currentTarget=c[k],e&=pb(c[k],f,!1,d)}return e}return qb(a,new K(b,this))}
function M(a){a=a[gb];return a instanceof D?a:null}var rb="__closure_events_fn_"+(1E9*Math.random()>>>0);function jb(a){if(r(a))return a;a[rb]||(a[rb]=function(b){return a.handleEvent(b)});return a[rb]};function N(){y.call(this);this.l=new D(this);this.ia=this;this.Y=null}t(N,y);N.prototype[B]=!0;N.prototype.addEventListener=function(a,b,c,d){L(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){nb(this,a,b,c,d)};
N.prototype.dispatchEvent=function(a){var b,c=this.Y;if(c)for(b=[];c;c=c.Y)b.push(c);var c=this.ia,d=a.type||a;if(q(a))a=new A(a,c);else if(a instanceof A)a.target=a.target||c;else{var e=a;a=new A(d,c);pa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.i&&0<=g;g--)f=a.currentTarget=b[g],e=O(f,d,!0,a)&&e;a.i||(f=a.currentTarget=c,e=O(f,d,!0,a)&&e,a.i||(e=O(f,d,!1,a)&&e));if(b)for(g=0;!a.i&&g<b.length;g++)f=a.currentTarget=b[g],e=O(f,d,!1,a)&&e;return e};
function O(a,b,c,d){b=a.l.c[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.m&&g.u==c){var k=g.h,F=g.w||g.src;g.t&&Ta(a.l,g);e=!1!==k.call(F,d)&&e}}return e&&0!=d.aa}N.prototype.N=function(a,b,c,d){return this.l.N(String(a),b,c,d)};function P(a,b){this.e={};this.b=[];this.k=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof P?(c=a.o(),d=a.v()):(c=na(a),d=ma(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=P.prototype;h.v=function(){sb(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.e[this.b[b]]);return a};h.o=function(){sb(this);return this.b.concat()};
h.clear=function(){this.e={};this.k=this.b.length=0};h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.e,a)?(delete this.e[a],this.k--,this.b.length>2*this.k&&sb(this),!0):!1};function sb(a){if(a.k!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.e,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.k!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.e,a)?this.e[a]:b};h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.e,a)||(this.k++,this.b.push(a));this.e[a]=b};h.forEach=function(a,b){for(var c=this.o(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new P(this)};function tb(a){var b;b||(b=ub(a||arguments.callee.caller,[]));return b}
function ub(a,b){var c=[];if(0<=Ma(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(vb(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=vb(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(ub(a.caller,
b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function vb(a){if(Q[a])return Q[a];a=String(a);if(!Q[a]){var b=/function ([^\(]+)/.exec(a);Q[a]=b?b[1]:"[Anonymous]"}return Q[a]}var Q={};function R(a){this.W=a;this.T=this.K=this.q=this.C=null}function S(a,b){this.name=a;this.value=b}S.prototype.toString=function(){return this.name};var wb=new S("SEVERE",1E3),xb=new S("INFO",800),yb=new S("CONFIG",700),zb=new S("FINE",500);h=R.prototype;h.getName=function(){return this.W};h.getParent=function(){return this.C};h.ba=function(a){this.q=a};function Ab(a){if(a.q)return a.q;if(a.C)return Ab(a.C);Fa("Root logger has no level set.");return null}
h.log=function(a,b,c){if(a.value>=Ab(this).value)for(r(b)&&(b=b()),a=this.ja(a,b,c,R.prototype.log),b="log:"+a.ka,m.console&&(m.console.timeStamp?m.console.timeStamp(b):m.console.markTimeline&&m.console.markTimeline(b)),m.msWriteProfilerMark&&m.msWriteProfilerMark(b),b=this;b;){c=b;var d=a;if(c.T)for(var e=0,f=void 0;f=c.T[e];e++)f(d);b=b.getParent()}};
h.ja=function(a,b,c,d){var e=new x(a,String(b),this.W);if(c){var f;f=d||arguments.callee.caller;e.S=c;var g;try{var k;var F=ba("window.location.href");if(q(c))k={message:c,name:"Unknown error",lineNumber:"Not available",fileName:F,stack:"Not available"};else{var J,u,v=!1;try{J=c.lineNumber||c.ua||"Not available"}catch($b){J="Not available",v=!0}try{u=c.fileName||c.filename||c.sourceURL||m.$googDebugFname||F}catch(ac){u="Not available",v=!0}k=!v&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?
c:{message:c.message||"Not available",name:c.name||"UnknownError",lineNumber:J,fileName:u,stack:c.stack||"Not available"}}g="Message: "+ta(k.message)+'\nUrl: <a href="view-source:'+k.fileName+'" target="_new">'+k.fileName+"</a>\nLine: "+k.lineNumber+"\n\nBrowser stack:\n"+ta(k.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ta(tb(f)+"-> ")}catch(Tb){g="Exception trying to expose exception! You win, we lose. "+Tb}e.R=g}return e};h.info=function(a,b){this.log(xb,a,b)};var Bb={},T=null;
function Cb(a){T||(T=new R(""),Bb[""]=T,T.ba(yb));var b;if(!(b=Bb[a])){b=new R(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Cb(a.substr(0,c));c.K||(c.K={});c.K[d]=b;b.C=c;Bb[a]=b}return b};function U(a,b){a&&a.log(zb,b,void 0)};function Db(a,b,c){if(r(a))c&&(a=s(a,c));else if(a&&"function"==typeof a.handleEvent)a=s(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function V(a){N.call(this);this.headers=new P;this.J=a||null;this.j=!1;this.I=this.a=null;this.g=this.V=this.B="";this.p=this.O=this.A=this.M=!1;this.s=0;this.F=null;this.$=Eb;this.H=this.sa=!1}t(V,N);var Eb="",Fb=V.prototype,Gb=Cb("goog.net.XhrIo");Fb.d=Gb;var Hb=/^https?$/i,Ib=["POST","PUT"];h=V.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+a);b=b?b.toUpperCase():"GET";this.B=a;this.g="";this.V=b;this.M=!1;this.j=!0;this.a=this.J?Ia(this.J):Ia(Ga);this.I=this.J?ka(this.J):ka(Ga);this.a.onreadystatechange=s(this.X,this);try{U(this.d,W(this,"Opening Xhr")),this.O=!0,this.a.open(b,String(a),!0),this.O=!1}catch(e){U(this.d,W(this,"Error opening Xhr: "+e.message));Jb(this,e);return}a=c||"";var f=this.headers.clone();
d&&Ra(d,function(a,b){f.set(b,a)});d=Oa(f.o());c=m.FormData&&a instanceof m.FormData;!(0<=Ma(Ib,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.$&&(this.a.responseType=this.$);"withCredentials"in this.a&&(this.a.withCredentials=this.sa);try{Kb(this),0<this.s&&(this.H=Lb(this.a),U(this.d,W(this,"Will abort after "+this.s+"ms if incomplete, xhr2 "+this.H)),this.H?(this.a.timeout=this.s,this.a.ontimeout=
s(this.da,this)):this.F=Db(this.da,this.s,this)),U(this.d,W(this,"Sending request")),this.A=!0,this.a.send(a),this.A=!1}catch(g){U(this.d,W(this,"Send error: "+g.message)),Jb(this,g)}};function Lb(a){return E&&I(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Pa(a){return"content-type"==a.toLowerCase()}h.da=function(){"undefined"!=typeof l&&this.a&&(this.g="Timed out after "+this.s+"ms, aborting",U(this.d,W(this,this.g)),this.dispatchEvent("timeout"),this.abort(8))};
function Jb(a,b){a.j=!1;a.a&&(a.p=!0,a.a.abort(),a.p=!1);a.g=b;Mb(a);Nb(a)}function Mb(a){a.M||(a.M=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}h.abort=function(){this.a&&this.j&&(U(this.d,W(this,"Aborting")),this.j=!1,this.p=!0,this.a.abort(),this.p=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Nb(this))};h.X=function(){this.L||(this.O||this.A||this.p?Ob(this):this.ma())};h.ma=function(){Ob(this)};
function Ob(a){if(a.j&&"undefined"!=typeof l)if(a.I[1]&&4==X(a)&&2==Y(a))U(a.d,W(a,"Local request error detected and ignored"));else if(a.A&&4==X(a))Db(a.X,0,a);else if(a.dispatchEvent("readystatechange"),4==X(a)){U(a.d,W(a,"Request complete"));a.j=!1;try{if(Pb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<X(a)?a.a.statusText:""}catch(c){U(a.d,"Can not get status: "+c.message),b=""}a.g=b+" ["+Y(a)+"]";Mb(a)}}finally{Nb(a)}}}
function Nb(a){if(a.a){Kb(a);var b=a.a,c=a.I[0]?ca:null;a.a=null;a.I=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){(a=a.d)&&a.log(wb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Kb(a){a.a&&a.H&&(a.a.ontimeout=null);"number"==typeof a.F&&(m.clearTimeout(a.F),a.F=null)}
function Pb(a){var b=Y(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ab(String(a.B))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Hb.test(a?a.toLowerCase():"");c=b}return c}function X(a){return a.a?a.a.readyState:0}function Y(a){try{return 2<X(a)?a.a.status:-1}catch(b){return-1}}h.getResponseHeader=function(a){return this.a&&4==X(this)?this.a.getResponseHeader(a):void 0};
h.getAllResponseHeaders=function(){return this.a&&4==X(this)?this.a.getAllResponseHeaders():""};function W(a,b){return b+" ["+a.V+" "+a.B+" "+Y(a)+"]"};function Qb(a){this.a=a||new V;this.f="";this.r=!1;a=document.createElement("table");a.id="nav-bar";a.className="pagespeed-sub-tabs";a.innerHTML='<tr><td><a id="'+Rb+'" href="javascript:void(0);">Show Metadata Cache</a> - </td><td><a id="'+Sb+'" href="javascript:void(0);">Show Cache Structure</a> - </td><td><a id="'+Ub+'" href="javascript:void(0);">Physical Caches</a> - </td><td><a id="'+Vb+'" href="javascript:void(0);">Purge Cache</a></td></tr>';document.body.insertBefore(a,document.getElementById(Z));
a=document.createElement("pre");a.id=Wb;a.className="pagespeed-caches-result";document.getElementById(Z).appendChild(a);a=document.createElement("div");a.id=Xb;a.className="pagespeed-caches-result";var b=document.getElementById(Yb);b.insertBefore(a,b.firstChild)}
aa("pagespeed.Caches.toggleDetail",function(a){var b=document.getElementById(a+"_summary"),c=document.getElementById(a+"_detail");document.getElementById(a+"_toggle").checked?(b.style.display="none",c.style.display="block"):(b.style.display="block",c.style.display="none")});
var Rb="show_metadata_mode",Sb="cache_struct_mode",Ub="physical_cache_mode",Vb="purge_cache_mode",Zb={fa:Rb,ea:Sb,ga:Ub,ha:Vb},Z="show_metadata",Yb="purge_cache",$={fa:Z,ea:"cache_struct",ga:"physical_cache",ha:Yb},Wb="metadata_result",Xb="purge_result";h=Qb.prototype;h.Z=function(){var a=location.hash.substr(1);if(""==a)this.show(Z);else{var b;a:{for(b in $)if($[b]==a){b=!0;break a}b=!1}b&&this.show(a)}};
h.show=function(a){for(var b in $){var c=$[b];document.getElementById(c).className=c==a?"":"pagespeed-hidden-offscreen"}c=document.getElementById(a+"_mode");for(b in Zb){var d=document.getElementById(Zb[b]);d.className=d==c?"pagespeed-underline-link":""}location.href=location.href.split("#")[0]+"#"+a};h.pa=function(){if(!this.a.a){var a=encodeURIComponent(document.getElementById("purge_text").value.trim());this.f="*"==a?"purge_all":"purge_text";this.a.send("?purge="+a)}};
h.oa=function(){this.a.a||(this.f="purge_all",this.a.send("?purge=*"))};h.P=function(){this.a.a||(this.f="purge_table",this.a.send("?new_set="))};h.na=function(a){this.a.a||(a.preventDefault(),a="?url="+encodeURIComponent(document.getElementById("metadata_text").value.trim())+"&user_agent="+encodeURIComponent(document.getElementById("user_agent").value.trim())+"&json=1",this.f=Wb,this.a.send(a))};h.ra=function(){this.r=!this.r;this.P()};
h.qa=function(){if(Pb(this.a)){var a;var b=this.a;try{a=b.a?b.a.responseText:""}catch(c){U(b.d,"Can not get responseText: "+c.message),a=""}if(this.f==Wb)a=JSON.parse(a.substring(4)).value,document.getElementById(this.f).textContent=a;else if("purge_table"==this.f){if(a=a.split("\n"),b=a.shift(),document.getElementById("purge_global").textContent="Everything before this time stamp is invalid: "+b.split("@")[1],b=document.getElementById("purge_table"),b.innerHTML="",0<a.length){b.appendChild(document.createElement("hr"));
var d=document.createElement("table");this.r&&a.reverse();for(var e=0;e<a.length;++e){var f=a[e].lastIndexOf("@"),g=a[e].substring(0,f),k=a[e].substring(f+1),f=d.insertRow(-1);f.insertCell(0).textContent=k;k=document.createElement("code");k.className="pagespeed-caches-purge-url";k.textContent=g;f.insertCell(1).appendChild(k)}e=d.createTHead().insertRow(0);g=e.insertCell(0);g.className="pagespeed-caches-date-column";1==a.length?g.textContent="Invalidation Time":(a=document.createElement("input"),a.setAttribute("type",
"checkbox"),a.id="sort",a.checked=this.r?!0:!1,a.title="Change sort order.",g.textContent=this.r?"Invalidation Time (Descending)":"Invalidation Time (Ascending)",g.appendChild(a),L(a,"change",s(this.ra,this)));g=e.insertCell(1);g.textContent="URL";g.className="pagespeed-stats-url-column";b.appendChild(d)}}else window.setTimeout(s(this.P,this),0),b=document.getElementById(Xb),"Purge successful"==a&&"purge_text"==this.f?b.textContent="Added to Purge Set":-1!=a.indexOf("Purging not enabled")?b.innerHTML=
a:b.textContent=a}else a=this.a,console.log(q(a.g)?a.g:String(a.g))};
aa("pagespeed.Caches.Start",function(){L(window,"load",function(){var a=new Qb,b=document.createElement("table");b.innerHTML='URL: <input id="purge_text" type="text" name="purge" size="110"/><br><input id="purge_submit" type="button" value="Purge Individual URL"/><input id="purge_all" type="button" value="Purge Entire Cache"/>';var c=document.getElementById(Yb);c.insertBefore(b,c.firstChild);a.Z();for(var d in $)L(document.getElementById(Zb[d]),"click",s(a.show,a,$[d]));L(window,"hashchange",s(a.Z,
a));L(document.getElementById("purge_submit"),"click",s(a.pa,a));L(document.getElementById("purge_all"),"click",s(a.oa,a));L(document.getElementById("metadata_submit"),"click",s(a.na,a));L(a.a,"complete",s(a.qa,a));L(document.getElementById("metadata_clear"),"click",s(location.reload,location));a.P()})});})();