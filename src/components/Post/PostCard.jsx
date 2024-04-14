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

const PostCard = () => {
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
            title="Kavindu Rukshan"
            subheader="@kavindurukshan"
        />
        <CardMedia
            component="img"
            height="194"
            image={Post1}
            alt="Paella dish"
        />

        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
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
    </Card>
  )
}

export default PostCard