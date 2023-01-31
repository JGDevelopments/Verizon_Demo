import { Typography, Box} from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        color={"black"}
        fontWeight="bold"
        >
        {title}
      </Typography>
      <Typography variant="h1" color={"red"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
