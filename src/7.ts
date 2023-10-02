/**
 * ! Use `ENUMS` carefully
 */

// > Enums in typescript are foot guns.

// > If not used carefully, can cause lots of problems in your application.

// Example:
// We have a `status` field in a task entity as shown below:
type Task = {
  name: string;
  status: Status;
};

enum Status {
  TODO,
  IN_PROGRESS,
  DONE,
}

// lets see the problem
const ramTask: Task = {
  name: "do sth",
  status: Status.IN_PROGRESS,
};

// how to solve the problem
type BetterTask = {
  name: string;
  status: BetterStatus;
};
enum BetterStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
const shyamTask: BetterTask = {
  name: "do sth",
  status: BetterStatus.IN_PROGRESS,
};
export {};
