import React,{Component} from "react";
class LeftPanelForm1 extends Component{

    handleChange=(e)=>{
        let s1={...this.props.optionSel};
        let {currentTarget : input}=e;
        console.log(input.name);
        console.log(s1.hardDisk);
        console.log(s1[input.name]=input.value);
        input.name==="hardDisk" ? (s1.hardDisk=this.updateCBSs(input.name,input.value,s1.hardDisk)):
        input.name==="brand" ?(s1.brand=this.updateCBs(input.checked,input.value,s1.brand)):input.name==="ram"? (s1.ram=this.updateCBs(input.checked,input.value,s1.ram)):(s1[input.name]=input.value);
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
        const {optionSel,optionsArray,}=this.props;
        return <div className="container">
            <h6>Choose Options</h6>
            <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>Clear All</button>
            <br />
            {this.showCheckBox("Brand",optionsArray.brand,"brand",optionSel.brand)}
            {this.showCheckBox("Ram",optionsArray.ram,"ram",optionSel.ram)}
            {this.showRadios("Processor",optionsArray.processor,"processor",optionSel.processor)}
            {this.showRadios("Ratings",optionsArray.rating,"rating",optionSel.rating)}
            {this.showHardiskOption("Hardisks",optionsArray.hardDisk,"hardDisk")}
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
    showHardiskOption=(label,arr,name)=>{
        return (
            <React.Fragment>
                <div className="form-group" >
                    <label className="form-check-label font-weight-bold">{label}</label>
                    <select className="form-control" name={name}  value={name} onChange={this.handleChange} >
                        <option disabled value="">Select the Hardisk </option>
                        {arr.map((c1) => (
                            <option >{c1}</option>
                        ))}
                    </select>
                </div>
            </React.Fragment>
        )
    }
}
export default LeftPanelForm1;