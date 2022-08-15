import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import typography from "assets/theme/base/typography";

import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import OrdersOverview from "layouts/dashboard/components/OrderOverview";

function Contracts() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/create-contract">
                <SoftButton variant="outlined" color="info">
                  <Icon>add</Icon>&nbsp; Create Contract
                </SoftButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/create-contract">
                <SoftButton variant="outlined" color="info">
                  <Icon>table</Icon>&nbsp; View Contracts
                </SoftButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/create-contract">
                <SoftButton variant="outlined" color="info">
                  <Icon>table</Icon>&nbsp; View Contract
                </SoftButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/create-contract">
                <SoftButton variant="outlined" color="info">
                  <Icon>table</Icon>&nbsp; View Contract
                </SoftButton>
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Contracts;
