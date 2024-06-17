import React from "react";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/UserManagement/Login";
import { Route, Routes } from "react-router-dom";

import Registration from "../pages/UserManagement/Registration";
import Home from "../pages/Home/Home";
import VerificationEmail from "../pages/UserManagement/VerificationEmail";
import SecurityQuestionCheck from "../pages/UserManagement/SecurityQuestionCheck";
import CeaserCipher from "../pages/UserManagement/CeaserCipher";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/registration" element={<Registration type="user" />} />
      <Route
        path="/propertyagent/registration"
        element={<Registration type="propertyagent" />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/verifyemail" element={<VerificationEmail />} />
      <Route path="/verifysecurityanswer" element={<SecurityQuestionCheck />} />
      <Route path="/verifyceasercipher" element={<CeaserCipher />} />
    </Routes>
  );
};
