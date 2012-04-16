(function(a){var b=window.Modernizr,k=a.webshims,j=k.bugs,p=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),f=function(){if(p[0].querySelector)try{j.findRequired=!p[0].querySelector("select:required")}catch(a){j.findRequired=!1}};j.findRequired=!1;j.validationMessage=!1;j.valueAsNumberSet=!1;k.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=b.isDefaultPrevented,
h=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return h.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||j.bustedValidity)f();else if(b.bugfreeformvalidation=!1,window.opera||a.browser.webkit||window.testGoodWithFix){var d=
a("input",p).eq(0),g,h=function(h){var f=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(g);setTimeout(function(){p&&(p.remove(),p=d=null)},9);if(!b.bugfreeformvalidation)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=a.noop;k.isReady("form-number-date-api")&&f.push("form-number-date-api");k.reTest(f);if(a.browser.opera||window.testGoodWithFix)k.loader.loadList(["dom-extend"]),k.ready("dom-extend",
function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var h=k.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",d);k.fromCheckValidity=!0;var c=h.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",d);k.fromCheckValidity=!1;return c}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
k.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}})})};p.appendTo("head");if(window.opera||window.testGoodWithFix){f();j.validationMessage=!d.prop("validationMessage");if((b.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(u){}j.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}p.bind("submit",function(a){b.bugfreeformvalidation=
!1;h(a)});g=setTimeout(function(){p&&p.triggerHandler("submit")},9);k.capturingEvents(["input"]);k.capturingEvents(["invalid"],!0);a("input, select",p).bind("invalid",h).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0)})(jQuery);
jQuery.webshims.register("form-core",function(a,b,k,j,p,f){var d={radio:1},g={checkbox:1,radio:1},h=a([]),u=b.bugs,v=function(i){var i=a(i),c,b;c=h;if(d[i[0].type])b=i.prop("form"),c=(c=i[0].name)?b?a(b[c]):a(j.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):i,c=c.filter('[type="radio"]');return c},q=b.getContentValidationMessage=function(i,c){var o=i.getAttribute("x-moz-errormessage")||i.getAttribute("data-errormessage")||"";if(o&&-1!=o.indexOf("{")){try{o=jQuery.parseJSON(o)}catch(m){return o}"object"==
typeof o&&(c=c||a.prop(i,"validity")||{valid:1},c.valid||a.each(c,function(a,c){if(c&&"valid"!=a&&o[a])return o=o[a],!1}));b.data(i,"contentErrorMessage",o);if("object"==typeof o)o=o.defaultMessage}return o||""},n={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||
{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!n[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!n[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});var t=a.event.customEvent||{};(u.bustedValidity||u.findRequired)&&function(){var c=a.find,b=a.find.matchesSelector,o=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,m=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var l=arguments,l=a.call(l,1,l.length);l.unshift(b.replace(o,m));return c.apply(this,
l)},s;for(s in c)c.hasOwnProperty(s)&&(b[s]=c[s]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",j.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(o,m);return b.call(this,a,c)}}();var r=a.prop,c={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,m,o){var d=r.apply(this,arguments);if(b&&"form"in b&&c[m]&&o!==p&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==m&&o&&v(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return d};var m=function(c,b){var m;a.each(c,function(c,i){if(i)return m="customError"==c?a.prop(b,"validationMessage"):c,!1});return m};a(j).bind("focusout change refreshvalidityui",function(c){if(c.target&&"submit"!=c.target.type&&a.prop(c.target,"willValidate")){var b=a.data(c.target,"webshimsswitchvalidityclass");b&&clearTimeout(b);a.data(c.target,"webshimsswitchvalidityclass",setTimeout(function(){var b=a(c.target).getNativeElement()[0],
d=a.prop(b,"validity"),x=a(b).getShadowElement(),l,s,w,h;d.valid?x.hasClass("form-ui-valid")||(l="form-ui-valid",s="form-ui-invalid",h="changedvaliditystate",w="changedvalid",g[b.type]&&b.checked&&v(b).not(b).removeClass(s).addClass(l).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(d=m(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),h="changedvaliditystate"),x.hasClass("form-ui-invalid")||(l="form-ui-invalid",s="form-ui-valid",g[b.type]&&!b.checked&&
v(b).not(b).removeClass(s).addClass(l),w="changedinvalid"));l&&(x.addClass(l).removeClass(s),setTimeout(function(){a(b).trigger(w)},0));h&&setTimeout(function(){a(b).trigger(h)},0);a.removeData(c.target,"webshimsswitchvalidityclass")},9))}});t.changedvaliditystate=!0;t.changedvalid=!0;t.changedinvalid=!0;t.refreshvalidityui=!0;b.triggerInlineForm=function(c,b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=v;u=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):
a(j.documentElement)};u();b.ready("DOM",u);b.getRelOffset=function(c,b){var c=a(c),m=a(b).offset(),d;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){d=c.offset()});m.top-=d.top;m.left-=d.left;return m};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",m,d=!1,h=!1,f,l={hideDelay:5E3,showFor:function(c,b,i,j){l._create();var c=a(c),n=a(c).getShadowElement(),g=l.getOffsetFromBody(n);l.clear();j?this.hide():(this.getMessage(c,
b),this.position(n,g),m.css({fontSize:c.css("fontSize"),fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(f,this.hideDelay)),a(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(h);h=setTimeout(function(){l.position(n)},9)}));i||this.setFocus(n,g)},getOffsetFromBody:function(a){return b.getRelOffset(m,a)},setFocus:function(l,d){var h=a(l).getShadowFocusElement(),o=b.scrollRoot.scrollTop(),n=(d||h.offset()).top-30,
g;b.getID&&"label"==c&&m.attr("for",b.getID(h));o>n&&(b.scrollRoot.animate({scrollTop:n-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(o-n)),80)}),g=!0);try{h[0].focus()}catch(v){}g&&(b.scrollRoot.scrollTop(o),setTimeout(function(){b.scrollRoot.scrollTop(o)},0));setTimeout(function(){a(j).bind("focusout.validityalert",f)},10)},getMessage:function(c,b){a("span.va-box",m).text(b||q(c[0])||c.prop("validationMessage"))},position:function(c,b){b=b?a.extend({},b):l.getOffsetFromBody(c);b.top+=c.outerHeight();
m.css(b)},show:function(){"none"===m.css("display")&&m.css({opacity:0}).show();m.addClass("va-visible").fadeTo(400,1)},hide:function(){m.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(j).unbind(".validityalert");a(k).unbind(".validityalert");m.stop().removeAttr("for")},_create:function(){if(!m)m=l.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){m.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&m.bgIframe()})}};f=a.proxy(l,"hide");return l}();(function(){var c,b=[],m;a(j).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var h=a(d.target),l=h.getShadowElement();l.hasClass("form-ui-invalid")||(l.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!c)c=a.Event("firstinvalid"),c.isInvalidUIPrevented=d.isDefaultPrevented,l=a.Event("firstinvalidsystem"),a(j).triggerHandler(l,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),h.trigger(c);c&&c.isDefaultPrevented()&&d.preventDefault();b.push(d.target);d.extraData="fix";clearTimeout(m);m=setTimeout(function(){var l={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(d.target).trigger(l,l)},9);l=h=null}})})();f.replaceValidationUI&&b.ready("DOM",function(){a(j).bind("firstinvalid",
function(c){c.isInvalidUIPrevented()||(c.preventDefault(),a.webshims.validityAlert.showFor(c.target,a(c.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,k,j,p,f){var d=b.validityMessages,k=f.overrideMessages||f.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var g=
d[""];b.createValidationMessage=function(b,d){var f=g[d];f&&"string"!==typeof f&&(f=f[a.prop(b,"type")]||f[(b.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==f.indexOf("{%"+d)){var n=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";f=f.replace("{%"+d+"}",n);"value"==d&&(f=f.replace("{%valueLen}",n.length))}});return f||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&k.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){g=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});k.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var g=b.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var h=a.prop(d,"validity")||{valid:1};if(h.valid||(f=b.getContentValidationMessage(d,h)))return f;if(h.customError&&d.nodeName&&(f=Modernizr.formvalidation&&!b.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(d):b.data(d,"customvalidationMessage")))return f;a.each(h,function(a,c){if("valid"!=
a&&c&&(f=b.createValidationMessage(d,a)))return!1});return f||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,k,j){b.inputTypes=b.inputTypes||{};var p=b.cfg.forms,f,d=b.inputTypes,g={radio:1,checkbox:1};b.addInputType=function(a,b){d[a]=b};var h={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},u={valueMissing:function(c,d,i){if(!c.prop("required"))return!1;var f=!1;if(!("type"in i))i.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();if("select"==i.nodeName){if(d=!d)if(!(d=0>c[0].selectedIndex))c=c[0],d="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=d}else c=g[i.type]?"checkbox"==i.type?!c.is(":checked"):!b.modules["form-core"].getGroupElements(c).filter(":checked")[0]:!d;return c},tooLong:function(){return!1},typeMismatch:function(a,b,i){if(""===b||"select"==i.nodeName)return!1;var f=!1;if(!("type"in i))i.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
d[i.type]&&d[i.type].mismatch&&(f=d[i.type].mismatch(b,a));return f},patternMismatch:function(a,d,i){if(""===d||"select"==i.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(f){b.error('invalid pattern value: "'+a+'" | '+f),a=!1}return!a?!1:!a.test(d)}};b.addValidityRule=function(a,b){u[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;if(!a.data(c,"invalidEventShim")&&(a(c).data("invalidEventShim",
!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form"))){var d=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate");b.data(c,"bustedNoValidate",null==d?null:d)}},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){f=!0;c.testedValidity=!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),
f=!1;f=!1}}};a(j).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var v=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return v.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=p.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(b){return!a.test(b)}}()});
b.addInputType("url",{mismatch:function(){var a=p.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},h)}}},"prop");var q=function(c){var d,i=a.prop(c,"validity");if(i)a.data(c,"cachedValidity",
i);else return!0;if(!i.valid){d=a.Event("invalid");var g=a(c).trigger(d);if(f&&!q.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(g),q.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return i.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});q.unhandledInvalids=!1;for(var i=0,f=d.length;i<f;i++)q(d[i])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){q.unhandledInvalids=!1;return q(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{set:a.noop,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type])}}()},validity:{set:a.noop,get:function(){var c=
a(this).getNativeElement(),d=c[0],i=a.data(d,"cachedValidity");if(i)return i;i=a.extend({},h);if(!a.prop(d,"willValidate")||"submit"==d.type)return i;var f=c.val(),g={nodeName:d.nodeName.toLowerCase()};i.customError=!!b.data(d,"customvalidationMessage");if(i.customError)i.valid=!1;a.each(u,function(a,b){if(b(c,f,g))i[a]=!0,i.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",i.valid?"false":"true");d=c=null;return i}}},"prop");b.defineNodeNamesBooleanProperty(["input","textarea","select"],
"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in j.createElement("textarea"))){var n=function(){var c,b=0,d=a([]),f=1E9,g=function(){var a=d.prop("value"),c=a.length;c>b&&c>f&&(c=Math.max(b,f),d.prop("value",a.substr(0,c)));b=c},h=function(){clearTimeout(c);d.unbind(".maxlengthconstraint")};return function(j,l){h();if(-1<l)f=l,b=a.prop(j,"value").length,
d=a(j),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),d.bind("keyup.maxlengthconstraint",g),d.bind("blur.maxlengthconstraint",h),c=setInterval(g,200)}}();n.update=function(c,b){c===j.activeElement&&(null==b&&(b=a.prop(c,"maxlength")),n(e.target,b))};a(j).bind("focusin",function(c){var b;"TEXTAREA"==c.target.nodeName&&-1<(b=a.prop(c.target,"maxlength"))&&n(c.target,b)});b.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);n.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);n.update(this,a)}else this.setAttribute("maxlength","0"),n.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var t={submit:1,button:1,image:1},r={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var d=
"form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),f="form"+b.name,g=b.name,h="click.webshimssubmittermutate"+g,n=function(){if("form"in this&&t[this.type]){var l=a.prop(this,"form");if(l){var s=a.attr(this,f);if(null!=s&&(!b.limitedTo||s.toLowerCase()===a.prop(this,d))){var w=a.attr(l,g);a.attr(l,g,s);setTimeout(function(){if(null!=w)a.attr(l,g,w);else try{a(l).removeAttr(g)}catch(b){l.removeAttribute(g)}},9)}}}};switch(b.proptype){case "url":var k=j.createElement("form");
r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);if(null==b)return"";k.setAttribute("action",b);return k.action}}};break;case "boolean":r[d]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var d=a.attr(this,f);return!d||(d=d.toLowerCase())&&!b.limitedTo[d]?b.defaultProp:
d}}};break;default:r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);return null!=b?b:""}}}}r[f]||(r[f]={});r[f].attr={set:function(b){r[f].attr._supset.call(this,b);a(this).unbind(h).bind(h,n)},get:function(){return r[f].attr._supget.call(this)}};r[f].initAttr=!0;r[f].removeAttr={value:function(){a(this).unbind(h);r[f].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],r);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}});b.defineNodeNameProperty("form","noValidate",
{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});b.addReady(function(b,d){var f;a("form",b).add(d.filter("form")).bind("invalid",a.noop);try{if(b==j&&!("form"in(j.activeElement||{})))(f=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&f.offsetHeight&&f.offsetWidth&&f.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in
a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var f=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(b,d,g,h){!1===g&&(g=a.prop(b,"value"));if(!c&&"password"!=b.type){if(!g&&h&&f(b)){var j;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(c){if(!c||!(17==c.keyCode||16==c.keyCode))b.value=a.prop(b,"value"),d.box.removeClass("placeholder-visible"),clearTimeout(j),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){f(b);clearTimeout(j);j=setTimeout(function(){f(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=g}else if(!g&&h){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(c){if(!c||!(17==c.keyCode||16==c.keyCode))d.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}d.box.removeClass("placeholder-visible")},h=function(b,d,f,h,i){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");if("focus"==i||!i&&b===j.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&g(b,h,"",!0);else if(!1===d&&(d=a.prop(b,"value")),
d)g(b,h,d);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!d){d=h;!1===f&&(f=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else g(b,h,d)},n=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},p=function(){var d=
{text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){h(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){h(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.text=n(b);d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+
(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){h(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.curCSS(b,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},i=a.curCSS(b,"float");
a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,f){var g=a.curCSS(b,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==i&&d.box.addClass("placeholder-box-"+i)}else f=function(c){a(b).hasClass("placeholder-visible")&&(g(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&h(b,!1,!1,d)},9))},a(k).bind("beforeunload",f),d.box=a(b),b.form&&a(b.form).submit(f);return d},update:function(c,f){if(!d[a.prop(c,"type")]&&!a.nodeName(c,
"textarea"))b.warn("placeholder not allowed on type: "+a.prop(c,"type"));else{var g=p.create(c);g.text&&g.text.text(f);h(c,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:p};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);p.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},f;["attr","prop"].forEach(function(c){d[c]={set:function(d){var g=b.contentAttr(this,
"placeholder");a.removeData(this,"cachedValidity");var i=f[c]._supset.call(this,d);g&&"value"in this&&h(this,d,g);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":f[c]._supget.call(this)}}});f=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,k,j){(function(){if(!("value"in j.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=k(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,g){"removeAttr"!=g&&(d=a.data(this,"outputShim"))&&d(b)});var k=function(f){if(!f.getAttribute("aria-live")){var f=a(f),d=(f.text()||"").trim(),
g=f.attr("id"),h=f.attr("for"),k=a('<input class="output-shim" type="text" disabled name="'+(f.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(f),p=k[0].form||j,q=function(a){k[0].value=a;a=k[0].value;f.text(a);b.contentAttr(f[0],"value",a)};f[0].defaultValue=d;b.contentAttr(f[0],"value",d);f.attr({"aria-live":"polite"});g&&(k.attr("id",g),f.attr("aria-labeldby",b.getID(a('label[for="'+g+'"]',p))));h&&(g=b.getID(f),h.split(" ").forEach(function(a){(a=j.getElementById(a))&&
a.setAttribute("aria-controls",g)}));f.data("outputShim",q);k.data("outputShim",q);return q}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},f={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,f=a.prop("value"),j=function(d){if(a){var c=a.prop("value");c!==f&&(f=c,(!d||!k[d.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},q,n=function(){clearTimeout(q);
q=setTimeout(j,9)},t=function(){a.unbind("focusout",t).unbind("keyup keypress keydown paste cut",n).unbind("input change updateInput",j);clearInterval(d);setTimeout(function(){j();a=null},1)};clearInterval(d);d=setInterval(j,99);n();a.bind("keyup keypress keydown paste cut",n).bind("focusout",t).bind("input updateInput change",j)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(j).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!f[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
