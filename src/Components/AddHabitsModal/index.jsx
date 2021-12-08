import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import jwt_decode from "jwt-decode";

import { useContext } from "react";
import { HabitsContext } from "../../Providers/habits";

import { Modal } from "@mui/material";
import { HabitsForm } from "../../Styles/global";

const AddHabitsModal = ({ modalHabits, setModalHabits, token }) => {
  const decoded = jwt_decode(token);

  const { addHabits } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    achieved: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalHabits(false);
  };

  const onSubmit = (data) => {
    data = { ...data, user: decoded.user_id };
    addHabits(data, token, reset, closeModal);
  };

  return (
    <Modal open={modalHabits}>
      <div>
        <h3>ADICIONAR HÁBITO</h3>
        <HabitsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome do hábito"
            {...register("title")}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category")}
          />
          <select {...register("difficulty")}>
            <option value="">Selecionar dificuldade</option>
            <option value="Muito fácil">1 - Muito fácil</option>
            <option value="Fácil">2 - Fácil</option>
            <option value="Intermediário">3 - Intermediário</option>
            <option value="Difícil">4 - Difícil</option>
            <option value="Muito difícil">5 - Muito difícil</option>
          </select>
          <select {...register("frequency")}>
            <option value="">Selecionar frequência</option>
            <option value="Diário">Diário</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
            <option value="Anual">Anual</option>
          </select>
          <select {...register("achieved")}>
            <option value="">Tarefa completada?</option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
          <h4>Progresso atual:</h4>
          <input
            type="number"
            placeholder="Progresso"
            {...register("how_much_achieved")}
          />
          <button type="submit">Registrar novo hábito</button>
        </HabitsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default AddHabitsModal;
