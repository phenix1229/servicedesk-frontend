import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class CreateTicket extends Component {
    constructor(){
        super()
        this.state = {
            ticket:{
                openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:'', 
                // objectId : new Date().getTime(),
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
        this.props.handleCreateTicketSubmit(event, this.state.ticket)
        let emptyTicket= {openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:''};
        this.setState({ticket :emptyTicket});
        event.target.reset();
    };
    render(){
        return (
            <div style={{margin:'40px'}}>
                <h1 style={{color:'rgb(107, 105, 105)'}}>Create Ticket:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Opened By</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Opened by..."
                                name="openedBy"
                                value={this.state.ticket.openedBy}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Client</label>
                                <div className="ui fluid input">
                                    <input type="text" placeholder="Client..."
                                        name="client"
                                        value={this.state.ticket.client}
                                        onChange={this.handleChange}
                                    />
                                </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Issue</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Issue..."
                                    name="issue"
                                    value={this.state.ticket.issue}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Resolution</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Resolution..."
                                    name="resolution"
                                    value={this.state.ticket.resolution}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Closed By</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Closed by..."
                                    name="closedBy"
                                    value={this.state.ticket.closedBy}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Close Date</label>
                            <div className="ui fluid input">
                                <input type="text" placeholder="Close date..."
                                    name="closeDate"
                                    value={this.state.ticket.closeDate}
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

CreateTicket.propTypes = {
    handleCreateTicketSubmit: PropTypes.func,
}

export default CreateTicket;