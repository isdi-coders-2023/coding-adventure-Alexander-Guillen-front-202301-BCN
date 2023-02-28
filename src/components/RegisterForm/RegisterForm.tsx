import Button from "../Button/Button";

const RegisterForm = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Introduce your email" />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Introduce your password"
      />

      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        placeholder="Introduce your image"
        alt="user image"
      />

      <Button text="Sign in" />
    </form>
  );
};

export default RegisterForm;
