import { Typography, Box, useTheme } from "@mui/material";
import {InewTheme} from "../../../assets/mui/WithTheme";

interface IHeader {
title: string,
subtitle: string
}

const Header: React.FC<IHeader> = ({ title, subtitle }) => {
  const theme = useTheme() as InewTheme
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={theme.palette.additionalColors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.additionalColors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
