import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TestingButton from "./ReactButtonTesting";

//unmounts all components after testing for clean tree
afterEach(cleanup);

test("<TestingButton />", () => {
  const { getByTestId, debug } = render(<TestingButton />);
  const testButton = getByTestId("testOne");
  //expects there to be a child elembent to ensure button renders something
  expect(testButton.textContent).toBeTruthy();
  //shows what is rendered by component
  
  //Fires the click event which increments state by 1
  fireEvent.click(testButton);
  //checks that the button is rendering state the right way
  expect(testButton.textContent).toBe("1");

  fireEvent.click(testButton);
  expect(testButton.textContent).toBe("2");
  debug(testButton);

  fireEvent.click(testButton);
  expect(testButton.textContent).toBe("3");
  //debug();
});

// A second button in my testing file targeted separately from the other component by test ID's. Same tests as before
test("<TestingButton />", () => {
  const { getByTestId, debug } = render(<TestingButton />);
  const testButton = getByTestId("test2");
  expect(testButton.textContent).toBeTruthy();

  fireEvent.click(testButton);
  expect(testButton.textContent).toBe("1");

  fireEvent.click(testButton);
  expect(testButton.textContent).toBe("2");

  fireEvent.click(testButton);
  expect(testButton.textContent).toBe("3");
});
