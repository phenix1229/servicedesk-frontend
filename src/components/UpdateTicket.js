import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class UpdateTicket extends Component {
    constructor(){
        super()
        this.state = {
            ticket:{
                openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:'', 
                objectId : new Date().getTime(),
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
        this.props.handleUpdateTicketSubmit(event, this.state.ticket, this.props.ticket._id)
        let emptyTicket= {openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:''};
        this.setState({ticket :emptyTicket});
        event.target.reset();
    };
    render(){
        return (
            <div style={{margin:'40px'}}>
                <h1>Update Ticket:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Opened By</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                name="openedBy"
                                defaultValue={this.props.ticket.openedBy}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Client</label>
                                <div className="ui fluid input">
                                    <input type="text" 
                                        name="client"
                                        defaultValue={this.props.ticket.client}
                                        onChange={this.handleChange}
                                    />
                                </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Issue</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="issue"
                                    defaultValue={this.props.ticket.issue}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Resolution</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="resolution"
                                    defaultValue={this.props.ticket.resolution}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Closed By</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="closedBy"
                                    defaultValue={this.props.ticket.closedBy}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Close Date</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="closeDate"
                                    defaultValue={this.props.ticket.closeDate}
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
    blog: 
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

export default UpdateTicket;