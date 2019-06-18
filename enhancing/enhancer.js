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
  
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
