import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { MdOutlineCategory } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";
import {
  ButtonSubs,
  ContainerCardsG,
  ContainerEdit,
  ContainerGroupCard,
  ContainerRabbit,
  GroupCardContainer,
  GroupListContainerS,
} from "../../Styles/global";
const SubGroups = (groups) => {
  const { unsubscribeGroups } = useContext(GroupsContext);
  return (
    <>
      <GroupListContainerS>
        <>
          <GroupCardContainer>
            <ContainerRabbit>
              <GiRabbit size={30} color="darkbronw" />
            </ContainerRabbit>
            <ContainerCardsG>
              <ContainerGroupCard>
                <h3>
                  <GoDiffRenamed color="red" />
                  Nome do grupo: <span>{groups.name}</span>
                </h3>
              </ContainerGroupCard>
              <ContainerGroupCard>
                <h3>
                  <MdOutlineCategory color="blue" />
                  Categoria: <span>{groups.category}</span>
                </h3>{" "}
              </ContainerGroupCard>{" "}
              <ContainerGroupCard>
                <h3>
                  <MdOutlineDescription color="green" overlinePosition={10} />
                  Descrição: <span> {groups.description}</span>
                </h3>
              </ContainerGroupCard>{" "}
            </ContainerCardsG>
            <ContainerEdit>
              <ButtonSubs onClick={() => unsubscribeGroups(groups.id)}>
                Desinscrever-se
              </ButtonSubs>
            </ContainerEdit>
          </GroupCardContainer>
        </>
      </GroupListContainerS>
    </>
  );
};
export default SubGroups;
