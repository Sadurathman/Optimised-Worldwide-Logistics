// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Orders overview
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              24%
            </SoftTypography>{" "}
            this month
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="verified_user"
          title="Order Completed"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="warning"
          icon="directions_boat"
          title="In Transit"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="info"
          icon="list_alt"
          title="Bill Of Lading"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="info"
          icon="handshake"
          title="Bill of Shipping"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="receipt_long"
          title="Inspections"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="local_shipping"
          title="Shipping List - Customs"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="receipt"
          title="Commercial Invoice"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem color="dark" icon="paid" title="New order #4395133" dateTime="17 DEC" />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
