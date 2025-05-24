import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function TodoInput() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row>
        <Col sm={10}>
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new to-do"
          />
        </Col>
        <Col sm={2}>
          <Button type="submit" variant="primary" className="w-100">Add</Button>
        </Col>
      </Row>
    </Form>
  );
}
