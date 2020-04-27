import React from 'react';

const OpenStats = ({counts, percent}) => {
    if(counts === 0){
        return (
            <div id="openStats" class="ui large statistics">
                <div class="green statistic">
                    <div class="value" style={{marginLeft:'12.5px'}}>
                        {counts}
                    </div>
                    <div class="label" style={{marginLeft:'12.5px'}}>
                        <h2>Open Tickets</h2>
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
                        <h2>Open Tickets</h2>
                        <h3>{percent}%</h3>
                    </div>
                </div>
            </div>
        )
    }
    if(counts >= 5){
        return (
            <div class="ui large statistics">
                <div class="red statistic">
                    <div class="value">
                        {counts}
                    </div>
                    <div class="label">
                        <h2>Open Tickets</h2>
                        <h3>{percent}%</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
};

export default OpenStats;