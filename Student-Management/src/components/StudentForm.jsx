import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Only run when initialData changes (edit form)
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.course.trim()) newErrors.course = "Course is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSubmit(form); // send form to parent (handles POST/PUT)
      navigate("/"); // redirect to student list
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
        className="w-full border p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="text"
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Enter course"
        className="w-full border p-2 rounded"
      />
      {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
