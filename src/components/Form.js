import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            ticket:{openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:''},
            tickets:[]
        };
    };
    handleChange=(event)=>{
        let updatedTicket = { ...this.state.ticket}
        updatedTicket[event.target.name]=event.target.value;
        this.setState({blog:updatedTicket}, () => {
            console.log(updatedTicket)
        })
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        let emptyTicket= {openedBy:'', client:'', issue:'', resolution:'', closedBy:'', closeDate:''};
        let ticketState = [... this.state.tickets];
        ticketState.unshift(this.state.ticket)
        this.setState({ticket :emptyTicket, tickets:ticketState});
        event.target.reset();
    }
    render(){
        return (
            <div style={{margin:'40px'}}>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label>Opened By</label>
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
                            <label>Client</label>
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
                            <label>Issue</label>
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
                            <label>Resolution</label>
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
                            <label>Closed By</label>
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
                            <label>Close Date</label>
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
                        <button type="submit" className="ui button">Submit</button>
                    </div>
                </form>
                <hr />
                {this.state.tickets.map((blog,idx)=>{
                    return (
                        <div key={ticket.objectId} className="ui card" style={{width:'75%', padding:'20px'}}>
                            <div className="content">
                        <div className="header">{ticket.openedBy}</div>
                        <br />
                            <div className="meta">Client: {ticket.client}</div>
                            <div className="meta">Issue: {ticket.issue}</div>
                        <hr />
                        <div className="description"> {ticket.resolution}</div>
                        <div className="meta">Closed By: {ticket.closedBy}</div>
                        <div className="meta">Close Date: {ticket.closeDate}</div>
                        <h3>index: {idx + 1} objectId: {ticket.objectId}</h3>
                        <button className="ui primary button" style={{ margin:'10px 15px'}} 
                        >Delete</button>
                        </div> 
                        </div>
                    )
                })}
            </div>
        )
    }
};


export default Form;