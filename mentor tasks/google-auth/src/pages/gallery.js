import React from "react";
import "../style/gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="welcome">
        Welcome to Gallery, <br />
        Sign Up Successful!
      </h1>
      {/* <script>
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
          }
      </script> */}
    </div>
  );
};

export default Gallery;
