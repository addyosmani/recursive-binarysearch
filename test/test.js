/*global describe, it */
'use strict';
var assert = require('assert');
var binarySearch = require('../');

describe('recursive-binarysearch node module', function () {

  it('Should find the element at position 0 ', function () {
    assert.deepEqual(binarySearch([1, 2, 3, 4, 6, 8], 1), 0);
    assert.deepEqual(binarySearch([1, 2, 3, 4, 6, 8], 2), 1);
    assert.deepEqual(binarySearch([1, 2, 3, 4, 6, 8], 4), 3);
  });

  it('Should find the element in position arr.length', function () {
    assert.deepEqual(binarySearch([1, 2, 3, 4, 6, 8], 1), 0);
  });

  it('Should work with arrays with 2 elements', function () {
    assert.deepEqual(binarySearch([1, 8], 1), 0);
    assert.deepEqual(binarySearch([1, 8], 8), 1);
  });

  it('Should return -1 for missing elements', function () {
    assert.deepEqual(binarySearch([1, 2, 3], 4), -1);
    assert.deepEqual(binarySearch([1, 2, 3], 10), -1);
  });

  it('Should work with empty arrays', function () {
    assert.deepEqual(binarySearch([], 4), -1);
  });

});
