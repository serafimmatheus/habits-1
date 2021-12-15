import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";

import { Button, GroupCardContainer } from "../../Styles/global";

import EditGroupsModal from "../EditGroupsModal";

const GroupCard = ({ group }) => {
  const { subscribeGroups, unsubscribeGroups } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");
  const [modalEdit, setModalEdit] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id);
  };

  return (
    <>
      <GroupCardContainer>
        <p>
          <strong>Nome do grupo </strong> {group.name}
        </p>
        <p>
          <strong>Categoria </strong> {group.category}
        </p>
        <p>
          <strong>Descrição </strong> {group.description}
        </p>
        <p>{group.id}</p>
        <div>
          <Button onClick={() => handleclickSubscribe()}>Inscrever-se</Button>
        </div>
        {modalEdit ? (
          <EditGroupsModal
            group_id={group.id}
            token={token}
            setModalEdit={setModalEdit}
            modalEdit={modalEdit}
          />
        ) : (
          false
        )}
      </GroupCardContainer>
    </>
  );
};

export default GroupCard;
