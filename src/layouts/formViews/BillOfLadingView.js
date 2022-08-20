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
    // console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Customer Order Number" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput placeholder="#PKGS" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Weight" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput placeholder="(Y/N)" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Additional Shipper Info" />
          </SoftBox>
        </Grid>
      </Grid>
    );
  };

  const carrierInfo = (ele) => {
    // console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="QTY" />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="Type" />
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="QTY" />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="Type" />
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Weight" />
          </SoftBox>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={2}>
            <SoftInput placeholder="H.M" />
          </SoftBox>
        </Grid>
        <Grid item xs={8} lg={4}>
          <SoftBox pt={2}>
            <SoftInput placeholder="Commodity Description" />
          </SoftBox>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="NMFC#" />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput placeholder="Class" />
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
            Bill Of Landing
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} ml={6} px={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" pt={2} pb={3} px={3}>
                Ship From
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" value="Sri Hari" disabled={true} />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Address"
                    value="23, Gandhi nagar, Logicstics, chennai - 600002"
                    disabled={true}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="City/State/Zip"
                    value="chennai/TN/600002"
                    disabled={true}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="SID#" value="778899" disabled={true} />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={true} onChange={handleSetFromFOB} disabled={true} />
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    onClick={handleSetFromFOB}
                    sx={{ cursor: "poiner", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;FOB&nbsp;
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={6} pt={2} pb={3}>
                <SoftInput placeholder="Bill Of Landing Number" value="11223344" disabled={true} />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3} px={3}>
                Ship To
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Address" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="City/State/Zip" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Location#" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="CID#" />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={true} onChange={handleSetToFOB} disabled={true} />
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    onClick={handleSetToFOB}
                    sx={{ cursor: "poiner", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;FOB&nbsp;
                  </SoftTypography>
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mt={9} pt={2} pb={3}>
                <SoftInput placeholder="Carrier Name" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="Trailer Number" />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput placeholder="Seal Number(s)" />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3} px={3}>
                Third Party Freight Charges Bill To
              </SoftTypography>
              <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftInput placeholder="Name" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Address" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="City/State/Zip" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Special Instructions" />
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={3}>
                <SoftBox mt={9} pt={2} pb={3}>
                  <SoftInput placeholder="SCAC" />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput placeholder="Pro Number" />
                </SoftBox>
              </SoftBox>
              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3}>
                  Freight Charge Terms: <p>(freight charges are prepaid unless marked otherwise)</p>
                </SoftTypography>
                <Grid container spacing={2}>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="Prepaid" />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="Collect" />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput placeholder="3rd Party" />
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
                        NMFC#
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
              {carrier.map((ele) => {
                return (
                  <Grid item key={ele}>
                    {carrierInfo(ele)}
                  </Grid>
                );
              })}
              <Grid container spacing={2} mt={1}>
                <Grid item>
                  <SoftButton variant="gradient" color="success" onClick={addCarrierHandler}>
                    <Icon>add</Icon>&nbsp;&nbsp;Add
                  </SoftButton>
                </Grid>
                <Grid item>
                  <SoftButton variant="gradient" color="error" onClick={removeCarrierHandler}>
                    <Icon>remove</Icon>&nbsp;&nbsp;Remove
                  </SoftButton>
                </Grid>
              </Grid>
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

export default BillOfLadingView;
