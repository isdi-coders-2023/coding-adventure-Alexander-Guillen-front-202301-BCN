import styled from "styled-components";

const RegisterFormStyled = styled.form`
  margin: 0 auto;
  text-align: center;

  .form-title {
    text-align: left;
    font-family: ${(props) => props.theme.fontFamilies.secondary};
    font-size: 20px;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 25px;
  }

  .entries {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 48px;

    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamilies.primary};
    font-weight: 400;

    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;

      color: ${(props) => props.theme.colors.terciary};
      font-weight: 700;
    }

    &__input {
      height: 40px;
      width: 100%;
      border-radius: 8px;
      padding: 11px;
      border: none;

      font-family: inherit;
      background: ${(props) => props.theme.colors.inputs};

      &::placeholder {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }

  @media (min-width: 987px) {
    max-width: 836px;

    .form-title {
      font-size: 40px;
    }

    .entries {
      gap: 65px;

      &__input {
        height: 57px;
      }
    }
  }
`;
export default RegisterFormStyled;
