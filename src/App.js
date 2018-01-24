import React, { Component } from 'react';
import './App.css';
// Import the components
import Person from './Person/Person';

// App Component is referred as a Container because is a part of our application that can change the state of the application
class App extends Component {
    state = {
        persons: [
            {id: 'person_1', name: 'Max', age: 28},
            {id: 'person_2', name: 'Manu', age: 29},
            {id: 'person_3', name: 'Fran', age: 26}
        ],
        showPersons: false,
    };

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

        // should only be used on scoped elements
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color:'black'
            }
        };

        // Conditional rendering should be done the JS way.
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={this.deletePersonHandler.bind(this, index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        )

                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color:'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

// This is called a high order component. In this case we inject extra features to understand CSS
export default App;
