import React from "react";
import {
  signInWithGooglePopop,
  createUserDocumentFromAuth,
} from "../../utils/firebaseUtils";

function SignInComponent() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopop();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
}

export default SignInComponent;
