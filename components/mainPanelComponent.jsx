import React,{Component} from "react";
import LeftPanelForm from "./leftPanelForm";
class MainPanelComponent extends Component{
    state={
        products : [ 
            { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
            { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
            { id: "PEA531", name: "Pears", category: "Soap", stock: true },
            { id: "LU7264", name: "Lux", category: "Soap", stock: false },
            { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
        { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
        { id: "LI130", name: "Liril", category: "Soap", stock: true },
        { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
        { id: "MAG441", name: "Maggi", category: "Food", stock: true }],
        nameOption:{
            name:["Pepsi","Close Up","Pears","Lux","Colgate","Dairy Milk","Liril","Pepsodent","Maggi"],
        },
        optionSel:{
         name:[],
        },
    };
    showLaptops=()=>{
        const {products,optionSel}=this.state;
        const {name}=optionSel;
        const laptop1=name.length>0?products.filter((lt)=>name.findIndex((br)=>br===lt.name)>=0):products;
        console.log(laptop1);
        console.log(optionSel);
        return  (
        <div className="container">
             <p>Selected Products:{optionSel.name+","}</p>
          
             
           {laptop1.map((lt)=>
              (<div className="row">
                <div className="col-3 ">{lt.name}</div>
                <div className="col-3 ">{lt.category}</div>
                <div className="col-3 ">{lt.id}</div>
                <div className="col-3">{lt.stock}</div>
              </div>
              ))}
            </div>
        );
    };
    handleClear=()=>{
        let s1={...this.state};
        s1.optionSel ={
            name:[],
        };
        this.setState(s1);
    };
    handleChangOption=(optionSel)=>{
        let s1={...this.state};
        s1.optionSel =optionSel;
        this.setState(s1);
    }
    render(){
        const {nameOption,optionSel}=this.state;
        return <div className="container">
            <div className="row">
                <div className="col-3 botder bg-light">
                    <LeftPanelForm  
                    optionSel={optionSel}
                    nameOption={nameOption} 
                    onChangeOption={this.handleChangOption} 
                    onClear={this.handleClear} />
                </div>
                <div className="col-9 border">{this.showLaptops()}</div>
            </div>
        </div>
    }
}
export default MainPanelComponent;