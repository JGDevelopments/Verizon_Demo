import { Box, Grid, Typography, Button } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import { mockPieData } from "../../data/mockData";

export const dataJson = [
  {
    UID: "c45184ea-e4e7-68f1-e493-adfa4fcc892e",
    deviceModel: "ts.device.gateway",
    createdOn: "Mon Feb 06 2023 16:40:14",
    lastUpdate: "2023-02-06T22:40:14.725Z",
    providerId: "25312125-a7c9-4b3d-929c-eeb752e4fec0",
    kind: "ts.device.gateway",
    deviceIdentifier: "11:11:11:11:11:61",
    deviceIdentifier_Type: "mac",
    state: "waiting approval",
    gatewayHealth: "fair",
    callback: {
      credential: {},
    },
    configmode: "semiauto",
  },
  {
    UID: "a4213539-bca6-69e3-ef9a-c7584a31d70f",
    deviceModel: "ts.device.gateway",
    createdOn: "Mon Feb 06 2023 16:37:42",
    lastUpdate: "2023-02-06T22:37:42.171Z",
    providerId: "25312125-a7c9-4b3d-929c-eeb752e4fec0",
    kind: "ts.device.gateway",
    gatewayHealth: "poor",
    deviceIdentifier: "11:11:11:11:11:58",
    deviceIdentifier_Type: "mac",
    state: "registered",
    mecIds: ["5_5_mec01"],
    callback: {
      credential: {},
    },
    configmode: "auto",
  },
  {
    UID: "84a14727-88e8-64b8-facb-6b0c5b408bbc",
    deviceModel: "ts.device.gateway",
    createdOn: "Tue Sep 27 2022 11:00:52",
    lastUpdate: "2022-09-27T16:00:52.358Z",
    providerId: "25312125-a7c9-4b3d-929c-eeb752e4fec0",
    kind: "ts.device.gateway",
    gatewayHealth: "good",
  },
  {
    UID: "24919537-30a5-6964-f479-5d3389c7f3ca",
    deviceModel: "ts.device.gateway",
    createdOn: "Tue Sep 27 2022 10:17:01",
    lastUpdate: "2022-09-27T15:17:01.658Z",
    providerId: "25312125-a7c9-4b3d-929c-eeb752e4fec0",
    kind: "ts.device.gateway",
    gatewayHealth: "good",
  },
];

export const bgColor = {
  color: ["green", "orange", "#F08000"],
};

export const goodDevHealth = dataJson.filter((val) => {
  if (val.gatewayHealth === "good") {
    console.log(`Good:  ${val.UID}`);
    return val.UID;
  }
});

export const poorDevHealth = dataJson.filter((val) => {
  if (val.gatewayHealth === "poor") {
    console.log(`Poor:  ${val.UID}`);
    return val.UID;
  }
});

export const fairDevHealth = dataJson.filter((val) => {
  if (val.UID === "fair") {
    console.log(`Fair:  ${val.UID}`);
  }
  return val.UID;
});

export const totalDevices = dataJson.length;

export const PieChart = () => {
  const logName = () => {
    let name = "Sreedhar";
    console.log(`Hello ${name}`);
  };
  return (
    <ResponsivePie
      data={mockPieData}
      padding={{ top: 100 }}
      colors={bgColor.color}
      margin={{ top: 25, right: 20, bottom: 60, left: 20 }}
      innerRadius={0.85}
      label
      padAngle={0.7}
      activeOuterRadiusOffset={5}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      onClick={logName}
      arcLinkLabelsSkipAngle={10}
      enableArcLinkLabels={false}
      arcLinkLabelsThickness={2}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: false,
          translateY: 64,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "black",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export const DashBox = ({ title, subtitle, Comp }) => {
  const [log, setLog] = useState("");
  const [data, setData] = useState("");
  const dataJ = JSON.stringify(dataJson, null, 6);
  const [fetchAPI, setfetchAPI] = useState({ items: [], isLoaded: false });

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json)
      .then((json) => {
        setfetchAPI({ items: json, isLoaded: true });
      });
  };

  const logName = () => {
    let name = "Sreedhar";
    console.log(`Hello ${name}`);
  };

  const displayName = () => {
    setLog("Hello Sreedhar");
  };

  const displayData = () => {
    console.log(data);
    setData(dataJson[0].UID);
    setData(dataJ);
  };

  return (
    <Box
      gridColumn="span 3"
      width={"85%"}
      height={"85%"}
      gridRow="span 3"
      border={"solid silver"}
      borderRadius={2}
      // onClick={displayName}
    >
      <Grid
        xs={4}
        borderBottom={"solid silver"}
        borderRight={"solid silver"}
        p={1}
      >
        <Typography variant="h6" fontWeight="600" paddingLeft={0.8}>
          {title}
        </Typography>
        <Typography variant="p" color={"black"} paddingLeft={1}>
          {subtitle}
        </Typography>
      </Grid>

      {/*Pie Chart */}
      <Box>
        <Box height="28vh">{Comp}</Box>
      </Box>
      <Button
        onClick={() => {
          logName();
          displayName();
        }}
      >
        Data
      </Button>
      <Button onClick={displayData}> Display Data </Button>
      <h5>{log}</h5>
      <h6>{data}</h6>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="25px"
      ></Box>
    </Box>
  );
};

export default DashBox;
