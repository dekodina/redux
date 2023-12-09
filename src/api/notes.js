import { BASE_URL } from "./constants";
export const getUserNotes = async (userId) => {
  return fetch(`${BASE_URL}/notes?userId=${userId}&_sort=createdAt&_order=DESC`).then(
    (r) => r.json()
  );
}

export const deleteNote = async (id) => {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  }).then((r) => r.json());
}

export const getNoteById = async (id) => {
  return fetch(`${BASE_URL}/notes/${id}`).then((r) => {
    if (r.status !== 200) throw new Error("Not found");
    return r.json();
  });
}

export const createNote = async (userId, title, body, createdAt) => {
  return fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, body, createdAt }),
  }).then((r) => r.json());
};

export const editNote = async (id, title, body) => {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  }).then((r) => r.json());
};
