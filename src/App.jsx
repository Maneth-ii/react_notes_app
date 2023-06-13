import { useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');


  useEffect(() => {
    const notesString = JSON.stringify(notes)
    localStorage.setItem("notes" , notesString);
  }, [notes]);

  const onTitleChange = (e) => {
    console.log(e.target.value);
    setInputTitle(e.target.value);
  };

  const onBodyChange = (e) => {
    setInputBody(e.target.value);
  };

  const addNoteFunction = () => {
    const newNote = {
      title: inputTitle,
      body: inputBody,
      lastModifiedDate: new Date().toLocaleDateString(),
    };
    newNote.title !== '' || newNote.body !== '' ? setNotes([...notes, newNote]) : alert('Please Add Note! ');
    setInputTitle('');
    setInputBody('');
  };

  const clickOnCard = (index) => {
    setInputTitle(notes[index].title);
    setInputBody(notes[index].body);
  };

  const onClickDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setInputTitle('');
    setInputBody('');
  };



  return (
    <>
      <Navigation />
      <div className="main-container">
        <Sidebar
          notes={notes}
          addNoteFunction={addNoteFunction}
          clickOncard={clickOnCard}
          onClickDelete={onClickDelete}
        />
        <Main
          onTitleChange={onTitleChange}
          onBodyChange={onBodyChange}
          title={inputTitle}
          body={inputBody}
        />
      </div>
    </>
  );
}

export default App;
