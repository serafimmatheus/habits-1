import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import {
  ButtonSubs,
  GroupCardContainer,
  ContainerCardsG,
  ContainerGroupCard,
  ContainerRabbit,
} from "../../Styles/global";

import { useHistory } from "react-router-dom";
import { Button } from "../../Styles/global";
import { GoalsContext } from "../../Providers/Goals";

const GroupCard = ({ group }) => {
  const { subscribeGroups } = useContext(GroupsContext);
  const { searchGoals } = useContext(GoalsContext);
  const history = useHistory();
  const goToActivities = () => {
    history.push(`/dashboard/${group.id}/activities`);
  };
  const handleclickSubscribe = () => {
    subscribeGroups(group.id);
  };
  return (
    <>
      <>
        <GroupCardContainer>
          <ContainerRabbit>
            <GiRabbit size={30} color="darkbronw" />
          </ContainerRabbit>
          <ContainerCardsG>
            <ContainerGroupCard>
              <h3>
                <GoDiffRenamed color="red" />
                Nome do grupo: <span>{group.name}</span>
              </h3>
            </ContainerGroupCard>
            <ContainerGroupCard>
              <h3>
                <MdOutlineCategory color="blue" />
                Categoria: <span>{group.category}</span>
              </h3>{" "}
            </ContainerGroupCard>{" "}
            <ContainerGroupCard>
              <h3>
                <MdOutlineDescription color="green" overlinePosition={10} />
                Descrição: <span> {group.description}</span>
              </h3>
            </ContainerGroupCard>{" "}
          </ContainerCardsG>
          <div>
            <ButtonSubs onClick={() => handleclickSubscribe()}>
              Inscrever-se
              <MdOutlineSubscriptions size={20} color="red" />
            </ButtonSubs>
            <Button
              onClick={() => {
                searchGoals(group.id);
                history.push("/dashboard/goal");
              }}
            >
              Metas
              <GiStairsGoal size={20} color="green" />
            </Button>
            <Button onClick={() => goToActivities()}>
              Atividades
              <BsCardChecklist size={20} />
            </Button>
          </div>
        </GroupCardContainer>
      </>
    </>
  );
};
export default GroupCard;
