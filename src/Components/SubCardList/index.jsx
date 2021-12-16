import { GroupsContext } from "../../Providers/groups";
import { useContext } from "react";
import SubGroups from "../SubGroups";
const SubCardList = () => {
  const { myGroups } = useContext(GroupsContext);
  return (
    <div>
      {myGroups.map((group) => (
        <SubGroups groups={group} />
      ))}
    </div>
  );
};
export default SubCardList;
