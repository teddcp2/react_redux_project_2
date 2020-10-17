import React from 'react';
import {connect} from 'react-redux';

const SelectedSong = ({current}) => {
  let content = current !== null ? current : {name :'Choose a song', duration:'' };
  return (
   <div className='ui card container'>
     <p className="content">
     {content.name}
     </p>
     <div className="description">
        {content.duration}
      </div>
   </div>
  )
}

const mapStateToProps = store => {
  console.log(store);
  return {current : store.currentsong}
}

export default connect(mapStateToProps)(SelectedSong);