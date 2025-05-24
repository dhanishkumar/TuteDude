// App.jsx
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
  Navbar,
} from 'react-bootstrap';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>To-Do App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        {/* Input Section */}
        <Row className="justify-content-center mb-3">
          <Col md={6}>
            <Form.Group className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button onClick={handleAdd} variant="primary">
                Add
              </Button>
            </Form.Group>
          </Col>
        </Row>

        {/* Task List */}
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Header>Task List</Card.Header>
              <ListGroup variant="flush">
                {todoList.length === 0 ? (
                  <ListGroup.Item>No tasks added yet.</ListGroup.Item>
                ) : (
                  todoList.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {item}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
