'use strict';

/**
 * identity: Takes in any value and returns that value unchanged.
 * 
 * @param {any data type} val: Has a parameter representing any datatype.
 * @return {any data type}: Returns the input parameter unchanged.
 */

function identity(val){
    return val;
}

module.exports.identity = identity; 

/**
 * typeof: Takes in any value and returns the type of value as a string.
 * 
 * @param {any data type} val: Has a parameter representing any datatype.
 * @return {string}: Returns the type of value as a string.
 */

 function typeOf(val){
    if(Array.isArray(val)){
        return "array";
    } else if(val === null){
        return "null";
    } else{
        return typeof val; 
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first value(s) within the provided array.
 * What this function returns is dependent upon the number argument passed into the function (if any) and whether the array provided is an array. 
 * 
 * @param {an array} arr: The array whose values will be accessed/iterated through in order to return a new value/array. 
 * @param {a number} num: The number representing the number of values/desired length of the new array to be returned. 
 * @return {any data type}: If the num argument is not provided or is not a number, the first value of the array will be returned.
 * @return {an array}: If the num argument is greater than the length of the arr argument, it will return a new array that is effectively a copy of the original.
 * If the arr argument is not an array or the num argument is less than 1, an empty array will be returned.
 * Else, a new array with a length equal to the num argument, made up of the first values within the arr argument will be returned.
 */

function first(arr, num){
    var newArr = []; 

    if(num === undefined || num === NaN){
        return arr[0];
    } else if(arr.length < num){
        return arr; 
    } else if(Array.isArray(arr) === false || num <= 0){
        return []; 
    } else{
        for(var i = 0; i < num; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr; 
}

module.exports.first = first; 

/**
 * last: Designed to return the last value(s) within the provided array.
 * What this function returns is dependent upon the number argument passed into the function (if any) and whether the array provided is an array. 
 * 
 * @param {an array} arr: The array whose values will be accessed/iterated through in order to return a new value/array. 
 * @param {a number} num: The number representing the number of values/desired length of the new array to be returned. 
 * @return {any data type}: If the num argument is not provided or is not a number, the last value of the array will be returned.
 * @return {an array}: If the num argument is greater than the length of the arr argument, it will return a new array that is effectively a copy of the original.
 * If the arr argument is not an array or the num argument is less than 1, an empty array will be returned.
 * Else, a new array with a length equal to the num argument, made up of the last values within the arr argument will be returned.
 */

function last(arr, num){
    var newArr = []; 
    if(num === undefined || num === NaN){
        return arr[arr.length - 1];
    } else if(arr.length < num){
        return arr; 
    } else if(Array.isArray(arr) === false || num <= 0){
        return []; 
    } else{
        for(var i = arr.length - 1; i >= (arr.length - num); i--){
            newArr.unshift(arr[i]);
        }
    }
    return newArr; 
    }

module.exports.last = last; 

/**
 * indexOf: Designed to determine whether a value is in an array and, if so, what the array index is of the first occurance of that value.
 * If the value is not in the array, the number - 1 is returned.
 * 
 * @param {an array} arr: The array to be iterated through to determine if there is an occurance of the provided value
 * @param {any data type} val: The value to be compared against each item in the array to determine whether that value occurs within the array
 * @return {number}: If the val argument is found within the provided array, return the index of where that val argument is first found within the arr argument.
 * If the val argument is not found, return the number - 1.
 */

function indexOf(arr, val) {
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === val){ 
                return i; 
            }
        }
    return -1; 
    }

module.exports.indexOf = indexOf; 

/**
 * contains: Designed to determine whether a value is in an array and return a boolean based on whether it is true or false.
 * 
 * @param {an array} arr: The array to be iterated through to determine if there is an occurance of the provided value
 * @param {any data type} val: The value to be compared against each item in the array to determine whether that value occurs within the array
 * @return {boolean}: If the val argument is found within the provided array, return true. Else, return false.
 */

function contains(arr, val){
    var count = 0; 
    for(var i = 0; i < arr.length; i++){
        arr[i] === val ? count += 1 : count += 0
    }
    return count > 0 ? true : false; 
    }

module.exports.contains = contains; 

/** 
* each: Designed to loop over a collection and invoke a function for each value within the collection.

@param {an array or object} collect: The array or object to be iterated through 
@param {a function} func: The function to be applied to each value within the provided collection
*/

function each(collect, func){
    if(Array.isArray(collect)){
        for(var i = 0; i < collect.length; i++){
            func(collect[i], i, collect);
        }
    } else{
        for(var key in collect){
            func(collect[key], key, collect)
        }
    }
}

module.exports.each = each; 

/**
 * unique: Designed to return a new array with any duplicated values removed
 * 
 * @param {an array} arr: The array to be iterated through to determine/identify unique values within the array - ignoring duplicated values.
 * @return {an array}: A new array containing each unique value present within the provided array.
 */

function unique(arr) {
    var newArr = [];
    var index = [];
    for (var i = 0; i < arr.length; i++) {
        index.push(_.indexOf(arr, arr[i]))
        if(index.includes(i)) {
             newArr.push(arr[i]);
        }
    }
     return newArr;
}

module.exports.unique = unique; 