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
 * @return {string}: Returns the type of input parameter as a string.  
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
 * first: Takes in an array and a number. It will return a new array consisting of the first values in the array parameter - 
 * the number of values within the new array will be determined by the number parameter.
 * 
 * @param {an array} arr: Has a parameter representing an array. 
 * @param {a number} num: Has a parameter representing a number that will determine the number of items to be included in the new array.
 * @return {an array}: Returns a new array consisting of the first values in arr, with the number of values it consists of determined by num.
 * If num is greater than the length of arr, the new array will consist of all of arr's values. 
 * If arr is not an array or num is less than or equal to zero, an empty array will be returned.
 * If num is undefined or not a number, the first value of arr will be returned.
 */

function first(arr, num){
    var newArr = []; 

    if(num === undefined || num === NaN){
        return arr[0];
    } else if(Array.isArray(arr) === false || num <= 0){
        return []; 
    } else if(arr.length < num){
        return arr; 
    } else{
        for(var i = 0; i < num; i++){
            newArr.push(arr[i]);
        }
    }
    return newArr; 
}

module.exports.first = first; 

/**
 * last: Takes in an array and a number. It will return a new array consisting of the last values in the array parameter - 
 * the number of values within the new array will be determined by the number parameter.
 *
 *  @param {an array} arr: Has a parameter representing an array. 
 * @param {a number} num: Has a parameter representing a number that will determine the number of items to be included in the new array.
 * @return {an array}: Returns a new array consisting of the last values in arr, with the number of values it consists of determined by num.
 * If num is greater than the length of arr, the new array will consist of all of arr's values. 
 * If arr is not an array or num is less than or equal to zero, an empty array will be returned.
 * If num is undefined or not a number, the last value of arr will be returned.
 */

function last(arr, num){
    var newArr = []; 

    if(num === undefined || num === NaN){
        return arr[arr.length - 1];
    } else if(Array.isArray(arr) === false || num <= 0){
        return []; 
    } else if(arr.length < num){
        return arr; 
    } else{
        for(var i = arr.length - 1; i >= arr.length - num; i--){
            newArr.unshift(arr[i]);
        }
    }
    return newArr; 
    }

module.exports.last = last; 

/**
 * indexOf: Takes in an array and a value and looks for the first instance of the value within the array and return its index.
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @param {any data type} val: Has a parameter representing any datatype.
 * @return {a number}: Returns the index of the first instance of the given vauel within the given array. 
 * If the given value is not in the given array, it returns -1.
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
 * contains: Takes in an array and a value and returns a boolean value based on whether or not the value is present within the array.
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @param {any data type} val: Has a parameter representing any datatype.
 * @return {a boolean}: Returns true if the given value is present within the array, else returns false.
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
 * each: Takes in a collection and a function and calls that function for each element within the collection.
 * 
 * @param {an array or object} collect: Has a parameter representing either an array or an object.
 * @param {function} func: Has a paramater representing a callback function. 
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
 * unique: Takes in an array and returns a new array with any duplicate elements from the original array removed.
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @return {an array}: Returns a new array containing the elements from the original array with any duplicates removed.
 */

 function unique(arr) {
    //create new array to store result
    var newArr = [];
    var index = []; //0, 0, 2, 0
    //loop through array
    for (var i = 0; i < arr.length; i++) {
        index.push(_.indexOf(arr, array[i]))
        if(index.includes(i)) {
             newArr.push(arr[i]);
        }
    }
     return newArr;
}

module.exports.unique = unique; 

/**
 * filter: Takes in an array and a function and calls that function for each element in the array determining whether the function called on the element will return true
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {an array}: Returns a new array made up of any elements for which calling the function returned true.
 */

 function filter(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === true){
           newArr.push(arr[i]);
       }
    }
    return newArr; 
    }

module.exports.filter = filter; 

/**
 * reject: Takes in an array and a function and calls that function for each element in the array determining whether the function called on the element will return false
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {an array}: Returns a new array made up of any elements for which calling the function returned false.
 */

 function reject(arr, func){
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === false){
           newArr.push(arr[i]);
       }
    }
    return newArr; 
    }

module.exports.reject = reject; 

/**
 * partition: Takes in an array and a function and calls that function for each element in the array determining whether the function called on the element will return true or false
 * 
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {an array}: Returns a new array made up of two sub arrays. 
 * The first sub array made up of any elements for which calling the function returned true.
 * The second sub array made up of any elements for which calling the function returned false. 
 */

function partition(arr, func){
    var truthArr = []; 
    var falseArr = []; 
    for(var i = 0; i < arr.length; i++){
       if(func(arr[i], i, arr) === true){
           truthArr.push(arr[i]);
       } else if(func(arr[i], i, arr) === false){
            falseArr.push(arr[i]);
       }
    }
return [truthArr, falseArr];
}

module.exports.partition = partition; 

/**
 * map: Takes in an array and a function, calls that function for each element in the array, and gathers the return value for each function
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {an array}: Returns a new array containing each return value from each function call on each element in the array. 
 */

function map(collec, func){
    var newArr = []; 
    if(Array.isArray(collec)){
        for(var i = 0; i < collec.length; i++){
            newArr.push(func(collec[i], i, collec));
        }
    } else{
        for(var key in collec){
            newArr.push(func(collec[key], key, collec))
        }
    }
    return newArr; 
}

module.exports.map = map; 

/**
 * pluck: Takes in an array of objects and a property and identifies the key value of property for each object in the array
 * @param {an array} arr: Has a parameter representing an array of object.
 * @param {any data type} prop: Has a parameter representing any datatype.
 * @return {an array}: Returns a new array containing the values of each object's key that matched prop 
 */

function pluck(arr, prop){
    var newArrs = []; 
    var finalArr = []; 
    for(var i = 0; i < arr.length; i++){ //isolate each object
        newArrs.push(_.map(arr[i], function (value, key){
            if(key === prop){
                return value; 
            }
        }))
    }
    for(var i = 0; i < newArrs.length; i++){
        finalArr.push(newArrs[i].join(""))
    }
    return finalArr; 
    }

module.exports.pluck = pluck;

/**
 * every: Takes in an array and a function, calls that function for each element in the array, and determines whether any of the return values are false
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {a boolean}: Returns true if the return value for every callback function for every element was true, else returns false
 */

function every(collection, func) {
    if(func === undefined){ 
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
            if(!collection[i]){ 
                return false;
            }
            } 
        } else{
            for(let key in collection){
                if(!collection[key]){
                    return false; 
                }
            }
        }
    } else {
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false; 
                }
            }
        }
        else { 
            for(let key in collection){
                if(!func(collection[key], key, collection)){
                    return false; 
                }
            }
        }
    }
    return true; 
    }

module.exports.every = every; 

/**
 * some: Takes in an array and a function, calls that function for each element in the array, and determines whether any of the return values are true
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a callback function. 
 * @return {a boolean}: Returns true if any of the return values for every callback function for every element was true, else returns false
 */

function some(collection, func){       
    var count = 0; 

        if(func === undefined){ 
            if(Array.isArray(collection)){
                for(var i = 0; i < collection.length; i++){
                if(collection[i]){ 
                    count += 1;
                }
                } 
            } else{
                for(let key in collection){
                    if(collection[key]){
                        count += 1; 
                    }
                }
            }
        } else { 
            if(Array.isArray(collection)){
                for(let i = 0; i < collection.length; i++){
                    if(func(collection[i], i, collection)){
                        count += 1; 
                    }
                }
            }
            else { 
                for(let key in collection){
                    if(func(collection[key], key, collection)){
                        count += 1; 
                    }
                }
            }
        }
        if(count > 0){
            return true; 
        } else{
            return false; 
        }
        }

module.exports.some = some; 

/**
 * reduce: Takes in an array, a function, and a seed and calls a function for each element in the array passing in the arguments of previous result, element, and index.
 * It will return the total result of calling the function for each element after the last iteration.
 *
 * @param {an array} arr: Has a parameter representing an array.
 * @param {function} func: Has a paramater representing a function. 
 * @param {any data type} seed: Has a parameter representing an initial value. 
 * @return {any data type}: Returns the total result of calling the function for each element. 
 */

 _.reduce = function(arr, func, seed){
    var result; 

    if(seed === undefined){
        let firstIteration = func(arr[0], arr[1], 1);
        var result = firstIteration; 
        for(let i = 2; i < arr.length; i++){
            var result = func(result, arr[i], i);
        }
    } else if(seed === 0){
        result = 0;
    } else{
        let firstIteration = func(seed, arr[0], 0); 
        var result = firstIteration; 
        for(let i = 1; i < arr.length; i++){
            var result = func(result, arr[i], i);
        }
    }
    return result; 
    }

    module.exports.reduce = reduce; 

    /**
     * extend: Takes in at least one target object, that will be updated with the properties from any other objects passed into the function
     * @param {an object} object: Has a parameter representing an object.
     * @return {an object}: Returns the updated object initially passed into the function.
     */

     _.extend = function(object){
        for(var i = 0; i < arguments.length; i++){
            Object.assign(object, arguments[i]); 
            }
            return object; 
    }

    module.exports.extend = extend; 