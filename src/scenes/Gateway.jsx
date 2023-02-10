import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

import { dataJson } from "./DashBox";

import EditIcon from "@mui/icons-material/Edit";

const randList = [
  dataJson[1].deviceModel,
  dataJson[1].state,
  dataJson[2].createdOn,
];

const Sublist = (list) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return (
    <>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ul>
            {randList.map((value, id) => (
              <li key={id}>{[value]}</li>
            ))}
          </ul>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          ></Box>
        </CardContent>
      </Collapse>
    </>
  );
};

export const Gateway = ({ title, image, gateUID }) => {
  return (
    <Box
      width={"85%"}
      display="flex"
      // onClick={displayName}
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          title={title}
          action={
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button sx={{ borderRadius: "30%", color: "gray" }}>
                <EditIcon />
              </Button>
            </Box>
          }
        />
        <CardMedia component="img" height="200" image={image} alt="Gateway" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Gateway UID: <Box>{`   ${gateUID}`}</Box>
          </Typography>
        </CardContent>
        {/*Our Children Gateways will be displayed for each gateway at Sublist */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outlined" size="small">
            Inspect
          </Button>
        </Box>

        <Sublist />
      </Card>
    </Box>
  );
};

export const DisplayGateways = ({ title, image, gateUID }) => {
  return (
    <Box p={1}>
      <Grid container spacing={1} sx={{ flexDirection: "row" }}>
        {randList.map((value, id) => (
          <Grid item xs={3} marginTop={1}>
            <Gateway title={title} image={image} gateUID={gateUID} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gateway;
