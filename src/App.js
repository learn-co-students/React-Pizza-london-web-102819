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
    const { pizzas,selectedPizzaEdit } = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzas={pizzas} onSubmitPizzaForm={this.onSubmitPizzaForm} selectedPizzaEdit={selectedPizzaEdit}/>
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
    this.setState({
      pizzas:[...this.state.pizzas, pizza]
    })
  }
  onEditingPizza = (pizzaID) => {
    this.setState({
      selectedPizzaEdit:[pizzaID]
    })
  }
}


export default App;
