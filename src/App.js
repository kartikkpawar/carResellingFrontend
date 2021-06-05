import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import HomeScreen from './Screens/HomeScreen'
import CarsScreen from './Screens/CarsScreen'
import CarScreen from './Screens/CarScreen'
import SignInScreen from './Screens/SignInScreen'
import SignUpScreen from './Screens/SignUpScreen'
import ContactScreen from './Screens/ContactScreen'
import AboutScreen from './Screens/AboutScreen'
import ServicesScreen from './Screens/ServicesScreen'
import PricingScreen from './Screens/PricingScreen'
import BlogsScreen from './Screens/BlogsScreen'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/blogs' component={BlogsScreen} />
        <Route path='/pricing' component={PricingScreen} />
        <Route path='/services' component={ServicesScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/cars' component={CarsScreen} />
        <Route path='/car' component={CarScreen} />
        <Route path='/signup' component={SignUpScreen} />
        <Route path='/signin' component={SignInScreen} />
        <Route path='/' component={HomeScreen} exact />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
