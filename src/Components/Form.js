import React, { useState } from 'react';

function Form({addPuppy}) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const puppyObj = {
      name, 
      breed
    }
    addPuppy(puppyOjb)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        placeholder='puppy name' 
        onChange={(ev) => setName(ev.target.value)}
      />
      <label htmlFor='breed'>Breed:</label>
      <input
        type='text'
        id='breed'
        placeholder='puppy breed' 
        onChange={(ev) => setBreed(ev.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;