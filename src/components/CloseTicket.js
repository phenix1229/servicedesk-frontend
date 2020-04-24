import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const today = () =>{
    return `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
};

class CloseTicket extends Component {
    constructor(props){
        super(props)
        this.state = {
            ticket:{
                resolution:'', closedBy:'', closeDate:'', open:'false' 
            }
        };
    };
    handleChange=(event)=>{
        let updatedTicket = { ...this.state.ticket}
        updatedTicket.resolution=event.target.value;
        updatedTicket.closedBy=this.props.user.name;
        updatedTicket.closeDate=today();
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
                <h1 style={{color:'rgb(107, 105, 105)'}}>Close Ticket:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className="equal width fields">   
                        <div className="field">
                            <label style={{color:'rgb(107, 105, 105)'}}>Resolution</label>
                            <div className="ui fluid input">
                                <input type="text" 
                                    name="resolution"
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
            openedBy: PropTypes.string,
            client: PropTypes.string,
            issue: PropTypes.string,
            resolution: PropTypes.string,
            closedBy: PropTypes.string,
            closeDate: PropTypes.string,
            _id: PropTypes.string
        })
}

export default CloseTicket;