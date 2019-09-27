import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "./TestingForInput";

afterEach(cleanup);

const onSubmit = jest.fn();
console.error = jest.fn();

test("Input Form Test", () => {
  const { queryByTestId, getByText, getByLabelText } = render(
    <Input submitForm={onSubmit} />
  );
  expect(queryByTestId("input-form")).toBeTruthy();
  fireEvent.change(getByLabelText("text"), {
    target: { value: "Tacos are BAE" }
  });

  fireEvent.click(getByText("Submit"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: "Tacos are BAE"
  });
  //Receiving a weird HTML Prototype error due to targeting submit button instead of form. Still works as expected but hiding error.
  expect(console.error).toBeCalled();
});

//THIS FIXES SAID ERROR BUT DEMONSTRATING MOCKING ERRORS

// const onSubmit = jest.fn();

// test("Input Form Test", () => {
//   const { queryByTestId, getByLabelText } = render(
//     <Input submitForm={onSubmit} />
//   );
//   expect(queryByTestId("input-form")).toBeTruthy();
//   fireEvent.change(getByLabelText("text"), {
//     target: { value: "Tacos are BAE" }
//   });

//   fireEvent.submit(queryByTestId("input-form"));
//   expect(onSubmit).toHaveBeenCalledTimes(1);
//   expect(onSubmit).toHaveBeenCalledWith({
//     text: "Tacos are BAE"
//   });
// });
