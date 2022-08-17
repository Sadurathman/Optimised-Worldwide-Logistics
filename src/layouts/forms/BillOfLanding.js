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

function BillOfLanding() {
  const [fromFOB, setFromFOB] = useState(false);
  const handleSetFromFOB = () => setFromFOB(!fromFOB);

  const [toFOB, setToFOB] = useState(false);
  const handleSetToFOB = () => setToFOB(!toFOB);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h4" fontWeight="medium">
            Bill Of Landing
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} ml={6} px={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" pt={2} pb={3} px={3}>
                Ship From
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Address" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="City/State/Zip" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="SID#" />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={fromFOB} onChange={handleSetFromFOB} />
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    onClick={handleSetFromFOB}
                    sx={{ cursor: "poiner", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;FOB&nbsp;
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={6} pt={2} pb={3}>
                <SoftInput placeholder="Bill Of Landing Number" />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3} px={3}>
                Ship To
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Address" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="City/State/Zip" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Location#" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="CID#" />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={toFOB} onChange={handleSetToFOB} />
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    onClick={handleSetToFOB}
                    sx={{ cursor: "poiner", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;FOB&nbsp;
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={9} pt={2} pb={3}>
                <SoftInput placeholder="Carrier Name" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="Trailer Number" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="Seal Number(s)" />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3} px={3}>
                Third Party Freight Charges Bill To
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Address" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="City/State/Zip" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Special Instructions" />
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={3}>
                <SoftBox mt={9} pt={2} pb={3}>
                  <SoftInput placeholder="SCAC" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Pro Number" />
                </SoftBox>
              </SoftBox>
              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3}>
                  Freight Charge Terms: <p>(freight charges are prepaid unless marked otherwise)</p>
                </SoftTypography>
                <Grid container spacing={2}>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="Prepaid" />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="Collect" />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="3rd Party" />
                    </SoftBox>
                  </Grid>
                </Grid>
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

export default BillOfLanding;
