module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),u=(n=i)&&n.__esModule?n:{default:n};function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadSeatsio();case 2:t=e.sent,r=this.props,r.id,r.className,r.onChartCreated,(n=a(r,["id","className","onChartCreated"])).divId=this.props.id,o=new t.SeatingChart(n).render(),this.props.onChartCreated&&this.props.onChartCreated(o),this.setState({chart:o});case 8:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,i){try{var u=t[o](i),a=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});e(a)}("next")})});return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){"DESTROYED"!==this.state.chart.state&&this.state.chart.destroy()}},{key:"loadSeatsio",value:function(){return new Promise(function(e,t){if("undefined"==typeof seatsio){var r=document.createElement("script");r.onload=function(){return e(seatsio)},r.onerror=function(){return t("Could not load "+r.src)},r.src="https://cdn.seatsio.net/chart.js",document.head.appendChild(r)}else e(seatsio)})}},{key:"render",value:function(){return u.default.createElement("div",{id:this.props.id,className:this.props.className})}}]),t}();t.default=c,c.defaultProps={id:"chart"}},function(e,t){e.exports=require("react")}]);