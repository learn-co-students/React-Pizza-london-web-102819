import React from "react"

const PizzaForm = props => {

  const {pizzaID, topping, size, vegetarian} = props.pizzaForm;

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={e => props.editPizzaForm('topping', e.target.value)}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={e => props.editPizzaForm('size', e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian ? true : false} onChange={() => props.editPizzaForm('vegetarian', true)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian ? false : true} onChange={() => props.editPizzaForm('vegetarian', false)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.patchPizza(pizzaID)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
