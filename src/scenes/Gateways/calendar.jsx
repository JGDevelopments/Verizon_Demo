import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { dataJson } from "../DashBox";
import { IconButton } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import Item from "@mui/material/Grid"; // Grid version 1
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DashBox, { PieChart } from "../DashBox";
import { totalDevices } from "../DashBox";
import GatewayTwo from "../GatewayTwo";
import DisplayGateway, { DisplayGateways } from "../Gateway";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Header from "../../components/Header";
import Gateway from "../Gateway";
import { DisplayGatewaysTwo } from "../GatewayTwo";

// const Sublist = (image, Name, subText) => {
//   return "";
// };

export const Calendar = () => {
  return (
    <>
      <DisplayGateways
        title="Gateway"
        image={
          "https://www.cnet.com/a/img/resize/d64389d643daba677b4a12b671dbdbe942e1580f/hub/2022/04/29/dd972a82-d9c3-429b-b3a8-c47c8cf2f375/verizon-5g-home-internet.jpg?auto=webp&width=1200"
        }
        gateUID={dataJson[0].UID}
      />

      <DisplayGatewaysTwo
        title="GatewayTwo"
        image={
          "https://www.cnet.com/a/img/resize/d64389d643daba677b4a12b671dbdbe942e1580f/hub/2022/04/29/dd972a82-d9c3-429b-b3a8-c47c8cf2f375/verizon-5g-home-internet.jpg?auto=webp&width=1200"
        }
        gateUID={dataJson[0].UID}
      />
    </>
  );
};

export default Calendar;
