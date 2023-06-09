import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { auth } from "../firebase"

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>RumzerChat</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>


      </div>
    </div>
  )
}
