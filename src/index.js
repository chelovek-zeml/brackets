module.exports = function check(str, bracketsConfig) {
  // your solution

  let flag = false;
  let temp_str = '';
  let arr = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    arr.push(bracketsConfig[i]);
  }

  if (str.length % 2 === 0) {
      let count = Math.round(str.length / 2);
      while (count > 0) {
        for (let i = 0; i < arr.length; i++) {
          temp_str = arr[i][0] + arr[i][1];
          str = str.replace(temp_str, '');
          if (str.length === 0) {
            flag = true;
          }
        }
        count--;
      }
  }

  console.log(flag);
  return flag;
};
