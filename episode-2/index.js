import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", {}, [
    React.createElement("div", {id:"parent"},[
        React.createElement("h1",{},"I'm H1 tag"),
        React.createElement("h2",{},"I'm H2 tag."),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an H1 tag."),
        React.createElement("h2",{},"I'm an H2 tag.")
    ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);