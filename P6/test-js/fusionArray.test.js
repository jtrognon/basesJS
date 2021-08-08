//https://jestjs.io/fr/docs/expect

const { test } = require("@jest/globals");
const fusionArray = require("./fusionArray");

test("fusion 2 tableau", () => {
  let arr1 = [1, 2];
  let arr2 = [3, 4];

  expect(fusionArray(arr1, arr2)).toEqual([1, 2, 3, 4]);
  expect(fusionArray(arr1, arr2)).not.toEqual([1, 2], [3, 4]);
});
