let total = 0;

function add(x) {
  total += x;
  return total;
}

function substract(x) {
  total -= x;
  return total;
}

function multiply(x) {
  if (total !== 0) {
    total *= x;
    return total;
  } else {
    return (total = x);
  }
}

function divide(x) {
  if (total !== 0) {
    total /= x;
    return total;
  } else {
    return (total = x);
  }
}

function reset() {
  total = 0;
}
