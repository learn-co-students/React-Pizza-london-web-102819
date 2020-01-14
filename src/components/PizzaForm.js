import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.modifyPizza} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.chosenPizza? props.chosenPizza.topping : null
              }/>
        </div>
        <div className="col">
          <select name="size" onChange={props.modifyPizza} value={props.chosenPizza? props.chosenPizza.size : null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={props.modifyPizza} name="vegetarian" className="form-check-input" type="radio" value={true}  checked={props.chosenPizza? props.chosenPizza.vegetarian? true: false : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={props.modifyPizza} name="vegetarian" className="form-check-input" type="radio" value={false} checked={props.chosenPizza? !props.chosenPizza.vegetarian? true: false : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.patchPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
