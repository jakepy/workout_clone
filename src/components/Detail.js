import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

import React from 'react'

const Detail = ({ exerciseDetail }) => {
  
    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack
            sx={{
                flexDirection: {
                    lg: 'row'
                },
                p: '20px',
                alignItems: 'center'
            }}
            gap='60px'>
            <img 
                className='detail-image'
                src={gifUrl} 
                alt={name} 
                loading='lazy' />
            <Stack
                sx={{
                    gap: {
                        lg: '35px',
                        sx: '20px'
                    }
                }}>
                <Typography variant='h5'>
                    {name}
                </Typography>
                <Typography>
                    Exercises keep you strong. {name} {` `}
                    is one of the best exercises to target your {target}. 
                    It will help improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction='row'
                        gap='24px'
                        alignItems='center'>
                        <Button
                            sx={{
                                background: '#fff2db',
                                borderRadius: '50%',
                                width: '100px',
                                height: '100px'
                            }}>
                            <img 
                                src={item.icon} 
                                alt={bodyPart}
                                style={{
                                    width: '50px',
                                    height: '50px' 
                                }}/>
                        </Button>
                        <Typography
                            textTransform='capitalize'
                            variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail