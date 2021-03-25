import React,{ useState } from 'react';
import { ListGroup, Row, Col, Button} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import uuid from 'uuid/v1'
import TodoForm from './TodoForm';
// import '../App.css';

function Todos(){
    const [todos,setTodos] = useState([]);

    const addTodo =(newTodo)=> {
        setTodos([...todos,{title: newTodo, id: uuid()}]);        
    }

    const removeTodo =(index)=>{
        const newTodoArray = [...todos];
        newTodoArray.splice(index,1);
        setTodos(newTodoArray);        
    }
    

    return (
        <>
            <div className="container fluid">
                <div className="todos-title">
                    <h1><Badge variant="info">Todo App</Badge></h1>
                </div>
                <div>
                    {todos.length > 0 ? (todos.map((todo,index)=>{
                        return (                            
                            <div key={todo.id} className="Container">
                                <Row>
                                    <Col xs={1} md={3} lg={4}>
                                    </Col>    
                                    <Col xs={10} md={6} lg={4}>
                                        <ListGroup className="my-1">
                                            <ListGroup.Item  id="todoItem" action variant="info">
                                                <span>{todo.title}</span>                                                                                       
                                                <Button as="input" onClick={()=>removeTodo(index)}variant="danger" size="sm" className="float-right" type="submit" value="X" />
                                            </ListGroup.Item>                                        
                                        </ListGroup>
                                    </Col>
                                    <Col xs={1} md={3} lg={4}>
                                    </Col>
                                </Row>
                            </div>
                                                        
                        )

                    })) : null}
                </div>                
            
            
            <TodoForm addTodo={addTodo} />

            </div>
        
        </>

    );
}

export default Todos;


// className="Container"