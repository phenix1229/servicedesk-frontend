import React  from 'react';
import {searchIt} from '../services/search';
import TicketItem from './TicketItem';
import PropTypes from 'prop-types';

const Tickets = (props) => {
  return (
    props.tickets.length > 0 &&
    <div>
      {props.tickets.data
      .filter(searchIt(props.searchTerm))
      .map((blog,idx)=>{
        return (
          <TicketItem  key={blog._id} onDelete={props.onDelete} onUpdate={props.onUpdate} ticket={props.ticket} />
        )
      })}
    </div>
  )
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