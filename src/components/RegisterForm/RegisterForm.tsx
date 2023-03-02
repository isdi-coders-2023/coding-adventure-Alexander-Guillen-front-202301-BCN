import { useState } from "react";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
    image: "",
  });

  const handleUserCredentialsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]:
        event.target.id === "image"
          ? event.target.files![0]
          : event.target.value,
    });
  };

  const handleOnSubmit = (event: { preventDefault: () => void }) => {};

  const isFormEmpty =
    userCredentials.password && userCredentials.email && userCredentials.image;

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
            onChange={handleUserCredentialsChange}
          />
        </label>

        <label htmlFor="password" className="entries__label">
          Password
          <input
            type="password"
            id="password"
            placeholder="Introduce your password"
            className="entries__input"
            onChange={handleUserCredentialsChange}
          />
        </label>

        <label htmlFor="image" className="entries__label">
          Image
          <input
            type="file"
            id="image"
            className="entries__input"
            onChange={handleUserCredentialsChange}
          />
        </label>
      </div>
      <Button
        text="Sign in"
        buttonStatus={!isFormEmpty}
        action={handleOnSubmit}
      />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
