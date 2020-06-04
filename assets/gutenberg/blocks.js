!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===l)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.domReady}()},function(e,t){var n=/^(?:0|[1-9]\d*)$/;function r(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var a,l,o=Object.prototype,c=o.hasOwnProperty,i=o.toString,u=o.propertyIsEnumerable,s=(a=Object.keys,l=Object,function(e){return a(l(e))}),f=Math.max,b=!u.call({valueOf:1},"valueOf");function v(e,t){var n=g(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&O(e)}(e)&&c.call(e,"callee")&&(!u.call(e,"callee")||"[object Arguments]"==i.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,a=!!r;for(var l in e)!t&&!c.call(e,l)||a&&("length"==l||m(l,r))||n.push(l);return n}function p(e,t,n){var r=e[t];c.call(e,t)&&d(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function m(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||n.test(e))&&e>-1&&e%1==0&&e<t}function h(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||o)}function d(e,t){return e===t||e!=e&&t!=t}var g=Array.isArray;function O(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=j(e)?i.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var _,y=(_=function(e,t){if(b||h(t)||O(t))!function(e,t,n,r){n||(n={});for(var a=-1,l=t.length;++a<l;){var o=t[a],c=r?r(n[o],e[o],o,n,e):void 0;p(n,o,void 0===c?e[o]:c)}}(t,function(e){return O(e)?v(e):function(e){if(!h(e))return s(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}(t),e);else for(var n in t)c.call(t,n)&&p(e,n,t[n])},function(e,t){return t=f(void 0===t?e.length-1:t,0),function(){for(var n=arguments,a=-1,l=f(n.length-t,0),o=Array(l);++a<l;)o[a]=n[t+a];a=-1;for(var c=Array(t+1);++a<t;)c[a]=n[a];return c[t]=o,r(e,this,c)}}((function(e,t){var n=-1,r=t.length,a=r>1?t[r-1]:void 0,l=r>2?t[2]:void 0;for(a=_.length>3&&"function"==typeof a?(r--,a):void 0,l&&function(e,t,n){if(!j(n))return!1;var r=typeof t;return!!("number"==r?O(n)&&m(t,n.length):"string"==r&&t in n)&&d(n[t],e)}(t[0],t[1],l)&&(a=r<3?void 0:a,r=1),e=Object(e);++n<r;){var o=t[n];o&&_(e,o,n,a)}return e})));e.exports=y},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),l=n(7),o=n.n(l),c=n(3),i=n.n(c),u=n(4),s=n(0),f=n(8),b=n(9),v=n(5),p=n(1);var m=function(){return React.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},React.createElement("g",{fill:"none","fill-rule":"evenodd"},React.createElement("path",{d:"M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z",fill:"currentColor","fill-rule":"nonzero"})))},h={"core/heading":"standard","core/paragraph":"small"},d=[{label:Object(s.__)("0","sht"),title:Object(s.__)("Kein Abstand","sht"),value:"none"},{label:Object(s.__)("S","sht"),title:Object(s.__)("Klein","sht"),value:"small"},{label:Object(s.__)("R","sht"),title:Object(s.__)("Normal","sht"),value:"standard"},{label:Object(s.__)("M","sht"),title:Object(s.__)("Mittelgross","sht"),value:"medium"},{label:Object(s.__)("L","sht"),title:Object(s.__)("Gross","sht"),value:"large"},{label:Object(s.__)("XL","sht"),title:Object(s.__)("Extragross","sht"),value:"xlarge"}],g=Object(f.createHigherOrderComponent)((function(e){return function(t){var n=t.attributes.shtMargin;if(t.attributes.className){var r=t.attributes.className.trim().split(" ");Object.keys(d).map((function(e){r=r.filter((function(t,n,r){return t!=="has-block-margin--"+d[e].value}))})),t.attributes.className=i()(r)}var a=[];return Object.keys(d).map((function(e){a.push(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"has-block-margin--"+d[e].value,d[e].value===n))})),h[t.name]!==n&&(t.attributes.className=i()(t.attributes.className,a)),React.createElement(b.Fragment,null,React.createElement(v.BlockControls,null,React.createElement(O,{value:n,onChange:function(e){t.setAttributes({shtMargin:e})}})),React.createElement(e,t),React.createElement(v.InspectorControls,null,React.createElement(p.PanelBody,{title:Object(s.__)("Abstände","sht"),initialOpen:!1},React.createElement("div",{className:"components-base-control"},React.createElement("label",{class:"components-base-control__label"},Object(s.__)("Vertikaler Abstand ändern","sht")),React.createElement(p.ButtonGroup,null,Object.keys(d).map((function(e){return React.createElement(p.Button,{isSecondary:d[e].value!==n,isPrimary:d[e].value===n,onClick:function(){t.setAttributes({shtMargin:d[e].value})}},d[e].label)})))))))}}),"addMarginControl"),O=function(e){var t=e.value,n=e.onChange;return React.createElement(p.Toolbar,{isCollapsed:!0,icon:m,label:Object(s.__)("Vertikaler Abstand ändern","sht"),popoverProps:{position:"bottom right",isAlternate:!0},controls:d.map((function(e){return{title:e.title,icon:m,size:e.value,isActive:t===e.value,role:"menuitemradio",onClick:(r=e.value,function(){return n(t===r?void 0:r)})};var r}))})};Object(u.addFilter)("blocks.registerBlockType","sht/attribute/block-margin",(function(e,t){var n="standard";return t in h&&(n=h[t]),e.attributes=o()(e.attributes,{shtMargin:{type:"string",default:n}}),e})),Object(u.addFilter)("editor.BlockEdit","sht/control/block-margin",g);var j=function(){return React.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},React.createElement("g",{fill:"none","fill-rule":"evenodd"},React.createElement("path",{d:"M18.5,5.37867966 L20.6213203,7.5 L19.9142136,8.20710678 L18.9996406,7.29267966 L18.9996406,16.3276797 L19.9142139,15.4142136 L20.6213207,16.1213203 L18.5000003,18.2426407 L16.37868,16.1213203 L17.0857868,15.4142136 L17.9996406,16.3276797 L17.9996406,7.29267966 L17.0857864,8.20710678 L16.3786797,7.5 L18.5,5.37867966 Z M10.6865234,5.76464844 L15.0195312,18 L12.2470703,18 L11.4584961,15.4848633 L6.95117188,15.4848633 L6.10449219,18 L3.43164062,18 L7.79785156,5.76464844 L10.6865234,5.76464844 Z M9.21728516,8.56201172 L7.64013672,13.3764648 L10.7446289,13.3764648 L9.21728516,8.56201172 Z",fill:"currentColor","fill-rule":"nonzero"})))},_={"core/heading":"regular","core/paragraph":"regular"},y=[{label:Object(s.__)("S","sht"),title:Object(s.__)("Klein","sht"),value:"small"},{label:Object(s.__)("R","sht"),title:Object(s.__)("Normal","sht"),value:"regular"},{label:Object(s.__)("M","sht"),title:Object(s.__)("Mittelgross","sht"),value:"medium"},{label:Object(s.__)("L","sht"),title:Object(s.__)("Gross","sht"),value:"large"},{label:Object(s.__)("XL","sht"),title:Object(s.__)("Extra gross","sht"),value:"xlarge"}],E=Object(f.createHigherOrderComponent)((function(e){return function(t){if(!(t.name in _))return React.createElement(e,t);var n=t.attributes.shtFontSize;if(t.attributes.className){var r=t.attributes.className.trim().split(" ");Object.keys(y).map((function(e){r=r.filter((function(t,n,r){return t!=="has-font-size-"+y[e].value}))})),t.attributes.className=i()(r)}var a=[];return Object.keys(y).map((function(e){a.push(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"has-font-size-"+y[e].value,y[e].value===n))})),_[t.name]!==n&&(t.attributes.className=i()(t.attributes.className,a)),React.createElement(b.Fragment,null,React.createElement(v.BlockControls,null,React.createElement(k,{value:n,onChange:function(e){t.setAttributes({shtFontSize:e})}})),React.createElement(e,t),React.createElement(v.InspectorControls,null,React.createElement(p.PanelBody,{title:Object(s.__)("Schriftgrösse ändern","sht"),initialOpen:!1},React.createElement("div",{className:"components-base-control"},React.createElement("label",{class:"components-base-control__label"},Object(s.__)("Schriftgrösse ändern","sht")),React.createElement(p.ButtonGroup,null,Object.keys(y).map((function(e){return React.createElement(p.Button,{isSecondary:y[e].value!==n,isPrimary:y[e].value===n,isPressed:y[e].value===n,onClick:function(){t.setAttributes({shtFontSize:y[e].value})}},y[e].label)})))))))}}),"addFontSizeControl"),k=function(e){var t=e.value,n=e.onChange;return React.createElement(p.Toolbar,{isCollapsed:!0,icon:j,label:Object(s.__)("Schriftgrösse ändern","sht"),popoverProps:{position:"bottom right",isAlternate:!0},controls:y.map((function(e){return{title:e.title,icon:j,size:e.value,isActive:t===e.value,role:"menuitemradio",onClick:(r=e.value,function(){return n(t===r?void 0:r)})};var r}))})};Object(u.addFilter)("blocks.registerBlockType","sht/attribute/font-size",(function(e,t){return t in _?(e.attributes=o()(e.attributes,{shtFontSize:{type:"string",default:_[t]}}),e):e})),Object(u.addFilter)("editor.BlockEdit","sht/control/font-size",E);var R=n(2);a()((function(){Object(R.registerBlockStyle)("core/cover",{name:"aspect-21",label:"2:1"}),Object(R.registerBlockStyle)("core/cover",{name:"aspect-31",label:"3:1"}),Object(R.registerBlockStyle)("core/cover",{name:"aspect-41",label:"4:1"}),Object(R.registerBlockStyle)("core/cover",{name:"aspect-169",label:"16:9"}),Object(R.registerBlockStyle)("core/cover",{name:"full-height",label:"Full height"})})),window.onload=function(){Object(R.unregisterBlockType)("core/media-text")}}]);