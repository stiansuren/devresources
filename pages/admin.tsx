import { NextPage } from "next";
import React, { useEffect, useContext } from "react";

import { SignIn } from "../admin/sign-in";
import { AdminContent } from "../admin/adminContent";
import { AuthContext } from "../admin/authContext";

import "../admin/admin.scss";

const Admin: NextPage = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log("AdminAuth: ", auth);
  }, [auth]);

  return auth ? <AdminContent /> : <SignIn />;
};

export default Admin;
