"use strict";(self.webpackChunkhopcare_cl=self.webpackChunkhopcare_cl||[]).push([[832],{6832:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(2506),o=r(2791),a=r(7689),u=r(2522),s=r(3494),i=r(9434),l=r(3155),c=r(5568),p=r(184);var m=function(){var e=(0,a.s0)(),n=(0,i.I0)(),r=((0,a.TH)(),o.useContext(l.tc).setIsAppLoader),m=(0,i.v9)((function(e){return e.userData})),h=(0,t.TA)({initialValues:{phoneNumber:"",userType:"consumer"},validateOnBlur:!0,validateOnChange:!1,validate:function(e){var n={};return e.phoneNumber&&10===e.phoneNumber.length||(n.phoneNumber="Please enter 10 digit phone number"),n},onSubmit:function(e){n(u.gF({formData:e}))}});return(0,o.useEffect)((function(){switch(console.log("userState",m),m.case){case s.$1:r(!1),e("/newPassword",{state:{otp:m.userDetails.otp?m.userDetails.otp.toString():null,phoneNumber:h.values.phoneNumber,userType:h.values.userType}});break;case s.Ww:r(!1),(0,c.Am)(m.message,{position:"top-center"})}}),[m.case]),(0,p.jsxs)("div",{className:"form-area",children:[(0,p.jsx)("h2",{children:"Forgot your password"}),(0,p.jsxs)("h4",{children:["Enter your registered mobile number we will send ",(0,p.jsx)("br",{className:"mb-nobreak"})," you OTP after submit"]}),(0,p.jsx)("form",{onSubmit:h.handleSubmit,noValidate:!0,children:(0,p.jsxs)("div",{className:"form-inner",children:[(0,p.jsxs)("div",{className:"form-input",children:[(0,p.jsx)("input",{type:"text",placeholder:"Mobile number",name:"phoneNumber",onChange:h.handleChange,value:h.values.phoneNumber}),h.errors.phoneNumber&&(0,p.jsx)("p",{className:"error-text",children:h.errors.phoneNumber})]}),(0,p.jsx)("button",{type:"submit",className:"btn-common",children:"Submit"}),(0,p.jsx)("button",{type:"button",className:"btn-underline",onClick:function(){return e("/login",{replace:!0})},children:"Back to login"})]})})]})}},2522:function(e,n,r){r.d(n,{So:function(){return o},a$:function(){return a},gF:function(){return u}});var t=r(3494),o=function(e){return{type:t.Df,payload:e}},a=function(e){return{type:t.c7,payload:e}},u=function(e){return{type:t.lP,payload:e}}}}]);
//# sourceMappingURL=832.f523c2bc.chunk.js.map