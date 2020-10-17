import React from 'react';

const ButtonComponent = props => {
  return <button className="ui basic green button" 
                onClick={props.method} 
                >{props.label}</button>
};

export default ButtonComponent;