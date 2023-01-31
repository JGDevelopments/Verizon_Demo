import { Box, Typography } from "@mui/material";
import React from "react";
import ProgressCircle from "./ProgressCircle";

const DashBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box>
      {/*just replaces a div so we can have a parent here */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "grey" }}
        border={"solid grey"}
        borderRadius="7%"
      >
        {title}
      </Typography>
      <Box width="100%" m="0 30px" border={"solid grey"} borderRadius={2}>
        <Box display="flex" justifyContent="space-between">
          <Box>{icon}</Box>
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography variant="h5" sx={{ color: "red" }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBox;
