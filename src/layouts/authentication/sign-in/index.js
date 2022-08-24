import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Switch from "@mui/material/Switch";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import CoverLayout from "layouts/authentication/components/CoverLayout";

import curved9 from "assets/images/curved-images/curved-6.jpg";
import server from "../../../api/server";
import { LOGIN } from "api/urls";
import { signIn } from "actions";
import Loader from "components/Loader";

function SignIn({ userInfo, signIn }) {
  const [rememberMe, setRememberMe] = useState(true);
  const history = useNavigate();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [user, setUser] = useState();
  const [credential, setCredential] = useState({ email: "", pass: "" });

  useEffect(() => {
    if (userInfo && userInfo.isSignedIn) {
      history("/dashboard");
    }
  }, [userInfo]);

  const login = async () => {
    const res = await server.get(LOGIN, {
      params: {},
    });

    setUser(res.data);
  };

  return !userInfo.isSignedIn ? (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            value={credential.email}
            onChange={(e) => {
              credential.email = e.target.value;
              setCredential({ ...credential });
            }}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            value={credential.pass}
            onChange={(e) => {
              credential.pass = e.target.value;
              setCredential({ ...credential });
            }}
          />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={(e) => {
              signIn(credential);
            }}
          >
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  ) : (
    <Loader />
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);
