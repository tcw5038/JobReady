import React from "react";
import { fetchApplications } from "../../actions/protected-data";
import { connect } from "react-redux";

export class FilterContainer extends React.Component {
  handleFilterClicked(value) {
    console.log("Filter clicked", value);
    this.props.dispatch(fetchApplications(value));
  }

  render() {
    return (
      <div className="application-filter-container">
        <div>Show:</div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleFilterClicked("")}
              type="radio"
              value=""
              name="filter"
            />
            All
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleFilterClicked("pending")}
              type="radio"
              value="pending"
              name="filter"
            />
            Pending application
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleFilterClicked("applied")}
              type="radio"
              value="applied"
              name="filter"
            />
            Applied
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleFilterClicked("interviewed")}
              type="radio"
              value="interviewed"
              name="filter"
            />
            Interviewing
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              onClick={e => this.handleFilterClicked("offered")}
              type="radio"
              value="offered"
              name="filter"
            />
            Offered position
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(FilterContainer);
