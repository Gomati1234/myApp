import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';
import google from './assets/google.png';
import github from './assets/github.png';

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login with facebook
  </button>
);
class App extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log("response from FACEBOOK " + JSON.stringify(response,undefined,5));
    }
    const responseGoogle = (response) => {
      console.log(JSON.stringify(response,undefined,5));
    }
    const onSuccess = response => console.log("Success   "+JSON.stringify(response));
    const onFailure = response => console.log("Failed here "+response);
    const styleList={
      color:'white'
    }
return (
        <div className="App">
          <div className="googleLogin">
          <GoogleLogin
          style={styleList}
            clientId="324956446559-mb14m1p3pmvv2jnobvj2q0glsheo9g62.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          ><img src={google} alt="hello"/></GoogleLogin>
          </div>
          
          <div className="facebookLogin">
          <FacebookLogin
          style={styleList}
          textButton=""
          cssClass="facebook"
            appId="815415458651207"
            // autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} 
            component = {MyFacebookButton}
          />
          </div>

          <div className="githubLogin">
          <GitHubLogin 
          style={styleList}          
              redirectUri="" 
              clientId="815b62d2de3f985b85da"
              onSuccess={onSuccess}
              onFailure={onFailure}
          ><img src={github} alt="hello"/></GitHubLogin>
          </div>
         
        </div>
);
}
}

export default App;
