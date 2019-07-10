import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <header className="header">Defualt Header</header>
                <section className="body">
                    <h1 className="title">Hello Stomp</h1>
                </section>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}
