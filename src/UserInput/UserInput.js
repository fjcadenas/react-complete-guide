import React from 'react';

const UserInput = (props) => {
    return (
        <input onChange={props.changed} value={props.username}/>
    )
};

export default UserInput;