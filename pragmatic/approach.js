function parseTime(str) {
  const [_, hour, minutes, ampm] = str.match(/(\d+):(\d+)(am|pm)?/);
  const time = hour * 60 + minutes + (ampm === "pm" ? 12 * 60 : 0);
  return time;
}

parseTime("3:33");
