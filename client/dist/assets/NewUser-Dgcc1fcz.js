import{u as n,a as i,j as o}from"./index-4qHAoL08.js";function d(){const{user:e}=n(),a=i();if(!e)return o.jsx("div",{children:"Loading"});(async()=>{console.log("user",e);const s="/api/user";try{await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:(e==null?void 0:e.emailAddresses[0].emailAddress)||"",username:(e==null?void 0:e.username)||"",clerkId:(e==null?void 0:e.id)||""})})}catch(t){console.log(t)}a("/")})()}export{d as default};
