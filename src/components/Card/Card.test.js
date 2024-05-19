import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

const item = {
  id: "123",
  name: "Vanilla",
  imagePath: "/images/vanilla.png",
};

test("Amout, headline and images printing according to propss", () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );

  const amount = screen.getByTestId("amount");

  expect(amount.textContent).toBe("5");

  screen.getByText("Vanilla");

  const image = screen.getByAltText("category-image");

  expect(image).toHaveAttribute("src", "/images/vanilla.png");
});

test("after clicking buttons functions called with right parameters", async () => {
  const user = userEvent.setup();

  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
      amount={0}
    />
  );

  const addBtn = screen.getByRole("button", { name: /add/i });
  const clearBtn = screen.getByRole("button", { name: /reset/i });

  await user.click(addBtn);

  expect(addMockFn).toHaveBeenCalledWith(item);

  await user.click(clearBtn);

  expect(clearMockFn).toHaveBeenCalledWith(item.id);
});
