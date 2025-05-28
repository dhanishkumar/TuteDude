// EditStudent.jsx
import { useEffect, useState } from 'react';
import { getStudent, updateStudent } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

export default function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getStudent(id).then(setStudent);
  }, [id]);

  const handleUpdate = async (data) => {
    await updateStudent(id, data);
    navigate('/');
  };

  return student ? <StudentForm onSubmit={handleUpdate} initialData={student} /> : <p>Loading...</p>;
}
