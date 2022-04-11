const palindromes = function (string) {
  let normalized = string
    .toLowerCase()
    .replace(/[^a-z]+/g, "")
    .split("");

  let reversed = [...normalized].reverse();

  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
