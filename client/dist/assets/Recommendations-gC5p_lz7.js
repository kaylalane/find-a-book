import{d as c,j as e,L as m,w as t}from"./index-QoI0tpRR.js";import{V as o}from"./VerticalBookCover-dWuK2-D4.js";function h(){const n=c({queryKey:["reviews"],queryFn:t});if(n.isLoading)return e.jsx("div",{children:"Loading..."});const a=n.data,r=a.filter(s=>s.genres.includes("Fantasy")),i=a.filter(s=>s.genres.includes("Romance"));return e.jsxs(m,{className:"recommendations-page",children:[e.jsx("h1",{className:"page__title",children:"Recommendations"}),e.jsxs("section",{className:"flex-column",children:[e.jsx("h2",{className:"recommendations__title",children:"Fantasy"}),e.jsx("div",{className:"book-row-container",children:e.jsx("div",{className:"book-row",children:r.map(s=>e.jsx(o,{book:s},s._id))})}),e.jsx("a",{href:"/recommendations/genre/fantasy",className:"link--primary recommendations__more-link",children:"More for this genre »"})]}),e.jsxs("section",{className:"flex-column",children:[e.jsx("h2",{children:"Romance"}),e.jsx("div",{className:"book-row-container",children:e.jsx("div",{className:"book-row",children:i.map(s=>e.jsx(o,{book:s},s._id))})}),e.jsx("a",{href:"/recommendations/genre/romance",className:"link--primary recommendations__more-link",children:"More for this genre »"})]})]})}export{h as default};
