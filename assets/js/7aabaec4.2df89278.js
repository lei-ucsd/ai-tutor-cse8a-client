"use strict";(self.webpackChunkai_tutor_cse_8_a=self.webpackChunkai_tutor_cse_8_a||[]).push([[164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1},a="2.2 if, elif, else",l={unversionedId:"conditionals/if-elif-else",id:"conditionals/if-elif-else",title:"2.2 if, elif, else",description:"if statements",source:"@site/docs/02-conditionals/if-elif-else.md",sourceDirName:"02-conditionals",slug:"/conditionals/if-elif-else",permalink:"/ai-tutor-cse8a-client/docs/conditionals/if-elif-else",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Section 2: Conditionals",permalink:"/ai-tutor-cse8a-client/docs/category/section-2-conditionals"}},s={},c=[{value:"if statements",id:"if-statements",level:2},{value:"if clause",id:"if-clause",level:3}],u={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"22-if-elif-else"},"2.2 if, elif, else"),(0,i.kt)("h2",{id:"if-statements"},"if statements"),(0,i.kt)("h3",{id:"if-clause"},"if clause"),(0,i.kt)("p",null,"We can use booleans in conditional statements. A conditional statement allows us to evaluate code only if a certain condition is true. A basic if statement is one that is comprised of only an if clause. Every if statement must at least be comprised of an if clause (no more than one); we will introduce other types of clauses (elif and else) later. The structure of an if clause is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if <condition>:\n    <body>\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," is only evaluated if ",(0,i.kt)("inlineCode",{parentName:"p"},"<condition>")," is True, otherwise the program continues running and evaluating the code following the if statement."),(0,i.kt)("p",null,"Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'if num_students > classroom_size:\n    print("the classroom is too small")\n')),(0,i.kt)("p",null,'In this example, "the classroom is too small" will only be printed if ',(0,i.kt)("inlineCode",{parentName:"p"},"num_students")," is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"classroom_size"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"num_students")," were equal to or smaller than ",(0,i.kt)("inlineCode",{parentName:"p"},"classroom_size"),", this if statement would have no effect."))}p.isMDXComponent=!0}}]);