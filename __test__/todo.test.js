const getSingleTodoTitle = require("../todo");

test("gets the upper-cased title of the todo", async () => {
  let todoTitle = await getSingleTodoTitle();
  expect(todoTitle).toBe("DELECTUS AUT AUTEM");
});
