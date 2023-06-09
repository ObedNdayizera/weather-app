import { Profile, Weather, Chart, Cities } from "../index";
import { Grid, Stack } from "@mui/material";

function Header() {
  return (
    <>
      <Grid item ml={7}>
        <Stack spacing={1.5}>
          <Profile />
          <Weather />
          <Chart />
          <Cities />
        </Stack>
      </Grid>
    </>
  );
}

export default Header;