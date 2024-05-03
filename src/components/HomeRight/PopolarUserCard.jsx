import { Avatar, Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';


const PopolarUserCard = () => {
  return (
    <div>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            MK
          </Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title="Kavindu Rukshan"
        subheader="@kavindurukshan"
      />
    </div>
  )
}

export default PopolarUserCard