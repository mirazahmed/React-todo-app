import React,{useState} from 'react';
import {Form,Button,Col} from 'react-bootstrap';



export default function TodoForm({addTodo}) {

    const [newTodo, setNewtodo] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(newTodo);
        setNewtodo('');
        
    }

    return (
          
            // <div className="Container">
            <Form onSubmit={handleSubmit}>
                <Form.Row className="form_align">
                    <Col xs={1} md={3} lg={4}>
                    </Col>  
                    <Col xs={10} md={6} lg={4}>
                        <Form.Control  type="text" required  value={newTodo} onChange={(e)=>setNewtodo(e.target.value)} />
                    </Col>
                    <Col xs={1} md={3} lg={4}>
                    </Col> 
                </Form.Row>         
                             
                <Button variant="primary" type="submit">
                    Add Todos
                </Button>
                
            </Form>
            // </div>
        
        
    )
}



// {/* <Form>
//   <Form.Row>
//     <Col xs={7}>
//       <Form.Control placeholder="City" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="State" />
//     </Col>
//     <Col>
//       <Form.Control placeholder="Zip" />
//     </Col>
//   </Form.Row>
// </Form> */}