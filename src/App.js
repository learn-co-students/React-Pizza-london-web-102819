import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allPizzas: [],
    pizzaSelectedId: 0
  }


  componentDidMount() {
   fetch('http://localhost:3000/pizzas')
   .then (resp => resp.json())
   .then (allPizzas => this.setState({ allPizzas }))
  }

  handleChange = pizzaID => {
    this.setState({pizzaSelected: pizzaID })
  }

  // onType = (event) => {
  //   const pizzaTopping = event.target.value
  //   this.setState(prevState => { 
  //     return {pizza: { ...prevState.pizza, topping: pizzaTopping}}
  //   } )
  // }

  onDropDown = () => {

  }

  onRadioBtn = () => {
    
  }

  onSubmit = () => {

  }


  render() {
    const { allPizzas, pizzaSelectedId} = this.state
    const { handleChange } = this.props
    return (
      <Fragment>
        <Header/>

        <PizzaForm 
        pizza={pizzaSelectedId}
        onType={this.onType}
        onDropDown={this.onDropDown}
        onRadioBtn={this.onRadioBtn}
        onSubmit={this.onSubmit}
        />

        <PizzaList pizzas={allPizzas} 
        handleChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default App;
