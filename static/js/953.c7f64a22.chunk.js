"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[953],{9953:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var l=a(4003),s="TransactionDataList_item__M9QUt",o=a(184),t=function(e){var n=e.onChange,a=e.category,t=e.comment,c=e.sum;return(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:s,children:(0,o.jsx)(l.Z,{name:a,value:a,placeholder:"Account balance: UAH 80,000",label:"From account"})}),(0,o.jsx)("li",{className:s,children:(0,o.jsx)(l.Z,{name:"category",value:a,placeholder:"Other",label:"Per category",onChange:n})}),(0,o.jsx)("li",{className:s,children:(0,o.jsx)(l.Z,{name:"comment",value:t,placeholder:"Concert tickets",label:"Expense comment",onChange:n})}),(0,o.jsx)("li",{className:s,children:(0,o.jsx)(l.Z,{name:"sum",value:c,placeholder:"00.00",label:"Sum",onChange:n})})]})},c=a(5705),r=a(332),i=a(3160),u=a(1413),d=a(4925),m=a(8182),h="BasicInput_input__FjvHv",p=["name","className"],x=function(e){var n=e.name,a=e.className,l=(0,d.Z)(e,p);return(0,o.jsx)("input",(0,u.Z)({id:n,className:(0,m.Z)(a,h),type:"text",name:n},l))},j=a(3713),v="ModalAddIncome_btnBox__rw5Jx",C=function(e){var n=e.show,a=e.onClose;return(0,o.jsx)(j.Z,{show:n,showCloseBtn:!0,onClose:a,children:(0,o.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n,l=e.currentTarget,s=l.elements.input.value;l.reset(),console.log("input:",s),n=s,console.log("add income: ",n),a()},children:[(0,o.jsx)(x,{name:"input",placeholder:"Enter income"}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)(r.z,{variant:"primary",type:"submit",children:"Add"}),(0,o.jsx)(r.z,{variant:"secondary",onClick:a,children:"Cancel"})]})]})})},f="ModalAddBalance_btnBox__1pmKy",b=function(e){var n=e.show,a=e.onClose;return(0,o.jsx)(j.Z,{show:n,showCloseBtn:!0,onClose:a,children:(0,o.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n,l=e.currentTarget,s=l.elements.input.value;l.reset(),console.log("input:",s),n=s,console.log("add balance: ",n),a()},children:[(0,o.jsx)(x,{name:"input",placeholder:"Enter balance"}),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)(r.z,{variant:"primary",type:"submit",children:"Add"}),(0,o.jsx)(r.z,{variant:"secondary",onClick:a,children:"Cancel"})]})]})})},g=function(){var e=(0,i.B)(),n=e.show,a=e.showPopup,l=e.closePopup;return(0,c.TA)({initialValues:{category:"",comment:"",sum:""},onSubmit:function(e){alert(JSON.stringify(e,null,2))}}),(0,o.jsxs)("div",{children:[(0,o.jsx)(t,{}),(0,o.jsx)(r.z,{onClick:a,nativeProps:{style:{width:150,marginBottom:20}},children:"Add income"}),(0,o.jsx)(C,{show:n,onClose:l}),(0,o.jsx)(r.z,{onClick:a,nativeProps:{style:{width:150}},children:"Add balance"}),(0,o.jsx)(b,{show:n,onClose:l})]})}}}]);
//# sourceMappingURL=953.c7f64a22.chunk.js.map