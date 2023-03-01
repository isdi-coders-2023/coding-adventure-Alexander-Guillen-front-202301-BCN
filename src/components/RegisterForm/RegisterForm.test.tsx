import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );
    });

    afterEach(() => {
      cleanup();
    });

    test("Then it should show an input with name 'Email'", () => {
      const emailEntry = screen.getByLabelText("Email");

      expect(emailEntry).toBeInTheDocument();
    });

    test("Then it should show an input with name 'Password'", () => {
      const passwordEntry = screen.getByLabelText("Password");

      expect(passwordEntry).toBeInTheDocument();
    });

    test("Then it should show an input with name 'Image'", () => {
      const fileEntry = screen.getByLabelText("Image");

      expect(fileEntry).toBeInTheDocument();
    });

    test("Then it should show a button with name 'Sign in'", () => {
      const button = screen.getByRole("button", {
        name: "Sign in",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
