const persons = [
  {
    name: "Navid",
    age: 25,
    job: "student",
    subjects: ["bangla", "english", "math"],
    address: {
      village: "Madapur",
      thana: "Daulatpur",
      district: "Kushtia",
    },
  },
  {
    name: "Rasel",
    age: 29,
    job: "student",
    subjects: ["bangla", "english", "math"],
  },
  {
    name: "Purno",
    age: 27,
    job: "student",
    subjects: ["bangla", "english", "math"],
    address: {
      village: "Chuadanga",
      thana: "Chuadanga Sadar",
      district: "Chuadanga",
    },
  },
];

// const personInfo = person[1]?.address?.thana;
// console.log(personInfo);

// persons.map((person)=> {
//     const add = `Person's name is ${person.name}. City is ${person?.address?.thana || "N/A"}`
//     console.log(add)
// })
const x = persons.find((person) => person.age >= 23)

console.log(x.name);
