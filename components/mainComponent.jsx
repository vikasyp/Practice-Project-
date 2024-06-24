import React,{Component} from "react";
import NavBar  from "./navbar";
class MainComponent extends Component {
    render(){
        let count=4;
        let qty =0;
        return (
            <React.Fragment>
                <NavBar count={count} qty={qty} />
                <div className="container">
                    <h6>Book={count}</h6>
                    <h6>Number of Issued={qty}</h6>
                </div>
            </React.Fragment>
        );
    }
}
export default MainComponent;