import React from "react";

const Pizza = ({ pizzaToRender, onSelectPizza }) => {
  return (
    <tr>
      <td>{pizzaToRender.topping}</td>
      <td>{pizzaToRender.size}</td>
      <td>{pizzaToRender.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onSelectPizza(pizzaToRender.id)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
