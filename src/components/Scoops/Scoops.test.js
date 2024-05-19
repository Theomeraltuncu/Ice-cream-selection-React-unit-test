import { fireEvent, render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

test("api verileri ekrana basılır", async () => {
  render(<Scoops />);

  const images = await screen.findAllByAltText("category-image");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("add item and rest item impcting to total price", async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  const addButtons = await screen.findAllByRole("button", { name: /add/i });
  const delButtons = await screen.findAllByRole("button", { name: /reset/i });

  const total = screen.getByTestId("total");

  expect(total.textContent).toBe("0");

  await user.click(addButtons[0]);

  expect(total.textContent).toBe("5");

  await user.dblClick(addButtons[2]);

  expect(total.textContent).toBe("15");

  await user.click(delButtons[0]);

  expect(total.textContent).toBe("10");

  await user.click(delButtons[2]);

  expect(total.textContent).toBe("0");
});
