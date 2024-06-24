import React, {Component} from "react";
import CustomerForm from "./customerForm1";
import MarksForm from "./marksForm";
class HomeScreen1 extends Component {
    state = {
      custumers : [],
        view : 0,
        editCustIndex : -1,
        enterMarksIndex: -1,
    };

    handleCustumer = (cust) => {
      let s1 = {...this.state};
      s1.editCustIndex >= 0
      ? (s1.custumers[s1.editCustIndex]=cust)
      : s1.custumers.push(cust);
      s1.editCustIndex = -1;
      s1.view = 2;
      this.setState(s1);
  };

    showForm = () => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editCustIndex = -1;
        this.setState(s1);
    } 

    showTable = () => {
        let s1 = {...this.state};
        s1.view = 2;
        this.setState(s1);
    } 

    editCourse = (index) => {
      let s1 = {...this.state};
      s1.view = 3;
      s1.editCustIndex = index;
      this.setState(s1);
  };

  enterMarks = (index) => {
    let s1 = { ...this.state };
    s1.view = 3;
    s1.editCustIndex = -1;
    s1.enterMarksIndex = index;
    this.setState(s1);
  };

  handleStudent = (mark) => {
    let s1 = {...this.state};
   const { enterMarksIndex, custumers } = s1;
    custumers[enterMarksIndex].marks.push(mark);
    s1.view = 2;
    this.setState(s1);
  }

    showTableData = () => {
      const {custumers} = this.state;
      return (
      <div className="container">
        {custumers.length === 0 ? (
        <h4>There are ZERO Students</h4>  
        ) : (
          <React.Fragment>
        <div className="row bg-dark text-white">
          <div className="col-3 border">Name</div>
          <div className="col-3 border">Course</div>
          <div className="col-2 border">Year</div>
          <div className="col-2 border">Total Marks</div>
          <div className="col-2 border">Result</div>
          </div>
          {custumers.map((c1,index)=>(
          <div className="row">
         <div className="col-3 border">{c1.name}</div>
          <div className="col-3 border">{c1.course}</div>
          <div className="col-2 border">{c1.year}</div> 
          <div className="col-2 border">
          {c1.marks.length > 0 ? (
            <span>  
             {(+c1.marks[0].maths) + (+c1.marks[0].english) + (+c1.marks[0].computers) + (+c1.marks[0].science)}
            </span>
          
          ) : (
                  <span>No Data</span>
            )}
          
            </div> 
          <div className="col-2 border">
             {c1.marks.length > 0 ? (
           <button className="btn btn-primary"
            onClick={()=>this.editCourse(index)}>
            Edit</button>     
   
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => this.enterMarks(index)}
                  >
                    Enter
                  </button>
                )}
            </div>
            </div>
          ))}
          </React.Fragment>
        )}
        </div>
     )
    }

    render() {
      let student = {name:"", course:"", year:"",marks:[]};
        let {view,editCustIndex,custumers,enterMarksIndex} = this.state;
        return (
            <div className="container">
                    <button className="btn btn-primary m-2"
                     onClick={this.showForm}> New Student </button>
                    <button className="btn btn-primary m-2"
                     onClick={this.showTable}>
                     List of Students
                    </button>
                    {view === 0 ? (
                      <h3>Welcome To Student Management System</h3>
                    ) : (
                      ""
                    )}

                {view === 1 ? (
                  <CustomerForm
                  student={editCustIndex>=0 ? custumers[editCustIndex] : student}
                  edit = {editCustIndex >= 0}
                  onSubmit= {this.handleCustumer}/>
                ) : view === 2 ? ( 
                  this.showTableData()   
                ) : (
                  ""
                )}

                {view === 3 ? (
                    <MarksForm  names={custumers[enterMarksIndex].name} edit = {editCustIndex >= 0}  mark = {editCustIndex>=0 ? custumers[editCustIndex].marks[0] : {}}  onSubmit={this.handleStudent}/>
                ) : (
                    ""
                )}
                 </div>
            )
}
}
export default HomeScreen1;