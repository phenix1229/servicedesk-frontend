import React from 'react';

const ClosedStats = ({counts, percent}) => {
    if(counts === 0){
        return (
            <div class="ui large statistics">
                <div class="red statistic">
                    <div class="value">
                        {counts}
                    </div>
                    <div class="label">
                        <h2>Closed Tickets</h2>
                        <h3>{percent}%</h3>
                    </div>
                </div>
            </div>
        )
    };
    if(counts > 0 && counts < 5){
        return (
            <div class="ui large statistics">
                <div class="yellow statistic">
                    <div class="value">
                        {counts}
                    </div>
                    <div class="label">
                        <h2>Closed Tickets</h2>
                        <h3>{percent}%</h3>
                    </div>
                </div>
            </div>
        )
    }
    if(counts >= 5){
        return (
            <div class="ui large statistics">
                <div class="green statistic">
                    <div class="value">
                        {counts}
                    </div>
                    <div class="label">
                        <h2>Closed Tickets</h2>
                        <h3>{percent}%</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
};

export default ClosedStats;