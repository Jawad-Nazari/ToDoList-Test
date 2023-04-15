import { completedTasks } from '../modules/completedTasks.js';

jest.mock('../index');
// tests/completedTasks.test.js
describe('completedTasks function', () => {
  it('should toggle the "completed" status of a task', () => {
    const todoList = [
      {
        discription: 'Task 1',
        index: 1,
        completed: false,
      },
      {
        discription: 'Task 2',
        index: 2,
        completed: true,
      },
      {
        discription: 'Task 3',
        index: 3,
        completed: false,
      },
    ];

    const todo = {
      discription: 'Task 2',
      index: 2,
      completed: true,
    };

    const expectedOutput = [
      {
        discription: 'Task 1',
        index: 1,
        completed: false,
      },
      {
        discription: 'Task 2',
        index: 2,
        completed: false,
      },
      {
        discription: 'Task 3',
        index: 3,
        completed: false,
      },
    ];

    const result = completedTasks(todoList, todo);

    expect(result).toEqual(expectedOutput);
  });
});
