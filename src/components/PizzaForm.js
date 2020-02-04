import React from "react"
import Pizza from "./Pizza"

const PizzaForm = (props) => {
  const { pizza, onRadioBtn, onSubmit, onDropDown } = props
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} 
          className="form-control">
            onDropDown={onDropDown}
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" 
            type="radio" 
            value="Vegetarian" 
            checked={pizza.vegetarian}
            onChange={onRadioBtn} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
            type="radio" 
            value="Not Vegetarian" 
            checked={!pizza.vegetarian}
            onChange={onRadioBtn} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" 
          className="btn btn-success" 
          onSubmit={onSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
