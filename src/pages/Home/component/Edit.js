import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ add }) => {
  const [title, setTitle] = useState('');
  function titleChange(e) {
    setTitle(e.target.value);
  }

  const [date, setDate] = useState('');
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState('');
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prev) {
      return [
        {
          id: v4(),
          title,
          date,
          time,
        },
        ...prev,
      ];
    });
  }

  return (
    <div>
      <h1>Memo</h1>
      <p>Title:</p>
      <input type="text" value={title} onChange={titleChange} />
      <p>Date:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default Edit;
