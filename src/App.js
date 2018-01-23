import React, { Component } from 'react';
import './App.css';

// Import the components
import Person from './Person/Person';

// App Component is referred as a Container because is a part of our application that can change the state of the application
class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Fran', age: 26}
        ]
    };

    // Camel case to describe de function and using the "Handler" tag to specify that this function is called to handle a certain event
    // Handlers should be passed using the 'this.NAME.bind(this,...args)'
    // Arrow functions may be used but they are inefficient. In this case the passed property will be a function and arguments can me included: onClick={() => this.NAME('argument')}
    switchNameHandler = (newName) => {
        // Don't change state like this: this.state.persons[0].name = 'Maximilian'
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Fran', age: 26}
            ]
        })
    };

    // Events objects are automatically passed to the handler
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Fran', age: 26}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={ () => this.switchNameHandler('Maximo!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Maximo')}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangeHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
