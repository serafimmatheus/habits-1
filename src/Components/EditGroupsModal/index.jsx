import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/habits";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const EditGroupsModal = ({ group_id, token, setModalEdit, modalEdit }) => {
  const { editGroups } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
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
    setModalEdit(false);
  };

  const onSubmit = (data) => {
    editGroups(group_id, data, token, reset, closeModal);
  };

  return (
    <Modal open={modalEdit}>
      <div>
        <h3>Editar Hábito</h3>
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <h4>Novo nome:</h4>
          <input type="text" placeholder="Nome" {...register("name")} />
          <button type="submit">Editar</button>
        </GroupsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default EditGroupsModal;
