(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"ContactForm_form__1SFzQ",input:"ContactForm_input__3dEap",btnAddContact:"ContactForm_btnAddContact__2cD4C",labelForm:"ContactForm_labelForm__2odCO"}},function(e,t,n){e.exports={contactItem:"ContactUser_contactItem__1pL2H",name:"ContactUser_name__28Pw1",phone:"ContactUser_phone__3fnXa",btnDelete:"ContactUser_btnDelete__3uihr"}},,,,,function(e,t,n){e.exports={filter:"Filter_filter__2Ww5E",inputFilter:"Filter_inputFilter__pFtpZ",labelForm:"Filter_labelForm__22tnq"}},,,,function(e,t,n){e.exports={list:"ContactList_list__caW1s"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),s=(n(19),n(14)),i=n(4),l=n(5),u=n(7),m=n(6),b=n(11),d=n(2),h=n.n(d),j=n(0),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handelChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.handelSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.handelSubmit,children:[Object(j.jsxs)("label",{className:h.a.labelForm,children:["Name ",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:t,onChange:this.handelChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:h.a.labelForm,children:["Number ",Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:n,onChange:this.handelChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:h.a.btnAddContact,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=n(12),C=n.n(f),O=n(3),_=n.n(O),x=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContacts;return Object(j.jsxs)("li",{className:_.a.contactItem,children:[Object(j.jsx)("span",{className:_.a.name,children:n}),Object(j.jsx)("span",{className:_.a.phone,children:a}),Object(j.jsx)("button",{className:_.a.btnDelete,type:"button",onClick:function(){return r(t)},children:"Delete"})]})},v=function(e){var t=e.contacts,n=e.onDeleteContacts;return Object(j.jsx)("ul",{className:C.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsx)(x,{name:a,number:r,onDeleteContacts:n,id:t},t)}))})},F=n(8),g=n.n(F),N=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("div",{className:g.a.filter,children:Object(j.jsxs)("label",{className:g.a.labelForm,children:["Find contacts by name",Object(j.jsx)("input",{className:g.a.inputFilter,type:"text",value:t,onChange:n})]})})},S=n(23),y=n(13),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:y,filter:""},e.formSubmitHandler=function(t){var n=t.name,a=t.number,r=e.state.contacts;if(r.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts. Want to replace an existing contact ?"));else{var c=Object(S.a)();e.setState({contacts:[{name:n,number:a,id:c}].concat(Object(s.a)(r)),filter:""}),console.log({name:n,number:a})}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.onChangeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)(N,{value:n,onChange:this.onChangeFilter}),Object(j.jsx)(v,{contacts:r,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.87112756.chunk.js.map