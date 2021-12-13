import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { GroupCardContainer } from "../../Styles/global";

const MyGroups = () => {
  const { myGroups } = useContext(GroupsContext);
  return (
    <GroupCardContainer>
      {myGroups.map((group) => (
        <li>{group.name}</li>
      ))}
    </GroupCardContainer>
  );
};
export default MyGroups;
