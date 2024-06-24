import React,{Component} from "react";
import Product  from "./product";
import ProductTable from "./productTable";
class Store extends Component {
    state={
        products:[
            {name:"Coca Cola",code:"C332",price:20,quantity:10},
            {name:"5Star",code:"S102",price:15,quantity:0},
            {name:"Maggi",code:"M103",price:28,quantity:22},
            {name:"Pepsi",code:"P104",price:20,quantity:18},
            {name:"Dairy Milk",code:"D105",price:40,quantity:0},
            {name:"Mirinda",code:"M106",price:25,quantity:8},
            {name:"Kitkat",code:"K108",price:16,quantity:11},
            {name:"Red Bull",code:"R109",price:90,quantity:3},
        ],
        viewGrid:false,
    };

    orderPrice=()=>{
        let s1={...this.state};
        s1.products.sort((a1,a2)=>a1.price-a2.price);
        this.setState(s1);
    }
    orderQty=()=>{
        let s1={...this.state};
        s1.products.sort((a1,a2)=>a1.quantity-a2.quantity);
        this.setState(s1);
    }
    handleIncreament=(index)=>{
        let s1={...this.state};
        let ind=s1.products[index];
        ind.quantity += 1;
        this.setState(s1);
    }
    handleDecreament=(index)=>{
        let s1={...this.state};
        let ind=s1.products[index];
        ind.quantity -= 1;
        this.setState(s1); 
    }

    handleView=()=>{
let s1={...this.state};
s1.viewGrid=true;
this.setState(s1); 
    }
    handleViewGrid=()=>{
        let s1={...this.state};
        s1.viewGrid=false;
        this.setState(s1);   
    }

    render(){
        const {products,viewGrid}=this.state;
        return (
            <div className="container text-center">
                     <h2 className="text-center">Products in Store</h2>
                    <button className="btn btn-primary btn-sm m-2"  style={{width:"150px",height:"40px"}} onClick={()=>this.orderQty()}>Order by Quantity</button>
                    <button className="btn btn-primary btn-sm m-2" style={{width:"140px",height:"40px"}} onClick={()=>this.orderPrice()}>Order by Price</button>
                    {viewGrid===false ? (
                    <button className="btn btn-primary btn-sm" style={{width:"140px",height:"40px"}} onClick={()=>this.handleView()}>View : Table</button>
                    ):(
                    <button className="btn btn-primary btn-sm" style={{width:"140px",height:"40px"}} onClick={()=>this.handleViewGrid()}>View :Grid</button>
                    )}
                    {viewGrid===false ?(
                <div className="row text-center">
                    {products.map((p1,index)=>(
                        <Product pr1={p1} index={index} onIncreament={this.handleIncreament} onIDecreament={this.handleDecreament}/>
                    ))}
                </div>
                ):(
                    <div className="row text-center">
                    {products.map((p1,index)=>(
                    <ProductTable pr1={p1} index={index} onIncreament={this.handleIncreament} onIDecreament={this.handleDecreament}/>
                    ))}
                     </div>
                )}
            </div>
        );
    }
}
export default Store;