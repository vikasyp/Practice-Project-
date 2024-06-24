import React, { Component } from "react";
import MessagingFolder from "./messagingFolder";
import Message from "./message";
class MessagingApp extends Component {
  state = {
    messagesData: [
      {
        id: 121,
        sent: false,
        from: "tweets@twitter.com",
        to: "jack@test.com",
        subject: "18 tweets from those you follow",
        text: "Go to your twitter page and see the tweets from those you follow.",
        folder: "Social",
        read: true,
      },
      {
        id: 141,
        sent: true,
        from: "jack@test.com",
        to: "mary@test.com",
        subject: "Bug 461 in Customer Flow",
        text: "When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.",
        folder: "Sent",
        read: false,
      },
      {
        id: 158,
        sent: false,
        from: "email@facebook.com",
        to: "jack@test.com",
        subject: "New post from William Jones",
        text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.",
        folder: "Social",
        read: true,
      },
      {
        id: 177,
        sent: true,
        from: "jack@test.com",
        to: "williams@test.com",
        subject: "Movie tomorrow",
        text: "Avengers Endgame is releasing tomorrow. Wanna see.",
        folder: "Sent",
        read: false,
      },
      {
        id: 179,
        sent: false,
        from: "williams@test.com",
        to: "jack@test.com",
        subject: "Re: Movie tomorrow",
        text: "The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 194,
        sent: false,
        from: "retweet@twitter.com",
        to: "jack@test.com",
        subject: "Your tweet has been retweeted by Thomas",
        text: "Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.",
        folder: "Social",
        read: false,
      },
      {
        id: 204,
        sent: true,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "To do on Friday",
        text: "Test the bugs on the employee form in Release 0.7.9 and fix them.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 255,
        sent: true,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "Release 0.8.4 deployed",
        text: "Release 0.8.4 has been deployed in the test environment.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 278,
        sent: false,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "Re: Bug 461 in Customer Flow",
        text: "The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",
        folder: "Inbox",
        read: false,
      },
      {
        id: 281,
        sent: true,
        from: "jack@test.com",
        to: "mary@test.com",
        subject: "Re: Re: Bug 461 in Customer Flow",
        text: "Bug 461 has been closed.\nRegards,\nJack",
        folder: "Sent",
        read: false,
      },
      {
        id: 289,
        sent: false,
        from: "email@facebook.com",
        to: "jack@test.com",
        subject: "5 Shares, 2 Posts from your friends",
        text: "Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.",
        folder: "Social",
        read: true,
      },
    ],
    st: [
      {
        id: 121,
        sent: false,
        from: "tweets@twitter.com",
        to: "jack@test.com",
        subject: "18 tweets from those you follow",
        text: "Go to your twitter page and see the tweets from those you follow.",
        folder: "Social",
        read: true,
      },
      {
        id: 141,
        sent: true,
        from: "jack@test.com",
        to: "mary@test.com",
        subject: "Bug 461 in Customer Flow",
        text: "When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.",
        folder: "Sent",
        read: false,
      },
      {
        id: 158,
        sent: false,
        from: "email@facebook.com",
        to: "jack@test.com",
        subject: "New post from William Jones",
        text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.",
        folder: "Social",
        read: true,
      },
      {
        id: 177,
        sent: true,
        from: "jack@test.com",
        to: "williams@test.com",
        subject: "Movie tomorrow",
        text: "Avengers Endgame is releasing tomorrow. Wanna see.",
        folder: "Sent",
        read: false,
      },
      {
        id: 179,
        sent: false,
        from: "williams@test.com",
        to: "jack@test.com",
        subject: "Re: Movie tomorrow",
        text: "The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 194,
        sent: false,
        from: "retweet@twitter.com",
        to: "jack@test.com",
        subject: "Your tweet has been retweeted by Thomas",
        text: "Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.",
        folder: "Social",
        read: false,
      },
      {
        id: 204,
        sent: true,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "To do on Friday",
        text: "Test the bugs on the employee form in Release 0.7.9 and fix them.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 255,
        sent: true,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "Release 0.8.4 deployed",
        text: "Release 0.8.4 has been deployed in the test environment.",
        folder: "Inbox",
        read: false,
      },
      {
        id: 278,
        sent: false,
        from: "mary@test.com",
        to: "jack@test.com",
        subject: "Re: Bug 461 in Customer Flow",
        text: "The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",
        folder: "Inbox",
        read: false,
      },
      {
        id: 281,
        sent: true,
        from: "jack@test.com",
        to: "mary@test.com",
        subject: "Re: Re: Bug 461 in Customer Flow",
        text: "Bug 461 has been closed.\nRegards,\nJack",
        folder: "Sent",
        read: false,
      },
      {
        id: 289,
        sent: false,
        from: "email@facebook.com",
        to: "jack@test.com",
        subject: "5 Shares, 2 Posts from your friends",
        text: "Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.",
        folder: "Social",
        read: true,
      },
    ],
    selectedFolder: "All",
    selectMessageId : null,
  };

  handleFolders = (str) => {
    let s1 = { ...this.state };
    s1.selectedFolder = str;
    s1.messagesData = s1.st.filter((n) => n.folder === str);
    this.setState(s1);
  };

  handleAll = () => {
    let s1 = { ...this.state };
    s1.selectedFolder = "All";
    s1.messagesData = s1.st.filter(
      (n) =>
        n.folder === "Inbox" || n.folder === "Sent" || n.folder === "Social"
    );
    this.setState(s1);
  };

handleMessage = (id) => {
    return () => {
        let s1 = {...this.state};
        let index = s1.messagesData.findIndex((n)=>n.id===id);
        s1.messagesData[index].read = true;
        s1.selectMessageId= id;
        this.setState(s1);
    }
}

handleBack = () => {
  let s1 = {...this.state};
        s1.selectMessageId = null;
        this.setState(s1);
}

handleDelete = (id) => {
  let s1 = {...this.state};
  let index = s1.messagesData.findIndex((n)=>n.id===id);
  s1.messagesData.splice(index,1);
  s1.selectMessageId = null;
  this.setState(s1);
}

  render() {
    const { messagesData, selectedFolder,selectMessageId } = this.state;
    const unRead = messagesData.filter((a) => a.read === false);
    const selectedMessage = messagesData.find((message) => message.id === selectMessageId);
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              EmailApp
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Message
                    <span className="badge badge-pill badge-secondary">
                      ({messagesData.length})
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Unread
                    <span className="badge badge-pill badge-secondary">
                      ({unRead.length})
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="col-2 text-white bg-dark"
            style={{ height: `${this.state.rowHeight}px` }}
          >
            <h3>Folders</h3>
            <p
              className={selectedFolder === "All" ? "bg-white text-dark" : ""}
              onClick={() => this.handleAll()}
            >
              All
            </p>
            <p
              className={selectedFolder === "Inbox" ? "bg-white text-dark" : ""}
              onClick={() => this.handleFolders("Inbox")}
            >
              Inbox
            </p>
            <p
              className={
                selectedFolder === "Social" ? "bg-white text-dark" : ""
              }
              onClick={() => this.handleFolders("Social")}
            >
              Social
            </p>
            <p
              className={selectedFolder === "Sent" ? "bg-white text-dark" : ""}
              onClick={() => this.handleFolders("Sent")}
            >
              Sent
            </p>
          </div>
          <div className="col-10">
          {selectMessageId ? (
              <div>
                <i className="fa fa-arrow-left" onClick={()=>this.handleBack()}></i>
                <i className="fa fa-trash mt-1"  onClick={()=>this.handleDelete(selectMessageId)} style={{ float: 'right' }}></i>
                <Message msg = {selectedMessage}/>
                </div>
                ) : (
            <React.Fragment>
            {messagesData.map((p1) => {
              return <MessagingFolder msgFolder={p1} onMessage={()=>this.handleMessage(p1.id)}/>
            })}
            </React.Fragment>
                )}
          </div>
        </div>
      </div>
    );
  }
}
export default MessagingApp;