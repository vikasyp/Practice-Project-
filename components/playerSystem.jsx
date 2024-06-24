import React,{Component} from "react";
import Player from "./player";
class PlayerSystem extends Component {
    state ={
        names:[
            { name:"Jack", score:21},
            {name:"Steve",score:30},
            {name:"Maratha",score:44},
            {name:"Bob",score:15},
            {name:"Katherine",score:28}],
    };
    handleIncreament=(index)=>{
        let s1={...this.state};
        let ind=s1.names[index];
        ind.score += 1;
        this.setState(s1);
    }
    render(){
        const {names}=this.state;
        return <div className="container">
            <h3 className="text-center">List of Names</h3>
            {names.map((n1,index)=>(
                <Player plyr={n1} index={index} onIncreament={this.handleIncreament}/>
            ))}
        </div>
    }
}
export default PlayerSystem;
