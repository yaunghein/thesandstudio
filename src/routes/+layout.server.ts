export const trailingSlash = "always";

export const load = async ({ locals: { getSession } }) => {
  return {
    session: await getSession(),
  };
};
