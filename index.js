'use strict';

/**
 * Binary search.
 *
 * @param {array} array Array to find the index of the element
 * @param {number} key Key of element which index should be found
 * @param {number} left Left index
 * @param {number} right Right index
 * @returns {number} index The index of the element or -1 if not found
 *
 */
function recursiveBinarySearch(array, key, left, right) {
  if (left > right) {
    return -1;
  }
  var middle = Math.floor((right + left) / 2);
  if (array[middle] === key) {
    return middle;
  } else if (array[middle] > key) {
    return recursiveBinarySearch(array, key, left, middle - 1);
  } else {
    return recursiveBinarySearch(array, key, middle + 1, right);
  }
}

module.exports = function (array, key) {
  return recursiveBinarySearch(array, key, 0, array.length);
};
