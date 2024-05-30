export const trailingSlash = "always";

export const load = async (event) => {
  // const { getSession } = event.locals;

  const userAgent = event.request.headers.get("user-agent") as string;
  const macRegex = /macintosh|mac os x/i;
  const isMac = macRegex.test(userAgent);

  const mobileRegex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = mobileRegex.test(userAgent);

  const checkLoadingScreen = () => {
    if (event.url.pathname === "/") {
      const showedLoadingScreen = event.cookies.get(
        "sand-showed-loading-screen",
      );
      return showedLoadingScreen === "yes" ? false : true;
    }
    return false;
  };

  return {
    // session: await getSession(),
    isMac,
    isMobile,
    shouldShowLoadingScreen: checkLoadingScreen(),
  };
};
