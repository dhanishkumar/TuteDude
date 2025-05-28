const API_URL = 'http://localhost:3001/students';

export const fetchStudents = async () => await (await fetch(API_URL)).json();

export const getStudent = async (id) => await (await fetch(`${API_URL}/${id}`)).json();

export const addStudent = async (student) =>
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

export const updateStudent = async (id, student) =>
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

export const deleteStudent = async (id) =>
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
