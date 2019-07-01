 Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @renemroger/lotide`

**Require it:**

`const _ = require('@renemroger/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle(arr)`: returns the middle value of an array.
* `without(arr,remove)`: returns an array without the remove value
* `takeUntil(arr,callback)`: return array until item is found.
* `tail(arr)`: return array without the first element.
* `map(arr,callback)`: returns object containing key value pairs. 
* `letterPosition(sentence)`: prints out the index of each letter
* `hear(arr)`: returns head of the array
* `flatten(arr,arr2)`: flattens both arrays together and return it
* `findKeyByValue(arr,item)`: returns item based on key value pair
* `findKey(arr,func)`: recursively looks for key and returns item when found
* `countOnly(arr,item)`: returns how many times item occurs inside arr
* `countLetters(arr)`: counts all letters and return an obj with key - number of occurence pair.
