import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('id'); // Getting user ID from local storage

  // Define the color palette
  const palette = {
    primary: '#131842',
    secondary: '#E68369',
    light: '#ECCEAE',
    background: '#FBF6E2',
  };

  // Fetch user details based on the user ID
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  // Redirect if user is not logged in
  if (!userId) {
    navigate('/sign-inup');
  }

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ backgroundColor: palette.background, minHeight: '100vh', paddingTop: 4 }}>
      <Container maxWidth="400px">
        <Grid container spacing={4}>
          {/* Profile details card */}
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: palette.primary, color: '#fff', padding: 2 }}>
              <Grid container justifyContent="space-between" alignItems="center"  >
                {/* Profile icon on the right */}
                <Avatar sx={{ width: 100, height: 100, backgroundColor: palette.secondary , }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'left', padding:'50px', }}>
                  {user.firstName} {user.lastName}
                </Typography>
              </Grid>
            </Card>
          </Grid>

          {/* User Info */}
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: palette.light }}>
              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 2,fontSize:'40px', fontWeight:600,colour:'#131842', }}>
                  User Information
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 ,fontSize:'20px', fontWeight:600,colour:'#131842',}}>
                  <strong>Email:</strong> {user.email}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 ,fontSize:'20px', fontWeight:600,colour:'#131842',}}>
                  <strong>Username:</strong> {user.username}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1,fontSize:'20px', fontWeight:600,colour:'#131842', }}>
                  <strong>Role:</strong> {user.role}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;


