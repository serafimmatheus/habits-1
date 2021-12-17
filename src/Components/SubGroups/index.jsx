import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { MdOutlineCategory } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";
import { useHistory } from "react-router-dom";
import {
  ButtonModal,
  ButtonSubs,
  ContainerCardsG,
  ContainerEdit,
  ContainerGroupCard,
  ContainerRabbit,
  GroupCardContainer,
  GroupListContainerS,
  InfoGroupCont,
} from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
import { GoalsContext } from "../../Providers/Goals";
const SubGroups = () => {
  const history = useHistory();
  const [modalEdit, setModalEdit] = useState(false);
  const { myGroups, unsubscribeGroups } = useContext(GroupsContext);
  const { searchGoals } = useContext(GoalsContext);
  return (
    <>
      <InfoGroupCont>
        <ButtonModal onClick={() => setModalEdit(true)}>
          Editar Grupos
        </ButtonModal>
      </InfoGroupCont>
      <GroupListContainerS>
        {myGroups.map((group) =>
          group.length === 0 ? (
            <h1>Nada aqui </h1>
          ) : (
            <GroupCardContainer key={group.id}>
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
              <ContainerEdit>
                <ButtonSubs onClick={() => unsubscribeGroups(group.id)}>
                  Desinscrever-se
                </ButtonSubs>
                <ButtonSubs
                  onClick={() => {
                    searchGoals(group.id);
                    history.push("/dashboard/goal");
                  }}
                >
                  Metas
                </ButtonSubs>
                <ButtonSubs
                  onClick={() =>
                    history.push(`/dashboard/${group.id}/activities`)
                  }
                >
                  Ver atividades
                </ButtonSubs>
                {modalEdit && (
                  <InfoGroupCont>
                    <EditGroupsModal
                      id={group.id}
                      setmodalEdit={setModalEdit}
                    ></EditGroupsModal>
                  </InfoGroupCont>
                )}
              </ContainerEdit>
            </GroupCardContainer>
          )
        )}
      </GroupListContainerS>
    </>
  );
};
export default SubGroups;
