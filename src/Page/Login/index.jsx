import { useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Link } from "react-router-dom";

import api from "../../Services";

import { useState } from "react";

import { FiUser, FiLock } from "react-icons/fi";

import { AnimationContainer, Container, Content } from "./style";

import Input from "../../Components/Input/index";

import { ButtonStyled } from "../../Components/Button/style";

function Login() {
  const history = useHistory();

  const [error, setError] = useState({});

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatorio"),

    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api

      .post("sessions/", data)

      .then((response) => {
        const { access } = response.data;

        localStorage.setItem("@Habits:token", JSON.stringify(access));

        history.push("/dashboard");
      })

      .catch((err) => {
        setError({ message: "Username ou Senha invalidos" });
      });
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h1>Login</h1>

          {error?.message}

          <form onSubmit={handleSubmit(onSubmit)}>
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
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Senha superssegura"
              type="password"
              error={errors.password?.message}
            />

            <ButtonStyled type="submit">Logar</ButtonStyled>

            <p>
              Ainda não possui conta? Faça seu
              <Link to="/register">Cadastro.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>

      <div>
        <h2>Imagem</h2>
      </div>
    </Container>
  );
}

export default Login;
