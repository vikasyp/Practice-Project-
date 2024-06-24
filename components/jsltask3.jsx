import React, {Component} from "react";
class Jsltask3 extends Component {
    state = {products: [
        { name: "Liril", quantity: 10, sales: 7, price: 10},
        { name: "Dove", quantity: 20, sales: 9, price: 20},
        { name: "Pears", quantity: 35, sales: 20, price: 15},
        { name: "Surf", quantity: 45, sales: 22, price: 55},
        { name: "Ariel", quantity: 20, sales: 8, price: 40},
        { name: "Tide", quantity: 20, sales: 11, price: 35 },
        { name: "Nirma", quantity: 30, sales: 21, price: 20 }
    ],
}

    render() {
        const {products} = this.state;
        const st=products.map((s1)=>{return s1.sales*s1.price});
        const maxQty=products.reduce((acc,curr)=>acc<curr.sales?curr.sales:acc,0);
        console.log(maxQty);
        const maxValue=products.reduce((acc,curr)=>acc<curr.sales*curr.price?curr.sales*curr.price:acc,0);
        console.log(maxValue);
        const totalQty=products.reduce((acc,curr)=>acc+curr.quantity,0);
        console.log(totalQty);
        const totalValue=products.reduce((acc,curr)=>acc+(curr.sales*curr.price),0);
        console.log(totalValue);
        const totalStockValue=products.reduce((acc,curr)=>acc+(curr.quantity*curr.price),0);
        console.log(totalStockValue);
        const totalSales =products.reduce((acc,curr)=>acc+curr.sales,0);
        console.log(totalSales);
        const file1=products.find((st)=>st.sales===maxQty);
        console.log(file1);
        const minSell=products.reduce((acc,curr)=>acc>curr.sales?curr.sales:acc);
        console.log(minSell);
       const minVal=st.reduce((acc,curr)=>acc>curr?curr:acc);
       console.log(minVal);
       const file2=products.find((st)=>st.sales===minSell);
     console.log(file2);
        return (
            <div className="container">
                <h4 className="text-center">Daily Sales Report for XYZ Enterprises</h4>
                <div className="row bg-dark text-center text-white">
                    <div className="col-2 border">Name</div>
                    <div className="col-2 border">Stock</div>
                    <div className="col-2 border">Sales</div>
                    <div className="col-2 border">Stock Left</div>
                    <div className="col-2 border">Price</div>
                    <div className="col-2 border">Sales Value</div>
                    </div>
                {products.map((p1)=>{
                   const {name,quantity,sales,price}=p1;
                  return  <div className="row">
                    <div className="col-2 border">{name}</div>
                    <div className="col-2 border">{quantity}</div>
                    <div className="col-2 border">{sales}</div>
                    <div className="col-2 border">{quantity-sales}</div>
                    <div className="col-2 border">{price}</div>
                    <div className="col-2 border">{price * sales}</div>
                    </div>
    })}

                <div className="row border bg-light text-center ">
                    <div className="col-3 border  m-2">
                        Max Seller by Quantity <br />
                     Name :{file1.name} <br />
                     Quantity :{maxQty}
                     </div>
                     <div className="col-3 border  m-2">
                    Max Seller by Value  <br />
                    Name :{file1.name}  <br />
                    Quantity :{maxValue}
                     </div>
                     <div className="col-3 border  m-2">
                   Min Seller by Quantity   <br />
                     Name :{minSell.name}  <br />
                    Quantity :{minSell.sales}
                    </div>
                    <div className="col-3 border m-2">
                    Min Seller by Value  <br />
                   Name :{minSell.name}  <br />
                   Quantity :{minVal}
                </div>
            </div>
            <div className="row bg-light text-center border">
                <div className="col-12 m-2">
                    Number of Product :{products.length} <br />
                    Total Stock by Quantity : {totalQty } <br />
                    Total Stock by value : { totalStockValue} <br />
                    Total Sales by Quantity : { totalSales} <br />
                    Total Sales by Value : { totalValue}
                </div>
                <div className="col-12 border text-center">
                    <button className=" btn btn-primary btn-sm m-2"> Choose the Shop for the day</button>
                </div>
            </div>
            </div>
        );
    }
}
export default Jsltask3;