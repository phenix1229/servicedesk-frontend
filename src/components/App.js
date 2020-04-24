import React , {Component} from 'react';
import axios from 'axios';
import CreateTicket from './CreateTicket';
import Tickets from './Tickets';
import UpdateTicket from './UpdateTicket';
import CloseTicket from './CloseTicket';
import Sidebar from './Sidebar';
import LoginForm from './LoginForm';
import './index.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false,
            openTickets: false,
            closedTickets: false,
            createTicket: false,
            updateTicket: false,
            searchTerm: '',
            tickets: [],
            ticket: {},
            userObject:{}
        };
    };
    updateUser = (user) => {
        this.setState({
        loggedIn: true,
        userObject: user,
        openTickets: true
        })
        console.log(this.state.userObject)
        this.loadOpenTickets();
    };
    logoutUser = () => {
            this.setState({
                loggedIn: false,
                openTickets: false,
                createTicket: false,
                closedTickets: false,
                updateTicket: false,
                closeTicket:false,
                tickets: [],
                ticket: {},
                userObject: {}
        })
    };
    loadOpenTickets = () => {
        axios.get('/tickets').then((tickets) => {
            const openTickets = tickets.data.filter((item) => {
                return item.open === true
            })
            this.setState({tickets: openTickets, openTickets:true, closedTickets:false, createTicket:false, updateTicket:false, closeTicket:false, ticket:{}})
        })
    };
    loadClosedTickets = () => {
        axios.get('/tickets').then((tickets) => {
            const closedTickets = tickets.data.filter((item) => {
                return item.open === false
            })
            this.setState({tickets: closedTickets, openTickets:false, closedTickets:true, createTicket:false, updateTicket:false, closeTicket:false, ticket:{}})
        })
    };
    loadTicket = (id) => {
        axios.get(`/ticket/${id}`).then((ticket) => {
            this.setState({
                createTicket: false,
                openTickets: false,
                closedTickets: false,
                ticket: ticket.data
            })
        })
    };
    onDelete = (id) => {
        axios.delete(`/ticket/${id}`).then(() => {
            this.loadOpenTickets();
        })
    };
    handleCloseTicket = (id) => {
        this.loadTicket(id);
        this.setState({updateTicket:false, closeTicket:true});
    };
    onUpdate = (id) => {
        this.loadTicket(id);
        this.setState({updateTicket:true, closeTicket:false});
    };
    handleChange = (event) => {
        this.setState({searchTerm:event.target.value}, ()=> {
        })
    };
    handleCreateTicketSubmit = (event,ticket) => {
        event.preventDefault();
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.post('/ticket', ticket, axiosConfig).then(() => {
            this.setState({openTickets:true, closedTickets:false, updateTicket:false, createTicket:false});
            this.loadOpenTickets();
        });
    };
    handleUpdateTicketSubmit = (event, ticket, id) => {
        event.preventDefault();
        console.log(ticket)
        this.setState({
            createTicket: false
        });
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.put(`/ticket/${id}`, ticket, axiosConfig).then(() => {
            this.setState({openTickets:true, closedTickets:false, updateTicket:false, createTicket:false, closeTicket:false, ticket:{}});
            this.loadOpenTickets();
        })
    };
    handleCreateTicket = () => {
        this.setState({createTicket:true, openTickets:false, updateTicket:false, closedTickets:false, closeTicket:false, ticket:{}})
    };
    componentDidMount(){
        // this.loadOpenTickets();
    };
    render () {
        if(this.state.loggedIn){
        return (
            <div id='app'>
                <Sidebar handleChange={this.handleChange} searchTerm={this.state.searchTerm} handleCreateTicket={this.handleCreateTicket} loadOpenTickets={this.loadOpenTickets} loadClosedTickets={this.loadClosedTickets} logoutUser={this.logoutUser} />
                <div id='main' style={{
                    justifyContent:'center', 
                    alignItems: 'center', 
                }}>
                    {this.state.createTicket ? (<CreateTicket handleCreateTicketSubmit={this.handleCreateTicketSubmit} user={this.state.userObject} />) : null}
                    {this.state.updateTicket ? (<UpdateTicket handleUpdateTicketSubmit={this.handleUpdateTicketSubmit} ticket={this.state.ticket} />) : null}
                    {this.state.closeTicket ? (<CloseTicket handleUpdateTicketSubmit={this.handleUpdateTicketSubmit} ticket={this.state.ticket} user={this.state.userObject} />) : null}
                    {this.state.openTickets ? (<Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} handleCloseTicket={this.handleCloseTicket} onUpdate={this.onUpdate} />) : null}
                    {this.state.closedTickets ? (<Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />) : null}
                </div>
            </div>
        )
            } else {
                return (
                    <LoginForm updateUser={this.updateUser} />
                )
            }
    };
};

export default App;