import React, {useState} from 'react';
import './App.css';
import FormList from './components/formComponents/FormList';
// import "reactstrap"
import Body from "./components/bodyComponents/Body"
import {Container, Row, Col} from "reactstrap"
import NavigationBarHai from './components/Navigation/NavigationBarHai';

function App() {
    // console.log("App run")
    let initialState = localStorage.getItem("todoList");
    if (initialState == null) {
        localStorage.setItem("todoList", "[]")
        initialState = "[]"
    }
    const [todoList,
        settodoList] = useState(JSON.parse(initialState)); // it is displaying data from local storage



    const [isEdit, setIsEdit] = useState({isEdit : false}); // it is for edit TodoList
        // console.log("is edit.isedit")
        // console.log(isEdit.isEdit)


    const addTodo = (object) => {
        settodoList((prev) => {
            let data = [...prev];
            data.unshift(object)
            localStorage.setItem("todoList", JSON.stringify(data));
            return [object , ...todoList];
        })
    }

    const deleteTodo = (id) => {
        settodoList((prev) => {
            let data = [...prev];
            data = data.filter((e) => e.id !== id)
            // console.log(data)
            localStorage.setItem("todoList", JSON.stringify(data));
            return [...data];
        })
    }
    const editTodo = (id) => {
        setIsEdit((prev)=>{
            let data = [...todoList];
            // console.log(data)
            // console.log(id)
            data = data.filter((e) => e.id === id)
            // console.log(data)
            return {isEdit : true , data : data[0] , id:id}
        })
    }
    const editTodoItem = (id , object) => {
        // console.log("id")
        // console.log(id)
        // console.log("object")
        // console.log(object)

        settodoList((prev)=>{
            let data = [...prev];
            // console.log(data)
            // console.log(id)
            data = data.map((ele) =>{
                return ele.id === id ? object : ele
            })
            localStorage.setItem("todoList" , JSON.stringify(data))
            // console.log(data)
            return [...data]
        })
    }

    const markAllAsComplete = ()=>{
        
        settodoList((prev)=>{
            let data = [...prev]
            data  = data.map((ele) =>{
                if(!ele.isDone)
                {
                    ele.isDone = true;
                    return ele;
                }
                return ele;
            })
            localStorage.setItem("todoList" , JSON.stringify(data))
            console.log(data)
            return [...data]
        })
    }
    const markAllAsInComplete = ()=>{
        
        settodoList((prev)=>{
            let data = [...prev]
            data  = data.map((ele) =>{
                if(ele.isDone)
                {
                    ele.isDone = false;
                    return ele;
                }
                return ele;
            })
            localStorage.setItem("todoList" , JSON.stringify(data))
            console.log(data)
            return [...data]
        })
    }
    const deleteAllcompleted = ()=>{
        
        settodoList((prev)=>{
            let data = [...prev]
            data  = data.filter((ele) => !ele.isDone)
            localStorage.setItem("todoList" , JSON.stringify(data))
            console.log(data)
            return [...data]
        })
    }



    return (
        <div className="App">
            <h1 className="title">Welcome to Your To-Do List App.</h1>
            {isEdit.isEdit ? <FormList object={isEdit} editTodo={editTodo} editTodoItem={editTodoItem}></FormList> : <FormList addTodo={addTodo} object={isEdit} id={todoList.length}></FormList>}

            <NavigationBarHai markAllAsComplete={markAllAsComplete} markAllAsInComplete={markAllAsInComplete} deleteAllcompleted={deleteAllcompleted}/>
            
            <Container fluid className="mt-3">
                <Row>
                
                    {todoList.length > 0
                        ? todoList.map((ele, i) => {
                            
                            return (
                                <Col key={i} sm={12} md={6} lg={4}  className="p-5">
                                    <Body i={1} data={ele} deleteTodo={deleteTodo} editTodo={editTodo}/>
                                </Col>
                            )
                        })
                        : <h1 className="m-5" style={{textAlign : "center"  , width:"100%"}}>No To Do List Found</h1>
                    }

                </Row>
            </Container>
        </div>
    );
}

export default App;
