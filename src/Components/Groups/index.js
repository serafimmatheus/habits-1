import { useContext } from "react";
import { GroupContext } from "../../Providers/Groups";

const Groups = () => {
  const { request, groups } = useContext(GroupContext);
  console.log(groups);
  return (
    <div>
      <button onClick={request}>clique</button>
    </div>
  );
};

export default Groups;
