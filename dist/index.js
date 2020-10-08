"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0});var fs=__importStar(require("fs")),path=__importStar(require("path")),html_minifier_1=require("html-minifier"),utils_1=require("./utils"),constants_1=require("./constants"),replace=function(e,t,r){return e.replace(t,r)},bundleInject=function(e){var o=e.target;if(!o)throw new Error("options.target cannot be empty");var c=path.basename(o);return{name:"rollup-plugin-bundle-inject",generateBundle:function(e,t){var r,n,i,s,u;void 0===e&&(e={}),void 0===t&&(t={}),fs.statSync(o)&&(u=fs.readFileSync(o,{encoding:"utf-8"}),i=(r=utils_1.getListFromBundle(t)).cssList,s=r.jsList,n=utils_1.isExist("inject:css",u),e=utils_1.isExist("inject:js",u),r=t=void 0,n&&(t=constants_1.InjectTag.CSS,r=i.reduce(function(e,t){return e+"<style>"+t+"</style>"},""),u=replace(u,t,r)),e&&(t=constants_1.InjectTag.JS,r=s.reduce(function(e,t){return e+"<script>"+t+"<\/script>"},""),u=replace(u,t,r)),n||e||(n=constants_1.InjectTag.HEAD_TAG,e=i.reduce(function(e,t){return e+"<style>"+t+"</style>"},"")+"</head>",i=constants_1.InjectTag.BODY_TAG,s=s.reduce(function(e,t){return e+"<script>"+t+"<\/script>"},"")+"</body>",u=replace(u,n,e),u=replace(u,i,s)),u=html_minifier_1.minify(u,{removeComments:!0,removeCommentsFromCDATA:!0,collapseWhitespace:!0,collapseBooleanAttributes:!0,removeAttributeQuotes:!0,removeRedundantAttributes:!0,useShortDoctype:!0,removeEmptyAttributes:!0,removeEmptyElements:!0}),this.emitFile({type:"asset",fileName:c,source:u}))}}};module.exports=bundleInject;