const cvs = [
  {
    name: "Ram",
    experience: 2,
  },
  {
    name: "Hari",
    experience: "1 year",
  },
  {
    name: "Shyam",
    experience: "5 year",
  },
];

const cvsWithAtLeastTwoYearsOfExperience = [];
for (const cv of cvs) {
  if (cv.experience >= 2) {
    cvsWithAtLeastTwoYearsOfExperience.push(cv);
  }
}
console.log(cvsWithAtLeastTwoYearsOfExperience);
