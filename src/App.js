import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './db/API'


class App extends Component {
  state = {
    pizzas: [],
    selectedPizzaEdit:[]
  }
  render() {
    const { pizzas } = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizzas={pizzas} 
          onSubmitPizzaForm={this.onSubmitPizzaForm} 
          selectedPizza={this.selectedPizza()}
        />
        <PizzaList pizzas={pizzas} onEditingPizza={this.onEditingPizza} />
      </Fragment>
    );
  }
// // logics: 
  // fetch data & populate state_pizzas
  pizzas = () => API.GET_ALL_PIZZA().then(pizzas=>this.setState({pizzas: pizzas}))
  componentDidMount() {
    this.pizzas();
  }

  // pizza form _ newOrder/update pizza
  onSubmitPizzaForm = (pizza) =>{
    pizza.vegetarian = pizza.vegetarian === 'Vegetarian'
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pizza)
    }
    API.POST_NEW_PIZZA(configObj).then(pizzaData => 
      this.setState({
        pizzas:[...this.state.pizzas, pizzaData]
      })
    );
  }
  onEditingPizza = (pizzaID) => {
    this.setState({
      selectedPizzaEdit:[pizzaID]
    })
  }
  //selectedPizza 
  selectedPizza = () =>{
    if (this.state.selectedPizzaEdit.length !== 0){
      let pizza = this.state.pizzas.filter(pizza => pizza.id === this.state.selectedPizzaEdit[0])[0];
      // console.log(pizza)
      return pizza;
    }
  } 
}


export default App
