import React from "react"
const pizzaDefaultState = {
  id: null,
  size: "Small",
  topping: null,
  vegetarian: null
}
class PizzaForm extends React.Component{
  state = pizzaDefaultState;

  render (){
    return(
      <div className="form-row" onChange={this.onPizzaChange}>
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={this.state.topping} />
        </div>
        <div className="col" >
          <select value={this.state.size} className="form-control"  name='size'>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' value='Vegetarian' checked={this.state.vegetarian==='Vegetarian'}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian'value='Not Vegetarian' checked={this.state.vegetarian==="Not Vegetarian"}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmitPizza}>Submit</button>
        </div>
      </div>
    )
  }
  // new pizza id
   newPizzaID = () => this.props.pizzas.slice(-1)[0].id + 1

  //onPizzaChange
  onPizzaChange = (e) => {
    this.setState({
      id: this.newPizzaID(),
      [e.target.name]: e.target.value
      })
  }
  //onSubmitPizza
  handleSubmitPizza = () => {
    this.props.onSubmitPizzaForm(this.state);
    this.setState(pizzaDefaultState);

  }

}
export default PizzaForm
