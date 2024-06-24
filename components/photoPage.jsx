import React, {Component} from "react";
import PhotoComp from "./photoComp";
class PhotoPage extends Component {
    state ={
        photos:[
            {
                img:"https://picsum.photos/id/1032/240/160",
                like:23,
                dislike:2,
                myOption:"",
            },
            {
                img:"https://picsum.photos/id/1051/240/160",
                like:8,
                dislike:0,
                myOption:"",
            },
            {
                img:"https://picsum.photos/id/1079/240/160",
                like:83,
                dislike:37,
                myOption:"",
            },
            {
                img:"https://picsum.photos/id/1084/240/160",
                like:19,
                dislike:1,
                myOption:"like",
            },
            {
                img:"https://picsum.photos/id/122/240/160",
                like:77,
                dislike:16,
                myOption:"like",
            },
            {
                img:"https://picsum.photos/id/164/240/160",
                like:6,
                dislike:3,
                myOption:"",
            },
        ],
    }
    handleLike=(index)=>{
        let s1={...this.state};
        let photo=s1.photos[index];
        let {like,dislike,myOption}=photo;
        if(myOption==="like"){
            like--;
            myOption="";
        }
        else if(myOption==="dislike"){
            like++;
            dislike--;
            myOption="like";
        }
        else{
            like++;
            myOption="like";
        }
        photo.like=like;
        photo.dislike=dislike;
        photo.myOption=myOption;
        this.setState(s1);
    };

    handleDislike=(index)=>{
        let s1={...this.state};
        let photo=s1.photos[index];
        let {like,dislike,myOption}=photo;
        if(myOption==="dislike"){
            dislike--;
            myOption="";
        }
        else if(myOption==="like"){
            like--;
            dislike++;
            myOption="dislike";
        }
        else{
            dislike++;
            myOption="like";
        }
        photo.like=like;
        photo.dislike=dislike;
        photo.myOption=myOption;
        this.setState(s1);
    };

    handleDelete =(index)=>{
        let s1={...this.state};
        s1.photos.splice(index,1);
        this.setState(s1);
    }
    render (){
        const {photos}=this.state;
        return <div className="container">
            <div className="row">
                {photos.map((p1,index)=>(
                    <PhotoComp photo={p1} index={index} onLike={this.handleLike} ondislike={this.handleDislike} onDelete={this.handleDelete}/>
                ))}
            </div>
        </div>
    }
}
export default PhotoPage;