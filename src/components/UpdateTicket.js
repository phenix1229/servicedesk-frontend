import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class UpdateTicket extends Component {
    constructor(){
        super()
        this.state = {
            ticket:{
                comments:[] 
            }
        };
    };
    handleChange=(event)=>{
        let updatedTicket = {...this.state.ticket}
        this.props.ticket.comments.push(event.target.value);
        const newComments = [...this.props.ticket.comments]
        updatedTicket.comments=newComments
        this.setState({ticket:updatedTicket}, () => {
        })
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleUpdateTicketSubmit(event, this.state.ticket, this.props.ticket._id);
    };
    render(){
        return (
            <div style={{margin:'40px'}}>
                <h1 style={{color:'rgb(107, 105, 105)'}}>Update Ticket:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Comment</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="comments"
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

UpdateTicket.propTypes = {
    handleUpdateBlogSubmit: PropTypes.func,
    ticket: 
        PropTypes.shape({
            openedBy: PropTypes.string,
            client: PropTypes.string,
            issue: PropTypes.string,
            resolution: PropTypes.string,
            closedBy: PropTypes.string,
            closeDate: PropTypes.string,
            _id: PropTypes.string,
            comments: PropTypes.array
        })
};

export default UpdateTicket;