jQuery.webshims.register("dom-extend",function(h,k,x,q,r){var u=k.modules,s=h.attr,o={},n={};h.attr=function(c,b,a,d,e){var g=(c.nodeName||"").toLowerCase();if(!g||c.nodeType!==1)return s(c,b,a,d,e);var f=o[g],j;if(f)f=f[b];if(!f)if(f=o["*"])f=f[b];if(f)if(a===r)return f.get?f.get.call(c):f.value;else{if(f.set)j=f.set.call(c,a)}else j=s(c,b,a,d,e);a!==r&&n[g]&&n[g][b]&&h.each(n[g][b],function(i,l){l.call(c,a)});return j};var v=function(c,b,a){o[c]||(o[c]={});var d=o[c][b],e=function(g,f,j){if(f&&
f[g])return f[g];if(j&&j[g])return j[g];return function(i){return s(this,b,i)}};o[c][b]=a;if(a.value===r){if(!a.set)a.set=a.writeable?e("set",a,d):k.cfg.useStrict?function(){throw b+" is readonly on "+c;}:h.noop;if(!a.get)a.get=e("get",a,d)}h.each(["value","get","set"],function(g,f){if(a[f])a["_sup"+f]=e(f,d)})},m=function(){var c={};k.addReady(function(e,g){var f={},j=function(i){if(!f[i]){f[i]=h(e.getElementsByTagName(i));if(g[0]&&h.nodeName(g[0],i))f[i]=f[i].add(g)}};h.each(c,function(i,l){j(i);
!l||!l.forEach?k.warn("Error: with "+i+"-property. methods: "+l):l.forEach(function(p){f[i].each(p)})});f=null});var b,a=h([]),d=function(e,g){if(c[e])c[e].push(g);else c[e]=[g];if(h.isDOMReady)(b||h(q.getElementsByTagName(e))).each(g)};return{createTmpCache:function(e){if(h.isDOMReady)b=b||h(q.getElementsByTagName(e));return b||a},flushTmpCache:function(){b=null},content:function(e,g){d(e,function(){h(this).filter("["+g+"]").attr(g,function(f,j){return j})})},createElement:function(e,g){d(e,g)},
extendValue:function(e,g,f){d(e,function(){h(this).each(function(){(h.data(this,"_oldPolyfilledValue")||h.data(this,"_oldPolyfilledValue",{}))[g]=this[g];this[g]=f})})}}}(),w=function(){var c=k.getPrototypeOf(q.createElement("foobar")),b=Object.prototype.hasOwnProperty;return function(a,d,e){var g=q.createElement(a),f=k.getPrototypeOf(g);if(f&&c!==f&&(!g[d]||!b.call(g,d))){var j=g[d];e._supvalue=function(){if(j&&j.apply)return j.apply(this,arguments);return j};f[d]=e.value}else{e._supvalue=function(){var i=
h.data(this,"_oldPolyfilledValue");if(i&&i[d]&&i[d].apply)return i[d].apply(this,arguments);return i&&i[d]};m.extendValue(a,d,e.value)}e.value._supvalue=e._supvalue}}();h.extend(k,{getID:function(){var c=(new Date).getTime();return function(b){b=h(b);var a=b.attr("id");if(!a){c++;a="elem-id-"+c;b.attr("id",a)}return a}}(),defineNodeNameProperty:function(c,b,a){a=h.extend({writeable:true,idl:true},a);if(a.isBoolean){var d=a.set;a.set=function(e){e=!!e;k.contentAttr(this,b,e);d&&d.call(this,e);return e};
a.get=a.get||function(){return k.contentAttr(this,b)!=null}}v(c,b,a);c!="*"&&k.cfg.extendNative&&a.value&&h.isFunction(a.value)&&w(c,b,a);a.initAttr&&m.content(c,b);return a},defineNodeNameProperties:function(c,b,a){for(var d in b){!a&&b[d].initAttr&&m.createTmpCache(c);b[d]=k.defineNodeNameProperty(c,d,b[d])}a||m.flushTmpCache();return b},createElement:function(c,b,a){var d;if(h.isFunction(b))b={after:b};m.createTmpCache(c);b.before&&m.createElement(c,b.before);if(a)d=k.defineNodeNameProperties(c,
a,true);b.after&&m.createElement(c,b.after);m.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,b,a){if(typeof c=="string")c=c.split(/\s*,\s*/);if(h.isFunction(a))a={set:a};c.forEach(function(d){n[d]||(n[d]={});n[d][b]||(n[d][b]=[]);a.set&&n[d][b].push(a.set);a.initAttr&&m.content(d,b)})},defineNodeNamesBooleanProperty:function(c,b,a){a=a||{};a.isBoolean=true;k.defineNodeNamesProperty(c,b,a)},contentAttr:function(c,b,a){if(c.nodeName){if(a===r){a=(c.attributes[b]||{}).value;return a==
null?r:a}if(typeof a=="boolean")a?c.setAttribute(b,b):c.removeAttribute(b);else c.setAttribute(b,a)}},activeLang:function(){var c=[navigator.browserLanguage||navigator.language||""],b=h("html").attr("lang");b&&c.push(b);return function(a,d,e,g){if(a)if(!d||!e){if(a!==c[0]){c[0]=a;h(q).triggerHandler("webshimLocalizationReady",c)}}else{var f=(d=u[d].options)&&d.availabeLangs,j=function(l){if(h.inArray(l,f)!==-1){k.loader.loadScript(d.langSrc+l+".js",function(){a[l]?e(a[l]):h(function(){a[l]&&e(a[l])})});
return true}return false},i;h.each(c,function(l,p){var t=p.split("-")[0];if(a[p]||a[t]){i=true;e(a[p]||a[t]);return false}if(f&&d.langSrc&&(j(p)||j(t))){i=true;return false}});!i&&g&&g()}return c}}()});h.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,b){k[c]=function(a,d,e){if(typeof a=="string")a=a.split(/\s*,\s*/);var g={};a.forEach(function(f){g[f]=k[b](f,d,e)});return g}});k.isReady("webshimLocalization",
true)});
