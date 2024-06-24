import React, {Component} from "react";
class CustomerForm extends Component {
    state = {
        student : this.props.student,
    };

    handleChange = (e) => {
        let s1 = {...this.state};
        s1.student[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.student);
    };

    render() {
        let { name, course, year } = this.state.student;
        return (
            <div className="container">
                <div className="form-group">
                <label>Name</label>
                <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label>Course</label>
                <input type="text"
                className="form-control"
                id="course"
                name="course"
                value={course}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label>Year</label>
                <input type="number"
                className="form-control"
                id="year"
                name="year"
                value={year}
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
export default CustomerForm;