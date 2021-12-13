import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";

import { GroupCardContainer } from "../../Styles/global";

import EditGroupsModal from "../EditHabitsModal";

const GroupCard = ({ group }) => {
  const { subscribeGroups, unsubscribeGroups, userId, userGroupId } =
    useContext(GroupsContext);
  const token = localStorage.getItem("@Habits:token");
  console.log(userId);
  const [modalEditGroup, setModalEditGroup] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id, token);
  };

  return (
    <GroupCardContainer>
      <p>
        <strong>Nome do grupo:</strong> {group.name}
      </p>
      <p>
        <strong>Categoria :</strong> {group.category}
      </p>
      <p>
        <strong>Descrição :</strong> {group.description}
      </p>

      <button onClick={() => handleclickSubscribe()}>Inscrever-se</button>
      <button onClick={() => setModalEditGroup(true)}>Editar grupo</button>
      <button onClick={() => unsubscribeGroups(group.id, token)}>
        Desinscrever-se
      </button>
      {modalEditGroup ? (
        <EditGroupsModal
          group_id={group.id}
          token={token}
          setModalEditGroup={setModalEditGroup}
          modalEditGroup={modalEditGroup}
        />
      ) : (
        false
      )}
    </GroupCardContainer>
  );
};

export default GroupCard;
