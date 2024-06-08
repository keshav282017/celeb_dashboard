// src/components/CustomKanban.jsx
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CustomKanban = () => {
  const [board, setBoard] = useState({
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress',
        taskIds: ['task-4', 'task-5'],
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: ['task-6', 'task-7', 'task-8'],
      },
    },
    tasks: {
      'task-1': { id: 'task-1', content: 'Task 1' },
      'task-2': { id: 'task-2', content: 'Task 2' },
      'task-3': { id: 'task-3', content: 'Task 3' },
      'task-4': { id: 'task-4', content: 'Task 4' },
      'task-5': { id: 'task-5', content: 'Task 5' },
      'task-6': { id: 'task-6', content: 'Task 6' },
      'task-7': { id: 'task-7', content: 'Task 7' },
      'task-8': { id: 'task-8', content: 'Task 8' },
    },
  });

  const [open, setOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({ id: '', content: '', columnId: '' });

  const handleEditClick = (task) => {
    setEditedTask({ ...task });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditedTask({ id: '', content: '', columnId: '' });
  };

  const handleSave = () => {
    // Update the task content in the board state
    const updatedTasks = {
      ...board.tasks,
      [editedTask.id]: { ...board.tasks[editedTask.id], content: editedTask.content },
    };

    setBoard({
      ...board,
      tasks: updatedTasks,
    });

    // For demo purposes, reset state
    setEditedTask({ id: '', content: '', columnId: '' });
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If there's no destination, exit function
    if (!destination) {
      return;
    }

    // If dropped in the same location, exit function
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reorder taskIds in the source column
    const startColumn = board.columns[source.droppableId];
    const finishColumn = board.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newBoard = {
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      };

      setBoard(newBoard);
    } else {
      // Move task from one column to another
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinishColumn = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      const newBoard = {
        ...board,
        columns: {
          ...board.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn,
        },
      };

      setBoard(newBoard);
    }
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => handleEditClick({ id: 'task-1', content: 'Task 1', columnId: 'column-1' })}>
        Edit Task
      </Button>
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.keys(board.columns).map(columnId => {
          const column = board.columns[columnId];
          const tasks = column.taskIds.map(taskId => board.tasks[taskId]);

          return (
            <Box key={columnId} sx={{ display: 'inline-block', verticalAlign: 'top', margin: '0 8px' }}>
              <Box sx={{ marginBottom: 2 }}>
                <strong>{column.title}</strong>
              </Box>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      background: '#f9f9f9',
                      padding: '10px',
                      width: '250px',
                      minHeight: '300px',
                    }}
                  >
                    {tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: 'none',
                              padding: '16px',
                              marginBottom: '8px',
                              backgroundColor: 'white',
                              ...provided.draggableProps.style,
                            }}
                            onClick={() => handleEditClick(task)}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Box>
          );
        })}
      </DragDropContext>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            name="content"
            value={editedTask.content}
            onChange={handleInputChange}
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

export default CustomKanban;
