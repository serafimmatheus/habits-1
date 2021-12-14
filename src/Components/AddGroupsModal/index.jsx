import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const AddGroupsModal = ({ modalCreateGroup, setModalCreateGroup, token }) => {
  const { createGroups } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
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
    setModalCreateGroup(false);
  };

  const onSubmit = (data) => {
    createGroups(data, token, reset, closeModal);
  };

  return (
    <Modal open={modalCreateGroup}>
      <div>
        <h3>ADICIONAR GRUPO</h3>
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome do grupo"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category")}
          />
          <button type="submit">Registrar novo grupo</button>
        </GroupsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default AddGroupsModal;
