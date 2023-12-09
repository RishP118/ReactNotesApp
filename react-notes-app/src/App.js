import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from 'nanoid';
import React from "react";
import NotesList from "./components/noteslist";
import Header from './components/Header';


const App=()=> {
  const [notes, setNotes]=useState([
    {
      id: nanoid(),
      text: 'This is my first note...',
      date: '15/11/2023',
      deadline: null

    },
    {
      id: nanoid(),
      text: 'This is my second note...',
      date: '16/11/2023',
      deadline: null

    },
    {
      id: nanoid(),
      text: 'This is my third note...',
      date: '17/11/2023',
      deadline: null

    },
    {
      id: nanoid(),
      text: 'This is my new note...',
      date: '23/11/2023',
      deadline: null
    },
  ]);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, deadline) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      deadline: deadline,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;