//  ===================  Task #1 ======================== //
// const a = [1, 2, 3];
// const b = [5, [6, 7]];
// const c = 4;
// const finalArray = [...a, c, b[0], ...b[1]];
// console.log(finalArray); // [1, 2, 3, 4, 5, 6, 7]
// // ===  via concat()
// const finalArray2 = a.concat(c, b[0], b[1]);
// console.log(finalArray2); // [1, 2, 3, 4, 5, 6, 7]
//  ===================  Task #2 ======================== //
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // splice()
// console.log(a.splice(3, 3, 1, 2, 3)); // [1, 2, 3, 1, 2, 3, 7, 8, 9]
// console.log(a);
// // copyWithin()
// console.log(a.copyWithin(3, 0, 3)); // [1, 2, 3, 1, 2, 3, 7, 8, 9]
//  ===================  Task #3 ======================== //
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(); // [1, 2, 3, 4, 5, 0, 0, 0, 9]
// const b = a.splice(5, 3, 0, 0, 0);
// console.log(a); // [1, 2, 3, 4, 5, 0, 0, 0, 9]
// const c = a.slice(); // a copy of the array
// console.log(c); // // [1, 2, 3, 4, 5, 0, 0, 0, 9]
//  ===================  Task #4 ======================== //
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a.fill(0, 5, 8)); //  [1, 2, 3, 4, 5, 0, 0, 0, 9]
//  ===================  Task #5 ======================== //
// const a = ['a', 'h', 'n', 'g', 'r', 'n', 'y', 'n', 'm'];
// let b = 0;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === 'n') {
//     b = i;
//   }
// }
// console.log(b);
//  ===================  Task #6 ======================== //
// const a = [1, [2, 3], [4, 5], 6, 7, 8, [9, 10]];
// const b = [];
// for (const item of a) {
//   if (Array.isArray(item)) {
//     b.push(...item);
//   } else {
//     b.push(item);
//   }
// }
// console.log(b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  ===================  Task #7 ======================== //
// function reverseNumber(number) {
//   //   console.log(number);
//   const b = [];
//   const splitNumber = String(number);
//   for (let i = splitNumber.length - 1; i >= 0; i -= 1) {
//     b.push(splitNumber[i]);
//   }
//   if (b[b.length - 1] === '-') {
//     b.unshift(b[b.length - 1]);
//     b.pop(1);
//   }
//   return Number(b.join(''));
// }
// // console.log(reverseNumber(12345)); // 54321
// console.log(reverseNumber(-12345)); // -54321
//  ===================  Task #8 ======================== //
// function convert(...args) {
//   console.log(args);
//   const newArray = [];
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       newArray.push(arg.toString());
//     } else {
//       newArray.push(Number(arg));
//     }
//   }
//   return newArray;
// }
// console.log(convert(1, '2', '3', 4)); // ['1', 2, 3, '4']
// function convert(...args) {
//   const newArray = [];
//   for (const item of args) {
//     typeof item === 'number' ? newArray.push(item.toString()) : newArray.push(Number(item));
//   }
//   return newArray;
// }
// console.log(convert(1, '2', '3', 4)); // ['1', 2, 3, '4']
//  ===================  Task #9 ======================== //
// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// function usersUpdate(parameters) {
//   const newUsers = [];
//   for (const user of users) {
//     const { id, name, email, eyeColor: favoriteColor, age } = user;
//     const newUser = { id, name, email, favoriteColor, age };
//     newUsers.push(newUser);
//   }
//   return newUsers;
// }
// console.log(usersUpdate(users));
