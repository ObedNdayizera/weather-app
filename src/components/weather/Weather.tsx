import { Stack, Box, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

import { images } from '../../assets/images';
import { color } from '@mui/system';

function weather() {
  return (
    <>
        <Stack p={4} spacing={2.5} sx={{background: "#0E0F1C", borderRadius: '25px'}}>
            <Box gap={5} sx={{display: 'flex'}}>
                <img style={{marginTop: '-25px'}} width={110} src={ images.sun } />
                <Box>
                    <Typography variant="h4">Berlin</Typography>
                    <Typography variant="body1" fontSize={14}>Germany</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">+20</Typography>
                    <Typography variant="body1" fontSize={14}>Temperature</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">24%</Typography>
                    <Typography variant="body1" fontSize={14}>Humidity</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">13km/h</Typography>
                    <Typography variant="body1" fontSize={14}>Wind speed</Typography>
                </Box>
            </Box>
            <Box gap={1} sx={{display: 'flex'}}>
                <Box sx={{background: '#b8dfff'}} color="rgba(7, 10, 51)">
                    <Typography variant="body1" color="rgba(7, 10, 51)" >09 am</Typography>
                    <CloudIcon />
                    <Typography variant="body1" fontSize={15} color="rgba(7, 10, 51)" >17</Typography>
                </Box>
            </Box>
        </Stack>
    </>
  )
}

export default weather
