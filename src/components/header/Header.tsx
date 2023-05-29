import { Profile, Weather } from "../index";
import { Grid, Stack } from "@mui/material";

function Header() {
  return (
    <>
      <Grid item>
        <Stack spacing={1.5}>
          <Profile />
          <Weather />
        </Stack>
      </Grid>
    </>
  );
}

export default Header;