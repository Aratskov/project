"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[612],{9266:function(e,a,n){n.d(a,{F:function(){return o}});var s=n(1413),c=n(4925),t=n(8182),i="BasicInput_input__FjvHv",r=n(184),l=["name","className","placeholder"],o=function(e){var a=e.name,n=e.className,o=e.placeholder,u=(0,c.Z)(e,l);return(0,r.jsx)("input",(0,s.Z)({id:a,placeholder:o,className:(0,t.Z)(n,i),type:"text",name:a},u))}},7007:function(e,a,n){n.d(a,{u:function(){return o}});var s=n(8182),c=n(9266),t="LabledInput_label__F0cz6",i="LabledInput_input__emeD0",r="LabledInput_wrapper__Rjf3H",l=n(184),o=function(e){var a=e.label,n=e.value,o=e.className,u=e.inputClassName,m=e.placeholder;return(0,l.jsxs)("div",{className:(0,s.Z)(o,r),children:[(0,l.jsx)("p",{className:t,children:a}),(0,l.jsx)(c.F,{placeholder:m,value:n,readOnly:!0,className:(0,s.Z)(u,i)})]})}},1612:function(e,a,n){n.r(a),n.d(a,{default:function(){return O}});var s="CashflowPage_wrapper__8VjHM",c=n(1413),t=n(9439),i=n(1144),r="TransactionDataList_wrapper__qG4Yj",l="TransactionDataList_list__brUU8",o="TransactionDataList_item__IOtnc",u="TransactionDataList_error__-Llry",m=n(2157),d=n(9434),p=n(9601),h=function(e){return e.cashflow.presaving},x=function(e){var a=function(e){return e.cashflow.category}(e);return a.map((function(e){var a=(0,c.Z)((0,c.Z)({},e),{},{icon:""});switch(e.name){case"products":a.icon="".concat(p.Z,"#icon-fish");break;case"clothing":a.icon="".concat(p.Z,"#icon-checkroom");break;case"cafes":a.icon="".concat(p.Z,"#icon-restaurant");break;case"beauty":a.icon="".concat(p.Z,"#icon-medical");break;case"health":a.icon="".concat(p.Z,"#icon-spa");break;case"transport":a.icon="".concat(p.Z,"#icon-car");break;case"house":a.icon="".concat(p.Z,"#icon-house");break;case"other":a.icon="".concat(p.Z,"#icon-settings")}return a}))},_=n(2791),v=n(9016),j=n(3160),f=n(7007),N=n(332),b=n(8182),Z="ExpensesLimits_wrapper__QrixY",y="ExpensesLimits_innerWrapper__MPXHN",L="ExpensesLimits_inputWrapper__cQuOL",w="ExpensesLimits_btnWrapper__O4UNL",g="ExpensesLimits_input__v+Fal",C="ExpensesLimits_firstInput__hVHAs",k="ExpensesLimits_secondInput__CNIIt",E="ExpensesLimits_submitButton__DXdg+",I=n(9266),A=n(3713),F="ModalAddIncome_btnBox__rw5Jx",T=n(3772),B=n(184),D=function(e){var a=e.show,n=e.onClose,s=(0,d.I0)();return(0,B.jsx)(A.Z,{show:a,showCloseBtn:!0,onClose:n,children:(0,B.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var a,c=e.currentTarget,t=c.elements.input.value;c.reset(),a=t,s((0,T.dT)({type:"income",sum:Number(a)})),n()},children:[(0,B.jsx)(I.F,{name:"input",placeholder:"Enter income"}),(0,B.jsxs)("div",{className:F,children:[(0,B.jsx)(N.z,{variant:"primary",type:"submit",children:"Add"}),(0,B.jsx)(N.z,{variant:"secondary",onClick:n,children:"Cancel"})]})]})})},H=function(){var e=(0,d.v9)(h),a=e.monthLimit,n=e.dailyLimit,s=e.totalByMounth,c=e.totalByDay,t=(0,j.B)(),i=t.show,r=t.showPopup,l=t.closePopup;return(0,B.jsxs)("div",{className:Z,children:[(0,B.jsxs)("div",{className:y,children:[(0,B.jsx)(f.u,{label:"Daily limit",value:"".concat(Math.round(n+c)," \u20b4"),className:(0,b.Z)(C,L),inputClassName:g}),(0,B.jsx)(f.u,{label:"Monthly limit",value:"".concat(Math.round(a+s)," \u20b4"),className:(0,b.Z)(k,L),inputClassName:g}),(0,B.jsxs)("div",{className:w,children:[(0,B.jsx)(N.z,{variant:"neutral",type:"submit",className:E,children:"Ready"}),(0,B.jsx)(N.z,{variant:"link",onClick:r,children:"Add income"})]})]}),(0,B.jsx)(D,{show:i,onClose:l})]})},q=n(5705),M=n(8007),S=n(7983),U=M.Ry().shape({comment:M.Z_().min(1,"Comment should contain at least 1 character").max(80).required("This field is required"),sum:M.Rx().positive("enter only a positive number").required("This field is required"),category:M.Z_()}),z=function(){var e=(0,d.I0)(),a=(0,d.v9)(x),n=(0,d.v9)(v.qo),s=(0,_.useState)({name:"other",title:"Other",icon:"".concat(p.Z,"#icon-settings")}),h=(0,t.Z)(s,2),j=h[0],f=h[1];return(0,B.jsx)(q.J9,{initialValues:{comment:"",sum:"",category:""},onSubmit:function(a,n){var s=n.setSubmitting;n.setFieldError;s(!1),e((0,T.dT)((0,c.Z)((0,c.Z)({},a),{},{category:j.name,type:"expense"})))},validationSchema:U,children:(0,B.jsxs)(q.l0,{className:r,children:[(0,B.jsxs)("div",{className:l,children:[(0,B.jsx)("div",{className:o,children:(0,B.jsx)(i.Z,{name:"balance",value:n?"".concat(n," UAH"):"0 UAH",placeholder:"Account balance: UAH 80,000",label:"From account",onChange:function(){return n}})}),(0,B.jsx)("div",{className:o,children:(0,B.jsx)(m.S,{name:"category",value:j,options:a,label:"Per category",onChange:function(e){f(e)}})}),(0,B.jsx)("div",{className:o,children:(0,B.jsxs)("div",{className:S.Z.wrapp,children:[(0,B.jsx)(q.gN,{className:S.Z.input,type:"text",name:"comment",placeholder:"Enter comment"}),(0,B.jsx)("label",{htmlFor:"comment",className:S.Z.label,children:"Expense comment"}),(0,B.jsx)("p",{className:u,children:(0,B.jsx)(q.Bc,{name:"comment"})})]})}),(0,B.jsx)("div",{className:o,children:(0,B.jsxs)("div",{className:S.Z.wrapp,children:[(0,B.jsx)(q.gN,{name:"sum",className:S.Z.input,type:"text",placeholder:"0 UAH"}),(0,B.jsx)("label",{htmlFor:"sum",className:S.Z.label,children:"Sum"}),(0,B.jsx)("p",{className:u,children:(0,B.jsx)(q.Bc,{name:"sum"})})]})})]}),(0,B.jsx)(H,{})]})})},O=function(){var e=(0,d.I0)(),a=(0,d.v9)(v.qo);return(0,_.useEffect)((function(){e((0,T.AT)())}),[e]),(0,_.useEffect)((function(){e((0,T.je)())}),[a]),(0,B.jsx)("section",{className:s,children:(0,B.jsx)("div",{className:"container",children:(0,B.jsx)(z,{})})})}}}]);
//# sourceMappingURL=612.ed2610f0.chunk.js.map