import React,{Component} from "react";
class LeftPanelForm2 extends Component{

    handleChange=(e)=>{
        let s1={...this.props.optionSel};
        let {currentTarget : input}=e;
        console.log(input.name);
        console.log(s1[input.name]);
        input.name==="stock" ? (s1.stock=this.updateCBs(input.name,input.value,s1.stock)):
        input.name==="category" ?(s1.category=this.updateCBs(input.checked,input.value,s1.category)):(s1[input.name]=input.value);
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
            {this.showCheckBox("Category",nameOption.category,"category",optionSel.category)}
            {this.showRadios("Stock",nameOption.stock,"stock",optionSel.stock)}
        </div>

    }
    showCheckBox=(label,arr,name,selArr)=>{
        return (
            <React.Fragment>
                <label className="form-check-label font-weight-bold">{label}</label>
                {arr.map((t1,index)=>(
                    <div className="form-check">
                        <input 
                        className="form-check-input" 
                        value={t1}  
                        type="checkbox" 
                        name={name} 
                        checked={selArr.findIndex((sel)=>sel===t1) >=0}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">{t1}</label>
                    </div>
                ))}
            </React.Fragment>
            );
    };
    showRadios=(label,arr,name,selVal)=>{
        return(
        <React.Fragment>
            <label className="form-check-label font-weight-bold">{label}</label>
        {arr.map((t1)=>(
            <div className="form-check">
                <input 
                className="form-check-input" 
                type="radio" 
                name={name} 
                value={t1}  
                checked={selVal===t1} 
                onChange={this.handleChange}/>
                <label className="form-check-label">{t1}</label>
            </div>
        ))}
    </React.Fragment>
        );
    }
}
export default LeftPanelForm2;