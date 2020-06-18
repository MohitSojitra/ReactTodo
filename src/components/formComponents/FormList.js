import React , {useState} from "react";
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Button
} from "reactstrap"
import Container from "reactstrap/lib/Container";
import "./formHeader.css"


function FormList(props) {
    console.log("form props");
    console.log(props)

    let [isComplete, setisComplete] = useState(props.object.isEdit ? props.object.data.isDone : false);
    let [title, settitle] = useState(props.object.isEdit ? props.object.data.title : "");
    let [desc, setDesc] = useState(props.object.isEdit ? props.object.data.desc : "");
    
    let tit = (props.object.isEdit && title === "") ? props.object.data.title : title
    let des = (props.object.isEdit && desc === "") ? props.object.data.desc : desc
    let isComp = (props.object.isEdit && props.object.data.isDone)? !isComplete : isComplete
    // let isComp = (props.object.isEdit && !isComplete) ? props.object.data.isDone : isComplete
    // console.log(isComp)
    // console.log(des)
    // console.log(title)
    // console.log(desc)
    

    const addItem = ()=>{
        let title1 = document.getElementById("title")
        let desc1 = document.getElementById("desc")
        
        props.addTodo({title : title1.value , desc : desc1.value , isDone : isComplete , id : props.id})
        setDesc("");
        settitle("");
        setisComplete(false)
    }
    const editItem = (id)=>{
        let title1 = document.getElementById("title")
        let desc1 = document.getElementById("desc")
        
        props.editTodoItem( id,{title : title1.value , desc : desc1.value , isDone : isComp , id : props.object.id})
        props.object.isDone = false
        setDesc("");
        settitle("");
        setisComplete(false)
    }

    return (
        <div>

        <Container className="mt-5 form-header">
            <Form>
                <FormGroup className="row">
                    <Label sm={2} className="text-center">Title :
                    </Label>
                    <Col sm={10}>
                    
                    <Input type="text" id="title" value={tit} onChange={(e)=>settitle(e.target.value)}></Input>
                        
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label sm={2} className="text-center">Description :
                    </Label>
                    <Col sm={10}>
                    
                        <Input type="text" id="desc"  value={des} onChange={(e)=> setDesc(e.target.value)}></Input>
                        
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label for="exampleCheckbox" sm={2}>Mark as Completed:</Label>
                    <Col sm={10}>
                    
                    <Button onClick={()=> setisComplete(!isComplete)}>{isComp ? "Click to uncomplete" : "click to complete"}</Button>
                    <Label for="exampleCheckbox" sm={5} className="text-center">{ `   ${isComp ? "Compete task click to UnComplete" : "InComplete task click to complete it"}`}</Label>
                    </Col>

                </FormGroup>

                <div  className="text-center m-2 row">
                    <Col sm={12}>
                        <Button color="success" className="text-center p-3" onClick={()=> props.object.isEdit ? editItem(props.object.data.id) : addItem()}>success</Button>
                    </Col>

                </div>
            </Form>
        </Container>
        </div>
    );
}

export default FormList;