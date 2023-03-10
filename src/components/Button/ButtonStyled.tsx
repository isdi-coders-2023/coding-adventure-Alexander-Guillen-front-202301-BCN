import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 74px;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 20px;

  border-radius: 10px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 987px) {
    max-width: 323.25px;
    height: 57px;
    padding: 12px 0px 14px 0px;
  }
`;

export default ButtonStyled;
