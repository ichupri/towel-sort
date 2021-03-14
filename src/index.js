
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
    } else {
      let newArray = [];
      matrix.map(function(element, index) { newArray = index % 2 == 0 ? newArray.concat(element) : newArray.concat(element.reverse()) });
      return newArray;
    }
}