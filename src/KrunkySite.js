import React from 'react';
import './KrunkySite.css';
import { KrunkyTabBar } from "./Components/KrunkyTabBar";
import { KrunkySocialMedia } from "./Components/KrunkySocialMedia";
import firebaseConfig from "./firebaseConfig";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export const KrunkySite = ()  => {

  // Initialize Cloud Firestore through Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId
    });
  }

  //const database = React.useMemo(() => firebase.firestore(), []);

  return (
    <div className="App">
      <header className="page-header">
        <img src={"https://static-cdn.jtvnw.net/jtv_user_pictures/690c1f7a-dda3-424c-9520-9b12f4ce58b6-profile_image-70x70.png"} className="profile-icon" alt="Whoops..." />
        <p>
          KrunkyXO
        </p>
      </header>
      <KrunkyTabBar/>
      <KrunkySocialMedia/>
    </div>
  );
}
