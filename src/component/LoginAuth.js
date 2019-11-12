import React from 'react';

import Swal from 'sweetalert2'

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {userID:"", securityCode:""};
  }

  showPopup(){
    var obj = this.state;
    fetch('http://localhost:8080/auth/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          if(data.status === "Success"){
            Swal.fire({
              type: 'success',
              title: 'Logged in Successfully',
            })
          }
          else {
            Swal.fire({
              type: 'error',
              title: 'Wrong Credentials',
            })
          }
       }).catch(err => {
        Swal.fire({
          type: 'warning  ',
          title: 'Unable to connect the Server',
        })
       });
  }

  render(){
  return (
    <div className='form-container'>
      <div className="form-label-group paddingBottom">
        <input type="text" id="inputUserID" className="form-control" placeholder="User Name" 
          required="" autoFocus="" value ={this.state.userID} onChange={(e)=>this.setState({userID:e.target.value})}/>
        <label htmlFor="inputUserID">User Name</label>
      </div>
      <div className="form-label-group paddingBottom">
        <input type="password" id="inputPassword" className="form-control" placeholder="Security Code" 
          required="" value ={this.state.securityCode} onChange={(e)=>this.setState({securityCode:e.target.value})}/>
        <label htmlFor="inputPassword">Security Code</label>
      </div>
      <div className='btnPadding'>
        <button className="btn btn-lg btn-primary btn-block btnStyle" type="submit" onClick={this.showPopup.bind(this)}>Sign in</button>
      </div>
    </div>
  );
}
}

export default Login;
