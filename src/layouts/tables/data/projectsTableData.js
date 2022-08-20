/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "order_id", align: "left" },
    { name: "value_of_goods", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      order_id: 13214124,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action: (
        <Link to="/form/bill-of-landing-view">
          <SoftButton color="info">View</SoftButton>
        </Link>
      ),
    },
    {
      order_id: 1241234,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action: (
        <Link to="/billing">
          <SoftButton color="info">View</SoftButton>,
        </Link>
      ),
    },
    {
      order_id: 124132413,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action: <SoftButton color="info">View</SoftButton>,
    },
    {
      order_id: 1241244,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action: <SoftButton color="info">View</SoftButton>,
    },
    {
      order_id: 12341234,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action: <SoftButton color="info">View</SoftButton>,
    },
    {
      order_id: 1241234,
      value_of_goods: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action: <SoftButton color="info">View</SoftButton>,
    },
  ],
};

export default projectsTableData;
