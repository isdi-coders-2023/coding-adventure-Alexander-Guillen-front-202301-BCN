import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  action: (event: { preventDefault: () => void }) => void;
  text: string;
  buttonStatus: boolean;
}

const Button = ({ text, buttonStatus, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={buttonStatus} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
