import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";

import EditActivityModal from "../EditActivityModal";

import { Button, GroupCardContainer } from "../../Styles/global";

const ActivityCard = (act, modalEditAct, setModalEditAct, token) => {
  const { removeActivity } = useContext(ActivitiesContext);

  return (
    <GroupCardContainer>
      <p>Atividade: {act.title}</p>
      <p>Data: {act.realization_time}</p>
      <Button onClick={() => setModalEditAct(true)}>Editar atividade</Button>
      <Button onClick={() => removeActivity(act.id)}>Remover atividade</Button>
      <EditActivityModal
        setModalEditAct={setModalEditAct}
        modalEditAct={modalEditAct}
        token={token}
        id={act.id}
      />
    </GroupCardContainer>
  );
};

export default ActivityCard;
