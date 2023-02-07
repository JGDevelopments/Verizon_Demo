import { Box, IconButton } from "@mui/material";
import Header from "../../components/Header";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

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
