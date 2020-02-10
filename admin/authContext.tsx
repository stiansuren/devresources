import React, { useState, useEffect, createContext, ReactNode } from "react";
import { signIn, signOut, addAuthObserver } from "../utils/firebase";

type AuthContextType = {
  user: string;
  auth: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignOut: () => void;
  handleSignIn: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  (null as unknown) as AuthContextType
);

export const AuthProvider: React.FunctionComponent<ReactNode> = props => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");

  const handleSignOut = async () => {
    const isSignedOut = await signOut();
    setAuth(!isSignedOut);
  };

  const handleSignIn = async (email: string, password: string) => {
    const user = await signIn(email, password);
    user ? setAuth(true) : setAuth(false);
    user && setUser(user);
  };

  const initialValue = {
    user: user,
    auth: auth,
    setAuth: setAuth,
    setUser: setUser,
    handleSignOut: handleSignOut,
    handleSignIn: handleSignIn
  };

  const [value, setValue] = useState(initialValue);

  const onAuthChanged = (user: string, auth: boolean) => {
    setAuth(auth);
    setUser(user);
  };

  useEffect(() => {
    addAuthObserver(onAuthChanged);

    setValue({
      ...value,
      user: user,
      auth: auth
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={value}>
      {props.children}
      <h2>{user ? user.toString() : ""}</h2>
    </AuthContext.Provider>
  );
};
