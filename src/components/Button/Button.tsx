import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  innerText: string;
}

const Button = ({ innerText }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{innerText}</ButtonStyled>;
};

export default Button;
