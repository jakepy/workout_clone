import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ( setExercises, bodyPart, setBodyPart ) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
                exerciseOptions
            )
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData() // Calling this as soon as the app loads.
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions
            )
            
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            ) // PUTTING OUR SEARCH BAR ON STERIODS BY INCLUDING 3 OTHER SEARCH TERMS!   
            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <Stack 
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'>
        <Typography
          xs={{
            fontSize: {
                lg: '64px',
                xs: '44px'
            }
          }}
          fontSize='28px'
          fontWeight={700}
          mb='30px'
          textAlign='center'>
            Getting in Shape Has NEVER Been So Easy
        </Typography>
        <Box
            position='relative'
            mb='64px'>
            <TextField
                sx={{
                    input: { 
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '18px'
                    },
                    width: {
                        lg: '800px',
                        xs: '350px'
                    },
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                }} 
                height='76px'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder='Search'
                type='text'
            />
            <Button 
                className='search-btn'
                onClick={handleSearch}
                sx={{ 
                    bgcolor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px' },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}>
                Search
            </Button>
        </Box>
        <Box 
            sx={{
                position: 'relative',
                width: '100%',
                p: '20px'
            }}>
            <HorizontalScrollBar
                data={bodyParts}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
        </Box>
    </Stack>
  )
}

export default SearchExercises