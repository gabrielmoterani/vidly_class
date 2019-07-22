import React, {Component} from 'react';
import './App.css';
import MoviesComponent from './components/movies';
import Navbar from './components/commun/navbar';
import NotFound from './components/not-found'
import Customers from './components/customers';
import Rentals from './components/rentals';
import MoviesForm from './components/movie-form'
import {Route, Switch, Redirect} from 'react-router-dom';

class App extends Component{
 render(){
   return (
     <React.Fragment>
        <Navbar/>
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MoviesForm}/>
            <Route path="/movies" component={MoviesComponent}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/" exact component={MoviesComponent}/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
     </React.Fragment>
   );
 }
}

export default App;
