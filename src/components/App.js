import React , {Component} from 'react';
import axios from 'axios';
// import blogs from '../data/data';
import Search from './Search';
import CreateTicket from './CreateTicket';
import Tickets from './Tickets';
import UpdateTicket from './UpdateTicket';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            tickets: [],
            searchTerm: '',
            toggle: true,
            ticket: {}
        };
    };
    loadTickets = () => {
        // const url = '/tickets';
        axios.get('/tickets').then((tickets) => {
            console.log(tickets);
            this.setState({tickets: tickets.data})
            console.log(tickets);
        })
    }
    loadTicket = (id) => {
        axios.get(`/ticket/${id}`).then((ticket) => {
            // return console.log(blog.data)
            this.setState({
                toggle: false,
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
    };
    handleChange = (event) => {
        this.setState({searchTerm:event.target.value}, ()=> {
            console.log(this.state.searchTerm)
        })
    };
    handleCreateTicketSubmit = (event,ticket) => {
        event.preventDefault();
        // let updatedBlogs=[blog, ...this.state.blogs];
        // this.setState({blogs: updatedBlogs}, () => {
        //     console.log(this.state.blogs)
        // })
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.post('/ticket', ticket, axiosConfig).then(() => {
            this.loadTickets();
        });
    };
    handleUpdateTicketSubmit = (event, ticket, id) => {
        event.preventDefault();
        this.setState({
            toggle: true
        });
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
            }
        };
        axios.put(`/ticket/${id}`, ticket, axiosConfig).then(() => {
            this.loadTickets();
        })
    }
    componentDidMount(){
        console.log('cdm')
        this.loadTickets();
    }
    render () {
        // console.log('Tickets...', this.state.tickets)
        return (
            <div id='app'>
                <Sidebar />
                <div id='main' style={{
                    paddingTop:'100px',
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems: 'center', 
                    flexDirection:'column'
                }}>
                    <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
                    <hr style={{width:'75%', color:'#3b3b3b', margin:'50px 0'}} />
                    {this.state.toggle ? (<CreateTicket handleCreateTicketSubmit={this.handleCreateTicketSubmit} />) : (<UpdateTicket ticket={this.state.ticket} handleUpdateTicketSubmit={this.handleUpdateTicketSubmit} />)}
                    <Tickets tickets={this.state.tickets} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />
                </div>
            </div>
        )
    };
};

export default App;