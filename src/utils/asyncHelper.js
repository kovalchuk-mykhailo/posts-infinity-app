export const responseOk = response => {
  // if (typeof response === "object" && response !== null)
  return Object.keys(response || {}).length > 0;
  // else return false;
};
