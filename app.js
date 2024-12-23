
const child = React.createElement("h1", {}, "Hello World");

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [child])
]);

ReactDOM.render(parent, document.getElementById("root"));