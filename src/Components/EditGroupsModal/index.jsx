import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

const EditGroupsModal = ({ group_id, setModalEdit, modalEdit }) => {
  const { editGroups } = useContext(GroupsContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required(),
    category: yup.string().required(),
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

  const onSubmit = () => {
    editGroups(group_id, name, category, description, reset, closeModal);
  };

  return (
    <div>
      <h3>Editar Grupo </h3>
      <div>
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
        <button onClick={onSubmit}>Editar</button>
      </div>
    </div>
  );
};

export default EditGroupsModal;
