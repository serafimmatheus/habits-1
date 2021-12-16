import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { IoMdExit } from "react-icons/io";
import { Modal } from "@mui/material";
import { ButtonModal, GroupsForm } from "../../Styles/global";
import { BiAddToQueue } from "react-icons/bi";
const AddGroupsModal = ({ modalCreateGroup, setModalCreateGroup, token }) => {
  const { createGroups } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
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
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie seu grupo</h1>
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
          <ButtonModal type="submit">
            Criar grupo <BiAddToQueue />
          </ButtonModal>
          <ButtonModal onClick={() => closeModal()}>
            Voltar
            <IoMdExit />
          </ButtonModal>
        </GroupsForm>
      </div>
    </Modal>
  );
};

export default AddGroupsModal;
