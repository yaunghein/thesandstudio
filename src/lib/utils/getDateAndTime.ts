export default function getDateAndTime(location: string) {
  const timeZones: Record<string, string> = {
    Bangkok: "Asia/Bangkok",
    London: "Europe/London",
    "New York": "America/New_York",
    Singapore: "Asia/Singapore",
    Yangon: "Asia/Rangoon",
    LOCAL: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const options: any = {
    timeZone: timeZones[location],
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    hour12: false,
  };
  return new Date().toLocaleString("en-US", options);
}
