(function(d){if(!Modernizr.genericDOM){var f=d.webshims,n=document,k,h,x=/<([\w:]+)/,m={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1},j=/^(?:[^<]*(<[\w\W]+>)[^>]*$)/;f.fixHTML5=function(d){if(typeof d!="string"||m[(x.exec(d)||["",""])[1].toLowerCase()])return d;if(!h){k=n.body;if(!k)return d;h=n.createElement("div");h.style.display="none"}var f=h.cloneNode(!1);k.appendChild(f);f.innerHTML=d;k.removeChild(f);return f.childNodes};if(f.fn&&f.fn.init){var o=f.fn.init;f.fn.init=function(d){d&&
j.exec(d)&&(arguments[0]=f.fixHTML5(d));return o.apply(this,arguments)};f.fn.init.prototype=o.prototype}}})(jQuery);
jQuery.webshims.register("dom-extend",function(d,f,n,k,h){var x=f.modules,m=/\s*,\s*/,j={},o={},l={},A={},q={},u=d.fn.val,B=function(a,b,c,e,g){return g?u.call(d(a)):u.call(d(a),c)};d.fn.val=function(a){var b=this[0];arguments.length&&a==null&&(a="");if(!arguments.length)return!b||b.nodeType!==1?u.call(this):d.prop(b,"value",a,"val",!0);if(d.isArray(a))return u.apply(this,arguments);var c=d.isFunction(a);return this.each(function(e){b=this;b.nodeType===1&&(c?(e=a.call(b,e,d.prop(b,"value",h,"val",
!0)),e==null&&(e=""),d.prop(b,"value",e,"val")):d.prop(b,"value",a,"val"))})};var v=function(a,b,c){a=a.jquery?a[0]:a;if(!a)return c||{};var e=d.data(a,"_webshimsLib");c!==h&&(e||(e=d.data(a,"_webshimsLib",{})),b&&(e[b]=c));return b?e&&e[b]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"hasShadow"}].forEach(function(a){d.fn[a.name]=function(){return this.map(function(){return v(this,a.prop)||this})}});["removeAttr","prop","attr"].forEach(function(a){j[a]=d[a];d[a]=
function(b,c,e,g,s){var f=g=="val",C=!f?j[a]:B;if(!b||!o[c]||b.nodeType!==1||!f&&g&&a=="attr"&&d.attrFn[c])return C(b,c,e,g,s);var w=(b.nodeName||"").toLowerCase(),r=l[w],t=a=="attr"&&(e===!1||e===null)?"removeAttr":a,p,k,i;r||(r=l["*"]);r&&(r=r[c]);r&&(p=r[t]);if(p){if(c=="value")k=p.isVal,p.isVal=f;if(t==="removeAttr")return p.value.call(b);else if(e===h)return p.get?p.get.call(b):p.value;else p.set&&(a=="attr"&&e===!0&&(e=c),i=p.set.call(b,e));if(c=="value")p.isVal=k}else i=C(b,c,e,g,s);if((e!==
h||t==="removeAttr")&&q[w]&&q[w][c]){var m;m=t=="removeAttr"?!1:t=="prop"?!!e:!0;q[w][c].forEach(function(c){if(!c.only||(c.only=a=="prop")||c.only=="attr"&&a!="prop")c.call(b,e,m,f?"val":t,a)})}return i};A[a]=function(b,c,e){l[b]||(l[b]={});l[b][c]||(l[b][c]={});var g=l[b][c][a],s=function(b,g,d){return g&&g[b]?g[b]:d&&d[b]?d[b]:a=="prop"&&c=="value"?function(b){return e.isVal?B(this,c,b,!1,arguments.length===0):j[a](this,c,b)}:function(b){return j[a](this,c,b)}};l[b][c][a]=e;if(e.value===h){if(!e.set)e.set=
e.writeable?s("set",e,g):f.cfg.useStrict&&c=="prop"?function(){throw c+" is readonly on "+b;}:d.noop;if(!e.get)e.get=s("get",e,g)}["value","get","set"].forEach(function(b){e[b]&&(e["_sup"+b]=s(b,g))})}});var D=!d.browser.msie||parseInt(d.browser.version,10)>8,E=function(){var a=f.getPrototypeOf(k.createElement("foobar")),b=Object.prototype.hasOwnProperty;return function(c,e,g){var d=k.createElement(c),y=f.getPrototypeOf(d);if(D&&y&&a!==y&&(!d[e]||!b.call(d,e))){var h=d[e];g._supvalue=function(){return h&&
h.apply?h.apply(this,arguments):h};y[e]=g.value}else g._supvalue=function(){var b=v(this,"propValue");return b&&b[e]&&b[e].apply?b[e].apply(this,arguments):b&&b[e]},i.extendValue(c,e,g.value);g.value._supvalue=g._supvalue}}(),i=function(){var a={};f.addReady(function(b,c){var e={},h=function(a){e[a]||(e[a]=d(b.getElementsByTagName(a)),c[0]&&d.nodeName(c[0],a)&&(e[a]=e[a].add(c)))};d.each(a,function(b,a){h(b);!a||!a.forEach?f.warn("Error: with "+b+"-property. methods: "+a):a.forEach(function(a){e[b].each(a)})});
e=null});var b,c=d([]),e=function(c,e){a[c]?a[c].push(e):a[c]=[e];d.isDOMReady&&(b||d(k.getElementsByTagName(c))).each(e)};return{createTmpCache:function(a){d.isDOMReady&&(b=b||d(k.getElementsByTagName(a)));return b||c},flushTmpCache:function(){b=null},content:function(b,a){e(b,function(){d(this).filter("["+a+"]").attr(a,function(b,a){return a})})},createElement:function(b,a){e(b,a)},extendValue:function(b,a,c){e(b,function(){d(this).each(function(){v(this,"propValue",{})[a]=this[a];this[a]=c})})}}}(),
z=function(a,b){if(a.defaultValue===h)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};d.extend(f,{getID:function(){var a=(new Date).getTime();return function(b){var b=d(b),c=b.attr("id");c||(a++,c="elem-id-"+a,b.attr("id",c));return c}}(),createPropDefault:z,data:v,addShadowDom:function(a,b,c){c=c||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);var e=d.data(a,"_webshimsLib")||d.data(a,"_webshimsLib",{}),g=
d.data(b,"_webshimsLib")||d.data(b,"_webshimsLib",{});e.hasShadow=b;g.nativeElement=a;g.shadowData=e.shadowData={nativeElement:a,shadowElement:b};if(c.data)e.shadowData.data=c.data,g.shadowData.data=c.data},propTypes:{standard:function(a){z(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){z(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return a.attr.get.call(this)!=
null}}}},reflectProperties:function(a,b){typeof b=="string"&&(b=b.split(m));b.forEach(function(b){f.defineNodeNamesProperty(a,b,{prop:{set:function(a){d.attr(this,b,a)},get:function(){return d.attr(this,b)||""}}})})},defineNodeNameProperty:function(a,b,c){o[b]=!0;(c.get||c.value)&&f.warn(a+"["+b+"]old API");if(c.reflect)f.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(e){var g=c[e];g&&(g=e==="prop"?d.extend({writeable:!0},g):d.extend({},g,{writeable:!0}),A[e](a,
b,g),a!="*"&&f.cfg.extendNative&&e=="prop"&&g.value&&d.isFunction(g.value)&&E(a,b,g),c[e]=g)});c.initAttr&&i.content(a,b);return c},defineNodeNameProperties:function(a,b,c,e){for(var d in b)!e&&b[d].initAttr&&i.createTmpCache(a),c&&(b[d][c]?f.log("override: "+a+"["+d+"] for "+c):(b[d][c]={},["value","set","get"].forEach(function(a){a in b[d]&&(b[d][c][a]=b[d][a],delete b[d][a])}))),b[d]=f.defineNodeNameProperty(a,d,b[d]);e||i.flushTmpCache();return b},createElement:function(a,b,c){var e;d.isFunction(b)&&
(b={after:b});i.createTmpCache(a);b.before&&i.createElement(a,b.before);c&&(e=f.defineNodeNameProperties(a,c,!1,!0));b.after&&i.createElement(a,b.after);i.flushTmpCache();return e},onNodeNamesPropertyModify:function(a,b,c,e){typeof a=="string"&&(a=a.split(m));d.isFunction(c)&&(c={set:c});a.forEach(function(a){q[a]||(q[a]={});typeof b=="string"&&(b=b.split(m));c.initAttr&&i.createTmpCache(a);b.forEach(function(b){q[a][b]||(q[a][b]=[],o[b]=!0);if(c.set){if(e)c.set.only=e;q[a][b].push(c.set)}c.initAttr&&
i.content(a,b)});i.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,b,c){if(d.isFunction(c))c.set=c;f.defineNodeNamesProperty(a,b,{attr:{set:function(a){this.setAttribute(b,a);c.set&&c.set.call(this,!0)},get:function(){return this.getAttribute(b)==null?h:b}},removeAttr:{value:function(){this.removeAttribute(b);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr})},contentAttr:function(a,b,c){if(a.nodeName){if(c===h)return c=(a.attributes[b]||{}).value,c==null?
h:c;typeof c=="boolean"?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var a=[navigator.browserLanguage||navigator.language||""],b=d("html").attr("lang");b&&a.push(b);return function(b,e,g,h){if(b)if(!e||!g)b!==a[0]&&(a[0]=b,d(k).triggerHandler("webshimLocalizationReady",a));else{var i=(e=x[e].options)&&e.availabeLangs,m=function(a){return d.inArray(a,i)!==-1?(f.loader.loadScript(e.langSrc+a+".js",function(){b[a]?g(b[a]):d(function(){b[a]&&g(b[a])})}),!0):!1},
j;d.each(a,function(a,d){var f=d.split("-")[0];if(b[d]||b[f])return j=!0,g(b[d]||b[f]),!1;if(i&&e.langSrc&&(m(d)||m(f)))return j=!0,!1});!j&&h&&h()}return a}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){f[a]=function(a,d,g,h){typeof a=="string"&&(a=a.split(m));var i={};a.forEach(function(a){i[a]=f[b](a,d,g,h)});return i}});f.isReady("webshimLocalization",!0)});
(function(d,f){var n=parseFloat(d.browser.version,10);if(d.browser.msie&&n<10&&n>7||d.browser.mozilla&&n<2||d.browser.webkit&&n<535){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},h=function(d,f){d.getAttribute("role")||d.setAttribute("role",f)};d.webshims.addReady(function(n,m){d.each(k,function(f,j){for(var k=d(f,n).add(m.filter(f)),l=0,o=k.length;l<o;l++)h(k[l],j)});if(n===f){var j=f.getElementsByTagName("header")[0],o=f.getElementsByTagName("footer"),
l=o.length;j&&!d(j).closest("section, article")[0]&&h(j,"banner");l&&(j=o[l-1],d(j).closest("section, article")[0]||h(j,"contentinfo"))}})}})(jQuery,document);
