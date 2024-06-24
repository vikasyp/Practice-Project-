import React, {Component} from "react";
class MarksForm extends Component {
    state = {
        mark : this.props.mark,
    };

    handleChange = (e) => {
        let s1 = {...this.state};
       s1.mark[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.mark);
    };

    render() {
        let { maths, english, computers, science } = this.state.mark;
        return (
            <div className="container">
                <h3>  {this.props.edit ? "Edit Marks for "+this.props.names : "Enter Marks for "+this.props.names}</h3>
                <div className="form-group">
                <label>Maths</label>
                <input type="number"
                className="form-control"
                id="maths"
                name="maths"
                value={maths}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label>English</label>
                <input type="number"
                className="form-control"
                id="english"
                name="english"
                value={english}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label>Computers</label>
                <input type="number"
                className="form-control"
                id="computers"
                name="computers"
                value={computers}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label>Science</label>
                <input type="number"
                className="form-control"
                id="science"
                name="science"
                value={science}
                onChange={this.handleChange}
                />
                </div>
                <button className="btn btn-primary m-2"
                 onClick={this.handleSubmit}>
                Submit
                </button>
            </div>
        )
    }
}
export default MarksForm;