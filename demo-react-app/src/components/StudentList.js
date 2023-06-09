import React, { Component } from 'react';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const students = [
    {
        id: 1,
        name: 'Adam Sagar',
        location: 'NZ',
        favcolour: 'red'
    },
    {
        id: 2,
        name: 'Alannie Decena',
        location: 'NZ',
        favcolour: 'black'
    },
    {
        id: 3,
        name: 'Amber Min Hsuan Hong',
        location: 'AU',
        favcolour: 'yellow'
    },
    {
        id: 4,
        name: 'Christopher Marsh',
        location: 'AU',
        favcolour: 'orange'
    },
    {
        id: 5,
        name: 'David Palmer',
        location: 'NZ',
        favcolour: 'green'
    },
    {
        id: 6,
        name: 'Jason Reid',
        location: 'AU',
        favcolour: 'blue'
    },    
    {
        id: 7,
        name: 'Luke Barker',
        location: 'NZ',
        favcolour: 'violet'
    },
    {
        id: 8,
        name: 'Marco Wells',
        location: 'NZ',
        favcolour: 'indigo'
    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ',
        favcolour: 'pink'
    }  
]

function StudentList() {
    
    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            <ul className="hideBullets">
            {
                students.map((student, index) => /* in a pinch you can use the array index as the key but it's not recommended */
                <Student name={student.name} location={student.location} favcolour={student.favcolour} key={student.id} />
                )
            }
            </ul>
        </div>
    );
}

function Student(props) {

return  <li ><img src={`https://robohash.org/${props.name}?size=50x50`} alt={props.name}/> {props.name}, based in {props.location} and their favourite {props.favcolour} colour</li>
}

//convert this to a functional component
//move the <li> on line 66 into its own Student functional component and pass in details as props
//make sure you don't get any warnings about keys
//add a new property to each student in the list (eg. pets, fav colour, height, age) and include it in the Student component output
//add some CSS to style the students
//add a button to reverse the sort order

export default StudentList;