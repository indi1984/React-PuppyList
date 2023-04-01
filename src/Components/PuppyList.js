import React from 'react';

const PuppyList = ({puppies}) => {

  return (
    <ul>
      {
        puppies.map((pup, idx) => {
          return (
            <p key={ idx }>{ pup.name } is a { pup.breed }</p>
          );
        })
      }
    </ul>
  );
};

export default PuppyList;
