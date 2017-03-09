var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

newArray = students.sort(function(a, b){

  if (a.name === b.name){
    return b.age - a.age;
  } else if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }

});

console.log(newArray);










// function findName(){
// //var nameArray = [];
// for (var i = 0; i < students.length; i++){
//   var nameArray = [];
//   return nameArray = students[i].name;
//   }

// }
// function findAge(){
//   //var ageArray = [];
//   for (var i = 0; i < students.length; i++){
//     var ageArray = [];
//     return ageArray = students[i].age;

//   }
// }
// //console.log(name);
// console.log(findAge(students()));
//console.log(sorted);

