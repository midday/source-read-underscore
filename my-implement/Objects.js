var _ = {};

/**
 * 检索object拥有的所有可枚举属性的名称。
 * @param  {Object} object 
 */
_.keys = function(object) {

};

//test
/*var result = _.keys({one: 1, two: 2, three: 3});
console.log(result);*/

/**
 * 检索object拥有的和继承的所有属性的名称。
 * @param  {Object} object 
 */
_.allKeys = function(object) {

};

//test
/*function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
var result = _.allKeys(new Stooge("Moe"));
console.log(result);*/

/**
 * 返回object对象所有的属性值。
 * @param  {Object} object 
 */
_.values = function(object) {

};

//test
/*var result = _.values({one: 1, two: 2, three: 3});
console.log(result);*/

/**
 * 它类似于map，但是这用于对象。转换每个属性的值。
 * @param  {Object} object    
 * @param  {Function} fn  
 * @param  {Object} [context] 
 */
_.mapObject = function(object, fn, context) {

};

//test
/*var result = _.mapObject({start: 5, end: 12}, function(val, key) {
  return val + 5;
});
console.log(result);*/

/**
 * 把一个对象转变为一个[key, value]形式的数组
 * @param  {Object} object 
 */
_.pairs = function(object) {

};

//test
/*var result = _.pairs({one: 1, two: 2, three: 3});
console.log(result);*/

/**
 * 返回一个object副本，使其键（keys）和值（values）对换。对于这个操作，必须确保object里所有的值都是唯一的且可以序列号成字符串.
 * @param  {Object} object 
 */
_.invert = function(object) {

};

//test
/*var result = _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
console.log(result);*/

/**
 * 创建具有给定原型的新对象， 可选附加props 作为 own的属性。 基本上，和Object.create一样， 但是没有所有的属性描述符。
 * @param  {Object} prototype 
 * @param  {Object} props     
 */
_.create = function(prototype, props) {

};

//test
/*var moe = _.create(Stooge.prototype, {name: "Moe"});
console.log(moe);*/

/**
 * 返回一个对象里所有的方法名, 而且是已经排序的 — 也就是说, 对象里每个方法(属性值是一个函数)的名称.
 * @param  {Object} object 
 */
_.functions = function(object){

};

//test
/*var result = _.functions(_);
console.log(result);*/

/**
 * Similar to _.findIndex but for keys in objects. Returns the key where the predicate truth test passes or undefined.
 * @param  {Object} object    
 * @param  {Function} fn 
 * @param  {Object} [context] 
 */
_.findKey = function(object, fn, context) {

};

//test


/**
 * 复制source对象中的所有属性覆盖到destination对象上，并且返回 destination 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉(如果有重复).
 * @param  {Object} destination 
 * @param  {Objects} *sources    
 */
_.extend = function(destination){

};

//test
/*var result = _.extend({name: 'moe'}, {age: 50});
console.log(result);*/

/**
 * 类似于 extend, 但只复制自己的属性覆盖到目标对象。（愚人码头注：不包括继承过来的属性）
 * @param  {Object} destination 
 * @param  {Objects} *sources    
 */
_.extendOwn = function(destination){

};

//test


/**
 * 返回一个object副本，只过滤出keys(有效的键组成的数组)参数指定的属性值。或者接受一个判断函数，指定挑选哪个key。
 * @param  {Object} object 
 * @param  {Objects} *keys  
 */
_.pick = function(object) {

};

//test
/*var result = _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
console.log(result);
var result = _.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
console.log(result);*/

/**
 * 返回一个object副本，只过滤出除去keys(有效的键组成的数组)参数指定的属性值。 或者接受一个判断函数，指定忽略哪个key。
 * @param  {Object} object 
 * @param  {Objects} *keys  
 */
_.omit = function(object) {

};

//test
/*var result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
console.log(result);
var result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
console.log(result);*/

/**
 *用defaults对象填充object 中的undefined属性。 并且返回这个object。一旦这个属性被填充，再使用defaults方法将不会有任何效果。（感谢@一任风月忆秋年的拍砖）
 * @param  {Object} object    
 * @param  {Objects} *defaults 
 */
_.defaults = function(object) {

};

//test
/*var iceCream = {flavor: "chocolate"};
var result = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
console.log(result);*/

/**
 * 创建 一个浅复制（浅拷贝）的克隆object。任何嵌套的对象或数组都通过引用拷贝，不会复制。
 * @param  {Object} object 
 */
_.clone = function(object) {

};

//test
/*var result = _.clone({name: 'moe'});
console.log(result);*/

/**
 * 用 object作为参数来调用函数interceptor，然后返回object。这种方法的主要意图是作为函数链式调用 的一环, 为了对此对象执行操作并返回对象本身。
 * @param  {Object} object      
 * @param  {Object} interceptor 
 */
_.tap = function(object, interceptor) {

};

//test
/*var result = _.chain([1,2,3,200])
  .filter(function(num) { return num % 2 == 0; })
  .tap(alert)
  .map(function(num) { return num * num })
  .value();
console.log(result);
*/
/**
 * 对象是否包含给定的键吗？等同于object.hasOwnProperty(key)，但是使用hasOwnProperty 函数的一个安全引用，以防意外覆盖。
 * @param  {Object}  object 
 * @param  {String}  key    
 */
_.has = function(object, key) {

};

//test
/*var result = _.has({a: 1, b: 2, c: 3}, "b");
console.log(result);*/

/**
 * 返回一个断言函数，这个函数会给你一个断言可以用来辨别给定的对象是否匹配attrs指定键/值属性。
 * @param  {Object} attrs 
 */
_.matcher = function(attrs) {

};

//test
/*var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);
console.log(readyToGoList);*/

/**
 * 返回一个函数，这个函数返回任何传入的对象的key属性。
 * @param  {String} key 
 */
_.property = function(key) {

};

//test
/*var stooge = {name: 'moe'};
var result = 'moe' === _.property('name')(stooge);
console.log(result);*/

/**
 * 和_.property相反。需要一个对象，并返回一个函数,这个函数将返回一个提供的属性的值。
 * @param  {Object} object 
 */
_.propertyOf = function(object) {

};

//test
/*var stooge = {name: 'moe'};
var result = _.propertyOf(stooge)('name');
console.log(result);*/

/**
 * 执行两个对象之间的优化深度比较，确定他们是否应被视为相等。
 * @param  {Object}  object 
 * @param  {Object}  other  
 */
_.isEqual = function(object, other) {

};

//test
/*var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
var result = _.isEqual(stooge, clone);
console.log(result);*/

/**
 * 告诉你properties中的键和值是否包含在object中。
 * @param  {Object}  object     
 * @param  {Object}  properties 
 */
_.isMatch = function(object, properties) {

};

//test
/*var stooge = {name: 'moe', age: 32};
var result = _.isMatch(stooge, {age: 32});
console.log(result);*/

/**
 * 如果object 不包含任何值(没有可枚举的属性)，返回true。 对于字符串和类数组（array-like）对象，如果length属性为0，那么_.isEmpty检查返回true。
 * @param  {Object}  object 
 */
_.isEmpty = function(object) {

};

//test
/*var result = _.isEmpty([1, 2, 3]);
console.log(result);
var result = _.isEmpty({});
console.log(result);*/

/**
 * 如果object是一个DOM元素，返回true。
 * @param  {Object}  object 
 */
_.isElement = function(object) {

};

//test
/*var result = _.isElement(jQuery('body')[0]);
console.log(result);*/

/**
 * 如果object是一个数组，返回true。
 * @param  {Object}  object 
 */
_.isArray = function(object) {

};

//test
/*var result = (function(){ return _.isArray(arguments); })();
console.log(result);
var result = _.isArray([1,2,3]);
console.log(result);*/

/**
 * 如果object是一个对象，返回true。需要注意的是JavaScript数组和函数是对象，字符串和数字不是。
 * @param  {Object}  value 
 */
_.isObject = function(value) {

};

//test
/*var result = _.isObject({});
console.log(result);
var result = _.isObject(1);
console.log(result);*/

/**
 * 如果object是一个参数对象，返回true。
 * @param  {Object}  object 
 */
_.isArguments = function(object) {

};

//test
/*var result = (function(){ return _.isArguments(arguments); })(1, 2, 3);
console.log(result);
var result = _.isArguments([1,2,3]);
console.log(result);*/

/**
 * 如果object是一个函数（Function），返回true。
 * @param  {Object}  object 
 */
_.isFunction = function(object) {

};

//test
/*var result = _.isFunction(console.log);
console.log(result);*/

/**
 * 如果object是一个字符串，返回true。
 * @param  {Object}  object 
 */
_.isString = function(object) {

};

//test
/*var result = _.isString("moe");
console.log(result);*/

/**
 * 如果object是一个数值，返回true (包括 NaN)。
 * @param  {Object}  object 
 */
_.isNumber = function(object) {

};

//test
/*var result = _.isNumber(8.4 * 5);
console.log(result);*/

/**
 * 如果object是一个有限的数字，返回true。
 * @param  {Object}  object 
 */
_.isFinite = function(object) {

};

//test
/*var result = _.isFinite(-101);
console.log(result);
var result = _.isFinite(-Infinity);
console.log(result);*/

/**
 * 如果object是一个布尔值，返回true，否则返回false。
 * @param  {Object}  object 
 */
_.isBoolean = function(object) {

};

//test
/*var result = _.isBoolean(null);
console.log(result);*/

/**
 * Returns true if object is a Date.
 * @param  {Object}  object 
 */
_.isDate = function(object){

};

//test
/*var result = _.isDate(new Date());
console.log(result);*/

/**
 * 如果object是一个正则表达式，返回true。
 * @param  {Object}  object 
 */
_.isRegExp = function(object) {

};

//test
/*var result = _.isRegExp(/moe/);
console.log(result);*/

/**
 * 如果object继承至 Error 对象，那么返回 true。
 * @param  {Object}  object 
 */
_.isError = function(object) {

};

//test
/*try {
  throw new TypeError("Example");
} catch (o_O) {
  var result = _.isError(o_O)
  console.log(result);
}*/

/**
 * 如果object是 NaN，返回true。 
 * @param  {Object}  object 
 */
_.isNaN = function(object) {

};

//test
/*var reuslt = _.isNaN(NaN);
console.log(result);
var result = _.isNaN(undefined);
console.log(result);
var result = _.isNaN(undefined);
console.log(result);
*/
/**
 * 如果object的值是 null，返回true。
 * @param  {Object}  object 
 */
_.isNull = function(object) {

};

//test
/*var result = _.isNull(null);
console.log(result);
var result = _.isNull(undefined);
console.log(result);
*/
/**
 * 如果value是undefined，返回true。
 * @param  {Object}  value 
 */
_.isUndefined = function(value) {

};

//test
/*var result= = _.isUndefined(window.missingVariable);
console.log(result);
*/
