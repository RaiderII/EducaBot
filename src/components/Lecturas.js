import { Grid, Typography, Box } from '@material-ui/core';
import Homework from './Homework';

export default function Lecturas() {
  const lectura = true;
  return (
    <Grid item container xs={12} sm={10} spacing={10}>
      <Grid item xs={12} lg={6}>
        <Homework />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Homework />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Homework />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Homework />
      </Grid>
    </Grid>
  );
}
