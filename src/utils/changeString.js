export const changeString = (string) => {
  return string.replace(/[()]/g, "").split(" ").join("-").toLowerCase();
};
