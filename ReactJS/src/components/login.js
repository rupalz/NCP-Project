import React from 'react';
import GoogleIcon from '../assets/google_logo.png'
import eye from '../assets/password_eye.png'
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div className="form-container">
               <div className="form">
                    <div className="form__headings">
                        <h1 className="heading-primary">Hello there!</h1>  
                    </div>
                    <a href="/" className="form__button form__button-hoverpurple">
                        <img src={GoogleIcon} className="form__button-image" alt="Google Icon"/>
                        Log in with Google
                    </a>
                    <div className="form__or">
                        <p className="color-grey defaultText form__or-or">or</p>
                    </div>
                    <div>
                        <form action="/" method="post">
                            <div className="form__group">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input type="email" name="email" className="form__input" placeholder="mail@yourmail.com" required/>
                            </div>
                            <div className="form__group form__eye">
                                <label htmlFor="password" className="form__label">Password</label>
                                <input type="password" name="password" className="form__input" placeholder="Min. 8 characters" required/>
                                <img src={eye} alt="Password Reveal Button" className="form__reveal" />
                            </div>
                            <div className="form__group form__flexcontainer">
                                <div className="form__checkbox">
                                    <input type="checkbox" className="form__checkbox-input" name="Remember" value="Bike" />
                                    <label for="Remember"> Remember me</label>
                                </div>
                                <Link to="/forgotpassword" className="form__link">Forgot Password?</Link>
                            </div>
                            <Link to="/" className="link"><button className="form__submit" type="submit">Login</button></Link>
                        </form>
                    </div>
               </div>
            </div>
        </>
    );
}
