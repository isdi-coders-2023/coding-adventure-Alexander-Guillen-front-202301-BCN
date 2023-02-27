import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it renders itself with 'Sign in' text", () => {
    test("Then it should show a button with accesible name 'Sign in'", () => {
      render(<Button innerText="Sign in" />);

      const button = screen.getByRole("button", {
        name: "Sign in",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
