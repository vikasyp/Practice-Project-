import React,{Component} from 'react';
class Book extends Component {
    state={};
    render (){
        const { books,index,onsetIssued}=this.props;
        const {name,author}=books
        return (
        <div className='col-4 m-2 border text-dark ' style={{background:"pink" }}>
                    {name} <br />
                    {author}
                    <br />
                    <button className='btn btn-light btn-sm' onClick={()=>onsetIssued(index)}>Issue</button>
            </div>
        );
    }
}
export default Book;