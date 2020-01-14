import React from "react"

const PizzaForm = ({selectedPizza, onSubmitPizzaForm, onPizzaChange}) =>{
  return(
    <div className="form-row" onChange={(e) => onPizzaChange(e)}>
      <div className="col-5">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Pizza Topping" 
            name="topping" 
            value={selectedPizza.topping} />
      </div>
      <div className="col" >
        <select value={selectedPizza.size} className="form-control"  name='size'>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col" >
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" name='vegetarian' 
            value='Vegetarian' 
            checked={selectedPizza.vegetarian}  
          />
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name='vegetarian'
            value='Not Vegetarian' 
            checked={!selectedPizza.vegetarian}
          />
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={(e)=>onSubmitPizzaForm(e)}>Submit</button>
      </div>
    </div>
  )
}


export default PizzaForm
