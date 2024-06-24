import React,{Component} from "react";
class CourseForm extends Component {
    state={
        person : this.props.person,
    };

    handleChange = (e) => {
        console.log(e.currentTarget);
        let s1={...this.state};
       //if(e.currentTarget.name==="name") s1.person.name=e.currentTarget.value;
        //if(e.currentTarget.age==="age") s1.person.age=e.currentTarget.value;
       s1.person[e.currentTarget.name]=e.currentTarget.value; 
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
    console.log("Handle Submit",this.state.person);
    this.props.onSubmit(this.state.person);
};
    render (){
        let {  course}=this.state.person;
        return (
            <div className="container">
                <div className="form-group">
                    <label>Add a Course</label>
                    <input type="text" className="form-control" id="course"  name="course" placeholder="Enter Name" value={course} onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary m-2" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default CourseForm;