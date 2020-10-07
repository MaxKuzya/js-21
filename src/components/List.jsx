import React from "react";

export default function List({ items, onItemDelete }) {
  return (
    <ul className="list">
      {items.map(({ text, _id: id }) => {
        return (
          <li key={id}>
            {text}
            <button
              onClick={() => onItemDelete(id)}
              className="button-remove-note"
              type="button"
            >
              ✅
            </button>
          </li>
        );
      })}
    </ul>
  );
}
