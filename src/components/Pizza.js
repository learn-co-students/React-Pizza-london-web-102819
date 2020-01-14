import React from "react"

const Pizza = props => {

  const {id, topping, size, vegetarian} = props.pizza

  return(
    <tr id={id}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'yes' : 'no'}</td>
      <td><button type="button" className="btn btn-primary" onClick={e => props.updatePizzaForm(e.target.parentElement.parentElement.id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
