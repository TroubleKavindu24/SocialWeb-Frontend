import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"reels",
        icon:<ExploreIcon/>,
        path:"/reels"
    },
    {
        title:"Create Reels",
        icon:<ControlPointIcon/>,
        path:"/"
    },
    {
        title:"Notifications",
        icon:<NotificationsActiveIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/message"
    },
    {
        title:"Lists",
        icon:<FormatListBulletedIcon/>,
        path:"/"
    },
    {
        title:"Communities",
        icon:<GroupIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile/:id"
    },
]