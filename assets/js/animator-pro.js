/*!
 * tram.js v0.8.1-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
 /*!
   * P.js
   * A lightweight class system.  It's just prototypes!
   * http:// github.com/jayferd/pjs
   * MIT license
   */
window.tram=function(t){function i(t,i){var e=new Z.Bare;return e.init(t,i)}function e(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function n(t){var i=parseInt(t.slice(1),16),e=i>>16&255,n=i>>8&255,r=255&i;return[e,n,r]}function r(t,i,e){return"#"+(1<<24|t<<16|i<<8|e).toString(16).slice(1)}function s(){}function a(t,i){_("Type warning: Expected: ["+t+"] Got: ["+typeof i+"] "+i)}function o(t,i,e){_("Units do not match ["+t+"]: "+i+", "+e)}function u(t,i,e){if(void 0!==i&&(e=i),void 0===t)return e;var n=e;return K.test(t)||!V.test(t)?n=parseInt(t,10):V.test(t)&&(n=1e3*parseFloat(t)),0>n&&(n=0),n===n?n:e}function c(t){for(var i=-1,e=t?t.length:0,n=[];++i<e;){var r=t[i];r&&n.push(r)}return n}var h=function(t,i,e){function n(t){return"object"==typeof t}function r(t){return"function"==typeof t}function s(){}function a(o,u){function c(){var t=new h;return r(t.init)&&t.init.apply(t,arguments),t}function h(){}u===e&&(u=o,o=Object),c.Bare=h;var l,f=s[t]=o[t],d=h[t]=c[t]=new s;return d.constructor=c,c.mixin=function(i){return h[t]=c[t]=a(c,i)[t],c},c.open=function(t){if(l={},r(t)?l=t.call(c,d,f,c,o):n(t)&&(l=t),n(l))for(var e in l)i.call(l,e)&&(d[e]=l[e]);return r(d.init)||(d.init=o),c},c.open(u)}return a}("prototype",{}.hasOwnProperty),l={ease:["ease",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(-2.75*s*r+11*r*r+-15.5*s+8*r+.25*t)}],"ease-in":["ease-in",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(-1*s*r+3*r*r+-3*s+2*r)}],"ease-out":["ease-out",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(.3*s*r+-1.6*r*r+2.2*s+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(2*s*r+-5*r*r+2*s+2*r)}],linear:["linear",function(t,i,e,n){return e*t/n+i}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,i,e,n){return e*(t/=n)*t+i}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,i,e,n){return-e*(t/=n)*(t-2)+i}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,i,e,n){return(t/=n/2)<1?e/2*t*t+i:-e/2*(--t*(t-2)-1)+i}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,i,e,n){return e*(t/=n)*t*t+i}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,i,e,n){return e*((t=t/n-1)*t*t+1)+i}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,i,e,n){return(t/=n/2)<1?e/2*t*t*t+i:e/2*((t-=2)*t*t+2)+i}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,i,e,n){return e*(t/=n)*t*t*t+i}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,i,e,n){return-e*((t=t/n-1)*t*t*t-1)+i}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,i,e,n){return(t/=n/2)<1?e/2*t*t*t*t+i:-e/2*((t-=2)*t*t*t-2)+i}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,i,e,n){return e*(t/=n)*t*t*t*t+i}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,i,e,n){return e*((t=t/n-1)*t*t*t*t+1)+i}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,i,e,n){return(t/=n/2)<1?e/2*t*t*t*t*t+i:e/2*((t-=2)*t*t*t*t+2)+i}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,i,e,n){return-e*Math.cos(t/n*(Math.PI/2))+e+i}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,i,e,n){return e*Math.sin(t/n*(Math.PI/2))+i}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,i,e,n){return-e/2*(Math.cos(Math.PI*t/n)-1)+i}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,i,e,n){return 0===t?i:e*Math.pow(2,10*(t/n-1))+i}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,i,e,n){return t===n?i+e:e*(-Math.pow(2,-10*t/n)+1)+i}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,i,e,n){return 0===t?i:t===n?i+e:(t/=n/2)<1?e/2*Math.pow(2,10*(t-1))+i:e/2*(-Math.pow(2,-10*--t)+2)+i}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,i,e,n){return-e*(Math.sqrt(1-(t/=n)*t)-1)+i}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,i,e,n){return e*Math.sqrt(1-(t=t/n-1)*t)+i}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,i,e,n){return(t/=n/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+i:e/2*(Math.sqrt(1-(t-=2)*t)+1)+i}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),e*(t/=n)*t*((r+1)*t-r)+i}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),e*((t=t/n-1)*t*((r+1)*t+r)+1)+i}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),(t/=n/2)<1?e/2*t*t*(((r*=1.525)+1)*t-r)+i:e/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+i}]},f={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,m="bkwld-tram",b=/[\-\.0-9]/g,v=/[A-Z]/,g="number",y=/^(rgb|#)/,w=/(em|cm|mm|in|pt|pc|px)$/,k=/(em|cm|mm|in|pt|pc|px|%)$/,x=/(deg|rad|turn)$/,z="unitless",q=/(all|none) 0s ease 0s/,$=/^(width|height)$/,M=" ",A=d.createElement("a"),B=["Webkit","Moz","O","ms"],R=["-webkit-","-moz-","-o-","-ms-"],F=function(t){if(t in A.style)return{dom:t,css:t};var i,e,n="",r=t.split("-");for(i=0;i<r.length;i++)n+=r[i].charAt(0).toUpperCase()+r[i].slice(1);for(i=0;i<B.length;i++)if(e=B[i]+n,e in A.style)return{dom:e,css:R[i]+t}},S=i.support={bind:Function.prototype.bind,transform:F("transform"),transition:F("transition"),backface:F("backface-visibility"),timing:F("transition-timing-function")};if(S.transition){var j=S.timing.dom;if(A.style[j]=l["ease-in-back"][0],!A.style[j])for(var I in f)l[I][0]=f[I]}var G=i.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&S.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),T=i.now=function(){var t=p.performance,i=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return i&&S.bind?i.bind(t):Date.now||function(){return+new Date}}(),U=h(function(i){function n(t,i){var e=c((""+t).split(M)),n=e[0];i=i||{};var r=W[n];if(!r)return _("Unsupported property: "+n);if(!i.weak||!this.props[n]){var s=r[0],a=this.props[n];return a||(a=this.props[n]=new s.Bare),a.init(this.$el,e,r,i),a}}function r(t,i,e){if(t){var r=typeof t;if(i||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==r&&i)return this.timer=new Y({duration:t,context:this,complete:o}),void(this.active=!0);if("string"==r&&i){switch(t){case"hide":d.call(this);break;case"stop":h.call(this);break;case"redraw":p.call(this);break;default:n.call(this,t,e&&e[1])}return o.call(this)}if("function"==r)return void t.call(this,this);if("object"==r){var s=0;y.call(this,t,function(t,i){t.span>s&&(s=t.span),t.stop(),t.animate(i)},function(t){"wait"in t&&(s=u(t.wait,0))}),g.call(this),s>0&&(this.timer=new Y({duration:s,context:this}),this.active=!0,i&&(this.timer.complete=o));var a=this,c=!1,l={};G(function(){y.call(a,t,function(t){t.active&&(c=!0,l[t.name]=t.nextStyle)}),c&&a.$el.css(l)})}}}function s(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new Y({duration:t,context:this,complete:o}),this.active=!0)}function a(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=o)):_("No active transition timer. Use start() or wait() before then().")}function o(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();r.call(this,t.options,!0,t.args)}}function h(t){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var i;"string"==typeof t?(i={},i[t]=1):i="object"==typeof t&&null!=t?t:this.props,y.call(this,i,w),g.call(this)}function l(t){h.call(this,t),y.call(this,t,k,x)}function f(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}function d(){h.call(this),this.el.style.display="none"}function p(){this.el.offsetHeight}function b(){h.call(this),t.removeData(this.el,m),this.$el=this.el=null}function g(){var t,i,e=[];this.upstream&&e.push(this.upstream);for(t in this.props)i=this.props[t],i.active&&e.push(i.string);e=e.join(","),this.style!==e&&(this.style=e,this.el.style[S.transition.dom]=e)}function y(t,i,r){var s,a,o,u,c=i!==w,h={};for(s in t)o=t[s],s in J?(h.transform||(h.transform={}),h.transform[s]=o):(v.test(s)&&(s=e(s)),s in W?h[s]=o:(u||(u={}),u[s]=o));for(s in h){if(o=h[s],a=this.props[s],!a){if(!c)continue;a=n.call(this,s)}i.call(this,a,o)}r&&u&&r.call(this,u)}function w(t){t.stop()}function k(t,i){t.set(i)}function x(t){this.$el.css(t)}function z(t,e){i[t]=function(){return this.children?$.call(this,e,arguments):(this.el&&e.apply(this,arguments),this)}}function $(t,i){var e,n=this.children.length;for(e=0;n>e;e++)t.apply(this.children[e],i);return this}i.init=function(i){if(this.$el=t(i),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,E.keepInherited&&!E.fallback){var e=L(this.el,"transition");e&&!q.test(e)&&(this.upstream=e)}S.backface&&E.hideBackface&&C(this.el,S.backface.css,"hidden")},z("add",n),z("start",r),z("wait",s),z("then",a),z("next",o),z("stop",h),z("set",l),z("show",f),z("hide",d),z("redraw",p),z("destroy",b)}),Z=h(U,function(i){function e(i,e){var n=t.data(i,m)||t.data(i,m,new U.Bare);return n.el||n.init(i),e?n.start(e):n}i.init=function(i,n){var r=t(i);if(!r.length)return this;if(1===r.length)return e(r[0],n);var s=[];return r.each(function(t,i){s.push(e(i,n))}),this.children=s,this}}),H=h(function(t){function i(){var t=this.get();this.update("auto");var i=this.get();return this.update(t),i}function e(t,i,e){return void 0!==i&&(e=i),t in l?t:e}function n(t){var i=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(i?r(i[1],i[2],i[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var s={duration:500,ease:"ease",delay:0};t.init=function(t,i,n,r){this.$el=t,this.el=t[0];var a=i[0];n[2]&&(a=n[2]),Q[a]&&(a=Q[a]),this.name=a,this.type=n[1],this.duration=u(i[1],this.duration,s.duration),this.ease=e(i[2],this.ease,s.ease),this.delay=u(i[3],this.delay,s.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=$.test(this.name),this.unit=r.unit||this.unit||E.defaultUnit,this.angle=r.angle||this.angle||E.defaultAngle,E.fallback||r.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+M+this.duration+"ms"+("ease"!=this.ease?M+l[this.ease][0]:"")+(this.delay?M+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=i.call(this))),this.nextStyle=t},t.fallback=function(t){var e=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==e&&(e=this.convert(this.get(),this.type)),"auto"==t&&(t=i.call(this))),this.tween=new X({from:e,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return L(this.el,this.name)},t.update=function(t){C(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,C(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,i){if("auto"==t&&this.auto)return t;var e,r="number"==typeof t,s="string"==typeof t;switch(i){case g:if(r)return t;if(s&&""===t.replace(b,""))return+t;e="number(unitless)";break;case y:if(s){if(""===t&&this.original)return this.original;if(i.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}e="hex or rgb string";break;case w:if(r)return t+this.unit;if(s&&i.test(t))return t;e="number(px) or string(unit)";break;case k:if(r)return t+this.unit;if(s&&i.test(t))return t;e="number(px) or string(unit or %)";break;case x:if(r)return t+this.angle;if(s&&i.test(t))return t;e="number(deg) or string(angle)";break;case z:if(r)return t;if(s&&k.test(t))return t;e="number(unitless) or string(unit or %)"}return a(e,t),t},t.redraw=function(){this.el.offsetHeight}}),N=h(H,function(t,i){t.init=function(){i.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),y))}}),O=h(H,function(t,i){t.init=function(){i.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),P=h(H,function(t,i){function e(t,i){var e,n,r,s,a;for(e in t)s=J[e],r=s[0],n=s[1]||e,a=this.convert(t[e],r),i.call(this,n,a,r)}t.init=function(){i.init.apply(this,arguments),this.current||(this.current={},J.perspective&&E.perspective&&(this.current.perspective=E.perspective,C(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){e.call(this,t,function(t,i){this.current[t]=i}),C(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var i=this.values(t);this.tween=new D({current:this.current,values:i,duration:this.duration,delay:this.delay,ease:this.ease});var e,n={};for(e in this.current)n[e]=e in i?i[e]:this.current[e];this.active=!0,this.nextStyle=this.style(n)},t.fallback=function(t){var i=this.values(t);this.tween=new D({current:this.current,values:i,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){C(this.el,this.name,this.style(this.current))},t.style=function(t){var i,e="";for(i in t)e+=i+"("+t[i]+") ";return e},t.values=function(t){var i,n={};return e.call(this,t,function(t,e,r){n[t]=e,void 0===this.current[t]&&(i=0,~t.indexOf("scale")&&(i=1),this.current[t]=this.convert(i,r))}),n}}),X=h(function(i){function e(t){1===d.push(t)&&G(a)}function a(){var t,i,e,n=d.length;if(n)for(G(a),i=T(),t=n;t--;)e=d[t],e&&e.render(i)}function u(i){var e,n=t.inArray(i,d);n>=0&&(e=d.slice(n+1),d.length=n,e.length&&(d=d.concat(e)))}function c(t){return Math.round(t*p)/p}function h(t,i,e){return r(t[0]+e*(i[0]-t[0]),t[1]+e*(i[1]-t[1]),t[2]+e*(i[2]-t[2]))}var f={ease:l.ease[1],from:0,to:1};i.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var i=t.ease||f.ease;l[i]&&(i=l[i][1]),"function"!=typeof i&&(i=f.ease),this.ease=i,this.update=t.update||s,this.complete=t.complete||s,this.context=t.context||this,this.name=t.name;var e=t.from,n=t.to;void 0===e&&(e=f.from),void 0===n&&(n=f.to),this.unit=t.unit||"","number"==typeof e&&"number"==typeof n?(this.begin=e,this.change=n-e):this.format(n,e),this.value=this.begin+this.unit,this.start=T(),t.autoplay!==!1&&this.play()},i.play=function(){this.active||(this.start||(this.start=T()),this.active=!0,e(this))},i.stop=function(){this.active&&(this.active=!1,u(this))},i.render=function(t){var i,e=t-this.start;if(this.delay){if(e<=this.delay)return;e-=this.delay}if(e<this.duration){var n=this.ease(e,0,1,this.duration);return i=this.startRGB?h(this.startRGB,this.endRGB,n):c(this.begin+n*this.change),this.value=i+this.unit,void this.update.call(this.context,this.value)}i=this.endHex||this.begin+this.change,this.value=i+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},i.format=function(t,i){if(i+="",t+="","#"==t.charAt(0))return this.startRGB=n(i),this.endRGB=n(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var e=i.replace(b,""),r=t.replace(b,"");e!==r&&o("tween",i,t),this.unit=e}i=parseFloat(i),t=parseFloat(t),this.begin=this.value=i,this.change=t-i},i.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=s};var d=[],p=1e3}),Y=h(X,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||s,this.context=t.context,this.play()},t.render=function(t){var i=t-this.start;i<this.duration||(this.complete.call(this.context),this.destroy())}}),D=h(X,function(t,i){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var i,e;for(i in t.values)e=t.values[i],this.current[i]!==e&&this.tweens.push(new X({name:i,from:this.current[i],to:e,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var i,e,n=this.tweens.length,r=!1;for(i=n;i--;)e=this.tweens[i],e.context&&(e.render(t),this.current[e.name]=e.value,r=!0);return r?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(i.destroy.call(this),this.tweens){var t,e=this.tweens.length;for(t=e;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),E=i.config={defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!S.transition,agentTests:[]};i.fallback=function(t){if(!S.transition)return E.fallback=!0;E.agentTests.push("("+t+")");var i=new RegExp(E.agentTests.join("|"),"i");E.fallback=i.test(navigator.userAgent)},i.fallback("6.0.[2-5] Safari"),i.tween=function(t){return new X(t)},i.delay=function(t,i,e){return new Y({complete:i,duration:t,context:e})},t.fn.tram=function(t){return i.call(null,this,t)};var C=t.style,L=t.css,Q={transform:S.transform&&S.transform.css},W={color:[N,y],background:[N,y,"background-color"],"outline-color":[N,y],"border-color":[N,y],"border-top-color":[N,y],"border-right-color":[N,y],"border-bottom-color":[N,y],"border-left-color":[N,y],"border-width":[H,w],"border-top-width":[H,w],"border-right-width":[H,w],"border-bottom-width":[H,w],"border-left-width":[H,w],"border-spacing":[H,w],"letter-spacing":[H,w],margin:[H,w],"margin-top":[H,w],"margin-right":[H,w],"margin-bottom":[H,w],"margin-left":[H,w],padding:[H,w],"padding-top":[H,w],"padding-right":[H,w],"padding-bottom":[H,w],"padding-left":[H,w],"outline-width":[H,w],opacity:[H,g],top:[H,k],right:[H,k],bottom:[H,k],left:[H,k],"font-size":[H,k],"text-indent":[H,k],"word-spacing":[H,k],width:[H,k],"min-width":[H,k],"max-width":[H,k],height:[H,k],"min-height":[H,k],"max-height":[H,k],"line-height":[H,z],"scroll-top":[O,g,"scrollTop"],"scroll-left":[O,g,"scrollLeft"]},J={};S.transform&&(W.transform=[P],J={x:[k,"translateX"],y:[k,"translateY"],rotate:[x],rotateX:[x],rotateY:[x],scale:[g],scaleX:[g],scaleY:[g],skew:[x],skewX:[x],skewY:[x]}),S.transform&&S.backface&&(J.z=[k,"translateZ"],J.rotateZ=[x],J.scaleZ=[g],J.perspective=[w]);var K=/ms/,V=/s|\./,_=function(){var t="warn",i=window.console;return i&&i[t]?function(e){i[t](e)}:s}();return t.tram=i}(window.jQuery);
/*!
 * animator-pro.js v1.1
 */
 !function(){var a=jQuery.fn.addClass;jQuery.fn.addClass=function(){var t=a.apply(this,arguments);return jQuery(this).trigger("cssClassChanged",arguments),t};var t=jQuery.fn.removeClass;jQuery.fn.removeClass=function(){var a=t.apply(this,arguments);return jQuery(this).trigger("cssClassChanged",arguments),a}}(),$(function(){function a(a,t,s,i,e,n,o,m){var d=this;d.obj=a,d.steps=t,d.addClasses=s,d.removeClasses=i,d.easing=e,d.duration=n,d.delay=o,d.itrations=$.isNumeric(m)?parseInt(m):"infinite"==m?-1:1;var c=function(a){for(var t={},s=a.split(";"),r=0;r<s.length;r++){var i=s[r];""!=i&&(style=i.split(":"),t[style[0].trim()]=style[1].trim())}return t},l=function(a){if(a.transform){var t=a.transform.match(/translate\s*\(\s*(\-?[0-9]+(?:px)?%?)(?:\s*\,\s*(\-?[0-9]+(?:px)?%?))?(?:\s*\,\s*(\-?[0-9]+(?:px)?%?))?\s*\)\s*/i);t&&(a.x=s[1],a.y=s[2],a.z=s[3]);var s=a.transform.match(/translateX\s*\(\s*(\-?[0-9]+(?:px)?%?)\s*\)\s*/i);s&&(a.x=s[1]);var r=a.transform.match(/translateY\s*\(\s*(\-?[0-9]+(?:px)?%?)\s*\)\s*/i);r&&(a.y=r[1]);var i=a.transform.match(/translateZ\s*\(\s*(\-?[0-9]+(?:px)?%?)\s*\)\s*/i);i&&(a.z=i[1]);var e=a.transform.match(/rotate\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);e&&(a.rotate=e[1]);var n=a.transform.match(/rotateX\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);n&&(a.rotateX=n[1]);var o=a.transform.match(/rotateY\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);o&&(a.rotateY=o[1]);var m=a.transform.match(/rotateZ\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);m&&(a.rotateZ=m[1]);var c=a.transform.match(/scale\s*\(\s*(\-?[0-9]*\.?[0-9]+)\s*\)\s*/i);c&&(a.scale=c[1]);var l=a.transform.match(/scaleX\s*\(\s*(\-?[0-9]*\.?[0-9]+)\s*\)\s*/i);l&&(a.scaleX=l[1]);var p=a.transform.match(/scaleY\s*\(\s*(\-?[0-9]*\.?[0-9]+)\s*\)\s*/i);p&&(a.scaleY=p[1]);var f=a.transform.match(/scaleZ\s*\(\s*(\-?[0-9]*\.?[0-9]+)\s*\)\s*/i);f&&(a.scaleZ=f[1]);var v=a.transform.match(/skew\s*\(\s*(\-?[0-9]+(?:deg)?)(?:\s*\,\s*(\-?[0-9]+(?:deg)?))?\s*\)\s*/i);v&&(a.skewX=v[1],a.skewY=v[2]);var u=a.transform.match(/skewX\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);u&&(a.skewX=u[1]);var h=a.transform.match(/skewY\s*\(\s*(\-?[0-9]+(?:deg)?)\s*\)\s*/i);h&&(a.skewY=h[1]);var g=a.transform.match(/perspective\s*\(\s*(\-?[0-9]+(?:px)?)\s*\)\s*/i);g&&(a.perspective=g[1]),delete a.transform}if(a.height&&"auto"==a.height.trim()){var C=$(d.obj).outerHeight(),w=$(d.obj).height("auto").outerHeight();$(d.obj).height(C),$(d.obj).animate(),a.height=w}if(a.width&&"auto"==a.width.trim()){var k=$(d.obj).outerWidth(),j=$(d.obj).width("auto").outerWidth();$(d.obj).width(k),$(d.obj).animate(),a.width=j}return a},p=function(a,t,s){if(d.steps[t]){var i=c(d.steps[t]);for(var e in i)r(d.obj).add(e+" "+d.duration+"ms "+d.easing);r(d.obj).start(l(i)).then(function(){p(a,t+1,s)})}else{if(1==a)return void(s&&s());p(a-1,0,s)}},f=function(a){setTimeout(function(){p(d.itrations,0,a)},d.delay)};return{animate:function(a){f(a)},stop:function(){r(d.obj).stop()},setSteps:function(a){d.steps=a}}}function t(a,t,s,r,i,e,n,o,m,d){var c=a,l=function(){c.hasClass(s)?(e.setSteps(r),e.stop(),e.animate(function(){n&&!t.has(n)&&t.addClass(n),o&&t.has(o)&&t.removeClass(o)})):(e.setSteps(i),e.stop(),e.animate(function(){m&&!t.has(m)&&t.addClass(m),d&&t.has(d)&&t.removeClass(d)}))};l(),this.start=function(){c.bind("cssClassChanged",function(a,t){if(t){var r=t.split(" ");r.indexOf(s)>-1&&l()}})}}var s=10,r=window.tram,i=function(a,t){return t&&">"==t.trim()[0]&&(t=$(a).find(t.trim().slice(1,t.length).trim())),t=t||a};$(document).ready(function(){for(var r=1;s>=r;r++)$.each($("[data-animation-pro-"+r+"]"),function(s,e){var n=[],o=$(e).attr("data-animation-pro-trigger-"+r),m=$(e).attr("data-animation-pro-target-"+r),d=$(e).attr("data-animation-pro-easing-"+r)||"ease",c=parseInt($(e).attr("data-animation-pro-duration-"+r))||500,l=parseInt($(e).attr("data-animation-pro-delay-"+r))||0,p=$(e).attr("data-animation-pro-itrations-"+r)||1;n[0]=$(e).attr("data-animation-pro-step-1-"+r),n[1]=$(e).attr("data-animation-pro-step-2-"+r),n[2]=$(e).attr("data-animation-pro-step-3-"+r),n[3]=$(e).attr("data-animation-pro-step-4-"+r),n[4]=$(e).attr("data-animation-pro-step-5-"+r);var f=$(e).attr("data-animation-pro-add-classes-"+r),v=$(e).attr("data-animation-pro-rm-classes-"+r);if("load"==o){m&&">"==m.trim()[0]&&(m=$(e).find(m.trim().slice(1,m.length).trim())),m=m||e;var u=new a(m,n,f,v,d,c,l,p);u.animate(function(){$(m).addClass(f),$(m).removeClass(v)})}if("click"==o){var h=[];h[0]=$(e).attr("data-animation-pro-second-click-step-1-"+r),h[1]=$(e).attr("data-animation-pro-second-click-step-2-"+r),h[2]=$(e).attr("data-animation-pro-second-click-step-3-"+r),h[3]=$(e).attr("data-animation-pro-second-click-step-4-"+r),h[4]=$(e).attr("data-animation-pro-second-click-step-5-"+r);var g=$(e).attr("data-animation-pro-sd-click-add-classes-"+r),C=$(e).attr("data-animation-pro-sd-click-rm-classes-"+r);m&&">"==m.trim()[0]&&(m=$(e).find(m.trim().slice(1,m.length).trim())),m=m||e;var u=new a(m,n,f,v,d,c,l,p);$(e).click(function(a){a.preventDefault();var t=this,s=$(t).attr("data-animation-pro-clicked-"+r)||"false";"true"==s?(u.stop(),u.setSteps(h[0]?h:n),u.animate(function(){$(m).addClass(g),$(m).removeClass(C),$(t).attr("data-animation-pro-clicked-"+r,"false")})):(u.stop(),u.setSteps(n),u.animate(function(){$(m).addClass(f),$(m).removeClass(v),$(t).attr("data-animation-pro-clicked-"+r,"true")}))})}if("hover"==o){var w=[];w[0]=$(e).attr("data-animation-pro-hover-out-step-1-"+r),w[1]=$(e).attr("data-animation-pro-hover-out-step-2-"+r),w[2]=$(e).attr("data-animation-pro-hover-out-step-3-"+r),w[3]=$(e).attr("data-animation-pro-hover-out-step-4-"+r),w[4]=$(e).attr("data-animation-pro-hover-out-step-5-"+r);var k=$(e).attr("data-animation-pro-hover-out-add-classes-"+r),j=$(e).attr("data-animation-pro-hover-out-rm-classes-"+r);m&&">"==m.trim()[0]&&(m=$(e).find(m.trim().slice(1,m.length).trim())),m=m||e;var u=new a(m,n,f,v,d,c,l,p);$(e).hover(function(){u.stop(),u.setSteps(n),u.animate(function(){$(m).addClass(f),$(m).removeClass(v)})},function(){u.stop(),u.setSteps(w),u.animate(function(){$(m).addClass(k),$(m).removeClass(j)})})}if("scroll"==o){var y=r,b=$(e);m&&">"==m.trim()[0]&&(m=$(e).find(m.trim().slice(1,m.length).trim())),m=m||e;var x=b.attr("data-animation-pro-scroll-direction-"+r),X=b.attr("data-animation-pro-offset-"+r),Y=b.attr("data-animation-pro-enable-sd-scroll-trigger-"+r)||"false",u=new a(m,n,f,v,d,c,l,p);x&&m&&X&&b.waypoint(function(a){var t=b.attr("data-animation-pro-sd-scroll-trigger-"+y)||"false";a==x&&("true"==t&&"true"==Y||"false"==t)&&(u.stop(),u.animate(function(){$(m).addClass(f),$(m).removeClass(v),b.attr("data-animation-pro-sd-scroll-trigger-"+y,"true")}))},{offset:X})}if("class"==o){var S=[];S[0]=$(e).attr("data-animation-pro-class-removed-step-1-"+r),S[1]=$(e).attr("data-animation-pro-class-removed-step-2-"+r),S[2]=$(e).attr("data-animation-pro-class-removed-step-3-"+r),S[3]=$(e).attr("data-animation-pro-class-removed-step-4-"+r),S[4]=$(e).attr("data-animation-pro-class-removed-step-5-"+r);var Q=$(e).attr("data-animation-pro-class-name-"+r)||"active",Z=$(e).attr("data-animation-pro-class-removed-add-classes-"+r),I=$(e).attr("data-animation-pro-class-removed-rm-classes-"+r),b=$(e);m=i(e,m);var u=new a(m,n,f,v,d,c,l,p),z=new t(b,m,Q,n,S,u,f,v,Z,I);z.start()}})})});