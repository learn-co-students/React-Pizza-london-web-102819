import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const PIZZAPI = "http://localhost:3000/pizzas/";

class App extends Component {
  state = {
    pizzas: [],
    formTopping: "",
    formSize: "",
    formVeg: true,
    formPizzaId: ""
  };

  componentDidMount = () => {
    fetch(PIZZAPI)
      .then(resp => resp.json())
      .then(pizzas =>
        this.setState({
          pizzas: pizzas
        })
      );
  };

  editPizza = pizza => {
    this.setState({
      formTopping: pizza.topping,
      formSize: pizza.size,
      formVeg: pizza.vegetarian,
      formPizzaId: pizza.id
    });
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleVegChange = event => {
    this.setState({
      formVeg: !this.state.formVeg
    });
  };

  handleSubmit = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.formPizzaId,
        topping: this.state.formTopping,
        size: this.state.formSize,
        vegetarian: this.state.formVeg
      })
    };

    fetch(PIZZAPI + this.state.formPizzaId, configObj)
      .then(resp => resp.json())
      .then(pizza => this.updatePizza(pizza));
  };

  updatePizza = pizza => {
    // const updatedPizza = this.state.pizzas.find(p => p.id === pizza.id);
    const remainingPizzas = this.state.pizzas.filter(p => p.id !== pizza.id);
    this.setState({
      pizzas: [...remainingPizzas, pizza]
    });
  };

  render() {
    const { pizzas, formTopping, formSize, formVeg, formId } = this.state;

    return (
      <Fragment>
        <Header />
        <PizzaForm
          formTopping={formTopping}
          formSize={formSize}
          formVeg={formVeg}
          formId={formId}
          handleFormChange={this.handleFormChange}
          handleVegChange={this.handleVegChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
