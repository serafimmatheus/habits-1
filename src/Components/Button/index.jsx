import { ButtonStyled } from "./style";

export const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <ButtonStyled whiteSchema={whiteSchema} {...rest}>
      {children}
    </ButtonStyled>
  );
};
