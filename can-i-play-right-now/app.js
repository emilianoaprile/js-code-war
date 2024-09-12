console.log("Can I play right now?");

function canIPlay(now, start, end) {
  if (start < end) {
    return now >= start && now < end;
  }
  return now >= start || now < end;
}

console.log(canIPlay(23, 22, 1));
