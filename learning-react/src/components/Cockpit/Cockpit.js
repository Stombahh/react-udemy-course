import React, { useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    toggleBtnRef.current.click()

    const assignedClasses = []
    let btnClasses = '';

    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes =  ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes =  ['bold']
    }
    if (props.persons.length < 1) {
        assignedClasses.push(classes.fontSize); // classes =  ['fontSize']
    }

    return (
        <div className={classes.Cockpit}>
            <h2>You can delete cards by clicking the paragraph</h2>
            <p className={assignedClasses.join(' ')}>Random text</p>
            <button
                ref={toggleBtnRef}
                className={btnClasses}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;