import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";

const SupplierProfile = () => {
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSupplier = async () => {
      // Retrieve supplierId from localStorage
      const supplierId = localStorage.getItem("id");

      if (!supplierId) {
        setError("No supplier ID found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/register-request/get-supplier/${supplierId}`
        );
        setSupplier(response.data);
      } catch (err) {
        setError("Failed to load supplier details.");
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "#FBF6E2",
          marginBottom: "50px",
        }}
      >
        {/* Store Image */}
        <CardMedia
          component="img"
          height="400"
          image={supplier.storeImage}
          alt={`${supplier.businessName} Store`}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              textAlign: "left",
              fontWeight: "700",
              color: "#131842", // Dark blue for title
            }}
          >
            {supplier.businessName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Owner:</strong> {supplier.username}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Email:</strong> {supplier.email}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Address:</strong> {supplier.address}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Bank Account Info:</strong> {supplier.bankAccountInfo}
          </Typography>
        </CardContent>
        {/* Business Proof */}
        <Box
          sx={{
            textAlign: "left",
            backgroundColor: "#FBF6E2",
            py: 2,
            borderRadius: "8px",
            mx: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, color: "#131842", fontWeight: "bold" }}
          >
            Business Proof:
          </Typography>
          <img
            src={supplier.businessProof}
            alt={`${supplier.businessName} Business Proof`}
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              border: "2px solid #E68369", // Soft orange border
            }}
          />
        </Box>
      </Card>
    </Container>
  );
};

export default SupplierProfile;
