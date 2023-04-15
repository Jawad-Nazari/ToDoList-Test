jest.mock('../index');

const { clearCompleted } = require('../index.js');

describe('Clear Completed', () => {
  test('should clear completed', () => {
    expect(clearCompleted([
      {
        discription: 'test description',
        index: 1,
        completed: true,
      },
      {
        discription: 'test description 2',
        index: 2,
        completed: false,
      },
    ])).toStrictEqual(
      [
        {
          discription: 'test description 2',
          index: 1,
          completed: false,
        },
      ],
    );
  });
});