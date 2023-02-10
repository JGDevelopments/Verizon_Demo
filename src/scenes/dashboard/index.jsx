import { Box, IconButton, Typography } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import Grid from "@mui/material/Grid"; // Grid version 1
import Item from "@mui/material/Grid"; // Grid version 1
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DashBox, { PieChart } from "../DashBox";
import { totalDevices } from "../DashBox";

const onClick = () => {
  console.log("Hello Sreedhar");
};

const Dashboard = () => {
  return (
    <Box p={"1rem"}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={"1rem"}
      >
        <Typography
          variant="h4"
          color={"black"}
          fontWeight="bold"
          fontFamily={"Oswald"}
        >
          Dashboard
        </Typography>
      </Box>

      <Grid container spacing={0} border={"solid silver"} borderRadius={2}>
        <Grid
          xs={4}
          borderBottom={"solid silver"}
          borderRight={"solid silver"}
          p={1}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Connectivity
          </Typography>
        </Grid>
        <Grid
          xs={4}
          borderBottom={"solid  silver"}
          borderRight={"solid silver"}
          p={1}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Network Optimization
          </Typography>
        </Grid>
        <Grid xs={4} borderBottom={"solid silver"} p={1}>
          <Typography variant="h6" fontWeight={"bold"}>
            Alerts
          </Typography>
        </Grid>
        <Grid xs={4} borderRight={"solid silver"} p={1}>
          <Box display="flex" p={2}>
            <ArrowUpwardIcon
              m={1}
              sx={{
                fontSize: 55,
                backgroundColor: "#009900",
                color: "white",
                borderRadius: "50%",
              }}
            ></ArrowUpwardIcon>
            <Typography paddingLeft={3} variant="h6">
              The uptime is 99.5% and the wireless signal strength is performing
              normally out of 458 devices.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={4} borderRight={"solid silver"} p={1}>
          <Item p={1}>
            Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do elusmod tempor incididunt ut labore{" "}
            <Item>
              <br></br>
              Modify alerts Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
            </Item>
          </Item>
        </Grid>
        <Grid xs={4} p={1}>
          <Item p={1}>
            Alert 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do erusmod tempor incididunt ant labore
            <Item>
              <br></br>
              Alert 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </Item>
            incididunt ut labore
          </Item>
        </Grid>
      </Grid>

      <Grid>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          paddingTop={2}
        >
          {/* ROW 3 */}

          <DashBox
            title={"Sensor Health"}
            subtitle={`Total Devices: ${totalDevices}`}
            Comp={<PieChart />}
          />
          {/*Pie is implemented here */}

          <Box
            gridColumn="span 3"
            gridRow="span 3"
            // backgroundColor={colors.primary[400]}
            border={"solid silver"}
            borderRadius={2}
          >
            <Grid borderBottom={"solid silver"}>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Gateway Health
              </Typography>
            </Grid>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 5"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}

            border={"solid silver"}
            borderRadius={2}
          >
            <Grid borderBottom={"solid silver"}>
              <Typography variant="h5" fontWeight="600">
                Gateway Locations
              </Typography>
            </Grid>

            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}
            border={"solid silver"}
            borderRadius={2}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5" fontWeight="600" color={"white"}>
                  Revenue Generated
                </Typography>
                <Typography variant="h3" fontWeight="bold" color={"red"}>
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: "red" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}
            overflow="auto"
            border={"solid silver"}
            borderRadius={2}
            p={1}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid`}
              colors={"white"}
              p="15px"
            >
              <Typography color={"white"} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid`}
                p="15px"
              >
                <Box>
                  <Typography color={"red"} variant="h5" fontWeight="600">
                    {transaction.txId}
                  </Typography>
                  <Typography color={"white"}>{transaction.user}</Typography>
                </Box>
                <Box color={"white"}>{transaction.date}</Box>
                <Box backgroundColor={"red"} p="5px 10px" borderRadius="4px">
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
