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

export function shortTime(date = null, hour12=true) {
  const d = parseDate(date);
  return d
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12,
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

export function timeDifference(start, end) {
  const diff = Math.abs(parseDate(end) - parseDate(start));

  const h = Math.floor(diff / 3600000) + "";
  const m = Math.floor((diff % 3600000) / 60000) + "";
  const s = Math.floor((diff % 60000) / 1000) + "";

  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`;
}

export function isoDate(date) {
  const d = parseDate(date)
  return d.toISOString().slice(0,10)
}

export function formatTime(time) {
  const match = time.match(/^(\d{1,2})\s*:?\s*([012345]\d)\s*([pPaA]{1}[mM]{0,1})?$/)
  if (!match) return null
  let [,h,m,clock] = match
  if (clock) {
    if (h>12) return null
  } else {
    if (h>12){
      h -= 12
      clock = "PM"
    } else {
      clock = "AM"
    }
    if (h===0) h =12
  }
  return `${h}:${m.padStart(2,"0")} ${(clock.length == 1 ? clock+"M" : clock).toUpperCase()}`
}