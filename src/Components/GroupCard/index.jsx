import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";

import { GroupCardContainer } from "../../Styles/global";

import EditGroupsModal from "../EditHabitsModal";

const GroupCard = ({ group }) => {
  const { subscribeGroups } = useContext(GroupsContext);

  const token = localStorage.getItem("@Habits:token");

  const [modalEdit, setModalEdit] = useState(false);

  return (
    <GroupCardContainer>
      <h3>Nome do grupo: {group.name}</h3>
      <EditGroupsModal
        group_id={group.id}
        token={token}
        setModalEdit={setModalEdit}
        modalEdit={modalEdit}
      />
    </GroupCardContainer>
  );
};

export default GroupCard;
