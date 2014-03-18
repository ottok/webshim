webshims.register("mediacontrols",function(a,b,c,d,e){"use strict";function f(a,b){var c,d,e;return{get:function(){return e?void 0:a.apply(this,arguments)},set:function(){clearTimeout(c),clearTimeout(d);var a=this,f=arguments;e=!0,c=setTimeout(function(){b.apply(a,f),d=setTimeout(function(){e=!1},30)},0)}}}var g="pseudoClasses",h={play:1,playing:1},i={pause:1,ended:1},j=function(){b.loader.loadList(["range-ui"])},k=function(a){j(),b.ready("range-ui",a)},l='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',m='<div  class="{%class%}"></div>',n='<div class="{%class%}"></div>',o=a.jme.classNS;a.jme.defineProp("controlbar",{set:function(b,c){c=!!c;var d,e=a.jme.data(b),f=a("div.jme-mediaoverlay, div.jme-controlbar",e.player),g=a.jme.plugins["media-controls"],h="";return c&&!f[0]?e._controlbar?e._controlbar.appendTo(e.player):(e.media.prop("controls",!1),a.each(g.pluginOrder,function(b,c){var d=a.jme.plugins[c];d&&d.structure?h+=d.structure.replace("{%class%}",o+c).replace("{%text%}",d.text||""):c&&(h+=c)}),e._controlbar=a(g.barStructure),f=e._controlbar.find("div.jme-cb-box").addClass(o+"media-controls"),d=e._controlbar.filter(".jme-media-overlay").addClass(o+"play-pause"),d=d.add(f),d=d.add(a(h).appendTo(f)),e._controlbar.appendTo(e.player),e.player.jmeFn("addControls",d)):c||f.detach(),f=null,d=null,c}}),a.jme.defineMethod("updateControlbar",function(){var b=a("."+a.jme.classNS+"time-slider",this);if(b[0]&&"absolute"!==b.css("position")){var c,d=0;c=Math.floor(b.parent().width())-.2,b.siblings().each(function(){this!==b[0]&&"absolute"!==a.css(this,"position")&&"none"!==a.css(this,"display")&&(d+=Math.ceil(a(this).outerWidth(!0))+.1)}),b.width(Math.floor(c-d-Math.ceil(b.outerWidth(!0)-b.width())-.3))}}),a.jme.registerPlugin("media-controls",{options:{calculateTimerange:!1},pluginOrder:['<div class="play-pause-container">',"play-pause","</div>",'<div class="currenttime-container">',"currenttime-display","</div>",'<div class="progress-container">',"time-slider","</div>",'<div class="duration-container">',"duration-display","</div>",'<div class="mute-container">',"mute-unmute","</div>",'<div class="volume-container">',"volume-slider","</div>",'<div class="subtitle-container">','<div class="subtitle-controls">',"captions","</div>","</div>",'<div class="fullscreen-container">',"fullscreen","</div>"],barStructure:'<div class="jme-media-overlay"></div><div class="jme-controlbar" tabindex="-1"><div class="jme-cb-box"></div></div>',_create:function(b,d,e,f){var g,h=function(){clearTimeout(g),b.jmeFn("updateControlbar"),g=setTimeout(function(){b.jmeFn("updateControlbar")},9)};f.calculateTimerange&&(setTimeout(function(){d.on("loadedmetadata volumechange play pause ended emptied",h),e.on("updatetimeformat controlsadded controlschanged playerdimensionchange",h),a(c).on("resize emchange",h)},1),h())}}),a.jme.registerPlugin("play-pause",{pseudoClasses:{play:"state-paused",pause:"state-playing"},structure:l,text:"play / pause",_create:function(b,c){var d=a.jme.getButtonText(b,[this[g].play,this[g].pause]);c.on("play playing ended pause updateJMEState",function(a){var b=a.type;b=h[b]?1:i[b]?0:c.jmeProp("isPlaying")?1:0,d(b)}).triggerHandler("updateJMEState"),b.on(b.is("select")?"change":"click",function(a){c.jmeFn("togglePlay"),a.stopPropagation()})}}),a.jme.registerPlugin("mute-unmute",{pseudoClasses:{mute:"state-mute",unmute:"state-unmute"},structure:l,text:"mute / unmute",_create:function(b,c){var d=a.jme.getButtonText(b,[this[g].mute,this[g].unmute]);c.on("volumechange updateJMEState",function(){d(c.prop("muted")?1:0)}).triggerHandler("updateJMEState"),b.on(b.is("select")?"change":"click",function(a){c.prop("muted",!c.prop("muted")),a.stopPropagation()})}}),a.jme.registerPlugin("volume-slider",{structure:n,_create:function(a,b){j();var c=function(){var c,d;d=f(function(){var a=b.prop("volume");a!==e&&c.value(a)},function(){b.prop({muted:!1,volume:c.options.value})}),c=a.rangeUI({min:0,max:1,step:"any",input:function(){d.set()},baseClass:"media-range"}).data("rangeUi"),b.on("volumechange",d.get)};k(c)}}),a.jme.registerPlugin("time-slider",{structure:n,pseudoClasses:{no:"no-duration"},options:{format:["mm","ss"]},_create:function(b,c,d){j();var e=this,h=function(){var h,i,j,k,l=a.jme.classNS+"has-duration",m=c.prop("duration");h=f(function(){var a=c.prop("currentTime");if(!isNaN(a))try{j.value(a)}catch(b){}},function(){try{c.prop("currentTime",j.options.value).triggerHandler("timechanged",[j.options.value])}catch(a){}}),i=function(){m=c.prop("duration"),l=m&&isFinite(m)&&!isNaN(m),l?(j.disabled(!1),j.max(m),d.removeClass(e[g].no)):(j.disabled(!0),j.max(Number.MAX_VALUE),d.addClass(e[g].no))},j=b.rangeUI({min:0,value:c.prop("currentTime")||0,step:"any",input:function(){h.set()},textValue:function(a){return c.jmeFn("formatTime",a)},baseClass:"media-range"}).data("rangeUi"),k=a('<span class="'+a.jme.classNS+'time-select" />').appendTo(b),b.on({mouseenter:function(d){if(l){var e=(b.offset()||{left:0}).left,f=b.innerWidth(),g=function(a){var b=(a-e)/f*100;k.html(c.jmeFn("formatTime",m*b/100)).css({left:b+"%"})};g(d.pageX),k.addClass(a.jme.classNS+"show-time-select"),b.off(".jmetimeselect").on("mousemove.jmetimeselect",function(a){g(a.pageX)})}},mouseleave:function(){k.removeClass(a.jme.classNS+"show-time-select"),b.off(".jmetimeselect")}}),c.on({timeupdate:h.get,emptied:function(){i(),j.value(0)},durationchange:i}),d.jmeFn("addControls",a('<div class="'+a.jme.classNS+'buffer-progress" />').prependTo(b)),i()};k(h)}}),a.jme.defineMethod("concerningRange",function(b,c){var d=this,e={start:0,end:0};if(b||(b="buffered"),b=a.prop(d,b),null==c&&(c=a.prop(d,"currentTime")),!(b&&"length"in b))return e;for(var f=0,g=b.length;g>f&&(e.start=b.start(f),e.end=b.end(f),!(e.start<=c&&e.end>=c));f++);return e}),a.jme.defineProp("progress",{get:function(b){var c=a.jme.data(b);if(!c.media)return 0;var d=c.media.jmeFn("concerningRange").end/c.media.prop("duration")*100;return d>99.4&&(d=100),d||0},readonly:!0}),a.jme.registerPlugin("buffer-progress",{_create:function(b,c,d,e){var f=a('<div class="'+a.jme.classNS+'buffer-progress-indicator" />').appendTo(b),g=function(){var a=c.jmeProp("progress");e.progress!==a&&(e.progress=a,f.css("width",a+"%"))};c.on({progress:g,emptied:function(){f.css("width",0),e.progress=0},playing:g}),g()}});var p={hh:6e4,mm:60,ss:1,ms:.001},q=function(b,c){var d;c||(c=["mm","ss"]),null==b&&(d=a.jme.data(this),b=a.prop(d.media,"duration")),b||(b=0);for(var e,f=[],g=0,h=c.length;h>g;g++)"ms"==c[g]&&g==h-1?e=Math.round(b/p[c[g]]/10):(e=parseInt(b/p[c[g]],10),b%=p[c[g]]),10>e&&(e="0"+e),f.push(e);return f.join(":")};a.jme.defineMethod("formatTime",q),a.jme.defineProp("format",{set:function(b,c){a.isArray(c)||(c=c.split(":"));var d=a.jme.data(b);return d.format=c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("duration-display",{structure:m,options:{format:"mm:ss"},_create:function(a,b,c,d){"string"==typeof d.format&&(d.format=d.format.split(":"));var e=function(){a.html(q(b.prop("duration"),d.format))};b.on("durationchange emptied",e),a.on("updatetimeformat",e).jmeProp("format",d.format)}}),a.jme.defineProp("countdown",{set:function(b,c){var d=a.jme.data(b);return d.countdown=!!c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("currenttime-display",{structure:m,options:{format:"mm:ss",countdown:!1},_create:function(a,b,c,d){"string"==typeof d.format&&(d.format=d.format.split(":"));var e=function(){var c=b.prop("currentTime");d.countdown&&(c=(b.prop("duration")||0)-c,.7>c&&(c=0)),a.html(q(c,d.format))};b.on("timeupdate emptied durationchange",e),a.on("updatetimeformat",e).jmeProp("format",d.format)}}),a.jme.registerPlugin("poster-display",{structure:"<div />",options:{},_create:function(b,c){var d=function(){var d=c.prop("poster");d?b.html('<span></span><img src="'+d+'" class="'+a.jme.classNS+'poster-image" />'):b.empty()};c.on("emptied",d),d()}}),a.jme.fullscreen=function(){var b,d,e=document.documentElement,f={supportsFullScreen:Modernizr.prefixed("fullscreenEnabled",document,!1)||Modernizr.prefixed("fullScreenEnabled",document,!1),isFullScreen:function(){return!1},requestFullScreen:function(c){var e;b=[],a(c).parentsUntil("body").each(function(){var c,d=a.css(this,"position"),f=this.scrollLeft,g=this.scrollTop;e={elemStyle:this.style,elem:this},"static"!==d&&(c=!0,e.pos=e.elemStyle.position,this.style.position="static"),f&&(c=!0,e.left=f),g&&(c=!0,e.top=g),c&&b.push(e)}),d=!1;try{d={elemStyle:frameElement.style,elem:frameElement,css:{}},d.css.position=d.elemStyle.position,d.elemStyle.position="fixed",a.each(["top","left","right","bottom"],function(a,b){d.css[b]=d.elemStyle[b],d.elemStyle[b]="0px"}),a.each(["height","width"],function(a,b){d.css[b]=d.elemStyle[b],d.elemStyle[b]="100%"})}catch(f){d=!1}e=null},cancelFullScreen:function(){b&&(a.each(b,function(a,b){"pos"in b&&(b.elemStyle.position=b.pos),b.left&&(b.elem.scrollLeft=b.left),b.top&&(b.elem.scrollTop=b.top),b=null}),b=[]),d&&(a.each(d.css,function(a,b){d.elemStyle[a]=b}),d=!1)},eventName:"fullscreenchange",exitName:"exitFullscreen",requestName:"requestFullscreen",elementName:"fullscreenElement",enabledName:""};return f.cancelFullWindow=f.cancelFullScreen,f.requestFullWindow=f.requestFullScreen,f.supportsFullScreen&&(f.enabledName=f.supportsFullScreen,f.exitName=Modernizr.prefixed("exitFullscreen",document,!1)||Modernizr.prefixed("cancelFullScreen",document,!1),f.elementName=Modernizr.prefixed("fullscreenElement",document,!1)||Modernizr.prefixed("fullScreenElement",document,!1),f.supportsFullScreen=!!f.supportsFullScreen,("fullscreenElement"!=f.elementName||"exitFullscreen"!=f.exitName||"fullscreenEnabled"!=f.enabledName)&&a.each(Modernizr._domPrefixes,function(a,b){var c=b+"RequestFullscreen";return c in e||(c=b+"RequestFullScreen")&&c in e?(f.eventName=b+"fullscreenchange",f.requestName=c,!1):void 0}),f.isFullScreen=function(){return document[f.elementName]},f.requestFullScreen=function(a){return a[f.requestName]()},f.cancelFullScreen=function(){return document[f.exitName]()}),c.Modernizr&&"fullscreen"in Modernizr||a("html").addClass(f.supportsFullScreen?"fullscreen":"no-fullscreen"),c.parent!=c&&!function(){try{var b=c.frameElement;f.supportsFullScreen&&("allowfullscreen"in b&&!b.allowfullscreen?b.allowfullscreen=!0:(null==b.getAttribute("webkitallowfullscreen")&&b.setAttribute("webkitallowfullscreen",""),null==b.getAttribute("allowfullscreen")&&b.setAttribute("allowfullscreen","allowfullscreen")))}catch(d){f.supportsFullScreen||a("html").addClass("no-fullwindow")}}(),f}(),a.jme.defineProp("fullscreen",{set:function(b,d){var e=a.jme.data(b);if(!(e&&e.player||a(b).hasClass(a.jme.classNS+"player-fullscreen")))return"noDataSet";if(d){if(e.player.hasClass(a.jme.classNS+"player-fullscreen"))return"noDataSet";if(e.scrollPos={top:a(c).scrollTop(),left:a(c).scrollLeft()},a(document).off(".jmefullscreen").on("keydown.jmefullscreen",function(a){return 27==a.keyCode?(e.player.jmeProp("fullscreen",!1),!1):32!==a.keyCode||"form"in a.target?void 0:(e.media.jmeFn("togglePlay"),!1)}),"fullwindow"==d)a.jme.fullscreen.requestFullWindow(e.player[0]);else try{a.jme.fullscreen.requestFullScreen(e.player[0])}catch(f){}a("html").addClass(a.jme.classNS+"has-media-fullscreen"),e.player.addClass(a.jme.classNS+"player-fullscreen"),e.media.addClass(a.jme.classNS+"media-fullscreen"),a("button.play-pause",e.player).focus(),a.jme.fullscreen.supportsFullScreen&&a(document).on(a.jme.fullscreen.eventName+".jmefullscreen",function(){var c=a.jme.fullscreen.isFullScreen();c&&b==c?a(b).triggerHandler("playerdimensionchange",["fullscreen"]):e.player.jmeProp("fullscreen",!1)}),e.player.triggerHandler("playerdimensionchange",["fullwindow"])}else{if(e.player&&!e.player.hasClass(a.jme.classNS+"player-fullscreen"))return"noDataSet";if(a(document).off(".jmefullscreen"),a("html").removeClass(a.jme.classNS+"has-media-fullscreen"),e.player&&e.media&&(e.player.removeClass(a.jme.classNS+"player-fullscreen"),e.media.removeClass(a.jme.classNS+"media-fullscreen")),a.jme.fullscreen.isFullScreen())try{a.jme.fullscreen.cancelFullScreen()}catch(f){}else a.jme.fullscreen.cancelFullWindow();e.player&&e.player.triggerHandler("playerdimensionchange"),e.scrollPos&&(a(c).scrollTop(e.scrollPos.top),a(c).scrollLeft(e.scrollPos.left),delete e.scrollPos)}return"noDataSet"},get:function(b){var c=a.jme.data(b);if(c&&c.player){var d=c.player.hasClass(a.jme.classNS+"player-fullscreen");return d?a.jme.fullscreen.isFullScreen()||"fullwindow":!1}}}),a.jme.defineProp("autoplayfs"),a.jme.registerPlugin("fullscreen",{pseudoClasses:{enter:"state-enterfullscreen",exit:"state-exitfullscreen"},options:{fullscreen:!0,autoplayfs:!1},structure:l,text:"enter fullscreen / exit fullscreen",_create:function(b,c,d){var e=a.jme.getButtonText(b,[this[g].enter,this[g].exit]),f=function(){e(d.hasClass(a.jme.classNS+"player-fullscreen")?1:0)},h=this.options,i=function(){a(d.data("jme").controlElements).filter(".jme-media-overlay").off(".dblfullscreen").on("dblclick.dblfullscreen",function(){d.jmeProp("fullscreen",!d.jmeProp("fullscreen"))})};d.on("controlsadded",i),d.on("playerdimensionchange",f),b.on(b.is("select")?"change":"click",function(){var b=d.hasClass(a.jme.classNS+"player-fullscreen")?!1:h.fullscreen;d.jmeProp("fullscreen",b),b&&h.autoplayfs&&c.jmeFn("play")}),i(),f()}}),a.jme.ButtonMenu=function(b,c,d){this.button=a(b).attr({"aria-haspopup":"true"}),this.clickHandler=d,this.toggle=a.proxy(this,"toggle"),this.keyIndex=a.proxy(this,"keyIndex"),this._buttonClick=a.proxy(this,"_buttonClick"),this.addMenu(c),this._closeFocusOut(),this.button.on("click",this.toggle)},a.jme.ButtonMenu.prototype={addMenu:function(b){this.menu&&this.menu.remove(),this.menu=a(b),this.buttons=a("button",this.menu),this.menu.insertAfter(this.button),this.menu.on("keydown",this.keyIndex).delegate("button","click",this._buttonClick)},_closeFocusOut:function(){var a,b=this,c=function(){clearTimeout(a),setTimeout(function(){clearTimeout(a)},9)};this.menu.parent().on("focusin",c).on("mousedown",c).on("focusout",function(){a=setTimeout(function(){b.hide()},40)})},_buttonClick:function(a){this.clickHandler(this.buttons.index(a.currentTarget),a.currentTarget),this.hide()},keyIndex:function(a){var b=40==a.keyCode?1:38==a.keyCode?-1:0;if(b){var c=this.buttons.not(":disabled"),d=c.filter(":focus");d=c[c.index(d)+b]||c.filter(b>0?":first":":last"),d.focus(),a.preventDefault()}},show:function(){if(!this.isVisible){var b=this.buttons.not(":disabled");this.isVisible=!0,this.menu.addClass("visible-menu");try{this.activeElement=document.activeElement||this.button[0]}catch(c){this.activeElement=this.button[0]}setTimeout(function(){a(b.filter('[aria-checked="true"]')[0]||b[0]).focus()},60)}},toggle:function(){this[this.isVisible?"hide":"show"]()},hide:function(){if(this.isVisible){if(this.isVisible=!1,this.menu.removeClass("visible-menu"),this.activeElement)try{this.activeElement.focus()}catch(a){}this.activeElement=!1}}};var r={subtitles:1,caption:1},s=function(b){var c=a.map(b,function(a){var b="caption"==a.kind?"caption-type":"subtitle-type",c=a.language;return c=c?' <span class="track-lang">'+c+"</span>":"",'<li class="'+b+'" role="presentation"><button role="menuitemcheckbox">'+a.label+c+"</button></li>"});return"<div><ul>"+c.join("")+"</ul></div>"};a.jme.registerPlugin("captions",{pseudoClasses:{menu:"subtitle-menu"},structure:l,text:"subtitles",_create:function(c,d,e){var f=this,h=d.find("track"),i=a(c).clone().attr({role:"checkbox"}).insertBefore(c);e.attr("data-tracks",h.length>1?"many":h.length),b.ready("track",function(){function b(b){var e;k?k.addMenu(b):(e=function(b,c){"true"==a.attr(c,"aria-checked")?m[b].mode="disabled":a.each(m,function(a,c){c.mode=a==b?"showing":"disabled"}),d.prop("textTracks"),h()},k=new a.jme.ButtonMenu(c,b,e),i.on("click",function(){return e(0,this),!1})),h()}function h(){a("button",k.menu).each(function(b){var c="showing"==m[b].mode?"true":"false";b||i.attr("aria-checked",c),a.attr(this,"aria-checked",c)})}function j(){m=[],a.each(n,function(a,b){r[b.kind]&&3!=b.readyState&&m.push(b)}),e.attr("data-tracks",m.length>1?"many":m.length),m.length?(b('<div class="'+f[g].menu+'" >'+s(m)+"</div>"),a("span.jme-text, +label span.jme-text",i).text((m[0].label||" ")+(m[0].lang||"")),(!e.hasClass(f[g].hasTrack)||e.hasClass(f[g].noTrack))&&(c.prop("disabled",!1),e.triggerHandler("controlschanged"))):(!e.hasClass(f[g].noTrack)||e.hasClass(f[g].hasTrack))&&(c.prop("disabled",!0),e.triggerHandler("controlschanged"))}var k,l,m=[],n=d.prop("textTracks"),o=function(){var a,b;return function(c){clearTimeout(a),clearTimeout(b),"updatesubtitlestate"==c.type&&(b=setTimeout(function(){d.trigger("updatetracklist")},0)),a=setTimeout(j,19)}}();n?(l=function(){var a;return function(){clearTimeout(a),a=setTimeout(h,20)}}(),j(),a([n]).on("addtrack removetrack",o).on("change",l),e.on("updatesubtitlestate",o),d.on("updatetrackdisplay",l)):(n=[],j())})}}),a(".mediaplayer").each(function(){(a.data(this,"jme")||{}).controlbar&&a(this).jmeProp("controlbar",!0)})});