import { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../api';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by name or course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
      <table className="table-auto w-full border">
        <thead><tr><th>Name</th><th>Email</th><th>Course</th><th>Actions</th></tr></thead>
        <tbody>
          {paginated.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <Link to={`/edit/${s.id}`} className="text-blue-500 mr-2">Edit</Link>
                <button onClick={() => handleDelete(s.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4">
        {Array.from({ length: Math.ceil(filtered.length / pageSize) }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 mx-1 border ${page === i + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
