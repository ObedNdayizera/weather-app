import { Box, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function SelectInputInput() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#b7bfc6',
      },
    },
  });
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <ThemeProvider theme={theme}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-selec'
              label='Age'
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default SelectInputInput;
