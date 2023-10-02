/**
 * ! Introduction
 */

// > Typescript is superset of Javascript.

// ? What does superset mean ?

// > Different basic `types`

const sName: string = "Ram";
const age: number = 18;
const isPass: boolean = true;
const subjects: string[] = ["maths", "dsa", "physics"];
const address: {
  state: string;
  ward: number;
} = {
  state: "Lumbini",
  ward: 5,
};

// > type is a set of values.

/**
 * For e.g.
 *
 * > type `string` is a set of all strings.
 * > type `boolean` is a set of {true, false}.
 * > type `Date` is a set of instances of Date class.
 * > type `unknown` is a set of all types.
 * > type `never` is a empty set.
 */

export {};
