
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import ProjectTable from "./ProjectTable";

const DevelopedProjects = ({ list }) => {
const [projects,setProjects]=useState(list);
const setlist=(filter)=>{
    let temp=[];
    list.map((item)=>{
        if((item.category==filter[0])&&(item.year==filter[1]||filter[1]=="All")){
            temp.push(item);
        }
        else if(item.year==filter[1]&&(item.category==filter[0]||filter[0]=="All")){
            temp.push(item);
        }
       
    });
     if(filter[0]=="All"){
        if(filter[1]=="All"){
            temp=list;
        }
    }
    setProjects(temp);
}
  return (
    <div>
        <NavBar list={list} data={{setlist:setlist.bind(this)}} />
        <ProjectTable projects={projects}></ProjectTable>
    </div>
  );
};

export default DevelopedProjects;
