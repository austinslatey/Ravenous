import React from 'react'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';


function App() {
  return (
    <div classname="App">
  <h1>ravenous</h1>
  <SearchBar/>
  <BusinessList /> 
</div>
  );
}

export default App;