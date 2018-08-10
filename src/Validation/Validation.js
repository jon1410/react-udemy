import React from 'react';

const validation = (props) => {
    let infoText;

    if(props.textLength < 5){
        infoText = "Input too small!"
    }else{
        infoText = "Input long enough!"
    }

    return(
        <p>{infoText}</p>
    )
}

export default validation;