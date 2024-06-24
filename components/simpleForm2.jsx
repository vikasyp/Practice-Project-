import React,{Component} from "react";
class SimpleForm2 extends Component{
    state={
        person:this.props.person,
        countries:[
            "India",
            "USA",
            "France",
            "Japan",
            "China",
        ],
        countryList: [
            {country: "India",
            cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
            {country: "USA",
            cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"]},
            {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
            {country: "Japan", cities: ["Tokyo", "Kyoto"]},
            {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]}
        ],
    };

    handleChange=(e)=>{
        const {currentTarget :input}=e;
        let s1={...this.state};
        console.log(input.name);
        console.log(s1.person.techsKnown);
        console.log(s1.person[input.name]);
      //  input.type === "checkbox"
       //? input.name==="techsKnown" 
       //? (s1.person.techsKnown = this.updateCBs(input.checked,input.value,s1.person.techsKnown))
       //: input.name==="access" 
      // ? (s1.person.techsKnown = this.updateCBs(input.checked,input.value,s1.person.access))
       // : (s1.person[input.name] = input.checked)
       // : (s1.person[input.name]=input.value);
        s1.person[input.name]=input.value;
        if(input.name==="country") s1.person.city="";
       // if(!s1.person.passport) s1.person.passportNumber="";
        this.setState(s1);
    };

    updateCBs=(checked,value,arr)=>{
        console.log(arr,value,checked);
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex(ele=>ele===value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.person);
    };

    render (){
        let {country,city}=this.state.person;
        const {countries,countryList}=this.state;
        const cities=country?countryList.find(c1=>c1.country===country).cities:[];
        console.log(country);
        return (
            <div className="container">
                <h5>Enter New Details</h5>
               
                <div className="form-group" >
                    <label >Country</label>
                    <select className="form-control" name="country"  value={country} onChange={this.handleChange} >
                        <option disabled value="">Select the Country </option>
                        {countries.map((c1) => (
                            <option >{c1}</option>
                        ))}
                    </select>
                </div>
                {country?(<div className="form-group" >
                    <label >City</label>
                    <select className="form-control" name="city"  value={city} onChange={this.handleChange} >
                        <option >Select the City </option>
                        {cities.map((c1)=>(
                            <option>{c1}</option>
                        ))}
                    </select>
                </div>):""}
               
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default SimpleForm2;