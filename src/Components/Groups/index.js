import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GroupContext } from "../../Providers/Groups";

const Groups = () => {
  const { register, handleSubmit } = useForm({});
  const { subscribeGroups, groups, setInput, addGroups, groupsSearch } =
    useContext(GroupContext);
  const [inpt, setInpt] = useState("");
  const subValue = (data) => {
    addGroups(data.name, data.category, data.description);
  };
  useEffect(() => {
    groupsSearch();
  }, [groupsSearch]);
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
        {groups.map((group) => (
          <ul key={group.id}>
            <li>
              {group.name}
              <button onClick={() => subscribeGroups(group.id)}>
                {" "}
                Increver-se
              </button>
            </li>
          </ul>
        ))}
      </div>
      <div></div>
      <input onChange={(e) => setInpt(e.target.value)} />
      <button onClick={() => setInput(inpt)}>clique</button>
    </div>
  );
};

export default Groups;
