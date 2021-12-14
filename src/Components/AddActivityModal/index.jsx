import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const AddActivityModal = ({ modalAddAct, setModalAddAct, token, id }) => {
  const { addActivity } = useContext(GroupsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalAddAct(false);
  };

  const onSubmit = (data) => {
    data = { ...data, group: id };
    addActivity(data, token, reset, closeModal);
  };

  return (
    <Modal open={modalAddAct}>
      <div>
        <h3>ADICIONAR ATIVIDADE</h3>
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome da atividade"
            {...register("title")}
          />
          <input
            type="date"
            placeholder="Data"
            {...register("realization_time")}
          />
          <button type="submit">Adicionar atividade</button>
        </GroupsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default AddActivityModal;
