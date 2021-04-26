import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import FormCheck from "react-bootstrap/FormCheck"
import moment from "moment";
import { Container } from 'react-bootstrap';
import MonthCheckBox from './MonthCheckBox';
const PersonTable = ({ list }) => {
  const [persons, setPersons] = useState([]);
  const [month, setMonth]=useState(moment().format('MMM'));
  

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((results) => results.json())
      .then((json) => json.results)
      .then((persons) => {
        setPersons(persons);
      });
    
  }, []);

  let today=moment();
  let totalDays=moment('month').daysInMonth();
 function daysOfMonth(Month){
  Month=Month||moment().format('MMM');
   console.log(month+"suhi");
    today=moment(month, 'MMM');
    totalDays=moment(month,'MMM').daysInMonth(); 
    return Array.from(Array(totalDays).keys()).map((i)=>
    today.clone().add(i,"days")
    );
 }

 function setMonths(Month){
  setMonth(Month);
  console.log(month+"suhi");
   today=moment(month, 'MMM');
   totalDays=moment(month,'MMM').daysInMonth(); 
   return Array.from(Array(totalDays).keys()).map((i)=>
   today.clone().add(i,"days")
   );
}
 
  return (
    <Container>
      <h1 className="text-center">Beacon House School System</h1>
      <h3 className="text-center">Attendance Roster</h3>
      <div>
      <MonthCheckBox data={{setMonth:setMonths.bind(this)}} />
      </div>
    <Table striped hover>
      <thead>
        <tr>
          <td>Name</td>
         {
           daysOfMonth().map((dates,i)=>(
             <td key={i}>{dates.format('MMM DD')}</td>
           ))
         }
        </tr>
      </thead>
      <tbody className="text-black">
        {persons.map(
          (person, i) =>
            person && (
              <tr key={i}>
                <td>{person.name.first}</td>
                {
                  daysOfMonth().map((dates,i)=>(
                   <td key={i}> <FormCheck /></td>
                  ))
                }
                
              </tr>
            )
        )}
      </tbody>
    </Table>
    </Container>
  );
};

export default PersonTable;
