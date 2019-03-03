module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;
  for (let i = 0; i < bracketsConfig.length; i++) {
      let a = str.split(bracketsConfig[i][0]).length;
      let b = str.split(bracketsConfig[i][1]).length;
      if (a != b) {
          return false;
      }
  }
  return true;
};
