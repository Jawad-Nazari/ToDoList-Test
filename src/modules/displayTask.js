export const displayTask = () => {
  const mytaskList = document.querySelector('.myTasksList');
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  taskArray.sort((a, b) => a.index - b.index);
  mytaskList.innerHTML = '';
  for (let i = 0; i < taskArray.length; i += 1) {
    const html = `
      <div class="addTask">
        <input type="checkbox" class="Input-checkbox">
        <input type="text" class="input-text" value="${taskArray[i].description}">
        <span class="delete-task-icon">&#x1F5D1;</span>
      </div>
    `;
    mytaskList.innerHTML += html;
  }
};

// ADD A NEW TASK
export const addTasks = (addTask) => {
  const addTaskInput = document.querySelector('.addInput');
  if (addTask !== '') {
    const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
    taskArray.push({ completed: false, description: addTask });
    for (let i = 1; i <= taskArray.length; i += 1) {
      taskArray[i - 1].index = i;
    }
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
    addTaskInput.value = '';
    displayTask(); // added to display new task
  }
};

// DELETE A TASK
export const deleteTask = (index) => {
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  taskArray.splice(index, 1);
  for (let i = 1; i <= taskArray.length; i += 1) {
    taskArray[i - 1].index = i;
  }
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
  displayTask();
};

// editTask A TASK
export const editTask = (index) => {
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  const textInputs = document.querySelectorAll('.input-text');
  textInputs[index].addEventListener('change', () => {
    taskArray[index].description = textInputs[index].value;
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  });
};
