import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside the Constructor:',props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps: ', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //
    // }

    componentWillUpdate(nextProp, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProp, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate', this.props, this.state);
    }

    render () {
        console.log('[Persons.js] Inside Render');
        return this.props.persons.map((person, index) => {
            return<Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;