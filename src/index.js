import './style.css';

import {
  addTasks, displayTask, deleteTask, editTask,
} from './modules/displayTask.js';

// ADD A NEW TASK
const addButton = document.querySelector('.addBtn'); // clicking add button
addButton.addEventListener('click', () => {
  const addTask = document.querySelector('.addInput');
  addTasks(addTask.value);
});

const addTask = document.querySelector('.addInput'); // typing enter key
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const taskValue = addTask.value;
    addTasks(taskValue);
    displayTask();
  }
});

// DELETE A TASK
const mytaskList = document.querySelector('.myTasksList');

mytaskList.addEventListener('click', (event) => {
  const deleteTaskIcon = event.target.closest('.delete-task-icon');
  if (deleteTaskIcon) {
    const deleteTaskIcons = mytaskList.querySelectorAll('.delete-task-icon');
    const index = Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);
    deleteTask(index);
  }
});

// EDIT A TASK
mytaskList.addEventListener('click', (event) => {
  const textInput = event.target.closest('.input-text');
  if (textInput) {
    const textInputs = mytaskList.querySelectorAll('.input-text');
    const index = Array.from(textInputs).indexOf(textInput);
    editTask(index);
  }
});

// FIRST DISPLAY TASK WHEN THE PAGE LOADS
window.onload = displayTask;
