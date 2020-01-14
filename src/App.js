import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    chosenPizza: {
      topping: undefined, 
      size: undefined, 
      vegetarian: undefined
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas}))
  }

  choosePizzaToEdit = chosenPizza => {
    this.setState({
      chosenPizza: {
        id: chosenPizza.id,
        topping: chosenPizza.topping,
        size: chosenPizza.size, 
        vegetarian: chosenPizza.vegetarian
      }
    })
  }

  modifyPizza = e => {
    e.target.name === "vegetarian"?
    this.setState({
     chosenPizza: {
       ...this.state.chosenPizza,
      [e.target.name]: JSON.parse(e.target.value)
     }
    })
    :
    this.setState({
      chosenPizza: {
        ...this.state.chosenPizza,
       [e.target.name]: e.target.value
      }
     })
  }

  editPizzaPatch = () => { 
    fetch(`http://localhost:3000/pizzas/${this.state.chosenPizza.id}`, {
      method: "PATCH", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(
        this.state.chosenPizza
      )
    }).then(resp => resp.json()).then(newPizza => this.setPizza(newPizza))
  }

  setPizza = newPizza => {
    const modifiedPizzas = this.state.pizzas.map(pizza =>(
      pizza.id === newPizza.id? newPizza : pizza
    ))

    this.setState({
      pizzas: modifiedPizzas
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm patchPizza={this.editPizzaPatch} chosenPizza={this.state.chosenPizza} modifyPizza={this.modifyPizza} /> 
        <PizzaList editPizza={this.choosePizzaToEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
