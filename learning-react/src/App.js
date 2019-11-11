import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.altColor ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.altColor ? 'salmon' : 'lightgreen'};
    color: black; 
  }
`;

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
    // const buttonStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;

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
      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes =  ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes =  ['bold']
    } 
    if (this.state.persons.length < 1) {
      classes.push('fontSize'); // classes =  ['fontSize']
    }

    return (
      <div className="App">
        <h2>You can delete cards by clicking the paragraph</h2>
        <p className={classes.join(' ')}>Random text</p>
        <StyledButton altColor={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
