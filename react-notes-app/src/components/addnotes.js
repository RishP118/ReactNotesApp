import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, deadline);
      setNoteText('');
      setDeadline('');
    }
  };

  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type a note...'
        onChange={handleChange}
      ></textarea>
      <input
        type='datetime-local'
        onChange={handleDeadlineChange}
      />
      <div className="note-footer">
        <small>Deadline: {deadline && new Date(deadline).toLocaleString()}</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
