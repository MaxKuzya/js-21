import React from "react";

export default class Form extends React.Component {
  state = {
    text: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      text: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createNote(this.state.text);

    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Текст:
          <input
            name="text"
            placeholder="Текст заметки"
            type="text"
            onChange={this.handleChange}
            value={text}
          />
        </label>
        <button type="submit">Создать заметку</button>
      </form>
    );
  }
}
