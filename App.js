import React from 'react'
import MovieDetails from './Components/MovieDetails'
import MovieList from './Components/MovieList'
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import combineReducers from './Reducers/index'


function App() {
  return (
    <Provider store ={createStore(combineReducers)}>
    <div className="App">
     <h1>Redux Movies</h1>
     <div className ="container" >
      <MovieDetails />
      <MovieList />
      </div>
    </div>
    </Provider>
  );
}

export default App;
