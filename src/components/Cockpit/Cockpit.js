import React from 'react';

import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const classes = [];
    let btnClass= cssClasses.Button;

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }

    if (props.showPersons) {
        btnClass = [cssClasses.Button, cssClasses.Red].join(' ');
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass}
                    onClick={props.click}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;