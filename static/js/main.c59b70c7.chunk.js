(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,n){e.exports={Container:"navigationMenu_Container__1LgoY",Hidden:"navigationMenu_Hidden__1MiaB",Btn:"navigationMenu_Btn__1v5f3",ListH1:"navigationMenu_ListH1__24gg0",List:"navigationMenu_List__1iJDl",ListOpen:"navigationMenu_ListOpen__3WxZ5",pagination:"navigationMenu_pagination__149XI",disabled:"navigationMenu_disabled__GnaHK",active:"navigationMenu_active__1Zwv3",H1:"navigationMenu_H1__3aksu"}},11:function(e,t,n){e.exports={Name:"pokemonPage_Name__3A8uP",TextName:"pokemonPage_TextName__2AfC7",Wrapper:"pokemonPage_Wrapper__270GA",Content:"pokemonPage_Content__2Bha1",Info:"pokemonPage_Info__36HBc",BaseInfo:"pokemonPage_BaseInfo__2RLKp",Boxes:"pokemonPage_Boxes__2zFgj",Box:"pokemonPage_Box__2DRIt",ImgDiv:"pokemonPage_ImgDiv__12chi"}},15:function(e,t,n){e.exports={Box:"abilities_Box__2CkmG",Header:"abilities_Header__yT1Kn",AbilityItem:"abilities_AbilityItem__pcvds",StrongText:"abilities_StrongText__3ueff"}},23:function(e,t,n){e.exports={Cards:"mainPage_Cards__1-wgc",Header:"mainPage_Header__1dIHa",Container:"mainPage_Container__35bpa",page:"mainPage_page__2jOT3"}},24:function(e,t,n){e.exports={Button:"Button_Button__ecTKC",Text:"Button_Text__1CEXd",error:"Button_error__26TOj",success:"Button_success__3fYKV",primary:"Button_primary__17Suf"}},29:function(e,t,n){e.exports={center:"Loader_center__2sT-h",Loader2:"Loader_Loader2__3iiqz","lds-roller":"Loader_lds-roller__3PYt_"}},30:function(e,t,n){e.exports={Box:"about_Box__1k8eY",Header:"about_Header__1Rpha",FormsItem:"about_FormsItem__1iwWf"}},54:function(e,t,n){},63:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(46),o=n.n(i),r=(n(54),n(18)),j=n(19),d=n(22),l=n(21),b=n(3),u=n(10),m=n.n(u),x=n(31),O=n(12),h=n(47),_=n.n(h),p=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(!1),r=Object(b.a)(o,2),j=r[0],d=r[1],l=Object(c.useState)({results:[]}),u=Object(b.a)(l,2),h=u[0],p=u[1],f=Object(c.useState)(),v=Object(b.a)(f,2),g=v[0],k=v[1];Object(c.useEffect)((function(){p(e.props)}),[e.props.results]);var N=function(){i(!s)},P=h.results.map((function(e){var t=parseInt(e.url.substr(30).match(/\d+/));return Object(a.jsx)(O.b,{to:"/pokemon/"+t,children:Object(a.jsx)("div",{children:e.name})},t)})),I=function(t){var n=20*t;e.pokemonAPI.addPokemons(n).then((function(e){p(e.data)}))};return Object(a.jsxs)("div",{className:s?m.a.Container:m.a.Hidden,children:[Object(a.jsx)("div",{className:m.a.Btn,children:s?Object(a.jsx)(x.b,{onClick:function(){N()}}):Object(a.jsx)(x.a,{onClick:function(){N()}})}),Object(a.jsx)("h1",{className:m.a.H1,children:"Menu"}),Object(a.jsx)(O.b,{to:"/PokemonApp",children:Object(a.jsx)("h2",{className:m.a.ListH1,children:"home"})}),Object(a.jsx)("div",{className:m.a.ListH1,onClick:function(){d(!j)},children:"list of pokemons"}),Object(a.jsx)("div",{className:m.a.page,children:Object(a.jsx)(_.a,{activeClass:m.a.active,activePage:g,itemsCountPerPage:20,totalItemsCount:e.props.totalCount-20,pageRangeDisplayed:3,onChange:function(e){I(e),k(e)}})}),void 0!=h?Object(a.jsx)("div",{className:j?m.a.List:m.a.ListOpen,children:P}):null]})},f=(n(63),n(23)),v=n.n(f),g=n(24),k=n.n(g),N=function(e){var t=[k.a.Button,k.a[e.type]];return Object(a.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:Object(a.jsx)("span",{className:k.a.Text,children:e.children})})},P=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"without";return Object(a.jsx)(O.b,{to:"/pokemon/"+e.id,children:Object(a.jsx)("div",{className:v.a.Cards,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:""}),Object(a.jsx)("div",{children:e.name})]})})})},n=e.context.results.map((function(e){return Object(a.jsx)(t,{name:e.name,id:parseInt(e.url.substr(30).match(/\d+/))},parseInt(e.url.substr(30).match(/\d+/)))}));return Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("div",{className:v.a.Header,children:"POKEMONS"}),Object(a.jsx)("div",{className:v.a.Container,children:n}),Object(a.jsx)(N,{onClick:e.requestPokemon,children:"More"})]})},I=n(33),C=n(32),S=Object(c.createContext)(),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={results:[],countAddPokemons:0,totalCount:null},e.addPokemons=function(t){e.setState((function(){return{totalCount:t.data.count,results:[].concat(Object(C.a)(e.state.results),Object(C.a)(t.data.results)),countAddPokemons:e.state.results.length+t.data.results.length}}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(S.Provider,{value:Object(I.a)(Object(I.a)({},this.state),{},{addPokemons:this.addPokemons}),children:this.props.children})}}]),n}(c.Component),A=n(28),y=n.n(A),H=y.a.create({baseURL:"https://pokeapi.co/api/v2/"}),L={addPokemons:function(e){return H.get("pokemon/?limit=20&offset=".concat(e))},getPokemon:function(e){return H.get("pokemon/".concat(e))},getAdditional:function(e){return y.a.get(e)},getSpecies:function(e){return H.get("pokemon-species/".concat(e,"/"))}},T=n(29),M=n.n(T),w=function(e){return Object(a.jsx)("div",{className:M.a.center,children:Object(a.jsxs)("div",{className:M.a.Loader2,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})},E=n(2),F=n(15),Y=n.n(F),D=n(83),K=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(null),r=Object(b.a)(o,2),j=r[0],d=r[1],l=Object(c.useState)(),u=Object(b.a)(l,2),m=(u[0],u[1],Object(c.useState)(!1)),x=Object(b.a)(m,2),O=x[0],h=x[1],_=e.abilities.map((function(t){return Object(a.jsx)("div",{onClick:function(){var n;n=t.ability.url,h(!0),e.pokemonAPI.getAdditional(n).then((function(e){var t=e.data.effect_entries.findIndex((function(e){return"en"===e.language.name}));d(e.data.effect_entries[t]),h(!1)}))},className:Y.a.AbilityItem,children:t.ability.name},Object(D.a)())}));return Object(a.jsxs)("div",{className:Y.a.Box,children:[Object(a.jsx)("div",{className:Y.a.Header,onClick:function(){i(!s),s||d(null)},children:"Abilities"}),s?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:_}),O?Object(a.jsx)(w,{}):Object(a.jsx)("div",{children:j?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:Y.a.StrongText,children:"Effect: "}),j.effect,Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:Y.a.StrongText,children:"Short Effect: "}),j.short_effect]}):null})]}):null]})},q=n(9),W=n.n(q),R=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(null),r=Object(b.a)(o,2),j=r[0],d=r[1],l=Object(c.useState)(),u=Object(b.a)(l,2);u[0],u[1];Object(c.useEffect)((function(){m()}),[e.pokemonId]);var m=function(){e.pokemonAPI.getSpecies(e.pokemonId).then((function(e){d(e.data)}))};return Object(a.jsxs)("div",{className:W.a.Box,children:[Object(a.jsx)("div",{className:W.a.Header,onClick:function(){m(),i(!s)},children:"Spicies"}),s?Object(a.jsxs)("div",{className:W.a.BaseInfo,children:[Object(a.jsx)("div",{className:W.a.StrongText,children:"Base happines: "}),j.base_happiness,Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Capture rate: "}),j.capture_rate,Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Forms switchable: "}),j.forms_switchable?"Yes":"No",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Has gender differences: "}),j.has_gender_differences?"Yes":"No",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Hatch counter: "}),j.hatch_counter,Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Is baby: "}),j.is_baby?"Yes":"No",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Is legendary: "}),j.is_legendary?"Yes":"No",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:W.a.StrongText,children:"Is mythical: "}),j.is_mythical?"Yes":"No",Object(a.jsx)("br",{})]}):null]})},G=n(11),U=n.n(G),J=n(30),z=n.n(J),X=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)([]),r=Object(b.a)(o,2),j=r[0],d=r[1];Object(c.useEffect)((function(){l()}),[e.pokemonId]);var l=function(){e.pokemonAPI.getSpecies(e.pokemonId).then((function(e){var t=e.data.flavor_text_entries.filter((function(e){return"en"===e.language.name})),n=Array.from(new Set(t.map((function(e){return e.flavor_text}))));d(n)}))},u=j.map((function(e){return Object(a.jsx)("div",{children:e},Object(D.a)())}));return Object(a.jsxs)("div",{className:z.a.Box,children:[Object(a.jsx)("div",{className:z.a.Header,onClick:function(){i(!s)},children:"About"}),s?Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:u})}):null]})},Z=Object(E.e)((function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),s=n[0],i=n[1],o=e.match.params.id;return Object(c.useEffect)((function(){e.pokemonAPI.getPokemon(o).then((function(e){i(e.data)}))}),[e.match.params.id]),Object(a.jsx)(a.Fragment,{children:0===s.length?Object(a.jsx)(w,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:U.a.Name,children:Object(a.jsx)("div",{className:U.a.TextName,children:s.name})}),Object(a.jsx)("div",{className:U.a.Wrapper,children:Object(a.jsxs)("div",{className:U.a.Content,children:[Object(a.jsxs)("div",{className:U.a.Info,children:[Object(a.jsxs)("div",{className:U.a.ImgDiv,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:s.sprites.back_shiny,alt:"pokemon"}),Object(a.jsx)("img",{src:s.sprites.front_shiny,alt:"pokemon"})]}),Object(a.jsx)("img",{src:s.sprites.back_default,alt:"pokemon"}),Object(a.jsx)("img",{src:s.sprites.front_default,alt:"pokemon"})]}),Object(a.jsxs)("div",{className:U.a.BaseInfo,children:[Object(a.jsx)("b",{children:"Name: "}),Object(a.jsx)("div",{children:s.name}),Object(a.jsx)("b",{children:"Height: "}),Object(a.jsx)("div",{children:s.height}),Object(a.jsx)("b",{children:"Weight: "}),Object(a.jsx)("div",{children:s.weight}),Object(a.jsx)("b",{children:"Base experience: "}),Object(a.jsx)("div",{children:s.base_experience})]})]}),Object(a.jsx)("div",{className:U.a.Box,children:Object(a.jsx)(X,{forms:s.forms,pokemonId:s.id,pokemonAPI:e.pokemonAPI})}),Object(a.jsx)("div",{className:U.a.Box,children:Object(a.jsx)(R,{pokemonAPI:e.pokemonAPI,pokemonId:s.id})}),Object(a.jsx)("div",{className:U.a.Box,children:Object(a.jsx)(K,{abilities:s.abilities,pokemonAPI:e.pokemonAPI})})]})})]})})})),V=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!1},e.requestPokemon=function(){e.setState({isLoading:!0}),L.addPokemons(e.context.countAddPokemons).then((function(t){e.context.addPokemons(t),e.setState({isLoading:!1})}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.requestPokemon()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"juniortest"}),Object(a.jsx)(p,{props:this.context,pokemonAPI:L}),Object(a.jsxs)("div",{className:"contentPart",children:[this.state.isLoading?Object(a.jsx)(w,{}):Object(a.jsx)(S.Consumer,{children:function(t){return Object(a.jsx)(E.a,{path:"/PokemonApp",exact:!0,children:Object(a.jsx)(P,{context:t,isLoading:e.state.isLoading,requestPokemon:e.requestPokemon})})}}),Object(a.jsxs)(E.a,{path:"/pokemon/:id",children:[Object(a.jsx)(Z,{pokemonAPI:L})," "]})]}),Object(a.jsx)("div",{className:"footer",children:"\u044f \u0432 \u0441\u043e\u0446 \u0441\u0435\u0442\u044f\u0445"})]})}}]),n}(s.a.Component);V.contextType=S;var Q=V,$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(B,{children:Object(a.jsx)(Q,{})})})}),document.getElementById("root")),$()},9:function(e,t,n){e.exports={BaseInfo:"spicies_BaseInfo__119xU",Box:"spicies_Box__m0Urk",Header:"spicies_Header__1UGKs",StrongText:"spicies_StrongText__1N-L2"}}},[[82,1,2]]]);
//# sourceMappingURL=main.c59b70c7.chunk.js.map