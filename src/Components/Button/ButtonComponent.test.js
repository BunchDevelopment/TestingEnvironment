import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as Button from "./Button";

afterEach(cleanup);
//Checks snapshot of button components
test("Button Component Snapshot", () => {
  const { container, debug } = render(
    <>
      <Button.Primary />
      <Button.Warning />
      <Button.Danger />
      <Button.Success />
    </>
  );
  debug();
  expect(container.children).toMatchSnapshot();
});
