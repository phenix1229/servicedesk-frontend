import React , {Component} from 'react';
import Search from './Search';
import axios from 'axios';


class Sidebar extends Component {
    logout = () => {
        axios.get('/users/logout');
        this.props.logoutUser();
    }
    render (){
        return (
            <div id='sidebar'>
                <div>
                    <h1 id='appTitle'>ServiceDesk&copy;</h1>
                    <h5 id='appSubtitle'>Ticket Tracker</h5>
                </div>
                <Search handleChange={this.props.handleChange} searchTerm={this.props.searchTerm} />
                <br /> 
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}} onClick={this.props.handleCreateTicket}>
                    <h3>New Ticket</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}} onClick={this.props.loadOpenTickets}>
                    <h3>Open Tickets</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}} onClick={this.props.loadClosedTickets}>
                    <h3>Closed Tickets</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)'}} onClick={this.logout}>
                    <h3>Logout</h3>
                </button>
            </div>
        )
    }
}


export default Sidebar;