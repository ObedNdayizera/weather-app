import { Stack, Box, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

import { images } from '../../assets/images';
import useStyles from '../../assets/styles/weather';

function Weather() {
  const classes = useStyles();
  return (
    <>
      <Stack p={4} spacing={2.5} className={classes.container}>
        <Box gap={8} sx={{ display: 'flex' }}>
          <img style={{ marginTop: '-25px' }} width={110} src={images.sun} />
          <Box>
            <Typography variant='h5'>Berlin</Typography>
            <Typography variant='body1' fontSize={14}>
              Germany
            </Typography>
          </Box>
          <Box>
            <Typography variant='h5'>+20</Typography>
            <Typography variant='body1' fontSize={14}>
              Temperature
            </Typography>
          </Box>
          <Box>
            <Typography variant='h5'>24%</Typography>
            <Typography variant='body1' fontSize={14}>
              Humidity
            </Typography>
          </Box>
          <Box>
            <Typography variant='h5'>13km/h</Typography>
            <Typography variant='body1' fontSize={14}>
              Wind speed
            </Typography>
          </Box>
        </Box>
        <Stack direction={'row'} gap={1} className={classes.temperatures}>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
          <Stack spacing={0.5} className={classes.temperature}>
            <Typography fontSize={13} variant='body1'>
              09 am
            </Typography>
            <CloudIcon style={{ color: '#0E0F1C' }} />
            <Typography variant='body1' fontSize={13} fontWeight={'bold'}>
              17
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Weather;
