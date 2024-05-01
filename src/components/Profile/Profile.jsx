import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post2 from '../../images/regUI.jpeg';
import Post1 from '../../images/ui1.jpeg';
import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material';
import PostCard from '../../components/Post/PostCard'
import UserReelCard from '../Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';

const tabs=[
  {value:"post", name:"Post"},
  {value:"reels", name:"Reels"},
  {value:"saved", name:"Saved"},
  {value:"posrepostt", name:"Repost"}
]


const posts = [1,1,1,1,1];
const reels = [1,1,1,1,1];
const savedPost = [1,1,1,];

const Profile = () => {
  const {id} = useParams();
  const [value, setValue] = React.useState('post');
  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {auth} = useSelector(store=>store);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md' 
            src={Post2} 
            alt='backgroundImg'
          />
        </div>

        <div className='px-5 flex justify-between items-start mt-5 h[5rem]'>
          <Avatar className='transform -translate-y-24' sx={{width:'10rem', height:'10rem'}} src={Post1}/>

          {true? (
            <Button sx={{borderRadius:"20px"}} 
              variant='outlined'>
              Edit Profile
            </Button>
          ):(
            <Button 
              variant='outlined'>
              Follow
            </Button>
            )}
        </div>
        <div className='p-5'>
            <div>
              <h1 className='py-1 font-bold text-xl'>
                {auth.user?.firstName +" "+ auth.user?.lastName}
              </h1>
              <p>
                @{auth.user?.firstName.toLowerCase() +"_"+ auth.user?.lastName.toLowerCase()}
              </p>
            </div>
            <div className='flex gap-5 items-center py-3'>
              <span>41 post</span>
              <span>33 followers</span>
              <span>2 followings</span>
            </div>
            <div>
              <p>
                Exercise.com is simply the best. We were using three or four different apps or softwares to do what we can now do all in one with the Exercise.com platform.
              </p>
            </div>
        </div>
        <section>
        <Box sx={{ width: '100%', borderBottom:1, borderColor:"divider"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            
            {tabs.map((item)=><Tab value={item.value} label={item.name} />)}
          </Tabs>
        </Box>

        <div className='flex justify-center'>
          {value==="post"? (
          <div className='space-y-5 w-[70%] my-10'>
            {posts.map((item)=>(
              <div className='border border-slate-100 rounded-md'>
              <PostCard />
            </div>
            ))}
          </div>
          ):value==="reels"? <div className='flex justify-center flex-wrap gap-2 my-10'>
            {reels.map((item)=><UserReelCard/>)}
          </div>:value==="reels"? <div className='flex justify-center flex-wrap gap-2 my-10'>
            {reels.map((item)=><UserReelCard/>
          )}
        </div>:value==="saved"? (
          <div className='space-y-5 w-[70%] my-10'>
            {savedPost.map((item)=>(
              <div className='border border-slate-100 rounded-md'>
              <PostCard />
            </div>
            ))}
          </div>
            ):(
              <div>
                Repost
              </div>
            )}
        </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  )
}

export default Profile