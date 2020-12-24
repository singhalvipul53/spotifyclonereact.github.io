import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
const Login = () => {
    return (
        <div className='login'>
            <img alt='' 
            src='https://crowdsurf.net/llcoolj/wordpress/wp-content/uploads/2016/04/spotify.png'/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}
export default Login
