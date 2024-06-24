import React,{Component} from "react";
class Jsltask5 extends Component {
    state={
        upperCase:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        lowerCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        digits:[1,2,3,4,5,6,7,8,9,0],
        specialChar:["@","#","$","%","&","*","(",")"],
       click:-1,
       text:"",
       person:[]
    };

   
  renderAtoZ=(upperCase)=>{
    return(
<React.Fragment>
        {upperCase.map((u1)=>(
        <button className="btn btn-dark btn-lg border" onClick={()=>this.handleSubmit(u1)}>{u1}</button>
       ))}
       </React.Fragment>
    );
        }
    renderatoa=(LowerCase)=>{
      return(
  <React.Fragment>
          {LowerCase.map((u1)=>(
          <button className="btn btn-dark btn-lg border" onClick={()=>this.handleSubmit(u1)}>{u1}</button>
         ))}
         </React.Fragment>
      );
          }
      renderDigits=(digit)=>{
        return(
    <React.Fragment>
            {digit.map((u1)=>(
            <button className="btn btn-dark btn-lg border" onClick={()=>this.handleSubmit(u1)}>{u1}</button>
           ))}
           </React.Fragment>
        );
            }
        renderChar=(char)=>{
          return(
      <React.Fragment>
              {char.map((u1)=>(
              <button className="btn btn-dark btn-lg border" onClick={()=>this.handleSubmit(u1)}>{u1}</button>
             ))}
             </React.Fragment>
          );
              }
              handleSubmit=(ch)=>{
                let s1={...this.state};
                s1.text+=ch;
                this.setState(s1);
              }
  handleClick = (index) => {
    let s1 = {...this.state};
    s1.click = index;
    this.setState(s1);
  };
    render() {
      const {upperCase,lowerCase,digits,specialChar,click,text}=this.state;
      return (
        <div className="container">
           <button className="btn btn-primary m-2 " onClick={() => this.handleClick(0)}>UpperCase</button>
           <button className="btn btn-primary m-2" onClick={() => this.handleClick(1)}>LowerCase</button>
            <button className="btn btn-primary m-2 " onClick={() => this.handleClick(2)}>Digits</button>
          <button className="btn btn-primary " onClick={() => this.handleClick(3)}>Special</button>
      <h4 className="border">Text:{text}</h4>
      
<br />
       {click ===- 1?(
        ""
        ):click===0?(this.renderAtoZ(upperCase)
        ):click===1?(this.renderatoa(lowerCase)
        ):click===2?(this.renderDigits(digits)
        ):click===3?(this.renderChar(specialChar)
        ):null}
      </div>
      )
    }
}
export default Jsltask5;