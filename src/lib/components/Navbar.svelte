<script lang="ts">
  import { page } from "$app/stores";

  const getDateAndTime = () => {
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
  };

  const time = (node: HTMLElement) => {
    const id = setInterval(() => {
      const { hour, minute, second, ampm } = getDateAndTime();
      node.innerHTML = `${hour}:${minute}:${second} ${ampm.toUpperCase()}`;
    }, 1000);

    return {
      destroy() {
        clearInterval(id);
      },
    };
  };

  const { date, month, year } = getDateAndTime();
  const today = `${month} ${date}, ${year}`;

  const PAGE_NAMES_MAP: Record<string, string> = {
    "/": "",
    "/for-all-thingkind": "For All Thingkind",
    "/child": "CHILD*",
    "/works": "WORKS",
    "/not-works": "Not Works",
  };
</script>

<header
  class="sticky z-50 top-0 right-0 left-0 w-full h-20 flex items-center px-12 shrink-0"
>
  <div class="w-full grid grid-cols-3">
    <div
      class="w-full flex items-center gap-14 text-2xl font-sans drop-shadow-lg"
    >
      <a href="/" class="font-sand-medium">SAND DESKTOP</a>
      <a href="/">Dipar 92</a>
      <a href="/auth/signup">Log Out</a>
      <a href="/">Cart</a>
    </div>

    <a href="/" class="grid place-items-center text-2xl">
      {PAGE_NAMES_MAP[$page.url.pathname]}
    </a>
  </div>
</header>
