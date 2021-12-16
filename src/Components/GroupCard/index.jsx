import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import {
  ButtonSubs,
  GroupCardContainer,
  ContainerCardsG,
  ContainerGroupCard,
  ContainerRabbit,
} from "../../Styles/global";

import EditGroupsModal from "../EditGroupsModal";

const GroupCard = ({ group }) => {
  // const { searchGoals } = useContext(GoalsContext);
  // const history = useHistory();

  const { subscribeGroups } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token")) || "";
  const [modalEdit, setModalEdit] = useState(false);

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
            </ButtonSubs>
            <ButtonSubs onClick={() => setModalEdit(true)}>Editar</ButtonSubs>
          </div>
          {modalEdit && (
            <EditGroupsModal id={group.id} setModalEdit={setModalEdit} />
          )}
        </GroupCardContainer>
      </>
    </>
  );
};

export default GroupCard;
