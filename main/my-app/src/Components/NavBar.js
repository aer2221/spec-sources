function NavBar() {
  return (
    <div class="nav">
      <p class="nav-text">Source Name:</p>
      <input type="text" id="entry"></input>
      <p class="nav-text">Source Email:</p>
      <input type="text" id="entry"></input>
      <div class="entry"></div>
      <button id="add" onclick>
        ADD
      </button>
    </div>
  );
}

export default NavBar;
