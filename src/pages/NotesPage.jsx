import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getNotes } from "../redux/notes/actions";
import NotesList from "../components/NotesList";

const NotesPage = () => {
  const navigate = useNavigate();
  const { loading, error, notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const handleEdit = (id) => navigate(`/notes/${id}/edit`);
  const handleDelete = (id) =>
    dispatch(deleteNote(id)).then(() => navigate("."));

  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-xs bg-slate-400 px-2 py-1 text-center text-white ml-2">
        <Link to="/notes/add">Create note</Link>
      </div>
      {loading ? (
        <h2>Loading notes...</h2>
      ) : (
        <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default NotesPage;
