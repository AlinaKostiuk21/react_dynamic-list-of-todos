(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(7),n=s.n(c),r=s(2),a=s(3),o=s(5),l=s(4),i=s(1),d=s.n(i),u=(s(12),s(13),s(14),s(0)),h=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={query:"",selectedStatus:"all"},e.handleChange=function(t){var s=t.target;e.setState({query:s.value})},e.checkTodosTitle=function(){for(var t=arguments.length,s=new Array(t),c=0;c<t;c++)s[c]=arguments[c];return s.some((function(t){return t.toLowerCase().includes(e.state.query.toLowerCase())}))},e.checkTodosCompleted=function(e,t){var s=e||!1;switch(t){case"active":return!1===s;case"completed":return!0===s;default:return!0===s||!1===s}},e.changeTodoHandler=function(t){e.setState({selectedStatus:t.target.value})},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.query,c=t.selectedStatus,n=this.props,r=n.todos,a=n.selectUserId,o=n.selectedIdUser,l=r.filter((function(t){return e.checkTodosTitle(t.title)&&e.checkTodosCompleted(t.completed,c)}));return Object(u.jsxs)("div",{className:"TodoList",children:[Object(u.jsx)("h2",{children:"Todos:"}),Object(u.jsxs)("div",{className:"TodoList__field",children:[Object(u.jsxs)("label",{htmlFor:"search-query",className:"label",children:[Object(u.jsx)("span",{className:"label__text",children:"Search todo"}),Object(u.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",value:s,onChange:this.handleChange})]}),Object(u.jsxs)("select",{name:"todoList",id:"",value:c,onChange:this.changeTodoHandler,className:"select",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})]}),Object(u.jsx)("div",{className:"TodoList__list-container",children:Object(u.jsx)("ul",{className:"TodoList__list",children:l.map((function(e){var t=e.completed||!1;return Object(u.jsxs)("li",{className:"TodoList__item TodoList__item--unchecked",children:[Object(u.jsxs)("label",{htmlFor:"check1",children:[Object(u.jsx)("input",{type:"checkbox",id:"check1",checked:t,readOnly:!0}),Object(u.jsx)("p",{children:e.title})]}),e.userId===o?Object(u.jsx)("button",{className:" TodoList__user-button--selected TodoList__user-button button ",type:"button",onClick:function(){a(0)},children:e.userId}):Object(u.jsx)("button",{className:" TodoList__user-button button ",type:"button",onClick:function(){a(e.userId)},children:e.userId})]},e.id)}))})})]})}}]),s}(d.a.Component),j=(s(16),function(e){var t=e.user;return Object(u.jsxs)("div",{className:"CurrentUser",children:[Object(u.jsx)("h2",{className:"CurrentUser__title",children:Object(u.jsx)("span",{children:"Selected user: ".concat(t.id)})}),Object(u.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(u.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(u.jsx)("p",{className:"CurrentUser__phone",children:t.phone})]})}),b=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},p=function(e){return b("/users/".concat(e))},m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedUserId:0,todos:[],selectedUser:null,errorGettingUser:!1},e.componentDidUpdate=function(){var t=e.state.selectedUser&&e.state.selectedUser.id,s=e.state,c=s.errorGettingUser,n=s.selectedUserId;n&&n!==t&&p(n).then((function(t){e.setState({selectedUser:t,errorGettingUser:!1})})).catch((function(){c||e.setState({selectedUser:null,errorGettingUser:!0})}))},e.deselectCurrentUser=function(){e.setState({selectedUser:null,selectedUserId:0})},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.state.selectedUser||b("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.selectedUserId,c=t.todos,n=t.selectedUser,r=t.errorGettingUser?"Opps, something went wrong :)":"No user selected";return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"App__sidebar",children:Object(u.jsx)(h,{todos:c,selectedIdUser:s,selectUserId:function(t){return e.setState({selectedUserId:t})}})}),Object(u.jsx)("div",{className:"App__content",children:Object(u.jsx)("div",{className:"App__content-container",children:n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:this.deselectCurrentUser,children:"Clear"}),Object(u.jsx)(j,{user:n})]}):r})})]})}}]),s}(d.a.Component),O=m;n.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.8f822671.chunk.js.map