"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[8381],{"./stories/Components/Forms/SearchExpand/SearchExpand.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>SearchExpand});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),search_expand=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Components/Forms/SearchExpand/search-expand.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(search_expand.Z,options);search_expand.Z&&search_expand.Z.locals&&search_expand.Z.locals;var search_black=__webpack_require__("./stories/assets/icons/search-black.svg"),times=__webpack_require__("./stories/assets/icons/times.svg"),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),SearchExpand=function SearchExpand(){return(0,react.useEffect)((function(){!function expandSearch(){var $expand=jQuery(".expand-search"),$expandInput=jQuery(".expand-search input");$expandInput.on("input",(function(){jQuery(this).val().length>=1?jQuery(this).parent($expand).find(".close-button").addClass("show"):jQuery(this).parent($expand).find(".close-button").removeClass("show")})),jQuery(document).on("click",".expand-button",(function(){jQuery(this).siblings("input").val().length>=1&&jQuery(this).siblings(".close-button").addClass("show"),jQuery(this).parent($expand).toggleClass("open"),jQuery(this).parent($expand).hasClass("open")?jQuery(this).siblings("input").focus():(jQuery(this).siblings($expandInput).focusout(),jQuery(this).siblings(".close-button").removeClass("show"))})),jQuery(document).on("click",".expand-search .close-button",(function(){jQuery(this).siblings("input").val(""),jQuery(this).removeClass("show")})),jQuery(document).mouseup((function(e){var $container=jQuery(".expand-search"),$input=$container.find("input");($input.length<1||$input.val().length<1)&&($container.is(e.target)||0!==$container.has(e.target).length||$container.removeClass("open"))}))}()}),[]),(0,jsx_runtime.jsxs)("div",{className:"expand-search",children:[(0,jsx_runtime.jsx)("button",{className:"expand-button",children:(0,jsx_runtime.jsx)("img",{src:search_black,alt:"search expand"})}),(0,jsx_runtime.jsx)("input",{type:"text","aria-label":"expand-search"}),(0,jsx_runtime.jsx)("button",{className:"close-button",children:(0,jsx_runtime.jsx)("img",{src:times,alt:"search close"})})]})};SearchExpand.displayName="SearchExpand"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Components/Forms/SearchExpand/search-expand.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".expand-search button,.expand-search input[type=text]{border:0;border-bottom:1px solid #000;border-radius:0;cursor:pointer}.expand-search{align-items:flex-end;display:flex;position:relative}.expand-search input[type=text]{-webkit-transition:all 200ms ease-in-out;-moz-transition:all 200ms ease-in-out;-ms-transition:all 200ms ease-in-out;-o-transition:all 200ms ease-in-out;transition:all 200ms ease-in-out;background-color:#fff;box-sizing:border-box;font-size:.875rem;height:2.675rem;padding:0;position:relative;width:0}.expand-search input[type=text]:focus{box-shadow:none;outline:none}.expand-search.open input{outline:none;padding-left:.8125rem;padding-right:1.5rem;width:calc(100% - 1.6875rem);z-index:1}.expand-search button{background:none;height:2.625rem;padding:0 0 1px;width:1.6875rem;z-index:2}.expand-search button img{width:27px}.expand-search button.close-button{border:0;display:none;position:absolute;right:0}.expand-search button.close-button.show{display:block}.expand-search button.close-button img{max-width:30px}[dir=rtl] .expand-search .icon-search-black{left:inherit;right:0}[dir=rtl] .expand-search.open input{padding-left:1.5rem;padding-right:.8125rem}[dir=rtl] .expand-search .close-button{left:0;right:inherit}","",{version:3,sources:["webpack://./stories/assets/scss/_mixins.scss","webpack://./stories/Components/Forms/SearchExpand/search-expand.scss","webpack://./stories/assets/scss/_variables.scss"],names:[],mappings:"AA6cA,sDACE,QAAA,CACA,4BAAA,CACA,eAAA,CACA,cAAA,CC7cF,eACE,oBAAA,CACA,YAAA,CACA,iBAAA,CAEA,gCD0BA,wCCvBE,CDwBF,qCCxBE,CDyBF,oCCzBE,CD0BF,mCC1BE,CD2BF,gCC3BE,CAEA,qBCNU,CDOV,qBAAA,CACA,iBC2BW,CD1BX,eAAA,CACA,SAAA,CACA,iBAAA,CACA,OAAA,CAEA,sCACE,eAAA,CACA,YAAA,CAKF,0BACE,YAAA,CACA,qBAAA,CACA,oBC+BO,CD9BP,4BAAA,CACA,SAAA,CAIJ,sBAGE,eAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,SAAA,CAEA,0BACE,UAAA,CAGF,mCACE,QAAA,CACA,YAAA,CACA,iBAAA,CACA,OAAA,CAEA,wCACE,aAAA,CAGF,uCACE,cAAA,CAQJ,4CACE,YAAA,CACA,OAAA,CAIA,oCACE,mBCdK,CDeL,sBAAA,CAIJ,uCACE,MAAA,CACA,aAAA",sourcesContent:["@import './variables';\n@import './breakpoints';\n\n//background image gradient\n@mixin background-image($deg, $colorname, $opacity) {\n  background: linear-gradient($deg, $colorname, $opacity);\n}\n\n// select box appearance\n@mixin x-appearance($value) {\n  -webkit-appearance: $value;\n  -moz-appearance: $value;\n  appearance: $value;\n}\n\n//animation\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n  -moz-animation: $animation;\n  -ms-animation: $animation;\n  -o-animation: $animation;\n  animation: $animation;\n}\n\n//keyframe\n@mixin keyframes($keyframes...) {\n  -webkit-keyframes: $keyframes;\n  -moz-keyframes: $keyframes;\n  -ms-keyframes: $keyframes;\n  -o-keyframes: $keyframes;\n  keyframes: $keyframes;\n}\n\n//transition\n@mixin transition($transitions...) {\n  -webkit-transition: $transitions;\n  -moz-transition: $transitions;\n  -ms-transition: $transitions;\n  -o-transition: $transitions;\n  transition: $transitions;\n}\n\n//transition-delay\n@mixin transitiondelay($transitiondelay...) {\n  -webkit-transition-delay: $transitiondelay;\n  -moz-transition-delay: $transitiondelay;\n  -ms-transition-delay: $transitiondelay;\n  -o-transition-delay: $transitiondelay;\n  transition-delay: $transitiondelay;\n}\n\n//transform\n@mixin transform($transforms) {\n  -webkit-transform: $transforms;\n  -moz-transform: $transforms;\n  -ms-transform: $transforms;\n  -o-transform: $transforms;\n  transition: $transforms;\n}\n\n// Rotate\n@mixin rotate($deg) {\n  @include transform(rotate(#{$deg}deg));\n}\n\n// Translate\n@mixin translate($x, $y) {\n  @include transform(translate($x, $y));\n}\n\n// Scale\n@mixin scale($scale) {\n  @include transform(scale($scale));\n}\n\n// Skew\n@mixin skew($x, $y) {\n  @include transform(skew(#{$x}deg, #{$y}deg));\n}\n\n//gradient color\n@mixin gradient($direction, $list) {\n  background: -webkit-linear-gradient($direction, $list);\n  background: -moz-linear-gradient($direction, $list);\n  background: -o-linear-gradient($direction, $list);\n  background: linear-gradient($direction, $list);\n}\n\n/* mixing  end */\n\n/* placehoder start */\n%paragragh-font-14 {\n  font-size: $font-size-12;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-14;\n  }\n}\n\n%paragragh-font-16 {\n  font-size: $font-size-14;\n  line-height: 1.4;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-16;\n  }\n}\n\n%paragragh-font-20 {\n  font-size: $font-size-16;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-20;\n  }\n}\n\n%paragragh-font-24 {\n  font-size: $font-size-20;\n  line-height: 1.1;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-24;\n  }\n}\n\n%border-bottom {\n  border-bottom: 1px solid $color-gray-400;\n}\n\n%img-cover {\n  height: 100%;\n  object-fit: cover;\n  padding: 0;\n  width: 100%;\n}\n\n%border-none {\n  @extend %img_none;\n\n  border: none;\n}\n\n%header-icon {\n  background-color: $color-blue-600;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0;\n  height: 26px;\n  margin-right: $spacing-03;\n  padding: 0;\n  width: 25px;\n\n  @include devicebreak(small) {\n    margin-right: 0;\n    -webkit-mask: inherit;\n    mask: inherit;\n  }\n\n  &:hover {\n    background-color: $color-blue-400;\n  }\n}\n\n%frosted-bg {\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  background: rgba(247, 247, 247, 0.8);\n}\n\n%footer-block {\n  align-items: center;\n  border-bottom: 1px solid $color-white;\n  justify-content: space-between;\n  margin-bottom: $spacing-07;\n}\n\n%mobile-nav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\n\n%button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: block;\n  text-transform: uppercase;\n}\n\n%sdg-modal-title {\n  h2 {\n    font-size: $font-size-25;\n\n    @include devicebreak(medium) {\n      font-size: 3.438rem;\n      padding-left: $spacing-05;\n    }\n  }\n\n  h3 {\n    font-size: $font-size-20;\n\n    @include devicebreak(medium) {\n      font-size: 2.188rem;\n    }\n  }\n}\n\n%sidebar {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: $spacing-05;\n  position: relative;\n\n  @include devicebreak(medium) {\n    padding: $spacing-06;\n  }\n}\n\n%sidebar-selected {\n  background-color: $color-blue-600;\n\n  h6 {\n    color: $color-white;\n  }\n\n  &:hover {\n    background-color: $color-blue-600;\n  }\n}\n\n%checbox-radio-before {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 2px solid $color-dark-red;\n  cursor: pointer;\n  height: 16px;\n  margin: 0;\n  width: 16px;\n\n  &:hover {\n    border-color: $color-light-pink;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%img-hover-effect {\n  @include transition(opacity 0.5s ease);\n\n  background-image: linear-gradient(42deg, $color-yellow, transparent 80%);\n  opacity: 0;\n}\n\n%button {\n  align-items: center;\n  border: none;\n  display: flex;\n  font-size: $font-size-16;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  line-height: 1;\n\n  @include devicebreak(medium) {\n    display: inline-flex;\n  }\n}\n\n%ctaimg {\n  content: '';\n  height: 1.188rem;\n  margin-left: $spacing-04;\n  margin-top: 2px;\n  width: 0.813rem;\n\n  @include devicebreak(medium) {\n    margin-top: 0;\n  }\n}\n\n%field__image {\n  background-repeat: no-repeat;\n  height: 20px;\n  left: 10px;\n  left: 14px;\n  position: absolute;\n  top: 22px;\n  width: 20px;\n  z-index: 1;\n}\n\n%feature__card {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n%arrow {\n  @include transform(translateY(-50%));\n  @include transition(all 200ms ease-in-out);\n\n  background:\n    url(#{$img-path-Iconfourback}/chevron-down.svg) no-repeat center\n    center;\n  content: '';\n  float: right;\n  height: 13px;\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  width: 20px;\n}\n\n%absolute__content {\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n%sidebar-chevron {\n  @include transition(all 0.3s ease);\n  @include transform(translateY(-50%));\n\n  background: url(#{$img-path-Icon}/chevron-down.svg) no-repeat center center;\n  content: '';\n  height: 0.813rem;\n  position: absolute;\n  right: 1.188rem;\n  top: 50%;\n  width: 20px;\n}\n\n%language_switcher {\n  border: none;\n  font-size: $font-size-14;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n%img_none {\n  background-image: none;\n}\n\n%absolute__overflow {\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n%select_default {\n  border: 2px solid $color-black;\n  color: $color-black;\n  cursor: pointer;\n  font-size: $font-size-16;\n  font-weight: 600;\n  line-height: 1.125rem;\n  margin: 0;\n  padding: $spacing-05 $spacing-50 $spacing-05 $spacing-05;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n%select_option {\n  border: 2px solid $color-black;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  min-height: 100px;\n  padding: 0 $spacing-05;\n  width: 100%;\n\n  &:focus {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%select_rtl {\n  padding-left: 3.125rem;\n  padding-right: $spacing-05;\n  text-align: right;\n}\n\n%select_rtl_after {\n  left: 16px;\n  margin: 0;\n  right: auto;\n}\n\n%no-animation {\n  -webkit-animation: none;\n  -moz-animation: none;\n  -ms-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n\n%left-to-right {\n  @include transform(translateX(-100px));\n  @include transition(\n    transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1),\n    opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1)\n  );\n\n  opacity: 0;\n  visibility: hidden;\n}\n\n%inviewport_left_right {\n  @include transform(translateX(0));\n\n  opacity: 1;\n  visibility: visible;\n}\n\n[dir='rtl'] {\n  %left-to-right {\n    @include transform(translateX(100px));\n  }\n}\n\n%scale-up {\n  @include transform(scale(0.9));\n  @include transition(transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n}\n\n%opacity-only {\n  @include transition(opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n\n  opacity: 0;\n}\n\n%inviewport_opacity_only {\n  @include transform(translateX(0));\n\n  opacity: 1;\n}\n\n%expand_to_size {\n  @include transition(max-width 0.5s ease);\n\n  margin: 0 auto;\n  max-width: 100%;\n}\n\n%expand_search {\n  border: 0;\n  border-bottom: 1px solid $color-black;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n%carousel_arrow {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 2.75rem;\n  padding: 0;\n  vertical-align: bottom;\n  width: 2.75rem;\n}\n\n%carousel_tag {\n  color: $color-black;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.48px;\n  line-height: 0.84;\n  margin-bottom: $spacing-05;\n  text-transform: uppercase;\n}\n\n%carousel_title {\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n\n%carousel_desc {\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n%carousel_bar_margin {\n  margin-bottom: $spacing-09;\n}\n\n%carousel_slider_slide {\n  @include devicebreak(medium) {\n    display: flex;\n  }\n}\n\n%header {\n  background-color: $color-gray-100;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  height: 7.1875rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n}\n\n%background-white {\n  background-color: white;\n}\n\n%sub-external {\n  align-items: center;\n  justify-content: space-between;\n}\n\n%external {\n  align-items: center;\n  content: '';\n  cursor: pointer;\n  height: 1.125rem;\n  width: 1.25rem;\n}\n\n%footerlink {\n  @extend %img_none;\n\n  color: $color-white;\n  font-size: $font-size-16;\n  line-height: 1.4;\n\n  &:hover {\n    color: $color-blue-100;\n  }\n}\n\n%footerlinkinvert {\n  color: $color-black;\n\n  &:hover {\n    color: $color-gray-600;\n  }\n}\n\n%selectoption {\n  border-top: 1px solid $color-gray-400;\n  cursor: pointer;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n//burmese lang\n:lang(my) {\n  %carousel_tag {\n    font-size: 1rem;\n  }\n\n  %paragragh-font-16 {\n    font-size: $font-size-12;\n    line-height: 1.7;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-14;\n    }\n  }\n\n  %paragragh-font-20 {\n    font-size: $font-size-14;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-16;\n    }\n  }\n\n  %paragragh-font-24 {\n    font-size: $font-size-20;\n    line-height: 1.1;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-24;\n    }\n  }\n  %button {\n    font-size: $font-size-14;\n  }\n}\n\n%logo {\n  @include transition(all 0.4s cubic-bezier(0.64, 0.05, 0.35, 1.05));\n\n  width: 40px;\n\n  @include devicebreak(xlarge) {\n    height: ($header-height-xlarge + 7px);\n    width: 60px;\n\n    &.scrolled {\n      height: $header-height-xlarge;\n    }\n  }\n\n  @include devicebreak(mediumonlytab) {\n    height: ($header-height-medium + 7px);\n\n    &.scrolled {\n      height: $header-height-medium;\n    }\n  }\n}\n\n@mixin background($background...) {\n  background: linear-gradient($background);\n}\n\n%pseudo-icon {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n%chevron-right-expanded {\n  i {\n    @include transition(width 0.3s);\n\n    box-sizing: border-box;\n    display: block;\n    height: $spacing-05;\n    left: 1.25rem;\n    position: relative;\n    width: 0;\n\n    &::before {\n      @extend %pseudo-icon;\n\n      background-color: $color-red;\n      display: none;\n      height: 2px;\n      right: 0;\n      top: 7px;\n      width: 100%;\n    }\n\n    &::after {\n      @extend %pseudo-icon;\n\n      @include transform(rotate(45deg));\n\n      border-right: 2px solid $color-red;\n      border-top: 2px solid $color-red;\n      height: $spacing-04;\n      right: 0;\n      top: 2px;\n      width: $spacing-04;\n    }\n  }\n\n  &:hover {\n    i {\n      width: $spacing-11;\n\n      &::before {\n        display: unset;\n      }\n    }\n  }\n}\n\n%progress-bar {\n  position: fixed;\n  top: 4.7rem;\n  z-index: 5;\n\n  @include devicebreak(xlarge) {\n    top: 7.1875rem;\n  }\n}\n\n%animate-link {\n  background-image:\n    linear-gradient($color-dark-red, $color-dark-red),\n    linear-gradient($color-dark-red, $color-dark-red);\n  background-position: 100% 100%, -30px 100%;\n  background-repeat: no-repeat;\n  background-size: 100% 2px, 0 1px;\n\n  &:hover {\n    @include animation(lineLoop-animation 2s linear infinite);\n  }\n}\n\n/* placehoder end */\n","@import '../../../assets/scss/mixins';\n@import '../../../assets/scss/variables';\n@import '../../../assets/scss/breakpoints';\n\n.expand-search {\n  align-items: flex-end;\n  display: flex;\n  position: relative;\n\n  input[type='text'] {\n    @extend %expand_search;\n\n    @include transition(all 200ms ease-in-out);\n\n    background-color: $color-white;\n    box-sizing: border-box;\n    font-size: $font-size-14;\n    height: 2.675rem;\n    padding: 0;\n    position: relative;\n    width: 0;\n\n    &:focus {\n      box-shadow: none;\n      outline: none;\n    }\n  }\n\n  &.open {\n    input {\n      outline: none;\n      padding-left: 0.8125rem;\n      padding-right: $spacing-06;\n      width: calc(100% - 1.6875rem);\n      z-index: 1;\n    }\n  }\n\n  button {\n    @extend %expand_search;\n\n    background: none;\n    height: 2.625rem;\n    padding: 0 0 1px;\n    width: 1.6875rem;\n    z-index: 2;\n\n    img {\n      width: 27px;\n    }\n\n    &.close-button {\n      border: 0;\n      display: none;\n      position: absolute;\n      right: 0;\n\n      &.show {\n        display: block;\n      }\n\n      img {\n        max-width: 30px;\n      }\n    }\n  }\n}\n\n[dir='rtl'] {\n  .expand-search {\n    .icon-search-black {\n      left: inherit;\n      right: 0;\n    }\n\n    &.open {\n      input {\n        padding-left: $spacing-06;\n        padding-right: 0.8125rem;\n      }\n    }\n\n    .close-button {\n      left: 0;\n      right: inherit;\n    }\n  }\n}\n","// image variables\n$img-path: '../../../assets/images';\n$img-path-Icon: '../../../assets/icons';\n$img-path-Iconback: '../../assets/icons';\n$img-path-Iconfourback: '../../../../assets/icons';\n\n// COLORS\n$color-black: #000;\n$color-white: #fff;\n$color-blue-100: #b5d5f5;\n$color-blue-200: #94c4f5;\n$color-blue-300: #6babeb;\n$color-blue-400: #4f95dd;\n$color-blue-500: #3288ce;\n$color-blue-600: #006eb5;\n$color-blue-700: #1f5a95;\n$color-blue-800: #0468b1;\n$color-gray-100: #fafafa;\n$color-gray-200: #f7f7f7;\n$color-gray-300: #edeff0;\n$color-gray-400: #d4d6d8;\n$color-gray-500: #a9b1b7;\n$color-gray-600: #55606e;\n$color-gray-700: #232e3d;\n$color-light-yellow: #ffe17e;\n$color-yellow: #ffeb00;\n$color-dark-yellow: #fbc412;\n$color-light-red: #ffbcb7;\n$color-red: #ee402d;\n$color-dark-red: #d12800;\n$color-light-green: #b8ecb6;\n$color-green: #6de354;\n$color-dark-green: #59ba47;\n$color-light-azure: #a2daf3;\n$color-azure: #60d4f2;\n$color-dark-azure: #00c1ff;\n$color-light-pink: #ffb4ae;\n$color-silvery-moonlight: #ced0d3;\n$color-shuttle-gray: #55606f;\n$color-ebony-clay: #232e3e;\n\n// FONT SIZE\n$font-size-12: 0.75rem;\n$font-size-14: 0.875rem;\n$font-size-16: 1rem;\n$font-size-20: 1.25rem;\n$font-size-24: 1.5rem;\n$font-size-25: 1.563rem;\n$font-size-26: 1.625rem;\n$font-size-32: 2rem;\n$font-size-35: 2.188rem;\n\n// FONTS FAMLIY\n$Font-Family-ProximaNova: 'ProximaNova', sans-serif;\n$Font-Family-SohneBreit: 'SohneBreit', $Font-Family-ProximaNova;\n$Font-Family-NotoSans: 'NotoSans', sans-serif;\n\n// SPACING variables\n$spacing-01: 0.125rem;\n$spacing-02: 0.25rem;\n$spacing-03: 0.5rem;\n$spacing-04: 0.75rem;\n$spacing-05: 1rem;\n$spacing-06: 1.5rem;\n$spacing-07: 2rem;\n$spacing-08: 2.5rem;\n$spacing-09: 3rem;\n$spacing-10: 4rem;\n$spacing-11: 5rem;\n$spacing-12: 6rem;\n$spacing-13: 10rem;\n$spacing-36: 2.25rem;\n$spacing-44: 2.75rem;\n$spacing-50: 3.125rem;\n$spacing-60: 3.75rem;\n$spacing-70: 4.375rem;\n$spacing-76: 4.75rem;\n$spacing-90: 5.625rem;\n$spacing-100: 6.25rem;\n$spacing-136: 8.5rem;\n$spacing-330: 20.625rem;\n$spacing-320: 20rem;\n$spacing-400: 25rem;\n\n// Width variables\n$width-150: 9.375rem;\n$width-180: 11.25rem;\n$width-600: 37.5rem;\n$width-705: 44.0625rem;\n$width-840: 52.5rem;\n$width-900: 56.25rem;\n$width-1096: 68.5rem;\n$width-1440: 90rem;\n\n// Header height\n$header-height-xlarge: 115px;\n$header-height-medium: 75px;\n\n// GRADIENT COLOR LIST\n$yellow-gradient: $color-yellow 30%, rgba(255, 235, 0, 0) 110%;\n$red-gradient: $color-red 30%, rgb(240, 49, 49, 0) 110%;\n$green-gradient: $color-green 30%, rgba(0, 0, 0, 0) 110%;\n$blue-gradient: $color-azure 30%, rgb(101, 204, 244, 0) 110%;\n\n//SDG color\n$sdg-red: #e5243b;\n$sdg-mustard: #dda63a;\n$sdg-kelly-green: #4c9f38;\n$sdg-dark-red: #c5192d;\n$sdg-red-orange: #ff3a21;\n$sdg-bright-blue: #26bde2;\n$sdg-yellow: #fcc30b;\n$sdg-burgundy-red: #a21942;\n$sdg-orange: #fd6925;\n$sdg-magenta: #dd1367;\n$sdg-golden-yellow: #fd9d24;\n$sdg-dark-mustard: #bf8b2e;\n$sdg-dark-green: #3f7e44;\n$sdg-blue: #0a97d9;\n$sdg-lime-green: #56c02b;\n$sdg-royal-blue: #00689d;\n$sdg-navy-blue: #19486a;\n\n//SDG hover color\n$sdg-hover-red: #dc9099;\n$sdg-hover-mustard: #d3bb8a;\n$sdg-hover-kelly-green: #9fd092;\n$sdg-hover-dark-red: #ce8f97;\n$sdg-hover-red-orange: #ce9890;\n$sdg-hover-bright-blue: #9ac8d3;\n$sdg-hover-yellow: #d3c79d;\n$sdg-hover-burgundy-red: #ce94a6;\n$sdg-hover-orange: #d2aa98;\n$sdg-hover-magenta: #c994aa;\n$sdg-hover-golden-yellow: #c7b094;\n$sdg-hover-dark-mustard: #ceba98;\n$sdg-hover-dark-green: #a2d7a6;\n$sdg-hover-blue: #a1c6d7;\n$sdg-hover-lime-green: #abce9e;\n$sdg-hover-royal-blue: #748f9d;\n$sdg-hover-navy-blue: #a2c2d8;\n\n$author-image-radius: 50%;\n\n// language selectors\n$cyrillic: \":lang(bg),:lang(be),:lang(kk),:lang(ky),:lang(mk),:lang(mn),:lang(ru),:lang(sr),:lang(uk)\";\n\n/* variables end */\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);