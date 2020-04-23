import React , {Component} from 'react';
import axios from 'axios';
import CreateTicket from './CreateTicket';
import Tickets from './Tickets';
import UpdateTicket from './UpdateTicket';
import Sidebar from './Sidebar';
import './index.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: true,
            openTickets: true,
            closedTickets: false,
            createTicket: false,
            updateTicket: false,
            searchTerm: '',
            tickets: [],
            ticket: {}
        };
    };
    loadOpenTickets = () => {
        axios.get('/tickets').then((tickets) => {
            const openTickets = tickets.data.filter((item) => {
                return item.open === true
            })
            this.setState({tickets: openTickets, openTickets:true, closedTickets:false, createTicket:false, updateTicket:false, ticket:{}})
        })
    };
    loadClosedTickets = () => {
        axios.get('/tickets').then((tickets) => {
            const closedTickets = tickets.data.filter((item) => {
                return item.open === false
            })
            this.setState({tickets: closedTickets, openTickets:false, closedTickets:true, createTicket:false, updateTicket:false, ticket:{}})
        })
    };
    loadTicket = (id) => {
        axios.get(`/ticket/${id}`).then((ticket) => {
            this.setState({
                createTicket: false,
                openTickets: false,
                closedTickets: false,
                ticket: ticket.data,
            })
        })
    };
    onDelete = (id) => {
        axios.delete(`/ticket/${id}`).then(() => {
            this.loadOpenTickets();
        })
    };
    onUpdate = (id) => {
        this.loadTicket(id);
        this.setState({createTicket:false, openTickets:false, updateTicket:true, closedTickets:false});
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
        });
        this.loadOpenTickets();
    };
    handleUpdateTicketSubmit = (event, ticket, id) => {
        event.preventDefault();
        this.setState({
            createTicket: true
        });
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.put(`/ticket/${id}`, ticket, axiosConfig).then(() => {
            this.setState({openTickets:true, closedTickets:false, updateTicket:false, createTicket:false, ticket:{}});
        })
        this.loadOpenTickets();
    };
    handleCreateTicket = () => {
        this.setState({createTicket:true, openTickets:false, updateTicket:false, closedTickets:false})
    };
    componentDidMount(){
        this.loadOpenTickets();
    };
    render () {
        if(this.state.loggedIn){
        return (
            <div id='app'>
                <Sidebar handleChange={this.handleChange} searchTerm={this.state.searchTerm} handleCreateTicket={this.handleCreateTicket} loadOpenTickets={this.loadOpenTickets} loadClosedTickets={this.loadClosedTickets} />
                <div id='main' style={{
                    justifyContent:'center', 
                    alignItems: 'center', 
                }}>
                    {this.state.createTicket ? (<CreateTicket handleCreateTicketSubmit={this.handleCreateTicketSubmit} />) : null}
                    {this.state.updateTicket ? (<UpdateTicket handleUpdateTicketSubmit={this.handleUpdateTicketSubmit} ticket={this.state.ticket} />) : null}
                    {this.state.openTickets ? (<Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />) : null}
                    {this.state.closedTickets ? (<Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />) : null}
                </div>
            </div>
        )
            } else {
                return (
                    <div>
                        <p>Pease log in</p>
                    </div>
                )
            }
    };
};

export default App;