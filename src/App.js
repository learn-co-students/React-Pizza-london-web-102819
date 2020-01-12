import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const API = "http://localhost:3000/pizzas";
class App extends Component {
  state = {
    pizzas: []
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ pizzas: data }));
  }
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm />
        <PizzaList pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
