import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';
import { red } from '@mui/material/colors';
import Post1 from '../../images/ui1.jpeg';

const PostCard = ({item}) => {
  return (
    <Card className=''>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            // title={item.user.firstName+" "+item.user.lastName}
            // subheader={"@"+item.user.firstName.toLowerCase()+"_"+item.user.lastName.toLowerCase()}
            title={item.user.firstName+" "+item.user.lastName}
            subheader="@kkkkkk"
        />
        <CardMedia
            component="img"
            height="194"
            image={Post1}
            alt="Paella dish"
        />

        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {"item.caption"}
            </Typography>
        </CardContent>

        <CardActions className='flex justify-between' disableSpacing>
            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
                <IconButton>
                    {<ShareIcon/>}
                </IconButton>

                <IconButton>
                    {<ChatBubbleIcon/>}
                </IconButton>
            </div>
            <div>
                <IconButton>
                    {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
                </IconButton>
            </div>
      </CardActions>
      <section>
        <div className='flex items-center space-x-5 mx-3 my-5'>
            <Avatar sx={{}}/>

            <input className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2' type="text" placeholder='write your comment...'/>
        </div>
      </section>
    </Card>
  )
}

export default PostCard



