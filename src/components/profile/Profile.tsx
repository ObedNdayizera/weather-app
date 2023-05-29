import { Stack, Box, Typography } from "@mui/material";
import { images } from "../../assets/images";

function Profile() {
  return (
    <div>
      <Stack direction={'row'} spacing={1.5}>
          <img
            width={35}
            height={39}
            style={{ borderRadius: "50%" }}
            src={images.profile}
          />
          <Box>
            <Typography variant="body1" fontSize={12}>
              Hi, Rango
            </Typography>
            <Typography lineHeight={1} variant="h6" fontSize={14}>Mon, 15 May, 2023</Typography>
          </Box>
        </Stack>
    </div>
  )
}

export default Profile;