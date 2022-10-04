const giveMePromise = require("../index");

// 1. good old then block
test("resolves with the correct value", () => {
  giveMePromise().then((res) => expect(res).toBe("I am done"));
});

// 2. or the cutting edge Async/Await
test("resolves with the correct value", async () => {
  let result = await giveMePromise();
  expect(result).toBe("I am done");
});
