import { useState } from "react";
import "./App.css";
import AddNotesBtn from "./components/AddNotesBtn";
import NotesInput from "./components/NotesInput";
import NotesRender from "./components/NotesRender";

function App() {
  const [addNote, setAddNote] = useState(false);
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([{color: "red", id: 219.83046983412092, note: "a"},{color: "red", id: 29.83046983412092, note: "b"},{color: "red", id: 21.83046983412092, note: "c"}]);
  const [noteColor, setNoteColor] = useState('red')
  return (
    <>
      <AddNotesBtn 
        addNote={addNote} 
        setAddNote={setAddNote} 
      />
      {
        addNote && 
          <NotesInput
            addNote={addNote} 
            setAddNote={setAddNote} 
            text={text}
            setText={setText}
            notes={notes}
            setNotes={setNotes}
            noteColor={noteColor}
            setNoteColor={setNoteColor}
          />
      }
      <NotesRender notes={notes}/>
    </>
  );
}

export default App;
