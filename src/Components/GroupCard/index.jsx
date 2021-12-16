import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { GroupsContext } from "../../Providers/groups";
import { GoDiffRenamed } from "react-icons/go";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { GiRabbit } from "react-icons/gi";
import {
  ButtonSubs,
  GroupCardContainer,
  ButtonActives,
  ContainerCardsG,
  ContainerGroupCard,
  ContainerRabbit,
} from "../../Styles/global";
import AddActivityModal from "../AddActivityModal";
import EditActivityModal from "../EditActivityModal";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
import EditGroupsModal from "../EditGroupsModal";

const GroupCard = ({ group }) => {
  // const { searchGoals } = useContext(GoalsContext);
  // const history = useHistory();

  const { subscribeGroups, removeActivity } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token")) || "";
  const [modalAddAct, setModalAddAct] = useState(false);
  const [modalEditAct, setModalEditAct] = useState(false);
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
      {/* <GroupCardContainer> */}
      {/* <ButtonActives onClick={() => setModalAddAct(true)}>
          <BiMessageSquareAdd size={20} />
        </ButtonActives> */}

      {/* {group.activities.length > 0
          ? group.activities.map((act) => (
              <div>
                <p>Atividade: {act.title}</p>
                <p>Data: {act.realization_time}</p>
                <ButtonActives onClick={() => setModalEditAct(true)}>
                  <AiOutlineEdit size={20} />
                </ButtonActives>
                <ButtonActives onClick={() => removeActivity(act.id, token)}>
                  <RiDeleteBin6Line size={20} />
                </ButtonActives>
                <EditActivityModal
                  setModalEditAct={setModalEditAct}
                  modalEditAct={modalEditAct}
                  token={token}
                  id={act.id}
                />
              </div>
            ))
          : null} */}
      {/* </GroupCardContainer> */}
    </>
  );
};

export default GroupCard;
