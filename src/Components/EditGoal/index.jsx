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
  Slider,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { GoalsContext } from "../../Providers/Goals";

const EditGoal = () => {
  const { editGoal, openEdit, handleCloseEditModal, itemEdit, groupId } =
    useContext(GoalsContext);

  const schema = yup.object().shape({
    title: yup.string(),
  });

  const [statusHowMuchAchieved, setStatusHowMuchAchieved] = useState("Fácil");
  const [statusDifficulty, setStatusDifficulty] = useState("Fácil");
  const [statusAchieved, setStatusAchieved] = useState(false);
  const [statusTitle, setStatusTitle] = useState("");
  const [statusId, setStatusId] = useState(0);

  useEffect(() => {
    if (itemEdit.achieved === true) {
      setStatusAchieved("true");
    } else {
      setStatusAchieved("false");
    }
    setStatusHowMuchAchieved(itemEdit.how_much_achieved);
    setStatusDifficulty(itemEdit.difficulty);
    setStatusTitle(itemEdit.title);
    setStatusId(itemEdit.id);
  }, [itemEdit]);

  const handleChangeDifficulty = (event) => {
    setStatusDifficulty(event.target.value);
  };

  const handleChangeAchieved = (event) => {
    setStatusAchieved(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ title }) => {
    if (title === "") {
      title = statusTitle;
    }

    const data = {
      id: statusId,
      title: title,
      achieved: statusAchieved,
      difficulty: statusDifficulty,
      group: groupId,
      how_much_achieved: statusHowMuchAchieved,
    };

    editGoal(data, statusId, groupId);
    reset();
    handleCloseEditModal();
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
    <Modal
      open={openEdit}
      onClose={() => {
        handleCloseEditModal();
        reset();
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
        <Typography component="h1" sx={{ fontSize: "18px", fontWeight: "700" }}>
          EDITAR META
        </Typography>

        <TextField
          margin="normal"
          fullWidth
          autoFocus
          placeholder={statusTitle}
          type="text"
          {...register("title")}
          helperText={errors.title?.message}
          error={!!errors.title?.message}
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Selecionar dificuldade</FormLabel>
          <RadioGroup
            row
            name="controlled-radio-buttons-group"
            value={statusDifficulty}
            onChange={handleChangeDifficulty}
          >
            <FormControlLabel value="Fácil" control={<Radio />} label="Fácil" />
            <FormControlLabel
              value="Normal"
              control={<Radio />}
              label="Normal"
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

          <Slider
            key={`slider-${itemEdit.how_much_achieved}`}
            name="how_much_achieved"
            aria-label="how_much_achieved"
            defaultValue={itemEdit.how_much_achieved}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChangeCommitted={(e, value) => setStatusHowMuchAchieved(value)}
          />
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tarefa completada?</FormLabel>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={statusAchieved}
              onChange={handleChangeAchieved}
            >
              <FormControlLabel value="true" control={<Radio />} label="Sim" />
              <FormControlLabel value="false" control={<Radio />} label="Não" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          SALVAR
        </Button>
      </Box>
    </Modal>
  );
};

export default EditGoal;
