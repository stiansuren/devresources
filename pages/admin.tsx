import { NextPage } from "next";
import React, { useContext } from "react";

import { SignIn } from "../admin/sign-in";
import { AdminContent } from "../admin/adminContent";
import { AuthContext } from "../admin/authContext";

import "../admin/admin.scss";

const Admin: NextPage = () => {
  const { user } = useContext(AuthContext);

  return !!user ? <AdminContent /> : <SignIn />;
};

export default Admin;
