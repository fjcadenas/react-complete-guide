import React, {Component} from 'react';

//
import cssClasses from './Person.css';

// These are the most frequent type of components that are stateless and cannot affect the state of the application
class Person extends Component {

    render() {
        return (
            <div className={cssClasses.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    };
}

export default Person;