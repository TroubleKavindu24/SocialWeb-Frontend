import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'
import ui1 from '../../images/ui1.jpeg'

const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
                <img className='h-full w-full' src={ui1} alt="" />
            </Grid>
            <Grid item xs={5}>
                <div className='px-20 flex-col justify-center h-full'>
                    <Card className='card p-8'>
                        <div className='flex flex-col items-center mb-5 space-y-1'> 
                             <h1 className='log'>Social Web for Fitness</h1>
                             <p className='text-center text-sm w-[70&]'>explore others fitness and give mortivation these</p>
                        </div>
                       <Login/>
                       {/* <Register /> */}
                    </Card>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Authentication