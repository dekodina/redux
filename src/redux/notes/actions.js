import * as notes from "../../api/notes";

export const getNotes = () => async (dispatch, getState) => {
  const authorId = getState().user.data.id;

  dispatch({ type: "NOTES/LOADING" });

  try {
    const data = await notes.getUserNotes(authorId);
    dispatch({ type: "NOTES/SET", payload: data });
  } catch (error) {
    dispatch({ type: "NOTES/ERROR", payload: error.toString() });
  }
};

export const createNote = (title, body) => async (dispatch, getState) => {
  const { id } = getState().user.data;
  const createdAt = new Date().toISOString();

  try {
    const newNote = { userId: id, title, body, createdAt };
    await notes.createNote(id, title, body, createdAt);
    dispatch({ type: "NOTES/ADD", payload: newNote });
  } catch (error) {
    dispatch({ type: "NOTES/ERROR", payload: error.toString() });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await notes.deleteNote(id);
    dispatch({ type: "NOTES/DELETE", payload: id });
  } catch (error) {
    dispatch({ type: "NOTES/ERROR", payload: error.toString() });
  }
};

export const editNote = (id, title, body) => async (dispatch) => {
  try {
    const data = await notes.editNote(id, title, body);
    dispatch({ type: "NOTES/EDIT", payload: { id, title, body } });
    return data;
  } catch (error) {
    dispatch({ type: "NOTES/ERROR", payload: error.toString() });
  }
};
