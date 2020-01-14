import React from 'react';
import Pizza from '../components/Pizza'


function PizzaList(props) {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Topping</th>
                    <th scope="col">Size</th>
                    <th scope="col">Vegetarian?</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.pizzas.map(p => <Pizza handleEditClick = {props.handleEditClick} pizza = {p} key = {p.id}/>)
                }
            </tbody>
        </table>
    );

}

export default PizzaList;
