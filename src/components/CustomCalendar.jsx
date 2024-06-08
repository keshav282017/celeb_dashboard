// src/components/CustomCalendar.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from '@mui/material';

const CustomCalendar = ({ events: initialEvents }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState(initialEvents);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setOpen(true);
    setSelectedEventTitle('');
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setSelectedDate('');
  };

  const handleSave = () => {
    const newEvent = {
      title: title,
      date: selectedDate,
    };

    setEvents([...events, newEvent]); // Add new event to events array

    // For demo purposes, reset state
    setTitle('');
    setSelectedDate('');
    setOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEventClick = (arg) => {
    setSelectedEventTitle(arg.event.title);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Selected Event Title: {selectedEventTitle}
      </Typography>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            margin="dense"
            id="date"
            label="Date"
            type="text"
            fullWidth
            value={selectedDate}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomCalendar;
