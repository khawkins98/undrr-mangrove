"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[5258,7103,7126,3275,6054,8061],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,ee:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Anchor,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./stories/Components/UIcomponents/Buttons/CtaLink/CtaLink.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,ctaLink:()=>ctaLink,default:()=>__WEBPACK_DEFAULT_EXPORT__,getCaptionForLocale:()=>getCaptionForLocale});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_CtaLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Components/UIcomponents/Buttons/CtaLink/CtaLink.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getCaptionForLocale=locale=>{switch(locale){case"english":return{detail1:"READ MORE"};case"arabic":return{detail1:"اقرأ أكثر"};case"burmese":return{detail1:"ပိုပြီးဖတ်ပါ"};case"japanese":return{detail1:"続きを読む"};default:return{detail1:"READ MORE"}}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/UI components/Buttons/CTA link",argTypes:{Type:{options:["Expanding Arrow","Space"],control:{type:"inline-radio"},defaultValue:"Expanding Arrow"},Tag:{options:["Hyperlink","Inline"],control:{type:"inline-radio"},defaultValue:"Hyperlink"}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"buttons-and-labels"},"Buttons and Labels"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"A button describes what action will be performed when a user clicks or touches it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"A button describes the call to action that will be performed when the user clicks/touches it. It has a label and an optional animation."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"when-to-use"},"When to use:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Buttons should be used as primary or secondary calls to actions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Ideally, a page should have one or two primary buttons only. Other call-to-actions should be shown as secondary buttons"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Examples of buttons can be to “VIEW MORE” or “READ MORE” or “SIGN UP”"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"If there are multiple choices for an action item, one default button should be active and the other buttons inactive")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"formatting"},"Formatting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"default"},"Default"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"There are multiple button types in our design system"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Primary button with arrow and without arrows"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Secondary buttons without the arrow"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"CTA links with and without expanding arrows"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Chips")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"content"},"Content"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"behaviors"},"Behaviors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"states"},"States"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"CTA Link:\nThe CTA link with the arrow prompts the users to take action. and is in default state but the arrow does not expand."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The CTA links with the arrow in the hover state which changes its appearance once the mouse hovers over it but the arrow does not expand."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The CTA link with space expand in default state is a space expand link where the space after the text expands but the arrow does not."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The CTA link with the arrow expand is in a hover state. When the mouse hovers over the link the text changes its appearance and the arrow expands."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"CTA link",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return args.button_option=args.Tag,delete args.Tag,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_CtaLink__WEBPACK_IMPORTED_MODULE_3__.E,_extends({label:caption.detail1},args,{mdxType:"Ctalink"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Copy the HTML from the HTML Tab of canvas for either Chips, CTA Button, and CTA Link from the controls."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"Include the CSS files listed below concerning the button you choose.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"css"},"CSS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Add the base layout style from"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/base-minimal.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/base-minimal.min.css")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/cta-link.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/cta-link.min.css"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Use above CSS concerning CTA link."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"js"},"JS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"NA"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"interactions"},"Interactions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"The hover state is applied to the entire button.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"changelog"},"Changelog"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const ctaLink=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return args.button_option=args.Tag,delete args.Tag,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_CtaLink__WEBPACK_IMPORTED_MODULE_3__.E,_extends({label:caption.detail1},args))};ctaLink.displayName="ctaLink",ctaLink.storyName="CTA link",ctaLink.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  // replace key\n  args['button_option'] = args['Tag'];\n  delete args['Tag'];\n  return <Ctalink label={caption.detail1} {...args}></Ctalink>;\n}"}};const componentMeta={title:"Components/UI components/Buttons/CTA link",argTypes:{Type:{options:["Expanding Arrow","Space"],control:{type:"inline-radio"},defaultValue:"Expanding Arrow"},Tag:{options:["Hyperlink","Inline"],control:{type:"inline-radio"},defaultValue:"Hyperlink"}},includeStories:["ctaLink"]},mdxStoryNameToKey={"CTA link":"ctaLink"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["getCaptionForLocale","ctaLink"]}}]);