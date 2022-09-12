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
import { Button, Grid, Icon } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const data = {
  vendor: "big detail",
  consignee: "some details over here",
  invoiceNum: 1223234,
  dateOfShipment: "Jan 2, 2022",
  letterOfCreditNumber: 2134124,
  awbNum: 12312,
  currency: "USD",
  origin: "US",
  condition: "Conditions of Sale/Term of Sale",
  importer: "importer",
  via: "sea",
  from: "Ind",
  totNetWeight: 234,
  totGrossWeight: 231,
  totInvoice: "invoice details",
  name: "Sadu",
  signature: "V Sadurathman",
  date: "Jan 1, 2022",
  products: [
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
    {
      desc: "about product",
      qty: 234,
      weight: 213,
      price: 32,
      total: 32,
    },
  ],
};

function CommercialInvoiceView() {
  const [products, setProduct] = useState([1]);

  const addProductHandler = () => {
    products.push(products[products.length]);
    setProduct([...products]);
  };
  const removeProductHandler = () => {
    products.pop();
    setProduct([...products]);
  };

  const productData = (ele) => {
    // console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Product Description" value={ele.desc} disabled={true} />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput placeholder="QTY" value={ele.qty} disabled={true} />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Weight" value={ele.weight} disabled={true} />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Unit Price" value={ele.price} disabled={true} />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Total Value" value={ele.total} disabled={true} />
          </SoftBox>
        </Grid>
      </Grid>
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox p={3} mb={1} ml={6} pl={6} textAlign="center">
          <Grid container spacing={6}>
            <Grid item xs={12} lg={8}>
              <SoftTypography variant="h4" fontWeight="medium">
                Commercial Invoice
              </SoftTypography>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftButton>
                <Icon>print</Icon>&nbsp; Print
              </SoftButton>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox pt={2} pb={3} ml={6} px={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={6} pt={2} pb={3}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Vendor/Exporter :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.vendor}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      Invoice :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.invoiceNum}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      Letter Of Credit Number :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.letterOfCreditNumber}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      Currency :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.currency}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      Date Of Shipment :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.dateOfShipment}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      AWB/BL Number :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.awbNum}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      Country Of Origin :{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {data.origin}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>

              <SoftBox pt={4} mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Conditions of Sale/Terms Of Sale :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.condition}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Consignee :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.consignee}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Importer :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.importer}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Transportation
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Via :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.via}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  From :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.from}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Total Number Of Packages
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Total Net Weight :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.totNetWeight}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Total Gross Weight :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.totGrossWeight}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftBox mb={2} mt={4.3}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Total Invoice :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.totInvoice}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item>
              <Grid mt={2} container spacing={2}>
                <Grid item xs={8} lg={4}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Product Description
                  </SoftTypography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    QTY
                  </SoftTypography>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Weigth
                  </SoftTypography>
                </Grid>
                <Grid item xs={4} lg={2}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Unit Price
                  </SoftTypography>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Total Value
                  </SoftTypography>
                </Grid>
              </Grid>
              {data?.products.map((ele) => {
                return (
                  <Grid item key={ele.qty}>
                    {productData(ele)}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <SoftTypography variant="h6" fontWeight="medium" mt={6} ml={1}>
            These Conditions, techniques, or softwares were exported from the United States in
            accordance with export administartion regulations. Diversion contrary to United States
            law prohibited. We certify that this commercial invoice is true and correct
          </SoftTypography>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Name :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.name}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Signature :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.signature}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                  Date :{" "}
                  <SoftTypography variant="button" color="text" fontWeight="regular">
                    {data.date}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item>
              <SoftButton variant="gradient" color="success" onClick={addProductHandler}>
                <Icon>add</Icon>&nbsp;&nbsp;Approve
              </SoftButton>
            </Grid>
            <Grid item>
              <SoftButton variant="gradient" color="error" onClick={removeProductHandler}>
                <Icon>remove</Icon>&nbsp;&nbsp;Deny
              </SoftButton>
            </Grid>
          </Grid>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default CommercialInvoiceView;
