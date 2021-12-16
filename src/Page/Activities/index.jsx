import { useState, useContext, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import { ActivitiesContext } from "../../Providers/activities";

import ActivityCard from "../../Components/ActivityCard";

import Header from "../../Components/Header";

import { Button, GroupListContainer } from "../../Styles/global";

import AddActivityModal from "../../Components/AddActivityModal";

const Activities = () => {
  const { activities, getActivities, token } = useContext(ActivitiesContext);

  const [rendered, setRendered] = useState(false);

  const history = useHistory();
  const goToGroups = () => {
    history.push(`/dashboard/groups`);
  };

  const params = useParams();
  const group_id = params.group_id;

  useEffect(() => {
    getActivities(group_id);
    setRendered(true); // eslint-disable-next-line
  }, [token]);

  const [modalAddAct, setModalAddAct] = useState(false);

  return (
    <>
      <Header />
      <h3>Atividades:</h3>
      <Button onClick={() => setModalAddAct(true)}>Adicionar atividade</Button>
      <Button onClick={() => goToGroups()}>Voltar</Button>
      <AddActivityModal
        setModalAddAct={setModalAddAct}
        modalAddAct={modalAddAct}
        id={group_id}
      />
      {rendered && activities.length > 0 ? (
        <GroupListContainer>
          {activities.map((act, index) => (
            <ActivityCard act={act} key={index} group_id={group_id} />
          ))}
        </GroupListContainer>
      ) : null}
    </>
  );
};

export default Activities;
