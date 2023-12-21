//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };
  const romanArray = [];
  const newS = s.split("");

  for (let i = 0; i < newS.length; i++) {
    if (romanNumerals[newS[i] + newS[i + 1]]) {
      romanArray.push(newS[i] + newS[i + 1]);
      i += 1;
    } else {
      romanArray.push(newS[i]);
    }
  }

  return romanArray.reduce((total, numRoman) => {
    return total + romanNumerals[numRoman];
  }, 0);
}

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1)
console.log(result2)
console.log(result3)




