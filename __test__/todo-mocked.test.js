const axios = require("axios");
const getSingleTodoTitle = require("../todo");

test("gets the upper-cased title of todo", async () => {
  let fakeResponse = {
    data: {
      userId: 1,
      id: 1,
      title: "Make me Uppercase",
      completed: "false",
    },
  };
  axios.get = jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve(fakeResponse));

  let todoTitle = await getSingleTodoTitle(); // now jest will use the mock instead of actual API call
  expect(todoTitle).toBe("MAKE ME UPPERCASE");
});

test("gives an error and handles it correctly", async () => {
  let fakeError = {
    response: {
      status: 404,
      statusText: "Not Found",
    },
  };
  axios.get = jest.fn().mockImplementationOnce(() => Promise.reject(fakeError)); // not going to mess with other mocks

  let errorObj = await getSingleTodoTitle();
  expect(errorObj).toBe(fakeError.response);
});
