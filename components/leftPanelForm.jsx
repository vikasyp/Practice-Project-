import React,{Component} from "react";
class LeftPanelForm extends Component{

    handleChange=(e)=>{
        let s1={...this.props.optionSel};
        let {currentTarget : input}=e;
        console.log(input.name);
        console.log(s1[input.name]);
        input.name==="name" ?(s1.name=this.updateCBs(input.checked,input.value,s1.name)):(s1[input.name]=input.value);
      // if(input.name==="hardDisk") s1.hardDisk=input.value;
        this.props.onChangeOption(s1);
    };

    updateCBs=(checked,value,arr)=>{
        console.log(arr,value,checked);
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex(ele=>ele===value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
    }
    render () {
        const {optionSel,nameOption}=this.props;
        return <div className="container">
            {this.showCheckBox(nameOption.name,"name",optionSel.name)}
        </div>

    }
    showCheckBox=(arr,name,selArr)=>{
        return (
            <React.Fragment>
                {arr.map((t1,index)=>(
                    <div className="form-check">
                        <input 
                        className="form-check-input" 
                        value={t1}  
                        type="radio" 
                        name={name} 
                  //for checkbox     // checked={selArr.findIndex((sel)=>sel===t1) >=0}
                           checked={selArr===t1}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">{t1}</label>
                    </div>
                ))}
            </React.Fragment>
            );
    };
}
export default LeftPanelForm;