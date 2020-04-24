import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class CloseTicket extends Component {
    constructor(){
        super()
        this.state = {
            ticket:{
                resolution:'', closedBy:'', closeDate:'', closed:true 
            }
        };
    };
    handleChange=(event)=>{
        let updatedTicket = { ...this.state.ticket}
        updatedTicket[event.target.name]=event.target.value;
        this.setState({ticket:updatedTicket}, () => {
            console.log(updatedTicket)
        })
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleUpdateTicketSubmit(event, this.state.ticket, this.props.ticket._id);
        // let emptyTicket= {openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:''};
        // this.setState({ticket :emptyTicket});
        // event.target.reset();
    };
    render(){
        return (
            <div style={{margin:'40px'}}>
                <h1 style={{color:'rgb(107, 105, 105)'}}>Close Ticket:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Resolution</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="resolution"
                                    defaultValue={this.props.ticket.resolution}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <Button type="submit" className="ui button">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
};

CloseTicket.propTypes = {
    handleUpdateBlogSubmit: PropTypes.func,
    ticket: 
        PropTypes.shape({
            openedBy: PropTypes.string.isRequired,
            client: PropTypes.string.isRequired,
            issue: PropTypes.string.isRequired,
            resolution: PropTypes.string.isRequired,
            closedBy: PropTypes.string.isRequired,
            closeDate: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        })
}

export default CloseTicket;