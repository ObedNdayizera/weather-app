import { IconButton, Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
  return (
    <>
      <Paper
        component='form'
        sx={{
          ml: 3,
          height: '100%',
          borderRadius: 20,
          background: '#121321',
        }}
      >
        <IconButton sx={{ fontSize: 5, color: '#b7bfc6', mb: 0.1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ fontSize: 15, color: '#fff' }}
          placeholder='Search City or postcode'
        />
      </Paper>
    </>
  );
}

export default SearchInput;
