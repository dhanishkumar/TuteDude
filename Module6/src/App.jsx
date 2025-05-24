import { Container } from 'react-bootstrap';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <TodoProvider>
      <Container className="mt-5">
        <h2 className="mb-4">React Vite To-Do App</h2>
        <SearchBar />
        <TodoInput />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}
