import React from "react"

const Pizza = (props) => {
  const { handleChange, pizza } = props
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "I am vege" : "Not vege"}</td>
      <td><button type="button" 
      className="btn btn-primary" 
      onClick={() => handleChange(pizza.id)}
      >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
