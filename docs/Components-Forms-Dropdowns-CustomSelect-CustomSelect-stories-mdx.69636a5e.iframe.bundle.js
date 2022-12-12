"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[2182],{"./stories/Components/Forms/Dropdowns/CustomSelect/CustomSelect.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,getCaptionForLocale:()=>getCaptionForLocale,select:()=>select});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_CustomSelect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Components/Forms/Dropdowns/CustomSelect/CustomSelect.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getCaptionForLocale=locale=>{switch(locale){case"english":return"Select Language";case"arabic":return"اختار اللغة";case"burmese":return"ဘာသာစကားကို ရွေးပါ။";case"japanese":return"言語を選択する";default:return"Category"}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Forms/Dropdown/Select",component:_CustomSelect__WEBPACK_IMPORTED_MODULE_3__.Z,mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"custom-select"},"Custom Select"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The custom select dropdown allows the user to select one."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The custom select dropdown element allows users to choose a single option from a list. It is used in forms when there are single choices that can be collapsed under one title."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"when-to-use"},"When to use:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"When single or custom options are to be grouped under a single title.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"formatting"},"Formatting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"default"},"Default"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"It consists of a dropdown with an arrow from which the user can select any one option."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"content"},"Content"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"In the custom dropdown select, only one option can be selected."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The direction of the arrow indicates if one option is selected. The downward arrow indicates a closed box and the upward arrow indicates an open box."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"behaviors"},"Behaviors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"states"},"States"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Dropdown boxes are either opened or closed.\nThe Custom dropdown boxes either have auto or fixed height."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Closed and Auto Height:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Closed and Fixed Height:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Open and Auto Height:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Open and Fixed Height:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Select",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_CustomSelect__WEBPACK_IMPORTED_MODULE_3__.Z,{text:caption,mdxType:"CustomSelect"})}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,'Copy the HTML from the HTML tab of Canvas.\nInclude the css and js files listed below.\nInitialize the select by calling select() function.\nIf you need a fixed height dropdown then apply Height to the "ul" tag of dropdown. It will scroll inside the dropdown.'),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"css"},"CSS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Add the base layout style from"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/base-minimal.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/base-minimal.min.css")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/custom-select.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/custom-select.min.css"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"js"},"JS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/js/select.min.js",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/js/select.min.js"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"interactions"},"Interactions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"By clicking on the arrow, the custom select dropdown box can be opened or closed."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"By clicking on the option/options, those can be selected.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"changelog"},"Changelog"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const select=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_CustomSelect__WEBPACK_IMPORTED_MODULE_3__.Z,{text:caption})};select.displayName="select",select.storyName="Select",select.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <CustomSelect text={caption}></CustomSelect>;\n}"}};const componentMeta={title:"Components/Forms/Dropdown/Select",component:_CustomSelect__WEBPACK_IMPORTED_MODULE_3__.Z,includeStories:["select"]},mdxStoryNameToKey={Select:"select"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["getCaptionForLocale","select"]}}]);