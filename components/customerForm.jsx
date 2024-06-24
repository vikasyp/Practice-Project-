import React, {Component} from "react";
class CustomerForm extends Component {
    state = {
        custumer : this.props.custumer,
        deliveryOption:["Home","Ofice","Pickup"],
        paymentOption:["Credit Card","Debit Card","Net Banking"],
        slotOption:["2pm-6pm","Before 10AM"],
    };

    handleChange = (e) => {
        let s1 = {...this.state};
        s1.custumer[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.custumer);
    };

    render() {
        let { name,gender,delivery,payment=[],slot } = this.state.custumer;
        const {deliveryOption,paymentOption,slotOption}=this.state;
        return (
            <div className="container">
                <div className="form-group">
                <label>Name</label>
                <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                />
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="gender" value="Male"  checked={gender==="Male"} onChange={this.handleChange}/>
                    <label>Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="gender" value="Female"  checked={gender==="Female"} onChange={this.handleChange}/>
                    <label>Female</label>
                </div> <br />
                <label className="form-check-label font-weight-bold">Choose the Delivery options</label> <br />
                {deliveryOption.map((d1)=>(
                     <div className="form-check">
                     <input type="radio" name="delivery" value={d1}  checked={delivery === d1} onChange={this.handleChange}/>
                     <label className="form-check-label">{d1}</label>
                 </div>
                ))}
                  <label className="form-check-label font-weight-bold">Choose the Access </label> <br />
                  {paymentOption.map((d1)=>(
                     <div className="form-check">
                     <input type="checkbox" name="payment" value={d1}  checked={payment> 0 && payment.findIndex((t1)=> t1 === d1) >=0 } onChange={this.handleChange}/>
                     <label className="form-check-label">{d1}</label>
                 </div>
                ))}
                <div className="form-group" >
                    <select className="form-control m-2" name="slot"  value={slot} onChange={this.handleChange} >
                        <option disabled value="">Select the slots </option>
                        {slotOption.map((c1) => (
                            <option >{c1}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary m-2"
                 onClick={this.handleSubmit}>
                Submit
                </button>
            </div>
        )
    }
}
export default CustomerForm;