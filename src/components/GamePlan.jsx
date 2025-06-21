import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Chip,
  IconButton,
  LinearProgress,
  Paper,
  Divider,
  Alert,
  useTheme
} from '@mui/material';
import {
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Delete as DeleteIcon,
  Business as BusinessIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

const GamePlan = () => {
  const theme = useTheme();
  
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [goals, setGoals] = useState({
    year1: { goals: [], completed: [] },
    year2: { goals: [], completed: [] },
    year3: { goals: [], completed: [] },
    year4: { goals: [], completed: [] }
  });
  const [newGoal, setNewGoal] = useState({ text: '', year: 'year1', priority: 'medium' });

  const addGoal = () => {
    if (newGoal.text.trim()) {
      setGoals(prev => ({
        ...prev,
        [newGoal.year]: {
          ...prev[newGoal.year],
          goals: [...prev[newGoal.year].goals, { 
            id: Date.now(), 
            text: newGoal.text, 
            priority: newGoal.priority,
            completed: false 
          }]
        }
      }));
      setNewGoal({ text: '', year: 'year1', priority: 'medium' });
    }
  };

  const toggleGoal = (year, goalId) => {
    setGoals(prev => ({
      ...prev,
      [year]: {
        ...prev[year],
        goals: prev[year].goals.map(goal => 
          goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
        )
      }
    }));
  };

  const deleteGoal = (year, goalId) => {
    setGoals(prev => ({
      ...prev,
      [year]: {
        ...prev[year],
        goals: prev[year].goals.filter(goal => goal.id !== goalId)
      }
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return theme.palette.error.main;
      case 'medium': return theme.palette.warning.main;
      case 'low': return theme.palette.success.main;
      default: return theme.palette.warning.main;
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return 'Medium';
    }
  };

  const yearTitles = {
    year1: 'Year 1: Foundation & Launch',
    year2: 'Year 2: Growth & Market Expansion',
    year3: 'Year 3: Scaling & Optimization',
    year4: 'Year 4: Market Leadership & Innovation'
  };

  const yearDescriptions = {
    year1: 'Focus on establishing your business foundation, building your team, and launching your core products/services.',
    year2: 'Expand your market reach, optimize operations, and build strong customer relationships.',
    year3: 'Scale your operations, enter new markets, and optimize your business model for maximum efficiency.',
    year4: 'Establish market leadership, innovate new products/services, and prepare for future growth opportunities.'
  };

  const yearIcons = {
    year1: <BusinessIcon />,
    year2: <TrendingUpIcon />,
    year3: <AssessmentIcon />,
    year4: <TimelineIcon />
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          🎯 Business Game Plan
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your 4-Year Strategic Roadmap to Success
        </Typography>
      </Box>

      {/* Business Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BusinessIcon color="primary" />
            Business Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Business Type</InputLabel>
                <Select
                  value={businessType}
                  label="Business Type"
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <MenuItem value="tech">Technology/SaaS</MenuItem>
                  <MenuItem value="ecommerce">E-commerce</MenuItem>
                  <MenuItem value="service">Service Business</MenuItem>
                  <MenuItem value="product">Product Business</MenuItem>
                  <MenuItem value="consulting">Consulting</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Add Goal Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AddIcon color="primary" />
            Add New Goal
          </Typography>
          <Grid container spacing={2} alignItems="end">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Goal Description"
                value={newGoal.text}
                onChange={(e) => setNewGoal({...newGoal, text: e.target.value})}
                placeholder="Enter your goal..."
                onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select
                  value={newGoal.year}
                  label="Year"
                  onChange={(e) => setNewGoal({...newGoal, year: e.target.value})}
                >
                  <MenuItem value="year1">Year 1</MenuItem>
                  <MenuItem value="year2">Year 2</MenuItem>
                  <MenuItem value="year3">Year 3</MenuItem>
                  <MenuItem value="year4">Year 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={newGoal.priority}
                  label="Priority"
                  onChange={(e) => setNewGoal({...newGoal, priority: e.target.value})}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={addGoal}
                startIcon={<AddIcon />}
                disabled={!newGoal.text.trim()}
                sx={{ height: 56 }}
              >
                Add Goal
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Goals Timeline */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(goals).map(([year, yearData]) => (
          <Grid item xs={12} key={year}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ color: 'primary.main' }}>
                    {yearIcons[year]}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {yearTitles[year]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {yearDescriptions[year]}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                {yearData.goals.length === 0 ? (
                  <Alert severity="info" sx={{ mt: 2 }}>
                    No goals set for this year yet. Add your first goal above!
                  </Alert>
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {yearData.goals.map(goal => (
                      <Paper
                        key={goal.id}
                        elevation={1}
                        sx={{
                          p: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderLeft: `4px solid ${getPriorityColor(goal.priority)}`,
                          opacity: goal.completed ? 0.7 : 1,
                          bgcolor: goal.completed ? 'success.light' : 'background.paper'
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                          <Chip
                            label={getPriorityLabel(goal.priority)}
                            size="small"
                            sx={{
                              bgcolor: getPriorityColor(goal.priority),
                              color: 'white',
                              fontWeight: 600
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              textDecoration: goal.completed ? 'line-through' : 'none',
                              color: goal.completed ? 'text.secondary' : 'text.primary'
                            }}
                          >
                            {goal.text}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton
                            onClick={() => toggleGoal(year, goal.id)}
                            color={goal.completed ? 'success' : 'default'}
                            size="small"
                          >
                            {goal.completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
                          </IconButton>
                          <IconButton
                            onClick={() => deleteGoal(year, goal.id)}
                            color="error"
                            size="small"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Progress Summary */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AssessmentIcon color="primary" />
            Progress Summary
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(goals).map(([year, yearData]) => {
              const completed = yearData.goals.filter(goal => goal.completed).length;
              const total = yearData.goals.length;
              const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
              
              return (
                <Grid item xs={12} sm={6} md={3} key={year}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {yearIcons[year]}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {yearTitles[year].split(':')[0]}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={percentage}
                      sx={{ mb: 1, height: 8, borderRadius: 4 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {completed} of {total} goals completed ({percentage}%)
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GamePlan; 