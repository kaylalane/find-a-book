import{d as c,j as e,L as m,n as l}from"./index-HXcDPisX.js";import{V as a}from"./VerticalBookCover-R4L59f_w.js";function h(){const o=c({queryKey:["reviews"],queryFn:l});if(o.isLoading)return e.jsx("div",{children:"Loading..."});const n=o.data,r=n.filter(s=>s.genres.includes("Fantasy")),i=n.filter(s=>s.genres.includes("Romance"));return console.log(n),e.jsxs(m,{className:"recommendations-page",children:[e.jsx("h1",{className:"page__title",children:"Recommendations"}),e.jsxs("section",{className:"flex-column",children:[e.jsx("h2",{className:"recommendations__title",children:"Fantasy"}),e.jsx("div",{className:"book-row-container",children:e.jsx("div",{className:"book-row",children:r.map(s=>e.jsx(a,{book:s},s._id))})}),e.jsx("a",{href:"/recommendations/genre/fantasy",className:"link--primary recommendations__more-link",children:"More for this genre »"})]}),e.jsxs("section",{className:"flex-column",children:[e.jsx("h2",{children:"Romance"}),e.jsx("div",{className:"book-row-container",children:e.jsx("div",{className:"book-row",children:i.map(s=>e.jsx(a,{book:s},s._id))})}),e.jsx("a",{href:"/recommendations/genre/romance",className:"link--primary recommendations__more-link",children:"More for this genre »"})]})]})}export{h as default};
