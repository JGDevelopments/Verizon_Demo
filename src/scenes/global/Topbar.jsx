import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Header from "../../components/Header";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import { blueGrey, red } from "@mui/material/colors";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

const Topbar = () => {
  return (
    <Box
      display="flex"
      sx={{ borderBottom: 1, borderBottomColor: "#DCDCDC" }}
      p={1}
    >
      <IconButton>
        <MenuOutlinedIcon />
      </IconButton>

      <Box sx={{ display: { xs: "none", md: "flex" }, mr: "auto" }}>
        <Header title="verizon" />
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, mr: "70%" }}>
        <Header title="5G Computer Vision" />
      </Box>

      <IconButton>
        <HeadsetMicIcon />
      </IconButton>
      <IconButton>
        <MessageIcon />
      </IconButton>
      <IconButton>
        <PersonIcon />
      </IconButton>
    </Box>
  );
};

export default Topbar;
