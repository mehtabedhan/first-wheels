import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

// var env   = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyBDUMSS5PWls4t_Tvq3XJNPKghsN-dRj04",
  authDomain: "automobile-marketplace.firebaseapp.com",
  projectId: "automobile-marketplace",
  storageBucket: "automobile-marketplace.appspot.com",
  messagingSenderId: "1084908724174",
  appId: "1:1084908724174:web:91e16a441dae54a6d7d59f",
  measurementId: "G-XLEDQN41HJ"
};


  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);

  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),
  
  //   // Optional argument. If true, the SDK automatically refreshes App Check
  //   // tokens as needed.
  //   isTokenAutoRefreshEnabled: true
  // });
  

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  
export {app,storage,firestore};


