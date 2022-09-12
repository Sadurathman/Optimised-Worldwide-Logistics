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

const datas = {
  vendor: "",
  consignee: "",
  invoiceNum: "",
  dateOfShipment: "",
  letterOfCreditNumber: "",
  awbNum: "",
  currency: "",
  origin: "",
  condition: "",
  importer: "",
  via: "",
  from: "",
  totNetWeight: "",
  totGrossWeight: "",
  totInvoice: "",
  name: "",
  signature: "",
  date: "",
  products: [
    {
      desc: "",
      qty: "",
      weight: "",
      price: "",
      total: "",
      hs: "",
    },
  ],
};

function CommercialInvoice() {
  const [data, setData] = useState(datas);
  // const [products, setProduct] = useState([1]);

  const addProductHandler = () => {
    const newProd = {
      desc: "",
      qty: "",
      weight: "",
      price: "",
      total: "",
      hs: "",
    };
    data.products.push(newProd);
    setData({ ...data });
  };
  const removeProductHandler = () => {
    data.products.pop();
    setData({ ...data });
  };

  const productData = (idx) => {
    // console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Product Description"
              value={data.products[idx].desc}
              onChange={(e) => {
                data.products[idx].desc = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="QTY"
              value={data.products[idx].qty}
              onChange={(e) => {
                data.products[idx].qty = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Weight"
              value={data.products[idx].weight}
              onChange={(e) => {
                data.products[idx].weight = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="HS Code"
              value={data.products[idx].hs}
              onChange={(e) => {
                data.products[idx].hs = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Unit Price"
              value={data.products[idx].price}
              onChange={(e) => {
                data.products[idx].price = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Total Value"
              value={data.products[idx].total}
              onChange={(e) => {
                data.products[idx].total = e.target.value;
                setData({ ...data });
              }}
            />
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
                <SoftInput
                  placeholder="Vendor/Exporter"
                  multiline
                  rows={10}
                  value={data.vendor}
                  onChange={(e) => {
                    data.vendor = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftInput
                      placeholder="Invoice Number"
                      value={data.invoiceNum}
                      onChange={(e) => {
                        data.invoiceNum = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput
                      placeholder="Letter of Credit Number"
                      value={data.letterOfCreditNumber}
                      onChange={(e) => {
                        data.letterOfCreditNumber = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput
                      placeholder="Currency"
                      value={data.currency}
                      onChange={(e) => {
                        data.currency = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <SoftBox mt={6} pt={2}>
                    <SoftInput
                      placeholder="Date Of Shipment"
                      value={data.dateOfShipment}
                      onChange={(e) => {
                        data.dateOfShipment = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput
                      placeholder="AWB/BL Number"
                      value={data.awbNum}
                      onChange={(e) => {
                        data.awbNum = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                  <SoftBox pt={2}>
                    <SoftInput
                      placeholder="Country of Origin"
                      value={data.origin}
                      onChange={(e) => {
                        data.origin = e.target.value;
                        setData({ ...data });
                      }}
                    />
                  </SoftBox>
                </Grid>
              </Grid>

              <SoftBox pt={4}>
                <SoftInput
                  placeholder="Conditions of Sale/Terms of Sale"
                  fullWidth
                  value={data.condition}
                  onChange={(e) => {
                    data.condition = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Consignee"
                  multiline
                  rows={5}
                  value={data.consignee}
                  onChange={(e) => {
                    data.consignee = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Importer"
                  multiline
                  rows={5}
                  value={data.importer}
                  onChange={(e) => {
                    data.importer = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Transportation
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Via"
                  value={data.via}
                  onChange={(e) => {
                    data.via = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="From"
                  value={data.from}
                  onChange={(e) => {
                    data.from = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                Total Number Of Packages
              </SoftTypography>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Total Net Weight"
                  value={data.totNetWeight}
                  onChange={(e) => {
                    data.totNetWeight = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Total Gross Weight"
                  value={data.totGrossWeight}
                  onChange={(e) => {
                    data.totGrossWeight = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={3.3}>
              <SoftBox mb={2} mt={4.3}>
                <SoftInput
                  placeholder="Total Invoice"
                  multiline
                  rows={3.6}
                  value={data.totInvoice}
                  onChange={(e) => {
                    data.totInvoice = e.target.value;
                    setData({ ...data });
                  }}
                />
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
                <Grid item xs={4} lg={1}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    Weigth
                  </SoftTypography>
                </Grid>
                <Grid item xs={4} lg={1}>
                  <SoftTypography variant="h6" fontWeight="medium" mb={1} ml={1}>
                    HS Code
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
              {data.products.map((ele, idx) => {
                return (
                  <Grid item key={idx}>
                    {productData(idx)}
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
                <SoftInput
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => {
                    data.name = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Signature"
                  value={data.signature}
                  onChange={(e) => {
                    data.signature = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={8} lg={4}>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Date"
                  value={data.date}
                  onChange={(e) => {
                    data.date = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="dark">
              Proceed
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default CommercialInvoice;
