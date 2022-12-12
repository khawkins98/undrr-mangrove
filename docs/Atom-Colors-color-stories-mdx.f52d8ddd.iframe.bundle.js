"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[9531,7103,7126,3275,6054,8061],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,ee:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Anchor,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./stories/Atom/Colors/color.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Foundation/Colors",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("style",null,"\n  div#story--atoms-colors--colors {\n    display: none;\n  }\n  .color_wrapper{\n    display: flex;\n  }\n   .color__item{\n    margin: 5px;\n    padding: 10px;\n    border: 1px solid #D4D6D8;\n  }\n  .color__box {\n    width: 110px;\n    height: 60px;\n    display: block;\n  }\n  .color__name{\n   font-size: 13px;\n   color: #666;\n   font-weight: 600;\n  margin: 10px 0;\n  }\n  .color__code{\n    font-size: 13px;\n    color: #666;\n  }\n  .color-wrapper {\n    display:none\n  }\n  .blue-100 { background-color: #B5D5F5;}\n  .blue-200 {background-color: #94C4F5;}\n  .blue-300 { background-color: #6BABEB;}\n  .blue-400 {background-color: #4F95DD;}\n  .blue-500 {background-color: #3288CE;}\n  .blue-600 {background-color: #006EB5;}\n  .blue-700 {background-color: #1F5A95;}\n  .gray-100 { background-color: #FAFAFA;}\n  .gray-200 {background-color: #F7F7F7;}\n  .gray-300 { background-color: #EDEFF0;}\n  .gray-400 {background-color: #D4D6D8;}\n  .gray-500 {background-color: #A9B1B7;}\n  .gray-600 {background-color: #55606E;}\n  .gray-700 {background-color: #232E3D;}\n  .light-yellow { background-color: #FFE17E;}\n  .yellow {background-color: #FFEB00;}\n  .dark-yellow  { background-color: #FBC412;}\n  .light-red {background-color: #FFBCB7;}\n  .red {background-color: #EE402D;}\n  .dark-red {background-color: #D12800;}\n  .light-green {background-color: #B8ECB6;}\n  .green {background-color: #6DE354;}\n  .dark-green {background-color: #59BA47;}\n  .light-azure {background-color: #A2DAF3;}\n  .azure {background-color: #60D4F2;}\n  .dark-azure {background-color: #00C1FF;}\n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"colors"},"Colors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Color enable users to select the colors by either choosing one from a color picker interface or by entering the color name into a text field in hexadecimal format."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Color represents the various colors that can be used on the website as per the brand guidelines. All these colors are defined as SCSS variables globally and used accordingly in all the components."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"when-to-use"},"When to use:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"To provide a color interface to the user for selecting colors.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Colors are divided into ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"Primary")," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"Accents")," colors."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"primary-colors"},"Primary Colors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Primary colors: Primary colors are the base colors of the UI, the ones that are most frequently used in the interface. They are used for brand elements and non-interactive elements. Interactive colors are used for primary links and action items that can be clicked or touched to emphasize important actions and highlight information in the application."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color_wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-100"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-100 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#B5D5F5"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-200"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-200 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#94C4F5"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-300"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-300 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#6BABEB"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-400"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-400 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#4F95DD"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-500"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-500 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#3288CE"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-600"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-600 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#006EB5"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box blue-700"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," blue-700 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#1F5A95")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color_wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-100"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-100 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#FAFAFA"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-200"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-200 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#F7F7F7"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-300"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-300 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#EDEFF0"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-400"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-400 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#D4D6D8"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-500"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-500 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#A9B1B7"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-600"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-600 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#55606E"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box gray-700"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," gray-700 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#232E3D")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"accent-colors"},"Accent Colors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Accent colors: Accent colors are the colors that are used for emphasis in a color scheme. These colors can often be bold or vivid and used sparingly to emphasize contrast or create rhythm. More toned colors such as neutrals or darker shades can also be used depending on the surroundings."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color_wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box light-yellow"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," light-yellow "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#FFEB00"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box yellow"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," yellow "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#FFEB00"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box dark-yellow"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," dark-yellow "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#FBC412"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box light-red"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," light-red "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#FFBCB7"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box red"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," red"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#EE402D"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box dark-red"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," dark-red"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#D12800")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color_wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box light-green"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," light-green"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#B8ECB6"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box green"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," green"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#6DE354"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box dark-green"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," dark-green"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#59BA47"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box light-azure"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," light-azure"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#A2DAF3"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box azure"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," azure"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#60D4F2"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__box dark-azure"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__name"}," dark-azure"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",{className:"color__code"},"Hex: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"#00C1FF")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"You can pick a color by HEX color code. e.g., #B5D5F5. Colors are also defined in the variables ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"li"},"stories/assets/scss/_variables.scss")," by the same name like blue-100 it's $color-blue-100")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundation/Colors",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]}}]);