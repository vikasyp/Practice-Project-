import React, {Component} from "react";
class Product extends Component {
   state={};
    render(){
        const {pr1,onIncreament,index,onIDecreament}=this.props;
        const { name , code , price , quantity}= pr1;
        console.log(pr1);
        return (
            
            <div className="col-3 mb-2 border bg-info">
                <h4>{name}</h4>
                <h6> Code :{code}</h6>
                <h6> Price :{price}</h6>
                <h6>Quantity :{quantity}</h6>
                <button className="btn m-2 btn-light btn-lg btn-sm" onClick={()=>onIncreament(index)}>Increase</button>
                <button className="btn m-2 btn-light btn-lg btn-sm" onClick={()=>onIDecreament(index)}>Decrease</button>
            </div>
        );
    }
}
export default Product;