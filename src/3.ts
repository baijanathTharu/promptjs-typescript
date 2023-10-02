/**
 * ! Why prefer typescript ?
 */

/**
 * There is bug in the Javascript program given below.
 * It might be very hard to debug this bug.
 *
 * ? Example code:
 * We have a list of CV's received for backend developers.
 * We need to find all the CV's who have at least 2 years of experience.
 *
 * ! Can you identify the bug below?
 *
 * const cvs = [
 *  {
 *    name: "Ram",
 *    experience: 2,
 *  },
 *  {
 *    name: "Hari",
 *    experience: "1 year",
 *  },
 *  {
 *    name: "Shyam",
 *    experience: "5 year",
 *  },
 * ];
 *
 * const cvsWithAtLeastTwoYearsOfExperience = [];
 * for (const cv of cvs) {
 *   if (cv.experience >= 2) {
 *     cvsWithAtLeastTwoYearsOfExperience.push(cv);
 *   }
 * }
 * console.log(cvsWithAtLeastTwoYearsOfExperience);
 *
 */

/**
 * If we had used Typescript, we would have identified
 * that bug during coding itself.
 */
//  Refactor the above code to check
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

export {};
