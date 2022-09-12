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
import CreateContract from "layouts/forms/CreateContract";
import Projects from "layouts/dashboard/components/Projects";
import Contracts from "layouts/Contracts";
import BillOfLanding from "layouts/forms/BillOfLanding";
import CommercialInvoice from "layouts/forms/CommercialInvoice";
import AuthorityDashboard from "layouts/dashboard/AuthorityDashboard";
import InspectionDashboard from "layouts/dashboard/InspectionDashboard";
import ImportersDashboard from "layouts/dashboard/ImportersDashboard";
import Analytics from "layouts/dashboard/Analytics";
import BillOfLadingView from "layouts/formViews/BillOfLadingView";
import CommercialInvoiceView from "layouts/formViews/CommercialInvoiceView";
import Forms from "layouts/forms";
import EWayBillCredentials from "layouts/Contracts/EWayBillCredentials";
import Market from "layouts/marketPlace/Market";
import Intermediate from "layouts/marketPlace/Intermediate";
import DropBox from "layouts/Contracts/DropBox";
import View from "layouts/Contracts/View";

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
    icon: <Shop size="12px" />,
    component: <Analytics />,
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
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <Settings size="12px" />,
    component: <RTL />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Create Contract",
    key: "create-contract",
    route: "/form/create-contract",
    icon: <SpaceShip size="12px" />,
    component: <CreateContract />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bill Of Landing",
    key: "bill-of-landing",
    route: "/form/bill-of-landing",
    icon: <SpaceShip size="12px" />,
    component: <BillOfLanding />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bill Of Landing View",
    key: "bill-of-landing-view",
    route: "/form/bill-of-landing-view",
    icon: <SpaceShip size="12px" />,
    component: <BillOfLadingView />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Commercial Invoice",
    key: "commercial-invoice",
    route: "/form/commercial-invoice",
    icon: <SpaceShip size="12px" />,
    component: <BillOfLanding />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Commercial Invoice View",
    key: "commercial-invoice-view",
    route: "/form/commercial-invoice-view",
    icon: <SpaceShip size="12px" />,
    component: <CommercialInvoiceView />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contracts",
    key: "contracts",
    route: "/contracts",
    icon: <Cube size="12px" />,
    component: <Contracts />,
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
  {
    type: "collapse",
    name: "New Order",
    key: "new-order",
    route: "/new-order",
    icon: <Document size="12px" />,
    component: <Forms />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "E Way Bill",
    key: "eway-bill",
    route: "/eway-bill",
    icon: <Document size="12px" />,
    component: <EWayBillCredentials />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Market",
    key: "market-place",
    route: "/market-place",
    icon: <Office size="12px" />,
    component: <Market />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Order Mode",
    key: "order-mode",
    route: "/order-mode",
    icon: <Office size="12px" />,
    component: <Intermediate />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "dropbox",
    key: "dropbox",
    route: "/dropbox",
    icon: <Office size="12px" />,
    component: <DropBox />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "dropbox",
    key: "dropbox",
    route: "/dropbox/view",
    icon: <Office size="12px" />,
    component: <View />,
    noCollapse: true,
  },
];

export default routes;
