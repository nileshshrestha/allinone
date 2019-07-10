import React from 'react';
import SockJsClient from 'react-stomp';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          msg : 'hi'
        }
    }

    sendMessage = (msg) => {
      this.clientRef.sendMessage('/topic/greeting', msg);
    }

    render(){

        return(

            <React.Fragment>
              <SockJsClient url='http://localhost:7001/websocket' topics={['/topic/greeting']}
              onMessage={(msg) => { console.log(msg.msg); this.setState({msg:msg.msg}); }}
              ref={ (client) => { this.clientRef = client }} />
                <header className="header">Defualt Header</header>
                <section className="body">{this.state.msg}</section>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}
