import React,{Component} from "react";
import Formtask2  from "./formtask2";
class Componenttask2 extends Component {
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
            let person = { name:""  ,description:"",duration:"",faculty:""};
            let {persons,view}=this.state;
            return view === 0 ?(
                <div className="container">
                    {persons.map((p1)=> ( <div className="row">
                        <div className="col-12 ">Course Details Submitted .Name : {p1.name},Deccriptio : {p1.description},Duration : {p1.duration},Faculty : {p1.faculty}</div>
                    </div>
                    ) )}
                    <button className="btn btn-primary" onClick={()=>this.onShowForm()}>Add New Person</button>
                </div>
                ):(
             < Formtask2  person={person} onSubmit={this.handlePerson}/>
             );
            
    }
}
export default Componenttask2;