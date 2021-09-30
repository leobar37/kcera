const mapperBreakPoints = {
  mobile: "(max-width: 599.9px)",
};
/**
 *
 * @param {*} breakPoint
 * @param {*} match
 * @param {*} nomatch
 * @returns
 * @description
 */
export const matchBreakPoint = (breakPoint, match, nomatch) => {
  const matchBreakPoint = window.matchMedia(mapperBreakPoints[breakPoint]);
  match();
  const handler = () => {
    if (matchBreakPoint) {
      match();
    } else {
      nomatch && nomatch();
    }
  };
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
};

export const breakPoint = (brekpoint) => (match, notmatch) =>
  mapperBreakPoints(breakPoint, match, notmatch);

export const mobile = breakPoint("mobile");
