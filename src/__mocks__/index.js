const taskList = [];

function addTaskToList(task) {
  taskList.push(task);
  return taskList;
}

function deleteTask(task) {
  const filtered = taskList.filter((k) => k.index !== task.index);
  for (let i = 0; i < filtered.length; i += 1) {
    filtered[i].index = i + 1;
  }
  return filtered;
}

const taskList2 = [
  {
    discription: 'testing description 1',
    index: 1,
    completed: false,
  },
  {
    discription: 'testing 2',
    index: 2,
    completed: false,
  },
];

function completeStatus(task) {
  const newT = taskList2.map((p) => {
    if (p.index === task.index) {
      return {
        discription: p.discription,
        index: p.index,
        completed: !p.completed,
      };
    }
    return p;
  });

  return newT;
}

function editTask(task, des) {
  const newT = taskList2.map((p) => {
    if (p.index === task.index) {
      return {
        discription: des,
        index: p.index,
        completed: p.completed,
      };
    }
    return p;
  });
  return newT;
}

function clearCompleted(tasks) {
  const newK = tasks.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

exports.clearCompleted = clearCompleted;
exports.editTask = editTask;
exports.completeStatus = completeStatus;
exports.addTaskToList = addTaskToList;
exports.deleteTask = deleteTask;