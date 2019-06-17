const enhancer = require('./enhancer.js');

test('enhancement succeeds increases by 1 when between 1 and 20', () => {
  const item = {
    name: 'Sword',
    enhancement: 15,
    durabilty: 14
  };

  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 15,
      durabilty: 14
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 16,
    durabilty: 14
  });

  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 'rretert',
      durabilty: 14
    })
  ).toBe('enhancement must be a number and between 0-20');

  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 21,
      durabilty: 14
    })
  ).toBe('enhancement must be a number and between 0-20');
});
