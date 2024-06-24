import React,{Component} from "react";
class JslTask6 extends Component{
    state={
        posts: [
            {postId: 255,heading: "World Cup Semi-final",postedBy: "Vishal",numOfLikes: 45,numOfShares: 10,txt: "India lost to New Zealand in the world cup. Very Bad."},
            {postId: 377,heading: "What a final",postedBy: "Mohit",numOfLikes: 18,numOfShares: 4,txt: "Was anyone awake to see the final. England won by boundary count."},
            {postId: 391,heading: "Was it 5 runs on 6 six runs",postedBy: "Preeti",numOfLikes: 29,numOfShares: 7,txt:"I feed sorry for New Zealand. If the ball had not hit the bat and no overthrows, New Zealand would have won."},
            {postId: 417,heading: "Will Dhoni retire",postedBy: "Hemant",numOfLikes: 66,numOfShares: 24,txt:"Is this Dhoni's final match. Will be ever see Dhoni playing for India."}
        ],

    };
    likes=(index)=>{
       let s1={...this.state};
      let ind= s1.posts[index];
       ind.numOfLikes+=1;
       this.setState(s1);
    }
    shared=(index)=>{
        let s1={...this.state};
        let ind= s1.posts[index];
        ind.numOfShares+=1;
        this.setState(s1);
     }
    render(){
        const {posts}=this.state;
        return(
            <div className="container ">
            <React.Fragment>
            {posts.map((l1,index)=>{
                return(
                <div className="border">
                <h4>{l1.heading}</h4>
                <h6>{"Shared by :"+l1.postedBy}</h6>
                <p>{l1.txt}</p>
                <div>{"Likes :"+l1.numOfLikes} 
                <button className="btn btn-primary btn-sm" onClick={()=>this.likes(index)}>Like</button>
                {"Shared :"+l1.numOfShares} 
                <button className="btn btn-primary btn-sm" onClick={()=>this.shared(index)}>Share</button>
                </div>
                </div>
                );
            })}
            </React.Fragment>
            </div>
        )
    }
}
export default JslTask6;