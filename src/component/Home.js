import React , { Component } from 'react';

import Header from './Header';
import Login from './Login';
import NavTabs from './Tab';

class Home extends Component {

  render(){

    return (
      <div>
        <Header/> 
        <div className='app-container'>
          <h1 className='text-center paddingBottom'>Welcome to Internet Banking</h1>
          <div className='tabStyle'>
            <NavTabs/>
          </div>
          <div className='row justify-content-center'>
            <a href="" className='text-center link-style'>&#9888;  Forgot Credentials !!..</a>  
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
