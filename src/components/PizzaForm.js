import React from "react"

class PizzaForm extends React.Component {


    state = {
        topping: "",
        id: "",
        size: "Small",
        vegetarian: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log(state, props.editedPizza)
        return props.editedPizza && props.editedPizza !== state ?  props.editedPizza : null;
    }

    handleVegetarianChange = () => {
        this.setState({
            vegetarian: !this.state.vegetarian
        })
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="form-row" >
                <div className="col-5">
                    <input type="text" name = "topping" className="form-control" placeholder="Pizza Topping" 
                        value={ this.state.topping }
                        onChange = {this.handleChange}
                    />
                </div>
                <div className="col">
                    <select onChange = {this.handleChange} value={this.state.size} name = "size" className="form-control">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div className="col" onChange = {this.handleVegetarianChange}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian}/>
                        <label className="form-check-label">
                            Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian}/>
                        <label className="form-check-label">
                            Not Vegetarian
                        </label>
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-success" onClick={() => this.props.handleSubmit(this.state)}>Submit</button>
                </div>
            </div>
        )


    }
}

export default PizzaForm
