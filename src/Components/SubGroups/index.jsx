import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Button, GroupCardContainerSub } from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
const SubGroups = () => {
  const { myGroups, unsubscribeGroups } = useContext(GroupsContext);
  const [modalEdit, setModalEdit] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");

  return (
    <GroupCardContainerSub>
      {myGroups.map((group) =>
        group.length === 0 ? (
          <div>Sem inscrições de grupos</div>
        ) : (
          <ul>
            <li>{group.name}</li>
            <li>{group.category}</li>
            <li>{group.description}</li>
            <li>{group.id}</li>
            <Button onClick={() => setModalEdit(true)}>Editar grupo</Button>
            <Button onClick={() => unsubscribeGroups(group.id)}>
              Desinscrever-se
            </Button>
          </ul>
        )
      )}
      {myGroups.map(
        (group, ind) =>
          modalEdit &&
          ind === 0 && (
            <EditGroupsModal
              id={group.id}
              token={token}
              setModalEdit={setModalEdit}
              modalEdit={modalEdit}
            />
          )
      )}
    </GroupCardContainerSub>
  );
};
export default SubGroups;
