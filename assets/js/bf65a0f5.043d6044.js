"use strict";(self.webpackChunkai_tutor_cse_8_a=self.webpackChunkai_tutor_cse_8_a||[]).push([[252],{63824:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var s=a(67294),n=a(82750),r=a(90629),l=a(26307),m=a(93946),o=a(27470);function c(e){let{id:t,className:a,value:n,onChange:r}=e;return s.createElement("div",{id:t,className:`container ${a}`,"data-color-mode":"light",style:{margin:"1vh 0px",maxWidth:"100%"}},s.createElement(o.ZP,{value:n,onChange:r}))}function i(e){let{onAddMsg:t}=e;const[a,n]=(0,s.useState)("");return s.createElement(s.Fragment,null,s.createElement("div",{className:"wrapForm"},s.createElement(c,{id:"standard-text",className:"wrapText",value:a,onChange:n}),s.createElement(m.Z,{sx:[{"&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"transparent"}}],className:"button",onClick:()=>{t(a),n("")}},s.createElement(l.Z,{sx:{color:"var(--ifm-color-primary)"}}))))}var u=a(87462),g=a(69661),d=a(12714),p=a(67268),E=a(91733);function h(e){const t=e.message?e.message:"no message",a=e.timestamp?e.timestamp:"",n=e.photoURL,r=e.displayName?e.displayName:"no name",l=e.avatarDisp??!1;return s.createElement(s.Fragment,null,s.createElement("div",{className:"messageRow"},l?s.createElement(g.Z,{alt:r,src:n??""},n?s.createElement(s.Fragment,null):s.createElement(d.Z,null)):s.createElement(g.Z,{sx:{bgcolor:"transparent"}}),s.createElement("div",null,l?s.createElement("div",{className:"displayName"},r):s.createElement(s.Fragment,null),s.createElement("div",{className:"messageBlue"},s.createElement(y,{message:t}),s.createElement("div",{className:"messageTimeStampRight"},a)))))}function v(e){const t=e.message?e.message:"no message",a=e.timestamp?e.timestamp:"";return s.createElement("div",{className:"messageRowRight"},s.createElement("div",{className:"messageOrange"},s.createElement(y,{message:t}),s.createElement("div",{className:"messageTimeStampRight"},a)))}function y(e){let{message:t}=e;return s.createElement(p.D,{children:t,components:{code(e){let{node:t,inline:a,className:n,children:r,...l}=e;const m=/language-(\w+)/.exec(n||"");return!a&&m?s.createElement(E.Z,(0,u.Z)({},l,{children:String(r).replace(/\n$/,""),language:m[1],PreTag:"div"})):s.createElement("code",(0,u.Z)({},l,{className:n}),r)}}})}function N(){return s.createElement("div",{className:"lds-ellipsis"},s.createElement("div",null),s.createElement("div",null),s.createElement("div",null),s.createElement("div",null))}var f=a(6154);const w="https://gilpasternak35.pythonanywhere.com",A="/";const S=[{type:"bot",message:"Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course."}],Z=[s.createElement(h,{message:"Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course.",timestamp:"",displayName:"AI Tutor",avatarDisp:!0})],_=3;function C(){const[e,t]=(0,s.useState)(void 0),[a,n]=(0,s.useState)(void 0),[l,m]=(0,s.useState)(S),[o,c]=(0,s.useState)(Z),[u,g]=(0,s.useState)(!1),[d,p]=(0,s.useState)(0),E=s.createElement(N,null);return s.createElement("div",{className:"chatContainer"},s.createElement(r.Z,{className:"paper",elevation:0},s.createElement(r.Z,{id:"style-1",className:"messagesBody"},s.createElement("div",{className:"messages"},u?E:s.createElement(s.Fragment,null),o)),s.createElement(i,{onAddMsg:async r=>{const i={user:"kayla",password:"lei",timestamp:Date.now(),message:r,correctSoFar:d,threshold:_};e&&(i.current_step=e),l.length>1&&(i.history=function(e){let t="\n";for(let a=0;a<e.length;a++){const s=e[a];"bot"===s.type?t+="AI: "+s.message+"\n":t+="User: "+s.message+"\n"}return t}(l)),a&&(i.questions=JSON.stringify(a));const u=[...l,{type:"user",message:r}],E=[s.createElement(v,{message:r,timestamp:"",displayName:"User",avatarDisp:!1}),...o];c(E),g(!0),console.log(i);const y=await async function(e){let t=`${w}${A}`;try{const a=await f.Z.post(t,{data:e,headers:{"Access-Control-Allow-Methods":"GET,POST","Access-Control-Allow-Headers":"Access-Control-Allow-Methods, Access-Control-Allow-Origin"}}),s=JSON.parse(a.data);return console.log(s),s}catch(a){return console.error(a),void alert("Error getting response from server")}}(i);y?(u.push({type:"bot",message:y.message}),c([s.createElement(h,{message:y.message,timestamp:"",displayName:"AI Tutor",avatarDisp:!0}),...E]),m(u),g(!1),y.current_step?(y.current_step!==e&&p(0),t(y.current_step)):(alert("Error: current_step not found in response."),console.error(y)),!0===y.correct&&p(d+1),y.questions&&n(y.questions)):(u.push({type:"bot",message:"AI is offline at the moment. Please try again later."}),m(u),c([s.createElement(h,{message:"AI is offline at the moment. Please try again later.",timestamp:"",displayName:"AI Tutor",avatarDisp:!0}),...E]),g(!1))}})))}function T(){return s.createElement(n.Z,{title:"Tutor",description:"Tutor Page"},s.createElement(C,null))}}}]);