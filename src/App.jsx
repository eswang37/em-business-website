import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Business as BusinessIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import ExampleComponent from './components/ExampleComponent';
import GamePlan from './components/GamePlan';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" elevation={2}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <BusinessIcon sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 600
                }}
              >
                Business Planner
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  component={Link}
                  to="/"
                  color="inherit"
                  startIcon={<BusinessIcon />}
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 500
                  }}
                >
                  {isMobile ? 'Home' : 'Dashboard'}
                </Button>
                <Button
                  component={Link}
                  to="/game-plan"
                  color="inherit"
                  startIcon={<TimelineIcon />}
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 500
                  }}
                >
                  {isMobile ? 'Plan' : 'Game Plan'}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" gutterBottom>
                  Welcome to Business Planner
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Your strategic partner for business growth and planning
                </Typography>
                <ExampleComponent />
              </Box>
            } />
            <Route path="/game-plan" element={<GamePlan />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App;