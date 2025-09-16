import { Box } from "@mui/material";
import { ReactComponent as EAIcon } from "../assets/icons/enterprise_architect.svg";

const EAButtonIcon = ({ size = 80 }) => (
  <Box
    sx={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <EAIcon />
  </Box>
);

export default EAButtonIcon;
