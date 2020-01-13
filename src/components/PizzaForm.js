import React from "react"

class PizzaForm extends React.Component {

    render() {
        const {topping, vegetarian, size} = this.props.editedPizza;
        return (
            <div className="form-row" >
                <div className="col-5">
                    <input type="text" name = "topping" className="form-control" placeholder="Pizza Topping" 
                        value={ topping }
                        onChange = {this.props.handleChange}
                    />
                </div>
                <div className="col">
                    <select onChange = {this.props.handleChange} value={size} name = "size" className="form-control">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div className="col" onChange = {this.props.handleVegetarianChange}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
                        <label className="form-check-label">
                            Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
                        <label className="form-check-label">
                            Not Vegetarian
                        </label>
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
                </div>
            </div>
        )


    }
}

export default PizzaForm
