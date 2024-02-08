"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4],{8373:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(5893),r=i(1151);const s={sidebar_position:3},o="Configuration",l={id:"configuration",title:"Configuration",description:"Gilt uses Viper to load configuation through multpile methods.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/gilt/next/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/gilt/next/installation"},next:{title:"Usage",permalink:"/gilt/next/usage"}},a={},c=[{value:"Config File",id:"config-file",level:2},{value:"Env Vars",id:"env-vars",level:2},{value:"Command Flags",id:"command-flags",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Gilt uses ",(0,t.jsx)(n.a,{href:"https://github.com/spf13/viper",children:"Viper"})," to load configuation through multpile methods."]}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,t.jsxs)(n.p,{children:["Create the giltfile (",(0,t.jsx)(n.code,{children:"Giltfile.yaml"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Clone the specified ",(0,t.jsx)(n.code,{children:"url"}),"@",(0,t.jsx)(n.code,{children:"version"})," to the configurable path ",(0,t.jsx)(n.code,{children:"--gilt-dir"}),".\nExtract the repo the ",(0,t.jsx)(n.code,{children:"dstDir"})," when ",(0,t.jsx)(n.code,{children:"dstDir"})," is provided. Otherwise, copy files\nand/or directories to the desired destinations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\ngiltDir: ~/.gilt/clone\ndebug: false\nrepositories:\n  - git: https://github.com/retr0h/ansible-etcd.git\n    version: 77a95b7\n    dstDir: roles/retr0h.ansible-etcd\n  - git: https://github.com/retr0h/ansible-etcd.git\n    version: 1.1\n    dstDir: roles/retr0h.ansible-etcd-tag\n  - git: https://github.com/lorin/openstack-ansible-modules.git\n    version: 2677cc3\n    sources:\n      - src: '*_manage'\n        dstDir: library\n      - src: nova_quota\n        dstDir: library\n      - src: neutron_router\n        dstFile: library/neutron_router.py\n      - src: tests\n        dstDir: tests\n    commands:\n      - cmd: ansible-playbook\n        args:\n          - -i,\n          - playbook.yml\n      - cmd: bash\n        args:\n          - -c\n          - who | grep tty\n"})}),"\n",(0,t.jsx)(n.h2,{id:"env-vars",children:"Env Vars"}),"\n",(0,t.jsx)(n.p,{children:"The config file can be overriden/defined through env vars."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"GILT_GILTFILE=Giltfile.yaml \\\nGILT_GILTDIR=~/.gilt/clone \\\nGILT_DEBUG=false \\\ngilt overlay\n"})}),"\n",(0,t.jsx)(n.h2,{id:"command-flags",children:"Command Flags"}),"\n",(0,t.jsx)(n.p,{children:"The config file and/or env vars can be overriden/defined through cli flags."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gilt \\\n  --gilt-file=Giltfile.yaml \\\n  --gilt-dir=~/.gilt/clone \\\n  --debug \\\n  overlay\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);