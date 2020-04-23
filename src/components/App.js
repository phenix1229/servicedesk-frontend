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
            tickets: [],
            searchTerm: '',
            createTicket: false,
            updateTicket: false,
            ticket: {}
        };
    };
    loadTickets = () => {
        // const url = '/tickets';
        axios.get('/tickets').then((tickets) => {
            // console.log(tickets);
            // this.setState({tickets: tickets.data})
            // console.log(tickets);
            const openTickets = tickets.data.filter((item) => {
                return item.open === true
            })
            this.setState({tickets: openTickets})
        })
    }
    loadTicket = (id) => {
        axios.get(`/ticket/${id}`).then((ticket) => {
            // return console.log(blog.data)
            this.setState({
                createTicket: false,
                ticket: ticket.data,
            })
        })
    }
    onDelete = (id) => {
        // const updatedBlogs = this.state.blogs.filter((item => item.objectId !== id));
        // this.setState({blogs:updatedBlogs});
        axios.delete(`/ticket/${id}`).then(() => {
            this.loadTickets();
        })
    };
    onUpdate = (id) => {
        // return console.log(`Update : ${id}`)
        this.loadTicket(id);
        this.setState({createTicket:false, openTickets:false, updateTicket:true, closedTickets:false});
    };
    handleChange = (event) => {
        this.setState({searchTerm:event.target.value}, ()=> {
            // console.log(this.state.searchTerm)
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
            this.setState({openTickets:true, closedTickets:false, updateTicket:false, createTicket:false});
        })
    }
    handleCreateTicket = () => {
        this.setState({createTicket:true, openTickets:false, updateTicket:false, closedTickets:false})
    }
    componentDidMount(){
        this.loadTickets();
    }
    render () {
        // console.log('Tickets...', this.state.tickets)
        if(this.state.loggedIn){
        return (
            <div id='app'>
                <Sidebar handleChange={this.handleChange} searchTerm={this.state.searchTerm} handleCreateTicket={this.handleCreateTicket} />
                <div id='main' style={{
                    justifyContent:'center', 
                    alignItems: 'center', 
                }}>
                    {this.state.createTicket ? (<CreateTicket handleCreateTicketSubmit={this.handleCreateTicketSubmit} />) : null}
                    {this.state.updateTicket ? (<UpdateTicket handleUpdateTicketSubmit={this.handleUpdateTicketSubmit} ticket={this.state.ticket} />) : null}
                    {this.state.openTickets ? (<Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />) : null}
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