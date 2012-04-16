(function(a,b,p){var l=b.audio&&b.video,q=!1;if(l)a=document.createElement("video"),b.videoBuffered="buffered"in a,q="loop"in a,p.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),b.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:b.videoBuffered,d:["dom-support"]}),p.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,b,j,t,s){var g=b.mediaelement,r=b.cfg.mediaelement,
n=function(c,v){var c=a(c),i={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!i.src)return i;var k=c.attr("type");if(k)i.type=k,i.container=a.trim(k.split(";")[0]);else if(v||(v=c[0].nodeName.toLowerCase(),"source"==v&&(v=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),k=g.getTypeForSrc(i.src,v))i.type=k,i.container=k,b.warn("you should always provide a proper mime-type using the source element. "+i.src+" detected as: "+k),a.nodeName(c[0],"source")&&c.attr("type",
k);if(k=c.attr("media"))i.media=k;return i},w=swfobject.hasFlashPlayerVersion("9.0.115"),o=function(){b.ready("mediaelement-swf",function(){if(!g.createSWF)b.modules["mediaelement-swf"].test=a.noop,b.reTest(["mediaelement-swf"],l)})};g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=a.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(c,b){if(-1!=c.indexOf("youtube.com/watch?")||-1!=c.indexOf("youtube.com/v/"))return"video/youtube";
var c=c.split("?")[0].split("."),c=c[c.length-1],i;a.each(g.mimeTypes[b],function(a,b){if(-1!==b.indexOf(c))return i=a,!1});return i};g.srces=function(c,b){c=a(c);if(b)c.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(b)||(b=[b]),b.forEach(function(a){var i=t.createElement("source");"string"==typeof a&&(a={src:a});i.setAttribute("src",a.src);a.type&&i.setAttribute("type",a.type);a.media&&i.setAttribute("media",a.media);c.append(i)});else{var b=[],i=c[0].nodeName.toLowerCase(),
k=n(c,i);k.src?b.push(k):a("source",c).each(function(){k=n(this,i);k.src&&b.push(k)});return b}};a.fn.loadMediaSrc=function(c,b){return this.each(function(){b!==s&&(a(this).removeAttr("poster"),b&&a.attr(this,"poster",b));g.srces(this,c);a(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canSwfPlaySrces=function(c,b){var i="";w&&(c=a(c),b=b||g.srces(c),a.each(b,function(a,c){if(c.container&&c.src&&-1!=g.swfMimeTypes.indexOf(c.container))return i=c,!1}));return i};var c={};g.canNativePlaySrces=function(b,f){var i="";if(l){var b=a(b),k=(b[0].nodeName||"").toLowerCase();if(!c[k])return i;f=f||g.srces(b);a.each(f,function(a,f){if(f.type&&c[k].prop._supvalue.call(b[0],f.type))return i=f,!1})}return i};g.setError=function(c,f){f||(f="can't play sources");a(c).pause().data("mediaerror",
f);b.warn("mediaelementError: "+f);setTimeout(function(){a(c).data("mediaerror")&&a(c).trigger("mediaerror")},1)};var m=function(){var a;return function(c,i,k){b.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(c,i,k):a||(a=!0,o(),m(c,i,k))})}}(),f=function(a,c,i,b,u){i||!1!==i&&c&&"flash"==c.isActive?(i=g.canSwfPlaySrces(a,b))?m(a,i,c):u?g.setError(a,!1):f(a,c,!1,b,!0):(i=g.canNativePlaySrces(a,b))?c&&"flash"==c.isActive&&g.setActive(a,"html5",c):u?(g.setError(a,!1),c&&"flash"==c.isActive&&
g.setActive(a,"html5",c)):f(a,c,!0,b,!0)},y=/^(?:embed|object|datalist)$/i,x=function(c,m){var i=b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{}),k=g.srces(c),u=c.parentNode;clearTimeout(i.loadTimer);a.data(c,"mediaerror",!1);if(k.length&&u&&!(1!=u.nodeType||y.test(u.nodeName||"")))m=m||b.data(c,"mediaelement"),f(c,m,r.preferFlash||s,k)};a(t).bind("ended",function(c){var f=b.data(c.target,"mediaelement");(!q||f&&"html5"!=f.isActive||a.prop(c.target,"loop"))&&setTimeout(function(){!a.prop(c.target,
"paused")&&a.prop(c.target,"loop")&&a(c.target).prop("currentTime",0).play()},1)});q||b.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(f){var m=b.defineNodeNameProperty(f,"load",{prop:{value:function(){var c=b.data(this,"mediaelement");x(this,c);l&&(!c||"html5"==c.isActive)&&m.prop._supvalue&&m.prop._supvalue.apply(this,arguments)}}});c[f]=b.defineNodeNameProperty(f,"canPlayType",{prop:{value:function(i){var b="";l&&c[f].prop._supvalue&&(b=c[f].prop._supvalue.call(this,
i),"no"==b&&(b=""));!b&&w&&(i=a.trim((i||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(i)&&(b="maybe"));return b}}})});b.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,a=b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){x(c);c=null},9)}});j=function(){b.addReady(function(c,f){a("video, audio",c).add(f.filter("video, audio")).each(function(){a.browser.msie&&8<b.browserVersion&&a.prop(this,
"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():x(this);if(l){var c,f,m=this,g=function(){var c=a.prop(m,"buffered");if(c){for(var b="",i=0,f=c.length;i<f;i++)b+=c.end(i);return b}},t=function(){var c=g();c!=f&&(f=c,a(m).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(f=g());clearTimeout(c);c=setTimeout(t,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(f=!1);clearTimeout(c)})}})})};l?(b.isReady("mediaelement-core",!0),j(),w&&b.ready("WINDOWLOAD mediaelement",o)):b.ready("mediaelement-swf",j)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("form-message",function(a,b,p,l,q,h){var d=b.validityMessages,p=h.overrideMessages||h.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var j=
d[""];b.createValidationMessage=function(b,d){var g=j[d];g&&"string"!==typeof g&&(g=g[a.prop(b,"type")]||g[(b.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==g.indexOf("{%"+d)){var n=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";g=g.replace("{%"+d+"}",n);"value"==d&&(g=g.replace("{%valueLen}",n.length))}});return g||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&p.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){j=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});p.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var g=b.defineNodeNameProperty(h,d,{prop:{get:function(){var d=this,h="";if(!a.prop(d,"willValidate"))return h;var j=a.prop(d,"validity")||{valid:1};if(j.valid||(h=b.getContentValidationMessage(d,j)))return h;if(j.customError&&d.nodeName&&(h=Modernizr.formvalidation&&!b.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(d):b.data(d,"customvalidationMessage")))return h;a.each(j,function(a,c){if("valid"!=
a&&c&&(h=b.createValidationMessage(d,a)))return!1});return h||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,p,l){b.inputTypes=b.inputTypes||{};var q=b.cfg.forms,h,d=b.inputTypes,j={radio:1,checkbox:1};b.addInputType=function(c,a){d[c]=a};var t={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},s={valueMissing:function(c,m,f){if(!c.prop("required"))return!1;var d=!1;if(!("type"in f))f.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();if("select"==f.nodeName){if(m=!m)if(!(m=0>c[0].selectedIndex))c=c[0],m="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=m}else c=j[f.type]?"checkbox"==f.type?!c.is(":checked"):!b.modules["form-core"].getGroupElements(c).filter(":checked")[0]:!m;return c},tooLong:function(){return!1},typeMismatch:function(c,a,b){if(""===a||"select"==b.nodeName)return!1;var g=!1;if(!("type"in b))b.type=(c[0].getAttribute("type")||c[0].type||"").toLowerCase();
d[b.type]&&d[b.type].mismatch&&(g=d[b.type].mismatch(a,c));return g},patternMismatch:function(c,a,f){if(""===a||"select"==f.nodeName)return!1;c=c.attr("pattern");if(!c)return!1;try{c=RegExp("^(?:"+c+")$")}catch(d){b.error('invalid pattern value: "'+c+'" | '+d),c=!1}return!c?!1:!c.test(a)}};b.addValidityRule=function(c,a){s[c]=a};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;if(!a.data(c,"invalidEventShim")&&(a(c).data("invalidEventShim",
!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form"))){var m=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate");b.data(c,"bustedNoValidate",null==m?null:m)}},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){h=!0;c.testedValidity=!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),
h=!1;h=!1}}};a(l).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var g=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return g.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=q.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(b){return!a.test(b)}}()});
b.addInputType("url",{mismatch:function(){var a=q.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},t)}}},"prop");var r=function(c){var d,f=a.prop(c,"validity");if(f)a.data(c,"cachedValidity",
f);else return!0;if(!f.valid){d=a.Event("invalid");var g=a(c).trigger(d);if(h&&!r.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(g),r.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return f.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});r.unhandledInvalids=!1;for(var f=0,g=d.length;f<g;f++)r(d[f])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){r.unhandledInvalids=!1;return r(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{set:a.noop,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type])}}()},validity:{set:a.noop,get:function(){var c=
a(this).getNativeElement(),d=c[0],f=a.data(d,"cachedValidity");if(f)return f;f=a.extend({},t);if(!a.prop(d,"willValidate")||"submit"==d.type)return f;var g=c.val(),h={nodeName:d.nodeName.toLowerCase()};f.customError=!!b.data(d,"customvalidationMessage");if(f.customError)f.valid=!1;a.each(s,function(a,b){if(b(c,g,h))f[a]=!0,f.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",f.valid?"false":"true");d=c=null;return f}}},"prop");b.defineNodeNamesBooleanProperty(["input","textarea","select"],
"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in l.createElement("textarea"))){var n=function(){var c,b=0,f=a([]),d=1E9,g=function(){var a=f.prop("value"),c=a.length;c>b&&c>d&&(c=Math.max(b,d),f.prop("value",a.substr(0,c)));b=c},h=function(){clearTimeout(c);f.unbind(".maxlengthconstraint")};return function(j,i){h();if(-1<i)d=i,b=a.prop(j,"value").length,
f=a(j),f.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),f.bind("keyup.maxlengthconstraint",g),f.bind("blur.maxlengthconstraint",h),c=setInterval(g,200)}}();n.update=function(c,b){c===l.activeElement&&(null==b&&(b=a.prop(c,"maxlength")),n(e.target,b))};a(l).bind("focusin",function(c){var b;"TEXTAREA"==c.target.nodeName&&-1<(b=a.prop(c.target,"maxlength"))&&n(c.target,b)});b.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);n.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);n.update(this,a)}else this.setAttribute("maxlength","0"),n.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,"maxlength")}}})}var w={submit:1,button:1,image:1},o={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b=
"form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),f="form"+c.name,d=c.name,g="click.webshimssubmittermutate"+d,h=function(){if("form"in this&&w[this.type]){var i=a.prop(this,"form");if(i){var k=a.attr(this,f);if(null!=k&&(!c.limitedTo||k.toLowerCase()===a.prop(this,b))){var g=a.attr(i,d);a.attr(i,d,k);setTimeout(function(){if(null!=g)a.attr(i,d,g);else try{a(i).removeAttr(d)}catch(c){i.removeAttribute(d)}},9)}}}};switch(c.proptype){case "url":var j=l.createElement("form");
o[b]={prop:{set:function(c){a.attr(this,f,c)},get:function(){var c=a.attr(this,f);if(null==c)return"";j.setAttribute("action",c);return j.action}}};break;case "boolean":o[b]={prop:{set:function(c){c?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":o[b]={prop:{set:function(c){a.attr(this,f,c)},get:function(){var b=a.attr(this,f);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:
b}}};break;default:o[b]={prop:{set:function(c){a.attr(this,f,c)},get:function(){var c=a.attr(this,f);return null!=c?c:""}}}}o[f]||(o[f]={});o[f].attr={set:function(c){o[f].attr._supset.call(this,c);a(this).unbind(g).bind(g,h)},get:function(){return o[f].attr._supget.call(this)}};o[f].initAttr=!0;o[f].removeAttr={value:function(){a(this).unbind(g);o[f].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],o);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}});b.defineNodeNameProperty("form","noValidate",
{prop:{set:function(c){c?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});b.addReady(function(c,b){var f;a("form",c).add(b.filter("form")).bind("invalid",a.noop);try{if(c==l&&!("form"in(l.activeElement||{})))(f=a("input[autofocus], select[autofocus], textarea[autofocus]",c).eq(0).getShadowFocusElement()[0])&&f.offsetHeight&&f.offsetWidth&&f.focus()}catch(d){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in
a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var f=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(b,d,g,h){!1===g&&(g=a.prop(b,"value"));if(!c&&"password"!=b.type){if(!g&&h&&f(b)){var j;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(c){if(!c||!(17==c.keyCode||16==c.keyCode))b.value=a.prop(b,"value"),d.box.removeClass("placeholder-visible"),clearTimeout(j),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){f(b);clearTimeout(j);j=setTimeout(function(){f(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=g}else if(!g&&h){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(c){if(!c||!(17==c.keyCode||16==c.keyCode))d.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}d.box.removeClass("placeholder-visible")},h=function(b,d,f,h,j){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");if("focus"==j||!j&&b===l.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&g(b,h,"",!0);else if(!1===d&&(d=a.prop(b,"value")),
d)g(b,h,d);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!d){d=h;!1===f&&(f=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else g(b,h,d)},j=function(c){var c=a(c),b=c.prop("id"),d=!(!c.prop("title")&&!c.attr("aria-labeledby"));!d&&b&&(d=!!a('label[for="'+b+'"]',c[0].form)[0]);d||(b||(b=a.webshims.getID(c)),d=!!a("label #"+b)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+b+'" class="placeholder-text"></label>')},n=function(){var d=
{text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){h(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){h(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.text=j(b);d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+
(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){h(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.curCSS(b,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},i=a.curCSS(b,"float");
a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,f){var g=a.curCSS(b,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==i&&d.box.addClass("placeholder-box-"+i)}else f=function(c){a(b).hasClass("placeholder-visible")&&(g(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&h(b,!1,!1,d)},9))},a(p).bind("beforeunload",f),d.box=a(b),b.form&&a(b.form).submit(f);return d},update:function(c,f){if(!d[a.prop(c,"type")]&&!a.nodeName(c,
"textarea"))b.warn("placeholder not allowed on type: "+a.prop(c,"type"));else{var g=n.create(c);g.text&&g.text.text(f);h(c,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:n};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);n.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},f;["attr","prop"].forEach(function(c){d[c]={set:function(d){var g=b.contentAttr(this,
"placeholder");a.removeData(this,"cachedValidity");var i=f[c]._supset.call(this,d);g&&"value"in this&&h(this,d,g);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":f[c]._supget.call(this)}}});f=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,p,l){(function(){if(!("value"in l.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=q(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,j){"removeAttr"!=j&&(d=a.data(this,"outputShim"))&&d(b)});var q=function(h){if(!h.getAttribute("aria-live")){var h=a(h),d=(h.text()||"").trim(),
j=h.attr("id"),t=h.attr("for"),s=a('<input class="output-shim" type="text" disabled name="'+(h.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(h),g=s[0].form||l,r=function(a){s[0].value=a;a=s[0].value;h.text(a);b.contentAttr(h[0],"value",a)};h[0].defaultValue=d;b.contentAttr(h[0],"value",d);h.attr({"aria-live":"polite"});j&&(s.attr("id",j),h.attr("aria-labeldby",b.getID(a('label[for="'+j+'"]',g))));t&&(j=b.getID(h),t.split(" ").forEach(function(a){(a=l.getElementById(a))&&
a.setAttribute("aria-controls",j)}));h.data("outputShim",r);s.data("outputShim",r);return r}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){q(this)})})}})();(function(){var q={updateInput:1,input:1},h={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,h=a.prop("value"),g=function(d){if(a){var c=a.prop("value");c!==h&&(h=c,(!d||!q[d.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},l,n=function(){clearTimeout(l);
l=setTimeout(g,9)},p=function(){a.unbind("focusout",p).unbind("keyup keypress keydown paste cut",n).unbind("input change updateInput",g);clearInterval(d);setTimeout(function(){g();a=null},1)};clearInterval(d);d=setInterval(g,99);n();a.bind("keyup keypress keydown paste cut",n).bind("focusout",p).bind("input updateInput change",g)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(l).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!h[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
