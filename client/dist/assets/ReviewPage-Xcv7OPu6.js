import{h as v,r as l,j as e,s as c,t as x,q as j,c as p,d as w,i as N,k as f}from"./index-QoI0tpRR.js";const g={review:"Write your review. (Optional)",overallRating:null};function y({book:r}){const{user:a}=v(),[n,d]=l.useState(g),[o,m]=l.useState(-1),h=async t=>{t.preventDefault();try{const s=await j((a==null?void 0:a.id)||""),u=await(await fetch(`/api/review/${r._id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({review:n.review,overall_rating:o,bookId:r._id,authorId:r.authorId,authorName:r.authorName,userId:s})})).json();console.log(u)}catch(s){console.log(s)}};return e.jsxs("div",{children:[e.jsx("div",{className:" my-1",children:[...new Array(5)].map((t,s)=>e.jsx(c,{className:x("btn star ",s<=o&&"star--selected"),intent:"text",onClick:()=>m(s),children:e.jsxs("span",{className:"sr-only",children:[s+1," out of 5 stars"]})},s))}),e.jsx("div",{className:"separator separator--margin"}),e.jsxs("form",{action:"",className:"review-form flex-column",children:[e.jsxs("label",{className:"review-form__label flex-column",children:[e.jsx("p",{className:" my-2",children:"What did you think?"}),e.jsx("textarea",{name:"",id:"",className:"review-input",value:n.review,onChange:t=>d({...n,review:t.target.value})})]}),e.jsx(c,{intent:"secondary",onClick:t=>h(t),children:"Post"})]})," "]})}function S(){const r=p(),i=w({queryKey:["book",r.id||""],queryFn:N});if(i.isLoading)return e.jsx(f,{});const a=i.data;return e.jsxs("div",{className:"review-page",children:[e.jsxs("h1",{className:"page-title",children:[e.jsx("a",{href:`/books/${a._id}`,className:" underline",children:a.title})," ","> Review"]}),e.jsxs("div",{className:"review-page-information",children:[e.jsx("img",{src:a.cover,alt:a.title,className:"book-cover--small"}),e.jsxs("div",{children:[e.jsx("a",{href:`/books/${a._id}`,className:" text-xl",children:a.title}),e.jsxs("p",{children:["by"," ",e.jsx("a",{href:`/author/${a.authorId}`,className:"author-name",children:a.authorName})]})]})]}),e.jsx("div",{className:"separator separator--margin"}),e.jsx(y,{book:a})]})}export{S as default};
