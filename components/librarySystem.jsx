 import React,{Component} from "react";
import Book from "./book";
class LibrarySystem extends Component {
    state={
        books:[
            {name:"Harry Potter",author:"Jk Rowling", issue:false},
            {name:"War and Peace",author:"Leo Tolstoy", issue:false},
            {name:"Malgudi Days",author:"RK Narayan", issue:false},
            {name:"Gitanjali",author:"RN Tagore", issue:false},
        ],
        issueBook:[]
    };
    handleIssued=(index)=>{
        let s1={...this.state};
        s1.issueBook.push(s1.books[index]);
        s1.books[index].issue=true;
        s1.books.splice(index,1);
        this.setState(s1);
    }

    handleReturn=(name)=>{
        return ()=>{
        let s1={...this.state};
      let index=  s1.issueBook.findIndex(c1=>c1.name===name);
        s1.books[index].issue=false;
        s1.books.push(s1.issueBook[index]);
        s1.issueBook.splice(index,1);
        this.setState(s1);
        };
    }
    render(){
        const {books,issueBook}=this.state;
        return (
         <div className="container">
             <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Library</a>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books
                            <span className="badge badge-pill badge-secondary">
                                {books.length}
                            </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Issued
                                <span className="badge badge-pill badge-secondary">{issueBook.length}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <h3 className="text-center">Books in Library</h3>
            {books.length===0?( <h3>Library is Empty</h3> ):
           ( <div className="row">
            {books.map((n1,index)=>(
                <Book books={n1} index={index} onsetIssued={this.handleIssued}/>
            ))}
        </div>
        )}
        <h6 >Issued Books</h6>
        {issueBook.length===0?( <p>No Book has been Issued</p> ) :(
        <ul>
            {issueBook.map((l1)=>(
            <li>
               {l1.name} 
               <button className='btn btn-danger btn-sm m-2' onClick={this.handleReturn(l1.name)}>Return</button>
                </li>
            ))}
        </ul>
        )}
        </div>
        );
    }
}
export default LibrarySystem;