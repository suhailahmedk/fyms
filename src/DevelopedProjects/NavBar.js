import React from "react";
import { Navbar, Nav, Form, Button, FormControl, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
let year = [];
let category = [];
let batch = [];
let parameter = ["All", "All"];

class NavBar extends React.Component {

    render() {
        this.props.list.map((item) => {
            if (!year.includes(item.year)) {
                year.push(item.year);
            }
            if (!category.includes(item.category)) {
                category.push(item.category);
            }
            if (!batch.includes(item.batch)) {
                batch.push(item.batch);
            }

        });
        const handleCategory = (e) => {
            parameter[0] = e;
            document.getElementById("basic-nav-dropdown").innerHTML=e;
            this.props.data.setlist(parameter);
        }
        const handleyear = (e) => {
            parameter[1] = e;
            document.getElementById("basic-nav-dropdown1").innerHTML=e;
            this.props.data.setlist(parameter);
        }

        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Developed Projects</Navbar.Brand>
                    <Nav className="mr-auto">
                        <DropdownButton title="Categories" id="basic-nav-dropdown" onSelect={handleCategory}>

                            <Dropdown.Item as="button" key="9" eventKey="All" href="#/action">All</Dropdown.Item>
                            <NavDropdown.Divider />
                            {
                                category.map((item, i) => (
                                    <Dropdown.Item as="button" key={i} eventKey={item} href="#/action">{item}</Dropdown.Item>
                                ))

                            }
                        </DropdownButton>
                        <DropdownButton title="Year" id="basic-nav-dropdown1" onSelect={handleyear}>
                            <Dropdown.Item as="button" key="9" eventKey="All" href="#/action">All</Dropdown.Item>
                            <NavDropdown.Divider />
                            {
                                year.map((item, i) => (
                                    <Dropdown.Item as="button" key={i} eventKey={item} href="#/action">{item}</Dropdown.Item>
                                ))

                            }
                        </DropdownButton>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </div >

        )

    }
}
export default NavBar;