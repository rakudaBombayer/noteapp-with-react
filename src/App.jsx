import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    console.log("新しくノートが追加されました。");
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }  else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  }

  return (
    <>
    <div className="App">
      <Sidebar onAddNote={onAddNote} 
      notes={notes} 
      onDeleteNote={onDeleteNote}  
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>  
    </div>
    </>
  )
}

export default App;
