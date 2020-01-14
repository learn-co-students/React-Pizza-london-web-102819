import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const PIZZA_URL = "http://localhost:3000/pizzas/";

function App() {

    const [editedPizza, setEditedPizza] = useState({
        topping: "",
        id: "",
        size: "Small",
        vegetarian: false
    })

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch(PIZZA_URL)
            .then(data => data.json())
            .then(pizzas => setPizzas(pizzas))
    }, []);

    function handleSubmit(pizza) {

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
            .then(returnedPizza => pizza.id? 
            setPizzas(pizzas.map(p =>  (p.id === returnedPizza.id)? returnedPizza : p)) : setPizzas([...pizzas, returnedPizza]));

        setEditedPizza({
            topping: "",
            id: "",
            size: "Small",
            vegetarian: false
        })
    }

    return (
        <Fragment>
            <Header/>
            <PizzaForm
                handleChange = {e => setEditedPizza({...editedPizza, [e.target.name]: e.target.value})}
                handleVegetarianChange = {() => setEditedPizza({...editedPizza, vegetarian: !editedPizza.vegetarian})}
                handleSubmit = {() => handleSubmit(editedPizza)} 
                editedPizza = {editedPizza}
            />
            <PizzaList pizzas = {pizzas} handleEditClick = {pizza => setEditedPizza(pizza)}/>
        </Fragment>
    );

}

export default App;
