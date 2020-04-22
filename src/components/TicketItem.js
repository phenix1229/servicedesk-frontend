import React from 'react'
import Button from './Button'

const TicketItem=({onDelete, onUpdate, ticket})=> {
    return(
        <div  className="ui card" style={{width:'75%', padding:'20px'}}>
            <div className="content">
                
                <br />
                <div className="meta">Opened By: {ticket.openedBy}</div>
                <div className="meta">Open Date: {ticket.openDate}</div>
                <div className="meta">Client: {ticket.client}</div>
                <div className="meta">Issue: {ticket.issue}</div>
                <div className="meta">Resolution: {ticket.resolution}</div>
                <div className="meta">Closed By: {ticket.closedBy}</div>
                <div className="meta">Close Date: {ticket.closeDate}</div>
                <Button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return onDelete(ticket._id)
                }}>
                    Delete
                </Button>
                <Button className="ui green button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return onUpdate(ticket._id)
                }}>
                    Update
                </Button>
            </div> 
        </div>
    )
};

export default TicketItem;