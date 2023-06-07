import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        width: '710px',
        overflowX: 'scroll',
        my: '100px',
        "&::-webkit-scrollbar": {
          display: "none",
          overflowX: "scroll",
        },
    },

    card: {
        cursor: 'pointer'
    },

    cardContent: {
        width: '140px',
        textAlign: 'center',
    },

    iconButton: {
      '&:hover': {
        backgroundColor: 'red',
      },
  
    }
});

export default useStyles;
