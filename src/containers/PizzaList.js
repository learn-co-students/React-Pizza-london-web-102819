import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = () => {
    if (this.props.pizzas.length > 0) {
      return this.props.pizzas.map(p => {return <Pizza pizza={p} key={p.id} 
        updatePizzaForm={pizzaID => this.props.updatePizzaForm(pizzaID)}/>
      })}
    else return null
  }

  render() {
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
          {this.renderPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
