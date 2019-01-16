import React from 'react';
import {fetchApplications} from "../actions/protected-data";
import { connect } from "react-redux";

export class FilterContainer extends React.Component {


    handleFilterClicked(value){
        this.props.dispatch(fetchApplications(value));
    }
    
    render(){
        this.handleFilterClicked()
        return(
            <div className="application-filter-container">
                <div>Show:</div>
                <div onClick={e=> this.handleFilterClicked("pending")} className="checkbox"><label><input type="checkbox" value=""/>All</label></div>
                <div className="checkbox"><label><input type="checkbox" value="pending"/>Pending application</label></div>
                <div className="checkbox"><label><input type="checkbox" value="applied"/> Applied</label></div>
                <div className="checkbox"><label><input type="checkbox" value="interviewed"/> Interviewing</label></div>
                <div className="checkbox"><label><input type="checkbox" value="offered"/> Offered position</label></div>
            </div>
        )
    }
}

export default connect()(FilterContainer);
