// AddStudent.jsx
import { addStudent } from '../api';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

export default function AddStudent() {
  const navigate = useNavigate();

  const handleAdd = async (student) => {
    await addStudent(student);
    navigate('/');
  };

  return <StudentForm onSubmit={handleAdd} />;
}
