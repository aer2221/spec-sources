import "../App.css"
import React, {useState} from 'react';

function NavBar(handleAdd) {
  //setting a default blank string
  const [sourceName,setSourceName] = useState("");
  const [sourceEmail,setSourceEmail] = useState("");

  //<p class="nav-text">Source Name:</p>

  return (
    <div class="nav">
      <p class="nav-text"> Source Name:</p>
      <input type="text" id="entry" onChange={(e) => setSourceName(e.target.value)}></input>
      <div>{sourceName}</div>
      <p class="nav-text">Source Email:</p>
      <input type="text" id="entry" onChange={(e) => setSourceEmail(e.target.value)}></input>
      <button class="form-button" type="button" onClick= {() => handleAdd(sourceName,sourceEmail)}>
        ADD
      </button>
    </div>
  );
}

export default NavBar;
