import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("add and remove souces impact to total price", async () => {
  const user = userEvent.setup();

  render(<Toppings />);

  const total = screen.getByTestId("total");

  const toppings = await screen.findAllByRole("checkbox");

  expect(total.textContent).toBe("0");

  toppings.forEach((i) => expect(i).not.toBeChecked());

  await user.click(toppings[0]);

  expect(total.textContent).toBe("3");

  await user.click(toppings[4]);

  expect(total.textContent).toBe("6");

  await user.click(toppings[4]);

  expect(total.textContent).toBe("3");

  await user.click(toppings[0]);

  expect(total.textContent).toBe("0");
});
