import React, { useState } from "react";
import PuppyList from "./Components/PuppyList";

const puppyArray = [
  { name: "fluffy", breed: "dalmation" },
  { name: "fido", breed: "poodle" },
  { name: "Buttons", breed: "daschund" },
  { name: "pebbles", breed: "pug" },
];

const App = () => {
  const [puppies, setPuppies] = useState(puppyArray);

  console.log(puppies);

  return (
    <div>
      <PuppyList puppies={puppies} />
    </div>
  );
};

export default App;