import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { HabitsContext } from "../../Providers/habits";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const EditActivityModal = ({ id, token, setModalEditAct, modalEditAct }) => {
  const { editActivity } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalEditAct(false);
  };

  const onSubmit = (data) => {
    editActivity(id, data, token, reset, closeModal);
  };

  return (
    <Modal open={modalEditAct}>
      <div>
        <h3>Editar Atividade</h3>
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="Nome da atividade"
            {...register("title")}
          />
          <button type="submit">Editar</button>
        </GroupsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default EditActivityModal;
