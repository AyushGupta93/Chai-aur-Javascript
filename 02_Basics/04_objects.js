//const tinderUser = new Object(); //Singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Ayush";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ayush",
      lastname: "Gupta",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = { obj1, obj2 };  // wrong way to merge the obj
//const obj3 = Object.assign(obj1, obj2); // right way
//const obj3 = Object.assign({}, obj1, obj2); // right way

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

const user = [
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
];

//console.log(user[1].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//Object destructing
const course = {
  coursename: "Js in Hindi",
  courseInstructor: "Ayush",
  price: "999",
};

//course.courseInstructor;

//const { coursename, courseInstructor } = course;
// console.log(courseInstructor);
// console.log(coursename);

const { courseInstructor: Instructor } = course;
console.log(Instructor);

//JSON Format
// {
//     "name" : "ayush",
//     "coursename" : "Js in Hindi",
//     "price" : "Free"

// }
