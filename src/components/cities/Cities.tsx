import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import { Stack, CardContent, Typography, IconButton, Box } from "@mui/material";

import useStyles from "../../assets/styles/cities";

function Cities() {
  const classes = useStyles();
  return (
    <>
      <Stack direction={"row"} className={classes.container} gap={2}>
        <Box
          sx={{
            background: "transparent",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px dashed #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <AddCircleRoundedIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            background: "#121321",
            borderRadius: "20px",
            textAlign: "center",
            border: '2px solid #b7bfc6',
            mt: 3,
          }}
          className={classes.card}
        >
          <IconButton
            className={classes.iconButton}
            sx={{
              background: "#b7bfc6",
              mt: -3,
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <CardContent sx={{ px: 3 }} className={classes.cardContent}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "600", pb: 1 }}
              color="#b7bfc6"
              gutterBottom
              variant="h5"
            >
              World forecast
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#b7bfc6" variant="body2">
              Add the cities you are interested in
            </Typography>
          </CardContent>
        </Box>
      </Stack>
    </>
  );
}

export default Cities;
