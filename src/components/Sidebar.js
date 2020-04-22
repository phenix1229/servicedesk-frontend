import React , {Component} from 'react';
import Search from './Search';


class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        };
    };

    render (){
        return (
            <div id='sidebar'>
                <h1>Menu</h1>
                <Search handleChange={this.props.handleChange} searchTerm={this.props.searchTerm} />
                <br />
                <h3>New Ticket</h3>
                <h3>Logout</h3>
            </div>
        )
    }
}


export default Sidebar;