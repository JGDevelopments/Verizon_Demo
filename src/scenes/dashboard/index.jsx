import {
  Box,
  Button,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import DashBox from "../../components/DashBox";
import ProgressCircle from "../../components/ProgressCircle";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid"; // Grid version 1
import Item from "@mui/material/Grid"; // Grid version 1
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { color } from "@mui/system";

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
        <Typography variant="h4" color={"black"} fontWeight="bold">
          Dashboard
        </Typography>
      </Box>

      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
      >
        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border={"solid silver"}
          borderRadius="7%"
          p={1}
        >
          <DashBox
            title="Connectivity"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: "red", fontSize: "26px" }} />}
          />
        </Box>

        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border={"solid silver"}
          borderRadius="7%"
          p={1}
        >
          <DashBox
            title="32,441"
            subtitle="Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do elusmod tempor incididunt ut labore Modify alerts Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore"
          />
        </Box>

        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border={"solid silver"}
          borderRadius="7%"
          p={1}
        >
          <DashBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: "red", fontSize: "26px" }} />}
          />
        </Box>
      </Box> */}

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
          <Box
            gridColumn="span 3"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}

            border={"solid silver"}
            borderRadius={2}
          >
            <Grid borderBottom={"solid silver"}>
              <Typography variant="h5" fontWeight="600">
                Sensor Health
              </Typography>
            </Grid>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography variant="h5" color={"red"} sx={{ mt: "15px" }}>
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            gridRow="span 2"
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
