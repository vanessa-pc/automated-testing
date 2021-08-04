// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["dream", "y all", "edges"])).toBe("dream");
  expect(
    findShortestString(["firefighter", "police", "nurses", "doctor"])
  ).toBe("police");
  expect(findShortestString(["one", "two", "three"])).toBe("one");
});
