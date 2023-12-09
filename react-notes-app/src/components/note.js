import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, deadline, handleDeleteNote }) => {
  const [isDeadlineReached, setIsDeadlineReached] = useState(false);

  useEffect(() => {
    if (deadline) {
      const currentDateTime = new Date();
      const deadlineDateTime = new Date(deadline);
      setIsDeadlineReached(currentDateTime >= deadlineDateTime);
    }
  }, [deadline]);

  return (
    <div className={`note ${isDeadlineReached ? 'deadline-reached' : ''}`}>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        {deadline && (
          <small className="deadline-text">
            Deadline: {deadline && new Date(deadline).toLocaleString()}
          </small>
        )}
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
    </div>
  );
};

export default Note;
