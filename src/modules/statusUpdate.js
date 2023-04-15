import { completedTasks } from './completedTasks.js';

function deleteTask(taskList, task) {
  const filtered = taskList.filter((k) => k.index !== task.index);
  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = i + 1;
  }
  return filtered;
}

function editTask(taskList, task, e) {
  const newT = taskList.map((p) => {
    if (p.index === task.index) {
      return {
        discription: e.target.value,
        index: p.index,
        completed: p.completed,
      };
    }
    return p;
  });
  return newT;
}

function updateTask(taskList, displayTask, myTaskList) {
  if (!taskList) {
    return;
  }
  taskList.forEach((task) => {
    const More = document.querySelector(`.more-option-${task.index}`);
    const DBtn = document.querySelector(`.delete-${task.index}`);
    const TodoDes = document.querySelector(`.task-item-i${task.index}`);
    const CompletedBox = document.querySelector(`.completed-${task.index}`);

    More.addEventListener('mouseover', () => {
      More.style.display = 'none';
      DBtn.style.display = 'block';
    });

    DBtn.addEventListener('mouseout', () => {
      More.style.display = 'block';
      DBtn.style.display = 'none';
    });

    DBtn.addEventListener('click', () => {
      taskList = deleteTask(taskList, task);

      localStorage.setItem('todos', JSON.stringify(taskList));

      displayTask(taskList, myTaskList);
      updateTask(taskList, displayTask, myTaskList);
    });

    TodoDes.addEventListener('change', (e) => {
      taskList = editTask(taskList, task, e);

      localStorage.setItem('todos', JSON.stringify(taskList));
      displayTask(taskList, myTaskList);
      updateTask(taskList, displayTask, myTaskList);
    });

    completedTasks(CompletedBox, taskList, myTaskList, displayTask, updateTask, task);
  });
}

export {
  updateTask, deleteTask, editTask,
};