import{r as e,j as s,L as c,B as r}from"./index-4qHAoL08.js";function p(){const[t,a]=e.useState([]);return e.useEffect(()=>{(async()=>{fetch("/api/books",{method:"GET",headers:{"Content-Type":"application/json"}}).then(async n=>{const i=await n.json();a(i)})})()},[t]),s.jsxs(c,{children:[s.jsx("h1",{children:"Recommendations"}),s.jsx("div",{className:"recommendations__list",children:t.map(o=>s.jsx(r,{book:o},o._id))})]})}export{p as default};