import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TaskTemplate from "../TaskTemplate";

test("adds and removes a task", () => {
  render(<TaskTemplate />);

  const input = screen.getByPlaceholderText("What needs to be done?");
  const addButton = screen.getByText("Add");
  fireEvent.change(input, { target: { value: "Test Task New" } });
  fireEvent.click(addButton);
  expect(screen.getByText("Test Task New")).toBeInTheDocument();

  const removeButton = screen.getByTestId(`remove-task`);
  fireEvent.click(removeButton);

  expect(screen.queryByText("Test Task New")).not.toBeInTheDocument();
});
