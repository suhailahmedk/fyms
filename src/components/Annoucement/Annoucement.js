import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container } from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';



const Annoucement = ({ data }) => {
    const met = () => {
        console.log(data);
    }
    met();
    return (
        <ScrollArea speed={0.8} className="area" contentClassName="content"  horizontal={false}>
        <Container className="overflow-y-scroll h-80 ">
            {
                data.map((item) => (

                    <div className="row my-5 d-flex justify-content-center">
                        <Card className="text-left shadow-lg" style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title>{item.subject}</Card.Title>
                                <Card.Text>
                                    {item.Discription}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer className="text-muted"><div className="d-flex justify-content-between"><div classNam="p-2 col-example text-left">By: {item.Coordinator}</div><span className=" d-flex justify-content-end">Posted at {item.time}</span></div></Card.Footer>
                        </Card>
                    </div>
                ))
            }
        </Container>
        </ScrollArea>
    );
};

export default Annoucement;
