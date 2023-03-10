import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import MemoryIcon from "@mui/icons-material/Memory";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import "../../index.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "white",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "black !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "15px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "red !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Box paddingBottom={5}>
              <Typography
                variant="h6"
                fontFamily={"Dancing Script"}
                color={"white"}
                sx={{ m: "15px 0 5px 20px" }}
                fontWeight="bold"
              >
                Home
              </Typography>
              <Item
                title="Dashboard"
                to="/"
                icon={<EqualizerOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box paddingBottom={5}>
              <Typography
                variant="h6"
                fontFamily={"Dancing Script"}
                color={"white"}
                sx={{ m: "15px 0 5px 20px" }}
                fontWeight="bold"
              >
                Purchase
              </Typography>
              <Item
                title="Shop HQ"
                to="/team"
                icon={<ShoppingCartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            <Box paddingBottom={5}>
              <Typography
                variant="h6"
                fontFamily={"Dancing Script"}
                color={"white"}
                sx={{ m: "15px 0 5px 20px" }}
                fontWeight="bold"
              >
                Manage
              </Typography>
              <Item
                title="Sensors"
                to="/form"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Gateways"
                to="/calendar"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Workflows"
                to="/contacts"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Integrations"
                to="/invoices"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Users"
                to="/faq"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box paddingBottom={5}>
              <Typography
                variant="h6"
                fontFamily={"Dancing Script"}
                color={"white"}
                sx={{ m: "15px 0 5px 20px" }}
                fontWeight="bold"
              >
                Monitor
              </Typography>
              <Item
                title="Alerts"
                to="/bar"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reports"
                to="/pie"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Visualization "
                to="/line"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Log stream"
                to="/geography"
                icon={<MemoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
