import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled>
      <h2 className="form-title">Register for the event</h2>
      <div className="form-entries entries">
        <label htmlFor="email" className="entries__label">
          Email
          <input
            type="email"
            id="email"
            placeholder="Introduce your email"
            className="entries__input"
          />
        </label>

        <label htmlFor="password" className="entries__label">
          Password
          <input
            type="password"
            id="password"
            placeholder="Introduce your password"
            className="entries__input"
          />
        </label>

        <label htmlFor="image" className="entries__label">
          Image
          <input type="file" id="image" className="entries__input" />
        </label>
      </div>
      <Button text="Sign in" />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
