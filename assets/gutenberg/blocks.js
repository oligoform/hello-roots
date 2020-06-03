!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.domReady}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){var n=/^(?:0|[1-9]\d*)$/;function r(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var o,a,l=Object.prototype,c=l.hasOwnProperty,i=l.toString,u=l.propertyIsEnumerable,s=(o=Object.keys,a=Object,function(e){return o(a(e))}),f=Math.max,b=!u.call({valueOf:1},"valueOf");function p(e,t){var n=g(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&y(e)}(e)&&c.call(e,"callee")&&(!u.call(e,"callee")||"[object Arguments]"==i.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,o=!!r;for(var a in e)!t&&!c.call(e,a)||o&&("length"==a||d(a,r))||n.push(a);return n}function v(e,t,n){var r=e[t];c.call(e,t)&&m(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function d(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||n.test(e))&&e>-1&&e%1==0&&e<t}function h(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||l)}function m(e,t){return e===t||e!=e&&t!=t}var g=Array.isArray;function y(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=j(e)?i.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var O,_=(O=function(e,t){if(b||h(t)||y(t))!function(e,t,n,r){n||(n={});for(var o=-1,a=t.length;++o<a;){var l=t[o],c=r?r(n[l],e[l],l,n,e):void 0;v(n,l,void 0===c?e[l]:c)}}(t,function(e){return y(e)?p(e):function(e){if(!h(e))return s(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}(t),e);else for(var n in t)c.call(t,n)&&v(e,n,t[n])},function(e,t){return t=f(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,a=f(n.length-t,0),l=Array(a);++o<a;)l[o]=n[t+o];o=-1;for(var c=Array(t+1);++o<t;)c[o]=n[o];return c[t]=l,r(e,this,c)}}((function(e,t){var n=-1,r=t.length,o=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(o=O.length>3&&"function"==typeof o?(r--,o):void 0,a&&function(e,t,n){if(!j(n))return!1;var r=typeof t;return!!("number"==r?y(n)&&d(t,n.length):"string"==r&&t in n)&&m(n[t],e)}(t[0],t[1],a)&&(o=r<3?void 0:o,r=1),e=Object(e);++n<r;){var l=t[n];l&&O(e,l,n,o)}return e})));e.exports=_},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(7),l=n.n(a),c=n(4),i=n.n(c),u=n(5),s=n(0),f=n(8),b=n(9),p=n(6),v=n(2);var d=function(){return React.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},React.createElement("g",{fill:"none","fill-rule":"evenodd"},React.createElement("path",{d:"M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z",fill:"currentColor","fill-rule":"nonzero"})))},h={"core/heading":"standard","core/paragraph":"small"},m=[{label:Object(s.__)("S","sht"),title:Object(s.__)("Klein","sht"),value:"small"},{label:Object(s.__)("Std","sht"),title:Object(s.__)("Standard","sht"),value:"standard"},{label:Object(s.__)("M","sht"),title:Object(s.__)("Medium","sht"),value:"medium"},{label:Object(s.__)("L","sht"),title:Object(s.__)("Gross","sht"),value:"large"},{label:Object(s.__)("XL","sht"),title:Object(s.__)("Extragross","sht"),value:"xlarge"}],g=Object(f.createHigherOrderComponent)((function(e){return function(t){var n=t.attributes.shtMargin;if(t.attributes.className){var r=t.attributes.className.trim().split(" ");Object.keys(m).map((function(e){r=r.filter((function(t,n,r){return t!=="has-block-margin--"+m[e].value}))})),t.attributes.className=i()(r)}var o=[];return Object.keys(m).map((function(e){o.push(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"has-block-margin--"+m[e].value,m[e].value===n))})),h[t.name]!==n&&(t.attributes.className=i()(t.attributes.className,o)),React.createElement(b.Fragment,null,React.createElement(p.BlockControls,null,React.createElement(y,{value:n,onChange:function(e){t.setAttributes({shtMargin:e})}})),React.createElement(e,t),React.createElement(p.InspectorControls,null,React.createElement(v.PanelBody,{title:Object(s.__)("Abstände","sht"),initialOpen:!1},React.createElement("div",{className:"components-base-control"},React.createElement("label",{class:"components-base-control__label"},Object(s.__)("Vertikaler Abstand ändern","sht")),React.createElement(v.ButtonGroup,null,Object.keys(m).map((function(e){return React.createElement(v.Button,{isSecondary:m[e].value!==n,isPrimary:m[e].value===n,onClick:function(){t.setAttributes({shtMargin:m[e].value})}},m[e].label)})))))))}}),"addMarginControl"),y=function(e){var t=e.value,n=e.onChange;return React.createElement(v.Toolbar,{isCollapsed:!0,icon:d,label:Object(s.__)("Vertikaler Abstand ändern","sht"),popoverProps:{position:"bottom right",isAlternate:!0},controls:m.map((function(e){return{title:e.title,icon:d,size:e.value,isActive:t===e.value,role:"menuitemradio",onClick:(r=e.value,function(){return n(t===r?void 0:r)})};var r}))})};Object(u.addFilter)("blocks.registerBlockType","sht/attribute/block-margin",(function(e,t){var n="standard";return t in h&&(n=h[t]),e.attributes=l()(e.attributes,{shtMargin:{type:"string",default:n}}),e})),Object(u.addFilter)("editor.BlockEdit","sht/control/block-margin",g);var j=n(1);o()((function(){Object(j.registerBlockStyle)("core/cover",{name:"aspect-21",label:"2:1"}),Object(j.registerBlockStyle)("core/cover",{name:"aspect-31",label:"3:1"}),Object(j.registerBlockStyle)("core/cover",{name:"aspect-41",label:"4:1"}),Object(j.registerBlockStyle)("core/cover",{name:"aspect-169",label:"16:9"}),Object(j.registerBlockStyle)("core/cover",{name:"full-height",label:"Full height"})})),window.onload=function(){Object(j.unregisterBlockType)("core/media-text")}}]);