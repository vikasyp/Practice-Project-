import React, {Component} from "react";
import CustumerForm from "./customerForm";
class HomeScreen extends Component {
    state = {
      custumers : [],
        view : 0,
        editCustIndex : -1,
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
        this.setState(s1);
    } 

    showTable = () => {
        let s1 = {...this.state};
        s1.view = 2;
        this.setState(s1);
    } 

    editCourse = (index) => {
      let s1 = {...this.state};
      s1.view = 1;
      s1.editCustIndex = index;
      this.setState(s1);
  };

    showTableData = () => {
      const {custumers} = this.state;
      return (
      <div className="container">
        {custumers.length === 0 ? (
        <h4>There are Zero Custumers</h4>  
        ) : (
          <React.Fragment>
        <div className="row bg-dark text-white">
          <div className="col-2 border">Name</div>
          <div className="col-2 border">Gender</div>
          <div className="col-2 border">Delivery</div>
          <div className="col-3 border">Payments</div>
          <div className="col-2 border">slot</div>
          <div className="col-1 border"></div>
          </div>
          {custumers.map((c1,index)=>(
          <div className="row">
         <div className="col-2 border">{c1.name}</div>
          <div className="col-2 border">{c1.gender}</div>
          <div className="col-2 border">{c1.delivery}</div> 
          <div className="col-3 border">{c1.payment}</div>
          <div className="col-2 border">{c1.slot}</div>
          <div className="col-1 border">
            <button className="btn btn-success btn-sm" onClick={()=>this.editCourse(index)}>Edit</button>
            </div>      
            </div>
          ))}
          </React.Fragment>
        )}
        </div>
     )
    }

    render() {
      let custumer = {name:"",gender:"",delivery:"",payment:[],slot:""};
        let {view,editCustIndex,custumers} = this.state;
        return (
            <div className="container">
                    <button className="btn btn-primary m-2"
                     onClick={this.showForm}> New Custumer </button>
                    <button className="btn btn-primary m-2"
                     onClick={this.showTable}>
                     List of Custumers
                    </button>
                    {view === 0 ? (
                      <h3>Welcome To the Custumer System</h3>
                    ) : (
                      ""
                    )}

                {view === 1 ? (
                  <CustumerForm 
                  custumer={editCustIndex>=0 ? custumers[editCustIndex] : custumer}
                  edit = {editCustIndex >= 0}
                  onSubmit= {this.handleCustumer}/>
                ) : view === 2 ? ( 
                  this.showTableData()   
                ) : (
                  ""
                )}
                 </div>
            )
}
}
export default HomeScreen;