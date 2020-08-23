import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
      <img
        // src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        src='https://www.kindpng.com/picc/b/108/1084830.png'
        alt='spotifyImgg'
        style={{ width: '400px' }}
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
