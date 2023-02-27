import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it renders with 'Sign in' text", () => {
    test("Then it should show a button with text 'Sign in'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button text="Sign in" />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", {
        name: "Sign in",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
