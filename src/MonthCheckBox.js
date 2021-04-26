import React from "react";
import moment from "moment";
import { Dropdown,DropdownButton } from 'react-bootstrap';
class MonthCheckBox extends React.Component {


    render() {

        let month = moment.monthsShort();
        const currentMonth = moment().format('MMM');
        const handleSelect=(e)=>{
            console.log(moment().diff('1981-01-01', 'years',false));
            document.getElementById("dropdown-basic-button").innerHTML=e;
            console.log(e);
            this.props.data.setMonth(e);
            
          }
        return (
         
        
      
        <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title={currentMonth}>
          {
                    month.map((item,i)=>(
                        
                        <Dropdown.Item as="button" key={i} eventKey={item}  href="#/action">{item}</Dropdown.Item>  
                    ))
                   
                }
        </DropdownButton>
     
        
        )
    }
}

export default MonthCheckBox;