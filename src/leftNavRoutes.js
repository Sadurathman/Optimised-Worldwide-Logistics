import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Projects from "layouts/dashboard/components/Projects";
import AuthorityDashboard from "layouts/dashboard/AuthorityDashboard";
import InspectionDashboard from "layouts/dashboard/InspectionDashboard";
import ImportersDashboard from "layouts/dashboard/ImportersDashboard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Icon } from "@mui/material";
import BillOfLadingView from "layouts/formViews/BillOfLadingView";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Analytics/Insights",
    key: "analytics",
    route: "/analytics",
    icon: <AutoGraphIcon />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    route: "/orders",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },

  { type: "title", title: "Users Dashboards", key: "account-pages" },
  {
    type: "collapse",
    name: "Exporter",
    key: "exporter",
    route: "/contracts",
    icon: <Cube size="12px" />,
    component: <Projects />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Authority",
    key: "auth",
    route: "/auth-dash",
    icon: <Settings size="12px" />,
    component: <AuthorityDashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Inspection",
    key: "inspect",
    route: "/inspect",
    icon: <CustomerSupport size="12px" />,
    component: <InspectionDashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Importer",
    key: "importer",
    route: "/Importer",
    icon: <Document size="12px" />,
    component: <ImportersDashboard />,
    noCollapse: true,
  },
];

export default routes;
