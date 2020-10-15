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
function Body(props) {
    return (
        <div>
         // Card Start
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
         // Card End
        </div>
    );
}
export default Body;
