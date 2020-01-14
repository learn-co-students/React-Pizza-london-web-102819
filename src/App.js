import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzaForm: {
      pizzaID: null,
      topping: "",
      size: "Small",
      vegetarian: true
    },
    pizzas: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({pizzas: pizzas}))
  }

  updatePizzaForm = pizzaID => {
    let pizza = this.state.pizzas.find(p => parseInt(p.id, 10) === parseInt(pizzaID, 10))
    this.setState({pizzaForm: {
      pizzaID: pizza.id, topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian
    }})
  }

  editPizzaForm = (comp, newVal) => {
    this.setState({pizzaForm: {
      ...this.state.pizzaForm,
      [comp]: newVal
    }})
  }

  patchPizza = pizzaID => {
    let formData = { id: pizzaID, topping: this.state.pizzaForm.topping, size: this.state.pizzaForm.size, vegetarian: this.state.pizzaForm.vegetarian}
    let configObj = {method: "PATCH", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(formData)};
    fetch(`http://localhost:3000/pizzas/${pizzaID}`, configObj);

    let updatedPizzas = this.state.pizzas.map(p => {return p.id === pizzaID ? formData : p})
    this.setState({
      pizzas: updatedPizzas
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaForm={this.state.pizzaForm} editPizzaForm={(comp, newVal) => this.editPizzaForm(comp, newVal)} patchPizza={pizzaID => this.patchPizza(pizzaID)}/>
        <PizzaList pizzas={this.state.pizzas} updatePizzaForm={pizzaID => this.updatePizzaForm(pizzaID)}/>
      </Fragment>
    );
  }
}

export default App;
