import React from "react";
import { Card, Button } from 'react-bootstrap';

class Submission extends React.Component {

    render() {



        return (
            <div>
                <div className="row  border-dark border-bottom">
                    <div className="col-1">

                    </div>
                    <div className="col-2 d-flex">
                        <Card bg='dark' text= 'white'>
                            <Card.Header>Abstract</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                <div className="d-flex flex-row-reverse">
                                    <Button className="btn-primary  ">Submit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-2">
                        <Card bg='dark' text= 'white'>
                            <Card.Header>Proposal</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                <div className="d-flex flex-row-reverse">
                                    <Button className="btn-primary  ">Submit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row  border-dark border-top">
                    <div className="col-2">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-2">
                        <Card bg='dark' text= 'white'>
                            <Card.Header>SRS</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                             </Card.Text>
                             <div className="d-flex flex-row-reverse">
                                    <Button className="btn-primary  ">Submit</Button>
                             </div>
                            </Card.Body>
                        
                        </Card>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-2">
                        <Card bg='dark' text= 'white'>
                            <Card.Header>Final Report</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            <div className="d-flex flex-row-reverse">
                                    <Button className="btn-primary  ">Submit</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >

        )

    }
}
export default Submission;