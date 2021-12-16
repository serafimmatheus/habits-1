import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { useHistory } from "react-router-dom";
import { Button, GroupCardContainer } from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
const GroupCard = ({ group }) => {
  const { subscribeGroups, unsubscribeGroups } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");
  const [modalEditGroup, setModalEditGroup] = useState(false);
  const history = useHistory();
  const goToActivities = () => {
    history.push(`/dashboard/${group.id}/activities`);
  };
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
      <Button onClick={() => goToActivities()}>Ver atividades</Button>
      <Button onClick={() => handleclickSubscribe()}>Inscrever-se</Button>
      <Button onClick={() => setModalEditGroup(true)}>Editar grupo</Button>
      <Button onClick={() => unsubscribeGroups(group.id)}>
        Desinscrever-se
      </Button>
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
