import React , {Component} from 'react'


class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
           
        };
    };

onClickMe = () => {
    console.log(this)
};

handleSomething= () =>{
    this.setState({somethingText: 'Clicked on Handle Something'})
};

render (){

    return (
        <div id='sidebar'>
            <h1>Menu</h1>
           
        </div>
    )
}}


export default Sidebar;