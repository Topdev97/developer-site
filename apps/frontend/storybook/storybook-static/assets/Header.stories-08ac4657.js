import{c as r}from"./Button-c0222589.js";const f=({user:a,onLogout:g,onLogin:u,onCreateAccount:h})=>{const s=document.createElement("header"),o=document.createElement("div");o.className="storybook-header";const v=`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`;o.insertAdjacentHTML("afterbegin",v);const e=document.createElement("div");if(a){const L=`<span class="welcome">Welcome, <b>${a.name}</b>!</span>`;e.innerHTML=L,e.appendChild(r({size:"small",label:"Log out",onClick:g}))}else e.appendChild(r({size:"small",label:"Log in",onClick:u})),e.appendChild(r({size:"small",label:"Sign up",onClick:h,primary:!0}));return o.appendChild(e),s.appendChild(o),s},w={title:"Example/Header",tags:["autodocs"],render:a=>f(a),parameters:{layout:"fullscreen"},argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}},n={args:{user:{name:"Jane Doe"}}},t={};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["LoggedIn","LoggedOut"];export{n as LoggedIn,t as LoggedOut,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Header.stories-08ac4657.js.map
