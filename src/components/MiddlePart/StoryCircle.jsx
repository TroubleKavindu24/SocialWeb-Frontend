import React from 'react';
import { Avatar } from '@mui/material';

const StoryCircle = () => {
  return (
    <div>
        <div className='flex flex-col items-center mr-4 cursor-pointer'>
            <Avatar sx={{width:"5rem", height:"5rem"}}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            >
            </Avatar>            
            <p>oiio</p> 
          </div>
    </div>
  )
}

export default StoryCircle