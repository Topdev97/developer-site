import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);

const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();

    console.log(userCredential);
    console.log("id token:", idToken);
    return idToken;
  } catch (error) {
    console.error("Error en el signin", error);
  }
};

const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.error("Error en el signUp", error);
  }
};

const setAuthObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      console.log("you're sign out");
      // User is signed out
      // ...
    }
  });
};

const googleSign = () => {
  const provider = new GoogleAuthProvider();
};

const logOut = async () => {
  try {
    await signOut(auth);
    console.log("logout succcesfull");
  } catch (error) {
    console.error("Hubo un error", error);
  }
};

export { signIn, signUp, logOut, googleSign, setAuthObserver };
