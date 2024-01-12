export default function getDateAndTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = days[d.getDay()];
  let hour = `${d.getHours()}`;
  let ampm = "am";
  if (Number(hour) < 10) {
    hour = "0" + hour;
  }
  if (Number(hour) > 12) {
    hour = `${Number(hour) - 12}`;
    if (Number(hour) < 10) {
      hour = "0" + hour;
    }
    ampm = "pm";
  }
  if (hour === "00") hour = "12";

  let minute = `${d.getMinutes()}`;
  if (Number(minute) < 10) {
    minute = "0" + minute;
  }
  let second = `${d.getSeconds()}`;
  if (Number(second) < 10) {
    second = "0" + second;
  }
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return { day, hour, minute, second, ampm, date, month, year };
}
