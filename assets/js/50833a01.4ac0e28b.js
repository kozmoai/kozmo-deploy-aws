"use strict";(self.webpackChunk_kozmoai_kozmo_on_aws_website=self.webpackChunk_kozmoai_kozmo_on_aws_website||[]).push([[7374],{70144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),s=t(28453);const o={sidebar_position:3},l="Plugins",c={id:"techdocs/plugins",title:"Plugins",description:"KOZMO on AWS published four plugins, which together compose the platform and provide the integration with AWS services.",source:"@site/docs/techdocs/plugins.md",sourceDirName:"techdocs",slug:"/techdocs/plugins",permalink:"/docs/techdocs/plugins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/docs/techdocs/entities"},next:{title:"Processes",permalink:"/docs/techdocs/process"}},a={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Plugin dependencies",id:"plugin-dependencies",level:2},{value:"Plugin source code",id:"plugin-source-code",level:2}];function r(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,i.jsx)(n.p,{children:"KOZMO on AWS published four plugins, which together compose the platform and provide the integration with AWS services."}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"backstage-plugins.png",src:t(40587).A+"",width:"1706",height:"778"})})}),"\n",(0,i.jsx)(n.p,{children:"Backstage Plugins description"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Plugin"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Backend - @kozmoai/plugin-aws-apps-backend-for-backstage"}),(0,i.jsx)(n.td,{children:"Backstage backend plugin"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"responsible for all outgoing API calls to AWS, SCM (Gitlab) and the platform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Frontend - @kozmoai/plugin-aws-apps-for-backstage"}),(0,i.jsx)(n.td,{children:"Backstage frontend plugin"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"responsible for all UI interaction components - pages, components, state and frontend API"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Common - @kozmoai/plugin-aws-apps-common-for-backstage"}),(0,i.jsx)(n.td,{children:"Backstage isomorphic plugin"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"shareable plugin for both frontend, backend and scaffolder, used to define interfaces and types"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Scaffolder - @kozmoai/plugin-scaffolder-backend-aws-apps-for-backstage"}),(0,i.jsx)(n.td,{children:"Backstage scaffolder plugin"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"contains the actions required to execute the templates"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information on backstage plugins visit ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/plugins/backend-plugin/#creating-a-backend-plugin",children:"Backstage plugin documentation"})]})}),"\n",(0,i.jsx)(n.h2,{id:"plugin-dependencies",children:"Plugin dependencies"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n    Backend--\x3eCommon;\n    Frontend--\x3eCommon;\n    Frontend--\x3eBackend;\n    Scaffolder--\x3eBackend;\n    Scaffolder--\x3eCommon;"}),"\n",(0,i.jsx)(n.h2,{id:"plugin-source-code",children:"Plugin source code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kozmoai/kozmo-deploy-aws/blob/main/backstage-plugins/plugins/aws-apps-backend/README.md",children:"Backend plugin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kozmoai/kozmo-deploy-aws/blob/main/backstage-plugins/plugins/aws-apps/README.md",children:"Frontend plugin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kozmoai/kozmo-deploy-aws/blob/main/backstage-plugins/plugins/aws-apps-common/README.md",children:"Common plugin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kozmoai/kozmo-deploy-aws/blob/main/backstage-plugins/plugins/scaffolder-backend-module-aws-apps/README.md",children:"Scaffolder plugin"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},40587:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/backstage-plugins-459e15e20bd405c178a26d8c41aad783.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);