import { Container, InputContainer } from "./styles";

const Input = ({ label, icon: Icon, register, name, error = "", ...rest }) => {
  // "" = falsy, mas com !!error = false

  return (
    <Container>
      <p>{label}</p>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} autoComplete="off"/>
      </InputContainer>
      <div>
        {!!error && <span> {error}</span>}
      </div>
    </Container>
  );
};

export default Input;
