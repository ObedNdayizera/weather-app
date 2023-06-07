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
        border: '2px dashed #b7bfc6',
        cursor: 'pointer'
    },

    cardContent: {
        width: '140px',
        textAlign: 'center',
    }
});

export default useStyles;
