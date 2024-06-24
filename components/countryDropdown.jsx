import React,{Component} from "react";
class CountryDropdown extends Component{
    state={
        person:{
            name:"",
            age:"",
            country:"",
            gender:"",
            passport:"",
            license:"",
            city:"",
            passportNumber:"",
            designation:"",
            techsKnown: [],
        },
        countries:[
            "United States of America",
            "Canada",
            "India",
            "United Kingdom",
        ],
        countryList:[
            {country:"United States of America",
             cities:["New York","Los Angeles","Settle","San Fracisco"],
           },
           {
            country:"India",
            cities:["New Delhi","Bengaluru","Pune","Chennai"],
           },
        ],
        designations:[
            "Developer",
            "Senior Developer",
            "Team Lead",
            "Architect",
            "Delivery Manager",
        ],
        techs:["React","JavaScript","JQuery","AngularJS"],
    };

    handleChange=(e)=>{
        const {currentTarget :input}=e;
        let s1={...this.state};
        console.log(input.name);
        console.log(s1.person.techsKnown);
        console.log(s1.person[input.name]);
        input.type === "checkbox"
       ? input.name==="techsKnown" 
       ? (s1.person.techsKnown = this.updateCBs(input.checked,input.value,s1.person.techsKnown))
        : (s1.person[input.name] = input.checked)
        : (s1.person[input.name]=input.value);
        //s1.person[input.name]=input.value;
        if(input.name==="country") s1.person.city="";
        if(!s1.person.passport) s1.person.passportNumber="";
        this.setState(s1);
    };

    updateCBs=(checked,value,arr)=>{
        console.log(arr);
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex(ele=>ele===value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
    };

    render (){
        let {name,age,country,gender,passport,license,city,passportNumber,designation,techsKnown}=this.state.person;
        const {countries,countryList,designations,techs}=this.state;
        const cities=country?countryList.find(c1=>c1.country===country).cities:[];
        console.log(techsKnown,techsKnown.length);
        return (
            <div className="container">
                <h5>Enter New Details</h5>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" value={name} onChange={this.handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age</label>
                    <input type="text" className="form-control" id="age" name="age" placeholder="Enter Age" value={age} onChange={this.handleChange} />
                </div>
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
                <div className="form-check form-check-inline">
                    <input type="radio" name="gender" value="Male"  checked={gender==="Male"} onChange={this.handleChange}/>
                    <label>Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="gender" value="Female"  checked={gender==="Female"} onChange={this.handleChange}/>
                    <label>Female</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" name="passport" className="form-check-input"  checked={passport} onChange={this.handleChange} />
                    <label className="form-check-label">Passport</label>
                </div>
                {passport?( <div className="form-group">
                    <label>Passport Number</label>
                    <input type="text" className="form-control" id="passportNumber" name="passportNumber" placeholder="Enter the Passport Number" value={passportNumber} onChange={this.handleChange}  />
                </div>):("")}
                <div className="form-check">
                    <input type="checkbox" name="license" className="form-check-input"  checked = {license} onChange={this.handleChange} />
                    <label className="form-check-label">License</label>
                </div>
                <label className="form-check-label font-weight-bold">Choose the Designation</label> <br />
                {designations.map((d1)=>(
                     <div className="form-check">
                     <input type="radio" name="designation" value={d1}  checked={designation === d1} onChange={this.handleChange}/>
                     <label className="form-check-label">{d1}</label>
                 </div>
                ))}
                <label className="form-check-label font-weight-bold">Choose the </label> <br />
                  {techs.map((d1)=>(
                     <div className="form-check">
                     <input type="checkbox" name="techsKnown" value={d1}  checked={techsKnown.length > 0 && techsKnown.findIndex((t1)=> t1 === d1) >=0 } onChange={this.handleChange}/>
                     <label className="form-check-label">{d1}</label>
                 </div>
                ))}

                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
export default CountryDropdown;