// const arr = ["navid", "rasel", "nyon","mehedi"];

// const num = arr.map((item) => item);

// console.log(`names- ${num}`)

// Destructuring

const add = (obj) => {
  return obj.a + obj.b;
};

const mult = ({ a, b }) => {
    return a * b;
  };

const obj = {
  a: 3,
  b: 2,
};

console.log(add(obj));
console.log(mult(obj));
