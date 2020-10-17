import {combineReducers} from 'redux';

const mySongs = [
  {
    id: 1,
    name: 'wwe',
    duration: 4.5
  },
  {
    id: 2,
    name: 'xyz',
    duration: 5.5
  },
  {
    id: 3,
    name: 'abc',
    duration: 2.5
  },
  {
    id: 4,
    name: 'www',
    duration: 9.5
  },
  {
    id: 5,
    name: 'Call me',
    duration: '24'
  }
]


const AllSongReducer = (songs =[], action ) => {
  // if (action.type === 'SONGS_LIST'){
  //   return [...songs, mySongs]
  // }
  return {...songs, mySongs};
}

const SelectSongReducer = (current = null, action) => {
  console.log(current);
  if (action.type === 'SELECTED_SONG'){
    return action.payload.selectedSong
  }
  return current
}

export default combineReducers({
  songLists : AllSongReducer,
  currentsong: SelectSongReducer
});

// export default rootReducer;