var _ = {};

/**
 * 遍历list中的所有元素，按顺序用遍历输出每个元素。
 * @param  {Array,Object}   list    
 * @param  {Function} fn
 * @param  {Object}   [context]
 */
_.each = function(list, fn, context) {
    if (list.constructor === Array) {
        for (var i = 0; i < list.length; i++) {
            fn.call(context, list[i], i, list);
        }
    }
    if (list.constructor === Object) {
        for (var i in list) {
            fn.call(context, list[i], i, list)
        }
    }
};

//测试
/*_.each([1, 2, 3], console.log);
_.each({one: 1, two: 2, three: 3}, console.log);*/

/**
 * 通过转换函数(iteratee迭代器)映射列表中的每个值产生价值的新数组。
 * @param  {Array,Object} list
 * @param  {Function} fn
 * @param  {Object} [context]
 */
_.map = function(list, fn, context) {
    var result = [];
    if (list.constructor === Array) {
        for (var i = 0; i < list.length; i++) {
            result.push(fn.call(context, list[i], i, list));
        }
    }
    if (list.constructor === Object) {
        for (var i in list) {
            result.push(fn.call(context, list[i], i, list));
        }
    }
    return result;
};

//测试
/*var result = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(result);
var result = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log(result);*/

/**
 * 别名为 inject 和 foldl, reduce方法把list中元素归结为一个单独的数值
 * @param  {Array}   list
 * @param  {Function} fn 
 * @param  {Object}   [memo]
 * @param  {Object}   [context]
 */
_.reduce = function(list, fn, memo, context) {
    for (var i = 0; i < list.length; i++) {
        if(memo){
            memo = fn.call(context, memo, list[i], list);
        }else{
            memo = list[i];
        }
    }
    return memo;
};

//测试
/*var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);*/

/**
 * reducRight是从右侧开始组合的元素的reduce函数，如果存在JavaScript 1.8版本的reduceRight，则用其代替。
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   memo    
 * @param  {Object}   [context] 
 */
_.reduceRight = function(list, fn, memo, context) {
    for (var i = list.length-1; i > -1; i--) {
        if(memo){
            memo = fn.call(context, memo, list[i], list);
        }else{
            memo = list[i];
        }
    }
    return memo;
};

//测试
/*var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat);*/

/**
 * 在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，如果没有值传递给测试迭代器将返回undefined。 如果找到匹配的元素，函数将立即返回，不会遍历整个list。
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   [context] 
 */
_.find = function(list, fn, context) {
    var result;
    for (var i = 0; i < list.length; i++) {
        if(fn.call(context, list[i],i,list)){
            result = list[i];
            break;
        }
    }
    return result;
};

//测试
/*var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);*/

/**
 * 遍历list中的每个值，返回包含所有通过predicate真值检测的元素值。
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   [context] 
 */
_.filter = function(list, fn, context) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if(fn.call(context, list[i],i,list)){
            result.push(list[i]);
        }
    }
    return result.length > 0 ? result : undefined;
};

//测试
/*var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);*/

/**
 * 遍历list中的每一个值，返回一个数组，这个数组包含properties所列出的属性的所有的 键 - 值对。
 * @param  {Array} list       
 * @param  {Object} properties 
 */
_.where = function(list, properties) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var isContains = true;
        var value = list[i];
        for(var j in properties){
            if(value[j] !== properties[j]){
                isContains = false;
                break;
            }
        }
        if(isContains){
            result.push(value);
        }
    }
    return result.length > 0 ? result : undefined;
}

//测试
/*var listOfPlays =  [
    {title: "Cymbeline", author: "Shakespeare", year: 1000},
    {title: "Cymbeline", author: "Hello", year: 1611},
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}
];
var result = _.where(listOfPlays, {author: "Shakespeare", year: 1611});
console.log(result);*/

/**
 * 遍历整个list，返回匹配 properties参数所列出的所有 键 - 值 对的第一个值。
 * @param  {Array} list       
 * @param  {Object} properties 
 */
_.findWhere = function(list, properties) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var isContains = true;
        var value = list[i];
        for(var j in properties){
            if(value[j] !== properties[j]){
                isContains = false;
                break;
            }
        }
        if(isContains){
            result.push(value);
            break;
        }
    }
    return result.length > 0 ? result : undefined;
};

//测试
/*var listOfPlays =  [
    {title: "Cymbeline", author: "Shakespeare", year: 1000},
    {title: "Cymbeline", author: "Hello", year: 1611},
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}
];
var result = _.findWhere(listOfPlays, {author: "Shakespeare", year: 1611});
console.log(result);*/

/**
 * 返回list中没有通过predicate真值检测的元素集合，与filter相反。
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   [context] 
 */
_.reject = function(list, fn, context) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if(!fn.call(context, list[i],index,list)){
            result.push(list[i]);
        }
    }
    return result.length > 0 ? result : undefined;
};

//测试
/*var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);*/

/**
 * 如果list中的所有元素都通过predicate的真值检测就返回true。
 * @param  {Array}   list    
 * @param  {Function} [fn]      
 * @param  {Object}   [context] 
 */
_.every = function(list, fn, context) {
    var result = true;
    for (var i = 0; i < list.length; i++) {
        var condition = fn ? fn.call(context,list[i]) : list[i];
        if(!condition){
            result = false;
            break;
        }
    }
    return result;
};

//测试
/*var result = _.every([true, 1, null, 'yes']);
console.log(result);*/

/**
 * 如果list中有任何一个元素通过 predicate 的真值检测就返回true。
 * @param  {Array}   list    
 * @param  {Function} [fn]      
 * @param  {Object}   [context] 
 */
_.some = function(list, fn, context) {
    var result = false;
    for (var i = 0; i < list.length; i++) {
        var condition = fn ? fn.call(context,list[i]) : list[i];
        if(condition){
            result = true;
            break;
        }
    }
    return result;
};

//测试
/*var result = _.some([true, 1, null, 'yes']);
console.log(result);*/

/**
 * 如果list包含指定的value则返回true（愚人码头注：使用===检测）。
 * @param  {Array} list      
 * @param  {Object} value     
 * @param  {Number} [fromIndex] 
 */
_.contains = function(list, value, fromIndex) {
    var result = true,
        indexOf = list.indexOf(value);
    if (!~indexOf || (fromIndex && fromIndex > indexOf + 1)) {
        result = false;
    }
    return result;
};

//测试
/*var result = _.contains([1, 2, 3], 3);
console.log(result);*/

/**
 * 在list的每个元素上执行methodName方法。
 * @param  {Array} list       
 * @param  {String} methodName 
 * @param  {Object} [*arguments] 
 */
_.invoke = function(list, methodName) {
    var _args = [].slice.call(arguments, 2);
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var invokeResult = eval('list[i].' + methodName + '(' + _args.join(',') + ')');
        result.push(invokeResult);
    }
    return result;
};

//测试
/*var result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
console.log(result);
*/

/**
 * pluck也许是map最常使用的用例模型的简化版本，即萃取数组对象中某属性值，返回一个数组。
 * @param  {Array} list         
 * @param  {String} propertyName 
 */
_.pluck = function(list, propertyName) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result.push(list[i][propertyName]);
    }
    return result;
};


//测试
/*var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var result = _.pluck(stooges, 'name');
console.log(result);*/

/**
 * 返回list中的最大值。
 * @param  {Array}   list    
 * @param  {Function} [fn]      
 * @param  {Object}   [context] 
 */
_.max = function(list, fn, context) {
    if (fn) {
        var hash = {};
        for (var i = 0; i < list.length; i++) {
            hash[fn.call(context, list[i])] = list[i];
        }
        var maxValue = Object.keys(hash).sort(function(a, b) {
            return a > b;
        }).pop();

        result = hash[maxValue];
    } else {
        result = list.sort(function(a, b) {
            return a > b;
        }).pop();
    }
    return result;
};

//测试
/*var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var maxValue = _.max(stooges, function(stooge){ return stooge.age; });
console.log(maxValue);*/

/**
 * 返回list中的最小值。
 * @param  {Array}   list    
 * @param  {Function} [fn]      
 * @param  {Object}   [context] 
 */
_.min = function(list, fn, context) {
    if (fn) {
        var hash = {};
        for (var i = 0; i < list.length; i++) {
            hash[fn.call(context, list[i])] = list[i];
        }
        var minValue = Object.keys(hash).sort(function(a, b) {
            return a > b;
        }).shift();
        result = hash[maxValue];
    } else {
        result = list.sort(function(a, b) {
            return a > b;
        }).shift();
    }
    return result;
};

//测试
/*var numbers = [10, 5, 100, 2, 1000];
var minValue = _.min(numbers);
console.log(minValue);*/

/**
 * 返回一个排序后的list拷贝副本。
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   [context] 
 */
_.sortBy = function(list, fn, context) {
    var result = [];
    if (fn.constructor === String) {
        result = list.sort(function(a, b) {
            return a[fn] > b[fn];
        });
    }
    if (fn.constructor === Function) {
        result = list.sort(fn);
    }
    return result;
};


//测试
/*var result = _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
console.log(result);
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var result = _.sortBy(stooges, 'name');
console.log(result);*/

/**
 * 把一个集合分组为多个集合，通过 iterator 返回的结果进行分组. 如果 iterator 是一个字符串而不是函数, 那么将使用 iterator 作为各元素的属性名来对比进行分组.
 * @param  {Array}   list    
 * @param  {Function} fn      
 * @param  {Object}   [context] 
 */
_.groupBy = function(list, fn, context) {
    var result = {};
    for (var i = 0; i < list.length; i++) {
        if (fn.constructor === String) {
            var key = list[i][fn];
        }
        if (fn.constructor === Function) {
            var key = fn.call(context, list[i], i, list);
        }
        if (!result[key]) {
            result[key] = [list[i]];
        } else {
            result[key].push(list[i]);
        }
    }
    return result;
};


//test
/*var result = _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
console.log(result);
var result = _.groupBy(['one', 'two', 'three'], 'length');
console.log(result);*/

/**
 * 给定一个list，和 一个用来返回一个在列表中的每个元素键 的iterator 函数（或属性名）， 返回一个每一项索引的对象
 * @param  {Array} list
 * @param  {Function} fn
 * @param  {Object} [context]
 */
_.indexBy = function(list, fn, context) {
    var result = {};
    for (var i = 0; i < list.length; i++) {
        if (fn.constructor === String) {
            result[list[i][fn]] = list[i];
        }
        if (fn.constructor === Function) {
            result[fn.call(context, list[i], i, list)] = list[i]
        }
    }
    return result;
};



//test
/*var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var result = _.indexBy(stooges, 'age');
console.log(result);
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var result = _.indexBy(stooges, function(stooge){
    return stooge.age;
});
console.log(result);*/

/**
 * 排序一个列表组成一个组，并且返回各组中的对象的数量的计数。类似groupBy，但是不是返回列表的值，而是返回在该组中值的数目。
 * @param  {Array} list
 * @param  {Function} fn
 * @param  {Object} [context]
 */
_.countBy = function(list, fn, context) {
    var result = {};
    for (var i = 0; i < list.length; i++) {
        var returnValue = fn.call(context, list[i], i, list);
        result[returnValue] = result[returnValue] ? result[returnValue] + 1 : 1
    }
    return result;
};


//test
/*var result = _.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
console.log(result);*/

/**
 * 返回一个随机乱序的 list 副本, 使用 Fisher-Yates shuffle 来进行随机乱序.
 * @param  {Array} list
 */
_.shuffle = function(list) {
    var result = [],
        len = list.length;
    for (var i = len - 1; i > -1; i--) {
        var randomIndex = Math.floor(Math.random() * i);
        result.push(list[randomIndex]);
        list.splice(randomIndex, 1);
    }
    return result;
};

//test
/*var result = _.shuffle([1, 2, 3, 4, 5, 6]);
console.log(result);*/

/**
 * 从 list中产生一个随机样本。传递一个数字表示从list中返回n个随机元素。否则将返回一个单一的随机项。
 * @param  {Array} list
 * @param  {Number} [n]
 */
_.sample = function(list, n) {
    var result = [],
        len = list.length,
        iterateeCount = arguments[1] ? arguments[1] : 1;
    for (var i = len - 1; i > -1; i--) {
        if (result.length >= iterateeCount) break;
        var randomIndex = Math.floor(Math.random() * i);
        result.push(list[randomIndex]);
        list.splice(randomIndex, 1);
    }
    return result;
};


//test
/*var result = _.sample([1, 2, 3, 4, 5, 6]);
console.log(result);
var result = _.sample([1, 2, 3, 4, 5, 6],3);
console.log(result);*/

/**
 * 把list(任何可以迭代的对象)转换成一个数组，在转换 arguments 对象时非常有用。
 * @param  {link Array} list
 */
_.toArray = function(list) {
    return [].slice.call(list);
};

//test
/*var result = (function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
console.log(result);*/

/**
 * 返回list的长度。
 * @param  {Array} list
 */
_.size = function(list){
    var result = -1;
    if(list.constructor === Array){
        result = list.length;
    }
    if(list.constructor === Object){
        result = Object.keys(list).length;
    }
    return result;
};

//test
/*var length = _.size({one: 1, two: 2, three: 3});
console.log(length);*/

/**
 * 拆分一个数组（array）为两个数组：  第一个数组其元素都满足predicate迭代函数， 而第二个的所有元素均不能满足predicate迭代函数。
 * @param  {Array} list
 * @param  {Function} fn
 */
_.partition = function(list, fn){
    var matchConditionArray = [];
    var mismatchConditionArray = [];
    for(var i=0;i<list.length;i++){
        if(fn.call(null,list[i])){
            matchConditionArray.push(list[i]);
        }else{
            mismatchConditionArray.push(list[i]);
        }
    }
    return [matchConditionArray,mismatchConditionArray];
};

//test
/*var result = _.partition([0, 1, 2, 3, 4, 5], function(num){
    return num % 2 == 0;
});
console.log(result);*/
