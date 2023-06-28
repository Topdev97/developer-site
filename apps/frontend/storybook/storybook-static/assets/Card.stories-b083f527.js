const E=({primary:s=!1,size:x="medium",backgroundColor:n,label:z,onClick:c})=>{const r=document.createElement("button");r.type="button",r.innerText=z,c&&r.addEventListener("click",c);const f=s?"storybook-button--primary":"storybook-button--secondary";return r.className=["storybook-button",`storybook-button--${x}`,f].join(" "),n&&(r.style.backgroundColor=n),r},C={title:"Example/Card",tags:["autodocs"],render:s=>E(s),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}},e={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var B,S,k;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const L=["Primary","Secondary","Large","Small"];export{t as Large,e as Primary,o as Secondary,a as Small,L as __namedExportsOrder,C as default};
//# sourceMappingURL=Card.stories-b083f527.js.map
