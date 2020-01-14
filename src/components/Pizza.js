import React from "react"

const Pizza = ({pizza, onEditingPizza}) => {
  const handleEdit = (e) => {
    e.preventDefault();
    onEditingPizza(pizza.id)
  }
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "I'm safe for vegitarians" : "Vegitarians stay away"}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e)=>handleEdit(e)}>Edit Pizza</button></td>
    </tr>
  )

}

export default Pizza
