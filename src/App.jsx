// // src/App.jsx
// import React, { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CssBaseline, AppBar, Toolbar, Typography, Switch, Box, Container } from '@mui/material';
// import { lightTheme, darkTheme } from './Theme';
// import CustomTable from './components/customtable';
// import CustomChart from './components/CustomChart';
// import CustomCalendar from './components/CustomCalendar';
// import CustomKanban from './components/CustomKanban';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import './App.css'; // Import custom CSS

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#f0f2f5',
//     },
//   },
// });

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const tableData = [
//     { id: 1, name: 'John Doe', age: 25 },
//     { id: 2, name: 'Jane Doe', age: 30 },
//   ];

//   const tableColumns = [
//     { field: 'name', headerName: 'Name' },
//     { field: 'age', headerName: 'Age' },
//   ];

//   const chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [12, 19, 3, 5, 2, 3],
//         fill: false,
//         backgroundColor: 'rgb(75, 192, 192)',
//         borderColor: 'rgba(75, 192, 192, 0.2)',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Sales Data',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const initialCalendarEvents = [
//     { title: 'Event 1', date: '2024-06-01' },
//     { title: 'Event 2', date: '2024-06-02' },
//   ];

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Router>
//           <Box sx={{ display: 'flex' }}>
//             <Sidebar />
//             <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
//               <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//                 <Toolbar>
//                   <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//                     Hi Michel
//                   </Typography>
//                   <Switch checked={darkMode} onChange={toggleDarkMode} />
//                 </Toolbar>
//               </AppBar>
//               <Toolbar />
//               <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
//                 <Routes>
//                   <Route path="/" element={<Dashboard />} />
//                   <Route path="/table" element={<CustomTable columns={tableColumns} data={tableData} />} />
//                   <Route path="/chart" element={<CustomChart data={chartData} options={chartOptions} />} />
//                   <Route
//                     path="/calendar"
//                     element={<CustomCalendar events={initialCalendarEvents} />}
//                   />
//                   <Route path="/kanban" element={<CustomKanban />} />
//                 </Routes>
//               </Container>
//             </Box>
//           </Box>
//         </Router>
//       </ThemeProvider>
//     </ThemeProvider>
//   );
// };

// export default App;



// src/App.jsx

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Switch, Box, Container } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';
import CustomTable from './customtable';
import CustomChart from './components/CustomChart';
import CustomCalendar from './components/CustomCalendar';
import CustomKanban from './components/CustomKanban';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css'; // Import custom CSS

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f2f5',
    },
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
  ];

  const tableColumns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const initialCalendarEvents = [
    { title: 'Event 1', date: '2024-06-01' },
    { title: 'Event 2', date: '2024-06-02' },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                  Hi Michel
                </Typography>
                <Switch checked={darkMode} onChange={toggleDarkMode} />
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/table" element={<CustomTable columns={tableColumns} data={tableData} />} />
                <Route path="/chart" element={<CustomChart data={chartData} options={chartOptions} />} />
                <Route path="/calendar" element={<CustomCalendar events={initialCalendarEvents} />} />
                <Route path="/kanban" element={<CustomKanban />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

