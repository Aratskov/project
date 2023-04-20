"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[334],{9602:function(e,n,a){a.d(n,{Z:function(){return c}});var o="Input_input__E5rzA",l="Input_label__NXpCD",s="Input_wrapp__QQtr7",t=a(184),c=function(e){var n=e.id,a=e.label,c=e.value,r=e.placeholder,i=e.name,u=e.onChange;return(0,t.jsxs)("div",{className:s,children:[(0,t.jsx)("label",{className:l,htmlFor:i,children:a}),(0,t.jsx)("input",{id:n,className:o,type:"text",name:i,placeholder:r,value:c,onChange:u})]})}},4334:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var o=a(9602),l="TransactionDataList_item__M9QUt",s=a(184),t=function(e){var n=e.onChange,a=e.category,t=e.comment,c=e.sum;return(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:l,children:(0,s.jsx)(o.Z,{name:a,value:a,placeholder:"Account balance: UAH 80,000",label:"From account"})}),(0,s.jsx)("li",{className:l,children:(0,s.jsx)(o.Z,{name:"category",value:a,placeholder:"Other",label:"Per category",onChange:n})}),(0,s.jsx)("li",{className:l,children:(0,s.jsx)(o.Z,{name:"comment",value:t,placeholder:"Concert tickets",label:"Expense comment",onChange:n})}),(0,s.jsx)("li",{className:l,children:(0,s.jsx)(o.Z,{name:"sum",value:c,placeholder:"00.00",label:"Sum",onChange:n})})]})},c=a(5705),r=a(332),i=a(9439),u=a(2791),d="BasicInput_input__FjvHv",h=function(e){var n=e.name,a=e.value,o=e.placeholder,l=e.readonly,t=void 0!==l&&l;return(0,s.jsx)("input",{id:n,className:d,type:"text",name:n,placeholder:o,value:a,readOnly:t})},m="Modal_backdrop__sVPQZ",p="Modal_popup__KSYCg",v="Modal_btnClose__zv2rY",x="Modal_iconClose__u8oJf",j=a(8182),f=a(9601);function _(e){var n=e.show,a=e.showCloseBtn,o=void 0===a||a,l=e.onClose,t=e.className,c=e.children;return(0,u.useEffect)((function(){var e=function(e){"Escape"===e.key&&l()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[l]),n&&(0,s.jsx)("div",{className:m,onClick:l,children:(0,s.jsx)("div",{onClick:function(e){e.stopPropagation()},children:(0,s.jsxs)("div",{className:(0,j.Z)(t,p),children:[o&&(0,s.jsx)("button",{className:v,onClick:l,children:(0,s.jsx)("svg",{className:x,children:(0,s.jsx)("use",{href:"".concat(f.Z,"#icon-close")})})}),c]})})})}var C="ModalAddIncome_btnBox__rw5Jx",b=function(e){var n=e.show,a=e.onClose;return(0,s.jsx)("div",{children:(0,s.jsx)(_,{show:n,showCloseBtn:!0,onClose:a,children:(0,s.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,o=n.elements.input.value;n.reset(),console.log("input:",o),a()},children:[(0,s.jsx)(h,{name:"input",placeholder:"Enter income"}),(0,s.jsxs)("div",{className:C,children:[(0,s.jsx)(r.z,{variant:"primary",type:"submit",children:"Add"}),(0,s.jsx)(r.z,{variant:"secondary",onClick:a,children:"Cancel"})]})]})})})},w="ModalAddBalance_btnBox__1pmKy",y=function(e){var n=e.show,a=e.onClose;return(0,s.jsx)("div",{children:(0,s.jsx)(_,{show:n,showCloseBtn:!0,onClose:a,children:(0,s.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n,o=e.currentTarget,l=o.elements.input.value;o.reset(),console.log("input:",l),n=l,console.log("add balance: ",n),a()},children:[(0,s.jsx)(h,{name:"input",placeholder:"Enter balance"}),(0,s.jsxs)("div",{className:w,children:[(0,s.jsx)(r.z,{variant:"primary",type:"submit",children:"Add"}),(0,s.jsx)(r.z,{variant:"secondary",onClick:a,children:"Cancel"})]})]})})})},g=function(){var e=function(){var e=(0,u.useState)(!1),n=(0,i.Z)(e,2),a=n[0],o=n[1];return{show:a,showPopup:function(){o(!0)},closePopup:function(){o(!1)}}}(),n=e.show,a=e.showPopup,o=e.closePopup;return(0,c.TA)({initialValues:{category:"",comment:"",sum:""},onSubmit:function(e){alert(JSON.stringify(e,null,2))}}),(0,s.jsxs)("div",{children:[(0,s.jsx)(t,{}),(0,s.jsx)(r.z,{onClick:a,nativeProps:{style:{width:150,marginBottom:20}},children:"Add income"}),(0,s.jsx)(b,{show:n,onClose:o}),(0,s.jsx)(r.z,{onClick:a,nativeProps:{style:{width:150}},children:"Add balance"}),(0,s.jsx)(y,{show:n,onClose:o})]})}}}]);
//# sourceMappingURL=334.c46999cf.chunk.js.map