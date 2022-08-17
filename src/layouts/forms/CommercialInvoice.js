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

function CommercialInvoice() {
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
    console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Product Description" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput placeholder="QTY" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Weight" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Unit Price" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Total Value" />
          </SoftBox>
        </Grid>
      </Grid>
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h4" fontWeight="medium">
            Commercial Invoice
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} ml={6} px={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={6} pt={2} pb={3}>
                <SoftInput placeholder="Vendor/Exporter" multiline rows={10} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftInput placeholder="Invoice Number" />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput placeholder="Letter of Credit Number" />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput placeholder="Currency" />
                  </SoftBox>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftInput placeholder="Date Of Shipment" />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput placeholder="AWB/BL Number" />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput placeholder="Country of Origin" />
                  </SoftBox>
                </Grid>
              </Grid>

              <SoftBox pt={4}>
                <SoftInput placeholder="Conditions of Sale/Terms of Sale" fullWidth />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftInput placeholder="Consignee" multiline rows={5} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftInput placeholder="Importer" multiline rows={5} />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Transportation
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftInput placeholder="Via" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="From" />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Total Number Of Packages
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftInput placeholder="Total Net Weight" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="Total Gross Weight" />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftBox mb={2} mt={4.3}>
                <SoftInput placeholder="Total Invoice" multiline rows={3.6} />
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
              {products.map((ele) => {
                return (
                  <Grid item key={ele}>
                    {productData(ele)}
                  </Grid>
                );
              })}
              <Grid container spacing={2} mt={1}>
                <Grid item>
                  <SoftButton variant="gradient" color="success" onClick={addProductHandler}>
                    <Icon>add</Icon>&nbsp;&nbsp;Add
                  </SoftButton>
                </Grid>
                <Grid item>
                  <SoftButton variant="gradient" color="error" onClick={removeProductHandler}>
                    <Icon>remove</Icon>&nbsp;&nbsp;Remove
                  </SoftButton>
                </Grid>
              </Grid>
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
                <SoftInput placeholder="Name" />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftInput placeholder="Signature" />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftInput placeholder="Date" />
              </SoftBox>
            </Grid>
          </Grid>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="dark">
              Submit
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default CommercialInvoice;
