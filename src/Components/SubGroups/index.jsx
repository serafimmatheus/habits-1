import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Button } from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
const SubGroups = () => {
  const { myGroups, unsubscribeGroups, editGroups } = useContext(GroupsContext);
  const [modalEdit, setModalEdit] = useState(false);
  const groupId = JSON.parse(localStorage.getItem("@GroupId")) || "";
  console.log(groupId);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");

  return (
    <>
      {myGroups.map((group) => (
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
      ))}
      {myGroups.map(
        (group, ind) =>
          modalEdit &&
          ind === 0 && (
            <EditGroupsModal
              group_id={groupId}
              token={token}
              setModalEdit={setModalEdit}
              modalEdit={modalEdit}
            />
          )
      )}
    </>
  );
};
export default SubGroups;
