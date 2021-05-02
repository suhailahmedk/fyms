//import useState hook to create menu collapse state
import React, { useState } from "react";
import project from "../../developed.json";
import annoucement from "../../Annoucements.json";
import ScrollArea from 'react-scrollbar';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import DevelopedProjects from "../../DevelopedProjects/DevelopedProjects";
import Annoucement from "../Annoucement/Annoucement";


const Sidebar = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let lrcircle = menuCollapse ? (
    <FiArrowRightCircle />
  ) : (
    <FiArrowLeftCircle />
  );

  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Annoucement data={annoucement}></Annoucement>
    },
    {
      path: "/Annoucement",
      main: () => 
      <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false}>
        <Annoucement data={annoucement}></Annoucement>
      </ScrollArea>
    },
    {
      path: "/past-projects",
      main: () =>
        <DevelopedProjects list={project} ></DevelopedProjects>

    },
    {
      path: "/project-progress",
      main: () => <h2>Project Progress</h2>
    },

  ];

  return (
    <div>

      <Router>
        <div className="row bg-light">
          <div className="col-1 ">
            <div id="header" >
              {/* collapsed props to change menu size using menucollapse state */}
              <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                  <div className="logotext">
                    {/* small and big change using menucollapse state */}
                    <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                  </div>
                  <div className="closemenu" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                    {lrcircle}
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <Menu iconShape="square">
                    <MenuItem active={true} icon={<FiHome />}>
                      Home
              </MenuItem>
                    <MenuItem icon={<FaList />}><Link to="/Annoucement">Annoucement</Link></MenuItem>
                    <MenuItem icon={<FaRegHeart />}><Link to="/past-projects">Past Projects</Link></MenuItem>
                    <MenuItem icon={<RiPencilLine />}><Link to="project-progress">Project Progress</Link></MenuItem>
                    <MenuItem icon={<BiCog />}>Settings</MenuItem>
                  </Menu>
                </SidebarContent>
                <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarFooter>
              </ProSidebar>
            </div>

          </div>
          
          <div className="col overflow-y-scroll h-80">
          <ScrollArea speed={0.8} className="area" contentClassName="content"  horizontal={false}>
            <Switch>
              {
                routes.map((route, index) => (

                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))
              }
            </Switch>
            </ScrollArea>
          </div>
          
        </div>
      </Router>
    </div>
  );
};

export default Sidebar;