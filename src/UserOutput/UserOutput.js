import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Paragraph 1: {props.username}</p>
            <p>Paragraph 2</p>
        </div>
    )
};

export default UserOutput;