"use strict";(self.webpackChunk_khawkins_undrr_mangrove=self.webpackChunk_khawkins_undrr_mangrove||[]).push([[1436],{"./stories/Components/Forms/InputFields/InputFields.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,date:()=>date,default:()=>__WEBPACK_DEFAULT_EXPORT__,getCaptionForLocale:()=>getCaptionForLocale,number:()=>number,password:()=>password,telephone:()=>telephone,text:()=>text});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_InputFields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Components/Forms/InputFields/InputFields.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getCaptionForLocale=locale=>{switch(locale){case"english":return{detail1:"Form Label:",detail2:"*Error: this field is required",detail3:"Search",detail4:"Enter search term",detail5:"Number of projects",detail6:"Create password",detail7:"Password",detail8:"8 characters minimum",detail9:"Phone number",detail10:"Brief description",text:"Date label",text2:"Enter text",text3:"Placeholder"};case"arabic":return{detail1:"تسمية النموذج:",detail2:"* خطأ: هذا الحقل مطلوب",detail3:"بحث",detail4:"أدخل مصطلح البحث",detail5:"عدد المشاريع",detail6:"أنشئ كلمة مرور",detail7:"كلمه السر",detail8:"8 أحرف كحد أدنى",detail9:"رقم الهاتف",detail10:"وصف مختصر",text:"تسمية التاريخ",text2:"أدخل النص",text3:"نائب"};case"burmese":return{detail1:"ပုံစံတံဆိပ်:",detail2:"*အမှား - ဤအကွက်လိုအပ်သည်",detail3:"ရှာဖွေပါ",detail4:"ရှာဖွေရေးစာလုံးရိုက်ထည့်ပါ",detail5:"စီမံကိန်းအရေအတွက်",detail6:"စကားဝှက်ဖန်တီးပါ",detail7:"စကားဝှက်",detail8:"အနည်းဆုံးစာလုံး ၈ လုံး",detail9:"ဖုန်းနံပါတ်",detail10:"အကျဉ်းချုပ်ဖော်ပြချက်",text:"ရက်စွဲတံဆိပ်",text2:"စာသားရိုက်ထည့်ပါ",text3:"နေရာယူသည်"};case"japanese":return{detail1:"フォームラベル：",detail2:"*エラー：このフィールドは必須です",detail3:"検索",detail4:"検索語を入力してください",detail5:"プロジェクト数",detail6:"パスワードを作成する",detail7:"パスワード",detail8:"最小8文字",detail9:"電話番号",detail10:"簡単な説明",text:"日付ラベル",text2:"テキストを入力してください",text3:"プレースホルダー"};default:return{detail1:"Form Label:",detail2:"*Error: this field is required",detail3:"Search",detail4:"Enter search term",detail5:"Number of projects",detail6:"Create password",detail7:"Password",detail8:"8 characters minimum",detail9:"Phone number",detail10:"Brief description",text:"Date label",text2:"Enter text",text3:"Placeholder"}}},layoutProps={getCaptionForLocale};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Forms/Input fields",argTypes:{State:{options:["Default","Focus","Error","Disabled"],control:{type:"inline-radio"},defaultValue:"Default"}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"input-fields"},"Input Fields"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Input Field is used when the user is required to fill in the information."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The input HTML element is used to create interactive controls for web-based forms in order to accept data from the user. A variety of input types and states are available, depending on the device and user agent. The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"When to use:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"When the user needs to fill in data.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"formatting"},"Formatting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"default"},"Default"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Input Field consists of various fields of rectangular boxes used to fill information.  There is a Base Input where the user needs to fill data, a Label that describes the input box, Help Text which is a sub-heading to the input box but doesn’t appear in the field area, and an Error message which pops up if an error has occurred."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Base Input:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Label:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Help Text:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Error message:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The Input Fields are:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Text: Input elements of type text create basic single-line text fields."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Search: Input elements of type search are text fields designed for the user to enter search queries into."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Number: Input elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Date: Input elements of type date create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Phone: Input elements of type tel are used to let the user enter and edit a telephone number."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Password: Input elements of type password provide a way for the user to enter a password."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Textarea: The Textarea HTML element requires a multi-line plain-text editing control useful when you want to allow users to enter a sizable amount of free-form text, for example, a comment on a review or feedback form.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"behaviors"},"Behaviors"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"States\nThe Input Field has four states: Default, Focus. Error and Disabled."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Date",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.text,errorText:caption.detail2,element:"input",type:"date",id:"date",placeholder:"dd/mm/yyyy"},args,{mdxType:"Inputcomponent"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Number",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail5,errorText:caption.detail2,element:"input",type:"number",id:"number",pattern:"[0-9]*",placeholder:caption.text3},args,{mdxType:"Inputcomponent"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Password",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail6,element:"input",helpText:caption.detail8,errorText:caption.detail2,type:"password",id:"password",minlength:"8",placeholder:caption.detail7},args,{mdxType:"Inputcomponent"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Telephone",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail9,element:"input",type:"tel",id:"tel",errorText:caption.detail2,placeholder:"+234 000 000 0000",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"},args,{mdxType:"Inputcomponent"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Text",mdxType:"Story"},((args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail1,errorText:caption.detail2,element:"input",type:"text",id:"text",placeholder:caption.text3},args,{mdxType:"Inputcomponent"}))}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Choose the state Default, Focus, Error, and Disabled from the control tab of the canvas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ol"},"Copy the HTML from the HTML tab and also include the below-mentioned CSS listed below.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"css-and-js-references"},"CSS and JS References"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"css"},"CSS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Add the base layout style from"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/base-minimal.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/base-minimal.min.css")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"https://undp.github.io/design-system/css/components/input-fields.min.css",target:"_blank",rel:"nofollow noopener noreferrer"},"https://undp.github.io/design-system/css/components/input-fields.min.css"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h4",{id:"js"},"JS:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"NA"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"interactions"},"Interactions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},"By clicking on the box, the user can fill in the information.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"changelog"},"Changelog"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"1.0 — Released component"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const date=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.text,errorText:caption.detail2,element:"input",type:"date",id:"date",placeholder:"dd/mm/yyyy"},args))};date.displayName="date",date.storyName="Date",date.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <Inputcomponent labelText={caption.text} errorText={caption.detail2} element='input' type='date' id='date' placeholder='dd/mm/yyyy' {...args}></Inputcomponent>;\n}"}};const number=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail5,errorText:caption.detail2,element:"input",type:"number",id:"number",pattern:"[0-9]*",placeholder:caption.text3},args))};number.displayName="number",number.storyName="Number",number.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <Inputcomponent labelText={caption.detail5} errorText={caption.detail2} element='input' type='number' id='number' pattern='[0-9]*' placeholder={caption.text3} {...args}></Inputcomponent>;\n}"}};const password=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail6,element:"input",helpText:caption.detail8,errorText:caption.detail2,type:"password",id:"password",minlength:"8",placeholder:caption.detail7},args))};password.displayName="password",password.storyName="Password",password.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <Inputcomponent labelText={caption.detail6} element='input' helpText={caption.detail8} errorText={caption.detail2} type='password' id='password' minlength=\"8\" placeholder={caption.detail7} {...args}></Inputcomponent>;\n}"}};const telephone=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail9,element:"input",type:"tel",id:"tel",errorText:caption.detail2,placeholder:"+234 000 000 0000",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"},args))};telephone.displayName="telephone",telephone.storyName="Telephone",telephone.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <Inputcomponent labelText={caption.detail9} element='input' type='tel' id='tel' errorText={caption.detail2} placeholder='+234 000 000 0000' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' {...args}></Inputcomponent>;\n}"}};const text=(args,{globals:{locale}})=>{const caption=getCaptionForLocale(locale);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputFields__WEBPACK_IMPORTED_MODULE_3__.p,_extends({labelText:caption.detail1,errorText:caption.detail2,element:"input",type:"text",id:"text",placeholder:caption.text3},args))};text.displayName="text",text.storyName="Text",text.parameters={storySource:{source:"(args, {\n  globals: {\n    locale\n  }\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <Inputcomponent labelText={caption.detail1} errorText={caption.detail2} element='input' type='text' id='text' placeholder={caption.text3} {...args}></Inputcomponent>;\n}"}};const componentMeta={title:"Components/Forms/Input fields",argTypes:{State:{options:["Default","Focus","Error","Disabled"],control:{type:"inline-radio"},defaultValue:"Default"}},includeStories:["date","number","password","telephone","text"]},mdxStoryNameToKey={Date:"date",Number:"number",Password:"password",Telephone:"telephone",Text:"text"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["getCaptionForLocale","date","number","password","telephone","text"]}}]);