jest.mock('../index');

const { editTask } = require('../index.js');

describe('Edit Task', () => {
  test('should Edit Task', () => {
    expect(editTask({

      discription: 'testing description 1',
      index: 1,
      completed: false,

    }, 'test description updated')).toStrictEqual(
      [
        {
          discription: 'test description updated',
          index: 1,
          completed: false,
        },
        {
          discription: 'testing 2',
          index: 2,
          completed: false,
        },
      ],
    );
  });
});