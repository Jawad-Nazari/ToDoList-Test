import './style.css';
import displayTask from './modules/displayTask.js';
import { updateTask, deleteTask, editTask } from './modules/statusUpdate.js';
import { completedTasks } from './modules/completedTasks.js';

const myTaskList = document.querySelector('#myTaskList');
const inputTask = document.querySelector('.input');
const Form = document.querySelector('.form');
const btn = document.querySelector('.btn');

let taskList = [];
function getTasks() {
  if (localStorage.getItem('Tasks')) {
    taskList = JSON.parse(localStorage.getItem('Tasks'));
  }
}

getTasks();

function addTaskToList(Task) {
  taskList.push(Task);
}

function addTask() {
  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    getTasks();
    addTaskToList({
      discription: inputTask.value,
      index: taskList.length !== 0 ? taskList[taskList.length - 1].index + 1 : 1,
      completed: false,
    });
    localStorage.setItem('Tasks', JSON.stringify(taskList));
    getTasks();
    displayTask(taskList, myTaskList);
    updateTask(taskList, displayTask, myTaskList);
    inputTask.value = '';
  });
}

function clearCompleted(taskList) {
  const newK = taskList.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

btn.addEventListener('click', () => {
  getTasks();
  taskList = clearCompleted(taskList);
  localStorage.setItem('Tasks', JSON.stringify(taskList));

  displayTask(taskList, myTaskList);
  updateTask(taskList, displayTask, myTaskList);
});

addTask();
displayTask(taskList, myTaskList);
updateTask(taskList, displayTask, myTaskList);

export {
  addTaskToList, deleteTask, completedTasks, addTask, editTask,
};