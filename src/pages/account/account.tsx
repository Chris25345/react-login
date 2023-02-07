import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "../../components";
import { clearFormData } from "../../core/utils/local-storage";
import { Box, StyledColoredTypography, StyledTypography } from "./styled";

export const Account: FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearFormData();
    navigate("/");
  };
  return (
    <Container button={<Button onClick={handleLogout}>LOGOUT</Button>}>
      <Box>
        <StyledTypography>You are now</StyledTypography>
        <StyledColoredTypography>logged in</StyledColoredTypography>
      </Box>
    </Container>
  );
};
