var _ = {};

/**
 * 绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object.任意可选参数 arguments 可以传递给函数 function , 可以填充函数所需要的参数,这也被称为 partial application。对于没有结合上下文的partial application绑定，请使用partial。 
 * @param  {Function} fn         
 * @param  {Object}   object     
 * @param  {}   *arguments 
 */
_.bind = function(fn, object) {
    var _args = [].slice.call(arguments, 2);
    return function() {
        return fn.apply(object, _args.concat([].slice.call(arguments)));
    };
};

//test
/*var func = function(greeting){ return greeting + ': ' + this.name };
func = _.bind(func, {name: 'moe'}, 'hi');
console.log(func());*/

/**
 * 把methodNames参数指定的一些方法绑定到object上，这些方法就会在对象的上下文环境中执行。绑定函数用作事件处理函数时非常便利，否则函数被调用时this一点用也没有。methodNames参数是必须的。
 * @param  {Object} object       
 * @param  {[type]} *methodNames 
 */
_.bindAll = function(object) {
    var fns = [].slice.call(arguments, 1);
    for (var i = 0; i < fns.length; i++) {
        object[fns[i]] = _.bind(object[fns[i]], object);
    }
};

//test
/*var buttonView = {
  label  : 'underscore',
  onClick: function(){ alert('clicked: ' + this.label); },
  onHover: function(){ console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView, 'onClick', 'onHover');
$('#underscore_button').bind('click', buttonView.onClick);*/

/**
 * 局部应用一个函数填充在任意个数的 arguments，不改变其动态this值。和bind方法很相近。你可以传递_ 给arguments列表来指定一个不预先填充，但在调用时提供的参数。
 * @param  {Function} fn         
 * @param  {[type]}   *arguments 
 */
_.partial = function(fn) {
    var _args = [].slice.call(arguments, 1);
    return function() {
        var _innerArgs = [].slice.call(arguments);
        for (var i = 0; i < _args.length; i++) {
            if (_args[i] === _) {
                _args[i] = _innerArgs.shift();
            }
        }
        return fn.apply(null, _args.concat(_innerArgs));
    }
};

//test
/*var subtract = function(a, b) { return b - a; };
sub5 = _.partial(subtract, 5);
console.log(sub5(20));
subFrom20 = _.partial(subtract, _, 20);
console.log(subFrom20(5));*/


/**
 * Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。如果传递了 hashFunction 参数，就用 hashFunction 的返回值作为key存储函数的计算结果。hashFunction 默认使用function的第一个参数作为key。memoized值的缓存可作为返回函数的cache属性。
 * @param  {Function} fn             
 * @param  {[type]}   [hashFunction] 
 */
_.memoize = function(fn, hashFunction) {
    var cache = {};
    return function(key) {
        var key = hashFunction ? hashFunction.apply(null, arguments) : key;
        if (!cache[key]) {
            cache[key] = fn.apply(null, arguments);
        }
        return cache[key];
    };
};

//test
/*var fibonacci = _.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(4));*/

/**
 * 类似setTimeout，等待wait毫秒后调用function。如果传递可选的参数arguments，当函数function执行时， arguments 会作为参数传入。
 * @param  {Function} fn         
 * @param  {[type]}   wait       
 * @param  {[type]}   *arguments 
 */
_.delay = function(fn, wait) {
    var _args = [].slice.call(arguments, 2);
    setTimeout(function() {
        fn.apply(null, _args);
    }, wait);
};

//test
/*var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');*/

/**
 * 延迟调用function直到当前调用栈清空为止，类似使用延时为0的setTimeout方法。对于执行开销大的计算和无阻塞UI线程的HTML渲染时候非常有用。 如果传递arguments参数，当函数function执行时， arguments 会作为参数传入。
 * @param  {Function} fn         
 * @param  {[type]}   *arguments 
 */
_.defer = function(fn) {
    setTimeout(fn, 0);
};

//test
/*_.defer(function(){ console.log('deferred'); });
console.log('immediate')*/

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
 * @param  {Function} fn        
 * @param  {Number}   wait      
 * @param  {Object}   [options] 
 */
_.throttle = function(fn, wait, options) {
	return function(){

	};
};

//test
var throttled = _.throttle(function(){
	console.log(i);
}, 100);
$(window).scroll(throttled);


/**
 * 返回 function 函数的防反跳版本, 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。
 * @param  {Function} fn          
 * @param  {Nubmer}   wait        
 * @param  {Boolean}   [immediate] 
 */
_.debounce = function(fn, wait, immediate) {

};

//test

/**
 * 创建一个只能调用一次的函数。重复调用改进的方法也没有效果，只会返回第一次执行时的结果。 作为初始化函数使用时非常有用, 不用再设一个boolean值来检查是否已经初始化完成.
 * @param  {Function} fn 
 */
_.once = function(fn) {
    var count = 1;
    return function() {
        if (count < 2) {
            ++count;
            fn.apply(null, arguments);
        }
    };
};

//test
/*var initialize = _.once(function(){
	console.log(1);
});
initialize();
initialize();*/

/**
 * 创建一个函数, 只有在运行了 count 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。
 * @param  {Number}   count 
 * @param  {Function} fn    
 */
_.after = function(count, fn) {
    var num = 1;
    return function() {
        ++num;
        if (num > count) {
            fn.apply(null, arguments);
        }
    };
};

//test
/*var monthlyMeeting = _.after(4, function(){
	console.log('hello');
});
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();*/


/**
 * 创建一个函数,调用不超过count 次。 当count已经达到时，最后一个函数调用的结果将被记住并返回。
 * @param  {Number}   count 
 * @param  {Function} fn    
 */
_.before = function(count, fn) {
    var num = 1;
    return function() {
        if (num < count) {
            ++num;
            fn.apply(null, arguments);
        }
    };
};

//test
/*var monthlyMeeting = _.before(4, function(){
	console.log('hello');
});
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();*/

/**
 * 将第一个函数 function 封装到函数 wrapper 里面, 并把函数 function 作为第一个参数传给 wrapper. 这样可以让 wrapper 在 function 运行之前和之后 执行代码, 调整参数然后附有条件地执行.
 * @param  {Function} fn      
 * @param  {Function}   wrapper 
 */
_.wrap = function(fn, wrapper) {
    return function() {
        return wrapper.call(null, fn);
    };
};

//test
/*var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
console.log(hello())*/

/**
 * 返回一个新的predicate函数的否定版本。
 * @param  {Function} fn 
 */
_.negate = function(fn) {
    return function() {
        return !fn.apply(this, arguments);
    }
};

//test
/*var isFalsy = _.negate(Boolean);
console.log(isFalsy.toString());*/

/**
 * 返回函数集 functions 组合后的复合函数, 也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行. 以此类推. 在数学里, 把函数 f(), g(), 和 h() 组合起来可以得到复合函数 f(g(h()))。
 * @param  {[type]} *fns 
 */
_.compose = function() {
    var fns = [].slice.call(arguments);
    return function() {
        var fnExecResult = [].slice.call(arguments);
        for (var i = fns.length - 1; i > -1; i--) {
            fnExecResult = fns[i].call(null, fnExecResult);
        };
        return fnExecResult;
    };
};

//test
/*var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement + "!"; };
var welcome = _.compose(greet, exclaim);
console.log(welcome('mom'));*/
