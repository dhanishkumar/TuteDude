// Students.jsx
import StudentList from '../components/StudentList';
import { Link } from 'react-router-dom';

export default function Students() {
  return (
    <div className="p-4">
      <Link to="/add" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add Student
      </Link>
      <StudentList />
    </div>
  );
}
