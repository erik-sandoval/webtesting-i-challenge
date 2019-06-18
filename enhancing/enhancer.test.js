const enhancer = require('./enhancer.js');

test('enhancement succeeds increases by 1 when between 1 and 20', () => {
  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 15,
      durability: 14
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 16,
    durability: 14
  });

  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 'rretert',
      durability: 14
    })
  ).toBe('enhancement must be a number and between 0-20');

  expect(
    enhancer.succeed({
      name: 'Sword',
      enhancement: 21,
      durability: 14
    })
  ).toBe('enhancement must be a number and between 0-20');
});

test('enhancement fails and durability decreases based on enhancement level', () => {
  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 14,
      durability: 24
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 14,
    durability: 19
  });

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 16,
      durability: 24
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 15,
    durability: 14
  });

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 16,
      durability: 24
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 15,
    durability: 14
  });

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 16,
      durability: -4
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 15,
    durability: 0
  });

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 14,
      durability: -4
    })
  ).toStrictEqual({
    name: 'Sword',
    enhancement: 14,
    durability: 0
  });

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: -1,
      durability: 24
    })
  ).toStrictEqual(`enhancement level must be a number and between 0 or 20`);

  expect(
    enhancer.fail({
      name: 'Sword',
      enhancement: 21,
      durability: 24
    })
  ).toStrictEqual(`enhancement level must be a number and between 0 or 20`);
});

test('repair makes durability 1000', () => {
  expect(
    enhancer.repair({ name: 'Sword', enhancement: 14, durability: 24 })
  ).toStrictEqual({ name: 'Sword', enhancement: 14, durability: 100 });

  expect(
    enhancer.repair({ name: 'Sword', enhancement: 14, durability: 190 })
  ).toStrictEqual({ name: 'Sword', enhancement: 14, durability: 100 });

  expect(
    enhancer.repair({ name: 'Sword', enhancement: 14, durability: -1 })
  ).toStrictEqual('this is broken beyond repair');
});
