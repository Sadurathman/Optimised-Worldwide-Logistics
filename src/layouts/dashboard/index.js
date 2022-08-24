import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { connect } from "react-redux";
import LogisticsDashboard from "./LogisticsDashboard";
import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImportersDashboard from "./ImportersDashboard";
import AuthorityDashboard from "./AuthorityDashboard";
import InspectionDashboard from "./InspectionDashboard";

function Dashboard({ userInfo, userType }) {
  const history = useNavigate();
  useEffect(() => {
    console.log(userInfo.userId);
    if (!userInfo.isSignedIn) {
      console.log(userInfo.isSignedIn);
      history("/authentication/sign-in");
    }
  }, [userInfo]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LogisticsDashboard />
      {userType === 4 && <LogisticsDashboard />}
      {userType === 3 && <ImportersDashboard />}
      {userType === 2 && <AuthorityDashboard />}
      {userType === 1 && <InspectionDashboard />}
      <Footer />
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth,
    userType: state.auth.userId?.userType,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
