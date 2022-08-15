import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Dashboard layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { Grid } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function CreateContract() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Initiate Order
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Company Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="IEC Number" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="AO Registration Number" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="password" placeholder="Password" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="password" placeholder="Re-Type Password" />
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Company Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="IEC Number" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="AO Registration Number" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="password" placeholder="Password" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput type="password" placeholder="Re-Type Password" />
                </SoftBox>
              </SoftBox>
            </Grid>
          </Grid>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="dark">
              Submit
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default CreateContract;
