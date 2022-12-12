"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[659],{"./stories/Components/UIcomponents/Cards/StatsCards/StatsCards.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>StatsCards});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js");const fitty_module=function(e){if(e){var t=function(e){return[].slice.call(e)},o=3,a=[],l=null,u="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(l),l=e.requestAnimationFrame((function(){return s(a.filter((function(e){return e.dirty&&e.active})))}))}:function(){},c=function(e){return function(){a.forEach((function(t){return t.dirty=e})),u()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=m(e)})),e.filter(y).forEach(v);var t=e.filter(p);t.forEach(d),t.forEach((function(e){v(e),f(e)})),t.forEach(S)},f=function(e){return e.dirty=0},d=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},p=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},m=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},y=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},v=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},S=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},h=function(e,t){return function(){e.dirty=t,e.active&&u()}},w=function(e){return function(){a=a.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},b=function(e){return function(){e.active||(e.active=!0,u())}},z=function(e){return function(){return e.active=!1}},F=function(e){e.observeMutations&&(e.observer=new MutationObserver(h(e,1)),e.observer.observe(e.element,e.observeMutations))},g={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},W=null,E=function(){e.clearTimeout(W),W=e.setTimeout(c(2),x.observeWindowDelay)},M=["resize","orientationchange"];return Object.defineProperty(x,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");M.forEach((function(t){e[n](t,E)}))}}),x.observeWindow=!0,x.observeWindowDelay=100,x.fitAll=c(o),x}function C(e,t){var n=Object.assign({},g,t),i=e.map((function(e){var t=Object.assign({},n,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},F(e),e.newbie=!0,e.dirty=!0,a.push(e)}(t),{element:e,fit:h(t,o),unfreeze:b(t),freeze:z(t),unsubscribe:w(t)}}));return u(),i}function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?C(t(document.querySelectorAll(e)),n):C([e],n)[0]}}("undefined"==typeof window?null:window);var fitText=function fitText(selector){("string"==typeof selector?document.querySelectorAll(selector):[selector]).forEach((function(ele){ele.style.removeProperty?ele.style.removeProperty("font-size"):ele.style.removeAttribute("font-size");var fontSize=window.getComputedStyle(ele,null).getPropertyValue("font-size"),maxSize=Math.round(parseFloat(fontSize));fitty_module(ele,{maxSize})}))},injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stats_cards=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Components/UIcomponents/Cards/StatsCards/stats-cards.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stats_cards.Z,options);stats_cards.Z&&stats_cards.Z.locals&&stats_cards.Z.locals;var Heading=__webpack_require__("./stories/Atom/Typography/Heading/Heading.jsx"),Paragraph=__webpack_require__("./stories/Atom/BaseTypography/Paragraph/Paragraph.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["title","number","percent","content","Size"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var cls=function cls(){setTimeout((function(){fitText(".stats-card h2")}),200);for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).length>0?classes.filter(Boolean).join(" "):null},Accent_options={yellow:"",red:"red",green:"green",blue:"blue"};function StatsCards(_ref){var size,title=_ref.title,number=_ref.number,percent=_ref.percent,content=_ref.content,Size=_ref.Size,args=_objectWithoutProperties(_ref,_excluded);switch(Size){case"Small":size="small";break;case"Medium":default:size="medium";break;case"Large":size="large";break;case"Extra large":size="x-large"}(0,react.useEffect)((function(){fitText(".stats-card h2")}),[]);var screen_variant=Accent_options[""+args.Accent];return(0,jsx_runtime.jsxs)("div",{className:cls("stats-card",""+size,""+screen_variant),children:[(0,jsx_runtime.jsxs)("div",{children:["x-large"==size||"large"==size?(0,jsx_runtime.jsx)(Heading.X,{type:"3",label:title}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Heading.X,{type:"2",label:number})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading.X,{type:"4",label:percent}),(0,jsx_runtime.jsx)(Paragraph.P,{label:content})]})]})}StatsCards.displayName="StatsCards"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Components/UIcomponents/Cards/StatsCards/stats-cards.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'div.stats-card{-webkit-transition:300ms all;-moz-transition:300ms all;-ms-transition:300ms all;-o-transition:300ms all;transition:300ms all;background-color:#f7f7f7;box-sizing:border-box;overflow-wrap:break-word}@media(max-width: 47.9375em){div.stats-card{max-width:21.938rem;padding:2.5rem}}div.stats-card h3{font-weight:600;margin-bottom:2.5rem}@media(min-width: 48em){div.stats-card h3{margin-bottom:5rem}}div.stats-card h2{-webkit-transition:300ms all;-moz-transition:300ms all;-ms-transition:300ms all;-o-transition:300ms all;transition:300ms all;color:#f7f7f7;font-family:"SohneBreit","ProximaNova",sans-serif;font-size:5rem;letter-spacing:.05rem;line-height:1.1;margin-bottom:1.5rem;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}@supports(-webkit-text-stroke: 2px #000){div.stats-card h2{text-shadow:none;-webkit-text-stroke:2px #000}}@media(min-width: 48em){div.stats-card h2{font-size:6.875rem;line-height:1.09;margin-bottom:2rem}}div.stats-card h4{letter-spacing:0;line-height:1.15;margin-bottom:.5rem}@media(min-width: 48em){div.stats-card h4{margin-bottom:1rem}}div.stats-card p{margin:0}@media(min-width: 48em){div.stats-card p{font-size:1.563rem}}div.stats-card.x-large{padding:2.5rem}@media(min-width: 48em){div.stats-card.x-large{max-width:42.75rem;padding:6rem}}div.stats-card.x-large h2{font-size:5.625rem}@media(min-width: 48em){div.stats-card.x-large h2{font-size:7.5rem}}div.stats-card.x-large h3{font-size:2.5rem;font-weight:700}@media(min-width: 48em){div.stats-card.x-large h3{font-size:3.438rem}}div.stats-card.x-large h4{font-weight:600}@media(max-width: 47.9375em){div.stats-card.x-large h4{font-size:1.875rem}}@media(min-width: 48em){div.stats-card.large{max-width:28rem;padding:6rem 4rem}}div.stats-card.medium{padding:3rem}@media(min-width: 48em){div.stats-card.medium{max-width:20.625rem}div.stats-card.medium h4{font-weight:600}}div.stats-card.medium p{font-size:1.25rem}div.stats-card.small{max-width:10.625rem;padding:1.5rem}@media(min-width: 48em){div.stats-card.small{max-width:13.25rem;padding:2rem}}div.stats-card.small h2{font-size:3.125rem;height:4rem;white-space:nowrap}@media(min-width: 48em){div.stats-card.small h2{font-size:4.375rem}}div.stats-card.small h4{font-size:1.25rem}@media(min-width: 48em){div.stats-card.small h4{font-size:1.563rem}}div.stats-card.small p{font-size:.875rem;word-break:normal}@media(min-width: 48em){div.stats-card.small p{font-size:1rem}}div.stats-card:hover{background-color:#ffeb00}div.stats-card:hover h2{color:#000}div.stats-card:hover.yellow{background-color:#ffeb00}div.stats-card:hover.red{background-color:#ee402d}div.stats-card:hover.green{background-color:#6de354}div.stats-card:hover.blue{background-color:#60d4f2}:lang(my) div.stats-card h2{font-family:"NotoSans",sans-serif}:lang(bg) div.stats-card h2,:lang(be) div.stats-card h2,:lang(kk) div.stats-card h2,:lang(ky) div.stats-card h2,:lang(mk) div.stats-card h2,:lang(mn) div.stats-card h2,:lang(ru) div.stats-card h2,:lang(sr) div.stats-card h2,:lang(uk) div.stats-card h2{font-family:"ProximaNova",sans-serif}',"",{version:3,sources:["webpack://./stories/Components/UIcomponents/Cards/StatsCards/stats-cards.scss","webpack://./stories/assets/scss/_mixins.scss","webpack://./stories/assets/scss/_variables.scss","webpack://./stories/assets/scss/_breakpoints.scss"],names:[],mappings:"AAKA,eC8BE,4BD7BA,CC8BA,yBD9BA,CC+BA,wBD/BA,CCgCA,uBDhCA,CCiCA,oBDjCA,CAEA,wBEUe,CFTf,qBAAA,CACA,wBAAA,CGPE,6BHEJ,eAQI,mBAAA,CACA,cEmDS,CAAA,CFhDX,kBACE,eAAA,CACA,oBE8CS,CChDT,wBAAA,kBHKE,kBE8CO,CAAA,CF1CX,kBCSA,4BDRE,CCSF,yBDTE,CCUF,wBDVE,CCWF,uBDXE,CCYF,oBDZE,CAEA,aEXa,CFYb,iDEwBqB,CFvBrB,cEqCS,CFpCT,qBAAA,CACA,eAAA,CACA,oBE6BS,CF5BT,2EACE,CAKF,yCAfF,kBAgBI,gBAAA,CACA,4BAAA,CAAA,CG1BF,wBHSF,kBAqBI,kBAAA,CACA,gBAAA,CACA,kBEeO,CAAA,CFXX,kBACE,gBAAA,CACA,gBAAA,CACA,mBEIS,CC3CT,wBHoCF,kBAMI,kBEGO,CAAA,CFCX,iBACE,QAAA,CG/CA,wBH8CF,iBAII,kBEpBS,CAAA,CFwBb,uBACE,cEPS,CChDT,wBHsDF,uBAII,kBAAA,CACA,YEPO,CAAA,CFUT,0BACE,kBEHO,CC5DT,wBH8DA,0BAII,gBAAA,CAAA,CAIJ,0BACE,gBEvBO,CFwBP,eAAA,CGxEF,wBHsEA,0BAKI,kBAAA,CAAA,CAIJ,0BACE,eAAA,CG9FF,6BH6FA,0BAII,kBAAA,CAAA,CGnFJ,wBHwFF,qBAEI,eAAA,CACA,iBAAA,CAAA,CAIJ,sBACE,YE/CS,CCjDT,wBH+FF,sBAII,mBEpCQ,CFsCR,yBACE,eAAA,CAAA,CAIJ,wBACE,iBE/ES,CFmFb,qBACE,mBAAA,CACA,cEnES,CC9CT,wBH+GF,qBAKI,kBAAA,CACA,YEtEO,CAAA,CFyET,wBACE,kBEjEO,CFkEP,WExEO,CFyEP,kBAAA,CG3HF,wBHwHA,wBAMI,kBEpEK,CAAA,CFwET,wBACE,iBEvGS,CC5BX,wBHkIA,wBAII,kBExGO,CAAA,CF4GX,uBACE,iBEjHS,CFkHT,iBAAA,CG5IF,wBH0IA,uBAKI,cEpHO,CAAA,CFyHb,qBAIE,wBEhJW,CFkJX,wBACE,UErKQ,CFyKR,4BACE,wBAAA,CADF,yBACE,wBAAA,CADF,2BACE,wBAAA,CADF,0BACE,wBAAA,CAQJ,4BACE,iCEnIiB,CF0InB,4PACE,oCE7IoB",sourcesContent:["@import '../../../../assets/scss/breakpoints';\n@import '../../../../assets/scss/variables';\n@import '../../../../assets/scss/mixins';\n\n/* statscard start */\ndiv.stats-card {\n  @include transition(300ms all);\n\n  background-color: $color-gray-200;\n  box-sizing: border-box;\n  overflow-wrap: break-word;\n\n  @include devicebreak(small) {\n    max-width: 21.938rem;\n    padding: $spacing-08;\n  }\n\n  h3 {\n    font-weight: 600;\n    margin-bottom: $spacing-08;\n\n    @include devicebreak(medium) {\n      margin-bottom: $spacing-11;\n    }\n  }\n\n  h2 {\n    @include transition(300ms all);\n\n    color: $color-gray-200;\n    font-family: $Font-Family-SohneBreit;\n    font-size: $spacing-11;\n    letter-spacing: 0.05rem;\n    line-height: 1.1;\n    margin-bottom: $spacing-06;\n    text-shadow:\n      -1px -1px 0 $color-black,\n      1px -1px 0 $color-black,\n      -1px 1px 0 $color-black,\n      1px 1px 0 $color-black;\n\n    @supports (-webkit-text-stroke: 2px $color-black) {\n      text-shadow: none;\n      -webkit-text-stroke: 2px $color-black;\n    }\n\n    @include devicebreak(medium) {\n      font-size: 6.875rem;\n      line-height: 1.09;\n      margin-bottom: $spacing-07;\n    }\n  }\n\n  h4 {\n    letter-spacing: 0;\n    line-height: 1.15;\n    margin-bottom: $spacing-03;\n\n    @include devicebreak(medium) {\n      margin-bottom: $spacing-05;\n    }\n  }\n\n  p {\n    margin: 0;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-25;\n    }\n  }\n\n  &.x-large {\n    padding: $spacing-08;\n\n    @include devicebreak(medium) {\n      max-width: 42.75rem;\n      padding: $spacing-12;\n    }\n\n    h2 {\n      font-size: $spacing-90;\n\n      @include devicebreak(medium) {\n        font-size: 7.5rem;\n      }\n    }\n\n    h3 {\n      font-size: $spacing-08;\n      font-weight: 700;\n\n      @include devicebreak(medium) {\n        font-size: 3.438rem;\n      }\n    }\n\n    h4 {\n      font-weight: 600;\n\n      @include devicebreak(small) {\n        font-size: 1.875rem;\n      }\n    }\n  }\n\n  &.large {\n    @include devicebreak(medium) {\n      max-width: 28rem;\n      padding: $spacing-12 $spacing-10;\n    }\n  }\n\n  &.medium {\n    padding: $spacing-09;\n\n    @include devicebreak(medium) {\n      max-width: $spacing-330;\n\n      h4 {\n        font-weight: 600;\n      }\n    }\n\n    p {\n      font-size: $font-size-20;\n    }\n  }\n\n  &.small {\n    max-width: 10.625rem;\n    padding: $spacing-06;\n\n    @include devicebreak(medium) {\n      max-width: 13.25rem;\n      padding: $spacing-07;\n    }\n\n    h2 {\n      font-size: $spacing-50;\n      height: $spacing-10;\n      white-space: nowrap;\n\n      @include devicebreak(medium) {\n        font-size: $spacing-70;\n      }\n    }\n\n    h4 {\n      font-size: $font-size-20;\n\n      @include devicebreak(medium) {\n        font-size: $font-size-25;\n      }\n    }\n\n    p {\n      font-size: $font-size-14;\n      word-break: normal;\n\n      @include devicebreak(medium) {\n        font-size: $font-size-16;\n      }\n    }\n  }\n\n  &:hover {\n    // color map\n    $colors: ('yellow': $color-yellow, 'red': $color-red, 'green': $color-green, 'blue': $color-azure);\n\n    background-color: $color-yellow;\n\n    & h2 {\n      color: $color-black;\n    }\n\n    @each $name, $color in $colors {\n      &.#{$name} {\n        background-color: #{$color};\n      }\n    }\n  }\n}\n\n:lang(my) {\n  div.stats-card {\n    h2 {\n      font-family: $Font-Family-NotoSans;\n    }\n  }\n}\n\n#{$cyrillic} {\n  div.stats-card {\n    h2 {\n      font-family: $Font-Family-ProximaNova;\n    }\n  }\n}\n","@import './variables';\n@import './breakpoints';\n\n//background image gradient\n@mixin background-image($deg, $colorname, $opacity) {\n  background: linear-gradient($deg, $colorname, $opacity);\n}\n\n// select box appearance\n@mixin x-appearance($value) {\n  -webkit-appearance: $value;\n  -moz-appearance: $value;\n  appearance: $value;\n}\n\n//animation\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n  -moz-animation: $animation;\n  -ms-animation: $animation;\n  -o-animation: $animation;\n  animation: $animation;\n}\n\n//keyframe\n@mixin keyframes($keyframes...) {\n  -webkit-keyframes: $keyframes;\n  -moz-keyframes: $keyframes;\n  -ms-keyframes: $keyframes;\n  -o-keyframes: $keyframes;\n  keyframes: $keyframes;\n}\n\n//transition\n@mixin transition($transitions...) {\n  -webkit-transition: $transitions;\n  -moz-transition: $transitions;\n  -ms-transition: $transitions;\n  -o-transition: $transitions;\n  transition: $transitions;\n}\n\n//transition-delay\n@mixin transitiondelay($transitiondelay...) {\n  -webkit-transition-delay: $transitiondelay;\n  -moz-transition-delay: $transitiondelay;\n  -ms-transition-delay: $transitiondelay;\n  -o-transition-delay: $transitiondelay;\n  transition-delay: $transitiondelay;\n}\n\n//transform\n@mixin transform($transforms) {\n  -webkit-transform: $transforms;\n  -moz-transform: $transforms;\n  -ms-transform: $transforms;\n  -o-transform: $transforms;\n  transition: $transforms;\n}\n\n// Rotate\n@mixin rotate($deg) {\n  @include transform(rotate(#{$deg}deg));\n}\n\n// Translate\n@mixin translate($x, $y) {\n  @include transform(translate($x, $y));\n}\n\n// Scale\n@mixin scale($scale) {\n  @include transform(scale($scale));\n}\n\n// Skew\n@mixin skew($x, $y) {\n  @include transform(skew(#{$x}deg, #{$y}deg));\n}\n\n//gradient color\n@mixin gradient($direction, $list) {\n  background: -webkit-linear-gradient($direction, $list);\n  background: -moz-linear-gradient($direction, $list);\n  background: -o-linear-gradient($direction, $list);\n  background: linear-gradient($direction, $list);\n}\n\n/* mixing  end */\n\n/* placehoder start */\n%paragragh-font-14 {\n  font-size: $font-size-12;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-14;\n  }\n}\n\n%paragragh-font-16 {\n  font-size: $font-size-14;\n  line-height: 1.4;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-16;\n  }\n}\n\n%paragragh-font-20 {\n  font-size: $font-size-16;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-20;\n  }\n}\n\n%paragragh-font-24 {\n  font-size: $font-size-20;\n  line-height: 1.1;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-24;\n  }\n}\n\n%border-bottom {\n  border-bottom: 1px solid $color-gray-400;\n}\n\n%img-cover {\n  height: 100%;\n  object-fit: cover;\n  padding: 0;\n  width: 100%;\n}\n\n%border-none {\n  @extend %img_none;\n\n  border: none;\n}\n\n%header-icon {\n  background-color: $color-blue-600;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0;\n  height: 26px;\n  margin-right: $spacing-03;\n  padding: 0;\n  width: 25px;\n\n  @include devicebreak(small) {\n    margin-right: 0;\n    -webkit-mask: inherit;\n    mask: inherit;\n  }\n\n  &:hover {\n    background-color: $color-blue-400;\n  }\n}\n\n%frosted-bg {\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  background: rgba(247, 247, 247, 0.8);\n}\n\n%footer-block {\n  align-items: center;\n  border-bottom: 1px solid $color-white;\n  justify-content: space-between;\n  margin-bottom: $spacing-07;\n}\n\n%mobile-nav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\n\n%button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: block;\n  text-transform: uppercase;\n}\n\n%sdg-modal-title {\n  h2 {\n    font-size: $font-size-25;\n\n    @include devicebreak(medium) {\n      font-size: 3.438rem;\n      padding-left: $spacing-05;\n    }\n  }\n\n  h3 {\n    font-size: $font-size-20;\n\n    @include devicebreak(medium) {\n      font-size: 2.188rem;\n    }\n  }\n}\n\n%sidebar {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: $spacing-05;\n  position: relative;\n\n  @include devicebreak(medium) {\n    padding: $spacing-06;\n  }\n}\n\n%sidebar-selected {\n  background-color: $color-blue-600;\n\n  h6 {\n    color: $color-white;\n  }\n\n  &:hover {\n    background-color: $color-blue-600;\n  }\n}\n\n%checbox-radio-before {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 2px solid $color-dark-red;\n  cursor: pointer;\n  height: 16px;\n  margin: 0;\n  width: 16px;\n\n  &:hover {\n    border-color: $color-light-pink;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%img-hover-effect {\n  @include transition(opacity 0.5s ease);\n\n  background-image: linear-gradient(42deg, $color-yellow, transparent 80%);\n  opacity: 0;\n}\n\n%button {\n  align-items: center;\n  border: none;\n  display: flex;\n  font-size: $font-size-16;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  line-height: 1;\n\n  @include devicebreak(medium) {\n    display: inline-flex;\n  }\n}\n\n%ctaimg {\n  content: '';\n  height: 1.188rem;\n  margin-left: $spacing-04;\n  margin-top: 2px;\n  width: 0.813rem;\n\n  @include devicebreak(medium) {\n    margin-top: 0;\n  }\n}\n\n%field__image {\n  background-repeat: no-repeat;\n  height: 20px;\n  left: 10px;\n  left: 14px;\n  position: absolute;\n  top: 22px;\n  width: 20px;\n  z-index: 1;\n}\n\n%feature__card {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n%arrow {\n  @include transform(translateY(-50%));\n  @include transition(all 200ms ease-in-out);\n\n  background:\n    url(#{$img-path-Iconfourback}/chevron-down.svg) no-repeat center\n    center;\n  content: '';\n  float: right;\n  height: 13px;\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  width: 20px;\n}\n\n%absolute__content {\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n%sidebar-chevron {\n  @include transition(all 0.3s ease);\n  @include transform(translateY(-50%));\n\n  background: url(#{$img-path-Icon}/chevron-down.svg) no-repeat center center;\n  content: '';\n  height: 0.813rem;\n  position: absolute;\n  right: 1.188rem;\n  top: 50%;\n  width: 20px;\n}\n\n%language_switcher {\n  border: none;\n  font-size: $font-size-14;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n%img_none {\n  background-image: none;\n}\n\n%absolute__overflow {\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n%select_default {\n  border: 2px solid $color-black;\n  color: $color-black;\n  cursor: pointer;\n  font-size: $font-size-16;\n  font-weight: 600;\n  line-height: 1.125rem;\n  margin: 0;\n  padding: $spacing-05 $spacing-50 $spacing-05 $spacing-05;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n%select_option {\n  border: 2px solid $color-black;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  min-height: 100px;\n  padding: 0 $spacing-05;\n  width: 100%;\n\n  &:focus {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%select_rtl {\n  padding-left: 3.125rem;\n  padding-right: $spacing-05;\n  text-align: right;\n}\n\n%select_rtl_after {\n  left: 16px;\n  margin: 0;\n  right: auto;\n}\n\n%no-animation {\n  -webkit-animation: none;\n  -moz-animation: none;\n  -ms-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n\n%left-to-right {\n  @include transform(translateX(-100px));\n  @include transition(\n    transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1),\n    opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1)\n  );\n\n  opacity: 0;\n  visibility: hidden;\n}\n\n%inviewport_left_right {\n  @include transform(translateX(0));\n\n  opacity: 1;\n  visibility: visible;\n}\n\n[dir='rtl'] {\n  %left-to-right {\n    @include transform(translateX(100px));\n  }\n}\n\n%scale-up {\n  @include transform(scale(0.9));\n  @include transition(transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n}\n\n%opacity-only {\n  @include transition(opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n\n  opacity: 0;\n}\n\n%inviewport_opacity_only {\n  @include transform(translateX(0));\n\n  opacity: 1;\n}\n\n%expand_to_size {\n  @include transition(max-width 0.5s ease);\n\n  margin: 0 auto;\n  max-width: 100%;\n}\n\n%expand_search {\n  border: 0;\n  border-bottom: 1px solid $color-black;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n%carousel_arrow {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 2.75rem;\n  padding: 0;\n  vertical-align: bottom;\n  width: 2.75rem;\n}\n\n%carousel_tag {\n  color: $color-black;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.48px;\n  line-height: 0.84;\n  margin-bottom: $spacing-05;\n  text-transform: uppercase;\n}\n\n%carousel_title {\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n\n%carousel_desc {\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n%carousel_bar_margin {\n  margin-bottom: $spacing-09;\n}\n\n%carousel_slider_slide {\n  @include devicebreak(medium) {\n    display: flex;\n  }\n}\n\n%header {\n  background-color: $color-gray-100;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  height: 7.1875rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n}\n\n%background-white {\n  background-color: white;\n}\n\n%sub-external {\n  align-items: center;\n  justify-content: space-between;\n}\n\n%external {\n  align-items: center;\n  content: '';\n  cursor: pointer;\n  height: 1.125rem;\n  width: 1.25rem;\n}\n\n%footerlink {\n  @extend %img_none;\n\n  color: $color-white;\n  font-size: $font-size-16;\n  line-height: 1.4;\n\n  &:hover {\n    color: $color-blue-100;\n  }\n}\n\n%footerlinkinvert {\n  color: $color-black;\n\n  &:hover {\n    color: $color-gray-600;\n  }\n}\n\n%selectoption {\n  border-top: 1px solid $color-gray-400;\n  cursor: pointer;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n//burmese lang\n:lang(my) {\n  %carousel_tag {\n    font-size: 1rem;\n  }\n\n  %paragragh-font-16 {\n    font-size: $font-size-12;\n    line-height: 1.7;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-14;\n    }\n  }\n\n  %paragragh-font-20 {\n    font-size: $font-size-14;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-16;\n    }\n  }\n\n  %paragragh-font-24 {\n    font-size: $font-size-20;\n    line-height: 1.1;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-24;\n    }\n  }\n  %button {\n    font-size: $font-size-14;\n  }\n}\n\n%logo {\n  @include transition(all 0.4s cubic-bezier(0.64, 0.05, 0.35, 1.05));\n\n  width: 40px;\n\n  @include devicebreak(xlarge) {\n    height: ($header-height-xlarge + 7px);\n    width: 60px;\n\n    &.scrolled {\n      height: $header-height-xlarge;\n    }\n  }\n\n  @include devicebreak(mediumonlytab) {\n    height: ($header-height-medium + 7px);\n\n    &.scrolled {\n      height: $header-height-medium;\n    }\n  }\n}\n\n@mixin background($background...) {\n  background: linear-gradient($background);\n}\n\n%pseudo-icon {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n%chevron-right-expanded {\n  i {\n    @include transition(width 0.3s);\n\n    box-sizing: border-box;\n    display: block;\n    height: $spacing-05;\n    left: 1.25rem;\n    position: relative;\n    width: 0;\n\n    &::before {\n      @extend %pseudo-icon;\n\n      background-color: $color-red;\n      display: none;\n      height: 2px;\n      right: 0;\n      top: 7px;\n      width: 100%;\n    }\n\n    &::after {\n      @extend %pseudo-icon;\n\n      @include transform(rotate(45deg));\n\n      border-right: 2px solid $color-red;\n      border-top: 2px solid $color-red;\n      height: $spacing-04;\n      right: 0;\n      top: 2px;\n      width: $spacing-04;\n    }\n  }\n\n  &:hover {\n    i {\n      width: $spacing-11;\n\n      &::before {\n        display: unset;\n      }\n    }\n  }\n}\n\n%progress-bar {\n  position: fixed;\n  top: 4.7rem;\n  z-index: 5;\n\n  @include devicebreak(xlarge) {\n    top: 7.1875rem;\n  }\n}\n\n%animate-link {\n  background-image:\n    linear-gradient($color-dark-red, $color-dark-red),\n    linear-gradient($color-dark-red, $color-dark-red);\n  background-position: 100% 100%, -30px 100%;\n  background-repeat: no-repeat;\n  background-size: 100% 2px, 0 1px;\n\n  &:hover {\n    @include animation(lineLoop-animation 2s linear infinite);\n  }\n}\n\n/* placehoder end */\n","// image variables\n$img-path: '../../../assets/images';\n$img-path-Icon: '../../../assets/icons';\n$img-path-Iconback: '../../assets/icons';\n$img-path-Iconfourback: '../../../../assets/icons';\n\n// COLORS\n$color-black: #000;\n$color-white: #fff;\n$color-blue-100: #b5d5f5;\n$color-blue-200: #94c4f5;\n$color-blue-300: #6babeb;\n$color-blue-400: #4f95dd;\n$color-blue-500: #3288ce;\n$color-blue-600: #006eb5;\n$color-blue-700: #1f5a95;\n$color-blue-800: #0468b1;\n$color-gray-100: #fafafa;\n$color-gray-200: #f7f7f7;\n$color-gray-300: #edeff0;\n$color-gray-400: #d4d6d8;\n$color-gray-500: #a9b1b7;\n$color-gray-600: #55606e;\n$color-gray-700: #232e3d;\n$color-light-yellow: #ffe17e;\n$color-yellow: #ffeb00;\n$color-dark-yellow: #fbc412;\n$color-light-red: #ffbcb7;\n$color-red: #ee402d;\n$color-dark-red: #d12800;\n$color-light-green: #b8ecb6;\n$color-green: #6de354;\n$color-dark-green: #59ba47;\n$color-light-azure: #a2daf3;\n$color-azure: #60d4f2;\n$color-dark-azure: #00c1ff;\n$color-light-pink: #ffb4ae;\n$color-silvery-moonlight: #ced0d3;\n$color-shuttle-gray: #55606f;\n$color-ebony-clay: #232e3e;\n\n// FONT SIZE\n$font-size-12: 0.75rem;\n$font-size-14: 0.875rem;\n$font-size-16: 1rem;\n$font-size-20: 1.25rem;\n$font-size-24: 1.5rem;\n$font-size-25: 1.563rem;\n$font-size-26: 1.625rem;\n$font-size-32: 2rem;\n$font-size-35: 2.188rem;\n\n// FONTS FAMLIY\n$Font-Family-ProximaNova: 'ProximaNova', sans-serif;\n$Font-Family-SohneBreit: 'SohneBreit', $Font-Family-ProximaNova;\n$Font-Family-NotoSans: 'NotoSans', sans-serif;\n\n// SPACING variables\n$spacing-01: 0.125rem;\n$spacing-02: 0.25rem;\n$spacing-03: 0.5rem;\n$spacing-04: 0.75rem;\n$spacing-05: 1rem;\n$spacing-06: 1.5rem;\n$spacing-07: 2rem;\n$spacing-08: 2.5rem;\n$spacing-09: 3rem;\n$spacing-10: 4rem;\n$spacing-11: 5rem;\n$spacing-12: 6rem;\n$spacing-13: 10rem;\n$spacing-36: 2.25rem;\n$spacing-44: 2.75rem;\n$spacing-50: 3.125rem;\n$spacing-60: 3.75rem;\n$spacing-70: 4.375rem;\n$spacing-76: 4.75rem;\n$spacing-90: 5.625rem;\n$spacing-100: 6.25rem;\n$spacing-136: 8.5rem;\n$spacing-330: 20.625rem;\n$spacing-320: 20rem;\n$spacing-400: 25rem;\n\n// Width variables\n$width-150: 9.375rem;\n$width-180: 11.25rem;\n$width-600: 37.5rem;\n$width-705: 44.0625rem;\n$width-840: 52.5rem;\n$width-900: 56.25rem;\n$width-1096: 68.5rem;\n$width-1440: 90rem;\n\n// Header height\n$header-height-xlarge: 115px;\n$header-height-medium: 75px;\n\n// GRADIENT COLOR LIST\n$yellow-gradient: $color-yellow 30%, rgba(255, 235, 0, 0) 110%;\n$red-gradient: $color-red 30%, rgb(240, 49, 49, 0) 110%;\n$green-gradient: $color-green 30%, rgba(0, 0, 0, 0) 110%;\n$blue-gradient: $color-azure 30%, rgb(101, 204, 244, 0) 110%;\n\n//SDG color\n$sdg-red: #e5243b;\n$sdg-mustard: #dda63a;\n$sdg-kelly-green: #4c9f38;\n$sdg-dark-red: #c5192d;\n$sdg-red-orange: #ff3a21;\n$sdg-bright-blue: #26bde2;\n$sdg-yellow: #fcc30b;\n$sdg-burgundy-red: #a21942;\n$sdg-orange: #fd6925;\n$sdg-magenta: #dd1367;\n$sdg-golden-yellow: #fd9d24;\n$sdg-dark-mustard: #bf8b2e;\n$sdg-dark-green: #3f7e44;\n$sdg-blue: #0a97d9;\n$sdg-lime-green: #56c02b;\n$sdg-royal-blue: #00689d;\n$sdg-navy-blue: #19486a;\n\n//SDG hover color\n$sdg-hover-red: #dc9099;\n$sdg-hover-mustard: #d3bb8a;\n$sdg-hover-kelly-green: #9fd092;\n$sdg-hover-dark-red: #ce8f97;\n$sdg-hover-red-orange: #ce9890;\n$sdg-hover-bright-blue: #9ac8d3;\n$sdg-hover-yellow: #d3c79d;\n$sdg-hover-burgundy-red: #ce94a6;\n$sdg-hover-orange: #d2aa98;\n$sdg-hover-magenta: #c994aa;\n$sdg-hover-golden-yellow: #c7b094;\n$sdg-hover-dark-mustard: #ceba98;\n$sdg-hover-dark-green: #a2d7a6;\n$sdg-hover-blue: #a1c6d7;\n$sdg-hover-lime-green: #abce9e;\n$sdg-hover-royal-blue: #748f9d;\n$sdg-hover-navy-blue: #a2c2d8;\n\n$author-image-radius: 50%;\n\n// language selectors\n$cyrillic: \":lang(bg),:lang(be),:lang(kk),:lang(ky),:lang(mk),:lang(mn),:lang(ru),:lang(sr),:lang(uk)\";\n\n/* variables end */\n","@mixin devicebreak($point) {\n  @if $point==small {\n    /* small design */\n    @media (max-width: 47.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==mediumonlytab {\n    /* medium design tab */\n    @media (max-width: 89.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==medium {\n    /* medium design */\n    @media (min-width: 48em) {\n      @content;\n    }\n  }\n\n  @else if $point==large {\n    /* medium design */\n    @media (min-width: 64em) {\n      @content;\n    }\n  }\n\n  @else if $point==xlarge {\n    /* large design */\n    @media (min-width: 90em) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);