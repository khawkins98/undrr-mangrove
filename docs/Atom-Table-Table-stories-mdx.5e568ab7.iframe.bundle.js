"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[8241,7103,7126,3275,6054,8061],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,ee:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Anchor,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./stories/Atom/Table/Table.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories,getCaptionForLocale:()=>getCaptionForLocale,table:()=>Table_stories_table});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),table=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Atom/Table/table.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(table.Z,options);table.Z&&table.Z.locals&&table.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["text","tdtext","details","variant","size","responsive"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TableScroll=function TableScroll(_ref){var tableType=_ref.tableType,children=_ref.children;return"scroll"==tableType?(0,jsx_runtime.jsx)("div",{className:"scroll",tabIndex:"0",children}):children},variant_options={default:"",striped:"striped",border:"border"},variant_options1={large:"",small:"small"},variant_options2={auto:"",stacked:"stacked",scroll:""},cls=function cls(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).length>0?classes.filter(Boolean).join(" "):null},TableTag=function TableTag(_ref2){var text=_ref2.text,tdtext=_ref2.tdtext,details=_ref2.details,variant=_ref2.variant,size=_ref2.size,responsive=_ref2.responsive,table_type=(_objectWithoutProperties(_ref2,_excluded),variant_options[""+variant]),table_size=variant_options1[""+size],table_responsive=variant_options2[""+responsive];return(0,jsx_runtime.jsx)(TableScroll,{tableType:responsive,children:"default"===variant&&"large"===size&&"auto"===responsive?(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:text}),(0,jsx_runtime.jsx)("th",{children:text}),(0,jsx_runtime.jsx)("th",{children:text})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]})]})]}):(0,jsx_runtime.jsxs)("table",{className:cls(""+table_type,""+table_size,""+table_responsive),children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:text}),(0,jsx_runtime.jsx)("th",{children:text}),(0,jsx_runtime.jsx)("th",{children:text})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:tdtext}),(0,jsx_runtime.jsx)("td",{children:details})]})]})]})})};function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}TableTag.displayName="TableTag",TableTag.defaultProps={variant:"default",size:"large",responsive:"auto"};const getCaptionForLocale=locale=>{switch(locale){case"english":return{headertext:"Table header",tdtext:"Content Goes Here",details:"In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate"};case"arabic":return{headertext:"رأس الجدول",tdtext:"المحتوى يذهب هنا",details:"في النشر والتصميم الجرافيكي ، الدمية هي عنصر نائب يستخدم عادة للتوضيح"};case"burmese":return{headertext:"ဇယားခေါင်းစီး",tdtext:"အကြောင်းအရာကဒီမှာ",details:"ထုတ်ဝေခြင်းနှင့် ဂရပ်ဖစ်ဒီဇိုင်းများတွင်၊  သည် သရုပ်ပြရန်အတွက် အသုံးများသော နေရာယူထားသော စာသားဖြစ်သည်။"};case"japanese":return{headertext:"テーブルヘッダー",tdtext:"コンテンツはここにあります",details:"出版やグラフィックデザインでは、ダミーはデモンストレーションに一般的に使用されるプレースホルダーテキストです"};default:return{headertext:"Table header",tdtext:"Content Goes Here",details:"In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate"}}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Foundation/Typography/Table",component:TableTag,argTypes:{size:{options:["large","small"],control:{type:"inline-radio"},defaultValue:"large"},variant:{options:["default","striped","border"],control:{type:"inline-radio"},defaultValue:"default"},responsive:{options:["stacked","auto","scroll"],control:{type:"inline-radio"},defaultValue:"auto"}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"table"},"Table"),(0,esm.kt)("p",null,"Tables are used to represent data sets that are easy to understand and access."),(0,esm.kt)("h3",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Tables are used for large volumes of data that can be accessed easily and understandable by the user. These tables are created using various modifiers like default, striped, bordered, small, stacked, scroll."),(0,esm.kt)("h4",{id:"when-to-use"},"When to use:"),(0,esm.kt)("p",null,"These tables are used when there is huge data. When there is a huge volume of data to handle. Using this the data can be accessed easily."),(0,esm.kt)("h3",{id:"formatting"},"Formatting"),(0,esm.kt)("h4",{id:"default"},"Default"),(0,esm.kt)("p",null,"The table is large in size, variant default and responsive is auto"),(0,esm.kt)("h3",{id:"behaviors"},"Behaviors"),(0,esm.kt)("h4",{id:"states"},"States"),(0,esm.kt)("p",null,"The tables are created using various modifiers:"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Default"),": In this, there are 2 different states:"),(0,esm.kt)("p",null,"Large: In this state, the table size will be large, the variant is the default, and has auto responsive.\nSmall: In the state, the table size is small, the variant is the default, and has auto responsive."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Selected"),": In this, it has 2 different types of modifiers:"),(0,esm.kt)("p",null,"Striped: The table size can be larger, or small, the variant is striped and the responsiveness of the table is either stacked, auto or scroll."),(0,esm.kt)("p",null,"Stripped with stacked table view: In this, the table has stripped rows with stacked views."),(0,esm.kt)("p",null,"Stripped with scrolled table view: In this, the table has a stripped style of view with scrollable content."),(0,esm.kt)("p",null,"The table size can be large or small, the variant is the border. The responsiveness of the table is either stacked, auto or scroll."),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Border with stacked table view: This table has a border and will be stacked."),(0,esm.kt)("li",{parentName:"ul"},"Border with scroll table view:  In this, the table has a border and will be scrollable.")),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Table",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,esm.kt)(TableTag,_extends({text:caption.headertext,tdtext:caption.tdtext,details:caption.details},args,{mdxType:"TableTag"}))}))),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Select the size control as either Large or Small, variant as Default, Stripped or Border and responsive control as Stacked, Auto or Scroll from the control tab of canvas."),(0,esm.kt)("li",{parentName:"ul"},"Copy the HTML from the HTML tab and include the css mentioned below.")),(0,esm.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,esm.kt)("h4",{id:"css"},"CSS:"),(0,esm.kt)("p",null,"Add the base layout style from"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/base-minimal.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/base-minimal.min.css")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/table.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/table.min.css"))),(0,esm.kt)("h4",{id:"js"},"JS:"),(0,esm.kt)("p",null,"NA"),(0,esm.kt)("h3",{id:"interactions"},"Interactions"),(0,esm.kt)("p",null,"No interactions are needed with the progress bar."),(0,esm.kt)("h3",{id:"changelog"},"Changelog"),(0,esm.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const Table_stories_table=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,esm.kt)(TableTag,_extends({text:caption.headertext,tdtext:caption.tdtext,details:caption.details},args))};Table_stories_table.displayName="table",Table_stories_table.storyName="Table",Table_stories_table.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <TableTag text={caption.headertext} tdtext={caption.tdtext} details={caption.details} {...args}></TableTag>;\n}"}};const componentMeta={title:"Foundation/Typography/Table",component:TableTag,argTypes:{size:{options:["large","small"],control:{type:"inline-radio"},defaultValue:"large"},variant:{options:["default","striped","border"],control:{type:"inline-radio"},defaultValue:"default"},responsive:{options:["stacked","auto","scroll"],control:{type:"inline-radio"},defaultValue:"auto"}},includeStories:["table"]},mdxStoryNameToKey={Table:"table"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Table_stories=componentMeta,__namedExportsOrder=["getCaptionForLocale","table"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./stories/Atom/Table/table.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"tbody tr{border-bottom:1px solid #d4d6d8}table.stacked.border tr th,table.stacked.border tr td,table.striped tr{border:none}table.stacked.border tr th,table.stacked.border tr td,table.striped tr{background-image:none}table{border-collapse:collapse;border-spacing:0;width:100%}@media(min-width: 48em){table{width:auto}}table.small th,table.small td{font-size:1rem;-webkit-text-size-adjust:100%}table.striped tr:nth-child(even){background-color:#f7f7f7}table.border{border-collapse:collapse}table.border th,table.border td{border:1px solid #d4d6d8}table.stacked th,table.stacked td{display:block}@media(min-width: 48em){table.stacked th,table.stacked td{display:table-cell}}table.stacked thead tr{display:none}@media(min-width: 48em){table.stacked thead tr{display:table-row}}table.stacked.border tr{border:1px solid #d4d6d8}@media(min-width: 48em){table.stacked.border tr th,table.stacked.border tr td{border:1px solid #d4d6d8}}th,td{font-size:1.25rem;line-height:1.4;padding:.75rem;vertical-align:top}@media(min-width: 48em){th,td{padding:.75rem 2.5rem .75rem .75rem}}thead tr th{background-color:#edeff0;font-weight:600;text-align:left}.scroll{overflow-x:auto}.scroll thead th{white-space:nowrap}.scroll th,.scroll td{-webkit-text-size-adjust:100%}[dir=rtl] th,[dir=rtl] td{text-align:right}@media(min-width: 48em){[dir=rtl] th,[dir=rtl] td{padding:.75rem .75rem .75rem 2.5rem}}:lang(my) th,:lang(my) td{line-height:1.7}","",{version:3,sources:["webpack://./stories/assets/scss/_mixins.scss","webpack://./stories/Atom/Table/table.scss","webpack://./stories/assets/scss/_breakpoints.scss","webpack://./stories/assets/scss/_variables.scss"],names:[],mappings:"AA6HA,SACE,+BAAA,CAUF,uEAGE,WAAA,CAqNF,uEACE,qBAAA,CC5VF,MACE,wBAAA,CACA,gBAAA,CACA,UAAA,CCSE,wBDZJ,MAMI,UAAA,CAAA,CAIA,8BAEE,cE2BS,CF1BT,6BAAA,CAQA,iCACE,wBETS,CFcf,aACE,wBAAA,CAEA,gCAEE,wBAAA,CAKF,kCAEE,aAAA,CC3BF,wBDyBA,kCAKI,kBAAA,CAAA,CAKF,uBACE,YAAA,CCpCJ,wBDmCE,uBAII,iBAAA,CAAA,CAMJ,wBACE,wBAAA,CC9CJ,wBDgDI,sDAKI,wBAAA,CAAA,CAQZ,MAEE,iBEnCa,CFoCb,eAAA,CACA,cErBW,CFsBX,kBAAA,CClEE,wBD6DJ,MAQI,mCAAA,CAAA,CAMA,YACE,wBE1EW,CF2EX,eAAA,CACA,eAAA,CAWN,QACE,eAAA,CAGE,iBACE,kBAAA,CAIJ,sBAEE,6BAAA,CAKF,0BAEE,gBAAA,CC3GA,wBDyGF,0BAKI,mCAAA,CAAA,CAOJ,0BAEE,eAAA",sourcesContent:["@import './variables';\n@import './breakpoints';\n\n//background image gradient\n@mixin background-image($deg, $colorname, $opacity) {\n  background: linear-gradient($deg, $colorname, $opacity);\n}\n\n// select box appearance\n@mixin x-appearance($value) {\n  -webkit-appearance: $value;\n  -moz-appearance: $value;\n  appearance: $value;\n}\n\n//animation\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n  -moz-animation: $animation;\n  -ms-animation: $animation;\n  -o-animation: $animation;\n  animation: $animation;\n}\n\n//keyframe\n@mixin keyframes($keyframes...) {\n  -webkit-keyframes: $keyframes;\n  -moz-keyframes: $keyframes;\n  -ms-keyframes: $keyframes;\n  -o-keyframes: $keyframes;\n  keyframes: $keyframes;\n}\n\n//transition\n@mixin transition($transitions...) {\n  -webkit-transition: $transitions;\n  -moz-transition: $transitions;\n  -ms-transition: $transitions;\n  -o-transition: $transitions;\n  transition: $transitions;\n}\n\n//transition-delay\n@mixin transitiondelay($transitiondelay...) {\n  -webkit-transition-delay: $transitiondelay;\n  -moz-transition-delay: $transitiondelay;\n  -ms-transition-delay: $transitiondelay;\n  -o-transition-delay: $transitiondelay;\n  transition-delay: $transitiondelay;\n}\n\n//transform\n@mixin transform($transforms) {\n  -webkit-transform: $transforms;\n  -moz-transform: $transforms;\n  -ms-transform: $transforms;\n  -o-transform: $transforms;\n  transition: $transforms;\n}\n\n// Rotate\n@mixin rotate($deg) {\n  @include transform(rotate(#{$deg}deg));\n}\n\n// Translate\n@mixin translate($x, $y) {\n  @include transform(translate($x, $y));\n}\n\n// Scale\n@mixin scale($scale) {\n  @include transform(scale($scale));\n}\n\n// Skew\n@mixin skew($x, $y) {\n  @include transform(skew(#{$x}deg, #{$y}deg));\n}\n\n//gradient color\n@mixin gradient($direction, $list) {\n  background: -webkit-linear-gradient($direction, $list);\n  background: -moz-linear-gradient($direction, $list);\n  background: -o-linear-gradient($direction, $list);\n  background: linear-gradient($direction, $list);\n}\n\n/* mixing  end */\n\n/* placehoder start */\n%paragragh-font-14 {\n  font-size: $font-size-12;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-14;\n  }\n}\n\n%paragragh-font-16 {\n  font-size: $font-size-14;\n  line-height: 1.4;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-16;\n  }\n}\n\n%paragragh-font-20 {\n  font-size: $font-size-16;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-20;\n  }\n}\n\n%paragragh-font-24 {\n  font-size: $font-size-20;\n  line-height: 1.1;\n\n  @include devicebreak(medium) {\n    font-size: $font-size-24;\n  }\n}\n\n%border-bottom {\n  border-bottom: 1px solid $color-gray-400;\n}\n\n%img-cover {\n  height: 100%;\n  object-fit: cover;\n  padding: 0;\n  width: 100%;\n}\n\n%border-none {\n  @extend %img_none;\n\n  border: none;\n}\n\n%header-icon {\n  background-color: $color-blue-600;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0;\n  height: 26px;\n  margin-right: $spacing-03;\n  padding: 0;\n  width: 25px;\n\n  @include devicebreak(small) {\n    margin-right: 0;\n    -webkit-mask: inherit;\n    mask: inherit;\n  }\n\n  &:hover {\n    background-color: $color-blue-400;\n  }\n}\n\n%frosted-bg {\n  -webkit-backdrop-filter: blur(18px);\n  backdrop-filter: blur(18px);\n  background: rgba(247, 247, 247, 0.8);\n}\n\n%footer-block {\n  align-items: center;\n  border-bottom: 1px solid $color-white;\n  justify-content: space-between;\n  margin-bottom: $spacing-07;\n}\n\n%mobile-nav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n}\n\n%button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: block;\n  text-transform: uppercase;\n}\n\n%sdg-modal-title {\n  h2 {\n    font-size: $font-size-25;\n\n    @include devicebreak(medium) {\n      font-size: 3.438rem;\n      padding-left: $spacing-05;\n    }\n  }\n\n  h3 {\n    font-size: $font-size-20;\n\n    @include devicebreak(medium) {\n      font-size: 2.188rem;\n    }\n  }\n}\n\n%sidebar {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: $spacing-05;\n  position: relative;\n\n  @include devicebreak(medium) {\n    padding: $spacing-06;\n  }\n}\n\n%sidebar-selected {\n  background-color: $color-blue-600;\n\n  h6 {\n    color: $color-white;\n  }\n\n  &:hover {\n    background-color: $color-blue-600;\n  }\n}\n\n%checbox-radio-before {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 2px solid $color-dark-red;\n  cursor: pointer;\n  height: 16px;\n  margin: 0;\n  width: 16px;\n\n  &:hover {\n    border-color: $color-light-pink;\n  }\n\n  &:focus-visible {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%img-hover-effect {\n  @include transition(opacity 0.5s ease);\n\n  background-image: linear-gradient(42deg, $color-yellow, transparent 80%);\n  opacity: 0;\n}\n\n%button {\n  align-items: center;\n  border: none;\n  display: flex;\n  font-size: $font-size-16;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  line-height: 1;\n\n  @include devicebreak(medium) {\n    display: inline-flex;\n  }\n}\n\n%ctaimg {\n  content: '';\n  height: 1.188rem;\n  margin-left: $spacing-04;\n  margin-top: 2px;\n  width: 0.813rem;\n\n  @include devicebreak(medium) {\n    margin-top: 0;\n  }\n}\n\n%field__image {\n  background-repeat: no-repeat;\n  height: 20px;\n  left: 10px;\n  left: 14px;\n  position: absolute;\n  top: 22px;\n  width: 20px;\n  z-index: 1;\n}\n\n%feature__card {\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n%arrow {\n  @include transform(translateY(-50%));\n  @include transition(all 200ms ease-in-out);\n\n  background:\n    url(#{$img-path-Iconfourback}/chevron-down.svg) no-repeat center\n    center;\n  content: '';\n  float: right;\n  height: 13px;\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  width: 20px;\n}\n\n%absolute__content {\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n%sidebar-chevron {\n  @include transition(all 0.3s ease);\n  @include transform(translateY(-50%));\n\n  background: url(#{$img-path-Icon}/chevron-down.svg) no-repeat center center;\n  content: '';\n  height: 0.813rem;\n  position: absolute;\n  right: 1.188rem;\n  top: 50%;\n  width: 20px;\n}\n\n%language_switcher {\n  border: none;\n  font-size: $font-size-14;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n%img_none {\n  background-image: none;\n}\n\n%absolute__overflow {\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n%select_default {\n  border: 2px solid $color-black;\n  color: $color-black;\n  cursor: pointer;\n  font-size: $font-size-16;\n  font-weight: 600;\n  line-height: 1.125rem;\n  margin: 0;\n  padding: $spacing-05 $spacing-50 $spacing-05 $spacing-05;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n%select_option {\n  border: 2px solid $color-black;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  min-height: 100px;\n  padding: 0 $spacing-05;\n  width: 100%;\n\n  &:focus {\n    box-shadow: 0 0 4px $color-blue-800;\n    outline: 0;\n  }\n}\n\n%select_rtl {\n  padding-left: 3.125rem;\n  padding-right: $spacing-05;\n  text-align: right;\n}\n\n%select_rtl_after {\n  left: 16px;\n  margin: 0;\n  right: auto;\n}\n\n%no-animation {\n  -webkit-animation: none;\n  -moz-animation: none;\n  -ms-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n\n%left-to-right {\n  @include transform(translateX(-100px));\n  @include transition(\n    transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1),\n    opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1)\n  );\n\n  opacity: 0;\n  visibility: hidden;\n}\n\n%inviewport_left_right {\n  @include transform(translateX(0));\n\n  opacity: 1;\n  visibility: visible;\n}\n\n[dir='rtl'] {\n  %left-to-right {\n    @include transform(translateX(100px));\n  }\n}\n\n%scale-up {\n  @include transform(scale(0.9));\n  @include transition(transform 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n}\n\n%opacity-only {\n  @include transition(opacity 1.2s cubic-bezier(0.34, 0.41, 0.03, 1));\n\n  opacity: 0;\n}\n\n%inviewport_opacity_only {\n  @include transform(translateX(0));\n\n  opacity: 1;\n}\n\n%expand_to_size {\n  @include transition(max-width 0.5s ease);\n\n  margin: 0 auto;\n  max-width: 100%;\n}\n\n%expand_search {\n  border: 0;\n  border-bottom: 1px solid $color-black;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n%carousel_arrow {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 2.75rem;\n  padding: 0;\n  vertical-align: bottom;\n  width: 2.75rem;\n}\n\n%carousel_tag {\n  color: $color-black;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.48px;\n  line-height: 0.84;\n  margin-bottom: $spacing-05;\n  text-transform: uppercase;\n}\n\n%carousel_title {\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n\n%carousel_desc {\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n%carousel_bar_margin {\n  margin-bottom: $spacing-09;\n}\n\n%carousel_slider_slide {\n  @include devicebreak(medium) {\n    display: flex;\n  }\n}\n\n%header {\n  background-color: $color-gray-100;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  height: 7.1875rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n}\n\n%background-white {\n  background-color: white;\n}\n\n%sub-external {\n  align-items: center;\n  justify-content: space-between;\n}\n\n%external {\n  align-items: center;\n  content: '';\n  cursor: pointer;\n  height: 1.125rem;\n  width: 1.25rem;\n}\n\n%footerlink {\n  @extend %img_none;\n\n  color: $color-white;\n  font-size: $font-size-16;\n  line-height: 1.4;\n\n  &:hover {\n    color: $color-blue-100;\n  }\n}\n\n%footerlinkinvert {\n  color: $color-black;\n\n  &:hover {\n    color: $color-gray-600;\n  }\n}\n\n%selectoption {\n  border-top: 1px solid $color-gray-400;\n  cursor: pointer;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n//burmese lang\n:lang(my) {\n  %carousel_tag {\n    font-size: 1rem;\n  }\n\n  %paragragh-font-16 {\n    font-size: $font-size-12;\n    line-height: 1.7;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-14;\n    }\n  }\n\n  %paragragh-font-20 {\n    font-size: $font-size-14;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-16;\n    }\n  }\n\n  %paragragh-font-24 {\n    font-size: $font-size-20;\n    line-height: 1.1;\n\n    @include devicebreak(medium) {\n      font-size: $font-size-24;\n    }\n  }\n  %button {\n    font-size: $font-size-14;\n  }\n}\n\n%logo {\n  @include transition(all 0.4s cubic-bezier(0.64, 0.05, 0.35, 1.05));\n\n  width: 40px;\n\n  @include devicebreak(xlarge) {\n    height: ($header-height-xlarge + 7px);\n    width: 60px;\n\n    &.scrolled {\n      height: $header-height-xlarge;\n    }\n  }\n\n  @include devicebreak(mediumonlytab) {\n    height: ($header-height-medium + 7px);\n\n    &.scrolled {\n      height: $header-height-medium;\n    }\n  }\n}\n\n@mixin background($background...) {\n  background: linear-gradient($background);\n}\n\n%pseudo-icon {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n%chevron-right-expanded {\n  i {\n    @include transition(width 0.3s);\n\n    box-sizing: border-box;\n    display: block;\n    height: $spacing-05;\n    left: 1.25rem;\n    position: relative;\n    width: 0;\n\n    &::before {\n      @extend %pseudo-icon;\n\n      background-color: $color-red;\n      display: none;\n      height: 2px;\n      right: 0;\n      top: 7px;\n      width: 100%;\n    }\n\n    &::after {\n      @extend %pseudo-icon;\n\n      @include transform(rotate(45deg));\n\n      border-right: 2px solid $color-red;\n      border-top: 2px solid $color-red;\n      height: $spacing-04;\n      right: 0;\n      top: 2px;\n      width: $spacing-04;\n    }\n  }\n\n  &:hover {\n    i {\n      width: $spacing-11;\n\n      &::before {\n        display: unset;\n      }\n    }\n  }\n}\n\n%progress-bar {\n  position: fixed;\n  top: 4.7rem;\n  z-index: 5;\n\n  @include devicebreak(xlarge) {\n    top: 7.1875rem;\n  }\n}\n\n%animate-link {\n  background-image:\n    linear-gradient($color-dark-red, $color-dark-red),\n    linear-gradient($color-dark-red, $color-dark-red);\n  background-position: 100% 100%, -30px 100%;\n  background-repeat: no-repeat;\n  background-size: 100% 2px, 0 1px;\n\n  &:hover {\n    @include animation(lineLoop-animation 2s linear infinite);\n  }\n}\n\n/* placehoder end */\n","@import '../../assets/scss/mixins';\n@import '../../assets/scss/breakpoints';\n@import '../../assets/scss/variables';\n\n/* table tag start */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n\n  @include devicebreak(medium) {\n    width: auto;\n  }\n\n  &.small {\n    th,\n    td {\n      font-size: $font-size-16;\n      -webkit-text-size-adjust: 100%;\n    }\n  }\n\n  &.striped {\n    tr {\n      @extend %border-none;\n\n      &:nth-child(even) {\n        background-color: $color-gray-200;\n      }\n    }\n  }\n\n  &.border {\n    border-collapse: collapse;\n\n    th,\n    td {\n      border: 1px solid $color-gray-400;\n    }\n  }\n\n  &.stacked {\n    th,\n    td {\n      display: block;\n\n      @include devicebreak(medium) {\n        display: table-cell;\n      }\n    }\n\n    thead {\n      tr {\n        display: none;\n\n        @include devicebreak(medium) {\n          display: table-row;\n        }\n      }\n    }\n\n    &.border {\n      tr {\n        border: 1px solid $color-gray-400;\n\n        th,\n        td {\n          @extend %border-none;\n\n          @include devicebreak(medium) {\n            border: 1px solid $color-gray-400;\n          }\n        }\n      }\n    }\n  }\n}\n\nth,\ntd {\n  font-size: $font-size-20;\n  line-height: 1.4;\n  padding: $spacing-04;\n  vertical-align: top;\n\n  @include devicebreak(medium) {\n    padding: $spacing-04 $spacing-08 $spacing-04 $spacing-04;\n  }\n}\n\nthead {\n  tr {\n    th {\n      background-color: $color-gray-300;\n      font-weight: 600;\n      text-align: left;\n    }\n  }\n}\n\ntbody {\n  tr {\n    @extend %border-bottom;\n  }\n}\n\n.scroll {\n  overflow-x: auto;\n\n  thead {\n    th {\n      white-space: nowrap;\n    }\n  }\n\n  th,\n  td {\n    -webkit-text-size-adjust: 100%;\n  }\n}\n\n[dir='rtl'] {\n  th,\n  td {\n    text-align: right;\n\n    @include devicebreak(medium) {\n      padding: $spacing-04 $spacing-04 $spacing-04 $spacing-08;\n    }\n  }\n}\n\n// burmese lang\n:lang(my) {\n  th,\n  td {\n    line-height: 1.7;\n  }\n}\n\n/* table tag end */\n","@mixin devicebreak($point) {\n  @if $point==small {\n    /* small design */\n    @media (max-width: 47.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==mediumonlytab {\n    /* medium design tab */\n    @media (max-width: 89.9375em) {\n      @content;\n    }\n  }\n\n  @else if $point==medium {\n    /* medium design */\n    @media (min-width: 48em) {\n      @content;\n    }\n  }\n\n  @else if $point==large {\n    /* medium design */\n    @media (min-width: 64em) {\n      @content;\n    }\n  }\n\n  @else if $point==xlarge {\n    /* large design */\n    @media (min-width: 90em) {\n      @content;\n    }\n  }\n}\n","// image variables\n$img-path: '../../../assets/images';\n$img-path-Icon: '../../../assets/icons';\n$img-path-Iconback: '../../assets/icons';\n$img-path-Iconfourback: '../../../../assets/icons';\n\n// COLORS\n$color-black: #000;\n$color-white: #fff;\n$color-blue-100: #b5d5f5;\n$color-blue-200: #94c4f5;\n$color-blue-300: #6babeb;\n$color-blue-400: #4f95dd;\n$color-blue-500: #3288ce;\n$color-blue-600: #006eb5;\n$color-blue-700: #1f5a95;\n$color-blue-800: #0468b1;\n$color-gray-100: #fafafa;\n$color-gray-200: #f7f7f7;\n$color-gray-300: #edeff0;\n$color-gray-400: #d4d6d8;\n$color-gray-500: #a9b1b7;\n$color-gray-600: #55606e;\n$color-gray-700: #232e3d;\n$color-light-yellow: #ffe17e;\n$color-yellow: #ffeb00;\n$color-dark-yellow: #fbc412;\n$color-light-red: #ffbcb7;\n$color-red: #ee402d;\n$color-dark-red: #d12800;\n$color-light-green: #b8ecb6;\n$color-green: #6de354;\n$color-dark-green: #59ba47;\n$color-light-azure: #a2daf3;\n$color-azure: #60d4f2;\n$color-dark-azure: #00c1ff;\n$color-light-pink: #ffb4ae;\n$color-silvery-moonlight: #ced0d3;\n$color-shuttle-gray: #55606f;\n$color-ebony-clay: #232e3e;\n\n// FONT SIZE\n$font-size-12: 0.75rem;\n$font-size-14: 0.875rem;\n$font-size-16: 1rem;\n$font-size-20: 1.25rem;\n$font-size-24: 1.5rem;\n$font-size-25: 1.563rem;\n$font-size-26: 1.625rem;\n$font-size-32: 2rem;\n$font-size-35: 2.188rem;\n\n// FONTS FAMLIY\n$Font-Family-ProximaNova: 'ProximaNova', sans-serif;\n$Font-Family-SohneBreit: 'SohneBreit', $Font-Family-ProximaNova;\n$Font-Family-NotoSans: 'NotoSans', sans-serif;\n\n// SPACING variables\n$spacing-01: 0.125rem;\n$spacing-02: 0.25rem;\n$spacing-03: 0.5rem;\n$spacing-04: 0.75rem;\n$spacing-05: 1rem;\n$spacing-06: 1.5rem;\n$spacing-07: 2rem;\n$spacing-08: 2.5rem;\n$spacing-09: 3rem;\n$spacing-10: 4rem;\n$spacing-11: 5rem;\n$spacing-12: 6rem;\n$spacing-13: 10rem;\n$spacing-36: 2.25rem;\n$spacing-44: 2.75rem;\n$spacing-50: 3.125rem;\n$spacing-60: 3.75rem;\n$spacing-70: 4.375rem;\n$spacing-76: 4.75rem;\n$spacing-90: 5.625rem;\n$spacing-100: 6.25rem;\n$spacing-136: 8.5rem;\n$spacing-330: 20.625rem;\n$spacing-320: 20rem;\n$spacing-400: 25rem;\n\n// Width variables\n$width-150: 9.375rem;\n$width-180: 11.25rem;\n$width-600: 37.5rem;\n$width-705: 44.0625rem;\n$width-840: 52.5rem;\n$width-900: 56.25rem;\n$width-1096: 68.5rem;\n$width-1440: 90rem;\n\n// Header height\n$header-height-xlarge: 115px;\n$header-height-medium: 75px;\n\n// GRADIENT COLOR LIST\n$yellow-gradient: $color-yellow 30%, rgba(255, 235, 0, 0) 110%;\n$red-gradient: $color-red 30%, rgb(240, 49, 49, 0) 110%;\n$green-gradient: $color-green 30%, rgba(0, 0, 0, 0) 110%;\n$blue-gradient: $color-azure 30%, rgb(101, 204, 244, 0) 110%;\n\n//SDG color\n$sdg-red: #e5243b;\n$sdg-mustard: #dda63a;\n$sdg-kelly-green: #4c9f38;\n$sdg-dark-red: #c5192d;\n$sdg-red-orange: #ff3a21;\n$sdg-bright-blue: #26bde2;\n$sdg-yellow: #fcc30b;\n$sdg-burgundy-red: #a21942;\n$sdg-orange: #fd6925;\n$sdg-magenta: #dd1367;\n$sdg-golden-yellow: #fd9d24;\n$sdg-dark-mustard: #bf8b2e;\n$sdg-dark-green: #3f7e44;\n$sdg-blue: #0a97d9;\n$sdg-lime-green: #56c02b;\n$sdg-royal-blue: #00689d;\n$sdg-navy-blue: #19486a;\n\n//SDG hover color\n$sdg-hover-red: #dc9099;\n$sdg-hover-mustard: #d3bb8a;\n$sdg-hover-kelly-green: #9fd092;\n$sdg-hover-dark-red: #ce8f97;\n$sdg-hover-red-orange: #ce9890;\n$sdg-hover-bright-blue: #9ac8d3;\n$sdg-hover-yellow: #d3c79d;\n$sdg-hover-burgundy-red: #ce94a6;\n$sdg-hover-orange: #d2aa98;\n$sdg-hover-magenta: #c994aa;\n$sdg-hover-golden-yellow: #c7b094;\n$sdg-hover-dark-mustard: #ceba98;\n$sdg-hover-dark-green: #a2d7a6;\n$sdg-hover-blue: #a1c6d7;\n$sdg-hover-lime-green: #abce9e;\n$sdg-hover-royal-blue: #748f9d;\n$sdg-hover-navy-blue: #a2c2d8;\n\n$author-image-radius: 50%;\n\n// language selectors\n$cyrillic: \":lang(bg),:lang(be),:lang(kk),:lang(ky),:lang(mk),:lang(mn),:lang(ru),:lang(sr),:lang(uk)\";\n\n/* variables end */\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);