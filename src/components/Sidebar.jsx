// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Home, BarChart, TableChart, ViewKanban, CalendarToday, Settings, Assessment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Home />, path: '/' },
    { text: 'Chart', icon: <BarChart />, path: '/chart' },
    { text: 'Table', icon: <TableChart />, path: '/table' },
    { text: 'Kanban', icon: <ViewKanban />, path: '/kanban' },
    { text: 'Calendar', icon: <CalendarToday />, path: '/calendar' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
    { text: 'Analytics', icon: <Assessment />, path: '/analytics' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, ml: 2 }}>
          Dashboard
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
