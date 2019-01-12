import React from 'react';

export default class FilterContainer extends React.Component {


    render(){
        return(
            <div className="application-filter-container">
                <div>Show:</div>
                <div className="checkbox"><label><input type="checkbox" rel="pending"/>Pending application</label></div>
                <div className="checkbox"><label><input type="checkbox" rel="applied"/> Applied</label></div>
                <div className="checkbox"><label><input type="checkbox" rel="interviewed"/> Interviewing</label></div>
                <div className="checkbox"><label><input type="checkbox" rel="offered"/> Offered position</label></div>
            </div>
        )
    }
}