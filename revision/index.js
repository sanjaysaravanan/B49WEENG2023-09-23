

// arrow functions

// const arrFunction = () => {
//   return 100;
// }


const arrowFunc = () => {
  console.log('Hello world');
}

const arrFunction = () => 100;

const arrFunc = () => console.log('Hello World');

console.log(arrFunction());


// spread function ---> spreading an iterable/composite variable 

const arrOne = ['Sanjay', 'B49WEENG', "FSD"];

const arrTwo = [...arrOne, 'Saturday', '2023-09-23'];

console.log(arrTwo);


// destrcturing --> unpacking a composite type ( Array, Object )

// array destrucutre depends on index positions

// const [name, batch, type] = arrOne;

// console.log(name, batch, type);



const obj = { name: "Sanjay", batch: 'B49WEENG', type: 'FSD' };

// object destrucutre depends on key names/ field names

// const { type, name } = obj;

// console.log(type, name);

//                       Left hand side
const displayInfo = ({ type, name, batch }) => {
  console.log('batch: ' + batch);
  console.log('type: ' + type);
  console.log('name: ' + name);
}
//          RHS
displayInfo(obj);


// rest operator - resting means combing the rest of the values apart from the destructured values
// to a composite type ( array / object )


const { name, ...restOfObj } = obj;

console.log('restOfObj: ', restOfObj);

// const displayInfo = ({ type, ...restInfo }) => {
//   console.log('batch: ' + restInfo.batch);
//   console.log('type: ' + type);
//   console.log('name: ' + restInfo.name);
// }
// //          RHS
// displayInfo(obj);




const batchName = 'B49WEENG';
const students = 15;
const batchType = 'Weeekend';

// property shorthand - variable name taken as keyname while creating an object
const batchObj = {
  batchName,
  students,
  batchType
};

console.log(batchObj);
