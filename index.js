function solution(roman){
  let roman_numeral = {
    "I" : 1, "V" : 5, "X" : 10, "L" : 50,
    "C" : 100, "D": 500, "M" : 1000
  }
  
  let numerals = roman.split("");
  
  let total = 0;
  for (let index = 0; index < numerals.length-1; index++) {
    if (roman_numeral[numerals[index]] < roman_numeral[numerals[index+1]]) {
      total -= roman_numeral[numerals[index]];
    }
    else {
      total += roman_numeral[numerals[index]];
    }
  }
  total += roman_numeral[numerals[numerals.length-1]];
  
  return total;
}

console.log(solution("VIII"));
console.log(solution("XLI"));
console.log(solution("IX"));