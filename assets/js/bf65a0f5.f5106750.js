"use strict";(self.webpackChunkai_tutor_cse_8_a=self.webpackChunkai_tutor_cse_8_a||[]).push([[252],{11866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(67294),s=n(82750),r=n(90629),o=n(26307),l=n(93946),i=n(90747);function c(e){let{id:t,className:n,value:s,onChange:r}=e;const o=(0,i.j)({height:"100%",maxHeight:"100%"});return a.createElement("div",{id:t,className:`container ${n}`,"data-color-mode":"light",style:{margin:"1vh 0px",maxWidth:"100%"},onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),o.insertText("    "))}},a.createElement(i.C,{editor:o,value:s,onChange:r,throttleInMs:200}))}function m(e){let{onAddMsg:t}=e;const[n,s]=(0,a.useState)("");return a.createElement(a.Fragment,null,a.createElement("div",{className:"wrapForm"},a.createElement(c,{id:"standard-text",className:"wrapText",value:n,onChange:e=>{s(e)}}),a.createElement(l.Z,{disableRipple:!0,disableFocusRipple:!0,sx:[{"&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"transparent"}},{boxShadow:"0"}],className:"button",onClick:()=>{t(n),s("")}},a.createElement(o.Z,{sx:{color:"var(--ifm-color-primary)"}}))))}var u=n(87462),p=n(69661),d=n(12714),h=n(7339),g=n(91733);function y(e){const t=e.message?e.message:"",n=e.timestamp?e.timestamp:"",s=e.photoURL,r=e.displayName?e.displayName:"no name",o=e.avatarDisp??!1;return a.createElement(a.Fragment,null,a.createElement("div",{className:"messageRow"},o?a.createElement(p.Z,{alt:r,src:s??""},s?a.createElement(a.Fragment,null):a.createElement(d.Z,null)):a.createElement(p.Z,{sx:{bgcolor:"transparent"}}),a.createElement("div",null,o?a.createElement("div",{className:"displayName"},r):a.createElement(a.Fragment,null),a.createElement("div",{className:"messageBlue"},a.createElement(v,{message:t}),a.createElement("div",{className:"messageTimeStampRight"},n)))))}function f(e){const t=e.message?e.message:"no message",n=e.timestamp?e.timestamp:"";return a.createElement("div",{className:"messageRowRight"},a.createElement("div",{className:"messageOrange"},a.createElement(v,{message:t}),a.createElement("div",{className:"messageTimeStampRight"},n)))}function v(e){let{message:t}=e;return a.createElement(h.D,{children:t,components:{code(e){let{node:t,inline:n,className:s,children:r,...o}=e;const l=/language-(\w+)/.exec(s||"");return!n&&l?a.createElement(g.Z,(0,u.Z)({},o,{children:String(r).replace(/\n$/,""),language:l[1],PreTag:"div"})):a.createElement("code",(0,u.Z)({},o,{className:s}),r)}}})}var E=n(1375),w=n(28965);const b=["tutor_response","follow_up_question","question_completed","question_level","answer_is_correct"],N=["question"];function _(e,t){const n=(0,w.Z)(e);let a={};try{a=JSON.parse(n)}catch(s){q&&console.warn("Error parsing JSON",s)}finally{for(const e of t)e in a||(a[e]="");return a}}var S=n(36809);const q=Number(S.default.customFields.LOCAL),C=S.default.customFields.LOCAL_SERVER,A=q?C:"https://lei.ucsd.edu:5445",T="/response",x="/question",I=[{type:"bot",message:"Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course."}],k=[a.createElement(y,{message:"Hello! I am your personalized AI tutor. Let me help you with any question you might have for this course.",timestamp:"",displayName:"AI Tutor",avatarDisp:!0})],D=["remember","understand","apply","analyze"],L=3,O="conditionals",Z={conditionals:{remember:["Can you explain the role of indentation in `if`, `else`, and `elif` clauses in Python?"],understand:["What is the output of the code below if 'a' equals to 5 and 'b' equals to 7? \n\n(A) a is less than b \n\n(B) a is equal to b \n\n(C) a is greater than b \n\n(D) It will throw an error\n\n```python\nif a < b:\n   print('a is less than b')\nelif a == b:\n   print('a is equal to b')\nelse:\n   print('a is greater than b')\n```\n"],apply:['Assume you have a variable "temp" which stores the current temperature. Your goal is to program a thermostat to behave differently based on the temperature.If "temp" is less than 20, the thermostat should activate heating and print "Heating ON". If "temp" is equal to or higher than 20 and less than 25, the thermostat should remain on standby and print "Thermostat on standby". If "temp" is equal to or higher than 25, the thermostat should activate cooling and print "Cooling ON". Write the if-else statement for this scenario.'],analyze:["Consider the following Python code. What will be outputted and why?\n\nCode:\n```python\ngender = 'female'\nage = 15\nif gender == 'male':\n   print(\"Hello sir, you're welcome.\")\nelif age < 18:\n   print(\"You're not yet an adult.\")\nelse:\n   print(\"Hello ma'am, you're welcome.\")\n```\nCan you analyze the logic of this if-elif-else construct? How does it determine which statement to print? Also, supposing the variables 'gender' and 'age' were set to different values, how would the output change?"]}}[O],P=["Here's a practice question to help you with ","Let's practice ","Let's work on "];function $(){const[e,t]=(0,a.useState)(void 0),[n,s]=(0,a.useState)(void 0),[o,l]=(0,a.useState)(I),[i,c]=(0,a.useState)(k),[u,p]=(0,a.useState)([]),[d,h]=(0,a.useState)(Z),[g,v]=(0,a.useState)(0);(0,a.useEffect)((()=>{n&&n.length>0&&async function(e,t){const n={bloom_level:e,previous_questions:t,include_prefix:!0};return await async function(e){const t=`${A}${x}`;try{let n,a="";const s=new Promise(((s,r)=>{(async()=>{await(0,E.L)(t,{method:"POST",headers:{Accept:"text/event-stream","Content-Type":"application/json"},body:JSON.stringify(e),async onopen(e){e.status>=400&&e.status<500&&429!==e.status&&(console.error("Client-side error ",e),r(e))},onmessage(e){"<END>"!==e.data?(a+=e.data.replace(/<SLASH>/g,"\\"),n=_(a,N)):s(n.question)},onerror(e){console.error(e),r(e)}})})()}));return await s}catch(n){return console.error(n),void alert("Error getting response from server")}}(n)}(e,d[e]).then((t=>{const n={...d};n[e].push(t),h(n)})).catch((e=>{console.error(e)}))}),[n]),(0,a.useEffect)((()=>{const t=function(e,t){if(!t||!e||!(e in t)||0===t[e].length)return;const n=t[e];return n[n.length-1]}(e,d);if(t&&g<L){console.log("question: ",t);const n=function(e,t,n){const a=P[Math.floor(Math.random()*P.length)],s="analyze"===e?"analyzing":`${e}ing`,r=`${a}${s} ${t}${n?"":" again"}.\n\n`;return r}(e,O,0===g);H(n+t,"AI Tutor",o,i,c,l);s(t)}}),[e,g]);return a.createElement("div",{className:"chatContainer",key:"chat-container"},a.createElement(r.Z,{className:"paper",elevation:0},a.createElement(r.Z,{id:"style-1",className:"messagesBody",key:"messages-body"},a.createElement("div",{className:"messages",key:"messages"},u.length>0?a.createElement(y,{message:F(u),timestamp:"",displayName:"AI Tutor",avatarDisp:!0,key:"ai-msg"}):a.createElement(a.Fragment,null),i)),d?a.createElement(m,{onAddMsg:async s=>{if(0===s.trim().length)return void alert("Please enter a non-empty message.");const r={user:"kayla",password:"lei",timestamp:Date.now(),message:s,correctSoFar:g,threshold:L};e&&(r.current_step=e);const m=[...o,{type:"user",message:s}];r.history=function(e){let t="\n";for(let n=0;n<e.length;n++){const a=e[n];"bot"===a.type?t+="tutor: "+a.message+"\n":t+="student: "+a.message+"\n"}return t}(m);const u=[a.createElement(f,{message:s,timestamp:"",displayName:"User",avatarDisp:!1}),...i];c(u),async function(e,t,n){let a=`${A}${T}`;try{const{user:s,history:r}=e,o={name:s,chat_history:r??"",last_question:t,include_prefix:!0};console.log(o);let l,i="";const c=new Promise(((e,t)=>{(async()=>{await(0,E.L)(a,{method:"POST",headers:{Accept:"text/event-stream","Content-Type":"application/json"},body:JSON.stringify(o),async onopen(e){e.status>=400&&e.status<500&&429!==e.status&&(console.error("Client-side error ",e),t(e))},onmessage(t){"<END>"!==t.data?(i+=t.data.replace(/<SLASH>/g,"\\"),l=_(i,b),n((e=>[...e,l]))):e(l)},onerror(e){console.error(e),t(e)}})})()}));return await c}catch(s){return console.error(s),void alert("Error getting response from server")}}(r,n??"",p).then((n=>{if("tutor_response"in n&&""!==n.tutor_response){const a=function(e,t,n,a){return""!==t&&"false"===n&&a?e+"\n\n"+t:e}(n.tutor_response,n.follow_up_question,n.question_completed,e),[s,r]=H(a,"AI Tutor",m,u,c,l);p([]);let o=g;if(e&&"true"===n.question_completed&&(o+=1,v(o)),o===L){if(D.indexOf(e)+1===D.length){H("Congratulations! You have successfully completed reviewing the concept! Would you like to review another concept?","AI Tutor",r,s,c,l);t(void 0)}else{const n=D.indexOf(e),a=D[n+1];t(a),v(0)}}e||""===n.question_level||t(n.question_level)}else alert("No tutor response received. Please try again.")})).catch((e=>{console.error(e)}))}}):a.createElement("h3",null,"Initializing the chat. Please wait...")))}function F(e){return e[e.length-1].tutor_response}function H(e,t,n,s,r,o){const l="AI Tutor"===t?a.createElement(y,{message:e,timestamp:"",displayName:"AI Tutor",avatarDisp:!0}):a.createElement(f,{message:e,timestamp:"",displayName:"User",avatarDisp:!1});n.push({type:"AI Tutor"===t?"bot":"user",message:e});const i=[l,...s];return r(i),o(n),[i,n]}function R(){return a.createElement(s.Z,{title:"Tutor",description:"Tutor Page"},a.createElement($,null))}}}]);