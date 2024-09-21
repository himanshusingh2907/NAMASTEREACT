const heading1=React.createElement("h1",{id:"head1"},"first heading");
const heading2=React.createElement("h1",{id :"head2"},"second heading");
const div1=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);