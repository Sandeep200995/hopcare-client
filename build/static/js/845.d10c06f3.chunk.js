"use strict";(self.webpackChunkhopcare_cl=self.webpackChunkhopcare_cl||[]).push([[845],{8861:function(n,e,a){a.d(e,{Z:function(){return d}});var c=a(2791),t=a(3155);var i=a.p+"static/media/hm-menu.60159947bf4c31289013260e06d760e1.svg";var s=a.p+"static/media/back-button.1fedd33c74767f323c5543a13862a526.svg",o=a.p+"static/media/notification.aaa0ecebe32346ac21a2.png",r=a.p+"static/media/user-icon.ae3a914be1e9f200b221.png",l=a(7689),u=a(184);var d=function(n){var e=c.useContext(t.jX),a=e.isSideActive,d=e.toggleSidebar,m=c.useContext(t.Vo).isAuthenticated,p=(0,l.s0)();return(0,u.jsxs)("header",{className:"header",children:[(0,u.jsxs)("div",{className:"header-logo",children:[n.addLeftBackBtn?(0,u.jsx)("button",{className:"hm-icon",onClick:n.backIconClk,children:(0,u.jsx)("img",{src:s,alt:"hm-icon"})}):(0,u.jsx)("button",{className:"hm-icon",onClick:function(){return d(!a)},children:(0,u.jsx)("img",{src:i,alt:"hm-icon"})}),(0,u.jsx)("p",{children:"Logo"})]}),(0,u.jsxs)("div",{className:"notification-user-login",children:[n.addLeftBackBtn?null:(0,u.jsx)("div",{className:"notification-block",children:(0,u.jsx)("button",{children:(0,u.jsx)("img",{src:o,alt:"notification"})})}),m?(0,u.jsx)("div",{className:"user-profile",children:(0,u.jsx)("img",{src:r,alt:"user-icon"})}):(0,u.jsx)("div",{className:"login-signup",children:(0,u.jsxs)("button",{onClick:function(){p("./login")},children:["Login ",(0,u.jsx)("br",{})," ",(0,u.jsx)("span",{children:"( Patient )"})]})})]})]})}},692:function(n,e,a){a.r(e);var c=a(1413),t=a(885),i=a(2791),s=a(9434),o=a(7689),r=a(8861),l=a(184);e.default=function(){(0,o.s0)(),(0,s.I0)();var n=(0,i.useState)({type:"upcoming"}),e=(0,t.Z)(n,2),a=e[0],u=e[1],d=(0,i.useState)([{type:"upcoming",name:"Upcoming"},{type:"today",name:"Today"},{type:"past",name:"Past"}]),m=(0,t.Z)(d,1)[0],p=(0,i.useCallback)((function(){return(0,l.jsx)("div",{className:"booking-tab",children:m.map((function(n,e){var t=n.name,i=n.type;return(0,l.jsx)("button",{onClick:function(){return u((0,c.Z)((0,c.Z)({},a),{},{appInfo:n}))},className:"btn-booking ".concat(a.type===i?"active":""),children:t||" - "},"".concat(e,"_").concat(n.type))}))})}),[m,a]),h=(0,i.useCallback)((function(){return(0,l.jsx)("div",{className:"booking-tab",children:m.map((function(n,e){var t=n.name,i=n.type;return(0,l.jsx)("button",{onClick:function(){return u((0,c.Z)((0,c.Z)({},a),{},{appInfo:n}))},className:"btn-booking ".concat(a.type===i?"active":""),children:t||" - "},"".concat(e,"_").concat(n.type))}))})}),[m,a]);return(0,l.jsxs)("div",{className:"App",children:[(0,l.jsx)(r.Z,{addLeftBackBtn:!0}),p(),h()]})}}}]);
//# sourceMappingURL=845.d10c06f3.chunk.js.map