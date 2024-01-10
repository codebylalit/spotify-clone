import React from 'react';
import "./sidebaroption.css";

function Sidebaroption({ title, Icon }) {
  return (
    <div className='sidebaroption'>
      {Icon && <Icon className="sideicon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default Sidebaroption;
