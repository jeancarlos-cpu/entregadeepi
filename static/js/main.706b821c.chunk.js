(window.webpackJsonpentregadeepi=window.webpackJsonpentregadeepi||[]).push([[0],{207:function(e,t,a){e.exports=a(305)},212:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},214:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),c=(a(212),a(14)),l=a(13),u=a(16),s=a(17),m=a(18),p=(a(213),a(214),a(175)),f=a(346),d=a(150),g=a(75),E=a(151),b=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},menuButtom:{padding:"10px",cursor:"pointer"}}}));function O(e){var t=e.onRouteChange,a=e.onLogOut,n=b();return o.a.createElement("div",{className:n.root},o.a.createElement(f.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(g.a,{variant:"h6",className:n.title},o.a.createElement(E.a,{color:"inherit",onClick:function(){return t("entrega-de-epi")}},"Entrega de EPI"),o.a.createElement(E.a,{color:"inherit",onClick:function(){return t("registros")}},"Registros")),o.a.createElement(E.a,{color:"inherit",onClick:a},"Sair"))))}var h=a(21),v=a(348),j=a(173),y=(a(154),a(170),a(349)),w=a(347);a(134),Object(p.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var P=a(5),S=a(359),C=a(354),x=a(355),D=a(353),R=a(172),T=a(153),I=a(171),N=a(120),k=a(24);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=Object(p.a)((function(e){return{root:{},select:{fontSize:"1.2em"}}}));function q(e){var t=e.handleFuncionario,a=e.funcionario,r=o.a.useState([]),i=Object(h.a)(r,2),c=i[0],l=i[1],u=M(),s=(Object(k.a)(),o.a.useState(null)),m=Object(h.a)(s,2);m[0],m[1];return Object(n.useEffect)((function(){fetch("https://www.jeancarlos.website/funcionarios").then((function(e){return e.json()})).then((function(e){return e.data.map((function(e){return{value:"".concat(e.funcionario_id),label:"".concat(e.matricula," ").concat(e.nome)}}))})).then((function(e){l(e)}))}),[]),o.a.createElement("div",{className:u.root},o.a.createElement(N.a,{className:u.select,value:a,maxMenuHeight:390,styles:{menu:function(e){return F({},e,{zIndex:9999})}},theme:function(e){return F({},e,{borderRadius:5,colors:F({},e.colors,{primary25:"#D8D6D9",primary:"#3f51b5"}),spacing:{baseUnit:8.5}})},TextFieldProps:{label:"Funcionario"},placeholder:"Selecionar Funcion\xe1rio",options:c,onChange:function(e){t(e)}}))}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=Object(p.a)((function(e){return{root:{},select:{fontSize:"1.2em"}}}));function L(e){var t=e.handleEpi,a=e.codigoEpi,r=o.a.useState([]),i=Object(h.a)(r,2),c=i[0],l=i[1],u=z(),s=(Object(k.a)(),o.a.useState(null)),m=Object(h.a)(s,2);m[0],m[1];return Object(n.useEffect)((function(){fetch("https://www.jeancarlos.website/epis").then((function(e){return e.json()})).then((function(e){return e.data.map((function(e){return{value:"".concat(e.epi_id),label:"".concat(e.codigo_epi," ").concat(e.descricao)}}))})).then((function(e){l(e)}))}),[]),o.a.createElement("div",{className:u.root},o.a.createElement(N.a,{className:u.select,value:a,styles:{menu:function(e){return B({},e,{zIndex:9999})}},maxMenuHeight:390,theme:function(e){return B({},e,{borderRadius:5,colors:B({},e.colors,{primary25:"#D8D6D9",primary:"#3f51b5"}),spacing:{baseUnit:8.5}})},TextFieldProps:{label:"Funcionario"},placeholder:"Selecionar C\xf3digo/Nome",options:c,onChange:function(e){t(e)}}))}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=Object(p.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(0),width:"100%"}}}));function H(){var e=J(),t=o.a.useRef(null),a=o.a.useState(0),n=Object(h.a)(a,2),r=n[0],i=n[1];o.a.useEffect((function(){i(t.current.offsetWidth)}),[]);var c=o.a.useState({tipoEpi:"",codigoEpi:"",funcionario:"",motivo:""}),l=Object(h.a)(c,2),u=l[0],s=l[1],m=o.a.useState(""),p=Object(h.a)(m,2),f=p[0],d=p[1],b=o.a.useState(!1),O=Object(h.a)(b,2),N=O[0],k=O[1],W=function(e){return function(t){s(_({},u,Object(P.a)({},e,t.target.value)))}},F=function(){k(!1)},M=function(){var e={funcionario_id:u.funcionario.value,epi_id:u.codigoEpi.value,quantidade:f,motivo:u.motivo};fetch("https://www.jeancarlos.website/saidaepi",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},A=function(){s(_({},u,{tipoEpi:"",codigoEpi:"",funcionario:"",motivo:""})),d("")},B=function(){};return o.a.createElement(w.a,{component:"main",maxWidth:"xs"},o.a.createElement(v.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(g.a,{component:"h1",variant:"h5"},"Entrega de EPI"),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),""!==u.funcionario&&""!==u.codigoEpi&&(A(),k(!0),B(),M())}},o.a.createElement(y.a,{container:!0,spacing:2},o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(T.a,{variant:"outlined",className:e.formControl,required:!0,fullWidth:!0,margin:"normal",autoComplete:"fname"},o.a.createElement(R.a,{ref:t},"Tipo EPI"),o.a.createElement(I.a,{native:!0,required:!0,value:u.tipoEpi,onChange:W("tipoEpi"),labelWidth:r,inputProps:{id:"tipoEpi"}},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:1},"PROTE\xc7\xc3O DA CABE\xc7A"),o.a.createElement("option",{value:2},"PROTE\xc7\xc3O DOS OLHOS E FACE"),o.a.createElement("option",{value:3},"PROTE\xc7\xc3O RESPIRAT\xd3RIA"),o.a.createElement("option",{value:4},"PROTE\xc7\xc3O DO TRONCO"),o.a.createElement("option",{value:5},"PROTE\xc7\xc3O DOS MEMBROS SUPERIORES"),o.a.createElement("option",{value:6},"PROTE\xc7\xc3O DOS MEMBROS INFERIORES"),o.a.createElement("option",{value:7},"PROTE\xc7\xc3O DO CORPO INTEIRO"),o.a.createElement("option",{value:8},"PROTE\xc7\xc3O CONTRA QUEDAS COM DIFEREN\xc7A DE N\xcdVEL")))),o.a.createElement(y.a,{item:!0,xs:9},o.a.createElement(L,{required:!0,handleEpi:function(e){s(_({},u,{codigoEpi:e}))},codigoEpi:u.codigoEpi})),o.a.createElement(y.a,{item:!0,xs:3},o.a.createElement(j.a,{value:f,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&d(e.target.value)},autoComplete:"fname",variant:"outlined",required:!0,fullWidth:!0,id:"quantidade",label:"Quant."})),o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(q,{handleFuncionario:function(e){s(_({},u,{funcionario:e}))},funcionario:u.funcionario})),o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(T.a,{variant:"outlined",className:e.formControl,required:!0,fullWidth:!0,margin:"normal",autoComplete:"fname"},o.a.createElement(R.a,{ref:t},"Motivo"),o.a.createElement(I.a,{native:!0,value:u.motivo,onChange:W("motivo"),labelWidth:r,inputProps:{id:"motivo"}},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:1},"Perda (deixou em local incorreto)"),o.a.createElement("option",{value:2},"Perda (extravio)"),o.a.createElement("option",{value:3},"Substitui\xe7\xe3o por uso"),o.a.createElement("option",{value:4},"Danificado"),o.a.createElement("option",{value:5},"Recebimento"))))),o.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Salvar"),o.a.createElement(S.a,{open:N,onClose:F},o.a.createElement(D.a,{id:"alert-dialog-title"},"Dados salvos"),o.a.createElement(C.a,null,o.a.createElement(x.a,{id:"alert-dialog-description"},"Sa\xedda de EPI realizada com sucesso")),o.a.createElement(E.a,{onClick:F,color:"primary",autoFocus:!0},"OK")))))}var Q=a(357),G=(a(356),a(177)),V=a.n(G),$=a(184);var K=Object(p.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#3f51b5"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));Object($.a)({palette:{primary:{main:"#009688"},secondary:{main:"#11cb5f"}}});function X(e){var t=e.handleOnSignIn,a=Object(n.useState)(""),r=Object(h.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),u=Object(h.a)(l,2),s=u[0],m=u[1],p=Object(n.useState)(!1),f=Object(h.a)(p,2),d=f[0],b=f[1],O=K();return o.a.createElement(w.a,{component:"main",maxWidth:"xs"},o.a.createElement(v.a,null),o.a.createElement("div",{className:O.paper},o.a.createElement(Q.a,{className:O.avatar},o.a.createElement(V.a,null)),o.a.createElement(g.a,{component:"h1",variant:"h5"},"Acesso Restrito"),o.a.createElement("form",{className:O.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),fetch("https://www.jeancarlos.website/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:s})}).then((function(e){return e.json()})).then((function(e){e.id?t(e.id):b(!0)}))}},o.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Endere\xe7o de e-mail",autoComplete:"email",autoFocus:!0,onChange:function(e){c(e.target.value),b(!1)},error:d,helperText:""===i&&d?"Campo vazio":""}),o.a.createElement(j.a,Object(P.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Senha",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){m(e.target.value),b(!1)},error:d,helperText:b?"Usu\xe1rio ou senha inv\xe1lidos.":""},"helperText",""===s&&d?"Campo vazio":"")),o.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:O.submit},"Entrar"))))}var Y=a(178),Z=a.n(Y),ee=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={registros:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.jeancarlos.website/registros").then((function(e){return e.json()})).then((function(t){var a=t.data;e.setState({registros:a})}))}},{key:"render",value:function(){return o.a.createElement(Z.a,{title:"Registros",columns:[{title:"Data",field:"saida"},{title:"Matricula",field:"matricula"},{title:"Nome",field:"nome"},{title:"Cargo",field:"cargo"},{title:"C\xf3digo EPI",field:"codigo_epi"},{title:"Descri\xe7\xe3o",field:"descricao"},{title:"Quantidade",field:"quantidade"},{title:"Motivo",field:"motivo"}],data:this.state.registros,options:{exportButton:!0},localization:{toolbar:{searchPlaceholder:"Buscar",exportName:"Exportar como .csv",exportTitle:"Exportar"},pagination:{labelRowsSelect:"linhas",labelRowsPerPage:"Linhas por p\xe1gina",firstTooltip:"Primeira p\xe1gina",previousTooltip:"P\xe1gina anterior",nextTooltip:"Pr\xf3xima p\xe1gina",lastTooltip:"Ultima p\xe1gina",labelDisplayedRows:"{from}-{to} de {count}"}}})}}]),t}(o.a.Component),te=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleOnSignIn=function(t){e.setState({user:{id:t}}),e.setState({loggedIn:!0})},e.onRouteChange=function(t){e.setState({route:t})},e.onLogOut=function(){console.log("foi"),e.setState({loggedIn:!1}),e.setState({route:""})},e.state={loggedIn:!1,user:{id:0},route:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.loggedIn?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),o.a.createElement("div",null,o.a.createElement(O,{onRouteChange:this.onRouteChange,onLogOut:this.onLogOut}),"registros"===this.state.route?o.a.createElement("div",null,o.a.createElement(ee,null)):o.a.createElement("div",null,o.a.createElement(H,null)))):o.a.createElement(X,{handleOnSignIn:this.handleOnSignIn})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.706b821c.chunk.js.map