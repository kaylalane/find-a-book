import{r as l,j as t,b as i}from"./index-QoI0tpRR.js";const c={username:"",password:""};function u(){const[s,o]=l.useState(c),n=async e=>{e.preventDefault();try{await fetch("http://localhost:3000/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(async a=>{const r=await a.json();localStorage.setItem("accessToken",r.accessToken),localStorage.setItem("refreshToken",r.refreshToken),i("/")})}catch(a){console.log(a)}};return t.jsx("div",{children:t.jsxs("form",{onSubmit:e=>n(e),children:[t.jsxs("label",{htmlFor:"",children:["Username",t.jsx("input",{type:"text",autoComplete:"username",onChange:e=>o({...s,username:e.target.value})})]}),t.jsxs("label",{htmlFor:"",children:["Password",t.jsx("input",{type:"password",autoComplete:"current-password",onChange:e=>o({...s,password:e.target.value})})]}),t.jsx("button",{type:"submit",children:"Submit"})]})})}export{u as default};