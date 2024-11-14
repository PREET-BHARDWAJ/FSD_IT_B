const parent=document.getElementById("root");
const node=React.createElement("h1",{style:{color:"red"}},"This is new heading");
const root=ReactDOM.createRoot(parent);
//root.render(node);
const node1=React.createElement("h1",{},"SHOPPING CART");
const it1=React.createElement("li",{},"item1");
const it2=React.createElement("li",{},"item2");
const list=React.createElement("ol",{},it1,it2);
const branch=<ul>
    <li>CSE</li>
    <li>IT</li>
</ul>
root.render([node,node1,list,branch]);