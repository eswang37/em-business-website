import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Chip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

const ExampleComponent = () => {
  const features = [
    {
      icon: <BusinessIcon color="primary" />,
      title: 'Strategic Planning',
      description: 'Create comprehensive business strategies with our 4-year roadmap tool.'
    },
    {
      icon: <TrendingUpIcon color="primary" />,
      title: 'Goal Tracking',
      description: 'Monitor your progress with visual progress bars and milestone tracking.'
    },
    {
      icon: <AssessmentIcon color="primary" />,
      title: 'Performance Analytics',
      description: 'Get insights into your business growth and development metrics.'
    }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Welcome to Your Business Planning Hub
      </Typography>
      
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Ready to start planning?
        </Typography>
        <Chip 
          label="Navigate to Game Plan" 
          color="primary" 
          variant="outlined"
          sx={{ fontSize: '1rem', p: 1 }}
        />
      </Box>
    </Box>
  );
};

export default ExampleComponent;