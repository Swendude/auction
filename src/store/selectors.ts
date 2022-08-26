import { RootState } from ".";

export const selectCount = (reduxState: RootState) => reduxState.counter.count;

export const selectStudent = (n: number) => (reduxState: RootState) =>
  reduxState.counter.students[n];

// const multiply = (x, y, z) => x * y * z;

// const multiply1 = (x) => (y) => (z) => x * y * z;

// multiply(1, 2, 3);
// multiply1(1)(2)(3);

// const double = multiply1(1)(2);
