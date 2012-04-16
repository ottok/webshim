(function(c){if(!Modernizr.genericDOM){var e=document,j,k,l=/<([\w:]+)/,m={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||m[(l.exec(c)||["",""])[1].toLowerCase()])return c;if(!k){j=e.body;if(!j)return c;k=e.createElement("div");k.style.display="none"}var r=k.cloneNode(!1);j.appendChild(r);r.innerHTML=c;j.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,e,j,k,l){var m=e.modules,q=/\s*,\s*/,r={},s={},p={},h={},u={},x=c.fn.val,v=function(a,b,d,f,n){return n?x.call(c(a)):x.call(c(a),d)};c.fn.val=function(a){var b=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!b||1!==b.nodeType?x.call(this):c.prop(b,"value",a,"val",!0);if(c.isArray(a))return x.apply(this,arguments);var d=c.isFunction(a);return this.each(function(f){b=this;1===b.nodeType&&(d?(f=a.call(b,f,c.prop(b,"value",l,"val",
!0)),null==f&&(f=""),c.prop(b,"value",f,"val")):c.prop(b,"value",a,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),t=function(a,b,d){a=a.jquery?a[0]:a;if(!a)return d||{};var f=c.data(a,w);d!==l&&(f||(f=c.data(a,w,{})),b&&(f[b]=d));return b?f&&f[b]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){c.fn[a.name]=function(){return this.map(function(){var b=t(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){r[a]=c[a];c[a]=function(b,d,f,n,g){var i="val"==n,h=!i?r[a]:v;if(!b||!s[d]||1!==b.nodeType||!i&&n&&"attr"==a&&c.attrFn[d])return h(b,d,f,n,g);var z=(b.nodeName||"").toLowerCase(),o=p[z],e="attr"==a&&(!1===f||null===f)?"removeAttr":a,m,q,k;o||(o=p["*"]);o&&(o=o[d]);o&&(m=o[e]);if(m){if("value"==d)q=m.isVal,m.isVal=i;if("removeAttr"===e)return m.value.call(b);if(f===l)return m.get?m.get.call(b):m.value;m.set&&
("attr"==a&&!0===f&&(f=d),k=m.set.call(b,f));if("value"==d)m.isVal=q}else k=h(b,d,f,n,g);if((f!==l||"removeAttr"===e)&&u[z]&&u[z][d]){var j;j="removeAttr"==e?!1:"prop"==e?!!f:!0;u[z][d].forEach(function(d){if(!d.only||(d.only="prop"==a)||"attr"==d.only&&"prop"!=a)d.call(b,f,j,i?"val":e,a)})}return k};h[a]=function(b,d,f){p[b]||(p[b]={});p[b][d]||(p[b][d]={});var n=p[b][d][a],g=function(b,c,n){return c&&c[b]?c[b]:n&&n[b]?n[b]:"prop"==a&&"value"==d?function(b){return f.isVal?v(this,d,b,!1,0===arguments.length):
r[a](this,d,b)}:"prop"==a&&"value"==b&&f.value.apply?function(b){var c=r[a](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(b){return r[a](this,d,b)}};p[b][d][a]=f;if(f.value===l){if(!f.set)f.set=f.writeable?g("set",f,n):e.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:c.noop;if(!f.get)f.get=g("get",f,n)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=g(a,n))})}});var y=!c.browser.msie||8<parseInt(c.browser.version,10),g=function(){var a=e.getPrototypeOf(k.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,c,n){var g=k.createElement(d),i=e.getPrototypeOf(g);if(y&&i&&a!==i&&(!g[c]||!b.call(g,c))){var h=g[c];n._supvalue=function(){return h&&h.apply?h.apply(this,arguments):h};i[c]=n.value}else n._supvalue=function(){var a=t(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},o.extendValue(d,c,n.value);n.value._supvalue=n._supvalue}}(),o=function(){var a={};e.addReady(function(b,d){var f={},g=function(a){f[a]||(f[a]=c(b.getElementsByTagName(a)),
d[0]&&c.nodeName(d[0],a)&&(f[a]=f[a].add(d)))};c.each(a,function(a,b){g(a);!b||!b.forEach?e.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){f[a].each(b)})});f=null});var b,d=c([]),f=function(d,f){a[d]?a[d].push(f):a[d]=[f];c.isDOMReady&&(b||c(k.getElementsByTagName(d))).each(f)};return{createTmpCache:function(a){c.isDOMReady&&(b=b||c(k.getElementsByTagName(a)));return b||d},flushTmpCache:function(){b=null},content:function(a,b){f(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){f(a,b)},extendValue:function(a,b,d){f(a,function(){c(this).each(function(){t(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),i=function(a,b){if(a.defaultValue===l)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};c.extend(e,{getID:function(){var a=(new Date).getTime();return function(b){var b=c(b),d=b.attr("id");d||(a++,d="ID-"+a,b.attr("id",d));return d}}(),extendUNDEFProp:function(a,
b){c.each(b,function(b,c){b in a||(a[b]=c)})},createPropDefault:i,data:t,moveToFirstEvent:function(){var a=c._data?"_data":"data";return function(b,d,f){if((b=(c[a](b,"events")||{})[d])&&1<b.length)d=b.pop(),f||(f="bind"),"bind"==f&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(a,b,d){d=d||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);if(!d.shadowFocusElement)d.shadowFocusElement=b;var f=c.data(a,w)||c.data(a,w,{}),g=c.data(b,w)||c.data(b,w,{});f.hasShadow=b;g.nativeElement=
a;g.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){t(this,"shadowData",g.shadowData)});if(d.data)f.shadowData.data=d.data,g.shadowData.data=d.data;d=null},propTypes:{standard:function(a){i(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){i(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,b){"string"==typeof b&&(b=b.split(q));b.forEach(function(b){e.defineNodeNamesProperty(a,b,{prop:{set:function(a){c.attr(this,b,a)},get:function(){return c.attr(this,b)||""}}})})},defineNodeNameProperty:function(a,b,d){s[b]=!0;if(d.reflect)e.propTypes[d.propType||"standard"](d);["prop","attr","removeAttr"].forEach(function(f){var n=d[f];n&&(n="prop"===f?c.extend({writeable:!0},n):c.extend({},
n,{writeable:!0}),h[f](a,b,n),"*"!=a&&e.cfg.extendNative&&"prop"==f&&n.value&&c.isFunction(n.value)&&g(a,b,n),d[f]=n)});d.initAttr&&o.content(a,b);return d},defineNodeNameProperties:function(a,b,d,c){for(var g in b)!c&&b[g].initAttr&&o.createTmpCache(a),d&&(b[g][d]?e.log("override: "+a+"["+g+"] for "+d):(b[g][d]={},["value","set","get"].forEach(function(a){a in b[g]&&(b[g][d][a]=b[g][a],delete b[g][a])}))),b[g]=e.defineNodeNameProperty(a,g,b[g]);c||o.flushTmpCache();return b},createElement:function(a,
b,d){var f;c.isFunction(b)&&(b={after:b});o.createTmpCache(a);b.before&&o.createElement(a,b.before);d&&(f=e.defineNodeNameProperties(a,d,!1,!0));b.after&&o.createElement(a,b.after);o.flushTmpCache();return f},onNodeNamesPropertyModify:function(a,b,d,f){"string"==typeof a&&(a=a.split(q));c.isFunction(d)&&(d={set:d});a.forEach(function(a){u[a]||(u[a]={});"string"==typeof b&&(b=b.split(q));d.initAttr&&o.createTmpCache(a);b.forEach(function(b){u[a][b]||(u[a][b]=[],s[b]=!0);if(d.set){if(f)d.set.only=f;
u[a][b].push(d.set)}d.initAttr&&o.content(a,b)});o.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,b,d){d||(d={});if(c.isFunction(d))d.set=d;e.defineNodeNamesProperty(a,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?l:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===
l)return d=(a.attributes[b]||{}).value,null==d?l:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var a=[],b={},d,f,g=/:\/\/|^\.*\//,i=function(a,b,d){return b&&d&&-1!==c.inArray(b,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,g.test(d)||(d=e.cfg.basePath+d),e.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,o(a,!0)):c(function(){a.langObj[b]&&o(a,!0);a.loading=!1})}),!0):!1},h=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
o=function(a,b){if(a.activeLang!=d&&a.activeLang!==f){var c=m[a.module].options;if(a.langObj[d]||f&&a.langObj[f])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[f],d),h(a.module);else if(!b&&!i(a,d,c)&&!i(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),h(a.module)}};return function(g){if("string"==typeof g&&g!==d)d=g,f=d.split("-")[0],d==f&&(f=!1),c.each(a,function(a,b){o(b)});else if("object"==typeof g)if(g.register)b[g.register]||(b[g.register]=[]),b[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";a.push(g);o(g)}return d}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){e[a]=function(a,c,g,i){"string"==typeof a&&(a=a.split(q));var h={};a.forEach(function(a){h[a]=e[b](a,c,g,i)});return h}});e.isReady("webshimLocalization",!0)});
(function(c,e){var j=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<j)&&(!c.browser.msie||12>j&&7<j)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},l=function(c,e){c.getAttribute("role")||c.setAttribute("role",e)};c.webshims.addReady(function(m,q){c.each(k,function(h,e){for(var j=c(h,m).add(q.filter(h)),k=0,p=j.length;k<p;k++)l(j[k],e)});if(m===e){var j=e.getElementsByTagName("header")[0],s=e.getElementsByTagName("footer"),p=s.length;
j&&!c(j).closest("section, article")[0]&&l(j,"banner");p&&(j=s[p-1],c(j).closest("section, article")[0]||l(j,"contentinfo"))}})}})(jQuery,document);
(function(c,e,j){var k=e.audio&&e.video,l=!1;if(k)c=document.createElement("video"),e.videoBuffered="buffered"in c,l="loop"in c,j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),e.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:e.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,e,j,s,p){var h=e.mediaelement,u=e.cfg.mediaelement,
x=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var f=a.attr("type");if(f)d.type=f,d.container=c.trim(f.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=h.getTypeForSrc(d.src,b))d.type=f,d.container=f,e.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+f),c.nodeName(a[0],"source")&&a.attr("type",
f);if(f=a.attr("media"))d.media=f;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),w=function(){e.ready("mediaelement-swf",function(){if(!h.createSWF)e.modules["mediaelement-swf"].test=c.noop,e.reTest(["mediaelement-swf"],k)})};h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=c.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";
var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(h.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};h.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var c=s.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],d=a[0].nodeName.toLowerCase(),
f=x(a,d);f.src?b.push(f):c("source",a).each(function(){f=x(this,d);f.src&&b.push(f)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));h.srces(this,a);c(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canSwfPlaySrces=function(a,b){var d="";v&&(a=c(a),b=b||h.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&-1!=h.swfMimeTypes.indexOf(b.container))return d=b,!1}));return d};var t={};h.canNativePlaySrces=function(a,b){var d="";if(k){var a=c(a),f=(a[0].nodeName||"").toLowerCase();if(!t[f])return d;b=b||h.srces(a);c.each(b,function(b,c){if(c.type&&t[f].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};h.setError=function(a,b){b||(b="can't play sources");c(a).pause().data("mediaerror",
b);e.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,c,f){e.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(b,c,f):a||(a=!0,w(),y(b,c,f))})}}(),g=function(a,b,c,f,e){c||!1!==c&&b&&"flash"==b.isActive?(c=h.canSwfPlaySrces(a,f))?y(a,c,b):e?h.setError(a,!1):g(a,b,!1,f,!0):(c=h.canNativePlaySrces(a,f))?b&&"flash"==b.isActive&&h.setActive(a,"html5",b):e?(h.setError(a,!1),b&&"flash"==b.isActive&&
h.setActive(a,"html5",b)):g(a,b,!0,f,!0)},o=/^(?:embed|object|datalist)$/i,i=function(a,b){var d=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),f=h.srces(a),i=a.parentNode;clearTimeout(d.loadTimer);c.data(a,"mediaerror",!1);if(f.length&&i&&!(1!=i.nodeType||o.test(i.nodeName||"")))b=b||e.data(a,"mediaelement"),g(a,b,u.preferFlash||p,f)};c(s).bind("ended",function(a){var b=e.data(a.target,"mediaelement");(!l||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,
"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});l||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=e.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");i(this,a);k&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});t[a]=e.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var f="";k&&t[a].prop._supvalue&&(f=t[a].prop._supvalue.call(this,
b),"no"==f&&(f=""));!f&&v&&(b=c.trim((b||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(b)&&(f="maybe"));return f}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){i(a);a=null},9)}});j=function(){e.addReady(function(a,b){c("video, audio",a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<e.browserVersion&&c.prop(this,
"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():i(this);if(k){var a,b,g=this,h=function(){var a=c.prop(g,"buffered");if(a){for(var b="",d=0,f=a.length;d<f;d++)b+=a.end(d);return b}},o=function(){var a=h();a!=b&&(b=a,c(g).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=h());clearTimeout(a);a=setTimeout(o,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};k?(e.isReady("mediaelement-core",!0),j(),v&&e.ready("WINDOWLOAD mediaelement",w)):e.ready("mediaelement-swf",j)})})(jQuery,Modernizr,jQuery.webshims);
(function(c){var e=window.Modernizr,j=c.webshims,k=j.bugs,l=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),m=function(){if(l[0].querySelector)try{k.findRequired=!l[0].querySelector("select:required")}catch(c){k.findRequired=!1}};k.findRequired=!1;k.validationMessage=!1;k.valueAsNumberSet=!1;j.capturingEventPrevented=function(e){if(!e._isPolyfilled){var j=e.isDefaultPrevented,
k=e.preventDefault;e.preventDefault=function(){clearTimeout(c.data(e.target,e.type+"DefaultPrevented"));c.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){c.removeData(e.target,e.type+"DefaultPrevented")},30));return k.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!j.apply(this,arguments)&&!c.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!e.formvalidation||k.bustedValidity)m();else if(e.bugfreeformvalidation=!1,window.opera||c.browser.webkit||window.testGoodWithFix){var q=
c("input",l).eq(0),r,s=function(h){var k=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){l&&(l.remove(),l=q=null)},9);if(!e.bugfreeformvalidation)j.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),j.modules["form-extend"].test=c.noop;j.isReady("form-number-date-api")&&k.push("form-number-date-api");j.reTest(k);if(c.browser.opera||window.testGoodWithFix)j.loader.loadList(["dom-extend"]),j.ready("dom-extend",
function(){var h=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(e){var k=j.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){j.fromSubmit||c(this).bind("invalid.checkvalidity",h);j.fromCheckValidity=!0;var e=k.prop._supvalue.apply(this,arguments);j.fromSubmit||c(this).unbind("invalid.checkvalidity",h);j.fromCheckValidity=!1;return e}}})});e.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
j.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var h=c("select",this);if(h[0]&&h[0].options&&h[0].options.length)e=h[0].options}return e}}})})};l.appendTo("head");if(window.opera||window.testGoodWithFix){m();k.validationMessage=!q.prop("validationMessage");if((e.inputtypes||{}).date){try{q.prop("valueAsNumber",0)}catch(p){}k.valueAsNumberSet="1970-01-01"!=q.prop("value")}q.prop("value","")}l.bind("submit",function(c){e.bugfreeformvalidation=
!1;s(c)});r=setTimeout(function(){l&&l.triggerHandler("submit")},9);j.capturingEvents(["input"]);j.capturingEvents(["invalid"],!0);c("input, select",l).bind("invalid",s).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}else j.capturingEvents(["input"]),j.capturingEvents(["invalid"],!0)})(jQuery);
jQuery.webshims.register("form-core",function(c,e,j,k,l,m){var q={radio:1},r={checkbox:1,radio:1},s=c([]),p=e.bugs,h=function(g){var g=c(g),e,i;e=s;if(q[g[0].type])i=g.prop("form"),e=(e=g[0].name)?i?c(i[e]):c(k.getElementsByName(e)).filter(function(){return!c.prop(this,"form")}):g,e=e.filter('[type="radio"]');return e},u=e.getContentValidationMessage=function(g,h){var i=g.getAttribute("x-moz-errormessage")||g.getAttribute("data-errormessage")||"";if(i&&-1!=i.indexOf("{")){try{i=jQuery.parseJSON(i)}catch(a){return i}"object"==
typeof i&&(h=h||c.prop(g,"validity")||{valid:1},h.valid||c.each(h,function(a,c){if(c&&"valid"!=a&&i[a])return i=i[a],!1}));e.data(g,"contentErrorMessage",i);if("object"==typeof i)i=i.defaultMessage}return i||""},x={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};c.extend(c.expr.filters,{"valid-element":function(g){return!(!c.prop(g,"willValidate")||!(c.prop(g,"validity")||{valid:1}).valid)},"invalid-element":function(g){return!(!c.prop(g,"willValidate")||(c.prop(g,"validity")||
{valid:1}).valid)},"required-element":function(g){return!(!c.prop(g,"willValidate")||!c.prop(g,"required"))},"optional-element":function(g){return!!(c.prop(g,"willValidate")&&!1===c.prop(g,"required"))},"in-range":function(g){if(!x[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||g.rangeOverflow||g.rangeUnderflow)},"out-of-range":function(g){if(!x[c.prop(g,"type")]||!c.prop(g,"willValidate"))return!1;g=c.prop(g,"validity");return!(!g||!g.rangeOverflow&&!g.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(g){c.expr.filters[g]=c.expr.filters[g+"-element"]});var v=c.event.customEvent||{};(p.bustedValidity||p.findRequired)&&function(){var g=c.find,e=c.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};c.find=function(){var b=Array.prototype.slice,c=function(c){var d=arguments,d=b.call(d,1,d.length);d.unshift(c.replace(i,a));return g.apply(this,
d)},f;for(f in g)g.hasOwnProperty(f)&&(c[f]=g[f]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",k.documentElement))c.find.matchesSelector=function(b,c){c=c.replace(i,a);return e.call(this,b,c)}}();var w=c.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(g,e,i){var a=w.apply(this,arguments);if(g&&"form"in g&&t[e]&&i!==l&&c(g).hasClass("form-ui-invalid")&&(c.prop(g,"validity")||{valid:1}).valid)c(g).getShadowElement().removeClass("form-ui-invalid"),
"checked"==e&&i&&h(g).not(g).removeClass("form-ui-invalid").removeAttr("aria-invalid");return a};var y=function(g,e){var i;c.each(g,function(a,b){if(b)return i="customError"==a?c.prop(e,"validationMessage"):a,!1});return i};c(k).bind("focusout change refreshvalidityui",function(g){if(g.target&&"submit"!=g.target.type&&c.prop(g.target,"willValidate")){var e=c.data(g.target,"webshimsswitchvalidityclass");e&&clearTimeout(e);c.data(g.target,"webshimsswitchvalidityclass",setTimeout(function(){var e=c(g.target).getNativeElement()[0],
a=c.prop(e,"validity"),b=c(e).getShadowElement(),d,f,k,j;a.valid?b.hasClass("form-ui-valid")||(d="form-ui-valid",f="form-ui-invalid",j="changedvaliditystate",k="changedvalid",r[e.type]&&e.checked&&h(e).not(e).removeClass(f).addClass(d).removeAttr("aria-invalid"),c.removeData(e,"webshimsinvalidcause")):(a=y(a,e),c.data(e,"webshimsinvalidcause")!=a&&(c.data(e,"webshimsinvalidcause",a),j="changedvaliditystate"),b.hasClass("form-ui-invalid")||(d="form-ui-invalid",f="form-ui-valid",r[e.type]&&!e.checked&&
h(e).not(e).removeClass(f).addClass(d),k="changedinvalid"));d&&(b.addClass(d).removeClass(f),setTimeout(function(){c(e).trigger(k)},0));j&&setTimeout(function(){c(e).trigger(j)},0);c.removeData(g.target,"webshimsswitchvalidityclass")},9))}});v.changedvaliditystate=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;e.triggerInlineForm=function(e,h){c(e).trigger(h)};e.modules["form-core"].getGroupElements=h;p=function(){e.scrollRoot=c.browser.webkit||"BackCompat"==k.compatMode?c(k.body):
c(k.documentElement)};p();e.ready("DOM",p);e.getRelOffset=function(e,h){var e=c(e),i=c(h).offset(),a;c.swap(c(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=e.offset()});i.top-=a.top;i.left-=a.left;return i};e.validityAlert=function(){var g=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",h,i=!1,a=!1,b,d={hideDelay:5E3,showFor:function(e,g,k,l){d._create();var e=c(e),m=c(e).getShadowElement(),p=d.getOffsetFromBody(m);d.clear();l?this.hide():(this.getMessage(e,
g),this.position(m,p),h.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(b,this.hideDelay)),c(j).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){d.position(m)},9)}));k||this.setFocus(m,p)},getOffsetFromBody:function(a){return e.getRelOffset(h,a)},setFocus:function(a,d){var i=c(a).getShadowFocusElement(),j=e.scrollRoot.scrollTop(),l=(d||i.offset()).top-30,
m;e.getID&&"label"==g&&h.attr("for",e.getID(i));j>l&&(e.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-l)),80)}),m=!0);try{i[0].focus()}catch(p){}m&&(e.scrollRoot.scrollTop(j),setTimeout(function(){e.scrollRoot.scrollTop(j)},0));setTimeout(function(){c(k).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",h).text(b||u(a[0])||a.prop("validationMessage"))},position:function(a,b){b=b?c.extend({},b):d.getOffsetFromBody(a);b.top+=a.outerHeight();
h.css(b)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(i);c(k).unbind(".validityalert");c(j).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=d.errorBubble=c("<"+g+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
g+">").css({position:"absolute",display:"none"}),e.ready("DOM",function(){h.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&h.bgIframe()})}};b=c.proxy(d,"hide");return d}();(function(){var e,h=[],i;c(k).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var b=c(a.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=c.Event("firstinvalid"),e.isInvalidUIPrevented=a.isDefaultPrevented,d=c.Event("firstinvalidsystem"),c(k).triggerHandler(d,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&a.preventDefault();h.push(a.target);a.extraData="fix";clearTimeout(i);i=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:c(h)};e=!1;h=[];c(a.target).trigger(b,b)},9);d=b=null}})})();m.replaceValidationUI&&e.ready("DOM",function(){c(k).bind("firstinvalid",
function(e){e.isInvalidUIPrevented()||(e.preventDefault(),c.webshims.validityAlert.showFor(e.target,c(e.target).prop("customValidationMessage")))})})});
