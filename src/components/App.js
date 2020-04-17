import React , {Component} from 'react';
import Login from './Login';

class App extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    render(){
        return (
            <div>
                <h1>hello</h1>
                <Login />
            </div>
        )
    }
};

export default App;