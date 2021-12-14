import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import {
  EMAIL_INSTRUCTIONS,
  EMAIL_REGEX,
  NAME_INSTRUCTIONS,
  NAME_REGEX,
  PASSWORD_INSTRUCTIONS,
  PASSWORD_REGEX,
} from "../../Utils/fieldsValidation";
import { AnimationContainer, Background, Container, Content } from "./styles";
import Input from "../../Components/Input";
import { ButtonStyled } from "../../Components/Button/style";
import api from "../../Services";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .matches(NAME_REGEX, NAME_INSTRUCTIONS)
      .required("Campo obrigatório"),
    email: yup
      .string()
      .matches(EMAIL_REGEX, EMAIL_INSTRUCTIONS)
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres.")
      .matches(PASSWORD_REGEX, PASSWORD_INSTRUCTIONS)
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data)
    api
      .post("/users/", data)
      .then((response) => {
        console.log(response.data.username)
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="username"
              icon={FiUser}
              label="Nome de usuário"
              placeholder="Seu nome completo"
              error={errors.username?.message}
            />
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="E-mail"
              placeholder="Seu melhor e-mail"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Senha superssegura"
              type="password"
              error={errors.password?.message}
            />
            <ButtonStyled type="submit">Enviar</ButtonStyled>
            <p className="paragraph">
              Já possui conta? Faça <Link to="/login">login.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
