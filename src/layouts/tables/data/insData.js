/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftButton from "components/SoftButton";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const insData = {
  columns: [
    { name: "order_Id", align: "left" },
    { name: "number_of_items", align: "left" },
    { name: "status", align: "center" },
    { name: "ordered_date", align: "center" },
    { name: "detail", align: "center" },
  ],

  rows: [
    {
      order_Id: 1231243124,
      number_of_items: <Function job="10923" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="open" color="success" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
    {
      order_Id: 214312432421,
      number_of_items: <Function job="32478" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="closed" color="secondary" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
    {
      order_Id: 213124124213,
      number_of_items: <Function job="124123" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="open" color="success" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
    {
      order_Id: 231413241234,
      number_of_items: <Function job="234432" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="open" color="success" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
    {
      order_Id: 1242134324,
      number_of_items: <Function job="2144" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="closed" color="secondary" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
    {
      order_Id: 12432143124,
      number_of_items: <Function job="324235" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="closed" color="secondary" size="xs" container />
      ),
      ordered_date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      detail: (
        <SoftButton variant="gradient" color="success">
          Expand
        </SoftButton>
      ),
    },
  ],
};

export default insData;
