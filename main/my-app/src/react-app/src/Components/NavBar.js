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
      <p class="nav-text">Source Email:</p>
      <input type="text" id="entry" onChange={(e) => setSourceEmail(e.target.value)}></input>
      <div class="entry"></div>
      <button id="add" type="button" onClick= {() => handleAdd(sourceName,sourceEmail)}>
        ADD
      </button>
    </div>
  );
}

export default NavBar;
