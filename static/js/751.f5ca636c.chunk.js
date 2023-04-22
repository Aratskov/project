"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[751],{9266:function(e,n,a){a.d(n,{F:function(){return u}});var s=a(1413),l=a(4925),t=a(8182),i="BasicInput_input__FjvHv",r=a(184),c=["name","className","placeholder"],u=function(e){var n=e.name,a=e.className,u=e.placeholder,o=(0,l.Z)(e,c);return(0,r.jsx)("input",(0,s.Z)({id:n,placeholder:u,className:(0,t.Z)(a,i),type:"text",name:n},o))}},7007:function(e,n,a){a.d(n,{u:function(){return u}});var s=a(8182),l=a(9266),t="LabledInput_label__F0cz6",i="LabledInput_input__emeD0",r="LabledInput_wrapper__Rjf3H",c=a(184),u=function(e){var n=e.label,a=e.value,u=e.className,o=e.inputClassName,m=e.placeholder;return(0,c.jsxs)("div",{className:(0,s.Z)(u,r),children:[(0,c.jsx)("p",{className:t,children:n}),(0,c.jsx)(l.F,{placeholder:m,value:a,readOnly:!0,className:(0,s.Z)(o,i)})]})}},2786:function(e,n,a){a.d(n,{U:function(){return o}});var s=a(9266),l=a(332),t=a(3713),i="ModalAddBalance_btnBox__1pmKy",r=a(9434),c=a(1347),u=a(184),o=function(e){var n=e.show,a=e.onClose,o=(0,r.I0)();return(0,u.jsx)(t.Z,{show:n,showCloseBtn:!0,onClose:a,children:(0,u.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var n,s=e.currentTarget,l=s.elements.input.value;s.reset(),n=l,o((0,c.lW)(Number(n))),a()},children:[(0,u.jsx)(s.F,{name:"input",placeholder:"Enter balance"}),(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)(l.z,{variant:"primary",type:"submit",children:"Add"}),(0,u.jsx)(l.z,{variant:"secondary",onClick:a,children:"Cancel"})]})]})})}},3751:function(e,n,a){a.r(n),a.d(n,{default:function(){return A}});var s=a(9439),l=a(4003),t="TransactionDataList_list__brUU8",i="TransactionDataList_item__IOtnc",r=a(2157),c=a(9434),u=function(e){return e.cashflow.category},o=a(2791),m=a(184),p=function(e){var n=e.onChange,a=e.category,p=e.comment,d=e.sum,_=(0,c.v9)(u),h=(0,o.useState)({name:"other",title:"Other"}),x=(0,s.Z)(h,2),j=x[0],v=x[1];return(0,m.jsxs)("ul",{className:t,children:[(0,m.jsx)("li",{className:i,children:(0,m.jsx)(l.Z,{name:a,value:a,placeholder:"Account balance: UAH 80,000",label:"From account"})}),(0,m.jsx)("li",{className:i,children:(0,m.jsx)(r.S,{name:"category",value:j,options:_,label:"Per category",onChange:function(e){v(e)}})}),(0,m.jsx)("li",{className:i,children:(0,m.jsx)(l.Z,{name:"comment",value:p,placeholder:"Enter comment",label:"Expense comment",onChange:n})}),(0,m.jsx)("li",{className:i,children:(0,m.jsx)(l.Z,{name:"sum",value:d,placeholder:"00.00",label:"Sum",onChange:n})})]})},d=a(5705),_="CashflowPage_wrapper__8VjHM",h=a(3772),x=a(3160),j=a(7007),v=a(332),f=a(2786),N=a(8182),b="ExpensesLimits_wrapper__QrixY",C="ExpensesLimits_innerWrapper__MPXHN",y="ExpensesLimits_inputWrapper__cQuOL",L="ExpensesLimits_btnWrapper__O4UNL",g="ExpensesLimits_input__v+Fal",w="ExpensesLimits_firstInput__hVHAs",E="ExpensesLimits_secondInput__CNIIt",Z="ExpensesLimits_submitButton__DXdg+",I=function(){var e=(0,x.B)(),n=e.show,a=e.showPopup,s=e.closePopup;return(0,m.jsxs)("div",{className:b,children:[(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)(j.u,{label:"Daily limit",value:"-600$",className:(0,N.Z)(w,y),inputClassName:g}),(0,m.jsx)(j.u,{label:"Monthly limit",value:"-5000$",className:(0,N.Z)(E,y),inputClassName:g}),(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)(v.z,{variant:"neutral",type:"submit",className:Z,children:"Ready"}),(0,m.jsx)(v.z,{variant:"link",onClick:a,children:"Add income"})]})]}),(0,m.jsx)(f.U,{show:n,onClose:s})]})},A=function(){var e=(0,c.I0)();return(0,o.useEffect)((function(){e((0,h.A)())})),(0,d.TA)({initialValues:{category:"",comment:"",sum:""},onSubmit:function(e){alert(JSON.stringify(e,null,2))}}),(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)(p,{}),(0,m.jsx)(I,{})]})})}}}]);
//# sourceMappingURL=751.f5ca636c.chunk.js.map