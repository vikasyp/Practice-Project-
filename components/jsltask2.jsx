 import React, {Component} from "react";
class Jsltask2 extends Component {
    state = {products: [{ name: "Liril", quantity: 10, sales: 7, price: 10},{ name: "Dove", quantity: 20, sales: 9, price: 20},{ name: "Pears", quantity: 35, sales: 20, price: 15},{ name: "Surf", quantity: 45, sales: 22, price: 55},{ name: "Ariel", quantity: 20, sales: 7, price: 40},{ name: "Tide", quantity: 20, sales: 11, price: 35 },{ name: "Nirma", quantity: 30, sales: 21, price: 20 }]}

sortName=(n1,n2)=>{
    return n2.price-n1.price;
}

    render() {
        const {products} = this.state;
        const sts=[...products];
        sts.sort(this.sortName);
         const sts1=sts.filter((s)=>s.sales<20);
        return (
            <div className="container">
                <h4>Sale less than 20,sorted by price</h4>
                <div className="row bg-dark text-center text-white">
                    <div className="col-3 border">Name</div>
                    <div className="col-3 border">Stock</div>
                    <div className="col-3 border">Sales</div>
                    <div className="col-3 border">Price</div>
                    </div>
                {sts1.map((p1,index)=>(
                    <div className="row text-center">
                    <div className="col-3 border">{p1.name}</div>
                    <div className="col-3 border">{p1.quantity}</div>
                    <div className="col-3 border">{p1.sales}</div>
                    <div className="col-3 border">{p1.price}</div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Jsltask2;