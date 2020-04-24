import React from 'react'
import Button from './Button'


const TicketItem = ({onUpdate, handleCloseTicket, ticket})=> {
    return(
        <div  className="ui card" style={{width:'75vw', padding:'20px'}}>
            <div className="content">
                
                <br />
                <div className="meta">Opened By: {ticket.openedBy}</div>
                <div className="meta">Open Date: {ticket.openDate}</div>
                <br />
                <div className="meta">Client: {ticket.client}</div>
                <div className="meta">Issue: {ticket.issue}</div>
                {ticket.comments.length > 0 && <br />}
                {ticket.comments.length > 0 && <div className="meta">Comments: {ticket.comments.map((item, idx) => {
                    return (
                        <p>{item}</p>
                    )
                })}</div>}
                {ticket.resolution && <br />}
                {ticket.resolution && <div className="meta">Resolution: {ticket.resolution}</div>}
                {ticket.closedBy && <br />}
                {ticket.closedBy && <div className="meta">Closed By: {ticket.closedBy}</div>}
                {ticket.closeDate && <div className="meta">Close Date: {ticket.closeDate}</div>}
                <br />
                {ticket.open === true && <Button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return handleCloseTicket(ticket._id)
                }}>
                    Close
                </Button>}
                {ticket.open === true && <Button className="ui green button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return onUpdate(ticket._id)
                }}>
                    Update
                </Button>}
            </div> 
        </div>
    )
};

export default TicketItem;