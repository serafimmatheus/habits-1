import { useContext, useState, useEffect } from "react";
import { GroupContext } from "../../Providers/Groups";
import { useForm } from "react-hook-form";

const Groups = () => {
  const { register, handleSubmit } = useForm({});
  const { request, requestSub, groups, subscribe, setInput } =
    useContext(GroupContext);
  const [inpt, setInpt] = useState("");
  useEffect(() => {});
  const subValue = (data) => {
    console.log(data);
  };
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
        <ul>
          {groups.map((group) => (
            <>
              <li>
                {group.name}
                <button onClick={() => requestSub(group.id)}>
                  {" "}
                  Increver-se
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <input onChange={(e) => setInpt(e.target.value)} />
      <button onClick={() => setInput(inpt)}>clique</button>
    </div>
  );
};

export default Groups;
