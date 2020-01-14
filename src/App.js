import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './db/API'
class App extends Component {
  state = {
    pizzas: []
  }
  render() {
    const { pizzas } = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzas={pizzas}/>
        <PizzaList pizzas={pizzas}/>
      </Fragment>
    );
  }
// // logics: 
  // fetch data & populate state_pizzas
  pizzas = () => API.GET_ALL_PIZZA().then(pizzas=>this.setState({pizzas: pizzas}))
  componentDidMount() {
    this.pizzas();
  }

  // pizza form functions
}


export default App;
