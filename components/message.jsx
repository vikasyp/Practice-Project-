import React, {Component} from "react";
class Message extends Component {
    state = {};
    render() {
        const {msg} = this.props;
        const {from,to,subject,text} = msg;
            const textLines = text.split('\n');
            return (
              <div className="row p-2 border">
                <p>
                  From: {from} <br />
                  To: {to} <br />
                  Subject: {subject} <br />
                  {textLines.map((line) => (
                    <div>{line}</div>
                  ))}
                </p>
              </div>
            );
    }
}
export default Message;