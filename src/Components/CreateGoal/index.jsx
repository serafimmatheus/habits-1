import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { GoalsContext } from "../../Providers/Goals";

const CreateGoal = ({ groupId }) => {
  const { addGoal, open, handleCloseGoalModal } = useContext(GoalsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    // difficulty: yup.string().required("Campo obrigatório"),
    // achieved: yup.string().required("Campo obrigatório"),
    // how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const [statusDifficulty, setStatusDifficulty] = useState("Fácil");
  const [statusAchieved, setStatusAchieved] = useState(false);
  const [value, setValue] = useState(1);

  const handleChangeDifficulty = (event) => {
    setStatusDifficulty(event.target.value);
  };

  const handleChangeAchieved = (event) => {
    setStatusAchieved(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data = {
      ...data,
      group: groupId,
      difficulty: statusDifficulty,
      how_much_achieved: value,
      achieved: statusAchieved,
    };
    addGoal(data);
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
    <Modal open={open} onClose={handleCloseGoalModal}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
        <Typography component="h1" sx={{ fontSize: "18px", fontWeight: "700" }}>
          ADICIONAR META
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          placeholder="Qual é sua meta?"
          type="text"
          {...register("title")}
          helperText={errors.title?.message}
          error={!!errors.title?.message}
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Selecionar dificuldade</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={statusDifficulty}
            onChange={handleChangeDifficulty}
          >
            <FormControlLabel value="Fácil" control={<Radio />} label="Fácil" />
            <FormControlLabel
              value="Intermediário"
              control={<Radio />}
              label="Intermediário"
            />
            <FormControlLabel
              value="Díficil"
              control={<Radio />}
              label="Díficil"
            />
          </RadioGroup>
        </FormControl>
        <Box>
          <FormLabel component="legend">Progresso atual:</FormLabel>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tarefa completada?</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={statusAchieved}
              onChange={handleChangeAchieved}
              {...register("achieved")}
            >
              <FormControlLabel value={true} control={<Radio />} label="sim" />
              <FormControlLabel value={false} control={<Radio />} label="Não" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          CRIAR
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateGoal;
