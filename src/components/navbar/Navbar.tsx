import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
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
      sx={{ background: "#0E0F1C", width: "65px", flex: 1, height: '96%', p: "8px 0px"}}
      position={"fixed"}
    >
      <Stack spacing={1.7}>
        <Button>
          <PersonIcon fontSize="small" />
        </Button>
        <Button>
          <NotificationsNoneIcon fontSize="small" />
        </Button>
        <Button>
          <WidgetsOutlinedIcon fontSize="small" />
        </Button>
        <Button>
          <ExploreOutlinedIcon fontSize="small" />
        </Button>
        <Button>
          <LocationOnOutlinedIcon fontSize="small" />
        </Button>
        <Button>
          <StarOutlineRoundedIcon fontSize="small" />
        </Button>
        <Button>
          <SettingsOutlinedIcon fontSize="small" />
        </Button>
      </Stack>
      <Stack>
        <Button>
          <PowerSettingsNewIcon fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
