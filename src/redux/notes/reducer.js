const DEFAULT_STATE = {
  notes: null,
  loading: true,
  error: null,
};

export function notesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "NOTES/ADD":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "NOTES/SET":
      return {
        notes: action.payload,
        loading: false,
        error: null,
      };
    case "NOTES/LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "NOTES/ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "NOTES/DELETE":
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload),
      };
    case "NOTES/EDIT":
      const updatedNote = action.payload;
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === updatedNote.id
            ? {
                ...note,
                title: updatedNote.title,
                body: updatedNote.body,
              }
            : note
        ),
      };
    default:
      return state;
  }
}
