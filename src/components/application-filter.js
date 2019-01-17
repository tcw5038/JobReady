import React from 'react';
import {fetchApplications} from "../actions/protected-data";
import { connect } from "react-redux";

export class FilterContainer extends React.Component {


    handleFilterClicked(value){
        console.log(value);
        this.props.dispatch(fetchApplications(value));
    }
    
    render(){
        this.handleFilterClicked()
        return(
            <div className="application-filter-container">
                <div>Show:</div>
                <div onClick={e=> this.handleFilterClicked("")} className="checkbox"><label><input type="radio" value=""/>All</label></div>
                <div onClick={e=> this.handleFilterClicked("pending")} className="checkbox"><label><input type="radio" value="pending"/>Pending application</label></div>
                <div onClick={e=> this.handleFilterClicked("applied")} className="checkbox"><label><input type="radio" value="applied"/> Applied</label></div>
                <div onClick={e=> this.handleFilterClicked("interviewed")} className="checkbox"><label><input type="radio" value="interviewed"/> Interviewing</label></div>
                <div onClick={e=> this.handleFilterClicked("offered")} className="checkbox"><label><input type="radio" value="offered"/> Offered position</label></div>
            </div>
        )
    }
}

export default connect()(FilterContainer);
