import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";

import GroupCard from "../GroupCard";

import { GroupListContainer } from "../../Styles/global";

const GroupList = () => {
  const { groups } = useContext(GroupsContext);
  return (
    <GroupListContainer>
      {groups.map((item, index) => (
        <GroupCard key={index} group={item} />
      ))}
    </GroupListContainer>
  );
};

export default GroupList;
