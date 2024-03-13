import React from 'react';
import './Login.css'
import logo from '../../assets/logo_remove.png'
import kakaologin from '../../assets/kakao_login.png'
const Login: React.FC = () => {
  return ( 
      <div className='background-container'>  
        <img src={logo} alt="Logo" />
        <div className='login'>
          <img src={kakaologin} alt="kakaologin" />
        </div>
      </div> 
  );
};

export default Login;