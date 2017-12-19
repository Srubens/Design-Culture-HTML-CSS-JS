var guests = [
  {name: "Maíra", birthYear: "1994"},
  {name: "José", birthYear: "2008"},
  {name: "Antônio", birthYear: "2000"},
  {name: "Sérgio", birthYear: "1990"}
];

var guestsAge = guests.map(person => person.age = 2017 - parseInt(person.birthYear));

var guestsFiltered = guests.filter(person => {
  if(person.age >= 18){
    return person;
  }
});

var averageAge = guestsFiltered.reduce((previous, next) => (previous.age + next.age) / 2);

console.log(guestsFiltered, averageAge);