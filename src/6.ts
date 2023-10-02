/**
 * ! Type Declaration vs Type Assertion
 */

// > Type Declaration

// Example:
type Student = {
  name: string;
  class: number;
};

const ram: Student = {
  name: "Ram",
  class: 10,
};

// > Type Assertion

// Example:
const shyam = {
  name: "Shyam",
  class: 11,
} as Student;

// issue can be shown below
const hari = {} as Student;

// > Always prefer type declaration

// > Use type assertion only when you know better than typescript
// Example: In case of DOM, a programmer may know the type of HTML element/
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;

export {};
