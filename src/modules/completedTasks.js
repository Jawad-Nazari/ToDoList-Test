function completedTasks(taskList, Task) {
  const newT = taskList.map((p) => {
    if (p.index === Task.index) {
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

const StatusComplete = (CompletedBox, taskList, myTaskList, displayTask, updateTask, Task) => {
  CompletedBox.addEventListener('change', () => {
    taskList = completedTasks(taskList, Task);

    localStorage.setItem('Tasks', JSON.stringify(taskList));
    displayTask(taskList, myTaskList);
    updateTask(taskList, displayTask, myTaskList);
  });
};

export { StatusComplete, completedTasks };