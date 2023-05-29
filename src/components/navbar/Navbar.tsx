import { Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const Navbar = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      borderRadius={"10px"}
      sx={{ background: "#0E0F1C", width: "55px", flex: 1, height: '96%', p: "8px", transform: 'translateY(-50%)'}}
      position={"fixed"}
      top={'50%'}
      data-cy={"navbar"}
    >
    <Stack spacing={0.7} >
      <IconButton aria-label="person-icon">
          <PersonIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <NotificationsNoneIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <WidgetsOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <ExploreOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <LocationOnOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <StarOutlineRoundedIcon fontSize="small" />
      </IconButton>
      <IconButton>
          <SettingsOutlinedIcon fontSize="small" />
      </IconButton>
    </Stack>
    <Stack>
      <IconButton>
          <PowerSettingsNewIcon fontSize="small" />
      </IconButton>
    </Stack>
    </Stack>
  );
};

export default Navbar;
