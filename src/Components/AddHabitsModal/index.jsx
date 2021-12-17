import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import jwt_decode from "jwt-decode";

import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/habits";

import {
  FormLabel,
  Modal,
  TextField,
  Typography,
  Slider,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const AddHabitsModal = ({ modalHabits, setModalHabits, token }) => {
  const decoded = jwt_decode(token);

  const { addHabits } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    achieved: yup.string().required("Campo obrigatório"),
    //how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalHabits(false);
  };

  const onSubmit = (data) => {
    data = {
      ...data,
      user: decoded.user_id,
      how_much_achieved: statusHowMuchAchieved,
    };
    addHabits(data, token, reset, closeModal);
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

  const [statusHowMuchAchieved, setStatusHowMuchAchieved] = useState(0);

  return (
    <Modal open={modalHabits} onClose={closeModal}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
        <Typography component="h1" sx={{ fontSize: "18px", fontWeight: "700" }}>
          ADICIONAR HÁBITO
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          placeholder="Qual é seu hábito?"
          type="text"
          {...register("title")}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          placeholder="Qual é a Categoria?"
          type="text"
          {...register("category")}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <select {...register("difficulty")}>
            <option value="">Selecionar dificuldade</option>
            <option value="Muito fácil">1 - Muito fácil</option>
            <option value="Fácil">2 - Fácil</option>
            <option value="Intermediário">3 - Intermediário</option>
            <option value="Difícil">4 - Difícil</option>
            <option value="Muito difícil">5 - Muito difícil</option>
          </select>
          <select {...register("frequency")}>
            <option value="">Selecionar frequência</option>
            <option value="Diário">Diário</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
            <option value="Anual">Anual</option>
          </select>
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
            CRIAR
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

export default AddHabitsModal;
