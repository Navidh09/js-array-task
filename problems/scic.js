const students = [
  {
    name: "mehedi hasan",
    email: "mehedi@gmail.com",
    avg: 56,
    fiftyPercent: true,
  },
  {
    name: "rakib hasan",
    email: "rakib@gmail.com",
    avg: 57,
    fiftyPercent: false,
  },
  {
    name: "sakib hasan",
    email: "sakib@gmail.com",
    avg: 57,
    fiftyPercent: true,
  },
  {
    name: "sojib hasan",
    email: "sojib@gmail.com",
    avg: 42,
    fiftyPercent: false,
  },
  {
    name: "raihan hasan",
    email: "raihan@gmail.com",
    avg: 52,
    fiftyPercent: true,
  },
  {
    name: "afjal ahmed",
    email: "afjal@gmail.com",
    avg: 32,
    fiftyPercent: false,
  },
  {
    name: "jackie chan",
    email: "jackie@gmail.com",
    avg: 37,
    fiftyPercent: false,
  },
];

// const scic = students.filter((student)=> student.avg >= 50 && student.fiftyPercent === true);
// console.log(scic)

const findScic = (param) => {
  const scic = param.filter(
    (student) => student.avg >= 50 && student.fiftyPercent === true
  );
  const names = scic.map((name)=> name.name).join(", ");
  console.log(names)
};

const results = findScic(students);
