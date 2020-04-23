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
                <p>
                <h1 id='appTitle'>ServiceDesk</h1>
                <h5 id='appSubtitle'>Ticket Tracker</h5>
                </p>
                <Search handleChange={this.props.handleChange} searchTerm={this.props.searchTerm} />
                <br /> 
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}} onClick={this.props.handleCreateTicket}>
                    <h3>New Ticket</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}}>
                    <h3>Open Tickets</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)', marginBottom:'10px'}}>
                    <h3>Closed Tickets</h3>
                </button>
                <button className="ui primary button" style={{ backgroundColor:'#F2F2F2', color:'rgb(107, 105, 105)'}}>
                    <h3>Logout</h3>
                </button>
            </div>
        )
    }
}


export default Sidebar;