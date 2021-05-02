import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route, Router } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/all";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import DevelopedProjects from "../../DevelopedProjects/DevelopedProjects";
import project from "../../developed.json";


const Header = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/assign-projects",
      sidebar: () => <div>Develope Project</div>,
      main: () => <div className="col-12 bg-light">
        <h2>Projects Archive</h2>
        <DevelopedProjects list={project} />
      </div>
    },
    {
      path: "/projects-archive",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <div className="col-12 bg-light">
        <h2>Projects Archive</h2>
        <DevelopedProjects list={project} />
      </div>
    },
    {
      path: "/project-progress",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Project Progress</h2>
    },

  ];

  return (
    <div>
      <Router>
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <FiArrowRightCircle />
                ) : (
                  <FiArrowLeftCircle />
                )}
              </div>

            </SidebarHeader>
            <SidebarContent>
              <BrowserRouter>
                <Menu iconShape="square">
                  <MenuItem active={true} icon={<FiHome />}>
                    Home
              </MenuItem>
                  <MenuItem icon={<FaList />}><Link to="/DevelopedProjects">Category</Link></MenuItem>
                  <MenuItem icon={<FaRegHeart />}><Link to="/cart">Favourite</Link></MenuItem>
                  <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                  <MenuItem icon={<BiCog />}>Settings</MenuItem>
                </Menu>
                <Switch>
                  <Route exact path="/">
                    <DevelopedProjects list={project} />
                  </Route>
                  <Route path="/DevelopedProjects">
                    <DevelopedProjects list={project} />
                  </Route>
                  <Route path="/cart">

                  </Route>
                </Switch>
              </BrowserRouter>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
          <div class="col bg-warning">
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
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Header;
