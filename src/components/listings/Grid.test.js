import Data from "../../data/courses.json";

// numbers
const numItems = Data.length;

describe("this is numbers test", () => {
  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });
});

// strings
const dataTest = Data[0].title;

test("title contains js", () => {
  expect(dataTest).toMatch(/JS/);
});

// arrays

const data2 = ["react native", "meteorJS"];
test("for the array contains", () => {
  expect(["react native", "meteorJS", "rrrjgjg"]).toEqual(
    expect.arrayContaining(data2)
  );
});

// objects

describe("these are object tests", () => {
  test("the first course should have a property of title", () => {
    expect(Data[0]).toHaveProperty("title");
  });

  test("the first course should have a property of title", () => {
    expect(Data[0]).toHaveProperty("views", "31,266");
  });
});
