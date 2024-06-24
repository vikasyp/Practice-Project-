import React,{Component} from "react";
import LeftPanelForm1 from "./leftPanelForm1";
class MainPanelComponent1 extends Component{
    state={
        laptops:[
            {
                model:"AX4581",
                brand:"Acer",
                ram:"4GB",
                hardDisk:"500GB",
                rating:"3",
                processor:"i3",
            },
            {
                model:"HB2881",
                brand:"HP",
                ram:"4GB",
                hardDisk:"250GB",
                rating:"4",
                processor:"i3",
            },
            {
                model:"DM811",
                brand:"Dell",
                ram:"4GB",
                hardDisk:"1TB",
                rating:"3",
                processor:"i3",
            },
            {
                model:"AP629",
                brand:"Acer",
                ram:"6GB",
                hardDisk:"1TB",
                rating:"2",
                processor:"i3",
            },
            {
                model:"AT820",
                brand:"Acer",
                ram:"8GB",
                hardDisk:"1TB",
                rating:"4",
                processor:"i5",
            },
            {
                model:"HK008",
                brand:"HP",
                ram:"6GB",
                hardDisk:"250GB",
                rating:"3",
                processor:"i5",
            },
            {
                model:"MAir11",
                brand:"Apple",
                ram:"4GB",
                hardDisk:"128GB",
                rating:"4",
                processor:"i5",
            },
            {
                model:"MPro24X",
                brand:"Apple",
                ram:"8GB",
                hardDisk:"256GB",
                rating:"4",
                processor:"i7",
            },
            {
                model:"DL390",
                brand:"Dell",
                ram:"6GB",
                hardDisk:"500GB",
                rating:"3",
                processor:"i3",
            },
            {
                model:"AM954",
                brand:"Acer",
                ram:"8GB",
                hardDisk:"1TB",
                rating:"3",
                processor:"i7",
            },
            {
                model:"AB234",
                brand:"Acer",
                ram:"4GB",
                hardDisk:"250GB",
                rating:"2",
                processor:"i3",
            },
            {
                model:"HC874",
                brand:"HP",
                ram:"8GB",
                hardDisk:"1TB",
                rating:"1",
                processor:"i7",
            },
        ],
        optionsArray:{
             brand:["Acer","HP","Dell","Apple"],
             ram:["4GB","6GB","8GB",],
             rating:["1","2","3","4"],
             processor:["i3","i5","i7"],
             hardDisk: ["128GB","250GB","256GB","500GB","1TB"],
        },
        optionSel:{
            brand:[],
            ram:[],
            processor:"",
            rating:"",
            hardDisk:[],
        },
    };
    showLaptops=()=>{
        const {laptops,optionSel}=this.state;
        const {brand,ram,processor,rating,hardDisk=[]}=optionSel;
        const laptop1=brand.length>0?laptops.filter((lt)=>brand.findIndex((br)=>br===lt.brand)>=0):laptops;
        const laptop2=ram.length>0? laptop1.filter((lt)=>ram.findIndex((br)=>br===lt.ram)>=0):laptop1;
        const laptop3=processor.length>0?laptop2.filter((lt)=>lt.processor===processor):laptop2;
        const laptop4=rating>0?laptop3.filter((lt)=>lt.rating===rating):laptop3;
        const laptop5=hardDisk.length>0?laptop4.filter((lt)=>lt.hardDisk===hardDisk):laptop4;
        console.log(laptop5);
        console.log(optionSel);
        return  (
        <div className="container">
             <h4>Selected laptops</h4>
           {laptop5.map((lt)=>
              (<div className="row">
                <div className="col-2 border">{lt.model}</div>
                <div className="col-2 border">{lt.brand}</div>
                <div className="col-2 border">{lt.ram}</div>
                <div className="col-2 border">{lt.hardDisk}</div>
                <div className="col-2 border">{lt.rating}</div>
                <div className="col-2 border">{lt.processor}</div>
              </div>
              ))}
            </div>
        );
    };
    handleClear=()=>{
        let s1={...this.state};
        s1.optionSel ={
            brand:[],
            ram:[],
            processor:"",
            rating:"",
            hardDisk:"",
        };
        this.setState(s1);
    };
    handleChangOption=(optionSel)=>{
        let s1={...this.state};
        s1.optionSel =optionSel;
        this.setState(s1);
    }
    render(){
        const {optionsArray,optionSel,hardDisk}=this.state;
        return <div className="container">
            <div className="row">
                <div className="col-3 botder bg-light">
                    <LeftPanelForm1  
                    optionSel={optionSel}
                    hardDisk={hardDisk} 
                    optionsArray={optionsArray} 
                    onChangeOption={this.handleChangOption} 
                    onClear={this.handleClear} />
                </div>
                <div className="col-9 border">{this.showLaptops()}</div>
            </div>
        </div>
    }
}
export default MainPanelComponent1;