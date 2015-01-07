#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Recursive Binary Search

A recursive Binary Search implementation with O(log N) complexity based on [javascript-algorithms](https://github.com/mgechev/javascript-algorithms).

> A straightforward implementation of binary search is recursive. The initial call uses the indices of the 
entire array to be searched. The procedure then calculates an index midway between the two indices, determines 
which of the two subarrays to search, and then does a recursive call to search that subarray. 

## Install

```sh
$ npm install --save recursive-binarysearch
```


## Usage

```js
var binarysearch = require('recursive-binarysearch');

binarySearch([1, 2, 3, 4, 6, 8], 1);
// => 0

binarySearch([1, 2, 3, 4, 6, 8], 4);
// => 3

binarySearch([1, 8], 1);
// => 0

binarySearch([1, 2, 3], 4);
// => -1

binarySearch([], 4);
// => -1
```


## License

MIT © [Addy Osmani](http://addyosmani.com)


[npm-url]: https://npmjs.org/package/recursive-binarysearch
[npm-image]: https://badge.fury.io/js/recursive-binarysearch.svg
[travis-url]: https://travis-ci.org/addyosmani/recursive-binarysearch
[travis-image]: https://travis-ci.org/addyosmani/recursive-binarysearch.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/recursive-binarysearch.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/recursive-binarysearch
