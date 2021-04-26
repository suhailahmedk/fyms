import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import { Container } from 'react-bootstrap';
const ProjectTable = ({ projects }) => {


    return (
        <Container>
            <Table striped hover>
                <thead>
                    <tr>
                        <td>PID</td>
                        <td>Project Title</td>
                        <td>Category</td>
                        <td>Year</td>
                        <td>Batch</td>
                        <td>Supervisor</td>

                    </tr>
                </thead>
                <tbody className="text-black">
                    {
                       projects.map((item, i) =>
                        (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.year}</td>
                                <td>{item.batch}</td>
                                <td>{item.Supervisor}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ProjectTable;
