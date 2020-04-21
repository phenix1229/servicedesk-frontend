import React  from 'react';
import {searchIt} from '../services/search';
import TicketItem from './TicketItem';
import PropTypes from 'prop-types';

const Tickets = (props) => {
  
  if(props.tickets.length > 0){
    return (
      <div>
        {props.tickets
        .filter(searchIt(props.searchTerm))
        .map((ticket,idx)=>{
          return (
            <TicketItem  key={ticket._id} onDelete={props.onDelete} onUpdate={props.onUpdate} ticket={ticket} />
          )
        })}
      </div>
      )
    } else {
      return null
    }
};

Tickets.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  searchTerm: PropTypes.string,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      openedBy: PropTypes.string.isRequired,
      client: PropTypes.string.isRequired,
      issue: PropTypes.string.isRequired,
      resolution: PropTypes.string.isRequired,
      closedBy: PropTypes.string.isRequired,
      closeDate: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  )
};

export default Tickets;