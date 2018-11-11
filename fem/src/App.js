const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet,{
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    }),
    React.createElement(Pet,{
      name: "Ebony",
      animal: "dog",
      breed: "Pug"
    }),
    React.createElement(Pet,{
      name: "Cay",
      animal: "dog",
      breed: "Shitzu"
    })
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
