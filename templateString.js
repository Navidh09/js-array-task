const name = "navid";
const age = 30;
const job = "bekar";

const sentence = "ami " + name + " amar boyos " + age;
const sentence1 = `ami ${name} amar boyos ${age} ami ${job}`;

// console.log(sentence1)

const myInfo = {
  name: "navid",
  age: 30,
  job: "student",
  subjects: ["bangla", "english", "math"],
};

const sentence2= `ami ${myInfo.name} amar boyos ${myInfo.age} amar subject gulo ${myInfo.subjects.map((sub)=> sub).join(" ")}`
console.log(sentence2)