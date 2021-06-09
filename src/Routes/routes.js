import HomeScreen from "../Screens/HomeScreen";
import CarsScreen from "../Screens/CarsScreen";
import CarScreen from "../Screens/CarScreen";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ContactScreen from "../Screens/ContactScreen";
import AboutScreen from "../Screens/AboutScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import BlogsScreen from "../Screens/BlogsScreen";
import BuyerDashboard from "../Screens/Dasboard/BuyerDashboard";

export const PageRoutes = [
  { path: "/services", component: ServicesScreen },
  { path: "/dashboard", component: BuyerDashboard },
  { path: "/about", component: AboutScreen },
  { path: "/contact", component: ContactScreen },
  { path: "/cars", component: CarsScreen },
  { path: "/car", component: CarScreen },
  { path: "/signup", component: SignUpScreen },
  { path: "/signin", component: SignInScreen },
  { path: "/blogs", component: BlogsScreen },
  { path: "/", component: HomeScreen },
];
