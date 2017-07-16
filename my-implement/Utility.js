var _ = {};
/**
 * 放弃Underscore 的控制变量"_"。返回Underscore 对象的引用。
 */
_.noConflict = function() {
    var result = _;
    _ = undefined;
    return result;
}

//test
/*var underscore = _.noConflict();
console.log(underscore);
console.log(_);*/

/**
 * 返回与传入参数相等的值. 相当于数学里的: f(x) = x;这个函数看似无用, 但是在Underscore里被用作默认的迭代器iterator.
 * @param  {Object} value 
 */
_.identity = function(value) {
    return value;
};

//test
/*var stooge = {name: 'moe'};
var result = stooge === _.identity(stooge);
console.log(result);*/


/**
 * 创建一个函数，这个函数 返回相同的值 用来作为_.constant的参数。
 * @param  {Object} value 
 */
_.constant = function(value) {
    return function() {
        return value;
    }
};

//test
/*var stooge = {name: 'moe'};
var result = stooge === _.constant(stooge)();
console.log(result);*/


/**
 * 返回undefined，不论传递给它的是什么参数。 可以用作默认可选的回调参数。
 * @param  {Object} value 
 */
_.noop = function(value) {
    return undefined;
};

//test
/*var result = _.noop();
console.log(result);*/

/**
 * 调用给定的迭代函数n次,每一次调用iteratee传递index参数。生成一个返回值的数组。 
 * @param  {Number} n         
 * @param  {Function} fn  
 * @param  {Object} [context] 
 */
_.times = function(n, fn) {
    var result = [];
    var context = arguments[2] ? arguments[2] : this;
    for (var i = 0; i < n; i++) {
        result.push(fn.call(context, i));
    }
    return result;
};

//test
/*var result = _.times(3,function(n){ 
	return n; 
});
console.log(result);*/

/**
 * 返回一个min 和 max之间的随机整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。
 * @param  {Number} min 
 * @param  {Number} max 
 */
_.random = function(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};


//test
/*var result = _.random(0, 1);
console.log(result);*/


/**
 * 允许用您自己的实用程序函数扩展Underscore。传递一个 {name: function}定义的哈希添加到Underscore对象，以及面向对象封装。
 * @param  {Object} object 
 */
_.mixin = function(object) {
    for (var i in object) {
        _[i] = object[i];
    }
};

//test
/*_.mixin({
    capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
var result = _.capitalize('hello');
console.log(result);
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

/**
 * 一个重要的内部函数用来生成可应用到集合中每个元素的回调， 返回想要的结果 - 无论是等式，任意回调，属性匹配，或属性访问。 
 * @param  {String} value     
 * @param  {Object} [context] 
 */
_.iteratee = function(value, context) {
    return function(val, key, list) {
        return val[value];
    }
};

//test
/*var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var result = _.map(stooges, _.iteratee('age'));
console.log(result);*/

/**
 * [uniqueId description]
 * @param  {[type]} [prefix] 
 * @return {[type]}          
 */
var idCounter = 0;
_.uniqueId = function(prefix) {
    ++idCounter;
    return prefix ? prefix + idCounter : idCounter;
};

//test
/*var result = _.uniqueId('id_');
console.log(result);
var result = _.uniqueId('id_');
console.log(result);
*/

/**
 * 转义HTML字符串，替换&, <, >, ", ', 和 /字符。
 * @param  {String} string 
 */
_.escape = function(string) {
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };
    return string.replace(/&|<|>|"|'|`/g, function(val) {
        return escapeMap[val];
    });
};

//test
/*var result = _.escape('Curly, Larry & Moe');
console.log(result);*/

/**
 * 和escape相反。转义HTML字符串，替换&, &lt;, &gt;, &quot;, &#96;, 和 &#x2F;字符。
 * @param  {String} string
 */
_.unescape = function(string) {
    var escapeMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        "&#x27;": "'",
        '&#x60;': '`'
    };
    return string.replace(/&amp;|&lt;|&gt;|&quot;|&#x27;|&#x60;/g, function(val) {
        return escapeMap[val];
    });
};

//test
/*var result = _.unescape('Curly, Larry &amp; Moe');
console.log(result);*/

/**
 * 如果指定的property 的值是一个函数，那么将在object上下文内调用它;否则，返回它。如果提供默认值，并且属性不存在，那么默认值将被返回。如果设置defaultValue是一个函数，它的结果将被返回。
 * @param  {Object} object         
 * @param  {String|Function} property
 * @param  {String} [defaultValue] 
 */
_.result = function(object, property, defaultValue) {
    var result;
    if (property.constructor === Function) {
        property = property.call(object);
    }
    for (var i in object) {
        if (i === property) {
            if (object[i].constructor === Function) {
                object[i] = object[i].call(object);
            }
            result = object[i];
            break;
        } else {
            if (defaultValue) {
                result = defaultValue
                break;
            }
        }
    }

    return result;
};


//test
/*var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
var result = _.result(object, 'cheese');
console.log(result);
var result = _.result(object, 'stuff');
console.log(result);
var result = _.result(object, 'meat', 'ham');
console.log(result);*/


/**
 * 一个优化的方式来获得一个当前时间的整数时间戳。可用于实现定时/动画功能。
 */
_.now = function() {
    return new Date().getTime();
};

//test
/*var result = _.now();
console.log(result);*/

/**
 * 将 JavaScript 模板编译为可以用于页面呈现的函数, 对于通过JSON数据源生成复杂的HTML并呈现出来的操作非常有用。 模板函数可以使用 <%= … %>插入变量, 也可以用<% … %>执行任意的 JavaScript 代码。 如果您希望插入一个值, 并让其进行HTML转义,请使用<%- … %>。 当你要给模板函数赋值的时候，可以传递一个含有与模板对应属性的data对象 。 如果您要写一个一次性的, 您可以传对象 data 作为第二个参数给模板 template 来直接呈现, 这样页面会立即呈现而不是返回一个模板函数. 参数 settings 是一个哈希表包含任何可以覆盖的设置 _.templateSettings.
 * @param  {String} templateString 
 * @param  {Object} settings       
 */
_.template = function(templateString, settings) {
	if(!settings){
		settings = {interpolate: /\{\{(.+?)\}\}/g};
	}
	var cache = {};
    return function(data) {
        var regGet = settings.interpolate,
            regGetEscape = /\<\%\-(.+?)\%\>/g,
            regTrim = /^\s+|\s+$/g;
        return templateString.replace(regGet, function($1, $2) {
            return data[$2.replace(regTrim, "")];
        }).replace(regGetEscape, function($1, $2) {
            return _.escape(data[$2.replace(regTrim, "")]);
        });
    }
};

//test
/*var compiled = _.template("hello: <%= name %>");
var result = compiled({ name: 'moe' });
console.log(result);
var template = _.template("<b><%- value %></b>");
var result = template({ value: '<script>' });
console.log(result);
var template = _.template("Hello {{ name }}!", {
    interpolate: /\{\{(.+?)\}\}/g
});
var result = template({ name: "Mustache" });
console.log(result);
*/
