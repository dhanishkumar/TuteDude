import { useTodo } from '../context/TodoContext';
import { ListGroup, Button } from 'react-bootstrap';

export default function TodoList() {
  const { todos, deleteTodo, clearTodos } = useTodo();

  if (todos.length === 0) return <p>No to-dos found.</p>;

  return (
    <>
      <ListGroup className="mb-3">
        {todos.map(todo => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
            {todo.text}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="warning" onClick={clearTodos}>Clear All</Button>
    </>
  );
}
