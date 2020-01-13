import React from "react"

const Pizza = ({ handleEditClick, pizza}) => {

    const {topping, size, vegetarian} = pizza;

    return(
        <tr>
            <td>{topping}</td>
            <td>{size}</td>
            <td>{vegetarian ? "Yes" : "No"}</td>
            <td><button type="button" className="btn btn-primary" onClick = {() => handleEditClick(pizza)}>Edit Pizza</button></td>
        </tr>
    )
}

export default Pizza
