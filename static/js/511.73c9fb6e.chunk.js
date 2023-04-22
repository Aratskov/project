"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[511],{9266:function(e,a,n){n.d(a,{F:function(){return i}});var s=n(1413),t=n(4925),o=n(8182),l="BasicInput_input__FjvHv",r=n(184),c=["name","className","placeholder"],i=function(e){var a=e.name,n=e.className,i=e.placeholder,u=(0,t.Z)(e,c);return(0,r.jsx)("input",(0,s.Z)({id:a,placeholder:i,className:(0,o.Z)(n,l),type:"text",name:a},u))}},4003:function(e,a,n){n.d(a,{Z:function(){return r}});var s="Input_input__k5Ctk",t="Input_label__U9NhE",o="Input_wrapp__X27Sy",l=n(184),r=function(e){var a=e.id,n=e.label,r=e.value,c=e.placeholder,i=e.name,u=e.onChange,m=e.classNameWrapp,p=void 0===m?"".concat(o):m,d=e.classNameInput,h=void 0===d?"".concat(s):d,v=e.classNameLabel,_=void 0===v?"".concat(t):v;return(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("input",{id:a,className:h,type:"text",name:i,placeholder:c,value:r,onChange:u}),(0,l.jsx)("label",{className:_,htmlFor:i,children:n})]})}},3713:function(e,a,n){n.d(a,{Z:function(){return d}});var s="Modal_backdrop__sVPQZ",t="Modal_popup__KSYCg",o="Modal_btnClose__zv2rY",l="Modal_iconClose__u8oJf",r=n(2791),c=n(8182),i=n(9601),u=n(4164),m=n(184),p=document.querySelector("#modal-root");function d(e){var a=e.show,n=e.showCloseBtn,d=void 0===n||n,h=e.onClose,v=e.className,_=e.children;return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.key&&h()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[h]),(0,u.createPortal)(a&&(0,m.jsx)("div",{className:s,onClick:h,children:(0,m.jsx)("div",{onClick:function(e){e.stopPropagation()},children:(0,m.jsxs)("div",{className:(0,c.Z)(v,t),children:[d&&(0,m.jsx)("button",{className:o,onClick:h,children:(0,m.jsx)("svg",{className:l,children:(0,m.jsx)("use",{href:"".concat(i.Z,"#icon-close")})})}),_]})})}),p)}},2786:function(e,a,n){n.d(a,{U:function(){return u}});var s=n(9266),t=n(332),o=n(3713),l="ModalAddBalance_btnBox__1pmKy",r=n(9434),c=n(1347),i=n(184),u=function(e){var a=e.show,n=e.onClose,u=(0,r.I0)();return(0,i.jsx)(o.Z,{show:a,showCloseBtn:!0,onClose:n,children:(0,i.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var a,s=e.currentTarget,t=s.elements.input.value;s.reset(),a=t,u((0,c.lW)(Number(a))),n()},children:[(0,i.jsx)(s.F,{name:"input",placeholder:"Enter balance"}),(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)(t.z,{variant:"primary",type:"submit",children:"Add"}),(0,i.jsx)(t.z,{variant:"secondary",onClick:n,children:"Cancel"})]})]})})}},3160:function(e,a,n){n.d(a,{B:function(){return o}});var s=n(9439),t=n(2791),o=function(){var e=(0,t.useState)(!1),a=(0,s.Z)(e,2),n=a[0],o=a[1];return{show:n,showPopup:function(){o(!0)},closePopup:function(){o(!1)}}}},511:function(e,a,n){n.r(a),n.d(a,{default:function(){return M}});var s=n(332),t=n(4003),o=n(8182),l=n(9266),r="LabledInput_label__F0cz6",c="LabledInput_input__emeD0",i="LabledInput_wrapper__Rjf3H",u=n(184),m=function(e){var a=e.label,n=e.value,s=e.className,t=e.inputClassName,m=e.placeholder;return(0,u.jsxs)("div",{className:(0,o.Z)(s,i),children:[(0,u.jsx)("p",{className:r,children:a}),(0,u.jsx)(l.F,{placeholder:m,value:n,readOnly:!0,className:(0,o.Z)(t,c)})]})},p="ResultForm_wrapper__GVqQC",d="ResultForm_innerWrapper__X719Z",h="ResultForm_btnWrapper__yKx9u",v="ResultForm_title__-zEMh",_="ResultForm_input__4mXu1",f="ResultForm_firstInput__P9nkK",x="ResultForm_secondInput__JhjkP",j="ResultForm_submitButton__sA3PT",g=n(2786),b=n(3160),N=function(e){var a=e.title,n=e.year,t=e.month,o=e.onClick,l=(0,b.B)(),r=l.show,c=l.showPopup,i=l.closePopup;return(0,u.jsxs)("div",{className:p,children:[a&&(0,u.jsx)("h2",{className:v,children:a}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)(m,{label:"Number of years",placeholder:"0 year",value:n,className:f,inputClassName:_}),(0,u.jsx)(m,{label:"Number of months",value:t,placeholder:"0 month",className:x,inputClassName:_}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)(s.z,{onClick:o,variant:"neutral",type:"submit",className:j,children:"Fits"}),(0,u.jsx)(s.z,{variant:"link",onClick:c,children:"Add Balance"})]})]}),(0,u.jsx)(g.U,{show:r,onClose:i})]})},y=function(e){return e.plan.year},C=function(e){return e.plan.month},w=function(e){return e.plan},I=n(5705),P=n(8007),k=n(9434),Z=n(79),E="OwnPlanPage_wrapper__1xr2H",F="OwnPlanPage_list__eYpjq",S="OwnPlanPage_item__24AYq",R="OwnPlanPage_form__X2cKQ",B="OwnPlanPage_description__9xhcw",z="OwnPlanPage_prevPlanButton__DB73J",q=n(2791),A=n(3718),O=P.Rx("It`s must be a number").required("This line is required").positive("It`s must be a positive number").integer("It`s must be a integer"),L={salary:"",passiveIncome:"",savings:"",cost:"",footage:"",procent:"",month:"",year:""},M=function(){var e=(0,k.I0)(),a=A.D.getState();console.log(a);var n=(0,k.v9)(w),o=(0,k.v9)(y),l=(0,k.v9)(C),r=(0,I.TA)({initialValues:L,validationSchema:P.Ry({salary:O,passiveIncome:O,savings:O,cost:O,footage:O,procent:O}),onSubmit:function(a){var s=a.salary,t=a.passiveIncome,o=a.savings,l=a.cost,r=a.footage,c=a.procent;n._id||e((0,Z.$3)({salary:Number(s),passiveIncome:Number(t),savings:Number(o),cost:Number(l),footage:Number(r),procent:Number(c)}))}});(0,q.useEffect)((function(){r.setValues(n)}),[n]);return(0,q.useEffect)((function(){e((0,Z.QE)())}),[e]),(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:E,children:(0,u.jsxs)("form",{className:R,onSubmit:r.handleSubmit,children:[(0,u.jsxs)("ul",{className:F,children:[(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"salary",name:"salary",value:r.values.salary,placeholder:"Enter text",label:"1. RFP of both spouses, \u20b4",onChange:r.handleChange}),r.submitCount>0&&r.errors.salary&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.salary})]}),(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"passiveIncome",name:"passiveIncome",value:r.values.passiveIncome,placeholder:"Enter text",label:"2. Passive income, months, \u20b4",onChange:r.handleChange}),r.submitCount>0&&r.errors.passiveIncome&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.passiveIncome})]}),(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"savings",name:"savings",value:r.values.savings,placeholder:"Enter text",label:"3. Savings, \u20b4",onChange:r.handleChange}),r.submitCount>0&&r.errors.savings&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.savings})]}),(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"cost",name:"cost",value:r.values.cost,placeholder:"Enter text",label:"4. Specify the cost of your future apartment, \u20b4",onChange:r.handleChange}),r.submitCount>0&&r.errors.cost&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.cost})]}),(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"footage",name:"footage",value:r.values.footage,placeholder:"Enter text",label:"5. Specify the number of sq.m. of your future apartment",onChange:r.handleChange}),r.submitCount>0&&r.errors.footage&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.footage})]}),(0,u.jsxs)("li",{className:S,children:[(0,u.jsx)(t.Z,{id:"procent",name:"procent",value:r.values.procent,placeholder:"Enter text",label:"6. Accumulation, %",onChange:r.handleChange}),r.submitCount>0&&r.errors.procent&&(0,u.jsx)("p",{style:{color:"white"},children:r.errors.procent}),(0,u.jsx)("p",{className:B,children:"Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal"})]})]}),(0,u.jsx)(s.z,{type:"submit",className:z,children:"Pre Plan"}),(0,u.jsx)(N,{title:"You will have an apartment in:",year:o,month:l,onClick:function(){if(n._id){var a=r.values,s=a.salary,t=a.passiveIncome,o=a.savings,l=a.cost,c=a.footage,i=a.procent;e((0,Z.py)({salary:s,passiveIncome:t,savings:o,cost:l,footage:c,procent:i}))}else{var u=n.salary,m=n.passiveIncome,p=n.savings,d=n.cost,h=n.footage,v=n.procent;e((0,Z.fi)({salary:u,passiveIncome:m,savings:p,cost:d,footage:h,procent:v}))}}})]})})})}}}]);
//# sourceMappingURL=511.73c9fb6e.chunk.js.map