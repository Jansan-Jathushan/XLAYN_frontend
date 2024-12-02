import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, CircularProgress, Container, Button } from "@mui/material";
import axios from "axios";

const WholesalerProfile = () => {
  const [wholesaler, setWholesaler] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWholesaler = async () => {
      // Retrieve wholesalerId from localStorage
      const wholesalerId = localStorage.getItem("id");

      if (!wholesalerId) {
        setError("No wholesaler ID found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/register-request/get-wholesaler/${wholesalerId}`
        );
        setWholesaler(response.data);
      } catch (err) {
        setError("Failed to load wholesaler details.");
      } finally {
        setLoading(false);
      }
    };

    fetchWholesaler();
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
    <Container maxWidth="lg" sx={{ mt: 5 ,}}>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "#FBF6E2", 
          marginBottom:'50px',
        }}
      >
        {/* Store Image */}
        <CardMedia
          component="img"
          height="400"
          image={wholesaler.storeImage}
          alt={`${wholesaler.businessName} Store`}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontsize:'90px',
              textAlign: "left",
              fontWeight: "700",
              color: "#131842", // Dark blue for title
            }}
          >
            {wholesaler.businessName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Owner:</strong> {wholesaler.username}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Email:</strong> {wholesaler.email}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Address:</strong> {wholesaler.address}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#131842"
            gutterBottom
            sx={{ mb: 1 }}
          >
            <strong>Bank Account Info:</strong> {wholesaler.bankAccountInfo}
          </Typography>
        </CardContent>
        {/* Business Proof */}
        <Box
          sx={{
            textAlign: "left",
            backgroundColor: "#FBF6E2", // Light beige background for the section
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
            src={wholesaler.businessProof}
            alt={`${wholesaler.businessName} Business Proof`}
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              border: "2px solid #E68369", // Soft orange border
            }}
          />
        </Box>
        {/* Action Button */}
        {/* <Box sx={{ textAlign: "center", mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#E68369", 
              color: "#FBF6E2",
              "&:hover": {
                bgcolor: "#131842", 
                color: "#FBF6E2",
              },
            }}
            onClick={() => alert("More actions coming soon!")}
          >
            Action
          </Button>
        </Box> */}
      </Card>
    </Container>
  );
};

export default WholesalerProfile;
