console.log("ok");

function twiceAsOld(dad, son) {
  result = dad - son * 2;
  if (result < 0) {
    return result * -1;
  }
  return result;
}

console.log(twiceAsOld(23, 12));
