/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (s) {
  let set = new Set();
  let arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    set.add(arr[i]);
  }
  return set.size === 26;
};
