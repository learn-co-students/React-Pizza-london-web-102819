import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './db/API'


class App extends Component {
  state = {
    pizzas: [],
    editedPizza: {}
  }
  render() {
    const { pizzas, editedPizza } = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          onSubmitPizzaForm={this.onSubmitPizzaForm}
          selectedPizza={editedPizza} 
          onPizzaChange={this.onPizzaChange}
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
  onSubmitPizzaForm = (e) =>{
    let pizza = this.state.editedPizza;
    if (pizza.id){
      let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(pizza)
      }
      API.PATCH_PIZZA(this.state.editedPizza.id,configObj).then(pizzaData => 
        this.setState({
          pizzas:this.state.pizzas.map(pizza=> {return pizza.id === pizzaData.id ? pizzaData : pizza }) 
        })
      );
    } else {
//POST configObj
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
    // resetting the form in the DOM to be 'empty'
    this.setState({
      editedPizza: {
        id: '',
        topping: '',
        size: 'Small',
        vegetarian: ''
      }
    })       
  }

  //on clikcing edit
  onEditingPizza = (pizzaID) => {
    this.setState({
      editedPizza: this.state.pizzas.find(pizza => pizza.id === pizzaID)
    })
  }


  //onPizzaChange
  onPizzaChange = (e) => {

    let name = e.target.name;
    let value = e.target.value; 

    name === "vegetarian" 
    ? this.setState({
      editedPizza: {
        ...this.state.editedPizza,
        vegetarian: value === 'Vegetarian' ? true : false 
      }
    })
    : this.setState(previousState=>({
      editedPizza: {
        ...previousState.editedPizza,
        [name]: value
      }
    })
  )}
/*  👆this was originally in PizzaForm setting the state of the form (no longer):
    ...
    this.setState({
      [e.target.name]: e.target.value
    })
    ...
    since syntheticevents in react reset event's values immediately, in avoiding event.persist(), 
    assign the values to varialbes to capture them.
    => let name = e.target.name & let value = e.target.value
*/
}

export default App
