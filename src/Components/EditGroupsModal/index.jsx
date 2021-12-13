import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const EditGroupsModal = ({
  group_id,
  token,
  setModalEditGroup,
  modalEditGroup,
}) => {
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
    setModalEditGroup(false);
  };

  const onSubmit = (data) => {
    editGroups(group_id, data, token, reset, closeModal);
  };

  return (
    <Modal open={modalEditGroup}>
      <h3>Editar Grupo </h3>
      <GroupsForm onSubmit={handleSubmit(onSubmit)}>
        <h4>Novo nome:</h4>
        <input type="text" placeholder="Nome" {...register("name")} />
        <input type="text" placeholder="Categoria" {...register("category")} />
        <button type="submit">Editar</button>
      </GroupsForm>
    </Modal>
  );
};

export default EditGroupsModal;
