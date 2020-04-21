import React from 'react'
import Button from './Button'

const TicketItem=({onDelete, onUpdate, ticket : {openedBy,client,issue,resolution,closedBy,closeDate,_id:id}})=> {
    return(
        <div  className="ui card" style={{width:'75%', padding:'20px'}}>
            <div className="content">
                
                <br />
                <div className="meta">Opened By: {openedBy}</div>
                <div className="meta">Client: {client}</div>
                <hr />
                <div className="description"> {issue}</div>
                <div className="description"> {resolution}</div>
                <div className="meta">Closed By: {closedBy}</div>
                <div className="meta">Close Date: {closeDate}</div>
                <Button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return onDelete(id)
                }}>
                    Delete
                </Button>
                <Button className="ui green button" style={{ margin:'10px 15px'}} onClick={()=>{
                    return onUpdate(id)
                }}>
                    Update
                </Button>
            </div> 
        </div>
    )
};

export default TicketItem;