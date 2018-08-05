import React from 'react';

const userInput = (props) => {

    const style = {
        width: '60%',
        margin: '15px auto auto auto',
        backgroundColor: '#eee',
        border: '3px solid red',
        boxShadow: '#ccc',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '15px',
        paddingTop: '15px',
    }

    return (
     <div style={style}>
         <input type="text" onChange={props.changed} value={props.username}/>
     </div>
    )
};

export default userInput;