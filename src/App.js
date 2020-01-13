import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const API = "http://localhost:3000/pizzas";

class App extends Component {
  state = {
    pizzas: [],
    selectedPizzaId: 0
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas }));
  }

  handleSelectedPizza = pizzaId => {
    this.setState({
      selectedPizzaId: pizzaId
    });
  };

  getSelectedPizza = () => {
    const pizzas = [...this.state.pizzas];
    const selectedPizza = pizzas.find(
      pizza => pizza.id === this.state.selectedPizzaId
    );
    console.log(selectedPizza);
    return selectedPizza || {}; // default to empty object
  };

  handleSubmitPizza = event => {
    console.log(event);
  };

  render() {
    const { pizzas } = this.state;

    return (
      <Fragment>
        <Header />
        <PizzaForm
          selectedPizza={this.getSelectedPizza()}
          handleSubmitPizza={this.handleSubmitPizza}
        />
        <PizzaList
          pizzasToRender={pizzas}
          onSelectPizza={this.handleSelectedPizza}
        />
      </Fragment>
    );
  }
}

export default App;
