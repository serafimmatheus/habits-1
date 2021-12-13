import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GroupContext } from "../../Providers/Groups";
import GroupCard from "../GroupCard";

const Groups = () => {
  const { register, handleSubmit } = useForm({});
  const {
    subscribeGroups,
    groups,
    setInput,
    addGroups,
    groupsSearch,
    subscriptionsGroup,
    unsubGroups,
    subGroups,
    groupCreated,
  } = useContext(GroupContext);
  const [inpt, setInpt] = useState("");
  const subValue = (data) => {
    addGroups(data.name, data.category, data.description);
  };
  useEffect(() => {
    groupsSearch();
    subscriptionsGroup();
  }, []);
  return (
    <div>
      <div>crie um grupo</div>
      <form onSubmit={handleSubmit(subValue)}>
        <input {...register("name")} placeholder="Nome do grupo" />
        <input {...register("description")} placeholder="Descrição do grupo" />
        <input {...register("category")} placeholder="Categoria do grupo" />
        <button type="submit">Criar grupo</button>
      </form>
      <div>
        <h1>Grupos</h1>
        {groups.map((group) => (
          <ul key={group.id}>
            <li>
              <GroupCard
                name={group.name}
                description={group.description}
                category={group.category}
              />
              <button onClick={() => subscribeGroups(group.id)}>
                {" "}
                Increver-se
              </button>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <h1>Grupos inscritos</h1>
        {subGroups.map((sub) => (
          <div key={sub.id}>
            <GroupCard
              name={sub.name}
              description={sub.description}
              category={sub.category}
            />
            <button onClick={() => unsubGroups(sub.id)}>Desinscrever-se</button>
          </div>
        ))}
      </div>

      <input onChange={(e) => setInpt(e.target.value)} />
      <button onClick={() => setInput(inpt)}>clique</button>
    </div>
  );
};

export default Groups;
