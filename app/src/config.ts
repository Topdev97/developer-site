
import {initializeApp} from 'firebase/app'

const config = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "davc93.firebaseapp.com",
    projectId: "davc93",
    storageBucket: "davc93.appspot.com",
    messagingSenderId: "605943476916",
    appId: "1:605943476916:web:ab4c1cd630fb44c9229de1",
    measurementId: "G-Q13GH0X2RQ"
  };

const app = initializeApp(config)

export {
    app
}