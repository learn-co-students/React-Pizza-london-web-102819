import React from "react"

class PizzaForm extends React.Component{
  state = {
    id: null,
    Size: "Small",
    Topping: null,
    Vegetarian: null
  }

  render (){
    return(
      <div className="form-row" onChange={this.onPizzaChange}>
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="Topping" value={null} />
        </div>
        <div className="col" >
          <select value={null} className="form-control"  name='Size'>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input className="form-check-input" type="radio" name='Vegetarian' value='Vegetarian' checked={this.state.Vegetarian==='Vegetarian'}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='Vegetarian'value='Not Vegetarian' checked={this.state.Vegetarian==="Not Vegetarian"}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
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


}
export default PizzaForm
