import { useState, useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import { ActivitiesContext } from "../../Providers/activities";

import ActivityCard from "../../Components/ActivityCard";

import { HeaderDash } from "../../Components/HeaderDash";

import {
  Button,
  GroupListContainer,
  GroupCardContainer,
} from "../../Styles/global";

import AddActivityModal from "../../Components/AddActivityModal";

const Activities = () => {
  const { getActivities } = useContext(ActivitiesContext);
  const [token] = useState(localStorage.getItem("@Habits:token"));

  const history = useHistory();
  const goToGroups = () => {
    history.push(`/dashboard/groups`);
  };

  const params = useParams();
  const groupId = params.group_id;

  const activities = getActivities(groupId);

  const [modalAddAct, setModalAddAct] = useState(false);
  const [modalEditAct, setModalEditAct] = useState(false);

  return (
    <>
      <HeaderDash />
      <GroupCardContainer>
        <h3>Atividades:</h3>
        <Button onClick={() => setModalAddAct(true)}>
          Adicionar atividade
        </Button>
        <Button onClick={() => goToGroups()}>Voltar</Button>
        <AddActivityModal
          setModalAddAct={setModalAddAct}
          modalAddAct={modalAddAct}
          token={token}
          id={groupId}
        />
        {activities.length > 0 ? (
          <GroupListContainer>
            {activities.map((act) => (
              <ActivityCard
                act={act}
                modalEditAct={modalEditAct}
                setModalEditAct={setModalEditAct}
                token={token}
              />
            ))}
          </GroupListContainer>
        ) : null}
      </GroupCardContainer>
    </>
  );
};

export default Activities;
