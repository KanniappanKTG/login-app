import React from 'react';

import Swal from 'sweetalert2'

class Login extends React.Component {

  showPopup(){
    Swal.fire({
      type: 'success',
      title: 'Logged in Successfully',
    })
  }

  render(){
  return (
    <div className='form-container'>
      <div className="form-label-group paddingBottom">
        <input type="text" id="inputUserID" className="form-control" placeholder="User Name" required="" autoFocus=""/>
        <label htmlFor="inputUserID">User Name</label>
      </div>
      <div className="form-label-group paddingBottom">
        <input type="password" id="inputPassword" className="form-control" placeholder="Security Code" required=""/>
        <label htmlFor="inputPassword">Security Code</label>
      </div>
      <div className='btnPadding'>
        <button className="btn btn-lg btn-primary btn-block btnStyle" type="submit" onClick={this.showPopup}>Sign in</button>
      </div>
    </div>
  );
}
}

export default Login;
