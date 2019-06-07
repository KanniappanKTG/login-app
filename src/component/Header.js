import React from 'react';

function Header() {
  return (
    <div className='container-fluid appheader'>
      <div className='row header-padding'>
        <div className='col-3'>
          <div className='brandlogo' />
        </div>
        <div className='col-9'/>
      </div>
    </div>
  );
}

export default Header;
