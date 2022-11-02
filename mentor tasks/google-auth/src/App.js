import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Gallery from "./pages/gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;

///////////////////////////////////

// import "./App.css";
// import GoogleLogin from "react-google-login";
// import { useState } from "react";

// function App() {
//   const [loginData, setLoginData] = useState(
//     localStorage.getItem("loginData")
//       ? JSON.parse(localStorage.getItem("loginData"))
//       : null
//   );

//   const handleFailure = (result) => {
//     alert(result);
//   };

//   const handleLogin = async (googleData) => {
//     consoleData(googleData);
//     const res = await fetch("/api/google-login", {
//       method: "POST",
//       body: JSON.stringify({
//         token: googleData.tokenId,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await res.json();
//     setLoginData(data);
//     localStorage.setItem("loginData", JSON.stringify(data));
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("loginData");
//     setLoginData(null);
//   };

//   const consoleData = (googleData) => {
//     if (googleData.isSignedIn.get()) {
//       var profile = googleData.currentUser.get().getBasicProfile();
//       console.log("ID: " + profile.getId());
//       console.log("Full Name: " + profile.getName());
//       console.log("Given Name: " + profile.getGivenName());
//       console.log("Family Name: " + profile.getFamilyName());
//       console.log("Image URL: " + profile.getImageUrl());
//       console.log("Email: " + profile.getEmail());
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Google Login App</h1>
//         <div>
//           {loginData ? (
//             <div>
//               <h3>You logged in as {loginData.email}</h3>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <GoogleLogin
//               clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//               buttonText="Log in with Google"
//               onSuccess={handleLogin}
//               onFailure={handleFailure}
//               cookiePolicy={"single_host_origin"}
//               onClick={consoleData()}
//             ></GoogleLogin>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////

// import "./App.css";
// import React, { useState, useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { gapi } from "gapi-script";

// function App() {
//   const [profile, setProfile] = useState([]);
//   const clientId =
//     "";
//   useEffect(() => {
//     const initClient = () => {
//       gapi.client.init({
//         clientId: clientId,
//         scope: "",
//       });
//     };
//     gapi.load("client:auth2", initClient);
//   });

//   const onSuccess = (res) => {
//     console.log("It is working");
//     // setProfile(res.profileObj);
//   };

//   const onFailure = (err) => {
//     console.log("User Not found", err);
//   };

//   const logOut = () => {
//     setProfile(null);
//   };

//   return (
//     <div className="card">
//       <h1>React Google Login</h1>
//       <br />
//       <br />
//       {profile ? (
//         <div>
//           <img src={profile.imageUrl} alt="user image" />
//           <h3>User Logged in</h3>
//           <p>Name: {profile.name}</p>
//           <p>Email Address: {profile.email}</p>
//           <br />
//           <br />
//           <GoogleLogout
//             clientId={clientId}
//             buttonText="Log out"
//             onLogoutSuccess={logOut}
//           />
//         </div>
//       ) : (
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign in with Google"
//           onSuccess={onSuccess}
//           onFailure={onFailure}
//           cookiePolicy={"single_host_origin"}
//           isSignedIn={true}
//         />
//       )}
//     </div>
//   );
// }
// export default App;

// 1. Once the button is clicked what i need to pass
// 2. If it is error - show error message as "User not found"
// 3. if it is success - pass the response Object to and redirect to the next screen
