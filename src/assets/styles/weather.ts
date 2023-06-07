import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    background: "#0E0F1C",
    borderRadius: "25px",
  },
  temperatures: {
    overflowX: "scroll",
    width: "640px",
    boxShadow: "",
    "&::-webkit-scrollbar": {
      display: "none",
      overflowX: "scroll",
    },
  },
  temperature: {
    borderRadius: 25,
    background: "#b8dfff",
    alignItems: 'center',
    minWidth: "65px",
    padding: "18px 0px",
    color: "rgba(7, 10, 51)",
  },
});

export default useStyles;
