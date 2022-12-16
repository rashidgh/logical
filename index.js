//! 1. how to define with class with properties and methods in javascript.
// class Car{
//     constructor(model, name) {
//         this.model = model;
//         this.name = name;
//     }
//     start() {
//         console.log(`Name of the car :${this.name}`);
//     }
// }
// let bmw = new Car(672, "MT15");
// // console.log(bmw);
// bmw.start();

//! 2 how to implement class inheritance in js.
// class Car{
//     constructor(model, name) {
//         this.model = model;
//         this.name = name;
//     }
//     start() {
//         console.log(this.name);
//     }
//     end() {
//         console.log("car stopped");
//     }
// }
// class ElectricCar extends Car{
//     dashboard() {
//         console.log("child method")
//     }
//     start() {
//         super.start();
//         super.end();
//         this.dashboard();
//     }
// }
// let evCar = new ElectricCar("Tesla", "A320");
// evCar.start();

// ! 3: how to find duplicate element in Array:
// let duplicateArray = ["mango", "banana", "apple", "mango","banana"];
// const duplicate = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) !== index);
// console.log(duplicate);

// ! 4: how to find count of duplicate in array:
// const months = ["may", "june", "dec", "may", "nov", "june","may"];
// const countOfDuplicates = months.reduce((obj, month) => {
//     if (obj[month] == undefined) {
//         // console.log(month);
//         obj[month] = 1;
//         // console.log(obj[month])
//         return obj;
//         // console.log(obj)
//     } else {
//         obj[month]++;
//         return obj
//     }
// }, {});
// console.log(countOfDuplicates);

// ! 5: check given number is an integer or not?
// const num = "12";
// console.log(isNaN(num));

// ! 6: Explain the difference between Object.freeze() vs const?

// const month = "july";
// month = "feb";
// console.log(month);

// let person = {
//     ename:"rashid"
// }
// Object.freeze(person);
// person.ename = "iqbal";
// console.log(person);

// ! 7: how to sort a number:
// let arr = [25, 12, 19, 8, 3, 54, 29, 1];
// let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);

// ! 8: how to sort a given array of strings:
// let months = ["jan", "feb", "march", "april", "may"];
// console.log(months.sort());

// !9:  how to find unique value in array:
// let id = [10, 20, 4, 5, 6, 4];
// const uniqueValue = id.filter((ele, index, arr) => arr.indexOf(ele) == index);
// console.log(uniqueValue);

// ! 10: how to find unique values from an Array in sorted oreder:
// let Ids = [23, 455, 12, 10, 63];
// const sortIdUnique = Ids.filter((ele, index, arr) => arr.indexOf(ele) == index);
// sortIdUnique.sort((a, b) => {
//     return a - b;
// })
// console.log(sortIdUnique);

// !11: how to find maximum value in numbered Array:
// let arr = [12, 45, 56, 23];
// let maxValue = (arr1) => {
//     return arr1.reduce(function (pre, curr) {
//         return pre > curr ? pre : curr;
//     })
// }
// console.log(maxValue(arr));

// !12: what is spread operator:
// let student = [1, 2, 3, 5, 9, 23];
// let student2 = [4, 2, 23, 21];
// let lab = [...student, ...student2];
// function readData(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// readData(...lab);

// ! 13 what are different data type in java script:
// let salary;
// console.log(salary);//undefined
// let isActive = true;
// console.log(isActive);//true(boolean);
// let Null = "";
// console.log(Null);//
// let a = 52;
// console.log(typeof (a));

// !14 How can you create an object in Js:
// let obj = {
//     ename: "sayantan",
//     role: "developer",
//     job: function H() {
//         return"hi"
//     }
// }
// console.log(obj.job());

// !15 what is the purpose of this keyword in javascript:

// class c1 {
//     tax = 10;
//     calculateTax() {
//         console.log("tax is " + this.tax);
//         console.log("this is function 1");
//     }
// }
// let a = new c1();
// console.log(a.calculateTax());

// ! 16 what is typeOf operator in Js.
// var tax = 10;
// console.log(typeof(tax));

// !17 what is difference between == & === in js.
// let a = 10;
// const b = "10";
// console.log(a==b)//true
// console.log(a===b)//false

// !18 what would be the result:
// console.log(13 + 6 - "2")//17
// console.log(13 + 6 + "5")//195
// console.log(13+6*2)//25
// console.log(6/2+13)//16

// !19 what do you maen by null:
// let s = null;
// console.log(typeof(s))//object

// !20 how to detect clients operating system:
// console.log(navigator.vendor);
// console.log(navigator.platform);

// !21
// let a = [1,2,3];
// console.log(Array.isArray(a));
// console.log(typeof (a));

// !22 Array length:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ["mango", "banana", "cherry"];
// console.log(arr1.length);
// console.log(arr2.length);

// !23 Array.shift():
// let arr = [1, 2, 3, 4, 5, 2];
// console.log(arr.shift())//1
// console.log(arr);//[2, 3, 4, 5, 2];

// !24 Array.push():
// let arr = [1, 2, 5, 8, 3];
// console.log(arr.push(89));//6
// console.log(arr)//[1, 2, 5, 8, 3, 89]

// !25 Array.pop():
// let arr = [1, 2, 5, 8, 3];
// console.log(arr.pop());//3
// console.log(arr)//[1, 2, 5, 8]

// !26 Array.Unshift():
// let arr = [1, 2, 5, 8, 3];
// console.log(arr.unshift(22));//1
// console.log(arr)//[2, 5, 8, 3]

// !27 Templete literals:
// let ename = "Rashid Bhai";
// let comp = "TestYantra";
// console.log(`my name is ${ename} and my company is ${comp}`);

// !28 what is output of the code:
// var y = 1;
// if (function f() { }) {
//     y += typeof f;
// }
// console.log(y)

// !29 what is NAN? what is its type?
// console.log(typeof (NaN));
// console.log(typeof NaN === "number");
// console.log(typeof NaN == "number");

// !30 what is output of these code:
// function foo1() {
//     return {
//         bar:"hello"
//     }
// }
// function foo2() {
//     return {
//       bar: "hii",
//     };
// }
// console.log(foo1());//{bar: 'hello'}
// console.log(foo2().bar);//hii

// !31 what is output of below code:
// console.log(false == 0);//true
// console.log(true == 0);//false

// !32 what is output of below code:
// console.log(1 < 2 < 3);//true
// console.log(3 > 2 > 1);//false

// !33 How do you clone an object:
// var obj = { name: "abc", id: 10 };
// var newobj = Object.assign({}, obj);
// console.log(newobj);

// !34 which keywords are used to handle exception?
// let arr = ["hello", "world", "test"];
// try {
//     console.log(arr[2])
// } catch (error) {
//     console.log(error)
// } finally {
//     console.log("finally executed");
// }

// !35 what is variable typing:
// let i = "45";
// i="hello"
// console.log(i);

// !36 how object properties are assigned:
// i = "ARC Tutorials";
// i = true;
// console.log(i);
// let student = {};
// student.name = "ARC";
// student.lastname = "Tutorials";
// console.log(student);

// !37 How do you sort and reverse an array without changing the orignal array?
// let students = ["a", "b", "h", "d", "e"];
// let b = students.slice().sort();
// console.log(students);
// console.log(b);

// !38 How to empty array:
// let arr = ["1", "6", "8", "10"];
// for (let i = arr.length; i > 0; i--){
//     arr.pop()
// }
// console.log(arr);
// console.log(arr.slice(5));

// ! 39 word is anagram or not:
// let string1 = "army";
// let string2 = "mary";
// let a = string1.split("").sort().join('');
// let b = string2.split("").sort().join('');
// if (a === b) {
//     console.log("yes we are anagram");
// } else {
//     console.log("no we are not anagram");
// }

// !40 print smallest value of array:
// let arr = [10, 20, 25, 21, 10, 58, 300, 10, 0.8];
// let b = arr.reduce((acc, l) => {
//   return acc < l ? acc : l;
// });
// console.log(b);
