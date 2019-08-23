import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
          <NavLink to='/puppies' className='nav'> Puppies </NavLink>
          <NavLink to='/sharks' className='nav'> Sharks </NavLink>
          <NavLink exact to='/' className='nav'> Home </NavLink>
        </header>
        <Route exact path='/' component={ Home } />
        <Route exact path='/unicorns' render= { (props) =>
        {
        return <Creatures data= { unicornData } />} 
        }
          />
        <Route exact path='/sharks' render= { () => <Creatures data= { sharkData } />} />
        <Route exact path='/puppies' render= { () => <Creatures data= { puppyData } />} />
        <Route path='/unicorns/:id' render={ ({match}) => {
          const {id} = match.params;
          const foundCreature = unicornData.find(unicorn => unicorn.id === parseInt(id));
          if (foundCreature) { return <CreatureDetails {...foundCreature }/> 
         } else {
         return <h1>No unicorn!</h1>
         }
        }} />
        <Route path='/puppies/:id' render={({ match }) => {
          const { id } = match.params;
          const foundCreature = puppyData.find(puppy => puppy.id === parseInt(id));
          if (foundCreature) {
            return <CreatureDetails {...foundCreature} />
          } else {
            return <h1>No puppy!</h1>
          }
        }} />
        <Route path='/sharks/:id' render={({ match }) => {
          const { id } = match.params;
          const foundCreature = sharkData.find(shark => shark.id === parseInt(id));
          if (foundCreature) {
            return <CreatureDetails {...foundCreature} />
          } else {
            return <h1>No shark!</h1>
          }
        }} />
      </main>
    );
  }
}
