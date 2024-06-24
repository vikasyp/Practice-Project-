import React,{Component} from "react";
import LeftPanelForm2 from "./leftPanelForm2";
class MainPanelComponent2 extends Component{
    state={
        products :[
            { id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
        { id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },
        { id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
        { id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
        { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
        { id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
        { id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
        { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
        { id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
        { id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
        { id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
        { id: "DOV044", name: "Dove", category: "Soap", stock: "yes" }],
        nameOption:{
            category:["Food","Toothpaste","Soap",],
            stock:["no","arriving","yes"],
        },
        optionSel:{
            category:[],
            stock:[]
        },
    };
    showLaptops=()=>{
        const {products,optionSel}=this.state;
        const {category,stock}=optionSel;
        const laptop1=category.length>0?products.filter((lt)=>category.findIndex((br)=>br===lt.category)>=0):products;
        const laptop2=stock.length>0?laptop1.filter((lt)=>stock.findIndex((br)=>br===lt.stock)>=0):laptop1;
        console.log(laptop2);
        console.log(optionSel);
        return  (
        <div className="container">
             <p>Selected Products:{optionSel.category+","} <br />
             Stock Status:{optionSel.stock+","}</p>
          
             
           {laptop2.map((lt)=>
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
                    <LeftPanelForm2  
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
export default MainPanelComponent2;