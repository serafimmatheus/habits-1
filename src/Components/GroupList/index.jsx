import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

import GroupCard from "../GroupCard";

import { GroupListContainer, Title } from "../../Styles/global";

const GroupList = () => {
  const { groups } = useContext(GroupsContext);
  return (
    <>
      <GroupListContainer>
        {groups.map((item) => (
          <div>
            <GroupCard key={item.id} group={item} />
          </div>
        ))}
      </GroupListContainer>
    </>
  );
};

export default GroupList;
