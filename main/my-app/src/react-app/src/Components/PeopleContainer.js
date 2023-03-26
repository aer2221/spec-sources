//larger container for all people objects
//anything that is not a string must be surrounded by squiggly brackets
//html code in javascript must be wrapped by  { }
//javascript function "map" parses array and utilizes attributes to display to user
function PeopleContainer({peopleList,handleDelete}) {
  return (
    <div class="flex-container">
      {peopleList.map((person,number) => (<Person number={number} name={person.name} email={person.email} 
      handleDelete={handleDelete}/>))}
    </div>
  );
}
//<Person number="1" name="Presbo" email="presbo@columbia.edu" />
//<Person number={2} name="John Jay Mouse" email="mouse@columbia.edu" />
//<Person number={3} name="Water Bottle Man" email="flipper@columbia.edu" />

export default PeopleContainer;

//function to define each individual person
//arguments in brackets are called "props," allow us to define each person
//this function allows us to not hardcode, is reusable
function Person({ number, name, email,handleDelete }) {
  return (
    <div class="person">
      <div class="number">{number+1}</div>
      <div class="name">{name}</div>
      <div class="email">{email}</div>
      <button id="delete" onClick={() => handleDelete(number)}>
        DELETE
      </button>
    </div>
  );
}
