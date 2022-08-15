import { forwardRef } from "react";

import PropTypes from "prop-types";

import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import { menuItem, menuImage } from "examples/Items/NotificationItem/styles";
import { NavLink } from "react-router-dom";

const NotificationItem = forwardRef(({ route, color, image, title, date, ...rest }, ref) => (
  <NavLink to={route} key={title[0]}>
    <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
      <SoftBox
        width="2.25rem"
        height="2.25rem"
        mt={0.25}
        mr={2}
        mb={0.25}
        borderRadius="lg"
        sx={(theme) => menuImage(theme, { color })}
      >
        {image}
      </SoftBox>
      <SoftBox>
        <SoftTypography variant="button" textTransform="capitalize" fontWeight="regular">
          <strong>{title[1]}</strong> {title[0]}
        </SoftTypography>
        <SoftTypography
          variant="caption"
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          <SoftTypography variant="button" color="secondary">
            {/* <Icon
            sx={{
              lineHeight: 1.2,
              mr: 0.5,
            }}
            >
            watch_later
          </Icon> */}
          </SoftTypography>
          {/* {date} */}
        </SoftTypography>
      </SoftBox>
    </MenuItem>
  </NavLink>
));

NotificationItem.defaultProps = {
  color: "dark",
  route: "/dashboard",
};

NotificationItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NotificationItem;
