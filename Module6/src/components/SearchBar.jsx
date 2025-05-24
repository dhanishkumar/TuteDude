import { useTodo } from '../context/TodoContext';
import { Form } from 'react-bootstrap';

export default function SearchBar() {
  const { setSearchTerm } = useTodo();

  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search to-dos"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form>
  );
}
