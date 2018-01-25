import React, { PureComponent } from 'react';
import cssClasses from './App.css';
// Import the components
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// App Component is referred as a Container because is a part of our application that can change the state of the application
class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside the Constructor:',props);
        this.state = {
            persons: [
                {id: 'person_1', name: 'Max', age: 28},
                {id: 'person_2', name: 'Manu', age: 29},
                {id: 'person_3', name: 'Fran', age: 26}
            ],
            showPersons: false,
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate');
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProp, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProp, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE App.js] Inside componentDidUpdate', this.props, this.state);
    }

    // Events objects are automatically passed to the handler
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const persons = [...this.state.persons];
        persons[personIndex] = {...persons[personIndex], name: event.target.value};

        this.setState({ persons: persons})
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); // If it is an array is only a pointer, you can modify the value pointed. slice() with no arguments makes a copy so that data is not mutated
        const persons = [...this.state.persons]; // The spread operator is the most modern way
        persons.splice(personIndex, 1); // This removes the element in the index from the array
        this.setState({
            persons: persons
        })
    };

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    render() {
        console.log('[App.js] Inside the render method');
        // Conditional rendering should be done the JS way.
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );
        }

        return (
            <div className={cssClasses.App}>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    click={this.togglePersonHandler}
            />
                {persons}
            </div>
        );
    }
}

// This is called a high order component. In this case we inject extra features to understand CSS
export default App;
