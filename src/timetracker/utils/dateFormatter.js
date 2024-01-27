import { parse } from "postcss";

function parseDate(date = null) {
  return date ? new Date(date) : new Date();
}
export function getSqlDatetime(date = null) {
  const d = parseDate(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function shortTime(date = null) {
  const d = parseDate(date);
  return d
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(" ", "");
}

export function shortDate(date = null, relative = false) {
  const d = parseDate(date);
  if (relative) {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (d.toDateString() === today.toDateString()) {
      return "Today";
    } else if (d.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }
  }
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function joinDateAndTime(date, timeStr) {
  const d = parseDate(date);
  const [h, m] = timeStr.split(":");
  d.setHours(h);
  d.setMinutes(m);
  return getSqlDatetime(d);
}