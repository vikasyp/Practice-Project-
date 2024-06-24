import React,{Component} from "react";
class ProductTable extends Component {
    state={};
    render(){
        const {pr1,onIncreament,index,onIDecreament}=this.props;
        const {name,code,price,quantity}=pr1;
        return (
            <div className="row bg-light bmb-1 border">
                <div className="col-3">{name}</div>
                <div className="col-2">{code}</div>
                <div className="col-2">{price}</div>
                <div className="col-2">{quantity}</div>
                <div className="col-3">
                    <button className="btn m-2 btn-success btn-sm" onClick={()=>onIncreament(index)}>+</button>
                    <button className="btn m-2 btn-danger btn-sm" onClick={()=>onIDecreament(index)}>-</button>
                </div>
            </div>
        )
    }
}
export default ProductTable;