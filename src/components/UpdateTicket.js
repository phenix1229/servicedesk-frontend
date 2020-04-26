import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const today = () =>{
    return `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()} (${new Date().getHours()}:${new Date().getMinutes()})`;
};

class UpdateTicket extends Component {
    constructor(){
        super()
        this.state = {
            ticket:{
                comments:[] 
            }
        };
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        let updatedTicket = {comments:[]};
        this.props.ticket.comments.push(`${today()} - ${document.getElementById('comment').value}`);
        updatedTicket.comments=[...this.props.ticket.comments];
        this.props.handleUpdateTicketSubmit(event, updatedTicket, this.props.ticket._id);
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
                                    id="comment"
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