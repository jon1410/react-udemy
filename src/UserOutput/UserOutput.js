import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username passend: {props.username}</p>
            <p>Paragragh two</p>
        </div>
    )
};

export default userOutput;