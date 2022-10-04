const giveMePromise = jest.fn(() => Promise.resolve("I am done without delay"));

test("resolves with the correct value", async () => {
  let result = await giveMePromise();
  expect(result).toBe("I am done without delay");
});
