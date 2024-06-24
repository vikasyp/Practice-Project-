import React,{Component} from "react";
class PhotoComp extends Component {


    bgColor = (param) =>
    param === "like"
    ? " bg-success"
    : param === "dislike"
    ? " bg-warning"
    : " bg-light";
    render(){
        const {photo,onLike,ondislike,index,onDelete}=this.props;
        const {img,like,dislike,myOption}=photo;
        console.log(myOption);
        return (
        <div className={"col-4 border text-center" + this.bgColor(myOption) }>
            <img  src={img}></img>
            <br />
            <i className={myOption==="like"?"fas fa-thumbs-up" :"far fa-thumbs-up"} onClick={()=>onLike(index)} >{like}</i>
            <i className={myOption==="dislike" ?"fas fa-thumbs-down":"far fa-thumbs-down"} onClick={()=>ondislike(index)} >{dislike}</i>
            <i className="fa fa-trash-alt" onClick={()=>onDelete(index)} >{dislike}</i>
        </div>
        );
    }
}
export default PhotoComp;