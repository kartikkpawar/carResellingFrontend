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
import SellerDashboard from "../Screens/Seller Dashboard/Sellerdashboard";
import Admindashboard from "../Screens/Admin Dashboard/Admindashboard";
import FilterCars from "../Screens/FilterdCars";

export const PageRoutes = [
  { path: "/services", component: ServicesScreen },
  { path: "/dashboard-buyer", component: BuyerDashboard },
  { path: "/dashboard-seller", component: SellerDashboard },
  { path: "/dashboard-admin", component: Admindashboard },
  { path: "/about", component: AboutScreen },
  { path: "/contact", component: ContactScreen },
  { path: "/cars", component: CarsScreen },
  { path: "/searched-cars", component: FilterCars },
  { path: "/car-details", component: CarScreen },
  { path: "/signup", component: SignUpScreen },
  { path: "/signin", component: SignInScreen },
  { path: "/blogs", component: BlogsScreen },
  { path: "/", component: HomeScreen },
];
