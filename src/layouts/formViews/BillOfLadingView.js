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
import { Grid, Icon } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const data = {
  fromName: "Sri Hari",
  fromAddress: "Address",
  fromLocation: "city-state-pincode",
  sid: 1234,
  fromFOB: true,
  ladingNumber: 1234,
  toName: "Tharun",
  toAddress: "Add2",
  toLocation: "to-loc",
  location: "loc",
  cid: 1234,
  carrierName: "carrier_name",
  trailerNumber: 12321,
  sealNumbers: [12321, 123],
  toFOB: true,
  tpName: "Tp",
  tpAddress: "Address tp",
  tpLocation: "city-e-pincode",
  specialInstruction: "be careful",
  scac: "scac",
  proNum: 12323,
  prepaid: "$1200",
  collect: "$3200",
  tpCharge: "$600",
  orderInfo: [
    {
      custOrderNum: 1234,
      pkgs: 32,
      weight: 43,
      slip: "N",
      additionalShipperInfo: "info add",
    },
    {
      custOrderNum: 1234,
      pkgs: 32,
      weight: 43,
      slip: "N",
      additionalShipperInfo: "info add",
    },
    {
      custOrderNum: 1234,
      pkgs: 32,
      weight: 43,
      slip: "N",
      additionalShipperInfo: "info add",
    },
    {
      custOrderNum: 1234,
      pkgs: 32,
      weight: 43,
      slip: "N",
      additionalShipperInfo: "info add",
    },
    {
      custOrderNum: 1234,
      pkgs: 32,
      weight: 43,
      slip: "N",
      additionalShipperInfo: "info add",
    },
  ],
  carrierInfo: [
    {
      handQty: 123,
      handType: "cryps",
      packQty: 123,
      packType: "pks",
      weight: 23,
      hm: 123,
      description: "About the item",
      nmfc: 213,
      class: "class",
    },
    {
      handQty: 123,
      handType: "cryps",
      packQty: 123,
      packType: "pks",
      weight: 23,
      hm: 123,
      description: "About the item",
      nmfc: 213,
      class: "class",
    },
    {
      handQty: 123,
      handType: "cryps",
      packQty: 123,
      packType: "pks",
      weight: 23,
      hm: 123,
      description: "About the item",
      nmfc: 213,
      class: "class",
    },
    {
      handQty: 123,
      handType: "cryps",
      packQty: 123,
      packType: "pks",
      weight: 23,
      hm: 123,
      description: "About the item",
      nmfc: 213,
      class: "class",
    },
  ],
};

function BillOfLadingView() {
  const [products, setProduct] = useState([1]);
  const [carrier, setCarrier] = useState([1]);

  const addProductHandler = () => {
    products.push(products[products.length]);
    setProduct([...products]);
    console.log(products);
  };
  const removeProductHandler = () => {
    products.pop();
    setProduct([...products]);
  };

  const addCarrierHandler = () => {
    carrier.push(carrier[carrier.length]);
    setCarrier([...carrier]);
  };
  const removeCarrierHandler = () => {
    carrier.pop();
    setCarrier([...carrier]);
  };

  const productData = (ele) => {
    console.log(ele);
    return (
      <Grid container spacing={2} ml={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.custOrderNum}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.pkgs}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.weight}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.slip}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.additionalShipperInfo}
            </SoftTypography>
          </SoftBox>
        </Grid>
      </Grid>
    );
  };

  const carrierInfo = (ele) => {
    // console.log(ele);
    return (
      <Grid container spacing={2} ml={1}>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.handQty}
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.handType}
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.packQty}
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.packType}
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.weight}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.hm}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={8} lg={4}>
          <SoftBox pt={1}>
            <SoftTypography variant="button" color="text" fontWeight="regular">
              {ele.description}
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.nmfc}
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={1}>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  {ele.class}
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

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
            Bill Of Lading
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1} pb={3} ml={6} px={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" pt={1} pb={3} px={3}>
                Ship From
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Name :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.fromName}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Address :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.fromAddress}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    City/State/PIN :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.fromLocation}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    SID# :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.sid}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" fontWeight="medium" color="text">
                    FOB :&nbsp;&nbsp;
                  </SoftTypography>
                  <Checkbox checked={true} />
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={6} pt={1} pb={3}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Bill Of Lading Number :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.ladingNumber}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={1} pb={3} px={3}>
                Ship To
              </SoftTypography>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Name :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.toName}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Address :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.toAddress}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  City/State/PIN :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.toLocation}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Location :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.location}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  CID# :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.cid}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" fontWeight="medium" color="text">
                  FOB :&nbsp;&nbsp;
                </SoftTypography>
                <Checkbox checked={true} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={9} pt={1} pb={3}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Carrier Name :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.carrierName}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Trailer Number :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.trailerNumber}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Seal Number(s) :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.sealNumbers?.map((num) => num + ", ")}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={1} pb={3} px={3}>
                Third Party Freight Charges Bill To
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Name :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.tpName}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Address :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.tpAddress}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    City/State/PIN :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.tpLocation}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Special instructions :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.specialInstruction}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={3}>
                <SoftBox mt={9} pt={1} pb={3}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    SCAC :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.scac}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={1}>
                  <SoftTypography variant="button" color="text" fontWeight="medium">
                    Pro Number :{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      {data.proNum}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={1} pb={3}>
                  Freight Charge Terms: <p>(freight charges are prepaid unless marked otherwise)</p>
                </SoftTypography>
                <Grid container spacing={2}>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={1}>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        Prepaid:{" "}
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                          {data.prepaid}
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={1}>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        Collect :{" "}
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                          {data.collect}
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={1}>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        3rd Party :{" "}
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                          {data.tpCharge}
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  </Grid>
                </Grid>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={24} lg={10}>
              <SoftTypography variant="h4" fontWeight="medium" mb={1} ml={1}>
                Customer Order Information
              </SoftTypography>
              <Grid mt={2} container spacing={2}>
                <Grid item xs={8} lg={4}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Customer Order Number
                  </SoftTypography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    #PKGS
                  </SoftTypography>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Weigth
                  </SoftTypography>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Pallet/Slip (Y/N)
                  </SoftTypography>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Additional Shipper Info
                  </SoftTypography>
                </Grid>
              </Grid>
              {data?.orderInfo.map((ele) => {
                return (
                  <Grid item key={ele.cid}>
                    {productData(ele)}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid container mt={6} spacing={2}>
            <Grid item>
              <SoftTypography variant="h4" fontWeight="medium" mb={1} ml={1}>
                Carrier Information
              </SoftTypography>
              <Grid mt={2} container spacing={2}>
                <Grid item xs={4} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={24} lg={10}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        Handling Unit
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        QTY
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        Type
                      </SoftTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={24} lg={10}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        Package
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        QTY
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        Type
                      </SoftTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <SoftTypography variant="h6" textAlign="center" fontWeight="medium" mb={1} ml={1}>
                    Weigth
                  </SoftTypography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <SoftTypography variant="h6" textAlign="center" fontWeight="medium" mb={1} ml={1}>
                    H.M.(x)
                  </SoftTypography>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <SoftTypography variant="h6" textAlign="center" fontWeight="medium" mb={1} ml={1}>
                    Commodity Description
                  </SoftTypography>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={24} lg={10}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        LTL ONLY
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        NMFC
                      </SoftTypography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <SoftTypography
                        variant="h6"
                        fontWeight="medium"
                        mb={1}
                        ml={1}
                        textAlign="center"
                      >
                        Class
                      </SoftTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {data?.carrierInfo.map((ele) => {
                return (
                  <Grid item key={ele}>
                    {carrierInfo(ele)}
                  </Grid>
                );
              })}
              <Grid container spacing={2} mt={1}>
                <Grid item>
                  <SoftButton variant="gradient" color="success" onClick={addCarrierHandler}>
                    <Icon>add</Icon>&nbsp;&nbsp;Approve
                  </SoftButton>
                </Grid>
                <Grid item>
                  <SoftButton variant="gradient" color="error" onClick={removeCarrierHandler}>
                    <Icon>remove</Icon>&nbsp;&nbsp;Deny
                  </SoftButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default BillOfLadingView;
