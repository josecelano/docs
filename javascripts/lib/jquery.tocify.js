/*! jQuery UI - v1.11.3 - 2015-02-12
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){/*!
   * jQuery UI Widget 1.11.3
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var t=0,r=Array.prototype.slice;e.cleanData=function(t){return function(r){var n,i,s;for(s=0;null!=(i=r[s]);s++)try{n=e._data(i,"events"),n&&n.remove&&e(i).triggerHandler("remove")}catch(a){}t(r)}}(e.cleanData),e.widget=function(t,r,n){var i,s,a,o,f={},c=t.split(".")[0];return t=t.split(".")[1],i=c+"-"+t,n||(n=r,r=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[c]=e[c]||{},s=e[c][t],a=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new a(e,t)},e.extend(a,s,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),o=new r,o.options=e.widget.extend({},o.options),e.each(n,function(t,n){return e.isFunction(n)?void(f[t]=function(){var e=function(){return r.prototype[t].apply(this,arguments)},i=function(e){return r.prototype[t].apply(this,e)};return function(){var t,r=this._super,s=this._superApply;return this._super=e,this._superApply=i,t=n.apply(this,arguments),this._super=r,this._superApply=s,t}}()):void(f[t]=n)}),a.prototype=e.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix||t:t},f,{constructor:a,namespace:c,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,r){var n=r.prototype;e.widget(n.namespace+"."+n.widgetName,a,r._proto)}),delete s._childConstructors):r._childConstructors.push(a),e.widget.bridge(t,a),a},e.widget.extend=function(t){for(var n,i,s=r.call(arguments,1),a=0,o=s.length;o>a;a++)for(n in s[a])i=s[a][n],s[a].hasOwnProperty(n)&&void 0!==i&&(t[n]=e.isPlainObject(i)?e.isPlainObject(t[n])?e.widget.extend({},t[n],i):e.widget.extend({},i):i);return t},e.widget.bridge=function(t,n){var i=n.prototype.widgetFullName||t;e.fn[t]=function(s){var a="string"==typeof s,o=r.call(arguments,1),f=this;return a?this.each(function(){var r,n=e.data(this,i);return"instance"===s?(f=n,!1):n?e.isFunction(n[s])&&"_"!==s.charAt(0)?(r=n[s].apply(n,o),r!==n&&void 0!==r?(f=r&&r.jquery?f.pushStack(r.get()):r,!1):void 0):e.error("no such method '"+s+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+s+"'")}):(o.length&&(s=e.widget.extend.apply(null,[s].concat(o))),this.each(function(){var t=e.data(this,i);t?(t.option(s||{}),t._init&&t._init()):e.data(this,i,new n(s,this))})),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(r,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),r),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,r){var n,i,s,a=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(a={},n=t.split("."),t=n.shift(),n.length){for(i=a[t]=e.widget.extend({},this.options[t]),s=0;s<n.length-1;s++)i[n[s]]=i[n[s]]||{},i=i[n[s]];if(t=n.pop(),1===arguments.length)return void 0===i[t]?null:i[t];i[t]=r}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];a[t]=r}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,r,n){var i,s=this;"boolean"!=typeof t&&(n=r,r=t,t=!1),n?(r=i=e(r),this.bindings=this.bindings.add(r)):(n=r,r=this.element,i=this.widget()),e.each(n,function(n,a){function o(){return t||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof a?s[a]:a).apply(s,arguments):void 0}"string"!=typeof a&&(o.guid=a.guid=a.guid||o.guid||e.guid++);var f=n.match(/^([\w:-]*)\s*(.*)$/),c=f[1]+s.eventNamespace,u=f[2];u?i.delegate(u,c,o):r.bind(c,o)})},_off:function(t,r){r=(r||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(r).undelegate(r),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function r(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(r,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,r,n){var i,s,a=this.options[t];if(n=n||{},r=e.Event(r),r.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),r.target=this.element[0],s=r.originalEvent)for(i in s)i in r||(r[i]=s[i]);return this.element.trigger(r,n),!(e.isFunction(a)&&a.apply(this.element[0],[r].concat(n))===!1||r.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,r){e.Widget.prototype["_"+t]=function(n,i,s){"string"==typeof i&&(i={effect:i});var a,o=i?i===!0||"number"==typeof i?r:i.effect||r:t;i=i||{},"number"==typeof i&&(i={duration:i}),a=!e.isEmptyObject(i),i.complete=s,i.delay&&n.delay(i.delay),a&&e.effects&&e.effects.effect[o]?n[t](i):o!==t&&n[o]?n[o](i.duration,i.easing,s):n.queue(function(r){e(this)[t](),s&&s.call(n[0]),r()})}});e.widget}),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,r,n){"use strict";var i="tocify",s="tocify-focus",a="tocify-hover",o="tocify-hide",f="tocify-header",c="."+f,u="tocify-subheader",d="."+u,h="tocify-item",l="."+h,p="tocify-extend-page",b="."+p;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var r=this;r.tocifyWrapper=e(".tocify-wrapper"),r.extendPageScroll=!0,r.items=[],r._generateToc(),r.cachedHeights=[],r.cachedAnchors=[],r._addCSSClasses(),r.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),r._setEventHandlers(),e(t).load(function(){r._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){r.extendPageScroll=!1},0)})})},_generateToc:function(){var t,r,n=this,s=n.options.ignoreSelector;return t=e(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),t.length?(n.element.addClass(i),void t.each(function(t){e(this).is(s)||(r=e("<ul/>",{id:f+t,"class":f}).append(n._nestElements(e(this),t)),n.element.append(r),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(n.options.selectors).length?e(this).filter(n.options.selectors).each(function(){e(this).is(s)||n._appendSubheaders.call(this,n,r)}):e(this).find(n.options.selectors).each(function(){e(this).is(s)||n._appendSubheaders.call(this,n,r)})}))})):void n.element.addClass(o)},_setActiveElement:function(e){var r=this,n=t.location.hash.substring(1),i=r.element.find("li[data-unique='"+n+"']");return n.length?(r.element.find("."+r.focusClass).removeClass(r.focusClass),i.addClass(r.focusClass),r.options.showAndHide&&i.click()):(r.element.find("."+r.focusClass).removeClass(r.focusClass),!n.length&&e&&r.options.highlightDefault&&r.element.find(l).first().addClass(r.focusClass)),r},_nestElements:function(t,r){var n,i,s;return n=e.grep(this.items,function(e){return e===t.text()}),this.items.push(n.length?t.text()+r:t.text()),s=this._generateHashValue(n,t,r),i=e("<li/>",{"class":h,"data-unique":s}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:s,"data-unique":s})),i},_generateHashValue:function(e,t,r){var n="",i=this.options.hashGenerator;if("pretty"===i){for(n=t.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof i?i(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(n+=""+r),n},_appendSubheaders:function(t,r){var n=e(this).index(t.options.selectors),i=e(t.options.selectors).eq(n-1),s=+e(this).prop("tagName").charAt(1),a=+i.prop("tagName").charAt(1);a>s?t.element.find(d+"[data-tag="+s+"]").last().append(t._nestElements(e(this),n)):s===a?r.find(l).last().after(t._nestElements(e(this),n)):r.find(l).last().after(e("<ul/>",{"class":u,"data-tag":s})).next(d).append(t._nestElements(e(this),n))},_setEventHandlers:function(){var i=this;this.element.on("click.tocify","li",function(){if(i.options.history&&(t.location.hash=e(this).attr("data-unique")),i.element.find("."+i.focusClass).removeClass(i.focusClass),e(this).addClass(i.focusClass),i.options.showAndHide){var r=e('li[data-unique="'+e(this).attr("data-unique")+'"]');i._triggerShow(r)}i._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(i.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==i.options.theme&&e(this).removeClass(i.hoverClass)}}),e(t).on("resize",function(){i.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var s,a,o,f,c=e(t).scrollTop(),u=e(t).height(),d=e(r).height(),h=e("body")[0].scrollHeight;if(i.options.extendPage&&(i.webkit&&c>=h-u-i.options.extendPageOffset||!i.webkit&&u+c>d-i.options.extendPageOffset)&&!e(b).length){if(a=e('div[data-unique="'+e(l).last().attr("data-unique")+'"]'),!a.length)return;o=a.offset().top,e(i.options.context).append(e("<div />",{"class":p,height:Math.abs(o-c)+"px","data-unique":p})),i.extendPageScroll&&(f=i.element.find("li.active"),i._scrollTo(e("div[data-unique="+f.attr("data-unique")+"]")))}setTimeout(function(){var a,o=null;0==i.cachedHeights.length&&i.calculateHeights();var f=e(t).scrollTop();if(i.cachedAnchors.each(function(e){return i.cachedHeights[e]-f<0?void(o=e):!1}),a=e(i.cachedAnchors[o]).attr("data-unique"),s=e('li[data-unique="'+a+'"]'),i.options.highlightOnScroll&&s.length&&!s.hasClass(i.focusClass)){i.element.find("."+i.focusClass).removeClass(i.focusClass),s.addClass(i.focusClass);var c=i.tocifyWrapper,u=e(s).closest(".tocify-header"),d=u.offset().top,h=c.offset().top,l=d-h;if(l>=e(t).height()){var p=l+c.scrollTop();c.scrollTop(p)}else 0>l&&c.scrollTop(0)}i.options.scrollHistory&&t.location.hash!=="#"+a&&a!==n&&(history.replaceState?history.replaceState({},"","#"+a):(scrollV=r.body.scrollTop,scrollH=r.body.scrollLeft,location.hash="#"+a,r.body.scrollTop=scrollV,r.body.scrollLeft=scrollH)),i.options.showAndHideOnScroll&&i.options.showAndHide&&i._triggerShow(s,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var r=e(t.options.context).find("div[data-unique]");r.each(function(r){var n=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[r]=n}),t.cachedAnchors=r},show:function(t){var r=this;if(!t.is(":visible"))switch(t.find(d).length||t.parent().is(c)||t.parent().is(":visible")?t.children(d).length||t.parent().is(c)||(t=t.closest(d)):t=t.parents(d).add(t),r.options.showEffect){case"none":t.show();break;case"show":t.show(r.options.showEffectSpeed);break;case"slideDown":t.slideDown(r.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(r.options.showEffectSpeed);break;default:t.show()}return r.hide(e(d).not(t.parent().is(c)?t:t.closest(c).find(d).not(t.siblings()))),r},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var r=this;return e.parent().is(c)||e.next().is(d)?r.show(e.next(d),t):e.parent().is(d)&&r.show(e.parent(),t),r},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(c+","+d).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=s,this.hoverClass=a),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var r=this,n=r.options.smoothScroll||0,i=r.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(i)?i.call():i)+"px"},{duration:n})}),r}})});