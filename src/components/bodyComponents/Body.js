import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';
// import "./body.css"
function Body(props) {
    // console.log("body")
    // console.log(props.data.id)
    return (
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardText>{props.data.desc}</CardText>
                        <div className="btn" style={{ width:"100%"}}>
                        <Row>
                            <Col md={3}>

                            <Button id="edit" color="info" md={4} onClick={()=> props.editTodo(props.data.id)}>Edit</Button>
                            </Col>
                            <Col md={6}>
                            <Button disabled>{props.data.isDone ? "Task Done" : "Task Not Done"}</Button>
                            </Col>
                            <Col md={3}>

                            <Button id="delete" color="danger" md={4} onClick={()=> props.deleteTodo(props.data.id)}>Delete</Button>
                            </Col>
                        </Row>
                        </div>
                </CardBody>
            </Card>
        </div>
    );
}
export default Body;