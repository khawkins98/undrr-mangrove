"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[3708,7103,7126,3275,6054,8061],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,ee:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Anchor,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./stories/Utilities/Loader/Loader.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories,loader:()=>Loader_stories_loader});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),loader=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Utilities/Loader/loader.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(loader.Z,options);loader.Z&&loader.Z.locals&&loader.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader=function Loader(){return(0,jsx_runtime.jsx)("div",{className:"loader","aria-busy":"true","aria-live":"polite"})};function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}Loader.displayName="Loader";const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Utilities/Loader",component:Loader,mdxType:"Meta"}),(0,esm.kt)("h1",{id:"loader"},"Loader"),(0,esm.kt)("p",null,"A loading spinner is a utility that shows a loading page overlay when clicking a link or button"),(0,esm.kt)("h3",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"A loading spinner displays a loading page overlay to inform the user of some background activity happening in response to their action on a page. This helps the user understand that they need to wait for the activity to finish before proceeding further."),(0,esm.kt)("h4",{id:"when-to-use"},"When to use:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"To inform the user that some background activity is happening when they encounter a delay in response to a button or link click")),(0,esm.kt)("h3",{id:"formatting"},"Formatting"),(0,esm.kt)("h4",{id:"default"},"Default"),(0,esm.kt)("p",null,"The loading spinner is a simple animation that informs the user that the page is loading. It will be displayed until the full page has been loaded."),(0,esm.kt)("h3",{id:"content"},"Content"),(0,esm.kt)("p",null,"The loading spinner is a simple circle animation. The size varies depending on the screen size."),(0,esm.kt)("h3",{id:"behaviors"},"Behaviors"),(0,esm.kt)("h4",{id:"states"},"States"),(0,esm.kt)("p",null,"The loading spinner has just one state - spinning. As soon as the page loads, the loading spinner is removed"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Loader",mdxType:"Story"},(0,esm.kt)(Loader,{mdxType:"Loader"}),";")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("p",null,"To use this component, follow these steps:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Copy the HTML from the canvas"),(0,esm.kt)("li",{parentName:"ul"},"Add it to your HTML page"),(0,esm.kt)("li",{parentName:"ul"},"Include the CSS and JS listed below"),(0,esm.kt)("li",{parentName:"ul"},"You should have loader-ready")),(0,esm.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,esm.kt)("h4",{id:"css"},"CSS:"),(0,esm.kt)("p",null,"Add the base layout style from dist/css/base-minimal.min.css"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/loader.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/loader.css"))),(0,esm.kt)("h4",{id:"js"},"JS:"),(0,esm.kt)("p",null,"NA"),(0,esm.kt)("h4",{id:"interactions"},"Interactions"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"No interactions are needed with the loader")),(0,esm.kt)("h3",{id:"changelog"},"Changelog"),(0,esm.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const Loader_stories_loader=()=>(0,esm.kt)(Loader,null);Loader_stories_loader.displayName="loader",Loader_stories_loader.storyName="Loader",Loader_stories_loader.parameters={storySource:{source:"<Loader></Loader>"}};const componentMeta={title:"Utilities/Loader",component:Loader,includeStories:["loader"]},mdxStoryNameToKey={Loader:"loader"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Loader_stories=componentMeta,__namedExportsOrder=["loader"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Utilities/Loader/loader.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes loader-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loader{-webkit-animation:loader-animation 2s linear infinite;-moz-animation:loader-animation 2s linear infinite;-ms-animation:loader-animation 2s linear infinite;-o-animation:loader-animation 2s linear infinite;animation:loader-animation 2s linear infinite;border:8px solid #006eb5;border-radius:50%;border-top:8px solid #edeff0;height:40px;width:40px}@media(min-width: 48em){.loader{border:14px solid #006eb5;border-top:14px solid #edeff0;height:96px;width:96px}}","",{version:3,sources:["webpack://./stories/Utilities/Loader/loader.scss","webpack://./stories/assets/scss/_mixins.scss","webpack://./stories/assets/scss/_breakpoints.scss"],names:[],mappings:"AAOA,4BACE,GACE,sBAAA,CAGF,KACE,wBAAA,CAAA,CAIJ,QAAA,qDACqB,CAAA,kDAAA,CCCnB,iDDDmB,CCEnB,gDDFmB,CCGnB,6CDHmB,CAEnB,wBAAA,CACA,iBAAA,CACA,4BAAA,CACA,WAAA,CACA,UAAA,CEPE,wBAAA,QFUA,yBAAA,CACA,6BAAA,CACA,WAAA,CACA,UAAA,CAAA",sourcesContent:["@import '../../assets/scss/mixins';\n@import '../../assets/scss/breakpoints';\n@import '../../assets/scss/variables';\n\n// * loader start *//\n\n//loader animation\n@keyframes loader-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.loader {\n  @include animation(loader-animation 2s linear infinite);\n\n  border: 8px solid $color-blue-600;\n  border-radius: 50%;\n  border-top: 8px solid $color-gray-300;\n  height: 40px;\n  width: 40px;\n\n  @include devicebreak(medium) {\n    border: 14px solid $color-blue-600;\n    border-top: 14px solid $color-gray-300;\n    height: 96px;\n    width: 96px;\n  }\n}\n// * loader end *//\n","@import './variables';\n@import './breakpoints';\n\n//background image gradient\n@mixin background-image($deg, $colorname, $opacity) {\n  background: linear-gradient($deg, $colorname, $opacity);\n}\n\n// select box appearance\n@mixin x-appearance($value) {\n  -webkit-appearance: $value;\n  -moz-appearance: $value;\n  appearance: $value;\n}\n\n//animation\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n  -moz-animation: $animation;\n  -ms-animation: $animation;\n  -o-animation: $animation;\n  animation: $animation;\n}\n\n//keyframe\n@mixin keyframes($keyframes...) {\n  -webkit-keyframes: $keyframes;\n  -moz-keyframes: $keyframes;\n  -ms-keyframes: $keyframes;\n  -o-keyframes: $keyframes;\n  keyframes: $keyframes;\n}\n\n//transition\n@mixin transition($transitions...) {\n  -webkit-transition: $transitions;\n  -moz-transition: $transitions;\n  -ms-transition: $transitions;\n  -o-transition: $transitions;\n  transition: $transitions;\n}\n\n//transition-delay\n@mixin transitiondelay($transitiondelay...) {\n  -webkit-transition-delay: $transitiondelay;\n  -moz-transition-delay: $transitiondelay;\n  -ms-transition-delay: $transitiondelay;\n  -o-transition-delay: $transitiondelay;\n  transition-delay: $transitiondelay;\n}\n\n//transform\n@mixin transform($transforms) {\n  -webkit-transform: $transforms;\n  -moz-transform: $transforms;\n  -ms-transform: $transforms;\n  -o-transform: $transforms;\n  transition: $transforms;\n}\n\n// Rotate\n@mixin rotate($deg) {\n  @include transform(rotate(#{$deg}deg));\n}\n\n// Translate\n@mixin translate($x, $y) {\n  @include transform(translate($x, $y));\n}\n\n// Scale\n@mixin scale($scale) {\n  @include transform(scale($scale));\n}\n\n// Skew\n@mixin skew($x, $y) {\n  @include transform(skew(#{$x}deg, #{$y}deg));\n}\n\n//gradient color\n@mixin gradient($direction, $list) {\n  background: -webkit-linear-gradient($direction, $list);\n  background: -moz-linear-gradient($direction, $list);\n  background: -o-linear-gradient($direction, $list);\n  background: linear-gradient($direction, $list);\n}\n\n/* mixing  end */\n\n/* placehoder start */\n%paragragh-font-14 {\n  font-size: $font-size-12;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-14;\n  }\n}\n\n%paragragh-font-16 {\n  font-size: $font-size-14;\n  line-height: 1.4;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-16;\n  }\n}\n\n%paragragh-font-20 {\n  font-size: $font-size-16;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-20;\n  }\n}\n\n%paragragh-font-24 {\n  font-size: $font-size-20;\n  line-height: 1.1;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-24;\n  }\n}\n\n%border-bottom {\n  border-bottom: 1px solid $color-gray-400;\n}\n\n%img-cover {\n  height: 100%;\n  object-fit: cover;\n  padding: 0;\n  width: 100%;\n}\n\n%border-none {\n  @extend %img_none;\n\n  border: none;\n}\n\n%header-icon {\n  background-color: $color-blue-600;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0;\n  height: 26px;\n  margin-right: $spacing-03;\n  padding: 0;\n  width: 25px;\n\n  @include devicebreak(small) {\n    margin-right: 0;\n    -webkit-mask: inherit;\n    mask: inherit;\n  }\n\n  &:hover {\n    background-color: $color-blue-400;\n  }\n}\n\n%frosted-bg {\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  background: rgba(247, 247, 247, 0.8);\n}\n\n%footer-block {\n  align-items: center;\n  border-bottom: 1px solid $color-white;\n  justify-content: space-between;\n  margin-bottom: $spacing-07;\n}\n\n%mobile-nav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\n\n%button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: block;\n  text-transform: uppercase;\n}\n\n%sdg-modal-title {\n  h2 {\n    font-size: $font-size-25;\n\n    @include devicebreak(medium) {\n      font-size: 3.438rem;\n      padding-left: $spacing-05;\n    }\n  }\n\n  h3 {\n    font-size: $font-size-20;\n\n    @include devicebreak(medium) {\n      font-size: 2.188rem;\n    }\n  }\n}\n\n%sidebar {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: $spacing-05;\n  position: relative;\n\n  @include devicebreak(medium) {\n    padding: $spacing-06;\n  }\n}\n\n%sidebar-selected {\n  background-color: $color-blue-600;\n\n  h6 {\n    color: $color-white;\n  }\n\n  &:hover {\n    background-color: $color-blue-600;\n  }\n}\n\n%checbox-radio-before {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 2px solid $color-dark-red;\n  cursor: pointer;\n  height: 16px;\n  margin: 0;\n  width: 16px;\n\n  &:hover {\n    border-color: $color-light-pink;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%img-hover-effect {\n  @include transition(opacity 0.5s ease);\n\n  background-image: linear-gradient(42deg, $color-yellow, transparent 80%);\n  opacity: 0;\n}\n\n%button {\n  align-items: center;\n  border: none;\n  display: flex;\n  font-size: $font-size-16;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  line-height: 1;\n\n  @include devicebreak(medium) {\n    display: inline-flex;\n  }\n}\n\n%ctaimg {\n  content: '';\n  height: 1.188rem;\n  margin-left: $spacing-04;\n  margin-top: 2px;\n  width: 0.813rem;\n\n  @include devicebreak(medium) {\n    margin-top: 0;\n  }\n}\n\n%field__image {\n  background-repeat: no-repeat;\n  height: 20px;\n  left: 10px;\n  left: 14px;\n  position: absolute;\n  top: 22px;\n  width: 20px;\n  z-index: 1;\n}\n\n%feature__card {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n%arrow {\n  @include transform(translateY(-50%));\n  @include transition(all 200ms ease-in-out);\n\n  background:\n    url(#{$img-path-Iconfourback}/chevron-down.svg) no-repeat center\n    center;\n  content: '';\n  float: right;\n  height: 13px;\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  width: 20px;\n}\n\n%absolute__content {\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n%sidebar-chevron {\n  @include transition(all 0.3s ease);\n  @include transform(translateY(-50%));\n\n  background: url(#{$img-path-Icon}/chevron-down.svg) no-repeat center center;\n  content: '';\n  height: 0.813rem;\n  position: absolute;\n  right: 1.188rem;\n  top: 50%;\n  width: 20px;\n}\n\n%language_switcher {\n  border: none;\n  font-size: $font-size-14;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n%img_none {\n  background-image: none;\n}\n\n%absolute__overflow {\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n%select_default {\n  border: 2px solid $color-black;\n  color: $color-black;\n  cursor: pointer;\n  font-size: $font-size-16;\n  font-weight: 600;\n  line-height: 1.125rem;\n  margin: 0;\n  padding: $spacing-05 $spacing-50 $spacing-05 $spacing-05;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n%select_option {\n  border: 2px solid $color-black;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  min-height: 100px;\n  padding: 0 $spacing-05;\n  width: 100%;\n\n  &:focus {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%select_rtl {\n  padding-left: 3.125rem;\n  padding-right: $spacing-05;\n  text-align: right;\n}\n\n%select_rtl_after {\n  left: 16px;\n  margin: 0;\n  right: auto;\n}\n\n%no-animation {\n  -webkit-animation: none;\n  -moz-animation: none;\n  -ms-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n\n%left-to-right {\n  @include transform(translateX(-100px));\n  @include transition(\n    transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1),\n    opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1)\n  );\n\n  opacity: 0;\n  visibility: hidden;\n}\n\n%inviewport_left_right {\n  @include transform(translateX(0));\n\n  opacity: 1;\n  visibility: visible;\n}\n\n[dir='rtl'] {\n  %left-to-right {\n    @include transform(translateX(100px));\n  }\n}\n\n%scale-up {\n  @include transform(scale(0.9));\n  @include transition(transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n}\n\n%opacity-only {\n  @include transition(opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n\n  opacity: 0;\n}\n\n%inviewport_opacity_only {\n  @include transform(translateX(0));\n\n  opacity: 1;\n}\n\n%expand_to_size {\n  @include transition(max-width 0.5s ease);\n\n  margin: 0 auto;\n  max-width: 100%;\n}\n\n%expand_search {\n  border: 0;\n  border-bottom: 1px solid $color-black;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n%carousel_arrow {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 2.75rem;\n  padding: 0;\n  vertical-align: bottom;\n  width: 2.75rem;\n}\n\n%carousel_tag {\n  color: $color-black;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.48px;\n  line-height: 0.84;\n  margin-bottom: $spacing-05;\n  text-transform: uppercase;\n}\n\n%carousel_title {\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n\n%carousel_desc {\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n%carousel_bar_margin {\n  margin-bottom: $spacing-09;\n}\n\n%carousel_slider_slide {\n  @include devicebreak(medium) {\n    display: flex;\n  }\n}\n\n%header {\n  background-color: $color-gray-100;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  height: 7.1875rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n}\n\n%background-white {\n  background-color: white;\n}\n\n%sub-external {\n  align-items: center;\n  justify-content: space-between;\n}\n\n%external {\n  align-items: center;\n  content: '';\n  cursor: pointer;\n  height: 1.125rem;\n  width: 1.25rem;\n}\n\n%footerlink {\n  @extend %img_none;\n\n  color: $color-white;\n  font-size: $font-size-16;\n  line-height: 1.4;\n\n  &:hover {\n    color: $color-blue-100;\n  }\n}\n\n%footerlinkinvert {\n  color: $color-black;\n\n  &:hover {\n    color: $color-gray-600;\n  }\n}\n\n%selectoption {\n  border-top: 1px solid $color-gray-400;\n  cursor: pointer;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n//burmese lang\n:lang(my) {\n  %carousel_tag {\n    font-size: 1rem;\n  }\n\n  %paragragh-font-16 {\n    font-size: $font-size-12;\n    line-height: 1.7;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-14;\n    }\n  }\n\n  %paragragh-font-20 {\n    font-size: $font-size-14;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-16;\n    }\n  }\n\n  %paragragh-font-24 {\n    font-size: $font-size-20;\n    line-height: 1.1;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-24;\n    }\n  }\n  %button {\n    font-size: $font-size-14;\n  }\n}\n\n%logo {\n  @include transition(all 0.4s cubic-bezier(0.64, 0.05, 0.35, 1.05));\n\n  width: 40px;\n\n  @include devicebreak(xlarge) {\n    height: ($header-height-xlarge + 7px);\n    width: 60px;\n\n    &.scrolled {\n      height: $header-height-xlarge;\n    }\n  }\n\n  @include devicebreak(mediumonlytab) {\n    height: ($header-height-medium + 7px);\n\n    &.scrolled {\n      height: $header-height-medium;\n    }\n  }\n}\n\n@mixin background($background...) {\n  background: linear-gradient($background);\n}\n\n%pseudo-icon {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n%chevron-right-expanded {\n  i {\n    @include transition(width 0.3s);\n\n    box-sizing: border-box;\n    display: block;\n    height: $spacing-05;\n    left: 1.25rem;\n    position: relative;\n    width: 0;\n\n    &::before {\n      @extend %pseudo-icon;\n\n      background-color: $color-red;\n      display: none;\n      height: 2px;\n      right: 0;\n      top: 7px;\n      width: 100%;\n    }\n\n    &::after {\n      @extend %pseudo-icon;\n\n      @include transform(rotate(45deg));\n\n      border-right: 2px solid $color-red;\n      border-top: 2px solid $color-red;\n      height: $spacing-04;\n      right: 0;\n      top: 2px;\n      width: $spacing-04;\n    }\n  }\n\n  &:hover {\n    i {\n      width: $spacing-11;\n\n      &::before {\n        display: unset;\n      }\n    }\n  }\n}\n\n%progress-bar {\n  position: fixed;\n  top: 4.7rem;\n  z-index: 5;\n\n  @include devicebreak(xlarge) {\n    top: 7.1875rem;\n  }\n}\n\n%animate-link {\n  background-image:\n    linear-gradient($color-dark-red, $color-dark-red),\n    linear-gradient($color-dark-red, $color-dark-red);\n  background-position: 100% 100%, -30px 100%;\n  background-repeat: no-repeat;\n  background-size: 100% 2px, 0 1px;\n\n  &:hover {\n    @include animation(lineLoop-animation 2s linear infinite);\n  }\n}\n\n/* placehoder end */\n","@mixin devicebreak($point) {\n  @if $point==small {\n    /* small design */\n    @media (max-width: 47.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==mediumonlytab {\n    /* medium design tab */\n    @media (max-width: 89.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==medium {\n    /* medium design */\n    @media (min-width: 48em) {\n      @content;\n    }\n  }\n\n  @else if $point==large {\n    /* medium design */\n    @media (min-width: 64em) {\n      @content;\n    }\n  }\n\n  @else if $point==xlarge {\n    /* large design */\n    @media (min-width: 90em) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);