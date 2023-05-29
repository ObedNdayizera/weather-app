import { Grid, Stack, Box, Typography } from "@mui/material";
import { images } from '../../assets/images';

function Header() {
  return (
    <Grid item>
      <Stack spacing={2.5}>
        <Box>
          <img src={ images.profile }/>
          <Box>
            <Typography variant="body1" fontSize={12}>
              Hi, Rango
            </Typography>
            <Typography variant="h6">
              Mon, 15 May, 2023
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Grid>
  )
}

export default Header
