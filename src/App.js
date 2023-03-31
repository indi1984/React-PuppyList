import React, { useState } from "react";
import PuppyList from "./Components/PuppyList";
import Form from './Components/Form';

const puppyArray = [
  { name: "fluffy", breed: "dalmation" },
  { name: "fido", breed: "poodle" },
  { name: "Buttons", breed: "daschund" },
  { name: "pebbles", breed: "pug" },
];

const App = () => {
  const [puppies, setPuppies] = useState(puppyArray);
  
  const addPuppy = (puppyObj) => {
    setPuppies([...puppies, puppyObj])
  }

  return (
    <div>
      <Form addPuppy={addPuppy} />
      <PuppyList puppies={puppies} />
    </div>
  )
}

export default App;