import React from 'react'

import SignInInput from './SignInInput'

import "./SignIn.css"

export default function SignIn() {
    return (
        <div className="signIn">
          <div className="signIn__imageContainer">
          <img
        className="signIn__image"
        src="https://res.cloudinary.com/murungi/image/upload/v1624876580/steakholder/undraw_eating_together_tjhx__1_-removebg-preview_m1mzlf.png"
        alt="eating"
        srcset=""
      />
          </div>

          <div className="signIn__section">
            <p className="signIn__sectionTitle">SignIn</p>

            <SignInInput name="email" placeholder="Email" type="email"/>
            <SignInInput name="name" placeholder="Name" type="text"/>

            <button className="actionButton">Sign In</button>

            <p className="signIn__sectionToggle">Don't Have an account, sign up</p>


          </div>
        </div>
    )
}
