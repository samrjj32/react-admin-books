import { NumberField } from "react-admin";
import { styled } from "@mui/material/styles";

const YearField = styled(NumberField)({
  fontWeight: "bold",
  color: "#1976d2",
  backgroundColor: "rgba(25, 118, 210, 0.08)",
  padding: "2px 8px",
  borderRadius: "4px",
  display: "inline-block",
  "& .RaNumberField-options": {
    display: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(25, 118, 210, 0.12)",
  },
});

export default YearField;
