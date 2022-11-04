import Blogs from "../components/Blogs";
import PlantCare from "../components/PlantCare";
import HomePage from "../pages/Home";
import ShopPage from "../pages/Shop";

export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        Element: <HomePage/>,
    },
    {
        id: 2,
        title: 'Shop',
        path: '/shop',
        Element: <ShopPage/>,
    },
    {
        id: 3,
        title: 'Plant Care',
        path: '/plant-care',
        Element: <PlantCare/>,
    },
    {
        id: 4,
        title: 'Blogs',
        path: '/blog',
        Element: <Blogs/>,
    }
]