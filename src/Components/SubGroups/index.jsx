import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { MdOutlineCategory } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";
import {
  ButtonSubs,
  ContainerCardsG,
  ContainerGroupCard,
  ContainerRabbit,
  GroupCardContainer,
  GroupListContainer,
} from "../../Styles/global";
import EditGroupsModal from "../EditGroupsModal";
const SubGroups = () => {
  const { myGroups, unsubscribeGroups } = useContext(GroupsContext);
  const [modalEdit, setModalEdit] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Habits:token")) || "";

  return (
    <>
      {myGroups.map((group) =>
        group.length === 0 ? (
          true
        ) : (
          <GroupListContainer>
            <GroupCardContainer>
              <ContainerRabbit>
                <GiRabbit size={30} color="darkbronw" />
              </ContainerRabbit>
              <ContainerCardsG>
                <ContainerGroupCard>
                  <h3>
                    <GoDiffRenamed color="red" /> Nome do grupo :
                    <span>{group.name}</span>
                  </h3>
                </ContainerGroupCard>
                <ContainerGroupCard>
                  <h3>
                    <MdOutlineCategory color="blue" />
                    Categoria :<span>{group.category}</span>
                  </h3>{" "}
                </ContainerGroupCard>{" "}
                <ContainerGroupCard>
                  <h3>
                    <MdOutlineDescription
                      color="yellow"
                      overlinePosition={10}
                    />{" "}
                    Descrição :<span> {group.description}</span>
                  </h3>
                  <h3>{group.id}</h3>
                </ContainerGroupCard>{" "}
              </ContainerCardsG>
              <div>
                <ButtonSubs onClick={() => unsubscribeGroups(group.id)}>
                  Desinscrever-se
                </ButtonSubs>
                <ButtonSubs onClick={() => setModalEdit(true)}>
                  Editar
                </ButtonSubs>
              </div>
            </GroupCardContainer>
          </GroupListContainer>
        )
      )}
      {myGroups.map(
        (group, ind) =>
          modalEdit &&
          ind === 0 && (
            <EditGroupsModal id={group.id} setModalEdit={setModalEdit} />
          )
      )}
    </>
  );
};
export default SubGroups;
