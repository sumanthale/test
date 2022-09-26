import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Alert, Grid, Typography } from "@mui/material";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import last from "../../assets/images/last.png";
import Button from "@mui/material/Button";
import { Download } from "@mui/icons-material";

export default function MintList({ winners, category, price }) {
  console.log(winners);
  const theme = useTheme();
  // const downloadData = () => {
  //   let csvContent =
  //     "data:text/csv;charset=utf-8," +
  //     `Position,ID,Pick\n` +
  //     winners.map((e) => [e.position, e.id, e.pick].join(",")).join("\n");

  //   var encodedUri = encodeURI(csvContent);
  //   var link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", `${category} winners.csv`);
  //   document.body.appendChild(link);

  //   link.click();
  // };

  function downloadObjectAsJson() {
    const exportObj = {};
    let prices = price.split(",");
    winners.forEach((win) => {
      if (exportObj[win.position])
        exportObj[win.position] = {
          ...exportObj[win.position],
          data: [...exportObj[win.position].data, win.id.split("🗝")[1]],
        };
      else {
        exportObj[win.position] = {
          price: +prices[win.position - 1].trim() || 0,
          data: [win.id.split("🗝")[1]],
        };
      }
    });
    console.log(exportObj);
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  return (
    <>
      {!!winners && (
        <Grid item container xs={12} sm={12} md={10} rowSpacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              zIndex: 9999,
            }}
          >
            <Alert
              variant="filled"
              severity="success"
              sx={{ position: "relative", display: "flex" }}
            >
              Winners {winners.length}{" "}
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{ position: "absolute", right: "8px", bottom: "8px" }}
                onClick={downloadObjectAsJson}
              >
                Export Data <Download />
              </Button>
            </Alert>
          </Grid>
          <Grid
            item
            container
            md={12}
            sx={{
              maxHeight: { xs: "35vh", sm: "35vh", md: "60vh" },
              minHeight: { xs: "35vh", sm: "35vh", md: "60vh" },
              overflow: "auto",
            }}
            spacing={2}
          >
            {winners.map((item, idx) => (
              <Grid item xs={12} md={12} key={idx}>
                <Alert
                  iconMapping={{
                    success: <img src={first} alt="" />,
                    info: <img src={second} alt="" />,
                    warning: <img src={third} alt="" />,
                    error: <img src={last} alt="" />,
                  }}
                  severity={colors[item.position]}
                  color={colors[item.position]}
                >
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{ m: 1, color: theme.palette.success.main }}
                  >
                    {" "}
                    {item.id}
                  </Typography>
                </Alert>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}
const colors = [
  "success",
  "success",
  "info",
  "warning",
  "error",
  "success",
  "info",
  "warning",
  "error",
  "success",
  "info",
  "warning",
  "error",
];
