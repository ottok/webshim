Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(b,g,p,h){g.inputTypes=g.inputTypes||{};var k=g.cfg.forms,j,i=function(a){return typeof a=="number"||a&&a==a*1},l=g.inputTypes,m={radio:1,checkbox:1};g.addInputType=function(a,b){l[a]=b};var e={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},c={valueMissing:function(a,c,d){if(!a.attr("required"))return!1;var e=!1;if(!("type"in d))d.type=
(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(d.nodeName=="select"){if(c=!c)if(!(c=a[0].selectedIndex<0))a=a[0],c=a.type=="select-one"&&a.size<2?!!b("> option:first-child",a).prop("selected"):!1;a=c}else a=m[d.type]?d.type=="checkbox"?!a.is(":checked"):!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c;return a},tooLong:function(a,b,c){if(b===""||c.nodeName=="select")return!1;var a=a.attr("maxlength"),c=!1,d=b.length;d&&a>=0&&b.replace&&i(a)&&(c=d>a);return c},
typeMismatch:function(a,b,c){if(b===""||c.nodeName=="select")return!1;var d=!1;if(!("type"in c))c.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();l[c.type]&&l[c.type].mismatch&&(d=l[c.type].mismatch(b,a));return d},patternMismatch:function(a,b,c){if(b===""||c.nodeName=="select")return!1;a=a.attr("pattern");return!a?!1:!RegExp("^(?:"+a+")$").test(b)}};g.addValidityRule=function(a,b){c[a]=b};b.event.special.invalid={add:function(){b.event.special.invalid.setup.call(this.form||this)},setup:function(){var a=
this.form||this;if(!b.data(a,"invalidEventShim"))b(a).data("invalidEventShim",!0).bind("submit",b.event.special.invalid.handler),(a=b(a).data("events").submit)&&a.length>1&&a.unshift(a.pop())},teardown:b.noop,handler:function(a){if(!(a.type!="submit"||a.testedValidity||!a.originalEvent||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate"))){j=!0;a.testedValidity=!0;if(!b(a.target).checkValidity())return this===h&&g.warn("always embed HTML5 content using .prependWebshim, .appendWebshim, .htmlWebshim etc."),
a.stopImmediatePropagation(),j=!1;j=!1}}};b(h).bind("invalid",b.noop);b.event.special.submit=b.event.special.submit||{setup:function(){return!1}};var d=b.event.special.submit.setup;b.extend(b.event.special.submit,{setup:function(){b.nodeName(this,"form")?b(this).bind("invalid",b.noop):b("form",this).bind("invalid",b.noop);return d.apply(this,arguments)}});g.addInputType("email",{mismatch:function(){var a=k.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});g.addInputType("url",{mismatch:function(){var a=k.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});g.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:b.noop},validity:{writeable:!1,get:function(){return b.extend({},e)}}},"prop");var f=function(a){var c,d=b.prop(a,"validity");if(d)b.data(a,"cachedValidity",d);else return!0;if(!d.valid){c=b.Event("invalid");var e=b(a).trigger(c);if(j&&!f.unhandledInvalids&&!c.isDefaultPrevented())g.validityAlert.showFor(e),
f.unhandledInvalids=!0}b.removeData(a,"cachedValidity",!1);return d.valid};g.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var a=!0,c=b("input,textarea,select",this).filter(function(){return!g.data(this,"nativeElement")});f.unhandledInvalids=!1;for(var d=0,e=c.length;d<e;d++)f(c[d])||(a=!1);return a}}});g.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){f.unhandledInvalids=!1;return f(b(this).getNativeElement()[0])}},setCustomValidity:{value:function(a){g.data(this,
"customvalidationMessage",""+a)}},willValidate:{set:b.noop,get:function(){var a={button:1,reset:1,hidden:1};return function(){var c=b(this).getNativeElement()[0];return!(c.disabled||c.readOnly||a[c.type]||c.form&&b.attr(c.form,"novalidate")!=null)}}()},validity:{set:b.noop,get:function(){var a=b(this).getNativeElement(),d=a[0],f=b.data(d,"cachedValidity");if(f)return f;f=b.extend({},e);if(!b.prop(d,"willValidate")||d.type=="submit")return f;var o=a.val(),n={nodeName:d.nodeName.toLowerCase()};f.customError=
!!g.data(d,"customvalidationMessage");if(f.customError)f.valid=!1;b.each(c,function(b,c){if(c(a,o,n))f[b]=!0,f.valid=!1});d.setAttribute("aria-invalid",f.valid?"false":"true");d=a=null;return f}}},"prop");g.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(a){this.setAttribute("aria-required",!!a+"")},initAttr:!0});g.reflectProperties(["input"],["pattern"]);g.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a)},
get:function(){var a=this.getAttribute("maxlength");return a==null?void 0:a}},prop:{set:function(a){if(i(a)){if(a<0)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(a,10))}else this.setAttribute("maxlength","0")},get:function(){var a=this.getAttribute("maxlength");return i(a)&&a>=0?parseInt(a,10):-1}}});g.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(a){b.prop(this,"maxlength",a)},get:function(){return b.prop(this,"maxlength")}}});!b.support.getSetAttribute&&b("<form novalidate></form>").attr("novalidate")==
null&&g.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return a==null?void 0:a}}});var n=function(){var a=this;a.form&&(b.data(a.form,"novalidate",!0),setTimeout(function(){b.removeData(a.form,"novalidate")},1))},o={submit:1,button:1};b(h).bind("click",function(a){a.target&&a.target.form&&o[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&n.call(a.target)});g.addReady(function(a,c){var d=
b("form",a).add(c.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",n).end();setTimeout(function(){try{if(h.activeElement&&"form"in h.activeElement)return}catch(a){return}var c=!0;b("input, select, textarea",d).each(function(){if(!c)return!1;if(this.getAttribute("autofocus")!=null){c=!1;var a=b(this).getShadowElement(),d=b("input, select, textarea, .ui-slider-handle",a).filter(":visible:first");d[0]||(d=a);try{d[0].focus()}catch(f){}}})},0)})});
jQuery.webshims.ready("dom-support form-core",function(b,g,p){Modernizr.textareaPlaceholder=!!("placeholder"in b("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var h=g.cfg.forms.placeholderType=="over",k=["textarea"];Modernizr.input.placeholder||k.push("input");var j=function(e,c,d){if(!h&&e.type!="password")d===!1&&(d=b.prop(e,"value")),e.value=d;c.box.removeClass("placeholder-visible")},i=function(e,c,d,f,g){if(!f&&(f=b.data(e,"placeHolder"),!f))return;if(g==
"focus"||!g&&e===document.activeElement)(e.type=="password"||h||b(e).hasClass("placeholder-visible"))&&j(e,f,"");else if(c===!1&&(c=b.prop(e,"value")),c)j(e,f,c);else if(d===!1&&(d=b.attr(e,"placeholder")||""),d&&!c){c=f;d===!1&&(d=b.attr(e,"placeholder")||"");if(!h&&e.type!="password")e.value=d;c.box.addClass("placeholder-visible")}else j(e,f,c)},l=function(e){var e=b(e),c=e.prop("id"),d=!(!e.attr("title")&&!e.attr("aria-labeledby"));!d&&c&&(d=!!b('label[for="'+c+'"]',e[0].form)[0]);return b(d?'<span class="placeholder-text"></span>':
'<label for="'+(c||b.webshims.getID(e))+'" class="placeholder-text"></label>')},m=function(){var e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var d=b.data(c,"placeHolder");if(d)return d;d=b.data(c,"placeHolder",{text:l(c)});b(c).bind("focus.placeholder blur.placeholder",function(b){i(this,!1,!1,d,b.type)});c.form&&b(c.form).bind("reset.placeholder",function(b){setTimeout(function(){i(c,!1,!1,d,b.type)},0)});if(c.type=="password"||h){d.box=b(c).wrap('<span class="placeholder-box placeholder-box-'+
(c.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(c).bind("mousedown.placeholder",function(){i(this,!1,!1,d,"focus");try{setTimeout(function(){c.focus()},0)}catch(b){}return!1});b.each(["Left","Top"],function(e,a){var f=(parseInt(b.curCSS(c,"padding"+a),10)||0)+Math.max(parseInt(b.curCSS(c,"margin"+a),10)||0,0)+(parseInt(b.curCSS(c,"border"+a+"Width"),10)||0);d.text.css("padding"+a,f)});b.curCSS(c,"lineHeight");var f={width:b(c).width(),height:b(c).height()},e=b.curCSS(c,"float");
b.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(f,a){var e=b.curCSS(c,a);d.text.css(a)!=e&&d.text.css(a,e)});f.width&&f.height&&d.text.css(f);e!=="none"&&d.box.addClass("placeholder-box-"+e)}else{f=function(e){b(c).hasClass("placeholder-visible")&&(j(c,d,""),e&&e.type=="submit"&&setTimeout(function(){e.isDefaultPrevented()&&i(c,!1,!1,d)},9))};if(b.nodeName(d.text[0],"label"))d.text.hide()[b.browser.msie?"insertBefore":"insertAfter"](c);b(p).bind("beforeunload",f);d.box=b(c);c.form&&
b(c.form).submit(f)}return d},update:function(c,d){if(e[b.prop(c,"type")]||b.nodeName(c,"textarea")){var f=m.create(c);f.text.text(d);i(c,!1,d,f)}}}}();b.webshims.publicMethods={pHolder:m};k.forEach(function(b){g.defineNodeNameProperty(b,"placeholder",{attr:{set:function(b){g.contentAttr(this,"placeholder",b);m.update(this,b)},get:function(){return g.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});k.forEach(function(e){var c={},d;["attr","prop"].forEach(function(e){c[e]={set:function(b){var c=
g.contentAttr(this,"placeholder"),a=d[e]._supset.call(this,b);c&&"value"in this&&i(this,b,c);return a},get:function(){return b(this).hasClass("placeholder-visible")?"":d[e]._supget.call(this)}}});d=g.defineNodeNameProperty(e,"value",c)})}});
