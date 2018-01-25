import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

//
import cssClasses from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

// These are the most frequent type of components that are stateless and cannot affect the state of the application
class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside the Constructor:',props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={(input) => {this.inputElement = input}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Fragment>
        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, cssClasses.Person) ;