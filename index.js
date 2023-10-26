export const getSum = (a, b) => a + b;
export const getSmallestNumber = (a, b) => Math.min(a, b);
export const castBoolean = (condition) => {
  if (condition) {
    return true;
  }
  return false;
};
export const capitalize = (str, index) => {
  if (index <= 0 || index > str.length) {
    return str;
  }
  const output = `${str.slice(0, index)}${str[index].toUpperCase()}${str.slice(index + 1)}`;
  return output;
};
export const countCapitalLetters = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ' && str[i] === str[i].toUpperCase()) {
      count += 1;
    }
  }
  return count;
};
