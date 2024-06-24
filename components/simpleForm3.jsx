import React,{Component} from "react";
class SimpleForm3 extends Component{
    state={
        person:this.props.person,
       
    };

    handleChange=(e)=>{
        const {currentTarget :input}=e;
        let s1={...this.state};
        console.log(input.name);
        console.log(s1.person.working);
        console.log(s1.person[input.name]);
       // input.type === "checkbox"
       //? input.name==="techsKnown" 
       //? (s1.person.techsKnown = this.updateCBs(input.checked,input.value,s1.person.techsKnown))
      // : input.name==="access" 
      // ? (s1.person.techsKnown = this.updateCBs(input.checked,input.value,s1.person.access))
      //  : (s1.person[input.name] = input.checked)
       // : (s1.person[input.name]=input.value);
       (s1.person[input.name] = input.checked)
        s1.person[input.name]=input.value;
        if(!s1.person.working==="working") s1.person.companyName="";
        if(!s1.person.studying==="studying") s1.person.collegeName="";
        this.setState(s1);
    };

    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.person);
    };

    render (){
        let {working,companyName,designation,studying,collegeName,course}=this.state.person;
        return (
            <div className="container ">
                <div className="border m-2">
                <h5>Provide  Details below</h5>
                <div className="form-check">
                    <input type="radio" name="working" className="form-check-input"  checked={working==="companyName"} onChange={this.handleChange} />
                    <label className="form-check-label">Working</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="studying" className="form-check-input"  checked={studying==="collegeName"} onChange={this.handleChange} />
                    <label className="form-check-label">studying</label>
                </div>
                </div>
                <div className="border">
                {working?( <div className="form-group">
                <h4>Provide Job Details</h4>
                    <label>Company Name</label>
                    <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Enter the company name" value={companyName} onChange={this.handleChange}  />
                <br />
                <label>Designation</label>
                    <input type="text" className="form-control" id="designation" name="designation" placeholder="Enter the designation" value={designation} onChange={this.handleChange}  />
                </div>
                ):("")}
             
                {studying?( <div className="form-group">
                <h4>Provide course Details </h4>
                    <label>College Name</label>
                    <input type="text" className="form-control" id="collegeName" name="collegeName" placeholder="Enter the college Name" value={collegeName} onChange={this.handleChange}  />
                    <br />
                    <label>Course</label>
                    <input type="text" className="form-control" id="course" name="course" placeholder="Enter the course" value={course} onChange={this.handleChange}  />
                </div>):("")}
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
            </div>
        );
    }
}
export default SimpleForm3;