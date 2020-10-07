const apiUrl =
  "https://crudcrud.com/api/e131c431f95a48c8ac49fbe35d952684/notes";

export const createNote = (text) => {
  const noteObject = { text: text };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteObject),
  };

  return fetch(apiUrl, options)
    .then((res) => res.json())
    .catch(console.error);
};

export const fetchNotes = () => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((items) => items.filter(({ text }) => Boolean(text)))
    .catch(console.error);
};

export const deleteNote = (id) => {
  const options = {
    method: "DELETE",
  };

  return fetch(apiUrl + `/${id}`, options).then(console.log, console.error);
};
