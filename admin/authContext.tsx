import React, { useState, useEffect, createContext, ReactNode } from "react";
import { signIn, signOut, addAuthObserver } from "../utils/firebase";

type AuthContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  handleSignOut: () => void;
  handleSignIn: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  (null as unknown) as AuthContextType
);

export const AuthProvider: React.FunctionComponent<ReactNode> = props => {
  const [user, setUser] = useState("");

  const handleSignOut = async () => {
    await signOut();
    setUser("");
  };

  const handleSignIn = async (email: string, password: string) => {
    const user = await signIn(email, password);
    user && setUser(user);
  };

  const initialValue = {
    user: user,
    setUser: setUser,
    handleSignOut: handleSignOut,
    handleSignIn: handleSignIn
  };

  const [value, setValue] = useState(initialValue);

  const onAuthChanged = (user: string, auth: boolean) => {
    setUser(user);
  };

  useEffect(() => {
    const unsubscribe = addAuthObserver(onAuthChanged);

    setValue({
      ...value,
      user: user
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
