/*
  validate conditions:
  input : [true , false ,true , false]
  output : false
*/

const isTrue = (...source) => {
  if (source.length == 1 && typeof source[0] == "boolean") {
    return source;
  }
  if (typeof source == "object") {
    return source.every(Boolean);
  }
};
export const ramdom = (max) => Math.floor(Math.random() * max);
export { isTrue };
