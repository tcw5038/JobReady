import React from 'react';
import { Link } from "react-router-dom";

export default function JobCard (props) {
        return(
            <div className="job-card">
                <div className='row'>
                    <div className='column'>
                        <div className="job-title">{props.positionTitle}</div>
                        <div className="company-name">{props.companyName}</div>
                        <div className="job-status">{props.status}</div>
                    </div>  
                    <div className='column'>   
                        <div className="job-location">{props.location}</div>
                        <div className="job-date-added">{props.dateAdded}</div>
                    </div>
                    <div className="column">
                        <Link to="/editApplication"><button>Edit Application</button></Link>
                        <button>Delete Application</button>
                        
                    </div> 
                </div>
            </div>
        )
}