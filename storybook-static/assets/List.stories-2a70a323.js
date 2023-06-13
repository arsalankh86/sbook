import{j as a,F as _,a as c}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const t=i=>{const{listItem:e,onArchiveTask:A,onPinTask:b}=i;return a(_,{children:c("div",{className:`list-item ${e==null?void 0:e.state}`,children:[c("label",{htmlFor:"checked","aria-label":`archiveTask-${e==null?void 0:e.id}`,className:"checkbox",children:[a("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e==null?void 0:e.id}`,checked:(e==null?void 0:e.state)==="TASK_ARCHIVED"}),a("span",{className:"checkbox-custom",onClick:()=>A(e==null?void 0:e.id)})]}),a("label",{htmlFor:"title","aria-label":e==null?void 0:e.title,className:"title",children:a("input",{type:"text",value:e==null?void 0:e.title,readOnly:!0,name:"title",placeholder:"Input title"})}),(e==null?void 0:e.state)!=="TASK_ARCHIVED"&&a("button",{className:"pin-button",id:`pinTask-${e==null?void 0:e.id}`,"aria-label":`pinTask-${e==null?void 0:e.id}`,children:a("span",{className:"icon-star"})},`pinTask-${e==null?void 0:e.id}`)]})})};try{t.displayName="List",t.__docgenInfo={description:"",displayName:"List",props:{listItem:{defaultValue:null,description:"",name:"listItem",required:!0,type:{name:"ListItemProps"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"() => any"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"() => any"}}}}}catch{}const x={component:t,title:"List",tags:["autodocs"]},n={args:{listItem:{id:1,title:"List1",state:"Task Inbox"}}},r={args:{listItem:{id:1,title:"Pinned",state:"Task Pinned"}}},s={args:{listItem:{id:1,title:"Archived",state:"TASK_ARCHIVED"}}};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    listItem: {
      id: 1,
      title: "List1",
      state: "Task Inbox"
    }
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    listItem: {
      id: 1,
      title: "Pinned",
      state: "Task Pinned"
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,k,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    listItem: {
      id: 1,
      title: "Archived",
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const P=["Default","Pinned","Archived"];export{s as Archived,n as Default,r as Pinned,P as __namedExportsOrder,x as default};
//# sourceMappingURL=List.stories-2a70a323.js.map
