var _ = {};

/**
 * 遍历list中的所有元素，按顺序用遍历输出每个元素。
 * @param  {Array,Object}   list    
 * @param  {Function} fn
 * @param  {Object}   context [可选]
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


