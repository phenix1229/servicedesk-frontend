import React , {Component} from 'react';
import Navbar from "./layout/NavBar";
import Landing from "./layout/Landing";

class App extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    render(){
        return (
            <div className="App">
                <Navbar />
                <Landing />
            </div>
        )
    }
};

export default App;