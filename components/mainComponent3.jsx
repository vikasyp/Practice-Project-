import React,{Component} from "react";
import SimpleForm3 from "./simpleForm3";
class MainComponent3 extends Component {
    state={
        persons:[
        ],
        view:0,
        editPersonIndex:-1,
    };
    handleSubmit=(person)=>{
        console.log(person);
        let s1={...this.state};
        console.log(s1.editPersonIndex);
        s1.editPersonIndex>=0
        ?(s1.persons[s1.editPersonIndex]=person)
        :s1.persons.push(person);
        s1.view=0;
        s1.editPersonIndex=-1;
        alert("Company Name :"+person.companyName, "Designation :"+person.designation, person.collegeName,person.course)
        this.setState(s1);
    };
    deletePerson=(index)=>{
        
    }
    showForm=()=>{
        let s1={...this.state};
        s1.view=1;
        s1.editPersonIndex=-1;
        this.setState(s1);
    }
    editPerson=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editPersonIndex=index;
        this.setState(s1);
    };
    showPersons=()=>(
        <React.Fragment>
            <h4>Details of Persons</h4>
            {this.state.persons.map((p1,index)=>(
                <div className="row border">
                    <div className="col-4 border">{p1.companyName}</div>
                    <div className="col-4 border">{p1.designation}</div>
                </div>
            ))}
            <button className="btn btn-primary" onClick={()=>this.showForm()}>Add New Person</button>
        </React.Fragment>
    )
    render(){
        const {persons,view,editPersonIndex}=this.state;
        return(
            <div className="container">
                {view===0?(
                    this.showPersons()
                ):(
                    <SimpleForm3 
                    person={editPersonIndex>=0?persons[editPersonIndex]:{}}
                    onSubmit={this.handleSubmit}
                    edit={editPersonIndex>=0}
                    />
                )}
            </div>
        )
    }
}
export default MainComponent3;