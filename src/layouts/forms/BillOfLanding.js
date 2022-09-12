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
import { res } from "layouts/Contracts/gstData";

const datas = {
  fromName: "",
  fromAddress: "",
  fromLocation: "",
  sid: "",
  fromFOB: false,
  ladingNumber: "",
  toName: "",
  toAddress: "",
  toLocation: "",
  location: "",
  cid: "",
  carrierName: "",
  trailerNumber: "",
  sealNumbers: "",
  toFOB: false,
  tpName: "",
  tpAddress: "",
  tpLocation: "",
  specialInstruction: "",
  scac: "",
  proNum: "",
  prepaid: "",
  collect: "",
  tpCharge: "",
  orderInfo: [
    {
      custOrderNum: "",
      pkgs: "",
      weight: "",
      slip: "",
      additionalShipperInfo: "",
    },
  ],
  carrierInfo: [
    {
      handQty: "",
      handType: "",
      packQty: "",
      packType: "",
      weight: "",
      hm: "",
      description: "",
      nmfc: "",
      class: "",
    },
  ],
};

function BillOfLanding() {
  let url = window.location.toString();
  let params = url?.split("?")[1]?.split("=")[1];

  const [products, setProduct] = useState([1]);
  const [carrier, setCarrier] = useState([1]);
  const response = res;

  if (params && params[0] === "1") {
    datas.fromAddress = response.fromAddr1 + ", " + response.fromAddr2;
    datas.fromName = response.fromTrdName;
    datas.fromLocation = response.fromPlace + " - " + response.fromPincode;

    datas.toAddress = response.toAddr1 + ", " + response.toAddr2;
    datas.toLocation = response.toPlace + " - " + response.toPincode;
    datas.toName = response.toTrdName;

    response.itemList.forEach((item) => {});
  }
  const [data, setData] = useState(datas);

  const addProductHandler = () => {
    const newProd = {
      custOrderNum: "",
      pkgs: "",
      weight: "",
      slip: "",
      additionalShipperInfo: "",
    };

    data?.orderInfo?.push(newProd);
    setData({ ...data });
    console.log(data);
    // console.log(data.orderInfo);
    // console.log(products);
  };
  const removeProductHandler = () => {
    data.orderInfo.pop();
    setData({ ...data });
  };

  const addCarrierHandler = () => {
    const newCarrier = {
      handQty: "",
      handType: "",
      packQty: "",
      packType: "",
      weight: "",
      hm: "",
      description: "",
      nmfc: "",
      class: "",
    };
    data?.carrierInfo?.push(newCarrier);
    setData({ ...data });
  };
  const removeCarrierHandler = () => {
    data?.carrierInfo?.pop();
    setData({ ...data });
  };

  const productData = (idx) => {
    // console.log(ele);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Customer Order Number"
              value={data.orderInfo[idx].custOrderNum}
              onChange={(e) => {
                data.orderInfo[idx].custOrderNum = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="#PKGS"
              value={data.orderInfo[idx].pkgs}
              onChange={(e) => {
                data.orderInfo[idx].pkgs = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Weight"
              value={data.orderInfo[idx].weight}
              onChange={(e) => {
                data.orderInfo[idx].weight = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={2}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="(Y/N)"
              value={data.orderInfo[idx].slip}
              onChange={(e) => {
                data.orderInfo[idx].slip = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Additional Shipper Info"
              value={data.orderInfo[idx].additionalShipperInfo}
              onChange={(e) => {
                data.orderInfo[idx].additionalShipperInfo = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
      </Grid>
    );
  };

  const carrierInfo = (idx) => {
    console.log(data.carrierInfo);
    return (
      <Grid container spacing={2}>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="QTY"
                  value={data.carrierInfo[idx].handQty}
                  onChange={(e) => {
                    data.carrierInfo[idx].handQty = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="Type"
                  value={data.carrierInfo[idx].handType}
                  onChange={(e) => {
                    data.carrierInfo[idx].handType = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="QTY"
                  value={data.carrierInfo[idx].packQty}
                  onChange={(e) => {
                    data.carrierInfo[idx].packQty = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="Type"
                  value={data.carrierInfo[idx].packType}
                  onChange={(e) => {
                    data.carrierInfo[idx].packType = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Weight"
              value={data.carrierInfo[idx].weight}
              onChange={(e) => {
                data.carrierInfo[idx].weight = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={2} lg={1}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="H.M"
              value={data.carrierInfo[idx].hm}
              onChange={(e) => {
                data.carrierInfo[idx].hm = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={8} lg={4}>
          <SoftBox pt={2}>
            <SoftInput
              placeholder="Commodity Description"
              value={data.carrierInfo[idx].description}
              onChange={(e) => {
                data.carrierInfo[idx].description = e.target.value;
                setData({ ...data });
              }}
            />
          </SoftBox>
        </Grid>
        <Grid item xs={4} lg={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="NMFC#"
                  value={data.carrierInfo[idx].nmfc}
                  onChange={(e) => {
                    data.carrierInfo[idx].nmfc = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox pt={2}>
                <SoftInput
                  placeholder="Class"
                  value={data.carrierInfo[idx].class}
                  onChange={(e) => {
                    data.carrierInfo[idx].class = e.target.value;
                    setData({ ...data });
                  }}
                />
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
            Commercial Invoice
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
                  <SoftInput
                    placeholder="Name"
                    value={data.fromName}
                    onChange={(e) => {
                      data.fromName = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Address"
                    value={data.fromAddress}
                    onChange={(e) => {
                      data.fromAddress = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="City/State/Zip"
                    value={data.fromLocation}
                    onChange={(e) => {
                      data.fromLocation = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="SID#"
                    value={data.sid}
                    onChange={(e) => {
                      data.sid = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={fromFOB} onChange={handleSetFromFOB} />
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
                <SoftInput
                  placeholder="Bill Of Lading Number"
                  value={data.ladingNumber}
                  onChange={(e) => {
                    data.ladingNumber = e.target.value;
                    setData({ ...data });
                  }}
                />
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
                  <SoftInput
                    placeholder="Name"
                    value={data.toName}
                    onChange={(e) => {
                      data.toName = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Address"
                    value={data.toAddress}
                    onChange={(e) => {
                      data.toAddress = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="City/State/Zip"
                    value={data.toLocation}
                    onChange={(e) => {
                      data.toLocation = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Location#"
                    value={data.location}
                    onChange={(e) => {
                      data.location = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="CID#"
                    value={data.cid}
                    onChange={(e) => {
                      data.cid = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox display="flex" alignItems="center">
                  <Checkbox checked={toFOB} onChange={handleSetToFOB} />
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
                <SoftInput
                  placeholder="Carrier Name"
                  value={data.carrierName}
                  onChange={(e) => {
                    data.carrierName = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Trailer Number"
                  value={data.trailerNumber}
                  onChange={(e) => {
                    data.trailerNumber = e.target.value;
                    setData({ ...data });
                  }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput
                  placeholder="Seal Number(s)"
                  value={data.sealNumbers}
                  onChange={(e) => {
                    data.sealNumbers = e.target.value;
                    setData({ ...data });
                  }}
                />
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
                  <SoftInput
                    placeholder="Name"
                    value={data.tpName}
                    onChange={(e) => {
                      data.tpName = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Address"
                    value={data.tpAddress}
                    onChange={(e) => {
                      data.tpAddress = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="City/State/Zip"
                    value={data.tpLocation}
                    onChange={(e) => {
                      data.tpLocation = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Special Instructions"
                    value={data.specialInstruction}
                    onChange={(e) => {
                      data.specialInstruction = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={3}>
                <SoftBox mt={9} pt={2} pb={3}>
                  <SoftInput
                    placeholder="SCAC"
                    value={data.scac}
                    onChange={(e) => {
                      data.scac = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftInput
                    placeholder="Pro Number"
                    value={data.proNum}
                    onChange={(e) => {
                      data.proNum = e.target.value;
                      setData({ ...data });
                    }}
                  />
                </SoftBox>
              </SoftBox>
              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium" mt={3} pt={2} pb={3}>
                  Freight Charge Terms: <p>(freight charges are prepaid unless marked otherwise)</p>
                </SoftTypography>
                <Grid container spacing={2}>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput
                        placeholder="Prepaid"
                        value={data.prepaid}
                        onChange={(e) => {
                          data.prepaid = e.target.value;
                          setData({ ...data });
                        }}
                      />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput
                        placeholder="Collect"
                        value={data.collect}
                        onChange={(e) => {
                          data.collect = e.target.value;
                          setData({ ...data });
                        }}
                      />
                    </SoftBox>
                  </Grid>
                  <Grid item xs={8} lg={4}>
                    <SoftBox mb={2}>
                      <SoftInput
                        placeholder="3rd Party"
                        value={data.tpCharge}
                        onChange={(e) => {
                          data.tpCharge = e.target.value;
                          setData({ ...data });
                        }}
                      />
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
              {data?.orderInfo?.map((ele, idx) => {
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
              {data?.carrierInfo?.map((ele, idx) => {
                return (
                  <Grid item key={idx}>
                    {carrierInfo(idx)}
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
            <Link to="/new-order">
              <SoftButton variant="gradient" color="dark">
                Proceed
              </SoftButton>
            </Link>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
}

export default BillOfLanding;
