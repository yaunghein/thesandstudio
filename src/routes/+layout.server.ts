export const trailingSlash = "always";

export const load = async (event) => {
  // const { getSession } = event.locals;

  const userAgent = event.request.headers.get("user-agent") as string;
  const macRegex = /macintosh|mac os x/i;
  const isMac = macRegex.test(userAgent);

  const mobileRegex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = mobileRegex.test(userAgent);

  return {
    // session: await getSession(),
    isMac,
    isMobile,
  };
};
