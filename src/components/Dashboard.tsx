import React from 'react';
import { Box, Typography, Paper, Grid, Button, ButtonGroup } from '@mui/material';

const CRMDashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Дашборд CRM
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Статистика продаж</Typography>
            <Typography variant="body1">Графики и метрики продаж</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Последние заказы</Typography>
            <Typography variant="body1">Список последних заказов</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Аналитика</Typography>
            <Typography variant="body1">Детальная аналитика по клиентам и продуктам</Typography>
          </Paper>
        </Grid>
      </Grid>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
};

export default CRMDashboard;