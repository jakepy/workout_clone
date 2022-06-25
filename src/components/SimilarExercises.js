import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar'

import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
        sx={{
            mt: {
                lg: '100px',
                xs: '0'
            }
        }}>
        <Typography
            variant='h3'
            mb={2}>
            Exercises taht target the same muscle group
        </Typography>
        <Stack
            sx={{
                p: '2', 
                position: 'relative'
            }}
            direction='row'>
            {targetMuscleExercises.length ? 
                <HorizontalScrollbar data={targetMuscleExercises} />
                : <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises