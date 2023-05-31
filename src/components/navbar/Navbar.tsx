import { Stack, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import useStyles from '../../assets/styles/navbar';


const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid item height={'100%'}>
    <Stack p={2} className={classes.icons}>
    <Stack spacing={0.7} >
      <IconButton aria-label="person-icon">
          <PersonOutlineOutlinedIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <NotificationsNoneIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <WidgetsOutlinedIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <ExploreOutlinedIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <LocationOnOutlinedIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <StarOutlineRoundedIcon className={classes.icon} fontSize="small" />
      </IconButton>
      <IconButton>
          <SettingsOutlinedIcon className={classes.icon} fontSize="small" />
      </IconButton>
    </Stack>
    <Stack>
      <IconButton>
          <PowerSettingsNewIcon className={classes.icon} fontSize="small" />
      </IconButton>
    </Stack>
    </Stack>
    </Grid>
  );
};

export default Navbar;
