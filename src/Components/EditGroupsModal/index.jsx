import { useState } from "react";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import {
  BackGround,
  Button,
  ButtonModal,
  ContainerEdit,
  GroupsDivForm,
} from "../../Styles/global";
const EditGroupsModal = ({ id, setModalEdit }) => {
  const { editGroups } = useContext(GroupsContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (id) => {
    editGroups(id, name, category, description, closeModal);
  };
  const closeModal = () => {
    setModalEdit(false);
  };

  return (
    <BackGround>
      <GroupsDivForm>
        <h3>Editar Grupo </h3>
        <input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <ButtonModal onClick={() => onSubmit(id)}>Editar</ButtonModal>
      </GroupsDivForm>
    </BackGround>
  );
};

export default EditGroupsModal;
