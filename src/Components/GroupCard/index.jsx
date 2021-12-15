import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { GroupsContext } from "../../Providers/groups";

import {
  ButtonSubs,
  GroupCardContainer,
  ButtonActives,
} from "../../Styles/global";
import AddActivityModal from "../AddActivityModal";
import EditActivityModal from "../EditActivityModal";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";

const GroupCard = ({ group }) => {
  // const { searchGoals } = useContext(GoalsContext);
  // const history = useHistory();

  const { subscribeGroups, removeActivity } = useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token")) || "";
  const [modalAddAct, setModalAddAct] = useState(false);
  const [modalEditAct, setModalEditAct] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id);
  };

  return (
    <>
      <>
        <GroupCardContainer>
          <p>
            <strong>Nome do grupo: </strong> {group.name}
          </p>
          <p>
            <strong>Categoria: </strong> {group.category}
          </p>
          <p>
            <strong>Descrição: </strong> {group.description}
          </p>
          <div>
            <ButtonSubs onClick={() => handleclickSubscribe()}>
              Inscrever-se
            </ButtonSubs>
          </div>
        </GroupCardContainer>
      </>
      <GroupCardContainer>
        <ButtonActives onClick={() => setModalAddAct(true)}>
          <BiMessageSquareAdd size={20} />
        </ButtonActives>
        <AddActivityModal
          setModalAddAct={setModalAddAct}
          modalAddAct={modalAddAct}
          token={token}
          id={group.id}
        />
        {group.activities.length > 0
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
          : null}
      </GroupCardContainer>
    </>
  );
};

export default GroupCard;
