(window.webpackJsonpquiz=window.webpackJsonpquiz||[]).push([[0],{44:function(e,t,r){e.exports=r(78)},71:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(22),o=r.n(c),i=r(14),s=r(17),l=r(41),u=r(21),p=r.n(u),m=r(26),f=r(27),d=r.n(f),h="".concat("https://opentdb.com","/api_category.php"),b="".concat("https://opentdb.com","/api.php?amount=10&difficulty={difficulty}&type=multiple&category={category}");function y(){return(y=Object(m.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(h);case 2:return t=e.sent,e.abrupt("return",t.data.trivia_categories);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(p.a.mark(function e(t,r){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(b.replace("{difficulty}",r).replace("{category}",t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O="CATEGORIES_ACTION";function w(e){return function(e){(function(){return y.apply(this,arguments)})().then(function(t){e({type:O,list:t})})}}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{categories:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{categories:t.list};default:return e}},j=r(19),_=r(18),k=r(43),S="QUESTIONS_ACTION",N="ANSWER_ACTION",P="CLEAR_QUESTIONS_ACTION";function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(r,!0).forEach(function(t){Object(j.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{questions:[],answers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var r=t.questions.map(function(e){var t=e.incorrect_answers&&e.correct_answer?[].concat(Object(_.a)(e.incorrect_answers),[e.correct_answer]):[];return t.sort(function(){return Math.random()-.5}),C({},e,{options:t})});return C({},e,{questions:r});case N:var n=[].concat(Object(_.a)(e.answers),[t.answer]);return C({},e,{answers:n});case P:return{questions:[],answers:[]};default:return e}},D=Object(s.c)({categories:E,questions:x}),A=r(5),I=r(6),M=r(8),T=r(7),W=r(9),F=r(16),H=r(15),L=(r(71),function(e){function t(){return Object(A.a)(this,t),Object(M.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Quiz"))}}]),t}(n.Component)),R=function(e){function t(){return Object(A.a)(this,t),Object(M.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(w())}},{key:"render",value:function(){var e=this.props.categories;return a.a.createElement(n.Fragment,null,a.a.createElement("h1",null,"Categories"),0===e.length&&"Loading...",a.a.createElement("div",{className:"card-group"},e.map(function(e){return a.a.createElement(F.b,{className:"card",key:e.id,to:"/trivia/"+e.id},e.name)})))}}]),t}(n.Component),U=Object(i.b)(function(e){return e.categories})(R),z=(r(73),function(e){function t(){var e,r;Object(A.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(M.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).levels={easy:{stars:"\u2605\u2606\u2606",text:"Easy"},medium:{stars:"\u2605\u2605\u2606",text:"Medium"},hard:{stars:"\u2605\u2605\u2605",text:"Hard"}},r}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.difficulty,t=this.levels[e]||{};return a.a.createElement("div",{className:"level"},a.a.createElement("span",{className:"level-stars"},t.stars),t.text)}}]),t}(n.Component));r(74);var J=function(e){var t=e.correct,r=e.next;return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"modal-overlay"}),a.a.createElement("div",{className:"modal "+(!t&&"red")},a.a.createElement("i",{className:"modal-icon"}),a.a.createElement("h2",null,t?"You got it right!":"Wrong answer!"),a.a.createElement("button",{onClick:r,autoFocus:!0},"Next ",a.a.createElement("i",null,"\u2192"))))};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var B=10,Y="medium",G=function(e){function t(){var e,r;Object(A.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(M.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).state={selected_answer:null,question_index:0,correct:null,filter:Y},r.selectAnswer=function(e){r.setState({selected_answer:e.target.value})},r.submit=function(e,t){e.preventDefault();var n=r.state.selected_answer===t.correct_answer;r.setState({correct:n});var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach(function(t){Object(j.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{selected_answer:r.state.selected_answer,correct:n,date_time:new Date});r.props.dispatch(function(e){return{type:N,answer:e}}(a))},r.close=function(e){e.preventDefault(),r.props.history.push("/")},r.next=function(e){e.preventDefault();var t=r.state.question_index;r.props.answers.length<B?(r.form.current.reset(),r.setState({selected_answer:null,question_index:t+1,correct:null,filter:r.calcFilter()})):r.props.history.push("/report/"+r.props.category)},r}return Object(W.a)(t,e),Object(I.a)(t,[{key:"calcFilter",value:function(){var e=this.props.answers,t=this.state.filter;if(e.length>1){var r=e[e.length-1],n=e[e.length-2];!0===r.correct&&!0===n.correct?"easy"===r.difficulty&&"easy"===n.difficulty?t=Y:r.difficulty===Y&&n.difficulty===Y&&(t="hard"):!1===r.correct&&!1===n.correct&&("hard"===r.difficulty&&"hard"===n.difficulty?t=Y:r.difficulty===Y&&n.difficulty===Y&&(t="easy"))}return t}},{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.category,function(t){Promise.all([v(e,"easy"),v(e,"medium"),v(e,"hard")]).then(function(e){var r=Object(k.a)(e,3),n=r[0],a=r[1],c=r[2];t({type:S,questions:[].concat(Object(_.a)(n),Object(_.a)(a),Object(_.a)(c))})})}))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:P})}},{key:"render",value:function(){var e=this,t=this.state,r=t.selected_answer,c=t.question_index,o=t.correct,i=t.filter,s=this.props.questions.filter(function(e){return e.difficulty===i})[c]||{};return s.question?a.a.createElement(n.Fragment,null,a.a.createElement("a",{href:"#close",onClick:this.close},a.a.createElement("i",null,"\u24e7")," Close"),a.a.createElement("h2",null,s.category),a.a.createElement("section",null,a.a.createElement(z,{difficulty:s.difficulty}),a.a.createElement("h3",null,"Question ",c+1),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:s.question}}),a.a.createElement("form",{className:"answers",ref:this.form=Object(n.createRef)(),onChange:this.selectAnswer,onSubmit:function(t){return e.submit(t,s)}},s.options&&s.options.map(function(e){return a.a.createElement("label",{key:btoa(e)},a.a.createElement("input",{type:"radio",name:"option",value:e}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}),a.a.createElement("button",{type:"submit",disabled:!r},"Send answer"),null!==o&&a.a.createElement(J,{correct:o,next:this.next})))):"Loading..."}}]),t}(n.Component),$=Object(i.b)(function(e){return e.questions})(Object(H.f)(G));r(75);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var V=function(e){function t(){var e,r;Object(A.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(M.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).state={total_hits:0,total_mistakes:0,easy_hits:0,easy_mistakes:0,medium_hits:0,medium_mistakes:0,hard_hits:0,hard_mistakes:0},r}return Object(W.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=this.props,t=e.answers,r=e.category,n=t.reduce(function(e,t){switch(t.correct?e.total_hits++:e.total_mistakes++,t.difficulty){case"easy":t.correct?e.easy_hits++:e.easy_mistakes++;break;case"medium":t.correct?e.medium_hits++:e.medium_mistakes++;break;case"hard":t.correct?e.hard_hits++:e.hard_mistakes++}return e},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(r,!0).forEach(function(t){Object(j.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.state)),a=window.localStorage.getItem("category_"+r);n=a?JSON.parse(a):n,window.localStorage.setItem("category_"+r,JSON.stringify(n)),this.setState(n)}},{key:"render",value:function(){var e=this.state,t=e.total_hits,r=e.total_mistakes,n=e.easy_hits,c=e.easy_mistakes,o=e.medium_hits,i=e.medium_mistakes,s=e.hard_hits,l=e.hard_mistakes;return a.a.createElement("div",{className:"report"},a.a.createElement("div",{className:"report-head"},a.a.createElement("img",{src:"./mascot.png",alt:"Mascot"}),a.a.createElement("div",{className:"report-congrats"},a.a.createElement("h1",null,"Congrats!"),a.a.createElement("h2",null,"You finished the test"))),a.a.createElement("div",{className:"report-body"},a.a.createElement("h3",null,"See your performance"),a.a.createElement("div",{className:"report-resume"},a.a.createElement("div",{className:"report-resume-points"},a.a.createElement("div",null,t),a.a.createElement("span",null,"hits")),a.a.createElement("div",{className:"report-resume-points"},a.a.createElement("div",null,r),a.a.createElement("span",null,"mistakes"))),a.a.createElement("div",{className:"report-detail"},a.a.createElement("div",null,a.a.createElement("b",null,"Easy"),a.a.createElement("br",null),"Hits: ",n,a.a.createElement("br",null),"Mistakes: ",c),a.a.createElement("div",null,a.a.createElement("b",null,"Medium"),a.a.createElement("br",null),"Hits: ",o,a.a.createElement("br",null),"Mistakes: ",i),a.a.createElement("div",null,a.a.createElement("b",null,"Hard"),a.a.createElement("br",null),"Hits: ",s,a.a.createElement("br",null),"Mistakes: ",l)),a.a.createElement(F.b,{to:"/"},a.a.createElement("button",null,"Back to start"))))}}]),t}(n.Component),X=Object(i.b)(function(e){return e.questions})(V),Z=(r(76),function(e){function t(){return Object(A.a)(this,t),Object(M.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return a.a.createElement(n.Fragment,null,a.a.createElement(L,null),a.a.createElement("main",null,a.a.createElement(F.a,null,a.a.createElement(H.b,{path:"/",exact:!0,render:function(){return a.a.createElement(U,null)}}),a.a.createElement(H.b,{path:"/trivia/:category",render:function(e){var t=e.match.params.category;return window.localStorage.getItem("category_"+t)?a.a.createElement(H.a,{to:"/report/"+t}):a.a.createElement($,{category:t})}}),a.a.createElement(H.b,{path:"/report/:category",render:function(e){var t=e.match.params.category;return a.a.createElement(X,{category:t})}}))))}}]),t}(n.Component)),ee=(r(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=Object(s.d)(D,Object(s.a)(l.a));o.a.render(a.a.createElement(i.a,{store:re},a.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://henriquegogo.github.io/quiz",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://henriquegogo.github.io/quiz","/service-worker.js");ee?(!function(e,t){fetch(e).then(function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):te(t,e)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.20b68173.chunk.js.map