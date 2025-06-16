import { TopToolbar } from "react-admin";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CreateActions = () => {
  const navigate = useNavigate();

  return (
    <TopToolbar>
      <Button
        color="primary"
        onClick={() => navigate(-1)}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </TopToolbar>
  );
};

export default CreateActions;
