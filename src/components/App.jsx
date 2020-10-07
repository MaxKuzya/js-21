import React from "react";
import { fetchNotes, createNote, deleteNote } from "../services/api";
import Form from "./Form";
import List from "./List";

class App extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetchNotes().then((items) => {
      this.setState({ items });
    });
  }

  handleCreateNote = (text) => {
    createNote(text).then((note) => {
      console.log(note);

      this.setState((state) => ({
        items: [...state.items, note],
      }));
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <Form createNote={this.handleCreateNote} />
        <List onItemDelete={deleteNote} items={items} />
      </div>
    );
  }
}

export default App;
