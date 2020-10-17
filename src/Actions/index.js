// const SongLists = () => {
//   return {
//     type: 'SONGS_LIST',
//     payload :{}
//   }
// }

const SelectSong = (song) => {
  return {
    type: 'SELECTED_SONG',
    payload:{
      selectedSong: song
    }
  }
}

export { SelectSong} ;