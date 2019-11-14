import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfsadfg', name: 'Max', age: 28 },
      { id: 'dsgdsg', name: 'Manu', age: 29 },
      { id: 'dsgsdg', name: 'Matti', age: 10 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})

  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;
    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClasses.push(classes.Red);
    }

    let assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes =  ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes =  ['bold']
    } 
    if (this.state.persons.length < 1) {
      assignedClasses.push(classes.fontSize); // classes =  ['fontSize']
    }

    return (
      <div className={classes.App}>
        <h2>You can delete cards by clicking the paragraph</h2>
        <p className={assignedClasses.join(' ')}>Random text</p>
        <button className={btnClasses.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
