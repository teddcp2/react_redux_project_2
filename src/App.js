import React from "react";
import "./styles.css";
import ListItems from './components/lists';
import CurrentSong from './components/currentItem';

export default function App() {
  return (
    <div className="App ui container">
      <h2 className="ui header block title "> Example 2 - [ react+ redux] </h2>
      <br/>

      <div className="ui grid">
        <div className="eight wide column">
           <ListItems/>
        </div>
        <div className="eight wide column">
          <CurrentSong/>
        </div>
      </div>
      
      

      
    </div>
  );
}
