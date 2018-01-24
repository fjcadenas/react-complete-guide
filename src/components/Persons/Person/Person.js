import React from 'react';

//
import cssClasses from './Person.css';

// These are the most frequent type of components that are stateless and cannot affect the state of the application
const person = (props) => {
    return (
        <div className={cssClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;