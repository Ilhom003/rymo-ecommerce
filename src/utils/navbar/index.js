import Home from '../../components/Home'
import Shop from '../../components/Shop'
import Profile from '../../components/Profile'
import SignIn from '../../components/Sign In'
import SignUp from '../../components/Sign Up'
import Wishlist from '../../components/WishList'
import Product from '../../components/Product'

export const navbar = [
    {
        id:1,
        title:'Home',
        path:'/',
        element:<Home/>,
        hidden:false,
        isPrivate: true,
    },
    {
        id:2,
        title:'Shop',
        path:'/shop',
        element:<Shop/>,
        hidden:false,
        isPrivate: true,
    },
    {
        id:3,
        title:'Profile',
        path:'/profile',
        element:<Profile/>,
        hidden:true,
        isPrivate: true,
    },
    {
        id:4,
        title:'Sign In',
        path:'/signin',
        element:<SignIn/>,
        hidden:true,
        isPrivate: false,
    },
    
    {
        id:5,
        title:'Sign Up',
        path:'/signup',
        element:<SignUp/>,
        hidden:true,
        isPrivate: false,
    },
    {
        id:6,
        title:'Wishlist',
        path:'/wishlist',
        element:<Wishlist/>,
        hidden:true,
        isPrivate: true,
    },
    {
        id:7,
        title:'Product',
        path:'/shop/:id',
        element:<Product/>,
        hidden:true,
        isPrivate: true,
    }, 
]