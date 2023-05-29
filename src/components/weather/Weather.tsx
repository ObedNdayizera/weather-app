import { Stack, Box, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

import { images } from '../../assets/images';

function weather() {
  return (
    <>
        <Stack p={2} sx={{background: "#0E0F1C", borderRadius: '25px'}}>
            <Box gap={3} sx={{display: 'flex'}}>
                <img width={100} src={ images.sun } />
                <Box>
                    <Typography variant="body1">Berlin</Typography>
                    <Typography variant="body1" fontSize={15}>Germany</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">+20</Typography>
                    <Typography variant="body1" fontSize={15}>Temperature</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">24%</Typography>
                    <Typography variant="body1" fontSize={15}>Humidity</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">13km/h</Typography>
                    <Typography variant="body1" fontSize={15}>Wind speed</Typography>
                </Box>
            </Box>
            <Box gap={1} sx={{display: 'flex'}}>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">09 am</Typography>
                    <CloudIcon/>
                    <Typography variant="body1" fontSize={15}>17</Typography>
                </Box>
            </Box>
        </Stack>
    </>
  )
}

export default weather
