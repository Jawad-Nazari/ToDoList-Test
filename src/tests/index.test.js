jest.mock('../index');

const { addTaskToList, deleteTask } = require('../index.js');

describe('Add and Remove Todo', () => {
  test('should add items', () => {
    expect(addTaskToList(
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    )).toStrictEqual([
      {
        discription: 'test description',
        index: 1,
        completed: false,
      },
    ]);
  });

  test('should delete item', () => {
    expect(deleteTask({
      discription: 'test description',
      index: 1,
      completed: false,
    })).toStrictEqual([]);
  });
});