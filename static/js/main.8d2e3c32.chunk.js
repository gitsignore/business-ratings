(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(32)},19:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),c=t.n(o),s=(t(19),t(12)),l=t(3),i=t(4),m=t(10),u=t(7),d=t(11),h=t(1),p=[{color:"error",value:0},{color:"error",value:1},{color:"warning",value:2},{color:"primary",value:3},{color:"success",value:4},{color:"success",value:5}],b=[{userName:"Maxime Signoret",businessName:"S. Company",comment:"Happy life company.",score:5,image:"https://picturepan2.github.io/spectre/img/avatar-1.png",coordinates:{latitude:48.8337552,longitude:2.2526615},isEnable:!0},{userName:"Maxime Signoret",businessName:"M. Company",comment:"A legacy company with old school management.",score:2,image:"https://picturepan2.github.io/spectre/img/avatar-4.png",coordinates:{latitude:48.8803754,longitude:2.3247805},isEnable:!0},{userName:"Chuck Norris",businessName:"Chuck Norris Company",comment:"No comment.",score:4,image:"https://picturepan2.github.io/spectre/img/avatar-2.png",coordinates:{latitude:48.8337552,longitude:2.2526615},isEnable:!1}],g=function(e){var a=e.currentValue,t=e.action,n=Array.isArray(a)?a:[a];return r.a.createElement("div",{className:"text-center m-2"},p.map(function(e){return r.a.createElement("span",{key:"note_".concat(e.value),className:"chip ".concat(n.includes(e.value)&&"bg-".concat(e.color)," c-hand"),role:"button",tabIndex:"0",onClick:function(){return t({target:{id:"score",value:e.value}})},onKeyPress:function(){return t({target:{id:"score",value:e.value}})}},e.value)}))},v=function(e){var a=e.title,t=e.showFilters,n=e.filters,o=e.customDisplay,c=e.handleFilter;return r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"col-12 col-mx-auto text-center m-1"},r.a.createElement("div",{className:"panel-title h3"},a)),t&&r.a.createElement("div",null,r.a.createElement(g,{currentValue:n.score,action:c}),r.a.createElement("div",{className:"col-12 col-mx-auto text-center"},r.a.createElement("button",{className:"btn btn-".concat("ASC"===n.order?"primary":"link"," btn-action s-circle"),onClick:function(){return c({target:{id:"order",value:"ASC"}})}},r.a.createElement("i",{className:"icon icon-arrow-up"})),r.a.createElement("button",{className:"btn btn-".concat("DESC"===n.order?"primary":"link"," btn-action s-circle"),onClick:function(){return c({target:{id:"order",value:"DESC"}})}},r.a.createElement("i",{className:"icon icon-arrow-down"}))),r.a.createElement("div",{className:"input-group has-icon-right mt-2"},!1!==o&&r.a.createElement("span",{className:"input-group-addon bg-primary"},o,"\xa0/ 5"),r.a.createElement("input",{id:"search",className:"form-input",type:"text",placeholder:"Search",onChange:c,value:n.search}),r.a.createElement("i",{className:"form-icon icon icon-cross c-hand",role:"button",tabIndex:"0",onClick:function(){return c({target:{id:"search",value:""}})},onKeyPress:function(){return c({target:{id:"search",value:""}})}}))))};v.defaultProps={title:"Business Ratings"};var f=v,N=function(e){var a=e.ratings,t=e.handleShowMap;return r.a.createElement("div",{className:"panel-body"},a.map(function(e,a){return r.a.createElement("div",{key:"rating_".concat(a),className:"tile columns c-hand",onClick:function(){return t(e)}},r.a.createElement("div",{className:"tile-icon col-3 col-xl-4 col-xs-12"},r.a.createElement("div",{className:"chip"},r.a.createElement("img",{src:e.image,className:"avatar avatar-sm",alt:""}),e.userName)),r.a.createElement("div",{className:"tile-content col-8 col-xl-6 col-md-11"},r.a.createElement("p",{className:"tile-title text-bold"},e.businessName),r.a.createElement("p",{className:"tile-subtitle"},e.comment)),r.a.createElement("div",{className:"tile-action col-1"},r.a.createElement("span",{className:"chip float-right",role:"button",tabIndex:"0"},r.a.createElement("span",{className:"text-".concat(p[e.score].color)},e.score),r.a.createElement("span",{className:"text-dark"},"\xa0/ 5"))))}))};N.defaultProps={ratings:[]};var E=N,w=function(e){var a=e.current,t=e.errors,n=e.handleSubmit,o=e.handleChange;return r.a.createElement("form",{className:"form-horizontal",onSubmit:n},r.a.createElement("div",{className:"form-group ".concat(t.businessName?"has-error":"")},r.a.createElement("div",{className:"col-3 col-sm-12"},r.a.createElement("label",{className:"form-label",htmlFor:"businessName"},"Business name")),r.a.createElement("div",{className:"col-8 col-sm-12"},r.a.createElement("input",{className:"form-input",id:"businessName",type:"text",value:a.businessName,onChange:o,placeholder:"The business name",required:""}),t.businessName&&r.a.createElement("p",{className:"form-input-hint"},"Required field."))),r.a.createElement("div",{className:"form-group ".concat(t.userName?"has-error":"")},r.a.createElement("div",{className:"col-3 col-sm-12"},r.a.createElement("label",{className:"form-label",htmlFor:"userName"},"User name")),r.a.createElement("div",{className:"col-8 col-sm-12"},r.a.createElement("input",{className:"form-input",id:"userName",type:"text",value:a.userName,onChange:o,placeholder:"Your user name"}),t.userName&&r.a.createElement("p",{className:"form-input-hint"},"Required field."))),r.a.createElement("div",{className:"form-group ".concat(t.comment?"has-error":"")},r.a.createElement("div",{className:"col-3 col-sm-12"},r.a.createElement("label",{className:"form-label",htmlFor:"comment"},"Comment")),r.a.createElement("div",{className:"col-8 col-sm-12"},r.a.createElement("textarea",{className:"form-input",id:"comment",value:a.comment,onChange:o,placeholder:"Add a comment here",rows:"4"}),t.comment&&r.a.createElement("p",{className:"form-input-hint"},"Required field."))),r.a.createElement("div",{className:"form-group ".concat(t.score?"has-error":"")},r.a.createElement("div",{className:"col-3 col-sm-12"},r.a.createElement("label",{className:"form-label",htmlFor:"score"},"Score")),r.a.createElement("div",{className:"col-8 col-sm-12"},r.a.createElement(g,{currentValue:a.score,action:o}),t.score&&r.a.createElement("p",{className:"form-input-hint"},"Required field."))),r.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Submit"))},y=function(e){var a=e.current,t=e.errors,n=e.showForm,o=e.handleShowForm,c=e.handleSubmit,s=e.handleChange;return r.a.createElement("div",{className:"panel-footer"},r.a.createElement("div",{className:"columns"},n&&r.a.createElement("div",{className:"column col-12 mb-2"},r.a.createElement("button",{className:"btn btn-action s-circle float-right mb-2",type:"button",onClick:o},r.a.createElement("i",{className:"icon icon-cross"})))),n&&r.a.createElement(w,{current:a,errors:t,handleSubmit:c,handleChange:s}),!n&&r.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:o},"Add rating"))},S=function(e){var a=e.loadRatings;return r.a.createElement("div",{className:"empty",style:{height:"100vh"}},r.a.createElement("p",{className:"empty-title h6"},"You have no ratings"),r.a.createElement("p",{className:"empty-subtitle"},"Click the button to load some fake ratings"),r.a.createElement("div",{className:"empty-action"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:a},"Load ratings")))},C=t(8),k=t.n(C),F=t(9),x=t.n(F),O=function(e){var a=e.rating,t=e.handleShowMap;return r.a.createElement(k.a,{center:[a.coordinates.latitude,a.coordinates.longitude],zoom:12},r.a.createElement("button",{className:"btn btn-action s-circle float-right m-2",onClick:function(){return t(a)}},r.a.createElement("i",{className:"icon icon-cross"})),r.a.createElement(x.a,{anchor:[a.coordinates.latitude,a.coordinates.longitude],payload:1,onClick:function(e){e.event,e.anchor,e.payload}}))},j=function(e,a){return e.score<a.score?1:e.score>a.score?-1:0},M=function(e,a){return e.score<a.score?-1:e.score>a.score?1:0},R=function(){function e(){for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];var r=t.userName,o=void 0===r?"":r,c=t.businessName,s=void 0===c?"":c,i=t.comment,m=void 0===i?"":i,u=t.isEnable,d=void 0!==u&&u,h=t.score,p=void 0===h?null:h,b=t.image,g=void 0===b?"https://picturepan2.github.io/spectre/img/avatar-1.png":b,v=t.coordinates,f=void 0===v?{latitude:null,longitude:null}:v;Object(l.a)(this,e),this.userName=o,this.businessName=s,this.comment=m,this.isEnable=d,this.score=p,this.image=g,this.coordinates=f}return Object(i.a)(e,[{key:"validate",value:function(){var e=this;return Object.keys(this).every(function(a){return"isEnable"===a||"coordinates"===a||("score"===a?null!==e[a]&&e[a]>=0&&e[a]<=5:null!==e[a]&&e[a].length>0)})}},{key:"addCoordinates",value:function(e,a){this.coordinates.latitude=e,this.coordinates.longitude=a}},{key:"setRandomImage",value:function(){this.image="https://picturepan2.github.io/spectre/img/avatar-".concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Math.floor(Math.random()*e)+1}(),".png")}}]),e}(),A=(t(31),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).loadFakeRatings=function(){localStorage.setItem("ratings",JSON.stringify(b)),t.setState({ratings:b})},t.handleShowForm=function(){t.setState(function(e){return{showForm:!e.showForm,showMap:!1,current:new R,editForm:!1,errors:{}}})},t.checkErrors=function(){var e={},a=t.state.current;return Object.keys(a).map(function(n){return"score"===n&&null===a[n]?e[n]=!0:"isEnable"===n||null!==t[n]&&0!==a[n].length||(e[n]=!0),e}),e},t.handleShowMap=function(e){t.setState(function(a){return{showMap:!a.showMap,current:e}})},t.handleFilter=function(e){var a=e.target,n=a.id,r=a.value;t.setState(function(e){var a=e.filters;return Array.isArray(a[n])?a[n].includes(r)?a[n]=a[n].filter(function(e){return e!==r}):a[n].push(r):"order"===n&&r===a.order?a.order=null:a[n]=r,{filters:a}})},t.handleChange=function(e){var a=e.target,n=a.id,r=a.value;t.setState(function(e){var a=e.current,t=Object(s.a)({},e.errors);return delete t[n],a[n]=r,{current:a,errors:t}})},t.handleSubmit=function(e){e.preventDefault(),t.setState(function(e){var a=e.ratings,n=e.current,r=e.coordinates;return n.validate()?(n.setRandomImage(),n.isEnable=!0,r&&n.addCoordinates(r.latitude,r.longitude),a.unshift(n),localStorage.setItem("ratings",JSON.stringify(a)),{showForm:!e.showForm,current:{},ratings:a}):{errors:t.checkErrors()}})},t.state={showForm:!1,showMap:!1,editForm:!1,filters:{search:"",score:[],order:null},errors:{},current:new R,ratings:[],coordinates:null},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(Object(h.a)(t))),t.handleShowForm=t.handleShowForm.bind(Object(h.a)(Object(h.a)(t))),t.handleShowMap=t.handleShowMap.bind(Object(h.a)(Object(h.a)(t))),t.handleFilter=t.handleFilter.bind(Object(h.a)(Object(h.a)(t))),t.loadFakeRatings=t.loadFakeRatings.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){return e.setState({coordinates:a.coords})});var a=localStorage.getItem("ratings");this.setState({ratings:JSON.parse(a)||[]})}},{key:"render",value:function(){var e,a=this.state,t=a.ratings,n=a.errors,o=a.current,c=a.showForm,s=a.showMap,l=a.filters,i=a.editForm,m=function(e,a){var t=a.search,n=a.score,r=a.order,o=e.filter(function(e){return e.isEnable&&(e.userName.toLowerCase().match(t.toLowerCase().trim())||e.businessName.toLowerCase().match(t.toLowerCase().trim())||e.comment.toLowerCase().match(t.toLowerCase().trim()))});return"DESC"===r&&(o=o.sort(M)),"ASC"===r&&(o=o.sort(j)),o=o.filter(function(e){return!n.length||n.includes(e.score)})}(t,l),u=(e=m).length&&(e.reduce(function(e,a){return e+a.score},0)/e.length).toFixed(1)||0;return r.a.createElement("div",{className:"App container",id:"cards"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column col-5 col-xl-8 col-sm-10 col-xs-11 col-mx-auto"},r.a.createElement("div",{className:"panel"},r.a.createElement(f,{filters:l,showFilters:!c,customDisplay:u,handleFilter:this.handleFilter}),!c&&r.a.createElement("div",{className:"divider"}),!c&&(t.length>0?s?r.a.createElement(O,{rating:o,handleShowMap:this.handleShowMap}):r.a.createElement(E,{ratings:m,handleShowMap:this.handleShowMap}):r.a.createElement(S,{loadRatings:this.loadFakeRatings})),r.a.createElement("div",{className:"divider"}),r.a.createElement(y,{current:o,errors:n,showForm:c,editForm:i,handleShowForm:this.handleShowForm,handleChange:this.handleChange,handleSubmit:this.handleSubmit})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.8d2e3c32.chunk.js.map