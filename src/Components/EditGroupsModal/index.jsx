import { useState } from "react";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Button, ContainerEdit } from "../../Styles/global";

const EditGroupsModal = ({ setModalEdit, id }) => {
  const { editGroups, myGroups } = useContext(GroupsContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const closeModal = () => {
    setModalEdit(false);
  };

  const onSubmit = (mId) => {
    editGroups(mId, name, category, description, closeModal);
  };

  return (
    <div>
      <h3>Editar Grupo </h3>
      <ContainerEdit>
        <h4>Novo nome:</h4>
        <input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={() => onSubmit(id)}>Editar</Button>s{" "}
        <Button onClick={() => closeModal()}>Fechar</Button>
      </ContainerEdit>
    </div>
  );
};

export default EditGroupsModal;
