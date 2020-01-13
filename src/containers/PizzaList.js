import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  render() {
    const { pizzasToRender, onSelectPizza } = this.props;

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
          {pizzasToRender.map(pizza => {
            return (
              <Pizza pizzaToRender={pizza} onSelectPizza={onSelectPizza} />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PizzaList;
