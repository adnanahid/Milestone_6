// task -1: console log the secondary school location of Sophia
// let data = {
//   Sophia: {
//     id: 33,
//     study: [
//       {
//         primary: [
//           { school_name: "ABC primary school" },
//           { location: "Peters burg" },
//         ],
//       },
//       {
//         secondary: [
//           { school_name: "ABC secondary school" },
//           { location: "St Lorence" },
//         ],
//       },
//     ],
//   },
// };

// console.log(data.Sophia.study[1].secondary[1]);

//! task-2: console .log  output: Petersburg, Herry

// let students = {
//   2222: {
//     name: "Jack",
//     section: "C",
//     class: "IX",
//     address: {
//       "building no": 12,
//       street: "St. Jonson",
//       city: "Petersburg",
//       country: "UK",
//     },
//   },
//   3333: {
//     name: "Herry",
//     section: "D",
//     class: "X",
//     address: {
//       "building no": 85,
//       street: "DC road",
//       city: "Kachukhet",
//       country: "Bangladesh",
//     },
//   },
// };

// console.log(students[2222].address.city + ', ' + students[3333].name);

//! task-3 : access and then show habluder adda
// show output Beginner
// let data2 = {
//   data: [
//     {
//       bookId: 1,
//       bookDetails: {
//         name: "habluder adda",
//         category: "XYZ",
//         price: "20$",
//       },
//       bookCategory: "Basic",
//     },
//     {
//       bookId: 2,
//       bookDetails: {
//         name: "gobluder adda",
//         category: "ABC",
//         price: "40$",
//       },
//       bookCategory: "Beginner",
//     },
//   ],
// };
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// const odd = [1,3,5,7,9];
// const even = []
// console.log(odd.map(num => num+1));
// for (num of odd){
//   even.push(num+1);
// }
// console.log(even);

// const add = [33, 50, 79, 78, 90, 101, 30];
// console.log(add.filter(n => n%10 === 0));

// console.log(add.find(n => n%10 === 0));

// const instructor = [
//   {name:'Nodi', age:'28', position:'senior'},
//   {name:'Akli', age:'26', position:'Junior'},
//   {name:'Shobuj', age:'30', position:'senior'}
// ]
// const filter = instructor.filter(instructor => instructor.position === 'senior');
// console.log(filter);

// const peoples = [
//   { name: "Nodi", age: 28 },
//   { name: "Akli", age: 26 },
//   { name: "Shobuj", age: 30 },
// ];
// console.log(peoples.map(peoples => peoples.age).reduce((p, c) => p + c, 0));


// let age_sum = 0;
// for (const people of peoples) {
//   const age = people.age;
//   age_sum += age;
// }
// console.log(age_sum);
