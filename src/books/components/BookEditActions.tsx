import { TopToolbar, ListButton } from "react-admin";
import ArrowBack from "@mui/icons-material/ArrowBack";

const BookEditActions = () => (
  <TopToolbar>
    <ListButton label="Back" icon={<ArrowBack />} />
  </TopToolbar>
);

export default BookEditActions;
