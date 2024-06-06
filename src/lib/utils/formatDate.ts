// for email template
export default function (date: Date) {
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = date
    .toLocaleDateString("en-US", optionsDate)
    .toUpperCase();
  const formattedTime = date
    .toLocaleTimeString("en-US", optionsTime)
    .toUpperCase();

  return [formattedDate, formattedTime];
}
