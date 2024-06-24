import React,{Component} from "react";
import SimpleForm  from "./simpleForm";
class SimpleComponent extends Component {
    state={
        persons:[
            {name:"Jack",age:23},
            {name:"Mary",age:28},
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
            let person = { name:"" ,age :"" };
            let {persons,view}=this.state;
            return view === 0 ?(
                <div className="container">
                    {persons.map((p1)=> ( <div className="row">
                        <div className="col-6 border">{p1.name}</div>
                        <div className="col-6 border">{p1.age}</div>
                    </div>
                    ) )}
                    <button className="btn btn-primary" onClick={()=>this.onShowForm()}>Add New Person</button>
                </div>
                ):(
             < SimpleForm  person={person} onSubmit={this.handlePerson}/>
             );
            
    }
}
export default SimpleComponent;