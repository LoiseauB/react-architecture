import {
  Box,
  Typography,
  Grid,
  Button,
  FormControl,
  FormLabel,
  TextField,
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
          {presenter.players.map((player) => (
            <PlayerRow
              key={player.id}
              onChange={presenter.updatePlayer}
              onDelete={presenter.removePlayer}
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
            disabled={true}
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
  onChange: (id: string, key: string, value: string) => void;
  onDelete: (id: string) => void;
}> = ({ id, firstName, lastName, age, onChange, onDelete }) => {
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
        <Box sx={{ marginTop: 2 }}>
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
