import React from "react";

export default function NotesInput({
  setAddNote,
  text,
  setText,
  notes,
  setNotes,
  noteColor,
  setNoteColor,
}) {
  const colors = ["red", "green", "blue"];
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        note: text,
        id: Math.random() * 1000,
        color: noteColor,
      },
    ]);
    setText("");
    setAddNote(false);
    setNoteColor("red");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div id="colorInput">
          {colors.map((color) => (
            <input
              key={color}
              type="radio"
              name="color"
              value={color}
              onChange={(e) => setNoteColor(e.target.value)}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={e => setAddNote(false)}>Cancel</button>
    </>
  );
}
