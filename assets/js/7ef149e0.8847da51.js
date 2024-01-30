"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3688],{7498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(5893),r=n(1151);const o={sidebar_position:4},s="Usage",a={id:"usage",title:"Usage",description:"CLI",source:"@site/versioned_docs/version-1.0.2/usage.md",sourceDirName:".",slug:"/usage",permalink:"/gilt/1.0.2/usage",draft:!1,unlisted:!1,tags:[],version:"1.0.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/gilt/1.0.2/configuration"},next:{title:"Testing",permalink:"/gilt/1.0.2/testing"}},l={},c=[{value:"CLI",id:"cli",level:2},{value:"Overlay Repository",id:"overlay-repository",level:3},{value:"Debug",id:"debug",level:3},{value:"Package",id:"package",level:2},{value:"Overlay Repository",id:"overlay-repository-1",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(t.h3,{id:"overlay-repository",children:"Overlay Repository"}),"\n",(0,i.jsx)(t.p,{children:"Overlay a remote repository into the destination provided."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"gilt overlay\n"})}),"\n",(0,i.jsx)(t.h3,{id:"debug",children:"Debug"}),"\n",(0,i.jsx)(t.p,{children:"Display the git commands being executed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"gilt --debug overlay\n"})}),"\n",(0,i.jsx)(t.h2,{id:"package",children:"Package"}),"\n",(0,i.jsx)(t.h3,{id:"overlay-repository-1",children:"Overlay Repository"}),"\n",(0,i.jsxs)(t.p,{children:["See example client in ",(0,i.jsx)(t.code,{children:"examples/go-client/"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n\tdebug := true\n\tlogger := getLogger(debug)\n\n\tc := config.Repositories{\n\t\tDebug:   debug,\n\t\tGiltDir: "~/.gilt",\n\t\tRepositories: []config.Repository{\n\t\t\t{\n\t\t\t\tGit:     "https://github.com/retr0h/ansible-etcd.git",\n\t\t\t\tSHA:     "77a95b7",\n\t\t\t\tDstDir:  "../tmp/retr0h.ansible-etcd",\n\t\t\t},\n\t\t},\n\t}\n\n\tvar r repositoriesManager = repositories.New(c, logger)\n\tr.Overlay()\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);