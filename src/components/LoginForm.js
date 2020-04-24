import React, {Component} from 'react';
import axios from 'axios';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            user:{name:'', email:'', password:''},
        };
    };
    handleChange=(event)=>{
        let updatedUser = { ...this.state.user}
        updatedUser[event.target.name]=event.target.value;
        this.setState({user:updatedUser}, () => {
        })
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.login(event, this.state.user)
    }
    login(event, user) {
        event.preventDefault();
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.post('/users/login', user, axiosConfig)
        .then(response => {
        if (response) {
            this.props.updateUser(
                response.data
            )
        }
    })
}
    render(){
        return (
            <div style={{margin:'40px'}}>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Email</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Email..."
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>password</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Password..."
                                    name="password"
                                    value={this.state.user.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
};


export default LoginForm;