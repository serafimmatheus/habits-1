import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/habits";

import { FormLabel, Modal, Typography, Slider, Button } from "@mui/material";
import { Box } from "@mui/system";

const EditHabitsModal = ({ habit_id, token, setModalEdit, modalEdit }) => {
  const { editHabits } = useContext(HabitsContext);

  const [statusHowMuchAchieved, setStatusHowMuchAchieved] = useState(0);

  const schema = yup.object().shape({
    achieved: yup.string().required("Campo obrigatório"),
    //how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalEdit(false);
  };

  const onSubmit = (data) => {
    data = {
      ...data,
      how_much_achieved: statusHowMuchAchieved,
    };
    editHabits(habit_id, data, token, reset, closeModal);
    closeModal();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #F5F5F5",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  return (
    <Modal open={modalEdit}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
        <Typography
          component="h1"
          sx={{ fontSize: "18px", fontWeight: "700", mb: 2 }}
        >
          EDITAR HÁBITO
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <select {...register("achieved")}>
            <option value="">Tarefa completada?</option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </Box>

        <Box>
          <FormLabel component="legend">Progresso atual:</FormLabel>

          <Slider
            name="how_much_achieved"
            aria-label="how_much_achieved"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChangeCommitted={(_, value) => setStatusHowMuchAchieved(value)}
          />
        </Box>
        <Box display="flex" sx={{ gap: "10px" }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="neutral"
            sx={{ mt: 3, mb: 2 }}
          >
            SALVAR
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="neutral"
            sx={{ mt: 3, mb: 2 }}
            onClick={closeModal}
          >
            FECHAR
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditHabitsModal;
