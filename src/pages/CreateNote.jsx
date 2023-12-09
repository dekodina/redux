import React, { useState } from "react";
import { Note } from "../schemas/note";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/notes/actions";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);
  const handleCreate = () => {
    const result = Note.safeParse({ title, body });

    if (!result.success) {
      return setErrors(result.error.flatten().fieldErrors);
    }

    dispatch(createNote(title, body)).then(() => navigate("/"));
  };
  return (
    <div className="py-4">
      <h2 className="text-2xl text-center">Create note</h2>
      <div className="max-w-xs mx-auto flex flex-col gap-2">
        {!!errors["title"] && <p className="text-red-500">{errors["title"]}</p>}
        <input
          type="text"
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={title}
          placeholder="Title"
          onChange={handleTitleChange}
        />
        {!!errors["body"] && <p className="text-red-500">{errors["body"]}</p>}
        <textarea
          className="border border-gray-300 py-1 px-2 rounded-md"
          value={body}
          placeholder="Body"
          onChange={handleBodyChange}
        />
        <button
          className="bg-slate-400 py-1 px-2 rounded-md text-white"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
