import React from "react";
import { Box, Button, Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  const handleAcessarPortal = () => {
    navigate("/login");
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" bgcolor="#f8fafc">
      <AppBar position="static" sx={{ bgcolor: "#1e40af" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portal do Cliente
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 6 }}>
        <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
          Bem-vindo ao Portal do Cliente
        </Typography>
        <Typography variant="body1" textAlign="center" maxWidth="500px" mb={4}>
          Acesse sua área exclusiva para acompanhar boletos, solicitar assistências, consultar obras e muito mais.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleAcessarPortal}>
          Acessar Portal
        </Button>
      </Container>

      <Box component="footer" textAlign="center" py={3} bgcolor="#ffffff" boxShadow={1}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Portal do Cliente - Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default IndexPage;