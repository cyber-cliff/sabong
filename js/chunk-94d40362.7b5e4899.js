(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94d40362"],{"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),o=n("2d00"),s=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),o=n("d039"),s=n("ad6d"),c="toString",a=RegExp.prototype,l=a[c],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(u||d)&&i(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in a)?s.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2d38":function(t,e,n){},"3fff":function(t,e,n){"use strict";n("2d38")},"6c13":function(t,e,n){"use strict";n("e93f")},"75ac":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),r={class:"row g-0"},o={class:"col-1 p-0 d-md-block d-none "},s={class:"col-md-11 col-sm-12 vh-100  "};function c(t,e,n,c,a,l){var u=Object(i["H"])("UserSideNav"),d=Object(i["H"])("router-view");return Object(i["y"])(),Object(i["e"])("main",r,[Object(i["i"])("div",o,[Object(i["i"])(u)]),Object(i["i"])("div",s,[Object(i["i"])(d)])])}var a=Object(i["U"])("data-v-1d94ef0b");Object(i["B"])("data-v-1d94ef0b");var l={class:"flex-shrink-0 p-3 bg-color1",style:{height:"100%"}},u={class:"nav-container-1"},d=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Home")],-1),f=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"History")],-1),b=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Payout")],-1),v=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Deposit")],-1),O=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Rules")],-1),g=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Password")],-1),h=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Profile")],-1),j=Object(i["i"])("div",{class:"link"},[Object(i["i"])("div",{class:"text"},"Logout")],-1);Object(i["z"])();var p=a((function(t,e,n,r,o,s){var c=Object(i["H"])("router-link");return Object(i["y"])(),Object(i["e"])("div",l,[Object(i["i"])("div",u,[Object(i["i"])(c,{class:"router-link",to:{name:"UserDashboardIndex"}},{default:a((function(){return[d]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserHistoryIndex"}},{default:a((function(){return[f]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserWithdrawIndex"}},{default:a((function(){return[b]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserDepositIndex"}},{default:a((function(){return[v]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserRulesIndex"}},{default:a((function(){return[O]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserPasswordIndex"}},{default:a((function(){return[g]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"UserAccountIndex"}},{default:a((function(){return[h]})),_:1}),Object(i["i"])(c,{class:"router-link",to:{name:"Login"}},{default:a((function(){return[j]})),_:1})])])})),m=n("b523"),k={setup:function(){var t=Object(m["a"])(),e=t.signOut;return{signOut:e}},data:function(){return{menu:[{header:"Main Navigation",hiddenOnCollapse:!0},{href:"/",title:"Dashboard",icon:"fa fa-user"},{href:"/charts",title:"Charts",icon:"fa fa-chart-area",child:[{href:"/charts/sublink",title:"Sub Link"}]}]}}};n("3fff");k.render=p,k.__scopeId="data-v-1d94ef0b";var x=k,y={components:{UserSideNav:x},data:function(){return{collapsed:!0,menu:[{header:"Main Navigation",hiddenOnCollapse:!0},{href:"/",title:"Dashboard",icon:"fa fa-user"},{href:"/charts",title:"Charts",icon:"fa fa-chart-area",child:[{href:"/charts/sublink",title:"Sub Link"}]}]}},methods:{onItemClick:function(t,e){var n=e.title;console.log(n),"Sign out"==n&&(this.$session.destroy(),this.$router.push("/")),"Langkaan"==n&&window.location.reload(),"West wood"==n&&window.location.reload(),"Rd"==n&&window.location.reload()},onCollapse:function(t){console.log("onCollapse"),this.collapsed=t},triggerToggle:function(){document.getElementsByClassName("vsm--toggle-btn")[0].click()}}};n("6c13");y.render=c;e["default"]=y},8418:function(t,e,n){"use strict";var i=n("c04e"),r=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=i(e);s in t?r.f(t,s,o(0,n)):t[s]=n}},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b523:function(t,e,n){"use strict";n("d3b7"),n("25f0"),n("fb6a");var i=n("a1e9"),r=n("6c02"),o=n("98a0"),s=function(){var t=Object(i["j"])("http://54.153.155.160"),e=Object(r["c"])(),n=function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},s=function(t,e){Object(o["a"])(t,e)},c=function(t,e){console.log("start"),sessionStorage.setItem(e,JSON.stringify(t))},a=function(t){var e=sessionStorage.getItem(t),n=JSON.parse(e);return n},l=function(){sessionStorage.removeItem("user"),sessionStorage.removeItem("token"),sessionStorage.removeItem("coins"),e.push({name:"Login"})};return{capitalize:n,baseUrl:t,setSession:c,getSession:a,signOut:l,showToast:s}};e["a"]=s},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},e93f:function(t,e,n){},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),o=n("e8b5"),s=n("23cb"),c=n("50c4"),a=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=d("slice"),b=u("species"),v=[].slice,O=Math.max;i({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,i,u,d=a(this),f=c(d.length),g=s(t,f),h=s(void 0===e?f:e,f);if(o(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(d,g,h);for(i=new(void 0===n?Array:n)(O(h-g,0)),u=0;g<h;g++,u++)g in d&&l(i,u,d[g]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-94d40362.7b5e4899.js.map