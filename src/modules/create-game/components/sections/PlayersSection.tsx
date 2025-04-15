import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { usePlayerSection } from "./use-player-section.hook";

import DeleteIcon from "@mui/icons-material/Delete";

export const PlayersSection: React.FC<object> = () => {
  const presenter = usePlayerSection();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5">Joueurs</Typography>
      <Grid sx={{ paddingTop: 2 }} rowSpacing={4}>
        <Box>
          {presenter.form.players.map((player) => (
            <PlayerRow
              key={player.id}
              onChange={presenter.updatePlayer}
              onDelete={presenter.removePlayer}
              isTeamLeader={player.id === presenter.form.teamLeaderId}
              changeTeamLeader={presenter.changeTeamLeader}
              {...player}
            />
          ))}
        </Box>
      </Grid>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        marginTop={2}
      >
        <Grid item>
          <Button variant="contained" onClick={presenter.addPlayer}>
            Ajouter
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={presenter.onNext}
            disabled={!presenter.isSubmittable}
          >
            Suivant
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export const PlayerRow: React.FC<{
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  isTeamLeader: boolean;
  onChange: (id: string, key: string, value: string) => void;
  onDelete: (id: string) => void;
  changeTeamLeader: (id: string) => void;
}> = ({
  id,
  firstName,
  lastName,
  age,
  isTeamLeader,
  onChange,
  onDelete,
  changeTeamLeader,
}) => {
  return (
    <Box>
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <FormControl>
            <FormLabel>Prénom</FormLabel>
            <TextField
              value={firstName}
              onChange={(e) => onChange(id, "firstname", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <TextField
              value={lastName}
              onChange={(e) => onChange(id, "lastname", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <TextField
              value={age}
              onChange={(e) => onChange(id, "age", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControlLabel
            sx={{ marginTop: 3 }}
            control={
              <Checkbox
                checked={isTeamLeader}
                onChange={() => changeTeamLeader(id)}
              />
            }
            label="Leader"
          />
        </Grid>
        <Box sx={{ marginTop: 5 }}>
          <Button
            variant="contained"
            onClick={() => onDelete(id)}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Supprimer
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
