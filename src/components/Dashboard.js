import React  from 'react';
import PropTypes from 'prop-types';
import './index.css'

const Dashboard = (props) => {
    if(props.dashboard === true){
        let openPercent = Math.floor((Number(props.counts[0])/(Number(props.counts[0]) + Number(props.counts[1]))) * 100)
        let closedPercent = Math.floor((Number(props.counts[1])/(Number(props.counts[0]) + Number(props.counts[1]))) * 100)
        return (
            <div id='dashBig'>
                <br />
                <br />
                <h1 id='openBig'>Open Tickets: {props.counts[0]}</h1>
                <h2>{openPercent}%</h2>
                <h1 id='closedBig'>Closed Tickets: {props.counts[1]}</h1>
                <h2>{closedPercent}%</h2>
            </div>
        )
    } else {
        return (
            <div id='dashSmall'>
                <p>Open Tickets: {props.counts[0]}</p>
                <p>Closed Tickets: {props.counts[1]}</p>
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