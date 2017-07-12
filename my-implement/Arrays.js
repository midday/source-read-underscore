var _ = {};

/**
 * 返回array（数组）的第一个元素。
 * @param  {Array} array
 * @param  {Number} [n]  
 */
_.first = function(array, n) {
    return array.splice(0, n !== undefined ? n : 1);
};

//test
/*var result = _.first([5, 4, 3, 2, 1],100);
console.log(result);*/

/**
 * 返回数组中除了最后一个元素外的其他全部元素。
 * @param  {Array} array
 * @param  {Number} [n]  
 */
_.initial = function(array, n) {
    array.splice(n !== undefined ? -n : -1);
    return array;
};

//test
/*var result = _.initial([5, 4, 3, 2, 1]);
console.log(result);*/

/**
 * 返回array（数组）的最后一个元素。
 * @param  {Array} array
 * @param  {Number} [n]  
 */
_.last = function(array, n) {
	return array.splice(n !== undefined ? -n : -1);
};

//test
/*var result = _.last([5, 4, 3, 2, 1]);
console.log(result);*/

/**
 * 返回数组中除了第一个元素外的其他全部元素。
 * @param  {Array} array  
 * @param  {Number} [index]
 */
_.rest = function(array, index) {
	return array.splice(index !== undefined ? index : 1);
};

//test
/*var result = _.rest([5, 4, 3, 2, 1]);
console.log(result);*/

/**
 * 返回一个除去所有false值的 array副本。 
 * @param  {Array} array
 */
_.compact = function(array){
	var result = [];
	for(var i=0;i<array.length;i++){
		if(array[i]){
			result.push(array[i]);
		}
	}
	return result;
};

//test
/*var result = _.compact([0, 1, false, 2, '', 3]);
console.log(result);*/

/**
 * 将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组。 
 * @param  {Array} array    
 * @param  {[type]} [shallow]
 */
_.flatten = function(array, shallow){

};

//test
/*var result = _.flatten([1, [2], [3, [[4]]]]);
console.log(result);
var result = _.flatten([1, [2], [3, [[4]]]], true);
console.log(result);*/

/**
 * 返回一个删除所有values值后的 array副本。
 * @param  {Array} array  
 * @param  {[type]} *values
 */
_.without = function(array) {
    var result = [];
    var withoutArray = [].slice.call(arguments, 1);
    for (var i = 0; i < array.length; i++) {
        var isContains = false;
        for (var j = 0; j < withoutArray.length; j++) {
            if (array[i] === withoutArray[j]) {
                isContains = true;
                break;
            }
        }
        if (!isContains) {
            result.push(array[i]);
        }
    }
    return result;
};


//test
/*var result = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
console.log(result);*/

/**
 * 返回传入的 arrays（数组）并集：按顺序返回，返回数组的元素是唯一的，可以传入一个或多个 arrays（数组）。
 * @param  {Array} *arrays
 */
_.union = function() {
	var result = [];
	var arrays = [].slice.call(arguments);
	var hash = {};
	for(var i = 0;i<arrays.length;i++){
		var array = arrays[i];
		for(var j=0;j<array.length;j++){
			hash[array[j]] = array[j];	
		}
	}
	for(var k in hash){
		result.push(hash[k]);
	}
	return result;
};

//test
/*var result = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(result);
*/
/**
 * 返回传入 arrays（数组）交集。
 * @param  {Array} *arrays
 */
_.intersection = function() {
    var result = [];
    var arrays = [].slice.call(arguments);
    var _intersectionTwoArray = function(array1, array2) {
        var intersectionArray = [];
        for (var k = 0; k < array1.length; k++) {
            for (var m = 0; m < array2.length; m++) {
                if (array1[k] === array2[m]) {
                    intersectionArray.push(array1[k]);
                }
            }
        }
        return intersectionArray;
    };
    if (arrays.length === 1) {
        result = arrays[0];
    } else {
        result = arrays[0];
        for (var i = 1; i < arrays.length; i++) {
            result = _intersectionTwoArray(result, arrays[i]);
        }
    }
    return result;
};

//test
var result = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(result);

/**
 * 类似于without，但返回的值来自array参数数组，并且不存在于other 数组.
 * @param  {Array} array  
 * @param  {[type]} *others
 */
_.difference = function(array) {
	
};

//test
/*var result = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
console.log(result);*/

/**
 * 返回 array去重后的副本, 使用 === 做相等测试. 如果您确定 array 已经排序, 那么给 isSorted 参数传递 true值, 此函数将运行的更快的算法. 如果要处理对象元素, 传递 iteratee函数来获取要对比的属性.
 * @param  {Array} array     
 * @param  {Boolean} [isSorted]
 * @param  {Function} [fn]
 */
_.uniq = function(array, isSorted, fn) {

};

//test
/*var result = _.uniq([1, 2, 1, 3, 1, 4]);
console.log(result);*/

/**
 * 将每个arrays中相应位置的值合并在一起。在合并分开保存的数据时很有用. 如果你用来处理矩阵嵌套数组时, _.zip.apply 可以做类似的效果。
 * @param  {Array} *arrays
 */
_.zip = function(){

};

//test
/*var result = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
console.log(result);*/

/**
 * 与zip功能相反的函数，给定若干arrays，返回一串联的新数组，其第一元素个包含所有的输入数组的第一元素，其第二包含了所有的第二元素，依此类推。
 * @param  {Array} *arrays
 */
_.unzip = function() {

};

//test
/*var result = _.unzip([['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]])
console.log(result);*/

/**
 * 将数组转换为对象。传递任何一个单独[key, value]对的列表，或者一个键的列表和一个值得列表。 如果存在重复键，最后一个值将被返回。
 * @param  {Array} list    
 * @param  {[type]} [values]       
 */
_.object = function(list, values) {

};

//test
/*var result = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
console.log(result);
var result = _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
console.log(result);*/

/**
 * 返回value在该 array 中的索引值，如果value不存在 array中就返回-1。
 * @param  {Array} array     
 * @param  {object} value     
 * @param  {Boolean} [isSorted]
 */
_.indexOf = function(array, value, isSorted) {

};

//test
/*var result = _.indexOf([1, 2, 3], 2);
console.log(result);*/

/**
 * 返回value在该 array 中的从最后开始的索引值，如果value不存在 array中就返回-1。如果支持原生的lastIndexOf，将使用原生的lastIndexOf函数。传递fromIndex将从你给定的索性值开始搜索。
 * @param  {Array} array      
 * @param  {Object} value      
 * @param  {Number} [fromIndex]
 */
_.lastIndexOf = function(array, value, fromIndex) {

};

//test
/*var result = _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
console.log(result);*/

/**
 * 使用二分查找确定value在list中的位置序号，value按此序号插入能保持list原有的排序。
 * @param  {Array} list      
 * @param  {Object} value     
 * @param  {Function} [fn]
 * @param  {Boolean} [context] 
 */
_.sortedIndex = function(list, value, fn, context) {

};

//test
/*var result = _.sortedIndex([10, 20, 30, 40, 50], 35);
console.log(result);
var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
var result = _.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
console.log(result);*/

/**
 * 类似于_.indexOf，当predicate通过真检查时，返回第一个索引值；否则返回-1。
 * @param  {Array} array    
 * @param  {Function} fn
 * @param  {Object} [context]
 */
_.findIndex = function(array, fn, context) {

};

//test
/*var result = _.findIndex([4, 6, 8, 12], isPrime);
console.log(result);*/

/**
 * 和_.findIndex类似，但反向迭代数组，当predicate通过真检查时，最接近末端的索引值将被返回。
 * @param  {Array} array    
 * @param  {Function} fn
 * @param  {Object} [context]
 */
_.findLastIndex = function(array, fn, context) {

};

//test
/*var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
var result = _.findLastIndex(users, {
  name: 'Ted'
});
console.log(result);*/

/**
 * 一个用来创建整数灵活编号的列表的函数，便于each 和 map循环。
 * @param  {Number} [start]
 * @param  {Number} stop   
 * @param  {Number} [step] 
 */
_.range = function(start, stop, step) {

};

//test
/*var result = _.range(10);
console.log(result);
var result = _.range(1, 11);
console.log(result);
var result = _.range(0, 30, 5);
console.log(result);
var result = _.range(0, -10, -1);
console.log(result);
var result = _.range(0);
console.log(result);*/