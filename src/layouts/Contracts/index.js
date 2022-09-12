import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import typography from "assets/theme/base/typography";

import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import Table from "examples/Tables/Table";
import SoftTypography from "components/SoftTypography";
import { Card } from "@mui/material";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import SearchBox from "layouts/dashboard/components/SearchBox";

function Contracts() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  return (
    <>
      {/* <DashboardNavbar /> */}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SearchBox />
          <Grid container spacing={3} mt={3}>
            <Grid item lg={3}>
              <Link to="/new-order">
                <DefaultInfoCard
                  title="Create Order"
                  icon="list"
                  description="Initiate the order"
                  value="+1"
                  color="info"
                />
                {/* <Icon>add</Icon>&nbsp; Make Order */}
              </Link>
            </Grid>
            <Grid item lg={3}>
              <Link to="/eway-bill">
                <DefaultInfoCard
                  title="Order Using EWB No"
                  icon="extension"
                  description="Using GST - EWay Bill Number"
                  value="+1"
                  color="info"
                />
                {/* <Icon>add</Icon>&nbsp; Make Order */}
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} sm={6} xl={3} lg={12}></Grid> */}
            {/* <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/bill-of-landing">
                <SoftButton variant="gradient" color="info" size="large">
                  <Icon>table</Icon>&nbsp; View Contracts
                </SoftButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/commercial-invoice">
                <SoftButton variant="gradient" color="info" size="large">
                  <Icon>table</Icon>&nbsp; Commercial Invoice
                </SoftButton>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <Link to="/form/commercial-invoice-view">
                <SoftButton variant="gradient" color="info" size="large">
                  <Icon>table</Icon>&nbsp; View Contract
                </SoftButton>
              </Link>
            </Grid> */}
          </Grid>
          {/* <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid> */}
        </SoftBox>
      </SoftBox>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders Status</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={prCols} rows={prRows} />
            </SoftBox>
          </Card>
          <br />
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Order History</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default Contracts;
