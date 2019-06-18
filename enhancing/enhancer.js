module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20 && item.enhancement >= 0) {
    return { ...item, enhancement: item.enhancement + 1 };
  }
  if (item.enhancement === 20) {
    return 'item max enhanced';
  } else {
    return 'enhancement must be a number and between 0-20';
  }
}

function fail(item) {
  if (item.enhancement > 20 || item.enhancement < 0) {
    return `enhancement level must be a number and between 0 or 20`;
  } else if (item.enhancement < 15) {
    if (item.durability < 0) {
      return { ...item, durability: 0 };
    } else {
      return { ...item, durability: item.durability - 5 };
    }
  } else if (item.enhancement >= 15) {
    if (item.durability < 0) {
      return {
        ...item,
        durability: 0,
        enhancement: item.enhancement - 1
      };
    } else {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1
      };
    }
  }
}

function repair(item) {
  if (item.durability < 0) {
    return `this is broken beyond repair`;
  } else if (item.durability >= 0 || item.durability <= 100) {
    const difference = 100 - item.durability;
    return { ...item, durability: item.durability + difference };
  } else if (item.durability > 100) {
    const difference = item.durability - 100;
    return { ...item, durability: item.durability - difference };
  }
}

function get(item) {
  return { ...item };
}
