import React, {Component} from "react";
class MessagingFolder extends Component {
    state = {};

    render() {
        const {msgFolder,onMessage} = this.props;
        const {id,sent,from,to,subject,read} = msgFolder;
        return (
            <React.Fragment>
            <div className="row p-2 border" onClick={onMessage(id)}>
             {sent=== false ? (
              <React.Fragment>
                {read === true ? (
                    <React.Fragment>
                <div className="col-1">
                <i className="fa fa-envelope-open"></i>
                </div>
                <div className="col-3">{from} 
                </div>
                <div className="col-4">{subject} <br />
                </div>
                </React.Fragment>
                ) : (
                    <React.Fragment>
                    <div className="col-1">
                    <i className="fa fa-envelope"></i>
                    </div>
                    <div className="col-3"> <b> {from} </b>
                    </div>
                    <div className="col-4"><b> {subject} </b> <br />
                    </div>
                    </React.Fragment>
                )}     
              </React.Fragment>
                    ) : (
                <React.Fragment>
                    {read===true ? (
                        <React.Fragment>
                <div className="col-1">
              <i className="fa fa-envelope-open"></i>
              </div>
              <div className="col-3">To : {to} 
              </div>
              <div className="col-4">{subject} <br />
              </div>    
                        </React.Fragment>
                    ) : (
                        <React.Fragment>                
              <div className="col-1">
              <i className="fa fa-envelope"></i>
              </div>
              <div className="col-3"> <b>To : {to}</b>  
              </div>
              <div className="col-4"><b>{subject}</b> 
              </div>        
                        </React.Fragment>
                    )}
              </React.Fragment>
             )}  
            </div>
            </React.Fragment>
                    
        );
    }
}
export default MessagingFolder;