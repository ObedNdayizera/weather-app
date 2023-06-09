import { Stack } from '@mui/material';
import { SearchInput, SelectInput } from '..';

function Location() {
  return (
    <>
      <Stack direction={'row'} gap={2} height={'100%'}>
        <SearchInput />
        <SelectInput />
      </Stack>
    </>
  );
}

export default Location;
