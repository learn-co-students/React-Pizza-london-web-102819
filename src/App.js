import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const PIZZA_URL = "http://localhost:3000/pizzas/";

class App extends Component {

    state = {
        editedPizza: false, 
        pizzas: []
    }

    fetchPizzas = () => {
        fetch(PIZZA_URL)
            .then(data => data.json())
            .then(pizzas => this.setState({pizzas}))
    }

    componentDidMount() {
        this.fetchPizzas();
    }

    handleSubmit = pizza => {
        const pizzaObj = {
            method: (pizza.id?  "PATCH" : "POST"),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(pizza) 
        }
         
        fetch(PIZZA_URL + (pizza.id? pizza.id : ""), pizzaObj)
            .then(resp => resp.json())
            .then(returnedPizza => pizza.id? this.setState({
                pizzas: this.state.pizzas.map(p => {
                    if (p.id === returnedPizza.id) return returnedPizza;
                    return p;
                })}) : this.setState({pizzas: [...this.state.pizzas, returnedPizza]})
            );

    }

    handleEditClick = pizza => {
        this.setState({
            editedPizza: {...pizza}
        })
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <PizzaForm handleSubmit = {this.handleSubmit} editedPizza = {this.state.editedPizza}/>
                <PizzaList pizzas = {this.state.pizzas} handleEditClick = {this.handleEditClick}/>
            </Fragment>
        );
    }
}

export default App;
