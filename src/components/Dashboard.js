import React  from 'react';
import PropTypes from 'prop-types';
import './index.css'

const Dashboard = (props) => {
    if(props.dashboard === true){
        return (
            <div id='dashBig'>
                <br />
                <br />
                <h1 id='openBig'>Open Tickets: {props.counts[0]}</h1>
                <h1 id='closedBig'>Closed Tickets: {props.counts[1]}</h1>
            </div>
        )
    }
};

Dashboard.propTypes = {
    countTickets: PropTypes.func,
    dashboard: PropTypes.bool,
    counts: PropTypes.array,
};

export default Dashboard;