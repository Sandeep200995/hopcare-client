"use strict";(self.webpackChunkhopcare_cl=self.webpackChunkhopcare_cl||[]).push([[602],{2602:function(e,s,r){r.r(s),r.d(s,{default:function(){return m}});var a=r(885),n=r(2506),t=r(2791),o=r(7689),l=r(5568),i=r(2522),c=r(3494),u=r(9434),d=r(3155),p=r(184);var m=function(){var e=(0,o.s0)(),s=(0,u.I0)(),r=(0,o.TH)().state,m=t.useContext(d.tc).setIsAppLoader,h=(0,t.useState)([{name:"Select",value:""},{name:"User",value:"consumer"},{name:"Hospital",value:"clinic"}]),f=(0,a.Z)(h,1)[0],N=(0,u.v9)((function(e){return e.userData})),v=(r&&r.from.pathname,(0,n.TA)({initialValues:{dialNumber:"+91",firstName:"",lastName:"",phoneNumber:"",password:"",cnfPassword:"",userType:"consumer"},validateOnBlur:!0,validateOnChange:!1,validate:function(e){var s={};return e.firstName||(s.firstName="Please enter user first name"),e.phoneNumber||(s.phoneNumber="Please enter 10 digit phone number"),e.password||(s.password="Please enter password"),e.cnfPassword||(s.cnfPassword="Please again enter password to confirm"),e.password&&e.cnfPassword&&e.cnfPassword!==e.password&&(s.cnfPassword="Not matching with password"),s},onSubmit:function(e){var r=JSON.parse(JSON.stringify(e));delete r.cnfPassword,m(!0),s(i.a$({formData:r}))}}));return(0,t.useEffect)((function(){switch(N.case){case c.Vx:m(!1),(0,l.Am)(N.message,{position:"top-center"}),e("/otp",{state:{otp:N.userDetails.otp?N.userDetails.otp.toString():null,phoneNumber:v.values.phoneNumber,userType:v.values.userType,password:v.values.password},replace:!0});break;case c.Bw:m(!1),(0,l.Am)(N.message,{position:"top-center"})}}),[N.case]),(0,p.jsxs)("div",{className:"form-area",children:[(0,p.jsx)("h2",{children:"Register "}),(0,p.jsx)("form",{onSubmit:v.handleSubmit,noValidate:!0,children:(0,p.jsxs)("div",{className:"form-inner",children:[(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"text",placeholder:"First Name",name:"firstName",onChange:v.handleChange,value:v.values.firstName}),v.touched.firstName&&v.errors.firstName&&(0,p.jsx)("p",{className:"error-text",children:v.errors.firstName})]}),(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",onChange:v.handleChange,value:v.values.lastName}),v.touched.lastName&&v.errors.lastName&&(0,p.jsx)("p",{className:"error-text",children:v.errors.lastName})]}),(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"text",placeholder:"Mobile number",name:"phoneNumber",maxLength:10,onChange:v.handleChange,value:v.values.phoneNumber}),v.touched.phoneNumber&&v.errors.phoneNumber&&(0,p.jsx)("p",{className:"error-text",children:v.errors.phoneNumber})]}),(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:v.handleChange,value:v.values.password}),v.touched.password&&v.errors.password&&(0,p.jsx)("p",{className:"error-text",children:v.errors.password})]}),(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"password",name:"cnfPassword",placeholder:"Confirm Password",onChange:v.handleChange,value:v.values.cnfPassword}),v.touched.cnfPassword&&v.errors.cnfPassword&&(0,p.jsx)("p",{className:"error-text",children:v.errors.cnfPassword})]}),(0,p.jsxs)("div",{className:"select-option-dropdown",children:[(0,p.jsx)("select",{name:"userType",value:v.values.userType,id:"userType",onChange:v.handleChange,children:f.map((function(e,s){return(0,p.jsx)("option",{value:e.value,children:e.name},"_".concat(s))}))}),v.touched.userType&&v.errors.userType&&(0,p.jsx)("p",{className:"error-text",children:v.errors.userType})]}),(0,p.jsx)("button",{type:"submit",className:"btn-common",children:"Submit"}),(0,p.jsx)("button",{type:"button",className:"btn-underline",onClick:function(){return e("/login",{replace:!0})},children:"Back to login"})]})})]})}}}]);
//# sourceMappingURL=602.352424d7.chunk.js.map