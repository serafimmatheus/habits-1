import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";

import { Button, ButtonSubs, GroupCardContainer } from "../../Styles/global";

const GroupCard = ({ group }) => {
  const { subscribeGroups } = useContext(GroupsContext);

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
        <div>
          <ButtonSubs onClick={() => handleclickSubscribe()}>
            Inscrever-se
          </ButtonSubs>
        </div>
      </GroupCardContainer>
    </>
  );
};

export default GroupCard;
