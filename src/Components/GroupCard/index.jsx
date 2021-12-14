import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { GroupsContext } from "../../Providers/groups";

import { Button, GroupCardContainer } from "../../Styles/global";

import EditGroupsModal from "../EditGroupsModal";

const GroupCard = ({ group }) => {
  const { searchGoals } = useContext(GoalsContext);
  const history = useHistory();

  const { subscribeGroups, unsubscribeGroups } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");
  const [modalEdit, setModalEdit] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id);
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
      <p>{group.id}</p>

      <Button onClick={() => handleclickSubscribe()}>Inscrever-se</Button>
      <Button onClick={() => setModalEdit(true)}>Editar grupo</Button>
      <Button onClick={() => unsubscribeGroups(group.id)}>
        Desinscrever-se
      </Button>
      <Button
        onClick={() => {
          searchGoals(group.id);
          history.push("/dashboard/goal");
        }}
      >
        Metas
      </Button>
      {modalEdit ? (
        <EditGroupsModal
          group_id={group.id}
          token={token}
          setModalEdit={setModalEdit}
          modalEditGroup={modalEdit}
        />
      ) : (
        false
      )}
    </GroupCardContainer>
  );
};

export default GroupCard;
