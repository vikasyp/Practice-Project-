import React,{Component} from "react";
class Formtask2 extends Component {
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
        let {  name ,description,duration,faculty}=this.state.person;
        return (
            <div className="container">
                <h5>Enter Details of Person</h5>
                <div className="form-group">
                    <label>Name of the Course</label>
                    <input type="text" className="form-control" id="name"  name="name" placeholder="Enter Name" value={name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" id="description"  name="description" placeholder="Enter course decription" value={description} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input type="text" className="form-control" id="duration"  name="duration" placeholder="Enter course duration" value={duration} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Faculty</label>
                    <input type="text" className="form-control" id="faculty"  name="faculty" placeholder="Enter faculty name" value={faculty} onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary m-2" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default Formtask2;