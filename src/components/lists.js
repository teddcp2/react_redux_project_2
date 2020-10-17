import React from 'react';
import {connect} from 'react-redux';
import {SelectSong} from '../Actions';

const ListItems = ({songs, SelectSong}) => {

  // console.log(songs)
  let contents = songs.map(song => {
    return (
      <div className="item" key={song.id}>
        <div className="right floated content">
            <div className="ui button" onClick = {()=> SelectSong(song) }>Add</div>
        </div>
        <div className="content">
          {song.name}
        </div>
        </div>
    )}  
  )
  return (
    <div className="ui middle aligned divided list">
     {contents}
    </div>
  )
}

const mapStateToProps = store => {
  console.log(store);
  return {songs : store.songLists.mySongs}
}

export default connect(mapStateToProps , {SelectSong})(ListItems);