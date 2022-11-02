import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import "../style/signup.css";
import { redirect } from "react-router-dom";

const SignUp = () => {
  const [profile, setProfile] = useState([]);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
  }

  const onSuccess = async (response) => {
    console.log(response);
    console.log("It is working");

    var userPicture = response.profileObj.imageUrl;
    showImage(userPicture, 124, 124, "User Profile Picture");

    var profile = response.profileObj;
    console.log("Full Name: " + profile.name);
    console.log("Given Name: " + profile.givenName);
    console.log("Email: " + profile.email);

    // const res = await fetch("/api/google-login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: response.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application.json",
    //   },
    // });
    // const data = await res.json();
    // setLoginData(data);
    // localStorage.setItem("loginData", JSON.stringify(data));
  };
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Full Name: " + profile.getName());
    console.log("Given Name: " + profile.getGivenName());
    console.log("Family Name: " + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    //sending tokenId to server with http post
    function tokenIdToServer(id_token) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://localhost:3000/tokenSignIn");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onload = function () {
        console.log("Signed in as: " + xhr.responseText);
      };
      xhr.send("idtoken=" + id_token);
    }
    tokenIdToServer(id_token);
  }

  const onFailure = (error) => {
    console.log(error);
    console.log("User Not found", error);
  };

  // const [loginData, setLoginData] = useState(
  //   localStorage.getItem("loginData")
  //     ? JSON.parse(localStorage.getItem("loginData"))
  //     : null
  // );

  // const logOut = () => {
  //   localStorage.removeItem("loginData");
  //   setLoginData(null);
  // };

  return (
    <div className="signup">
      <h1>React Google Login</h1>
      <br />
      <br />
      {/* <div className="">
        {loginData ? (
          <div>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={logOut}>Logout</button>
          </div>
        ) : ( */}
      <div className="g-signin2" data-onsuccess={onSignIn} data-theme="dark">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
      {/* )} */}

      {/* {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )} */}
    </div>
    // </div>
  );
};
export default SignUp;
