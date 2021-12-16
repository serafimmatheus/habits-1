import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";

import EditActivityModal from "../EditActivityModal";

import { Button, GroupCardContainer } from "../../Styles/global";

const ActivityCard = ({ act, group_id }) => {
  const { token, removeActivity } = useContext(ActivitiesContext);

  const [modalEditAct, setModalEditAct] = useState(false);

  return (
    <GroupCardContainer>
      <p>Atividade: {act.title}</p>
      <p>Data: {act.realization_time}</p>
      <Button onClick={() => setModalEditAct(true)}>Editar atividade</Button>
      <Button onClick={() => removeActivity(act.id, group_id)}>
        Remover atividade
      </Button>
      <EditActivityModal
        setModalEditAct={setModalEditAct}
        modalEditAct={modalEditAct}
        token={token}
        id={act.id}
        group_id={group_id}
      />
    </GroupCardContainer>
  );
};

export default ActivityCard;
