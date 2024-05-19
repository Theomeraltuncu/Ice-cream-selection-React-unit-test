import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("button is active", () => {
  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();

  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
});

test("Hover pop ups info note", () => {
  render(<Form />);

  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  const alert = screen.getByText(/read policy/i);

  fireEvent.click(checkbox);

  expect(alert).not.toBeVisible();

  fireEvent.mouseEnter(button);

  expect(alert).toBeVisible();

  fireEvent.mouseLeave(button);

  expect(alert).not.toBeVisible;
});
