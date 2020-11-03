import {  Redirect, Route, Switch } from 'react-router-dom'
//screens
import HomeScreen from '../screens/HomeScreen'
import ContactScreen from '../screens/ContactScreen'
import ServicesScreen from '../screens/ServicesScreen'
import AboutScreen from '../screens/AboutScreen'
//components
import Header from '../components/Header'
import Nav from '../components/Nav'

const Router = () => {
  return (
    <div id="app-container">
    <Header/>
    <Nav/>
    <Switch>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/services" component={ServicesScreen}/>
      <Route path="/about" component={AboutScreen}/>
      <Route path="/contact" component={ContactScreen}/>
      <Redirect to="/"/>
    </Switch>
    </div>
  );
}

export default Router;