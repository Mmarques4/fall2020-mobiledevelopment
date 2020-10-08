import React, { useState } from 'react';

export default function ClientTracker () {

  let [people, changeCounter] = useState(0);

  return (
    <div class ="tracker">
        <h2> Customer Counter </h2>
        <p> People Entering: {people} </p>
        <button class= "button" onClick={() => {
          changeCounter(people + 1);
        }}>Increase </button>
        <button class="site" onClick ={() => {
            changeCounter(0);
        }}> Reset</button>
    </div>

    );


}   

