(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((a=n(16))&&a.__esModule?a:{default:a}).default;t.default=o},14:function(e,t,n){},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(17)),o=(r(n(20)),r(n(23)));function r(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){m(e,t,n[t])})}return e}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(24);var f="0 0 ".concat(456.814," ").concat(456.814),p={shirtColor:"white",handColor:"#ef4040",fillOpacity:1},h={shirtColor:"white",handColor:"#ef4040",fillOpacity:1},b={shirtColor:"white",handColor:"white",fillOpacity:.3},y={enableBackground:"new ".concat(f)},v=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),f=0;f<i;f++)u[f]=arguments[f];return a=this,r=(e=s(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==c(r)&&"function"!==typeof r?d(a):r,m(d(d(n)),"state",{animated:!1,expended:!1}),m(d(d(n)),"onClick",function(){var e=n.props,t=e.onClick,a=e.controlled,o=e.active;a&&o||n.animate(),"function"===typeof t&&(a?t(!o):t())}),m(d(d(n)),"animate",function(){n.setState({animated:!1,expended:!1}),setTimeout(function(){n.setState({animated:!0,expended:!1})},300)}),m(d(d(n)),"expend",function(){n.setState({expended:!0,animated:!1})}),m(d(d(n)),"getRootClass",function(){var e=n.state,t=e.animated,a=e.expended,r=n.props,c=r.className;r.size;return(0,o.default)("root",c,{expended:a,animated:t})}),m(d(d(n)),"getRootStyles",function(){var e=n.props,t=e.style,a=e.size,o={};return a&&(o.width="".concat(a,"px"),o.height="".concat(a,"px")),l({},o,t)}),m(d(d(n)),"getSvgStyles",function(){var e=n.props.svgStyle;return l({},y,e)}),m(d(d(n)),"getThumbStyles",function(){var e=n.props,t=e.thumbStyles,a=e.controlled,o=e.active;return a?o&&t?t.active||h:t.unactive||b:t.handColor?t:p}),m(d(d(n)),"getCircleStyles",function(){var e=n.props,t=e.circleStyle,a=e.size,o={};return a&&(o.width="".concat(a,"px"),o.height="".concat(a,"px")),l({},o,t)}),m(d(d(n)),"setCustomSize",function(e){}),n}var n,r,v;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.PureComponent),n=t,(r=[{key:"componentDidUpdate",value:function(e){e.size!==this.props.size&&"number"===typeof this.props.size&&this.setCustomSize(this.props.size)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.animateOnMount,n=e.controlled,a=e.onClick,o=e.size;!n&&t?this.animate():(this.expend(),"function"!==typeof a&&console.warn('ThumbUp is controlled, but no "onClick" function has been passed as props.')),"number"===typeof o?this.setCustomSize(o):o&&"number"!==typeof o&&console.warn('Thumb\'s "size" must be a number.')}},{key:"render",value:function(){var e=this.props,t=e.disableDots,n=e.disableCircle,r=this.getRootClass(),c=this.getRootStyles(),l=this.getSvgStyles(),i=this.getThumbStyles(),s=this.getCircleStyles();return a.default.createElement("div",{className:r,onClick:this.onClick,style:c},a.default.createElement("svg",{className:"thumb",version:"1.1",x:"0px",y:"0px",width:"".concat(456.814,"px"),height:"".concat(456.814,"px"),viewBox:f,fillOpacity:i.fillOpacity,style:l},a.default.createElement("g",null,a.default.createElement("g",null,a.default.createElement("path",{fill:i.handColor,d:"M441.11,252.677c10.468-11.99,15.704-26.169,15.704-42.54c0-14.846-5.432-27.692-16.259-38.547 c-10.849-10.854-23.695-16.278-38.541-16.278h-79.082c0.76-2.664,1.522-4.948,2.282-6.851c0.753-1.903,1.811-3.999,3.138-6.283 c1.328-2.285,2.283-3.999,2.852-5.139c3.425-6.468,6.047-11.801,7.857-15.985c1.807-4.192,3.606-9.9,5.42-17.133 c1.811-7.229,2.711-14.465,2.711-21.698c0-4.566-0.055-8.281-0.145-11.134c-0.089-2.855-0.574-7.139-1.423-12.85 c-0.862-5.708-2.006-10.467-3.43-14.272c-1.43-3.806-3.716-8.092-6.851-12.847c-3.142-4.764-6.947-8.613-11.424-11.565 c-4.476-2.95-10.184-5.424-17.131-7.421c-6.954-1.999-14.801-2.998-23.562-2.998c-4.948,0-9.227,1.809-12.847,5.426 c-3.806,3.806-7.047,8.564-9.709,14.272c-2.666,5.711-4.523,10.66-5.571,14.849c-1.047,4.187-2.238,9.994-3.565,17.415 c-1.719,7.998-2.998,13.752-3.86,17.273c-0.855,3.521-2.525,8.136-4.997,13.845c-2.477,5.713-5.424,10.278-8.851,13.706 c-6.28,6.28-15.891,17.701-28.837,34.259c-9.329,12.18-18.94,23.695-28.837,34.545c-9.899,10.852-17.131,16.466-21.698,16.847 c-4.755,0.38-8.848,2.331-12.275,5.854c-3.427,3.521-5.14,7.662-5.14,12.419v183.01c0,4.949,1.807,9.182,5.424,12.703 c3.615,3.525,7.898,5.38,12.847,5.571c6.661,0.191,21.698,4.374,45.111,12.566c14.654,4.941,26.12,8.706,34.4,11.272 c8.278,2.566,19.849,5.328,34.684,8.282c14.849,2.949,28.551,4.428,41.11,4.428h4.855h21.7h10.276 c25.321-0.38,44.061-7.806,56.247-22.268c11.036-13.135,15.697-30.361,13.99-51.679c7.422-7.042,12.565-15.984,15.416-26.836 c3.231-11.604,3.231-22.74,0-33.397c8.754-11.611,12.847-24.649,12.272-39.115C445.395,268.286,443.971,261.055,441.11,252.677z"}),a.default.createElement("path",{fill:i.shirtColor,d:"M100.5,191.864H18.276c-4.952,0-9.235,1.809-12.851,5.426C1.809,200.905,0,205.188,0,210.137v182.732 c0,4.942,1.809,9.227,5.426,12.847c3.619,3.611,7.902,5.421,12.851,5.421H100.5c4.948,0,9.229-1.81,12.847-5.421 c3.616-3.62,5.424-7.904,5.424-12.847V210.137c0-4.949-1.809-9.231-5.424-12.847C109.73,193.672,105.449,191.864,100.5,191.864z M67.665,369.308c-3.616,3.521-7.898,5.281-12.847,5.281c-5.14,0-9.471-1.76-12.99-5.281c-3.521-3.521-5.281-7.85-5.281-12.99 c0-4.948,1.759-9.232,5.281-12.847c3.52-3.617,7.85-5.428,12.99-5.428c4.949,0,9.231,1.811,12.847,5.428 c3.617,3.614,5.426,7.898,5.426,12.847C73.091,361.458,71.286,365.786,67.665,369.308z"})))),!n&&a.default.createElement("div",{className:"circle-wrap"},a.default.createElement("div",{className:"circle-lg",style:s})),!t&&a.default.createElement("div",{className:"dots-wrap"},a.default.createElement("div",{className:(0,o.default)("dot","dot--t")}),a.default.createElement("div",{className:(0,o.default)("dot","dot--tr")}),a.default.createElement("div",{className:(0,o.default)("dot","dot--br")}),a.default.createElement("div",{className:(0,o.default)("dot","dot--b")}),a.default.createElement("div",{className:(0,o.default)("dot","dot--bl")}),a.default.createElement("div",{className:(0,o.default)("dot","dot--tl")})))}}])&&i(n.prototype,r),v&&i(n,v),t}();m(v,"defaultProps",{animateOnMount:!0,disableDots:!1,disableCircle:!1,svgStyle:y,thumbStyles:p,size:200});var w=v;t.default=w},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(14),n(4)),i=n(5),s=n(7),u=n(6),d=n(8),m=n(1),f=n.n(m),p=(n(26),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={controlledThumbIsActive:!1},n.onClick=function(){console.log("onClick")},n.onClickControlled=function(e){n.setState({controlledThumbIsActive:e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("a",{href:"https://github.com/MadeInMoon/react-thumb-up",target:"new_blank"},o.a.createElement("img",{className:"github-fork-me",src:"https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png",alt:"Fork me on GitHub"})),o.a.createElement("div",{className:"top"},o.a.createElement("h1",null,"react-thumb-up"),o.a.createElement("h2",null,"A simple react thumb-up animated component, with customizable props, to like with confidence"),o.a.createElement("a",{className:"github-button",href:"https://github.com/MadeInMoon/react-thumb-up","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star MadeInMoon/react-thumb-up on GitHub"},"Star")),o.a.createElement("div",{className:"middle"},o.a.createElement("div",{className:"thumb-wrapper"},o.a.createElement("p",{className:"thumb-label"},"Uncontrolled"),o.a.createElement(f.a,{className:"thumbUp",animateOnMount:!0,thumbStyles:{shirtColor:"white",handColor:"#ef4040"}})),o.a.createElement("div",{className:"thumb-wrapper"},o.a.createElement("p",{className:"thumb-label"},"Controlled"),o.a.createElement(f.a,{className:"thumbUp",controlled:!0,active:this.state.controlledThumbIsActive,onClick:this.onClickControlled})),o.a.createElement("div",{className:"thumb-wrapper"},o.a.createElement("p",{className:"thumb-label"},"Size ","{50}"),o.a.createElement(f.a,{className:"thumbUp",size:100,style:{height:"200px"}}))),o.a.createElement("div",{className:"bottom"},o.a.createElement("h3",null,"Wrapped with ",o.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by"," ",o.a.createElement("a",{href:"https://www.madeinmoon.io",alt:"Link to Made in Moon",target:"new_blank"},"Made in Moon"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=document.getElementById("root");if(null==h)throw new Error("no root element found");c.a.render(o.a.createElement(p,null),h),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(28)}},[[9,2,1]]]);
//# sourceMappingURL=main.22933f3b.chunk.js.map