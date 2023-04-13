import { addTasks, deleteTask } from './modules/displayTask.js';

// set up the initial container with zero tasks
document.body.innerHTML = '<div class="main"><header>Todays To Do</header><hr><div class="addInput-container"><input type="text" class="addInput" placeholder="Press enter key to Add to your list..."><div class="addBtn">&#8617;</div></div><hr><div class="myTasksList"><!-- here all the content will be created dinamically  --></div><footer class="clrBtn">Clear all completed</footer></div>';
const container = document.querySelector('.myTasksList');

describe('add function', () => {
  test('should add one task to the container', () => {
    addTasks('Test task 1');
    expect(container.children.length).toBe(1);
  });

  test('the container should contain a task called Test task 2', () => {
    addTasks('Test task 2');
    expect(container.innerHTML).toContain('Test task 2');
  });

  test('should add a third task to the container', () => {
    addTasks('Test task 3');
    const container = document.querySelector('.myTasksList');
    expect(container.children.length).toBe(3);
  });
});
describe('removeTodo function', () => {
  test('should remove one task from the container', () => {
    deleteTask(0);
    expect(container.children.length).toBe(2);
  });
  test('should remove another task from the container', () => {
    deleteTask(1);
    expect(container.children.length).toBe(1);
  });
});