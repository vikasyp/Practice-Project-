import React,{Component} from "react";
import CourseForm from "./courseForm";
class CourseComponent extends Component {
    state={
        persons:[
    ],
    view:0,
    }
    handlePerson=(person)=>{
        console.log("In Handle person",person);
        let s1={...this.state};
        s1.view=0;
        s1.persons.push(person);
        this.setState(s1);
    };
    onShowForm=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    }
    render () {
            let person = { course:""  };
            let {persons,view}=this.state;
            return view === 0 ?(
                <div className="container">
                    <h5>List of Course</h5>
                    {persons.map((p1)=> ( <div className="row">
                        <ul>
                            <li>{p1.course} <button className="btn btn-warning btn-sm" onClick={()=>this.onShowForm()}>Edit</button></li>
                            
                        </ul>
                    </div>
                    ) )}
                    <button className="btn btn-primary" onClick={()=>this.onShowForm()}>Add Course</button>
                </div>
                ):(
             < CourseForm  person={person} onSubmit={this.handlePerson}/>
             );
            
    }
}
export default CourseComponent;